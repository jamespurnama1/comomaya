<template>
  <section class="bg-beige-lighter" v-if="services && services.length">
    <div class="py-9 px-9 lg:px-20 xl:px-36 flex flex-col gap-5 items-start justify-center max-w-[1920px] mx-auto">
      <p class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left pt-5">OUR SERVICES</p>
      <h4
        class="split drama text-2xl md:text-3xl 2xl:text-6xl text-black font-extrabold overflow-hidden relative pb-5 max-w-6xl">
        <strong>At Comomaya, we&apos;ve got you covered from brand strategy </strong>&amp; <strong>design to performance
          marketing, providing a full range of services to make your brand&nbsp;shine.</strong>
      </h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5 w-full grid-rows-1">
        <a :href="`services/${service.slug}`"
          class="relative w-full bg-white p-4 flex items-center justify-center min-h-full sm:aspect-[4/3] 2xl:aspect-auto"
          v-for="(service, index) in services" @click.prevent :key="index">
          <div
            class="bg-opacity-85 w-[85%] flex items-center justify-between text-center flex-col p-5 bg-beige-lighter relative z-10 2xl:h-full">
            <span>
              <p class="font-medium text-sm xl:text-xl">0{{ index + 1 }}</p>
              <h4 class="font-extrabold lowercase text-2xl xl:text-3xl"
                v-html="service.title.replace(/&/, '<span class=\'drama\'>&</span>')"></h4>
              <p class="text-sm xl:text-base">{{ service.metadata.description.replace(/\s\b(?=\S+$)/, '&nbsp;') }}</p>
            </span>
            <p class="font-bold text-xs xl:text-sm uppercase tracking-[0.2em] max-w-[90%] pt-1">{{
              service.metadata.tags.replace(/\s\b(?=\S+$)/, '&nbsp;')
            }}</p>
          </div>
          <img class="object-cover absolute w-full h-full z-0" :src="`${service.thumbnail}?auto=format`"
            :alt="service.title" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSchemaOrg } from '@unhead/schema-org';
import { onMounted, ref, watch } from 'vue';
import { useStore } from '../stores';

const store = useStore();
const hasPart = ref([] as Partial<creativeWork>[]);
const services = ref([] as service[] | undefined);

watch(() => store.getServices, (x) => {
  if (!x || !x.length) return
  services.value = [...x];
  schema();
})

onMounted(() => {
  if (!store.getServices || !store.getServices.length) return
  services.value = [...store.getServices];
  schema();
})

function schema() {
  if (!services.value || !services.value.length) return

  services.value.forEach(x => {
    hasPart.value.push({
      "@type": "Service",
      "name": x.title,
      "url": `https://www.comomaya.com/services/${x.slug}`,
      "identifier": `https://www.comomaya.com/services/${x.slug}`,
      "description": x.metadata.description,
      "image": x.thumbnail
    })
  })

  useSchemaOrg([
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "accessMode": "visual",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [...hasPart.value]
      }
    }
  ], {
    tagDuplicateStrategy: 'replace'
  })
}
</script>
