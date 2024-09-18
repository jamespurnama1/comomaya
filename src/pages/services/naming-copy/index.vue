<script setup lang="ts">
import { useSchemaOrg } from '@unhead/schema-org';
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

useHead({
  title: 'Naming & Copy - COMOMAYA',
  meta: [
    {
      name: 'description',
      content: 'Having creative copywriting becomes more important than ever in this fast world.',
    },
    {
      property: 'og:title',
      content: 'Naming & Copy - COMOMAYA'
    },
    {
      property: 'og:description',
      content: 'Having creative copywriting becomes more important than ever in this fast world.'
    },
    {
      property: 'og:url',
      content: 'https://www.comomaya.com/services/naming-copy'
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
    "name": "Naming & Copy",
    "description": "Having creative copywriting becomes more important than ever in this fast world.",
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
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Naming &amp; Copy
        </h1>
        <h2 class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          Having creative copywriting becomes more important than ever in this fast world.
        </h2>
        <p class="mt-5 text-white">
          Every copy written is a direct marketing strategy targeting to both potential and current customers. It allows
          you to reach thousands of customers with precision and enhances brand recognition.
          <br>
          Making good copy are still considered as a key marketing tool of many businesses. People nowadays
          focus on digital communication; creative writing in Singapore provide more engagement for
          both companies and customers to establish communication.
        </p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
