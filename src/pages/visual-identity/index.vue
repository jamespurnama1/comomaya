<script setup lang="ts">
import { useSchemaOrg } from '@unhead/schema-org';
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'Visual Identity - COMOMAYA',
  meta: [
    {
      name: 'description',
      content: 'Visual Identity Design encompasses your whole corporate identity.',
    },
    {
      property: 'og:title',
      content: 'Visual Identity - COMOMAYA'
    },
    {
      property: 'og:description',
      content: "Visual Identity Design encompasses your whole corporate identity."
    },
    {
      property: 'og:url',
      content: 'https://www.comomaya.com/services/visual-identity'
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
    "url": `https://www.comomaya.com/services/visual-identity`,
    "identifier": `https://www.comomaya.com/services/visual-identity`,
    "name": "Visual Identity",
    "description": "Visual Identity Design encompasses your whole corporate identity.",
  }
])

onMounted(() => {
  if (/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)) return
  // router.push('/#services')
})

</script>

<template>
  <main class="bg-stone-300">
    <div class="max-w-[1920px] mx-auto px-9 lg:px-20 xl:px-36 flex flex-col justify-center pt-24 md:pt-20">
      <div class="min-h-[50vh] md:min-h-[75vh] justify-center flex flex-col">
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Visual Identity</h1>
        <h2 class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          Visual Identity Design encompasses your whole corporate&nbsp;identity.
        </h2>
        <p class="mt-5 text-white">
          Brand &amp; visual identity design is at the heart of your corporate identity, and COMOMAYA, a leading design
          agency in Singapore, excels in this crucial aspect of branding. Our goal is to build a cohesive design
          identity for your entire brand, not just for a single product or service. As experts in brand identity design
          in Singapore, we ensure that your brand&apos;s character and personality shine through, preserving your
          company&apos;s
          individuality across all platforms.
          <br>
          At COMOMAYA, a premier design agency in Singapore, we believe that every element of your branding should
          reflect the unique identity of your business. Our creative design identity approach ensures that all your
          products and services are easily identifiable and perfectly aligned with your overall business ideology. We
          specialize in crafting distinguished branding that showcases what your company stands for, ensuring your brand
          identity design is both impactful and memorable.
          <br>
          Our expertise in corporate identity allows your business to express its design identity across various
          communication channels, including your website, business cards, brochures, and other brand collateral.
          COMOMAYA, renowned for brand identity design in Singapore, provides the design solutions that your company
          needs to effectively communicate its identity and stand out in the competitive Singapore market.
          <br>
          Whether you're looking to enhance your corporate identity or develop a strong brand identity design, COMOMAYA
          is the design agency Singapore businesses trust for exceptional results.
        </p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
