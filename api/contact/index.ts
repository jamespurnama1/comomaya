import * as nodemailer from 'nodemailer';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {


const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
          user: process.env.GMAIL_SEND,
          pass: process.env.GMAIL_PASSWORD,
      },
      secure: true,
  });

    const { name, email, message, phone } = request.body;

  await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              resolve(success);
          }
      });
  });

  const mailData = {
      from: {
        name,
        address: process.env.GMAIL_SEND!,
      },
      replyTo: email,
      to: process.env.GMAIL_RECEIVE,
      subject: `New Message on COMOMAYA.com - ${name}`,
      text: `${message}\nPlease reach at: ${phone} or ${email}`,
      html: `${message}<br>Please reach at: <a href="tel:${phone}">${phone}</a> or <a href="mailto:${email}">${email}</a>`,
  };

  await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err, info) => {
          if (err) {
              console.error(err);
              reject(err);
          } else {
              console.log(info);
              resolve(info);
          }
      });
  });

  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });

}
