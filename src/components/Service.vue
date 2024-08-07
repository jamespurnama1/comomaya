<template>
  <section class="bg-beige-lighter">
    <div class="py-9 px-9 lg:px-20 xl:px-36 flex flex-col gap-5 items-start justify-center max-w-[1920px] mx-auto">
      <p class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left pt-5">OUR SERVICES</p>
      <h4
        class="split drama text-2xl md:text-3xl 2xl:text-6xl text-black font-extrabold overflow-hidden relative pb-5 max-w-6xl">
        <strong>At Comomaya, we&apos;ve got you covered from brand strategy </strong>&amp; <strong>design to performance
          marketing, providing a full range of services to make your brand&nbsp;shine.</strong>
      </h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5 w-full" v-if="store.isFetched">
        <div class="relative w-full bg-white" v-for="(service, index) in store.getServices">
          <div
            class="bg-opacity-80 w-[85%] flex items-center justify-between text-center flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-5"
            :class="[$route.path === '/services' ? 'absolute bg-beige-lighter h-42 md:h-64' : 'relative h-64 2xl:h-96']">
            <span>
              <p class="font-medium text-sm md:text-xl">0{{ index + 1 }}</p>
              <h4 class="font-extrabold lowercase text-2xl xl:text-3xl"
                v-html="service.title.replace(/&/, '<span class=\'drama\'>&</span>')"></h4>
              <p class="text-sm md:text-base">{{ service.metadata.description.replace(/\s\b(?=\S+$)/, '&nbsp') }}</p>
            </span>
            <p class="font-bold text-xs xl:text-sm uppercase tracking-[0.2em] max-w-[90%] pt-1">{{
              service.metadata.tags.replace(/\s\b(?=\S+$)/, '&nbsp;')
            }}</p>
            <img v-if="$route.path === '/'" class="object-fit p-2 h-8 md:h-12 w-auto"
              :src="`/assets/icons/${service.title.replace(/\s/g, '-').toLowerCase()}.svg`" </div>
            <img v-if="$route.path === '/services'" class="aspect-[4/3] object-cover"
              :src="`${service.thumbnail}?auto=format`" :alt="service.title" />
          </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from '../stores';
const store = useStore()

if (!store.isFetched) store.load()
</script>
