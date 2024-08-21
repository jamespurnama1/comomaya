<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'COMOMAYA - Visual Identity',
  meta: [
    {
      name: 'COMOMAYA',
      content: 'Visual Identity',
    },
  ],
})

onMounted(() => {
  if (/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)) return
  router.push('/#services')
})

</script>

<template>
  <main class="bg-stone-300">
    <div class="max-w-[1920px] mx-auto px-9 lg:px-20 xl:px-36 flex flex-col justify-center pt-24 md:pt-20">
      <div class="min-h-[50vh] md:min-h-[75vh] justify-center flex flex-col">
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Visual Identity</h1>
        <h2 class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          Visual Identity Design encompasses your whole corporate identity.
        </h2>
        <p class="mt-5 text-white">
          The goal is to build a brand name for your whole company rather than just one service or product that you
          provide, and branding agency COMOMAYA Singapore can do just that for you. When branding your brand, a
          combination of character and personality is necessary to preserve your company&apos;s individuality, and we
          make sure that all your products and services are easily identifiable and in sync with your overall business
          ideology through distinguished branding.
          <br>
          Branding should showcase the unique identity of your business through creative designs that represent the
          company and what it stands for, and that is where you can utilize our expertise. Your company will be able to
          express its identity through various communication outlets, such as your website, business cards, brochures
          and marketing tools. Brand identity design is one of the services that branding agency COMOMAYA SG specializes
          in.</p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
