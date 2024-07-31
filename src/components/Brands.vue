<script setup lang="ts">
  const brands = Object.values(import.meta.glob('@/assets/brands/*.{jpg,png,jpeg,svg,webp}', { as: 'url', eager: true }));
</script>

<template>
  <section
    class="bg-stone-300 flex flex-col justify-center relative min-h-[70vh] px-9 md:px-20 xl:px-36 py-10 md:py-20 lg:pt-16 gap-4 md:gap-10">
    <h3 class="text-blue drama text-5xl md:text-6xl lg:text-8xl font-semibold">
      brands <strong>we have<br>worked&nbsp;with</strong>
      <br />
    </h3>
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-x-10 md:gap-y-16">
      <div v-for="brand in brands" class="flex justify-center items-center w-full h-full">
        <img class="object-contain w-16 md:w-40 h-32 md:py-8 md:px-5 p-1" :src="brand"
          :alt="brand.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" />
      </div>
    </div>
  </section>
</template>