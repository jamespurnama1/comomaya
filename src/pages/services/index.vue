<template>
  <main class="relative bg-stone-300 mx-auto flex flex-col pt-10">
    <section
      class="flex px-9 lg:px-20 xl:px-36 py-10 flex-col xl:flex-row min-h-[50vh] xl:min-h-[75vh] 2xl:gap-16 overflow-hidden relative w-full">
      <div class="w-1/2 pt-10 xl:py-32 h-full justify-center flex flex-col">
        <h3 class="text-beige-lighter text-sm md:text-lg font-semibold tracking-widest text-left">
          WHAT WE&nbsp;OFFER
        </h3>
        <h2
          class="drama xl:ml-[-10px] py-5 text-5xl md:text-8xl overflow-hidden text-left text-active font-medium !leading-[0.75] md:!leading-[0.5]">
          our <strong>services</strong>
        </h2>
        <h3 class="text-black md:text-3xl 2xl:text-5xl xl:pb-10 lg:max-w-[570px] font-bold">
          At our core, we believe exceptional branding &amp; design should be accessible to all — whether you're a budding
          startup or a thriving&nbsp;corporation.
        </h3>
      </div>

      <div
        class="absolute pointer-events-none w-full xl:w-1/2 p-0 m-0 bg-beige lg:my-auto flex justify-center lg:justify-end gap-3 text-beige-lighter h-full right-9 lg:right-20 xl:right-36 top-0">
        <ul class="services-container overflow-hidden relative pb-10 h-full w-full">
          <li v-for="value in [].concat(...Array(3).fill(services))"
            class="service mb-1 font-extrabold text-blue text-xl md:text-5xl 2xl:text-7xl text-right whitespace-nowrap">
            {{ value }}<span class="text-active">.</span></li>
        </ul>
      </div>

    </section>
    <span id="startup" />
    <Service />
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

</style>