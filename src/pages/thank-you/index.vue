<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { useStore } from '../../stores';

const store = useStore();

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
  title: 'COMOMAYA - Thank You!',
})

</script>

<template>
  <main class="bg-stone-300">
    <div class="max-w-[1920px] mx-auto px-9 lg:px-20 xl:px-36 flex flex-col justify-center pt-24 md:pt-20">
      <div class="min-h-[50vh] md:min-h-[75vh] justify-center flex flex-col">
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3">THANK YOU</h1>
        <h2 v-if="store.form.name && store.form.phone && store.form.email"
          class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          <span>hi</span><span>{{ store.form.name }},</span>
        </h2>
        <h2 v-else class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          <span>we'll</span><span>contact</span>
          <span>you</span><span>soon!</span>
        </h2>

        <p v-if="store.form.name && store.form.phone && store.form.email" class="mt-5 text-white text-lg">
          Thank you for enquiring we will get back to you on <a :href="`mailto:${store.form.email}`">{{ store.form.email
            }}</a> or on your number <a :href="`tel:${store.form.phone}`">{{
              store.form.phone }}</a>.
          <br>
          <br>
          Thanking you,
          <br>
          Team COMOMAYA
        </p>

        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold mt-10">home
        </router-link>
      </div>
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