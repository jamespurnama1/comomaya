<template>
  <section class="bg-beige-lighter" v-if="store.isFetched">
    <div class="py-9 px-9 lg:px-20 xl:px-36 flex flex-col gap-5 items-start justify-center max-w-[1920px] mx-auto">
      <p class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left pt-5">OUR SERVICES</p>
      <h4
        class="split drama text-2xl md:text-3xl 2xl:text-6xl text-black font-extrabold overflow-hidden relative pb-5 max-w-6xl">
        <strong>At Comomaya, we&apos;ve got you covered from brand strategy </strong>&amp; <strong>design to performance
          marketing, providing a full range of services to make your brand&nbsp;shine.</strong>
      </h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5 w-full" v-if="store.isFetched">
        <a :href="`services/${service.slug}`"
          class="relative w-full aspect-[4/3] bg-white p-4 flex items-center justify-center"
          v-for="(service, index) in store.getServices" @click.prevent>
          <div
            class="bg-opacity-80 w-[85%] flex items-center justify-between text-center flex-col p-5 bg-beige-lighter min-h-52 relative z-10">
            <span>
              <p class="font-medium text-sm xl:text-xl">0{{ index + 1 }}</p>
              <h4 class="font-extrabold lowercase text-2xl xl:text-3xl"
                v-html="service.title.replace(/&/, '<span class=\'drama\'>&</span>')"></h4>
              <p class="text-sm xl:text-base">{{ service.metadata.description.replace(/\s\b(?=\S+$)/, '&nbsp') }}</p>
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
import { useStore } from '../stores';
const store = useStore()

if (!store.isFetched) store.load()
</script>
