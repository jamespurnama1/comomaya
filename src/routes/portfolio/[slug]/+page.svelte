<script lang="ts">
	import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faInstagram, faLinkedin, faTwitter, faPinterest, faXing, faTelegram } from '@fortawesome/free-brands-svg-icons';
	import { gsap } from "gsap";
	import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

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

	// Data
	let res = load();
  let imgData = [
    "220212_Bobba_04_Website_Mobile-scaled-uai-1032x774.jpg",
    "220212_DEB_01_Logo-scaled-uai-1032x774.jpg",
    "220212_Everstone_01_Logo-scaled-uai-1032x774.jpg",
    "220212_Gabongo_06_PPT-scaled-uai-1032x774.jpg",
    "220212_Hamamoto_02_VC-scaled-uai-1032x774.jpg",
    "220212_LeSal_01-scaled-uai-1032x774.jpg",
    "220212_Lovespun_03_Brand-scaled-uai-1032x774.jpg",
    "220212_MargieWarrell_01-scaled-uai-1032x774.jpg",
    "220212_Revolver_05_Website_Mobile-scaled-uai-1032x774.jpg",
    "220212_Sazerac_04-scaled-uai-1032x774.jpg",
    "220212_StudioQ_01-scaled-uai-1032x774.jpg",
    "220212_TheUrban_01-scaled-uai-1032x774.jpg",
    "220212_Wizly_01_Logo-scaled-uai-1032x774.jpg",
  ]

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    loadContent()
		
		async function loadContent() {
			const content = await load();
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set('img:not(.logo)', {
          scale: 1.4,
          opacity: 0,
        });
        gsap.to('.info', {
          scrollTrigger: {
            trigger: '.info',
            pin: true,
            start: "top 50vh",
          }
        })
      })

      ScrollTrigger.batch('img:not(.logo)', {
        onEnter: batch => gsap.to(batch, {
          autoAlpha: 1,
          stagger: 0.1,
          scale: 1,
        }),
      });
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".pics",
      //   }
      // })

      // tl.from(".pics", {
      //   autoAlpha: 0,
      //   scale: 1.2,
      //   stagger: 0.2
      // })
    }
  });
</script>

<style global>
  img, img.fr-fic, img.fr-dib {
    margin: 1.25em 0;
    transform-origin: "top";
    width: 100% !important;
    height: auto;
  }
</style>

<main class="leading-relaxed min-h-screen py-32 bg-beige z-0 relative mx-10">
  <section class="flex flex-col md:justify-start md:flex-row justify-center">
    {#await res}
      <h1>Loading...</h1>
    {:then portfolios}
      <div class="flex flex-col items-center -mt-10 md:mt-0 md:w-2/3 md:pr-20">
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
            <a href="" target="_blank" rel="noreferrer noopener"><Fa icon={faXing} size="1.4x" class="text-black mr-5 hover:text-active" /></a>
            <a href="mailto:"><Fa icon={faTelegram} size="1.4x" class="text-black mr-5 hover:text-active" /></a>
          </span>
        </span>
      </div>
    {:catch error}
      <h1>Something weird is happening.</h1>
      <h3>Try refreshing the page.</h3>
    {/await}
  </section>
  <h2 class="text-3xl text-center font-medium mt-20 mb-3">Selected Works</h2>
  <hr class="my-5 border-active border-2 mx-auto w-1/4  " />
</main>
