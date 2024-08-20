<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'COMOMAYA - Packaging Design',
  meta: [
    {
      name: 'COMOMAYA',
      content: 'Packaging Design',
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
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3 uppercase">Packaging Design
        </h1>
        <h2 class="split max-w-4xl text-active text-5xl md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          Package design is all about planning and formulating the construction and graphical elements of a
          product&apos;s
          package.
        </h2>
        <p class="mt-5 text-white">
          Branding agency COMOMAYA SG attends to every aspect of packaging when we create a new design, including size
          and shape, labelling, colour, appearance, convenience, protection and economy. Our Packaging Design company
          Singapore guarantee that we create excellent product packages that suit your brand. We believe in developing
          the best package designs after carefully evaluating the

          product and your market competition. Our packages are offered in any form you need, ranging from bottles to
          boxes. Our Packaging Design company Singapore team WECREATE will take care of the rest to preserve your brand
          image and represent it accurately and creatively in our package designs.
        </p>
        <router-link aria-label="Go to Landing Page" to="/"
          class="z-0 relative bg-stone-300 text-blue outline-4 px-1 mr-auto h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold">home
        </router-link>
      </div>
    </div>
  </main>
</template>
