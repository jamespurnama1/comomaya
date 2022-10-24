<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from "gsap";
	import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
	import Fa from 'svelte-fa/src/fa.svelte';
  import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	// Data
	let portfolios = [
		'Revolver',
		'Wizly',
		'Lovespun',
		'Gabongo',
		'Hamamoto',
	];

	function handleHover(index: number) {
		imageIndex = index;
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
	let imageIndex = Math.min(bgImages.length - 1, Math.round(scrollProgress * (bgImages.length - 1)))
	let proxy = { skew: 0 };
	const clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 
	
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		
		const skewSetter = gsap.quickSetter(".projectList", "skewY", "deg"); // fast
		// make the right edge "stick" to the scroll bar. force3D: true improves performance
		gsap.set(".projectList", {transformOrigin: "right center", force3D: true});

		ScrollTrigger.create({ 
			trigger:".portfoliosList",
			start: "top top",
			end: "bottom bottom",
			onUpdate: self => {
				scrollProgress = self.progress
				let skew = clamp(self.getVelocity() / -300);
				// only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
				if (Math.abs(skew) > Math.abs(proxy.skew)) {
					proxy.skew = skew;
					gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
				}
			}
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

<main class="min-h-screen flex justify-center py-20">
	<ul class="portfoliosList flex flex-col justify-center m-auto text-center group z-0">
		{#each portfolios as portfolio, i}
			<li on:mouseover={() => handleHover(i)} on:focus={() => handleHover(i)} class="projectList py-52 md:py-24">
				<a href="/portfolio/{portfolio}" class="transition-all group-hover:opacity-50 hover:!opacity-100">
					<h1 class="listChildren text-5xl font-semibold text-beige md:text-9xl">{portfolio}</h1>
				</a>
			</li>
		{/each}
	</ul>
	    <span class="fixed left-5 bottom-10 flex flex-col justify-center">
      <a href="https://instagram.com/comomaya" target="_blank" rel="noopener noreferrer">
        <Fa icon={faInstagram} size="1.4x" class="text-beige mx-2 hover:text-active my-2" />
      </a>
      <a href="https://linkedin.com/comomaya" target="_blank" rel="noopener noreferrer">
        <Fa icon={faLinkedin} size="1.4x" class="text-beige mx-2 hover:text-active my-2" />
      </a>
    </span>
</main>
<div class="bg bg-cover bg-center bg-fixed bg-no-repeat min-h-screen fixed top-0 left-0 w-screen -z-10" style="{`background-image: url(/assets/${bgImages[imageIndex]}`}" />