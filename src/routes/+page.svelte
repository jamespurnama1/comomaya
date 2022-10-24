<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from "gsap";
	// import { ScrollTrigger } from "gsap/ScrollTrigger";
	import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

// import { gsap, ScrollTrigger } from "../scripts/gsap";

// Data
let portfolios = [
	'Revolver',
	'Wizly',
	'Lovespun',
	'Gabongo',
	'Hamamoto',
];

function handleHover(index: number) {
	switch(index) {
		case 1:
			//change BG
			break;
	}
}

//scrolltrigger
const bgImages = [
	'220212_Revolver_05_Website_Mobile-scaled.jpg',
	'220212_Wizly_01_Logo-scaled.jpg',
	'220212_Lovespun_03_Brand-scaled.jpg',
	'220212_Gabongo_06_PPT-scaled.jpg',
	'220212_Hamamoto_02_VC-scaled.jpg',
];

let scrollProgress = 0;

onMount(() => {
	gsap.registerPlugin(ScrollTrigger);

	ScrollTrigger.create({ 
		trigger:".portfoliosList",
		start: "top top",
		end: "bottom bottom",
		// backgroundImage: `/assets/${bgImages[Math.round(scrollProgress * bgImages.length)]}`,
		onUpdate: self => {scrollProgress = self.progress; console.log(self.progress, Math.min(bgImages.length - 1, Math.round(scrollProgress * (bgImages.length - 1))))}
	})
})
</script>

<style>
	.bg {
		background-image: url('/assets/220212_Revolver_05_Website_Mobile-scaled.jpg');
		transition: background 0.25s linear;
	}
</style>

<svelte:head>
  {#each bgImages as image}
		<link rel="preload" as="image" href="/assets/{image}" />
	{/each}
</svelte:head>

<main class="min-h-screen flex justify-center my-20">
	<ul class="portfoliosList flex flex-col justify-center m-auto text-center group">
		{#each portfolios as portfolio, i}
			<li on:mouseover={() => handleHover(i)} on:focus={() => handleHover(i)} class="py-52">
				<a href="/portfolio/{portfolio}" class="transition-all group-hover:opacity-50 hover:!opacity-100">
					<h1 class="listChildren text-5xl font-semibold text-beige">{portfolio}</h1>
				</a>
			</li>
		{/each}
	</ul>
</main>
<div class="bg bg-cover bg-center bg-fixed bg-no-repeat min-h-screen fixed top-0 left-0 w-screen -z-10" style="{`background-image: url(/assets/${bgImages[Math.min(bgImages.length - 1, Math.round(scrollProgress * (bgImages.length - 1)))]}`}" />