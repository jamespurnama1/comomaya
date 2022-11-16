<script setup lang="ts">
  import { useHead } from '@vueuse/head'
  import { onMounted } from 'vue'
  import { gsap } from 'gsap'

  onMounted(() => {
    const split: null | NodeListOf<HTMLSpanElement> = document.querySelectorAll('.split span');
    if (split) {
      gsap.to(split, {
        y: "-0.1em",
        duration: 0.5,
        stagger: 0.2,
      })
      gsap.to(split, {
        autoAlpha: 1,
        stagger: 0.2,
      })
    }
  })

  useHead({
    title: 'COMOMAYA - Contact Us',
    meta: [
      {
        name: 'COMOMAYA',
        content: 'Contact Us',
      },
    ],
  })

</script>

<template>
  <main class="bg-black mx-auto flex flex-col justify-center pt-10 md:pt-20">
    <section class="flex flex-col mx-auto justify-center min-h-screen py-10">
      <h2 class="text-active mx-5 md:mx-0 font-semibold tracking-widest mb-3">CONTACT US</h2>
      <h1 class="split mx-5 md:mx-0 max-w-4xl text-white text-4xl md:text-9xl font-semibold overflow-hidden">
        <span>Let's</span><span>kickstart</span>
        <span>your</span><span>new</span><span>project...</span>
      </h1>
    </section>
    <section class="md:py-52 py-32 md:mx-52 flex md:flex-row mx-10 flex-col">
        <span class="mr-5 md:w-1/3">
          <p class="text-active font-semibold tracking-widest mb-3">GIVE US A CALL</p>
          <a href="tel:+6594245994"><p class="text-white font-semibold mb-5">+65 9424 5994</p></a>
          <p class="text-active font-semibold tracking-widest mb-3">WRITE TO US</p>
          <a href="mailto:ridhisain@comomaya.com"><p class="text-white font-semibold mb-5">ridhisain@comomaya.com</p></a>
        </span>
        
        <form action="https://formspree.io/f/xqkjgbng" method="POST" class="flex flex-wrap md:w-2/3 content-start">
            <span class="flex w-full">
              <input class="bg-black text-white placeholder-white border-white border-b mb-5 mr-5 w-1/2 focus:outline-none h-12" type="text" name="name" placeholder="Name">
              <input class="bg-black text-white placeholder-white border-white border-b mb-5 ml-5 w-1/2 focus:outline-none h-12" type="email" name="email" placeholder="E-mail">
            </span>
          <input class="bg-black text-white placeholder-white border-white border-b my-5 w-full focus:outline-none h-12" type="text" name="subject" placeholder="Subject">
            <textarea class="bg-black text-white placeholder-white border-white border-b my-5 resize-none w-full h-52 focus:outline-none" placeholder="Your Message" name="message"></textarea>
          <button class="z-0 relative bg-beige text-black py-3 px-1 w-full my-5 font-semibold h-12 hover:bg-black hover:text-beige hover:ring-beige" type="submit">Submit Message</button>
        </form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  .split span {
    opacity: 0;
    visibility: hidden;
    margin-right: 0.2em;
    display: inline-block;
    transform: translateY(400%);
    line-height: 0.5;
  }

  button {
    outline-style: solid;
  }
</style>