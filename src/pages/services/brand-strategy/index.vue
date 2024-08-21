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
  router.push('/#services')
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
        <p class="mt-5 text-white">
          At COMOMAYA, a premier branding agency in Singapore, we specialize in creating a distinct and memorable brand
          image for your products and services by offering brand strategy services. Our expertise in brand strategy and
          brand building is designed to position your business prominently in the minds of your customers, setting you
          apart in the competitive Singapore market.
          <br>
          COMOMAYA, one of the best design agency in Singapore, excels in developing
          comprehensive brand strategies that provide your business with a significant edge over competitors. Our
          approach to brand creation is meticulously crafted to ensure that your brand is effectively presented to your
          target audience, whether you&apos;re a well-established company or a startup.
          <br>
          COMOMAYA, a leading branding agency in Singapore, focuses on how your business is represented and perceived by
          your customers. As one of the best brand agencies in Singapore, we ensure that every aspect of your brand
          identity reflects your values and resonates with your audience, driving your brand towards long-term success.
          <br>
          For businesses looking to make a lasting impact, COMOMAYA, a branding agency in Singapore offers the expertise
          and creativity needed to build a powerful and enduring brand presence.
        </p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
