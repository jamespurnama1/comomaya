<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'COMOMAYA - Website Design',
  meta: [
    {
      name: 'COMOMAYA',
      content: 'Website Design',
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
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Website Design</h1>
        <h2 class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          Website design involves the planning and creation of websites using several different skills.
        </h2>
        <p class="mt-5 text-white">
          Website design singapore COMOMAYA addresses all the aspects related to this process, such as UX web design, UI web
          design, web development, SEO and hosting. We bring all the different elements together and effectively
          integrate them to create a fully functional website that represents your business in an accurate, creative and
          convincing way. Our web design methods are in line with design principles,

          and our website designers bring balance, emphasis, rhythm, contrast and unity together to create stunning results.
          Website Design Singapore pays special attention to both usability as well as making your website visually
          appealing. Our web designers stay up to date with the latest web accessibility guidelines and expertly cover
          all the front-end design processes for your website.
        </p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
