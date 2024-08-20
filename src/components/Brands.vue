<script setup lang="ts">
import { useStore } from '../stores';

const store = useStore()

const globalBrands = Object.values(import.meta.glob('@/assets/brands_desktop/global/*.{jpg,png,jpeg,svg,webp}', { as: 'url', eager: true }));
const boutiqueBrands = Object.values(import.meta.glob('@/assets/brands_desktop/boutique/*.{jpg,png,jpeg,svg,webp}', { as: 'url', eager: true }));
const globalBrandsMobile = Object.values(import.meta.glob('@/assets/brands_mobile/global/*.{jpg,png,jpeg,svg,webp}', { as: 'url', eager: true }));
const boutiqueBrandsMobile = Object.values(import.meta.glob('@/assets/brands_mobile/boutique/*.{jpg,png,jpeg,svg,webp}', { as: 'url', eager: true }));
</script>

<template>
  <section class="bg-stone-300">
    <div
      class="max-w-[1920px] mx-auto flex flex-col justify-center relative min-h-[70vh] px-9 md:px-20 xl:px-36 py-10 md:py-20 lg:pt-16 gap-2 md:gap-10">
      <span>
        <h2 class="text-blue drama text-5xl md:text-6xl lg:text-7xl font-semibold -ml-2">
          our&nbsp;<br v-if="store.getWidth <= 768"><strong>clients</strong>
        </h2>
        <p class="text-blue text-sm md:text-lg font-semibold tracking-widest text-left">BOUTIQUE &amp;
          CORPORATE
          BRANDS</p>
      </span>
      <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-x-8 md:gap-y-12 lg:gap-x-10 lg:gap-y-16">
        <div v-if="store.getWidth <= 768" v-for="brand in boutiqueBrandsMobile"
          class="flex justify-center items-center w-full h-min">
          <img class="object-contain w-20 lg:w-40 h-32 lg:py-5 lg:px-3 p-1" :src="brand"
            :alt="brand.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" />
        </div>
        <div v-else v-for="brand in boutiqueBrands" class="flex justify-center items-center w-full h-min">
          <img class="object-contain w-20 lg:w-40 h-32 lg:py-5 lg:px-3 p-1" :src="brand"
            :alt="brand.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" />
        </div>
      </div>

      <span>
        <h2 class="text-blue drama text-5xl md:text-6xl lg:text-7xl font-semibold mt-20 -ml-2">
          brands <br v-if="store.getWidth <= 768"><strong>we have<br>worked&nbsp;with</strong>
        </h2>
        <p class="text-blue text-sm md:text-lg font-semibold tracking-widest text-left">GLOBAL BRANDS</p>
      </span>
      <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-x-8 md:gap-y-12 lg:gap-x-10 lg:gap-y-16">
        <div v-if="store.getWidth <= 768" v-for="brand in globalBrandsMobile"
          class="flex justify-center items-center w-full h-full">
          <img class="object-contain w-20 lg:w-40 h-32 lg:py-8 lg:px-5 p-1" :src="brand"
            :alt="brand.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" />
        </div>
        <div v-else v-for="brand in globalBrands" class="flex justify-center items-center w-full h-full">
          <img class="object-contain w-20 lg:w-40 h-32 lg:py-8 lg:px-5 p-1" :src="brand"
            :alt="brand.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" />
        </div>
      </div>

    </div>
  </section>
</template>