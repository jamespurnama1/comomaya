import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}

// const transporter = nodemailer.createTransport({
//       port: 465,
//       host: "smtp.gmail.com",
//       auth: {
//           user: config.GMAIL_SEND,
//           pass: config.GMAIL_PASSWORD,
//       },
//       secure: true,
//   });

// export default function handler(
//   request: VercelRequest,
//   response: VercelResponse,
// ) {
//   response.status(200).json({
//     body: request.body,
//     query: request.query,
//     cookies: request.cookies,
//   });
// }

//     const body = await readBody(event)
//     const { name, email, message } = body;

//   await new Promise((resolve, reject) => {
//       // verify connection configuration
//       transporter.verify(function (error, success) {
//           if (error) {
//               console.log(error);
//               reject(error);
//           } else {
//               resolve(success);
//           }
//       });
//   });

//   const mailData = {
//       from: {
//         name,
//         address: config.GMAIL_SEND,
//       },
//       replyTo: email,
//       to: config.GMAIL_RECEIVE,
//       subject: `New Message on COMOMAYA.com - ${name}`,
//       text: message,
//       html: message,
//   };

//   await new Promise((resolve, reject) => {
//       // send mail
//       transporter.sendMail(mailData, (err, info) => {
//           if (err) {
//               console.error(err);
//               reject(err);
//           } else {
//               console.log(info);
//               resolve(info);
//           }
//       });
//   });

// //   res.status(200).json({ status: "OK" });
