<template>
  <section class="bg-blue" v-if="store.isFetched">
    <div class="max-w-[1920px] mx-auto px-12 md:px-20 xl:px-36 flex flex-col justify-center relative min-h-[70vh]">
      <h3
        class="text-active drama md:pb-3 pt-8 md:pt-20 lg:pt-16 text-5xl md:text-6xl lg:text-8xl font-semibold md:text-center">
        client <strong>testimonials</strong>
      </h3>
      <button @click="swiperDOM ? swiperDOM.$el.swiper.slideNext() : null"
        class="absolute right-3 md:right-10 md:hover:scale-150 transition-transform">
        <img class="block w-7 h-7 md:w-10 md:h-10 object-contain" src="/assets/arrow-right.svg" alt="button next" />
      </button>
      <button @click="swiperDOM ? swiperDOM.$el.swiper.slidePrev() : null"
        class="absolute left-3 md:left-10 md:hover:scale-150 transition-transform">
        <img class="block w-7 h-7 md:w-10 md:h-10 object-contain rotate-180" src="/assets/arrow-right.svg"
          alt="button previous" />
      </button>
      <swiper class="w-full" :autoplay="{
        delay: 8000,
        disableOnInteraction: false,
      }" :loop="true" :autoHeight="true" :simulateTouch="false" :modules="modules" ref="swiperDOM">
        <swiper-slide class="h-full py-10 flex flex-col justify-center align-middle select-none"
          v-for="(items, i) in store.getTestimonials">
          <blockquote class="md:leading-10 text-base md:text-2xl lg:text-center text-beige-lighter my-auto"
            v-html="`&quot;${items.metadata.quote.replace(/\s\w+[.!?]?$/, '')}&nbsp;${items.metadata.quote.split(' ').pop()}&quot;`" />
          <h2 class="text-active md:px-0 mt-7 font-medium text-base tracking-wider text-left lg:text-center"
            v-html="items.metadata.author" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
const modules = [Autoplay]
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/scss';
import { ref, type Ref } from 'vue';
import { useStore } from '../stores';

const store = useStore()
if (!store.isFetched) store.load()

const swiperDOM = ref(null) as Ref<null | typeof Swiper>
</script>
