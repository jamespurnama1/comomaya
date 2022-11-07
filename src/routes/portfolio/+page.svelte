<script lang="ts">
  import { onMount } from 'svelte';
  import { target } from "../../store";
  import { gsap } from "gsap";
  import { fade } from 'svelte/transition';

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

	let res = load();

  let imgSrc = "";
  let imgAlt = "";
  let show = false;
  let handleHover: Function = () => {};
  let handleClick: Function = () => {};
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

      let clicked: number | null = null;

      handleClick = (e: Event, i: number) => {
        console.log(e.currentTarget, (e.currentTarget as HTMLAnchorElement).getAttribute("href"))
        if (window.innerWidth > 768 || clicked === i) {
          e.target ? window.location.href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")! : null;
        } else {
          clicked = i
          handleHover(null, i)
        }
      }

      handleHover = (_e: MouseEvent | FocusEvent, i: number) => {
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
  <title>COMOMAYA - Portfolio</title>
</svelte:head>

<img src={imgSrc} alt={imgAlt} class="imgP fixed max-w-[10rem] md:max-w-md h-auto top-0 left-0 opacity-0 z-10 pointer-events-none" />
<main class="min-h-screen flex justify-center py-32 bg-beige z-0 relative mx-10 md:mx-28 md:justify-start">
  <ul class="grid">
    {#await res}
      <h1 transition:fade>Loading...</h1>
    {:then portfolios}
      {#each portfolios.objects[0].metadata.list as portfolio, i}
        <li in:fade>
          <a href="/portfolio/{portfolio.slug}" on:click|preventDefault={(e) => handleClick(e, i)}>
            <span class="flex py-3 md:py-10 flex-wrap" on:focus="{(e) => handleHover(e, i)}" on:mouseover="{(e) => handleHover(e, i)}" on:blur="{handleOut}" on:mouseout="{handleOut}">
              <h2 class="text-4xl md:text-7xl whitespace-nowrap font-semibold">{portfolio.title}</h2>
              <h3 class="text-xs md:text-s font-semibold whitespace-nowrap">{portfolio.metadata.type}</h3>
            </span>
          </a>
        </li>
      {/each}
    {:catch error}
      <span>
        <h1>Something weird is happening.</h1>
        <h3>Try refreshing the page.</h3>
      </span>
    {/await}
  </ul>
</main>
