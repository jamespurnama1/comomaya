<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
  import { target } from "../store";
  import "../app.postcss";
  import "../fonts.css";
  import Fa from 'svelte-fa/src/fa.svelte';
  import Transition from "$root/components/transition.svelte"
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
    
    let raf: (number | null) = requestAnimationFrame(render);

    document.addEventListener('mousemove', function(e) {
      target.set({
        x: e.clientX,
        y: e.clientY,
      });
      cursor ? cursor.style.opacity = "1" : null;
      !raf ? raf = requestAnimationFrame(render) : null;
    });

    function render() {
      if (!cursor) return;
      if (linkSelected) {
        cursor.style.transform = `translate3d(${$target.x}px, ${$target.y}px, 0) scale(3)`;
      } else {
        cursor.style.transform = `translate3d(${$target.x}px, ${$target.y}px, 0)`;
      }

      raf = requestAnimationFrame(render);
    }
    
    function hoverLink() {
      const links: NodeListOf<HTMLAnchorElement> | null = document.querySelectorAll('a, button');
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

<div class="cursor origin-center pointer-events-none z-50 fixed mix-blend-difference w-6 h-6 -top-3 -left-3 rounded-3xl bg-white opacity-0 transition-transform ease-out {innerWidth < 570 ? '!opacity-0' : ''}" />

<nav class="fixed w-screen top-0 left-0 flex py-7 px-9 justify-between items-center z-30 transition-all bg-beige bg-opacity-0 origin-top-left {(scrollY > 50)  || $page.url.pathname !== '/' ? 'bg-opacity-100' : ''} {(scrollY > 50) ? 'scale-y-80' : ''}">
  <!-- <img src="/COMOMAYA_Logo_Black_800x90.png" alt="COMOMAYA" width="800" height="91" class="img-responsive"> -->
  <a href="/">
    <img src="/COMOMAYA_Logo_Beige_800x90.png" alt="COMOMAYA" class="transition-all duration-700 h-6 img-responsive origin-top-left {opened || (scrollY > 50) || $page.url.pathname !== '/' ? 'brightness-0' : ''} {scrollY > 50 ? 'scale-75' : ''}">
  </a>
  <!-- <span class="lines" on:click={handleNav} on:keydown={handleNav}><span></span></span> -->
  <button
    class="flex flex-col h-12 w-12 justify-center items-center group p-2 -m-2 transition-transform {scrollY > 50 ? '-translate-y-2 scale-y-125' : ''}"
    on:click={handleNav}
    on:keydown={handleNav}
  >
      <div
        class="{
          opened
            ? "rotate-45 translate-y-1.5 opacity-100 !bg-black"
            : "opacity-100"
        } {genericHamburgerLine} {(scrollY > 50)  || $page.url.pathname !== '/' ? 'bg-black' : ''}"
      />
      <div class="{opened ? "opacity-0 !bg-black" : "opacity-100"} {genericHamburgerLine} {(scrollY > 50)  || $page.url.pathname !== '/' ? 'bg-black' : ''}" />
      <div
        class="{
          opened
            ? "-rotate-45 -translate-y-1.5 opacity-100 !bg-black"
            : "opacity-100"
          } {genericHamburgerLine} {(scrollY > 50)  || $page.url.pathname !== '/' ? 'bg-black' : ''}"
      />
    </button>
  </nav>

  {#if opened}
  <nav transition:fly="{{ y: -200, duration: 500, easing: cubicInOut }}" class="moreNav bg-beige w-screen fixed left-0 top-0 z-20">
    <ul class="text-center mt-24 mb-8">
      {#each links as link, i}
      <li transition:scaleFade="{{start: 2, duration: 500 + 50 * (i + 1)}}" class="my-3 text-lg hover:text-active {$page.url.pathname.includes(link) ? 'text-active' : ''}">
        <a on:click="{handleNav}" href="{link}">
          {link === '/' ? 'home' : link}
        </a>
      </li>
      {/each}
    </ul>
    <span class="flex justify-center mb-10">
      <a transition:scaleFade="{{start: 2, duration: 750}}" on:click="{handleNav}" href="https://instagram.com/comomaya" target="_blank" rel="noopener noreferrer">
        <Fa icon={faInstagram} size="1.4x" class="mx-2 hover:text-active" />
      </a>
      <a transition:scaleFade="{{start: 2, duration: 750}}" on:click="{handleNav}" href="https://linkedin.com/comomaya" target="_blank" rel="noopener noreferrer">
        <Fa icon={faLinkedin} size="1.4x" class="mx-2 hover:text-active" />
      </a>
    </span>
  </nav>
  <div transition:fade on:click={handleNav} on:keydown={handleNav} class="fixed w-screen h-screen bg-opacity-50 bg-black z-10" />
  {/if}

{#if scrollY > 50}
	<button transition:fade on:click={handleScrollUp} on:keypress={handleScrollUp} class="flex justify-center items-center fixed bottom-10 right-10 bg-black w-10 h-10 z-20">
    <Fa icon={faAngleUp} size="1.2x" class="mx-2 text-beige" />
  </button>
{/if}

{#key $page.url.pathname}
  <Transition url={$page.url}>
    <slot />
  </Transition>
{/key}
