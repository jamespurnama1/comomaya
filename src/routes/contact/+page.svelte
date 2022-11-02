<script lang="ts">
	import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  onMount(() => {
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
</script>

<style>
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

<main class="bg-black mx-auto flex flex-col justify-center pt-10 md:pt-20">
  <section class="flex flex-col mx-auto justify-center min-h-screen py-10">
    <h2 class="text-active mx-5 md:mx-0 font-semibold tracking-widest mb-3">CONTACT US</h2>
    <h1 class="split mx-5 md:mx-0 max-w-4xl text-white text-4xl md:text-9xl font-semibold overflow-hidden">
      <span>Hey!</span><span>Let's</span><span>Kickstart</span>
      <span><br />Your</span><span>New</span><span>Project...</span></h1>
  </section>
  <section class="md:py-52 py-32 md:mx-52 flex md:flex-row mx-10 flex-col">
      <span class="mr-5 md:w-1/3">
        <p class="text-active font-semibold tracking-widest mb-3">GIVE US A CALL</p>
        <a href="tel:+14129342300"><p class="text-white font-semibold mb-5">+141-293-423-00</p></a>
      </span>
      <form action="https://formspree.io/f/xqkjgbng" method="POST" class="flex flex-wrap md:w-2/3 content-start">
          <span class="flex w-full">
            <input class="bg-black text-white placeholder-white border-white border-b mb-5 mr-5 w-1/2 focus:outline-none h-12" type="text" name="name" placeholder="Name">
            <input class="bg-black text-white placeholder-white border-white border-b mb-5 ml-5 w-1/2 focus:outline-none h-12" type="email" name="email" placeholder="E-mail">
          </span>
        <input class="bg-black text-white placeholder-white border-white border-b my-5 w-full focus:outline-none h-12" type="text" name="subject" placeholder="Subject">
          <textarea class="bg-black text-white placeholder-white border-white border-b my-5 resize-none w-full h-52 focus:outline-none" placeholder="Your Message" name="message"></textarea>
        <button class="z-0 relative selection:bg-white text-black py-3 px-1 w-full my-5 font-semibold h-12 hover:bg-black hover:text-white hover:ring-white" type="submit">Submit Message</button>
      </form> 
  </section>
</main>