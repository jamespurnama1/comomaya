<script setup lang="ts">
import { useSchemaOrg } from '@unhead/schema-org';
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'Packaging Design - COMOMAYA',
  meta: [
    {
      name: 'description',
      content: "Package design is all about planning and formulating the construction and graphical elements of a product's package.",
    },
    {
      property: 'og:title',
      content: 'Packaging Design - COMOMAYA'
    },
    {
      property: 'og:description',
      content: "Package design is all about planning and formulating the construction and graphical elements of a product's package."
    },
    {
      property: 'og:url',
      content: 'https://www.comomaya.com/services/packaging-design'
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
    "url": `https://www.comomaya.com/services/packaging-design`,
    "identifier": `https://www.comomaya.com/services/packaging-design`,
    "name": "Packaging Design",
    "description": "Package design is all about planning and formulating the construction and graphical elements of a product's package.",
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
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Packaging Design
        </h1>
        <h2 class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          Package design is all about planning and formulating the construction and graphical elements of a
          product&apos;s package.
        </h2>
        <p class="mt-5 text-white">
          At COMOMAYA, we specialize in creating stunning pack design and packaging design for your brand that not only
          captures attention but also communicates your brand&apos;s essence effectively. Our expertise in label design
          ensures that every product you offer stands out on the shelf, resonating with your target audience.
          <br>
          As experts in beautiful packaging design solutions Singapore, we focus on developing packaging designs that
          are not only aesthetically pleasing but also functional and aligned with your brand identity. Whether you need
          a complete pack design for a new product or a refreshed label design to elevate an existing one, COMOMAYA
          delivers results that make a lasting impact.
          <br>
          Our packaging design process is tailored to meet the unique needs of your brand, ensuring that your products
          are packaged in a way that enhances their appeal and marketability. With COMOMAYA, you can be confident that
          your packaging design reflects the quality and creativity of your brand, making us the go-to choice for
          beautiful packaging design solutions in Singapore.
        </p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
