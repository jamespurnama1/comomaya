<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useHead } from '@unhead/vue'
import { useStore } from '../../stores'
import { reactive, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from "swiper/modules"
import "swiper/scss/pagination"
import 'swiper/scss'
import axios, { AxiosResponse } from 'axios'
import { useSchemaOrg } from '@unhead/schema-org'

interface Content {
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  metadata: {
    description: string;
    client: string;
    industry: string;
    our_services: string;
  };
}

const store = useStore();
const route = useRoute<'/work/[slug]'>();
let contentID: number;
let thisPage = ref({ content: { title: 'Works', thumbnail: '', slug: '', content: '', metadata: { description: 'A creative boutique agency building powerful brands' } } as Content });
const modules = [Pagination];

useHead({
  title: () => `${thisPage.value.content.title} - COMOMAYA`,
  meta: [
    {
      name: 'description',
      content: () => thisPage.value.content.metadata.description.replace(/&nbsp;|<br>/g, ' '),
    },
  ],
})

store.load()

async function load() {
  axios.get(`https://api.cosmicjs.com/v3/buckets/comomayacom-production/objects?pretty=true&query=%7B%22type%22:%22portfolios%22%7D&read_key=${import.meta.env.VITE_COSMIC_KEY}&depth=1&props=slug,title,metadata,content,thumbnail`, { withCredentials: false })
    .then((res: AxiosResponse<{ objects: Content[] }>) => {
      contentID = res.data.objects.map(x => x.slug).indexOf(route.params.slug);
      thisPage.value.content = res.data.objects[contentID];
      if (!thisPage.value.content) return;
      useSchemaOrg([
        schema.value
      ], {
        tagDuplicateStrategy: 'replace'
      })
    }).catch((err) => {
      console.error(err)
      return err
    })
}

const schema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": "CreativeWork",
  "url": `https://www.comomaya.com/work/${thisPage.value.content.slug}`,
  "identifier": `https://www.comomaya.com/work/${thisPage.value.content.slug}`,
  "thumbnailUrl": thisPage.value.content.thumbnail,
  "image": thisPage.value.content.thumbnail,
  "text": thisPage.value.content.content,
  "description": thisPage.value.content.metadata.description,
  "name": thisPage.value.content.title,
  "headline": thisPage.value.content.title,
  "genre": "http://vocab.getty.edu/aat/300418056",
  "creator": {
    "@type": "Organization",
    "name": "COMOMAYA"
  }
}))

async function loadContent() {

  await new Promise(resolve => setTimeout(resolve, 500));
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.set('.content :nth-child(n+3)', {
      y: "300px",
      autoAlpha: 0,
    });
    gsap.to('section', {
      scrollTrigger: {
        id: "pin",
        trigger: '.info',
        pin: true,
        pinType: 'fixed',
        start: "-50px 50vh",
        end: "bottom bottom",
      }
    })
  })

  ScrollTrigger.batch('.content :nth-child(n+2)', {
    start: "top bottom",
    onEnter: batch => gsap.to(batch, {
      autoAlpha: 1,
      stagger: 0.1,
      y: '-1px',
      duration: 0.35,
    }),
  });
}

load();

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.setAttribute('data-theme', 'beige');

  watch(() => thisPage.value.content, (x) => {
    if (!x) return
    loadContent()
  })
})

onBeforeUnmount(() => {
  document.documentElement.setAttribute('data-theme', 'lavender');
  if (ScrollTrigger.getById("pin")) ScrollTrigger.getById("pin")!.kill()
})
</script>

<template>
  <main class="leading-relaxed min-h-screen py-32 bg-beige-lighter z-0 relative px-9 md:px-20 xl:px-36">
    <transition-group tag="section" v-if="thisPage && Object.keys(thisPage.content).length"
      class="flex flex-col md:justify-start md:flex-row justify-center first">
      <div key="content" v-html="thisPage.content.content"
        class="content flex flex-col items-center -mt-10 md:mt-0 md:w-2/3 md:pr-20" />
      <div key="info" class="info md:w-1/3">
        <h1 class="text-black text-5xl md:text-6xl font-extrabold leading-[0.85em] md:mt-0 mt-3 mb-5 lowercase">
          {{ thisPage.content.title }}</h1>
        <p v-html="thisPage.content.metadata.description" />
        <hr class="my-5 border-stone-300" />
        <div class="flex">
          <span class="w-28">
            <p><b class="font-medium">Client</b></p>
            <p><b class="font-medium">Industry</b></p>
            <p><b class="font-medium">Our&nbsp;Services</b></p>
          </span>
          <span class="ml-3">
            <p>{{ thisPage.content.metadata.client }}</p>
            <p>{{ thisPage.content.metadata.industry }}</p>
            <p>{{ thisPage.content.metadata.our_services }}</p>
          </span>
        </div>
        <hr class="my-5 border-stone-300" />
        <span class="flex items-center">
          <p class="w-28"><b class="font-medium">Share</b></p>
          <span class="ml-3 flex">
            <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://www.comomaya.com${$route.fullPath}&title=Check%20out%20${thisPage.content.title}&summary=[description]&source=https://www.comomaya.com`"
              target="_blank" rel="noreferrer noopener" aria-label="Share on Linkedin">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="lg"
                class="transition-all text-stone-300 mr-5 hover:text-active" />
            </a>
            <a :href="`whatsapp://send?text=Check%20out%20${thisPage.content.title} on https://www.comomaya.com${$route.fullPath}`"
              target="_blank" rel="noreferrer noopener" aria-label="Share on WhatsApp">
              <font-awesome-icon :icon="['fab', 'whatsapp']" size="lg"
                class="transition-all text-stone-300 mr-5 hover:text-active" />
            </a>
          </span>
        </span>
      </div>
    </transition-group>
    <h2 class="text-3xl text-center font-medium mt-20 mb-3">Selected Works</h2>
    <hr class="my-5 border-stone-300 border-2 mx-auto w-1/4" />
    <swiper v-if="store.isFetched" :pagination="{
      el: '.swiper-pagination',
      clickable: true
    }" :modules="modules" :slides-per-view="store.getWidth > 768 ? 3 : 1" :space-between="10">
      <swiper-slide tag="a" v-for="work in store.getFeatured" :key="work.slug" :href="`/work/${work.slug}`">
        <div class="overflow-hidden h-96 w-full bg-cover bg-center"
          :style="`background-image: url(${work.thumbnail}?q=75&auto=format,compress)`">
          <p class="absolute z-20 text-white bottom-5 left-10 text-2xl">{{ work.title }}</p>
          <div class="h-full w-full bg-gradient-to-t from-black via-transparent" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" />
  </main>
</template>

<style lang="scss" scoped>
.drama {
  font-family: Narziss;
  font-weight: regular;
}
</style>

<style lang="scss">
.content {

  p video:nth-child(-n + 2),
  p img:nth-child(-n + 2),
  p picture:nth-child(-n + 2) {
    opacity: 1;
  }

  img,
  img.fr-fic,
  img.fr-dib,
  picture,
  video {
    margin: 0;
    transform-origin: "top";
    width: 100% !important;
    min-width: 100% !important;
    height: auto;
    opacity: 0;
  }
}

.swiper-pagination-bullet-active {
  background-color: theme('colors.black');
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  @apply text-active;
}


@media screen and (max-width: 768px) {
  .swiper-pagination {
    bottom: initial !important;
  }
}
</style>