<script lang="ts">
  import { onMount } from 'svelte';
  import { target } from "../../store";
  import { gsap } from "gsap";

  async function load() {
		const res = await fetch('https://api.cosmicjs.com/v2/buckets/comomaya-production/objects?query=%7B%22type%22%3A%22portfolio-list%22%2C%22slug%22%3A%22list%22%7D&pretty=true&read_key=a59I38Pp6PQ3OIRd6QnAQNvatVHRuIAfN3dzAnv8bFMD7p0qAF&props=metadata');
		const landing = await res.json();
		await setTimeout(() => {}, 5000)
		if(res.ok) return landing;

		return {
			status:res.status,
			// error: new Error(res.status.toString())
		}
	}

	// Data
	let res = load();

  // let portfolios = {
  //   "Bobba Group": "Branding, Web Design, Stationery",
  //   "Duk Egg Blu": "Branding",
  //   "Everstone": "Branding",
  //   "Gabongo": "Branding, Presentation, Stationery",
  //   "Hamamoto": "Branding, Stationery",
  //   "Le Sal": "Branding, Web Design",
  //   "Lovespun": "Branding, Web Design",
  //   "Margie Warrell": "Branding, Web Design, Stationery",
  //   "Revolver": "Branding, Web Design, Presentation, Stationery",
  //   "Sazerac": "Branding, Web Design, Stationery",
  //   "Studio Q": "Branding, Web Design, Stationery",
  //   "The Urban Hotel": "Branding, Stationery",
  //   "Wizly": "Branding, Web Design, Stationery",
  // }

  // let imgData = {
  //   "Bobba Group": "220212_Bobba_04_Website_Mobile-scaled-uai-1032x774.jpg",
  //   "Duk Egg Blu": "220212_DEB_01_Logo-scaled-uai-1032x774.jpg",
  //   "Everstone": "220212_Everstone_01_Logo-scaled-uai-1032x774.jpg",
  //   "Gabongo": "220212_Gabongo_06_PPT-scaled-uai-1032x774.jpg",
  //   "Hamamoto": "220212_Hamamoto_02_VC-scaled-uai-1032x774.jpg",
  //   "Le Sal": "220212_LeSal_01-scaled-uai-1032x774.jpg",
  //   "Lovespun": "220212_Lovespun_03_Brand-scaled-uai-1032x774.jpg",
  //   "Margie Warrell": "220212_MargieWarrell_01-scaled-uai-1032x774.jpg",
  //   "Revolver": "220212_Revolver_05_Website_Mobile-scaled-uai-1032x774.jpg",
  //   "Sazerac": "220212_Sazerac_04-scaled-uai-1032x774.jpg",
  //   "Studio Q": "220212_StudioQ_01-scaled-uai-1032x774.jpg",
  //   "The Urban Hotel": "220212_TheUrban_01-scaled-uai-1032x774.jpg",
  //   "Wizly": "220212_Wizly_01_Logo-scaled-uai-1032x774.jpg",
  // }

  let imgSrc = "";
  let imgAlt = "";
  let show = false;
  // let x = 0;
  // let y = 0;
  let handleHover: Function = () => {};
  let handleOut: Function = () => {};

  onMount(() => {
    loadContent()
		
		async function loadContent() {
      const content = await load();
      console.log(content);
      const imgEl: HTMLDivElement | null = document.querySelector('.imgP'); 
      let raf: (number | null) = null;

      function render() {
        gsap.to(imgEl, {
          x: $target.x,
          y: $target.y,
          duration: 1,
        })
        show ? raf = requestAnimationFrame(render) : null;
      }

      handleHover = (e: MouseEvent | FocusEvent, i: number) => {
        show = true;
        imgSrc = content.objects[0].metadata.list.map((x: {thumbnail: string}) => x.thumbnail)[i];
        imgAlt = content.objects[0].metadata.list.map((x: {title: string}) => x.title)[i];
        gsap.to(imgEl, {
          opacity: 1,
          duration: 0.3,
        });

        raf = requestAnimationFrame(render);
      }

      handleOut = () => {
        show = false;
        gsap.to(imgEl, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            raf ? cancelAnimationFrame(raf) : null;
          },
        })
      }
    }
  })
</script>

<svelte:head>
	{#await res then portfolios}
		{#each portfolios.objects[0].metadata.list as portfolio}
			<link rel="preload" as="image" href={portfolio.thumbnail} />
		{/each}
	{/await}
</svelte:head>

<img src={imgSrc} alt={imgAlt} class="imgP fixed max-w-md h-auto top-0 left-0 opacity-0 z-10 pointer-events-none" />
<main class="min-h-screen flex justify-center py-32 bg-beige z-0 relative mx-28 md:justify-start">
  <ul class="grid">
    {#await res}
      <h1>Loading...</h1>
    {:then portfolios}
      {#each portfolios.objects[0].metadata.list as portfolio, i}
        <li>
          <a href="/portfolio/{portfolio.slug}">
            <span class="flex py-10" on:focus="{(e) => handleHover(e, i)}" on:mouseover="{(e) => handleHover(e, i)}" on:blur="{handleOut}" on:mouseout="{handleOut}">
              <h2 class="text-7xl font-semibold">{portfolio.title}</h2>
              <h3 class="text-s font-semibold">{portfolio.metadata.type}</h3>
            </span>
          </a>
        </li>
      {/each}
    {:catch error}
      <h1>Something weird is happening.</h1>
      <h3>Try refreshing the page.</h3>
    {/await}
  </ul>
</main>
