<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useHead } from '@vueuse/head'
import { useStore } from '../stores'

const store = useStore()

store.load()

const bgImages = await store.getFeatured.map(x => x.thumbnail);
const link: any = bgImages.map(x => ({
	rel: 'preload',
	as: 'image',
	href: x.toString()
}))

useHead({
	link,
})

let loaded = false;

let imageFade: GSAPTimeline;

async function loadContent() {
	loaded = true;

	await new Promise(resolve => setTimeout(resolve, 500));
	const skewSetter = gsap.quickSetter(".projectList", "skewY", "deg");

	let proxy = { skew: 0 };
	const clamp = gsap.utils.clamp(-20, 20);
	gsap.set(".projectList", { transformOrigin: "right center", force3D: true });

	const allBGs = gsap.utils.toArray(".bg")

	imageFade = gsap.timeline({ defaults: { ease: 'none', stagger: -2 } })
		.to(allBGs, { autoAlpha: 1, duration: 0.5 })
		.to({}, { duration: 1 }, 1)

	ScrollTrigger.create({
		trigger: "main",
		start: "top top",
		end: "bottom bottom",
		id: "main",
		animation: imageFade,
		scrub: 0.3,
		onUpdate: self => {
			let skew = clamp(self.getVelocity() / -300);
			// only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
			if (Math.abs(skew) > Math.abs(proxy.skew)) {
				proxy.skew = skew;
				gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
			}
		}
	})
}

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger);
	!loaded ? loadContent() : null
});

watch(() => store.isFetched, (x) => {
	if (!x && loaded) return
	loadContent()
})

onBeforeUnmount(() => {
	if (imageFade) imageFade.kill()
	if (!ScrollTrigger.getById("main")) return
	ScrollTrigger.getById("main")!.kill()
})
</script>

<template>
	<main v-if="store.getFeatured.length" class="min-h-screen flex md:justify-start justify-center py-20">
		<ul class="portfoliosList flex flex-col md:justify-start justify-center md:mx-10 m-auto md:text-left text-center group z-0">
			<li v-for="(portfolio, i) in store.getFeatured" class="projectList py-32 md:py-24">
				<a :href="`/work/${portfolio.slug}`" class="transition-all group-hover:opacity-50 hover:!opacity-100">
					<h2 class="listChildren text-7xl font-bold text-white md:text-9xl">
						{{ portfolio.title }}
					</h2>
				</a>
			</li>
		</ul>
		<img :src="image.toString()" :alt="store.getFeatured.slice().reverse()[i].title"
			v-for="(image, i) in store.getFeatured.map(x => x.thumbnail).slice().reverse()"
			class="bg h-screen fixed top-0 left-0 w-screen object-cover opacity-0" :style="`z-index: ${-i - 5}`" />
		<img class="h-screen fixed top-0 left-0 w-screen object-cover"
			:style="`z-index: ${-store.getFeatured.map(x => x.thumbnail).length - 6}`"
			:src="store.getFeatured.map(x => x.thumbnail)[0].toString()"
			:alt="store.getFeatured[0].title" />
		<span class="absolute left-0 ml-8 bottom-10 flex flex-col justify-center">
			<a href="https://instagram.com/comomaya" target="_blank" rel="noopener noreferrer">
				<font-awesome-icon :icon="['fab', 'square-instagram']" size="xl" class="text-beige m-2 hover:text-active" />
			</a>
			<a href="https://linkedin.com/comomaya" target="_blank" rel="noopener noreferrer">
				<font-awesome-icon :icon="['fab', 'linkedin']" size="xl" class="text-beige m-2 hover:text-active" />
			</a>
		</span>
	</main>
</template>