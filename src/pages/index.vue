<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useHead } from '@unhead/vue';
import { useStore } from '../stores';

const store = useStore()

store.load()

const bgImages = store.getFeatured.map(x => x.thumbnail);
const link: any = bgImages.map(x => ({
	rel: 'preload',
	as: 'image',
	href: x.toString()
}))

useHead({
	link,
})

let loaded = false;

async function loadContent() {
	loaded = true;

	await new Promise(resolve => setTimeout(resolve, 1000));

	gsap.to(".bounce", {
		y: '+=10px',
		duration: 1,
		yoyo: true,
		yoyoEase: "power2.in",
		repeat: - 1
	})
}

const scroll = ref(0)

function updateScroll() {
	scroll.value = window.scrollY;
}


onMounted(() => {

	setTimeout(() => {
		loadContent()
		document.documentElement.setAttribute('data-theme', 'beige');
		window.addEventListener('scroll', updateScroll)
	}, 100);
});

watch(() => store.isFetched, (x) => {
	if (!x && loaded) return
	loadContent()
})

onBeforeUnmount(() => {
	document.documentElement.setAttribute('data-theme', 'lavender');
	window.removeEventListener('scroll', updateScroll)
	if (!ScrollTrigger.getById("main")) return
	ScrollTrigger.getById("main")!.kill()
})

function scrollDown() {
	window.scrollTo({ top: (window.innerHeight * 0.8) - (store.getWidth > 768 ? 106 : 62), behavior: 'smooth' });
}
</script>

<template>
	<div>
		<button @click="scrollDown" :class="[scroll > 300 ? 'opacity-0 pointer-events-none' : 'opacity-100']"
			class="flex flex-col items-center justify-center absolute top-[75vh] left-1/2 -translate-x-1/2 transition-all duration-500">
			<img
				class="block w-8 h-8 md:w-12 md:h-12 object-contain group-hover:translate-x-5 transition-transform duration-300 rotate-90 bounce"
				src="/assets/arrow-right-darker.svg" alt="button next" />
		</button>
		<div class="overflow-hidden relative w-full h-[85vh]">
      <div class="bg-gradient-to-b from-black to-transparent w-full h-24 opacity-35 absolute z-[1] top-0 left-0"></div>
			<video v-if="store.getWidth > 768" muted autoplay preload="true" playsinline="true" loop src="/assets/hero.mp4"
				class="object-cover w-full h-full relative" />
			<video v-else muted autoplay preload="true" playsinline="true" loop src="/assets/hero_vertical.mp4"
				class="object-cover w-full h-full relative" />
		</div>
		<Splash />
		<Service v-if="store.isFetched" />
		<RMC />
		<Brands />
		<Testimonials />
	</div>
</template>

<style>
.portfoliosList {
	-ms-overflow-style: none;
	/* Internet Explorer 10+ */
	scrollbar-width: none;
	/* Firefox */
}

.portfoliosList::-webkit-scrollbar {
	display: none;
	/* Safari and Chrome */
}
</style>
