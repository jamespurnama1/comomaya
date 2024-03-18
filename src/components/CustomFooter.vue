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
    class="flex flex-col items-start justify-between py-12 md:py-24 px-5 md:px-36 h-[50vh] lg:mx-auto w-screen bg-stone-300 gap-10 ">
    <video class="recolor max-h-10 md:max-h-24 md:-ml-3" playsinline loop autoplay="true" muted>
      <source src="/assets/aboutus.mp4" type="video/mp4" />
    </video>
    <!-- <h3 class="text-blue text-base md:text-xl font-semibold tracking-widest text-center my-16">FOLLOW US ON
        INSTAGRAM&nbsp;&amp;&nbsp;LINKEDIN</h3> -->
    <ul>
      <li class="text-beige-lighter hover:text-active text-lg"><router-link to="/">Home</router-link></li>
      <li class="text-beige-lighter hover:text-active text-lg"><router-link to="/work">Work</router-link></li>
      <li class="text-beige-lighter hover:text-active text-lg"><router-link to="/about">About</router-link></li>
      <li class="text-beige-lighter hover:text-active text-lg"><router-link to="/about#grant">Singapore
          SMEs</router-link></li>
      <li class="text-beige-lighter hover:text-active text-lg"><router-link to="/contact">Contact</router-link></li>
    </ul>
    <div class="flex justify-between w-full md:flex-row flex-col-reverse gap-5">
      <p class="text-beige-lighter md:text-base text-sm">
        © 2024 COMOMAYA. All rights reserved.
      </p>
      <div class="flex gap-5 md:text-base text-sm">
        <a class="z-10 group relative" key="ig" href="https://instagram.com/comomaya"
          aria-label="Open Comomaya's Instagram Page" target="_blank" rel="noopener noreferrer">
          <!-- <font-awesome-icon :icon="['fab', 'square-instagram']" size="xl" class="mx-2 my-3 text-beige" /> -->
          <p class="absolute group-hover:opacity-100 opacity-0 text-active font-bold">(INSTAGRAM)</p>
          <p class="text-beige-lighter group-hover:opacity-0">(INSTAGRAM)</p>
        </a>
        <a class="z-10 group relative" key="linkedin" href="https://www.linkedin.com/company/comomaya"
          aria-label="Open Comomaya's Linkedin Page" target="_blank" rel="noopener noreferrer">
          <p class="absolute group-hover:opacity-100 opacity-0 text-active font-bold">(LINKEDIN)</p>
          <p class="text-beige-lighter group-hover:opacity-0">(LINKEDIN)</p>
          <!-- <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" class="mx-2 my-3 text-beige" /> -->
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