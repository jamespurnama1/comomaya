<template>
  <section class="py-9 px-9 flex flex-col gap-5 items-start justify-center bg-beige-lighter">
    <h3
      class="split drama text-4xl md:text-5xl 2xl:text-8xl text-black font-extrabold overflow-hidden relative py-5">
      <strong>At Comomaya, we&apos;ve got you covered from brand strategy </strong>&amp; <strong>design to performance marketing, providing a full range of services to make your brand&nbsp;shine.</strong>
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5" v-if="store.isFetched">
      <div class="relative" v-for="(service, index) in store.getServices">
        <div
          class="absolute bg-beige-lighter bg-opacity-80 min-h-[50%] w-[85%] flex items-center justify-between text-center flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-5 h-auto">
          <span>
            <p class="font-medium text-sm md:text-xl">0{{ index+1 }}</p>
            <h4 class="font-extrabold lowercase text-2xl xl:text-4xl"
              v-html="service.title.replace(/&/, '<span class=\'drama\'>&</span>')"></h4>
            <p class="text-sm md:text-base">{{ service.metadata.description.replace(/\s\b(?=\S+$)/, '&nbsp') }}</p>
          </span>
          <p class="font-bold text-xs xl:text-sm uppercase tracking-[0.2em] max-w-[90%] pt-1">{{
            service.metadata.tags.replace(/\s\b(?=\S+$)/, '&nbsp;')
            }}</p>
        </div>
        <img class="aspect-square object-cover" :src="`${service.thumbnail}?auto=format`" :alt="service.title" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from '../stores';
const store = useStore()

if (!store.isFetched) store.load()
</script>
