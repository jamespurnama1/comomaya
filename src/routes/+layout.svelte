<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
	import { fly, fade, scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
  import "../app.postcss";
  import "../fonts.css";
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

  export const csr = false;
  export const prerender = true;

  // UI Logic
  let genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-yellow-50 transition ease transform duration-300`;
  let linkSelected = false;
  let links = [
    '/',
    'portfolio',
    'about',
    'contact'
  ];

  function scaleFade(node: HTMLElement, {start, duration}: {start: number, duration: number}) {
    return {
      duration,
      css: (t: number, u: number) => `transform: scale(${Math.abs(start - t)}); opacity: ${Math.max(0, t - 0.5)}`
    }
  }

  onMount(() => {
    const cursor: HTMLDivElement | null = document.querySelector('.cursor'); 
    
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function raf() {
      if (!cursor) return;
      cursor.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`;
      cursor.style.opacity = "1";
      requestAnimationFrame(raf)
    }

    raf()
    
    function hoverLink() {
      const links: NodeListOf<HTMLAnchorElement> | null = document.querySelectorAll('a');
      if (!links || !links.length) return

      links.forEach(item => {
        item.addEventListener('mouseover', () => {
          linkSelected = true;
        });
        item.addEventListener('mouseleave', () => {
          linkSelected = false;
        });
      })
    }

    hoverLink()
  })

  let opened = false;

  function handleNav() {
    opened = !opened;
  }

  let scrollUp = false;

  function handleScrollUp() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, IE, Opera
  }
</script>

<style>
  .moreNav {
    background-color: #faf8f4;
  }
</style>

<div class="cursor pointer-events-none z-50 absolute mix-blend-difference w-6 h-6 rounded-3xl bg-white opacity-0
  {linkSelected ? 'transition-transform scale-150' : ''}" />

<nav class="flex py-7 px-9 justify-between items-center z-20 relative">
  <!-- <img src="/COMOMAYA_Logo_Black_800x90.png" alt="COMOMAYA" width="800" height="91" class="img-responsive"> -->
  <a href="/"><img src="/COMOMAYA_Logo_Beige_800x90.png" alt="COMOMAYA" class="transition-all duration-700 h-6 img-responsive {opened ? 'brightness-0' : ''}"></a>
  <!-- <span class="lines" on:click={handleNav} on:keydown={handleNav}><span></span></span> -->
  <button
    class="flex flex-col h-12 w-12 justify-center items-center group p-2 -m-2 bg-black bg-opacity-0"
    on:click={handleNav}
    on:keydown={handleNav}
  >
      <div
        class={`${
          opened
            ? "rotate-45 translate-y-2.5 opacity-100 !bg-black"
            : "opacity-100"
        } ${genericHamburgerLine}`}
      />
      <div class={`${opened ? "opacity-0 !bg-black" : "opacity-100"} ${genericHamburgerLine}`} />
      <div
        class={`${
          opened
            ? "-rotate-45 -translate-y-2.5 opacity-100 !bg-black"
            : "opacity-100"
          } ${genericHamburgerLine}`}
      />
    </button>
  </nav>

  {#if opened}
  <nav transition:fly="{{ y: -200, duration: 500, easing: cubicInOut }}" class="moreNav w-screen absolute left-0 top-0 z-10">
    <ul class="text-center mt-24 mb-8">
      {#each links as link, i}
      <li transition:scaleFade="{{start: 2, duration: 500 + 50 * (i + 1)}}" class="my-3 text-lg hover:text-purple-500 {$page.url.pathname.includes(link) ? 'text-purple-500' : ''}">
        <a href="{link}">
          {link === '/' ? 'home' : link}
        </a>
      </li>
      {/each}
    </ul>
    <span class="flex justify-center mb-10">
      <a transition:scaleFade="{{start: 2, duration: 750}}" href="https://instagram.com/comomaya" target="_blank" rel="noopener noreferrer">
        <Fa icon={faInstagram} size="1.4x" class="mx-2 hover:text-purple-500" />
      </a>
      <a transition:scaleFade="{{start: 2, duration: 750}}" href="https://linkedin.com/comomaya" target="_blank" rel="noopener noreferrer">
        <Fa icon={faLinkedin} size="1.4x" class="mx-2 hover:text-purple-500" />
      </a>
    </span>
  </nav>
  {/if}

{#if scrollUp}
	<button on:click={handleScrollUp} on:keypress={handleScrollUp} class="z-20"></button>
{/if}

<slot></slot>