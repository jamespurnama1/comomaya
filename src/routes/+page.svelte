<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from "gsap";
	import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
	import Fa from 'svelte-fa/src/fa.svelte';
  import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	async function load() {
		const res = await fetch('https://api.cosmicjs.com/v2/buckets/comomaya-production/objects?query=%7B%22type%22%3A%22landing%22%2C%22slug%22%3A%22home%22%7D&pretty=true&read_key=a59I38Pp6PQ3OIRd6QnAQNvatVHRuIAfN3dzAnv8bFMD7p0qAF&props=metadata');
		const landing = await res.json();
		if(res.ok) return landing;

		return {
			status: res.status,
			// error: new Error(res.status.toString())
		}
	}

	let res = load();
	let imageIndex = 0;
	let bgImages: string[] = [];
	const dark = 0.2;
	
	function handleHover(index: number) {
		imageIndex = index;
		if (!bgImages.length) return
		gsap.set(".bg", {
			backgroundImage: `linear-gradient(
          rgba(0, 0, 0, ${dark}), 
          rgba(0, 0, 0, ${dark})
				),
				url(${bgImages[imageIndex]})`
			});
	}

	onMount(() => {

		gsap.registerPlugin(ScrollTrigger);

		loadContent()
		
		async function loadContent() {
			const content = await load();
			const skewSetter = gsap.quickSetter(".projectList", "skewY", "deg");
			bgImages = content.objects[0].metadata.featured.map((x: {thumbnail: string}) => x.thumbnail);

			let proxy = { skew: 0 };
			const clamp = gsap.utils.clamp(-20, 20);
			gsap.set(".projectList", {transformOrigin: "right center", force3D: true});
			gsap.set(".bg", {
				backgroundImage: `linear-gradient(
          rgba(0, 0, 0, ${dark}), 
          rgba(0, 0, 0, ${dark})
				),
				url(${bgImages[imageIndex]})`
			});
			
			ScrollTrigger.create({
				trigger:".portfoliosList",
				start: "top top",
				end: "bottom bottom",
				onUpdate: self => {
					imageIndex = Math.min(bgImages.length - 1, Math.round(self.progress * (bgImages.length - 1)));
					gsap.set(".bg", {
						backgroundImage: `linear-gradient(
							rgba(0, 0, 0, ${dark}), 
							rgba(0, 0, 0, ${dark})
						),
						url(${bgImages[imageIndex]})`
					});
					let skew = clamp(self.getVelocity() / -300);
					// only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
					if (Math.abs(skew) > Math.abs(proxy.skew)) {
						proxy.skew = skew;
						gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
					}
				}
			})
		}
	})

</script>

<style>
	.bg {
		transition: background-image 0.25s linear;
	}
</style>

<svelte:head>
	{#await res then portfolios}
		{#each portfolios.objects[0].metadata.featured as portfolio}
			<link rel="preload" as="image" href={portfolio.thumbnail} />
		{/each}
	{/await}
</svelte:head>

<main class="min-h-screen flex justify-center py-20">
	{#await res}
		<h1>Loading...</h1>
	{:then portfolios}
		<ul class="portfoliosList flex flex-col justify-center m-auto text-center group z-0">
			{#each portfolios.objects[0].metadata.featured as portfolio, i}
				<li on:mouseover={() => handleHover(i)} on:focus={() => handleHover(i)} class="projectList py-52 md:py-24">
					<a href="/portfolio/{portfolio.slug}" class="transition-all group-hover:opacity-50 hover:!opacity-100">
						<h2 class="listChildren text-5xl font-semibold text-white md:text-9xl">{portfolio.title}</h2>
					</a>
				</li>
			{/each}
		</ul>
		<div class="bg bg-cover bg-center bg-fixed bg-no-repeat min-h-screen fixed top-0 left-0 w-screen -z-10" />
	{:catch error}
		<h1>Something weird is happening.</h1>
		<h3>Try refreshing the page.</h3>
	{/await}
	    <span class="md:block hidden fixed left-0 ml-8 bottom-10 flex flex-col justify-center">
      <a href="https://instagram.com/comomaya" target="_blank" rel="noopener noreferrer">
        <Fa icon={faInstagram} size="1.4x" class="text-beige mx-2 hover:text-active my-2" />
      </a>
      <a href="https://linkedin.com/comomaya" target="_blank" rel="noopener noreferrer">
        <Fa icon={faLinkedin} size="1.4x" class="text-beige mx-2 hover:text-active my-2" />
      </a>
    </span>
</main>