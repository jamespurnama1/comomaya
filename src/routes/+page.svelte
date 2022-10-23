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
onMount(() => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.to(".bg", {
		scrollTrigger: '.portfoliosList',
		backgroundImage: '',
	})
})
</script>

<style>
	.bg {
		background-image: url('/assets/220212_DEB_01_Logo-1536x988.jpg');
	}
</style>

<main class="min-h-screen">
	<ul class="portfoliosList m-auto text-center group">
		{#each portfolios as portfolio, i}
			<li on:mouseover={() => handleHover(i)} on:focus={() => handleHover(i)} class="my-12">
				<a href="/portfolio/{portfolio}" class="transition-all group-hover:opacity-50 hover:!opacity-100">
					<h1 class="listChildren text-5xl font-semibold text-white">{portfolio}</h1>
				</a>
			</li>
		{/each}
	</ul>
</main>
<div class="bg min-h-screen fixed top-0 left-0 w-screen -z-10" />