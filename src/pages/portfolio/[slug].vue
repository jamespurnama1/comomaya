<script lang="ts">
  import { reactive } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Pagination } from "swiper"
  import 'swiper/scss'
  import "swiper/scss/pagination"

  export default {
    components: {
      Swiper,
      SwiperSlide
    }
  }
</script>

<script setup lang="ts">
	import { onBeforeUnmount, onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'
	import { gsap } from "gsap"
  import { ScrollTrigger } from "gsap/ScrollTrigger"
  import { useHead } from '@vueuse/head'
  import { useStore } from '../../stores'

  interface Content {
    title: string;
    slug: string;
    content: string
    metadata: {
      description: string;
      client: string;
      industry: string;
      our_services: string;
    };
  }

  useHead({
    title: 'COMOMAYA - Portfolio',
    meta: [
      {
        name: 'COMOMAYA',
        content: 'Portfolio',
      },
    ],
  })

  const store = useStore()
  const route = useRoute()
  let contentID: number;
  let thisPage: Content = reactive({ content: {}});
  const modules = [Pagination]

  store.load()

 	async function load() {
		const res = await fetch('https://api.cosmicjs.com/v2/buckets/comomaya-production/objects?pretty=true&query=%7B%22type%22%3A%22portfolios%22%7D&read_key=a59I38Pp6PQ3OIRd6QnAQNvatVHRuIAfN3dzAnv8bFMD7p0qAF&limit=20&props=slug,title,content,metadata');
		const landing = await res.json();
		if(res.ok) {
      contentID = landing.objects.map(x => x.slug).indexOf(route.params.slug);
      thisPage.content = landing.objects[contentID];
      return landing;
    }

		return {
			status: res.status,
			// error: new Error(res.status.toString())
		}
	}

  function handleResize() {
    ScrollTrigger.refresh();
  }

  let featured = load();

  async function loadContent() {

    await new Promise(resolve => setTimeout(resolve, 500));
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      gsap.set('.content *:not(:first-child)', {
        y: "300px",
        autoAlpha: 0,
      });
      gsap.to('.content', {
        scrollTrigger: {
          id: "pin",
          trigger: '.info',
          pin: true,
          start: "top 50vh",
          end: "bottom bottom",
        }
      })
    })

    ScrollTrigger.batch('.content *', {
      start: "top 70%",
      onEnter: batch => gsap.to(batch, {
        autoAlpha: 1,
        stagger: 0.1,
        y: 0,
        duration: 0.75,
      }),
    });
  }
  
  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    handleResize();

    watch(() => thisPage.content, (x) => {
      if (!x) return
      loadContent()
    })
  })

  onBeforeUnmount(() => {
    if (ScrollTrigger.getById("pin")) ScrollTrigger.getById("pin")!.kill()
  })
</script>

<template>
  <main class="leading-relaxed min-h-screen py-32 bg-beige z-0 relative mx-10">
    <transition-group tag="section" v-if="thisPage && Object.keys(thisPage.content).length" class="flex flex-col md:justify-start md:flex-row justify-center first">
        <div
          key="content"
          v-html="thisPage.content.content"
          class="content flex flex-col items-center -mt-10 md:mt-0 md:w-2/3 md:pr-20"
        />
        <div key="info" class="info md:w-1/3">
          <h1 class="text-3xl font-medium md:mt-4 mt-20 mb-5">{{thisPage.content.title}}</h1>
          <p v-html="thisPage.content.metadata.description" />
          <hr class="my-5 border-gray" />
          <div class="flex">
            <span class="w-28">
              <p><b class="font-medium">Client</b></p>
              <p><b class="font-medium">Industry</b></p>
              <p><b class="font-medium">Our Services</b></p>
            </span>
            <span class="ml-3">
              <p>{{thisPage.content.metadata.client}}</p>
              <p>{{thisPage.content.metadata.industry}}</p>
              <p>{{thisPage.content.metadata.our_services}}</p>
            </span>
          </div>
          <hr class="my-5 border-gray"/>
          <span class="flex items-center">
            <p class="w-28"><b class="font-medium">Share</b></p>
            <span class="ml-3 flex">
              <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://www.comomaya.com${$route.fullPath}&title=Checkout%20${thisPage.content.title}&summary=[description]&source=https://www.comomaya.com`" target="_blank" rel="noreferrer noopener">
                <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" class="text-black mr-5 hover:text-active" />
              </a>
              <a :href="`https://twitter.com/share?text=Checkout%20${thisPage.content.title}%20at%20&url=https://www.comomaya.com${$route.fullPath}`" target="_blank" rel="noreferrer noopener">
                <font-awesome-icon :icon="['fab', 'twitter']" size="lg" class="text-black mr-5 hover:text-active" />
              </a>
              <a :href="`https://pinterest.com/pin/create/button/?url=https://www.comomaya.com${$route.fullPath}&description=Checkout%20${thisPage.content.title}`" target="_blank" rel="noreferrer noopener">
                <font-awesome-icon :icon="['fab', 'pinterest']" size="lg" class="text-black mr-5 hover:text-active" />
              </a>
              <a :href="`https://telegram.me/share/url?url=https://www.comomaya.com${$route.fullPath}&text=Checkout%20${thisPage.content.title}`" target="_blank" rel="noreferrer noopener">
                <font-awesome-icon :icon="['fab', 'telegram']" size="lg" class="text-black mr-5 hover:text-active" />
              </a>
            </span>
          </span>
        </div>
    </transition-group>
    <h2 class="text-3xl text-center font-medium mt-20 mb-3">Selected Works</h2>
    <hr class="my-5 border-active border-2 mx-auto w-1/4" />
    <swiper
      v-if="store.isFetched"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true
      }"
      :modules="modules"
      :slides-per-view="3"
      :space-between="10"
    >
      <swiper-slide tag="a" v-for="work in store.getFeatured" :href="`/portfolio/${work.slug}`">
        <div class="overflow-hidden h-96 w-full bg-cover" :style="`background-image: url(${work.thumbnail})`">
          <p class="absolute z-20 text-white bottom-5 left-10 text-2xl">{{work.title}}</p>
          <div class="h-full w-full bg-gradient-to-t from-black via-transparent" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" />
  </main>
</template>

<style lang="scss">
  .content {
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
	  background-color: theme('colors.active');
  }
</style>