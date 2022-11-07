<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
  import { page } from '$app/stores';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faInstagram, faLinkedin, faTwitter, faPinterest, faTelegram } from '@fortawesome/free-brands-svg-icons';
	import { gsap } from "gsap";
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min';
	import { data } from '$src/store'
  import { browser } from '$app/environment';
  import { fade } from 'svelte/transition';

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

  let contentID: number;
  let thisPage: Content;
  let carouselCount = 1;
  let Carousel;
  let count = 1;

 	async function load() {
		const res = await fetch('https://api.cosmicjs.com/v2/buckets/comomaya-production/objects?pretty=true&query=%7B%22type%22%3A%22portfolios%22%7D&read_key=a59I38Pp6PQ3OIRd6QnAQNvatVHRuIAfN3dzAnv8bFMD7p0qAF&limit=20&props=slug,title,content,metadata');
		const landing = await res.json();
		if(res.ok) {
      contentID = landing.objects.map(x => x.slug).indexOf($page.params.slug);
      thisPage = landing.objects[contentID];
      return landing;
    }

		return {
			status:res.status,
			// error: new Error(res.status.toString())
		}
	}


	async function load2() {
		if(Object.keys($data).length) return $data
		const res2 = await fetch('https://api.cosmicjs.com/v2/buckets/comomaya-production/objects?query=%7B%22type%22%3A%22landing%22%2C%22slug%22%3A%22home%22%7D&pretty=true&read_key=a59I38Pp6PQ3OIRd6QnAQNvatVHRuIAfN3dzAnv8bFMD7p0qAF&props=metadata');
		const works = await res2.json();
		if(res2.ok) {
			data.set(works)
			return works;
		}

		return {
			status: res2.status,
			// error: new Error(res.status.toString())
		}
	}

  function handleResize() {
    count = window.innerWidth > 768 ?  3 : 1
    ScrollTrigger.refresh();
  }

	// Data
	let res = load();
  let featured = load2();

  function onLoad() {
  }
  
  onMount(async() => {
    gsap.registerPlugin(ScrollTrigger);
    const module = await import('svelte-carousel');
    Carousel = module.default;
    handleResize();
    loadContent();
		
		async function loadContent() {
			const content = await load();
      const mm = gsap.matchMedia();

      await new Promise(resolve => setTimeout(resolve, 500));
      
      mm.add("(min-width: 768px)", () => {
        gsap.set('.content *', {
          y: "300px",
          autoAlpha: 0,
        });
        gsap.to('.content', {
          scrollTrigger: {
            trigger: '.info',
            pin: true,
            start: "top 50vh",
            end: "bottom top",
          }
        })
      })

      ScrollTrigger.batch('.content *', {
        start: "top 75%",
        onEnter: batch => gsap.to(batch, {
          autoAlpha: 1,
          stagger: 0.1,
          y: 0,
          duration: 1.5,
        }),
      });
    }

    loadFeatured();

    async function loadFeatured() {
      const content = await load2();
      await new Promise(resolve => setTimeout(resolve, 500));
      carouselCount = 
        window.innerWidth > 768 ?
        Math.ceil(content.objects[0].metadata.featured.length / 3) :
        Math.ceil(content.objects[0].metadata.featured.length);

      // handleCarousel = (i: number) => {
      //   Carousel.goTo(i);
      // }
    }
  });
</script>

<style global>
  .content img,
  .content img.fr-fic,
  .content img.fr-dib,
  .content picture,
  .content video {
    margin: 0;
    transform-origin: "top";
    width: 100% !important;
    min-width: 100% !important;
    height: auto;
    opacity: 0;
  }

  .sc-carousel__carousel-container {
    height: 24rem;
    width: 100%;
  }
</style>

<svelte:head >
  <title>{thisPage ? `COMOMAYA - ${thisPage.title}` : "COMOMAYA - Loading..."}</title>
</svelte:head>

<svelte:window on:load={onLoad} on:resize={handleResize} />

<main class="leading-relaxed min-h-screen py-32 bg-beige z-0 relative mx-10">
  <section class="flex flex-col md:justify-start md:flex-row justify-center first">
    {#await res}
      <h1 transition:fade>Loading...</h1>
    {:then portfolios}
      <div in:fade class="content flex flex-col items-center -mt-10 md:mt-0 md:w-2/3 md:pr-20">
        <!-- {#each imgData as images}
          <img class="pics my-5 origin-top" src="/assets/{images}" alt="" />
        {/each} -->
        {@html thisPage.content}
      </div>
      <div class="info md:w-1/3">
        <h1 class="text-3xl font-medium md:mt-4 mt-20 mb-5">{thisPage.title}</h1>
        <p>{thisPage.metadata.description}</p>
        <hr class="my-5 border-gray" />
        <div class="flex">
          <span class="w-28">
            <p><b class="font-medium">Client</b></p>
            <p><b class="font-medium">Industry</b></p>
            <p><b class="font-medium">Our Services</b></p>
          </span>
          <span class="ml-3">
            <p>{thisPage.metadata.client}</p>
            <p>{thisPage.metadata.industry}</p>
            <p>{thisPage.metadata.our_services}</p>
          </span>
        </div>
        <hr class="my-5 border-gray"/>
        <span class="flex items-center">
          <p class="w-28"><b class="font-medium">Share</b></p>
          <span class="ml-3 flex">
            <a href="" target="_blank" rel="noreferrer noopener"><Fa icon={faInstagram} size="1.4x" class="text-black mr-5 hover:text-active" /></a>
            <a href="" target="_blank" rel="noreferrer noopener"><Fa icon={faLinkedin} size="1.4x" class="text-black mr-5 hover:text-active" /></a>
            <a href="" target="_blank" rel="noreferrer noopener"><Fa icon={faTwitter} size="1.4x" class="text-black mr-5 hover:text-active" /></a>
            <a href="" target="_blank" rel="noreferrer noopener"><Fa icon={faPinterest} size="1.4x" class="text-black mr-5 hover:text-active" /></a>
            <a href="mailto:"><Fa icon={faTelegram} size="1.4x" class="text-black mr-5 hover:text-active" /></a>
          </span>
        </span>
      </div>
    {:catch error}
      <span>
        <h1>Something weird is happening.</h1>
        <h3>Try refreshing the page.</h3>
      </span>
    {/await}
  </section>
  <h2 class="text-3xl text-center font-medium mt-20 mb-3">Selected Works</h2>
  <hr class="my-5 border-active border-2 mx-auto w-1/4  " />
  {#await featured}
    <p>Loading...</p>
  {:then works}
    <!-- <div class="siema h-96 w-full"> -->
    {#if browser}
      <svelte:component this={Carousel} particlesToShow={count} particlesToScroll={Math.max(count, 1)}>
      {#each works.objects[0].metadata.featured as work}
        <a href="/portfolio/{work.slug}">
          <div class="overflow-hidden h-96 w-full bg-cover" style="background-image: url({work.thumbnail})">
              <p class="absolute z-20 text-white bottom-5 left-10 text-2xl">{work.title}</p>
              <div class="h-full w-full bg-gradient-to-t from-black via-transparent" />
          </div>
        </a>
        {/each}
    <!-- </div> -->
      </svelte:component>
    {/if}
    <!-- <div class="mx-auto w-min mt-10 flex">
      {#each Array(carouselCount) as _, i}
        <svg height="20" width="20" on:click={(i) => handleCarousel(i)} on:keypress={(i) => handleCarousel(i)}>
          <circle cx="10" cy="10" r="5" />
        </svg>
      {/each}
    </div> -->
    {:catch error}
      <span>
        <h1>Something weird is happening.</h1>
        <h3>Try refreshing the page.</h3>
      </span>
  {/await}
</main>
