<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'Website Design - COMOMAYA',
  meta: [
    {
      name: 'description',
      content: 'Website design involves the planning and creation of websites using several different skills.',
    },
    {
      property: 'og:title',
      content: 'Website Design - COMOMAYA'
    },
    {
      property: 'og:description',
      content: "Website design involves the planning and creation of websites using several different skills."
    },
    {
      property: 'og:url',
      content: 'https://www.comomaya.com/services/website-design'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:site_name',
      content: 'COMOMAYA'
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
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Website Design</h1>
        <h2 class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          Website design involves the planning and creation of websites using several different skills.
        </h2>
        <p class="mt-5 text-white">
          At COMOMAYA, we expertly address all aspects of website design Singapore, including UX web design, UI web
          design, web development, SEO, and hosting. We integrate these elements seamlessly to create fully functional
          websites that accurately, creatively, and convincingly represent your business.
          <br>
          Our approach to the best website design Singapore is grounded in core design principles, ensuring that every
          site we create is not only visually stunning but also highly functional. Our experienced web designers
          expertly combine balance, emphasis, rhythm, contrast, and unity to deliver exceptional results.
          <br>
          COMOMAYA is recognized for its expertise and is one of the best website design agency Singapore, where we
          place a strong emphasis on both usability and aesthetics. Our web designers are up-to-date with the latest web
          accessibility guidelines, ensuring your website is accessible to all users. From UX web design that enhances
          user experience to UI web design that ensures an intuitive interface, we cover all front-end design processes
          with precision and creativity.
          <br>
          Trust COMOMAYA for website design Singapore that makes your business stand out in the digital landscape.
        </p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
