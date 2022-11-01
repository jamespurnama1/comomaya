<script lang="ts">
  import { onMount } from 'svelte';
  import { target } from "../../store";
  import { gsap } from "gsap";

  let portfolios = {
    "Bobba Group": "Branding, Web Design, Stationery",
    "Duk Egg Blu": "Branding",
    "Everstone": "Branding",
    "Gabongo": "Branding, Presentation, Stationery",
    "Hamamoto": "Branding, Stationery",
    "Le Sal": "Branding, Web Design",
    "Lovespun": "Branding, Web Design",
    "Margie Warrell": "Branding, Web Design, Stationery",
    "Revolver": "Branding, Web Design, Presentation, Stationery",
    "Sazerac": "Branding, Web Design, Stationery",
    "Studio Q": "Branding, Web Design, Stationery",
    "The Urban Hotel": "Branding, Stationery",
    "Wizly": "Branding, Web Design, Stationery",
  }

  let imgData = {
    "Bobba Group": "220212_Bobba_04_Website_Mobile-scaled-uai-1032x774.jpg",
    "Duk Egg Blu": "220212_DEB_01_Logo-scaled-uai-1032x774.jpg",
    "Everstone": "220212_Everstone_01_Logo-scaled-uai-1032x774.jpg",
    "Gabongo": "220212_Gabongo_06_PPT-scaled-uai-1032x774.jpg",
    "Hamamoto": "220212_Hamamoto_02_VC-scaled-uai-1032x774.jpg",
    "Le Sal": "220212_LeSal_01-scaled-uai-1032x774.jpg",
    "Lovespun": "220212_Lovespun_03_Brand-scaled-uai-1032x774.jpg",
    "Margie Warrell": "220212_MargieWarrell_01-scaled-uai-1032x774.jpg",
    "Revolver": "220212_Revolver_05_Website_Mobile-scaled-uai-1032x774.jpg",
    "Sazerac": "220212_Sazerac_04-scaled-uai-1032x774.jpg",
    "Studio Q": "220212_StudioQ_01-scaled-uai-1032x774.jpg",
    "The Urban Hotel": "220212_TheUrban_01-scaled-uai-1032x774.jpg",
    "Wizly": "220212_Wizly_01_Logo-scaled-uai-1032x774.jpg",
  }

  let imgSrc = "220212_Bobba_04_Website_Mobile-scaled-uai-1032x774.jpg";
  let imgAlt = "";
  let show = false;
  // let x = 0;
  // let y = 0;
  let handleHover: Function;
  let handleOut: Function;

  onMount(() => {
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
      imgSrc = Object.values(imgData)[i];
      imgAlt = Object.keys(imgData)[i];
      gsap.to(imgEl, {
        opacity: 1,
        duration: 0.3,
      });

      // if ('target' in e) {
      //   x = (e.target as HTMLAnchorElement).getBoundingClientRect().right;
      //   y = (e.target as HTMLAnchorElement).getBoundingClientRect().bottom;
      // }

      // !raf ? raf = requestAnimationFrame(render) : null;
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
  })
</script>

<style lang="scss">
</style>

<img src="/assets/{imgSrc}" alt="{imgAlt}" class="imgP fixed max-w-md h-auto top-0 left-0 opacity-0 z-10 pointer-events-none" />
<main class="min-h-screen flex justify-center py-32 bg-beige z-0 relative mx-28 md:justify-start">
  <ul class="grid">
    {#each Object.entries(portfolios) as [name, type], i}
      <li>
        <a href="/portfolio/{name.trim().toLowerCase()}">
          <span class="flex py-10" on:focus="{(e) => handleHover(e, i)}" on:mouseover="{(e) => handleHover(e, i)}" on:blur="{handleOut}" on:mouseout="{handleOut}">
            <h2 class="text-7xl font-semibold">{name.toUpperCase()}</h2>
            <h3 class="text-s font-semibold">{type}</h3>
          </span>
        </a>
      </li>
    {/each}
  </ul>
</main>
