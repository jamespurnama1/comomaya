<template>
  <main class="relative bg-stone-300 mx-auto flex flex-col pt-10">
    <section
      class="flex px-9 lg:px-20 xl:px-36 py-10 flex-col xl:flex-row min-h-[50vh] xl:min-h-[75vh] 2xl:gap-16 overflow-hidden relative w-full">
      <div class="w-1/2 pt-10 xl:py-32 h-full justify-center flex flex-col">
        <h3 class="text-beige-lighter text-sm md:text-lg font-semibold tracking-widest text-left">
          WHAT WE&nbsp;OFFER
        </h3>
        <h2
          class="drama xl:ml-[-10px] py-3 text-5xl md:text-8xl overflow-hidden text-left text-active font-medium !leading-[0.75] md:!leading-[0.5]">
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
        class="absolute pointer-events-none w-full xl:w-1/2 p-0 m-0 bg-beige lg:my-auto flex justify-center lg:justify-end gap-3 text-beige-lighter h-full right-9 lg:right-20 xl:right-36 top-0">
        <!-- <div class="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-stone-300 via-transparent to-stone-300 z-10" /> -->
        <ul class="services-container overflow-hidden relative pb-10 h-full w-full">
          <!-- <h4 class="font-bold md:text-5xl text-white mb-3">{{value }}</h4> -->
          <li v-for="value in [].concat(...Array(3).fill(services))"
            class="service mb-1 font-extrabold text-blue text-xl md:text-5xl 2xl:text-7xl text-right whitespace-nowrap">
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
    <section
      class="flex px-9 lg:px-20 2xl:px-36 justify-center flex-col xl:flex-row min-h-[50vh] xl:min-h-[75vh] 2xl:gap-16  bg-beige-lighter relative">
      <div class="flex flex-col gap-5">
        <h2 class="text-5xl md:text-6xl text-stone-300 font-extrabold mr-auto">for our corporate clients</h2>
        <p></p>
      </div>
    </section>

    <section
      class="flex flex-col px-9 lg:px-20 2xl:px-36 py-10 justify-center xl:flex-col min-h-[50vh] xl:min-h-[75vh] gap-5 2xl:gap-16 bg-stone-300 relative">
      <div class="flex flex-col gap-5">
        <h2 class="text-5xl md:text-6xl text-active font-extrabold mr-auto">for our startup clients</h2>
        <p class="text-beige-lighter 2xl:text-2xl text-xl">At our core, we believe exceptional design and branding
          should be accessible to all — whether you're a
          budding startup with a great product or service or a thriving corporation. We're committed to supporting small
          businesses and startups just as much as our larger corporate&nbsp;clients.
          <br>
          <br>
          For our Singaporean SME clients, we're proud to be registered with the Enterprise Development Grant (EDG). We
          highly encourage you to leverage this incredible opportunity, which offers a substantial 50-70% discount on
          our services. It's a chance to propel your brand forward without breaking the&nbsp;bank.
          <br>
          <br>
          For those who can't access this service, we understand that time and money are key and with this in mind, our
          packages are an efficient and affordable way to elevate your brand and website. Click on the packages below to
          get more info on&nbsp;them.
        </p>
      </div>
      <div class="flex gap-4 flex-col md:flex-row">
        <button class="md:w-1/3 w-full min-h-0 bg-brown-100 aspect-[4/3]">
          <a class="z-10" target="_blank" rel="noopener noreferrer"
            href="https://wa.me/6594245994?text=I%27m%20interested%20in%20LOGO%20IN%20A%20DAY%21">
            <div
              class="outline-black outline-1 outline text-center flex flex-col items-center justify-center mx-16 my-10 p-1">
              <h3 class="uppercase text-xl md:text-base font-bold font-futura">
                logo in a&nbsp;day
              </h3>
              <p class="text-xs">In an everchanging world, we create desire across the complete brand experience to
                build timeless brand
                value.</p>
            </div>
          </a>
        </button>
        <button class="md:w-1/3 w-full min-h-0 bg-brown-500 aspect-[4/3]">
          <a class="z-10" target="_blank" rel="noopener noreferrer"
            href="https://wa.me/6594245994?text=I%27m%20interested%20in%20DESIGN%20IN%20A%20DAY%21">
            <div
              class="outline-black outline-1 outline text-center flex flex-col items-center justify-center mx-16 my-10 p-1">
              <h3 class="uppercase text-xl md:text-base font-bold font-futura">
                redesign in a&nbsp;day
              </h3>
              <p class="text-xs">In an everchanging world, we create desire across the complete brand experience to
                build timeless brand
                value.</p>
            </div>
          </a>
        </button>
        <button class="md:w-1/3 w-full min-h-0 bg-darkGray text-white aspect-[4/3]">
          <a class="z-10" target="_blank" rel="noopener noreferrer"
            href="https://wa.me/6594245994?text=I%27m%20interested%20in%20WEBSITE%20IN%20A%20WEEK%21">
            <div class="outline-white outline-1 outline text-center flex flex-col items-center justify-center mx-16 my-10 p-1">
              <h3 class="uppercase text-xl md:text-base font-bold font-futura">
                website in a&nbsp;week
              </h3>
              <p class="text-xs">In an everchanging world, we create desire across the complete brand experience to
                build timeless brand
                value.</p>
            </div>
          </a>
        </button>
      </div>
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