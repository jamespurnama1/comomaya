<template>
  <main class="relative bg-stone-300 mx-auto flex flex-col justify-center pt-10">
    <section
      class="flex px-9 lg:px-20 xl:px-36 justify-center flex-col xl:flex-row xl:h-[75vh] 2xl:gap-16 overflow-hidden relative">
      <div class="xl:w-2/3 pt-10 xl:py-32">
        <h3 class="text-beige-lighter text-sm md:text-lg font-semibold tracking-widest text-left">
          WHAT WE&nbsp;OFFER
        </h3>
        <h2 class="drama xl:ml-[-10px] -mt-3 text-5xl md:text-8xl overflow-hidden text-left text-active font-medium">
          our <strong>services</strong>
        </h2>
        <h3 class="text-black !leading-snug md:text-xl 2xl:text-2xl xl:pb-10 lg:max-w-[570px]">
          We have a vibrant portfolio of clients ranging from FMCG to
          B2B and from corporate to boutique &amp; luxury brands spread across various categories including food,
          beverage, beauty, health &amp; wellness and hospitality. We are
          multidisciplinary and
          provide holistic services for your brand woven together from day&nbsp;one.
        </h3>
      </div>

      <!-- <section class="bg-stone-300 flex flex-col justify-center md:h-[50vw] lg:flex-row-reverse gap-8 w-full items-end"> -->
      <div
        class="relative w-full xl:w-1/2 p-0 m-0 bg-beige lg:my-auto flex justify-center lg:justify-end gap-3 text-beige-lighter h-[50vh] xl:h-full">
        <!-- <div class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-stone-300 via-transparent to-stone-300 z-10" /> -->
        <ul class="services-container overflow-hidden relative pb-10 h-[50vh] md:h-[75vh] w-full">
          <!-- <h4 class="font-bold md:text-5xl text-white mb-3">{{value }}</h4> -->
          <li v-for="value in services"
            class="service mb-1 font-extrabold text-blue text-3xl md:text-5xl 2xl:text-7xl text-right whitespace-nowrap">
            {{
            value }}<span class="text-active">.</span></li>
          <li v-for="value in services"
            class="service mb-1 font-extrabold text-blue text-3xl md:text-5xl 2xl:text-7xl text-right whitespace-nowrap">
            {{
            value }}<span class="text-active">.</span></li>
        </ul>
        <!-- <picture>
            <source srcset="/assets/services.png" type="image/png">
            <source srcset="/assets/services.webp" type="image/webp">
            <img class="object-contain min-h-full h-auto" src="/assets/services.png" alt="list of services" />
          </picture> -->
      </div>
      <!-- <section v-if="store.getWidth < 768" class="flex flex-col-reverse justify-center lg:px-20 xl:px-36">
          <h3 class="text-black font-semibold py-5 text-xl">
            We have a vibrant portfolio of clients ranging from FMCG to B2B
            and from corporate to boutique &amp; luxury brands spread across various categories. We are
            multidisciplinary
            and
            provide holistic services for your brand woven together from day&nbsp;one.
          </h3> -->
      <!-- </section> -->
    </section>
    </main>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { gsap } from 'gsap';

const services = [
  "design",
  "identity",
  "packaging",
  "logo",
  "naming",
  "brand strategy",
  "brand positioning",
  "tone of voice",
  "copywriting",
  "brandmark",
  "brand guide",
  "investor decks",
  "websites",
  "social media"
]
const height = ref(0);
const containerHeight = ref(0);
let tl = null as null | GSAPTimeline;

function checkHeight() {
  height.value = window.innerHeight;
  containerHeight.value = (document.querySelector('.services-container') as HTMLUListElement).offsetHeight;
}


onMounted(() => {
  checkHeight();
  document.addEventListener('resize', checkHeight)

  tl = gsap.timeline({
    repeat: -1,
    repeatRefresh: true,
  })
    .to(".service", {
      duration: 1,
      ease: "power3.inOut",
      y: `-=${containerHeight.value / services.length}px`,
      modifiers: {
        y: gsap.utils.unitize(x => {
          return parseFloat(x as string) % containerHeight.value
        }, 'px') //force y value to be between 0 and 100% using modulus
      },
    });

  tl.play()
});

onBeforeUnmount(() => {
  if (tl) tl.kill()
})
</script>

<style lang="scss">
.drama {
  font-weight: 600;
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