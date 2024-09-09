<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'COMOMAYA - Design Identity',
  meta: [
    {
      name: 'description',
      content: 'Design is the art of visual communication.',
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
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Design Identity
        </h1>
        <h2 class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          Design is the art of visual communication.
        </h2>
        <p class="mt-5 text-white">
          COMOMAYA Graphic Design Singapore utilizes this art form to convey information to your target audience with a
          creative combination of ideas, text and images. For this visual communication process, we use a creative
          methodology to provide a fitting solution to your requirements.
          <br>
          Once we deliver the completed design, it can be used to promote your business in a wide range of ways. Graphic
          Design Singapore COMOMAYA&apos;s work can be used for websites, packaging, brochures, flyers, business cards,
          advertisements and more.
        </p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
