<script setup lang="ts">
import { useSchemaOrg } from '@unhead/schema-org';
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

useHead({
  title: 'Social Media - COMOMAYA',
  meta: [
    {
      name: 'description',
      content: 'Whether it is a small-scale business venture or a giant corporation, digital marketing is described as the engine that drives businesses today.',
    },
    {
      property: 'og:title',
      content: 'Social Media - COMOMAYA'
    },
    {
      property: 'og:description',
      content: "Whether it is a small-scale business venture or a giant corporation, digital marketing is described as the engine that drives businesses today."
    },
    {
      property: 'og:url',
      content: 'https://www.comomaya.com/services/social-media'
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
    "name": "Social Media",
    "description": "Whether it is a small-scale business venture or a giant corporation, digital marketing is described as the engine that drives businesses today.",
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
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Social Media</h1>
        <h2 class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          Whether it is a small-scale business venture or a giant corporation, digital marketing is described as the
          engine that drives businesses today.
        </h2>
        <p class="mt-5 text-white">
          With proper implementation, Digital marketing singapore COMOMAYA can bridge the gap between consumers and your
          company through digital media &amp; technology. Our branding agency promotes brands, products and services via
          all
          kinds of electronic media, such as websites, webstores, apps, social media, e-mail marketing and much more.
          <br>
          We believe that digital marketing is an approach that enables you to learn and understand consumer behaviour
          better, since it makes getting feedback from customers faster and easier. We combine both traditional and
          digital methods of marketing to create a dynamic marketing plan for Digital Brand Engagement.
        </p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
