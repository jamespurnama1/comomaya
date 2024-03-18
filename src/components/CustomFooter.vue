<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMounted, onUnmounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

function resize() {
  ScrollTrigger.refresh();
}

onMounted(() => {
  window.setTimeout(() => {
    ScrollTrigger.create({
      trigger: "footer",
      start: "top bottom",
      end: "bottom bottom",
      id: "footer",
      // markers: true,
      snap: {
        snapTo: [0, 1],
        delay: 0.3,
        duration: 1,
        ease: "power1.inOut",
      }
    })
  }, 1000)

  window.addEventListener('resize', resize);
})

onUnmounted(() => {
  window.removeEventListener('resize', resize);
  if (!ScrollTrigger.getById("footer")) return
  ScrollTrigger.getById("footer")!.kill()
})
</script>

<template>
  <footer
    class="flex flex-col items-start justify-start py-12 md:py-24 px-5 md:px-36 lg:mx-auto w-screen bg-beige-lighter gap-24">
    <!-- <video class="recolor max-h-10 md:max-h-24 md:-ml-3" playsinline loop autoplay="true" muted>
      <source src="/assets/aboutus.mp4" type="video/mp4" />
    </video> -->
    <!-- <h3 class="text-blue text-base md:text-xl font-semibold tracking-widest text-center my-16">FOLLOW US ON
        INSTAGRAM&nbsp;&amp;&nbsp;LINKEDIN</h3> -->
    <ul class="flex gap-10">
      <!-- <li class="text-beige-lighter hover:text-active text-lg"><router-link to="/">Home</router-link></li> -->
      <li class="group text-lg"><router-link to="/work">
          <div>
            <p class="text-stone-500 font-semibold tracking-widest group-hover:text-active transition-all duration-500">
              WORK</p>
            <p
              class="text-black font-extrabold text-4xl tracking-tight group-hover:text-active transition-all duration-500">
              See it here.</p>
          </div>
        </router-link></li>
      <li class="group text-lg"><router-link to="/about">
          <div>
            <p class="text-stone-500 font-semibold tracking-widest group-hover:text-active transition-all duration-500">
              ABOUT</p>
            <p
              class="text-black font-extrabold text-4xl tracking-tight group-hover:text-active transition-all duration-500">
              What is
              COMOMAYA?</p>
          </div>
        </router-link></li>
      <!-- <li class="text-beige-lighter hover:text-active text-lg"><router-link to="/about#grant">Singapore
          SMEs</router-link></li> -->
      <li class="group text-lg"><router-link to="/contact">
          <div>
            <p class="text-stone-500 font-semibold tracking-widest group-hover:text-active transition-all duration-500">
              CONTACT</p>
            <p
              class="text-black font-extrabold text-4xl tracking-tight group-hover:text-active transition-all duration-500">
              Let's chat.</p>
          </div>
        </router-link></li>
    </ul>
    <ul class="flex gap-10 text-active font-extrabold tracking-tight text-4xl">
      <li>Singapore.</li>
      <li>India.</li>
    </ul>
    <div class="flex justify-between w-full md:flex-row flex-col-reverse gap-5">
      <p class="text-stone-500 md:text-base text-sm">
        © 2024 COMOMAYA. All rights reserved.
      </p>
      <div class="flex gap-5 md:text-base text-sm">
        <a class="z-10 relative" key="ig" href="https://instagram.com/comomaya"
          aria-label="Open Comomaya's Instagram Page" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'square-instagram']" size="xl"
            class="mx-2 my-3 text-stone-500 hover:text-active transition-all duration-200" />
          <!-- <p class="absolute group-hover:opacity-100 opacity-0 text-active font-bold">(INSTAGRAM)</p>
          <p class="text-beige-lighter group-hover:opacity-0">(INSTAGRAM)</p> -->
        </a>
        <a class="z-10 relative" key="linkedin" href="https://www.linkedin.com/company/comomaya"
          aria-label="Open Comomaya's Linkedin Page" target="_blank" rel="noopener noreferrer">
          <!-- <p class="absolute group-hover:opacity-100 opacity-0 text-active font-bold">(LINKEDIN)</p>
          <p class="text-beige-lighter group-hover:opacity-0">(LINKEDIN)</p> -->
          <font-awesome-icon :icon="['fab', 'linkedin']" size="xl"
            class="mx-2 my-3 text-stone-500 hover:text-active transition-all duration-200" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.device-ios,
.device-android {
  .recolor {
    filter: saturate(89%) brightness(97%) contrast(115.3%);
  }
}
</style>

<style lang="scss" scoped>
.recolor {
  filter: saturate(114%) brightness(91%) contrast(115.3%);
}
</style>