<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
  import "../app.postcss";
  import "../fonts.css";
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

  export const csr = false;
  export const prerender = true;

  // UI Logic
  let innerWidth = 0;
	let innerHeight = 0;
  let scrollY = 0;
  let genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-beige transition ease transform duration-300`;
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

  function handleScrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    // document.body.scrollTop = 0; // Safari
    // document.documentElement.scrollTop = 0; //Chrome, Firefox, IE, Opera
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />

<div class="cursor pointer-events-none z-50 absolute mix-blend-difference w-6 h-6 rounded-3xl bg-white opacity-0
  {linkSelected ? 'transition-transform scale-150' : ''} {innerWidth < 570 ? '!opacity-0' : ''}" />

<nav class="fixed w-screen top-0 left-0 flex py-7 px-9 justify-between items-center z-20 transition-all bg-beige bg-opacity-0 {scrollY > 50 ? 'bg-opacity-100' : ''}">
  <!-- <img src="/COMOMAYA_Logo_Black_800x90.png" alt="COMOMAYA" width="800" height="91" class="img-responsive"> -->
  <a href="/"><img src="/COMOMAYA_Logo_Beige_800x90.png" alt="COMOMAYA" class="transition-all duration-700 h-6 img-responsive {opened || (scrollY > 50) ? 'brightness-0' : ''}"></a>
  <!-- <span class="lines" on:click={handleNav} on:keydown={handleNav}><span></span></span> -->
  <button
    class="flex flex-col h-12 w-12 justify-center items-center group p-2 -m-2"
    on:click={handleNav}
    on:keydown={handleNav}
  >
      <div
        class="{
          opened
            ? "rotate-45 translate-y-1.5 opacity-100 !bg-black"
            : "opacity-100"
        } {genericHamburgerLine} {(scrollY > 50) ? 'bg-black' : ''}"
      />
      <div class="{opened ? "opacity-0 !bg-black" : "opacity-100"} {genericHamburgerLine} {(scrollY > 50) ? 'bg-black' : ''}" />
      <div
        class="{
          opened
            ? "-rotate-45 -translate-y-1.5 opacity-100 !bg-black"
            : "opacity-100"
          } {genericHamburgerLine} {(scrollY > 50) ? 'bg-black' : ''}"
      />
    </button>
  </nav>

  {#if opened}
  <nav transition:fly="{{ y: -200, duration: 500, easing: cubicInOut }}" class="moreNav bg-beige w-screen fixed left-0 top-0 z-10">
    <ul class="text-center mt-24 mb-8">
      {#each links as link, i}
      <li transition:scaleFade="{{start: 2, duration: 500 + 50 * (i + 1)}}" class="my-3 text-lg hover:text-active {$page.url.pathname.includes(link) ? 'text-active' : ''}">
        <a href="{link}">
          {link === '/' ? 'home' : link}
        </a>
      </li>
      {/each}
    </ul>
    <span class="flex justify-center mb-10">
      <a transition:scaleFade="{{start: 2, duration: 750}}" href="https://instagram.com/comomaya" target="_blank" rel="noopener noreferrer">
        <Fa icon={faInstagram} size="1.4x" class="mx-2 hover:text-active" />
      </a>
      <a transition:scaleFade="{{start: 2, duration: 750}}" href="https://linkedin.com/comomaya" target="_blank" rel="noopener noreferrer">
        <Fa icon={faLinkedin} size="1.4x" class="mx-2 hover:text-active" />
      </a>
    </span>
  </nav>
  {/if}

{#if scrollY > 50}
	<button transition:fade on:click={handleScrollUp} on:keypress={handleScrollUp} class="flex justify-center items-center fixed bottom-5 right-5 bg-black w-10 h-10 z-20">
    <Fa icon={faAngleUp} size="1.4x" class="mx-2 text-beige" />
  </button>
{/if}

<slot></slot>