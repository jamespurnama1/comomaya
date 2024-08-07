<script setup lang="ts">
  const globalBrands = Object.values(import.meta.glob('@/assets/brands/global/*.{jpg,png,jpeg,svg,webp}', { as: 'url', eager: true }));
  const boutiqueBrands = Object.values(import.meta.glob('@/assets/brands/boutique/*.{jpg,png,jpeg,svg,webp}', { as: 'url', eager: true }));
</script>

<template>
  <section class="bg-stone-300">
    <div
      class="max-w-[1920px] mx-auto flex flex-col justify-center relative min-h-[70vh] px-9 md:px-20 xl:px-36 py-10 md:py-20 lg:pt-16 gap-4 md:gap-10">
      <h2 class="text-blue drama text-5xl md:text-6xl lg:text-7xl font-semibold">
        brands <strong>we have<br>worked&nbsp;with</strong>
        <br />
      </h2>

      <p class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left pt-5">GLOBAL BRANDS</p>
      <div class="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-x-10 md:gap-y-16">
        <div v-for="brand in globalBrands" class="flex justify-center items-center w-full h-full">
          <img class="object-contain w-16 md:w-40 h-32 md:py-8 md:px-5 p-1" :src="brand"
            :alt="brand.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" />
        </div>
      </div>

      <p class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left pt-5">BOUTIQUE &amp; CORPORATE BRANDS</p>
      <div class="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-x-10 md:gap-y-16">
        <div v-for="brand in boutiqueBrands" class="flex justify-center items-center w-full h-min">
          <img class="object-contain w-16 md:w-40 h-32 md:py-8 md:px-5 p-1" :src="brand"
            :alt="brand.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" />
        </div>
      </div>
    </div>
  </section>
</template>