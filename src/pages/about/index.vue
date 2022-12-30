<script setup lang="ts">
  import { useHead } from '@vueuse/head'
  import { gsap } from 'gsap';
  import { onMounted, onBeforeUnmount, ref } from 'vue';

  useHead({
    title: 'COMOMAYA - About',
    meta: [
      {
        name: 'COMOMAYA',
        content: 'About',
      },
    ],
  })

let tl: GSAPTimeline

const width = ref(0)

function resize() {
  width.value = window.innerWidth;
}

onMounted(() => {

  window.addEventListener('resize', resize)

  resize();

  const split: null | NodeListOf<HTMLSpanElement> = document.querySelectorAll('.split span');
    if (split) {
      const tl = gsap.timeline();
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
});

	onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
	})
</script>

<template>
  <main class="relative bg-black mx-auto flex flex-col justify-center pt-10 md:pt-20">
    <section class="flex flex-col justify-center min-h-screen py-10 md:mx-40">
      <h2 class="text-beige mx-5 md:mx-0 font-semibold tracking-widest mb-5">HELLO</h2>
      <h1 class="split leading-10 mb-5 mx-5 md:mx-0 text-active text-4xl md:text-8xl font-semibold overflow-hidden">
        <span>We</span><span>are</span><strong><span>a</span><span>creative</span><span>boutique</span><span>agency</span></strong><span>and</span><span>we</span><strong><span>build</span><span>powerful</span><span>brands</span></strong></h1>
      <p class="text-white text-xl mx-5 md:mx-0"><strong>COMOMAYA</strong> exists in order to make international standards of branding & design more accessible to new and upcoming
      brands, business owners and start-ups alike. To provide the highest quality of work, by engaging some of the best
      international talent there is, but without the exhorbitant price tag that comes with hiring a top global agency. We are here to empower new business owners &amp; entrepreneurs with great design and powerful brands that tell a story…</p>
    </section>
    <div class="bg-white">

      <!--- RIDHI --->

      <section class="relative flex flex-col-reverse justify-center md:min-h-[40vh] my-12 md:my-24 bg-black md:flex-row-reverse">
        <div class="md:w-2/3 my-auto px-5 md:px-16 md:pr-12 lg:pr-52">
          <span class="relative my-10 md:mb-3 flex items-center">
            <h3 class="text-active text-2xl font-semibold tracking-widest text-left">
              RIDHI&nbsp;SAIN
            </h3>
              <img class="md:ml-5 md:max-h-12 max-h-6 mx-5" src="/assets/awards.jpg" alt="Awards" />
          </span>
          <h2 class="drama mb-1 md:mb-5 text-4xl md:text-7xl overflow-hidden text-left text-beige">
            <strong>Owner</strong> & Director
          </h2>
          <p class="pb-10 text-lg text-left text-beige">
            Ridhi Sain is an award-winning brand, identity &amp; packaging designer, and founder of <strong>COMOMAYA</strong>. With a
            career spanning almost 20 years in the UK, Singapore &amp; India, Ridhi is ex-Assoc Creative Director and Design Director of
            international agencies such as Coley Porter Bell (WPP Group), Pi Global, Holmes &amp; Marchant and Cowan and has led and
            helped strategise, conceptualise &amp; direct creative work on many global brands. More recently, she has worked with
            smaller boutique clients ranging from luxury to corporate and digital start ups, bringing her vast experience and
            immense passion to help them through their creative journey.<br><br>You can check out some of her past work at 
            <a class='text-active cursor-pointer font-bold z-10' target="_blank" rel="noopener noreferrer" href='https://www.ridhisain.com'>
              www.ridhisain.com
            </a>
          </p>
        </div>
        <div class="w-full min-h-[15rem] md:w-1/2 overflow-hidden bg-beige">
          <img class="w-full h-full object-contain"
            srcset="/assets/Ridhi_1.jpg 2x, /assets/Ridhi.jpg 4x"
            sizes="(max-width: 768px) 2x, 4x"
            src="/assets/Ridhi.jpg" alt="Ridhi Sain" />
        </div>
      </section>

      <!--- THE PEOPLE --->
      <section v-if="width > 768" class="flex flex-col-reverse justify-center mt-24 bg-black md:flex-row">
        <h3 class="text-beige text-2xl py-5 mx-16">
          <strong>
          We have cherry picked some of best talent in the industry and
          across the globe as our project partners depending on the
          project, budget and skillset required.
          </strong>
        </h3>
      </section>

      <section class="flex flex-col justify-center md:min-h-[40vh] my-12 md:mt-0 md:mb-24 bg-beige md:flex-row">
        <div class="md:w-2/3 p-0 m-0">
          <img class="object-cover min-w-full min-h-full h-auto" src="/assets/globe.jpg" alt="globe" />
        </div>
        <section v-if="width <= 768" class="flex flex-col-reverse justify-center bg-black md:flex-row">
          <h3 class="text-beige text-2xl font-bold py-5 mx-16">We have cherry picked some of best talent in the industry and
            across the globe as our project partners depending on the
            project, budget and skillset required.</h3>
        </section>
        <div class="w-full min-h-[15rem] md:w-1/2 overflow-hidden bg-black">
          <img class="w-full h-full object-contain" src="/assets/theSquad.jpg" alt="The Squad" />
        </div>
      </section>

      <!--- WHAT WE OFFER --->
      
      <section class="bg-black md:flex-row-reverse relative flex flex-col-reverse justify-center md:min-h-[65vh] my-12 md:my-24">
        <div class="md:w-2/3 my-auto px-5 md:px-16 md:pr-12 lg:pr-52">
          <h2 class="drama my-5 mb-1 md:mb-5 text-4xl md:text-7xl overflow-hidden text-left text-beige">
            <strong>What</strong> we offer
          </h2>
          <p class="pb-10 text-lg text-left text-beige">
            We build global brands and boutique &amp; startup brands. We have a vibrant portfolio of clients ranging from FMCG to B2B
            and from corporate to boutique &amp; luxury brands spread across various categories. We are multidisciplinary and provide
            holistic services for your brand woven together from day&nbsp;one.
          </p>
        </div>
        <div class="w-full min-h-[15rem] md:w-1/2 overflow-hidden bg-black">
          <img class="w-full h-full object-cover" src="/assets/WhatWeOffer.jpg" alt="What we offer" />
        </div>
      </section>

      <!--- RMC --->

      <section class="bg-beige md:flex-row relative flex flex-col-reverse justify-center md:min-h-[40vh] my-12 md:my-24">
        <div class="md:w-2/3 my-auto px-5 md:px-16 md:pl-52">
          <h2 class="drama mb-1 md:mb-5 text-4xl md:text-7xl overflow-hidden text-right text-black">
            <strong>We are RMC</strong><br>certified
          </h2>
          <p class="pb-10 text-lg text-right text-black">
            We build global brands and boutique &amp; startup brands. We have a vibrant portfolio of clients ranging from FMCG to B2B
            and from corporate to boutique &amp; luxury brands spread across various categories. We are multidisciplinary and provide
            holistic services for your brand woven together from day&nbsp;one.
          </p>
        </div>
        <div class="w-full min-h-[15rem] md:w-1/2 overflow-hidden bg-black">
          <img class="w-full h-full object-cover" src="/assets/RMC_Stamp.jpg" alt="RMC Certified" />
        </div>
      </section>
    </div>
    <!-- <section class="flex flex-col justify-center p-10 py-20 md:py-52 md:p-52">
      <h4 class="text-white text-4xl md:text-8xl font-semibold text-center mb-10">Brands</h4>
      <p class="text-white text-center mb-10 md:mb-20">
        Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition organically grow the holistic world view of&nbsp;innovation.
      </p>
      <div class="grid grid-rows-3 md:grid-rows-2 gap-3 md:gap-10 grid-flow-col-dense">
        <img v-for="i in 12" class="md:w-52 h-auto" src="/assets/220212_Bobba_04_Website_Mobile.jpg" alt="">
      </div>
    </section> -->
    <section class="flex flex-col items-center justify-center p-20 md:px-72 md:p-72 bg-beige">
      <h3 class="text-active text-xl font-semibold tracking-widest mb-5">START A PROJECT</h3>
      <h2 class="font-semibold p-2 mb-5 text-4xl text-center md:text-5xl overflow-hidden">Ready to rock together?!</h2>
      <button class="relative z-0 my-16 w-fit bg-black text-beige py-3 px-5 hover:bg-beige hover:outline hover:text-black outline-black">
        <a href="/contact">Contact Us</a>
      </button>
    </section>
  </main>
</template>

<style lang="scss">
  .split span {
    opacity: 0;
    visibility: hidden;
    margin-right: 0.2em;
    display: inline-block;
    transform: translateY(400%);
    line-height: 0.6;
    font-family: "Barlow";
    font-weight: 700;
  }

  .drama {
    font-family: "Narziss";
  }
  .drama strong {
    font-weight: 800;
    font-family: "Barlow";
    letter-spacing: -0.015em;
  }
  .drama span {
    letter-spacing: -0.15em;
  }
</style>