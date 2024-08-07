<script setup lang="ts">
import { useHead } from '@unhead/vue'
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
  <main class="bg-stone-300">
    <div class="max-w-[1920px] mx-auto px-9 lg:px-20 xl:px-36 flex flex-col justify-center pt-24 md:pt-20">
    <div class="min-h-[50vh] md:min-h-[75vh] justify-center flex flex-col">
      <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3">CONTACT US</h1>
      <h2
        class="split max-w-4xl text-active text-5xl md:!leading-[7rem] md:text-6xl lg:text-9xl font-extrabold overflow-hidden">
        <span>let's</span><span>start</span>
        <span>a</span><span>conversation...</span>
      </h2>
      <div class="mt-5 text-2xl md:text-4xl flex flex-col">
        <!-- <p class="text-black font-semibold tracking-widest mb-3">CALL</p> -->
        <!-- <a class="z-10" href="tel:+6594245994">
            <p class="text-active font-semibold mb-5">+65 9424 5994</p>
          </a> -->
        <!-- <p class="text-black font-semibold tracking-widest mb-3">WHATSAPP</p> -->
        <a class="z-10" target="_blank" rel="noopener noreferrer" href="https://wa.me/6594245994">
          <p class="text-blue hover:text-active font-semibold mb-5">+65 9424 5994</p>
        </a>
        <!-- <p class="text-black font-semibold tracking-widest mb-3">WRITE TO US</p> -->
        <a class="z-10" href="mailto:ridhisain@comomaya.com">
          <p class="text-blue hover:text-active font-semibold mb-5">ridhisain@comomaya.com</p>
        </a>
      </div>
    </div>

    <form action="https://formspree.io/f/xqkjgbng" method="POST"
      class="flex flex-col flex-wrap w-full md:w-2/3 content-start">

      <label class="text-beige-lighter text-lg md:text-xl font-semibold" for="name">NAME</label>
      <input
        class="bg-stone-300 autofill:bg-stone-300 w-full text-black placeholder-stone-700 border-active text-lg md:text-xl border-b-4 mb-4 md:mb-7 focus:outline-none h-6 md:h-12"
        type="text" name="name">

      <label class="text-beige-lighter text-lg md:text-xl font-semibold" for="email">E-MAIL</label>
      <input
        class="bg-stone-300 autofill:bg-stone-300 text-black placeholder-stone-700 border-active text-lg md:text-xl border-b-4 mb-4 md:mb-7 focus:outline-none h-6 md:h-12"
        type="email" name="email">

      <label class="text-beige-lighter text-lg md:text-xl font-semibold" for="message">MESSAGE</label>
      <div contenteditable id="message"
        class="bg-stone-300 autofill:bg-stone-300 text-black placeholder-stone-700 border-active text-lg md:text-xl border-b-4 mb-4 md:mb-7 resize-none w-full min-h-[24px] md:min-h-[36px] focus:outline-none py-2"
        name="message"></div>
      <button
        class="z-0 relative bg-stone-300 text-blue outline-4 py-10 px-1 mr-auto my-12 -ml-2 h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold"
        type="submit">submit</button>
    </form>
    </div>
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
</style>