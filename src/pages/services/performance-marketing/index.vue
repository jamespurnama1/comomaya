<script setup lang="ts">
import { useSchemaOrg } from '@unhead/schema-org';
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

useHead({
  title: 'Performance Marketing - COMOMAYA',
  meta: [
    {
      name: 'description',
      content: "Search Engine Optimization (SEO) is one of the most important aspects of web development in today's world.",
    },
    {
      property: 'og:title',
      content: 'Performance Marketing - COMOMAYA'
    },
    {
      property: 'og:description',
      content: "Search Engine Optimization (SEO) is one of the most important aspects of web development in today's world."
    },
    {
      property: 'og:url',
      content: 'https://www.comomaya.com/services/performance-marketing'
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

useSchemaOrg([
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "Service",
    "url": `https://www.comomaya.com/services/${route.params.slug}`,
    "identifier": `https://www.comomaya.com/services/${route.params.slug}`,
    "name": "Performance Marketing",
    "description": "Search Engine Optimization (SEO) is one of the most important aspects of web development in today's world.",
  }
])

onMounted(() => {
  if (/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)) return
  router.push('/#services')
})

</script>

<template>
  <main class="bg-stone-300">
    <div class="max-w-[1920px] mx-auto px-9 lg:px-20 xl:px-36 flex flex-col justify-center pt-24 md:pt-20">
      <div class="min-h-[50vh] md:min-h-[75vh] justify-center flex flex-col">
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Performance Marketing
        </h1>
        <h2 class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          Search Engine Optimization (SEO) is one of the most important aspects of web development in today&apos;s
          world.
        </h2>
        <p class="mt-5 text-white">Your website will quickly be lost among the millions of other sites on the Web if it
          isn&apos;t optimized, but Web Design Agency COMOMAYA Singapore is here to ensure that never happens. In order
          to
          improve the chances of your target audience visiting your website, we implement SEO techniques
          <br>
          in every place possible on your site. This includes titles, meta descriptions, tags, Schema.org, micro data,
          social cards, back links, domain names, file names and much more. Not only do we optimize your site in the
          readable text on your page, we also incorporate keywords into the HTML code.
        </p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
