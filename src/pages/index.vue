<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useHead } from '@vueuse/head'
import { useStore } from '../stores'

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

let imageFade: GSAPTimeline;

const projectList = ref()
const main = ref()

async function loadContent() {
	loaded = true;

	await new Promise(resolve => setTimeout(resolve, 500));
	const skewSetter = gsap.quickSetter(projectList.value, "skewY", "deg");

	let proxy = { skew: 0 };
	const clamp = gsap.utils.clamp(-20, 20);
	gsap.set(projectList.value, { transformOrigin: "right center", force3D: true });

	const allBGs = gsap.utils.toArray(".bg")

	imageFade = gsap.timeline({ defaults: { ease: 'none', stagger: -2 } })
		.to(allBGs, { autoAlpha: 1, duration: 0.5 })
		.to({}, { duration: 1 }, 1)

	ScrollTrigger.create({
		trigger: main.value,
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

const scroll = ref(0)

const bounce = ref()

function updateScroll() {
	scroll.value = window.scrollY
}

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {

	window.addEventListener('scroll', updateScroll)

	// gsap.to(bounce, {
	// 	y: '+3em',
	// 	yoyo: true,
	// })

		setTimeout(() => {
			loadContent()
		}, 1000);
});

watch(() => store.isFetched, (x) => {
	if (!x && loaded) return
	loadContent()
})

onBeforeUnmount(() => {
	// gsap.to('html', { backgroundColor: "#A0AAC4" })
	if (imageFade) imageFade.kill()
	window.removeEventListener('scroll', updateScroll)
	if (!ScrollTrigger.getById("main")) return
	ScrollTrigger.getById("main")!.kill()
})

function scrollDown() {
	window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}
</script>

<template>
	<main ref="main" v-if="store.getFeatured.length" class="relative min-h-screen flex justify-center py-20">
		<ul class="portfoliosList flex flex-col justify-center md:mx-10 m-auto text-center group z-0">
			<li v-for="(portfolio, i) in store.getFeatured" ref="projectList" class="projectList py-32 md:py-24 transition-all opacity-50 md:group-hover:opacity-20 md:hover:!opacity-100">
				<a :aria-label="`Go to ${portfolio.metadata.featured_as}`" :href="`/work/${portfolio.slug}`">
					<h2 class="listChildren text-7xl font-bold text-white md:text-9xl">
						{{ portfolio.metadata.featured_as }}
					</h2>
				</a>
			</li>
		</ul>

		<font-awesome-icon ref="bounce" v-if="$route.path === '/'" @click="scrollDown" :icon="['fas', 'angles-down']" size="sm"
			class="text-active fixed left-1/2 top-[90vh] cursor-pointer transition" :class="[scroll > 300 ? 'opacity-0 pointer-events-none' : 'opacity-100']" />

		<img
			v-for="(image, i) in store.getFeatured.map(x => x.thumbnail).slice().reverse()"
			:srcset="`
				${image.toString()}?w=1920&auto=format 1920w,
				${image.toString()}?w=1024&auto=format 1024w,
				${image.toString()}?w=640&auto=format 640w,
				${image.toString()}?w=480&auto=format 480w`"
			:src="`${image.toString()}?auto=format`"
			:alt="store.getFeatured.slice().reverse()[i].title"
			class="bg h-screen fixed top-0 left-0 w-screen object-cover opacity-0" :style="`z-index: ${-i - 5}`"
		/>
		<img class="h-screen fixed top-0 left-0 w-screen object-cover"
			:style="`z-index: ${-store.getFeatured.map(x => x.thumbnail).length - 6}`"
			:src="`${store.getFeatured.map(x => x.thumbnail)[0].toString()}?auto=format`"
			:srcset="`
				${store.getFeatured.map(x => x.thumbnail)[0].toString()}?w=1920&auto=format 1920w,
				${store.getFeatured.map(x => x.thumbnail)[0].toString()}?w=1024&auto=format 1024w,
				${store.getFeatured.map(x => x.thumbnail)[0].toString()}?w=640&auto=format 640w,
				${store.getFeatured.map(x => x.thumbnail)[0].toString()}?w=480&auto=format 480w`"
			:alt="store.getFeatured[0].title" />
		<span class="absolute left-0 ml-8 bottom-10 flex flex-col justify-center">
			<a href="https://instagram.com/comomaya" aria-label="Open Comomaya's Instagram Page" target="_blank" rel="noopener noreferrer">
				<font-awesome-icon :icon="['fab', 'square-instagram']" size="xl" class="text-beige-normal m-2 hover:text-active" />
			</a>
			<a href="https://www.linkedin.com/company/comomaya" aria-label="Open Comomaya's Linkedin Page" target="_blank" rel="noopener noreferrer">
				<font-awesome-icon :icon="['fab', 'linkedin']" size="xl" class="text-beige-normal m-2 hover:text-active" />
			</a>
		</span>
	</main>
</template>