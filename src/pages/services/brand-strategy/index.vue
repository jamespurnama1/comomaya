<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'COMOMAYA - Brand Strategy',
  meta: [
    {
      name: 'COMOMAYA',
      content: 'Brand Strategy',
    },
  ],
})

onMounted(() => {
  if (/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)) return
  // router.push('/#services')
})

</script>

<template>
  <main class="bg-stone-300">
    <div class="max-w-[1920px] mx-auto px-9 lg:px-20 xl:px-36 flex flex-col justify-center pt-24 md:pt-20">
      <div class="min-h-[50vh] md:min-h-[75vh] justify-center flex flex-col">
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Brand Strategy</h1>
        <h2 class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          A brand is the most valuable asset of any business.
        </h2>
        <p class="mt-5 text-white">The purpose of branding agency singapore is to create a distinct image in your customers&apos;
          mind about
          your products and services. Branding agency singapore COMOMAYA is knowledgeable in making consistent
          advertising
          campaigns that are necessary for building the right and befitting image for your brand. We can build an
          efficient and compelling brand strategy to give you a great edge over your competitors in the Singapore
          market.
          <br>
          Our Branding agency singapore COMOMAYA makes sure that marketing methods are well-planned and designed to
          increase your competence and customer base in Singapore, and this even applies for startups. COMOMAYA&apos;s
          brand creation approach will ensure you brand is effectively being presented to the targeted audience. Our
          designs
          will showcase what your business represents and how you want to be perceived by your customers.</p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
