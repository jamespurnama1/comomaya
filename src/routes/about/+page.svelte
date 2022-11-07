<script lang="ts">
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min';
import { onMount } from 'svelte';
import Fa from 'svelte-fa/src/fa.svelte';
import { faBook, faPencil, faLaptop, faTrophy } from '@fortawesome/free-solid-svg-icons';

let posts = [
  {
    title: '',
    sub: '<strong>Why</strong><span> </span>us?',
    content: "<strong>COMOMAYA</strong> exists in order to make international standards of branding & design more accessible to new and upcoming brands, business owners and start-ups alike. To provide the highest quality of work, by engaging some of the best international talent there is, but without the exhorbitant price tag that comes with hiring a top global agency. To empower business owners & entrepreneurs with powerful brands that tell a story. To express them through great design that makes heads turn. To energise brands. And to add some magic.",
    img: "/assets/aboutus.mp4"
  },
  {
    title: '',
    sub: '<strong>How</strong><span> </span>do<span> </span>we<span> </span>do<span> </span>it?',
    content: "Let’s get this straight - what we are is value for money. What we are not is cheap. We have cherry picked some of best talent in the industry and across the globe. We keep things simple. We cut out the extra frills and layers of complexity that exist in large global agencies, and get straight to the point. We work in a fluid and organic way by engaging the right talent for the right job and don’t have unnecessary studio overheads. We almost always nail the creative work in the first stage, making it a seamless process right from the start.",
    img: "/assets/how-we-do-it.jpg"
  },
  {
    title: '',
    sub: '<strong>What</strong> we<span> </span>offer',
    content: "We build global brands and boutique & startup brands. We have a vibrant portfolio of clients ranging from FMCG to B2B and from corporate to boutique & luxury brands spread across various categories. We are multidisciplinary and provide holistic services for your brand woven together from day one.",
    img: "/assets/220212_Bobba_04_Website_Mobile.jpg"
  },
  // {
  //   title: '',
  //   sub: 'We Build Global Brands',
  //   content: "",
  //   img: "/assets/220212_Bobba_04_Website_Mobile.jpg"
  // },
  // {
  //   title: '',
  //   sub: 'and Boutique & Startup Brands',
  //   content: "",
  //   img: "/assets/220212_Bobba_04_Website_Mobile.jpg"
  // },
  {
    title: 'Ridhi Sain',
    sub: '<strong>Owner</strong> & Director',
    content: "Ridhi is an award-winning brand, identity & packaging designer, and founder of <strong>COMOMAYA</strong>. With a career spanning almost 20 years in the UK, Singapore & India, Ridhi is ex-Assoc Creative Director and Design Director of international agencies such as Coley Porter Bell (WPP Group), Pi Global, Holmes & Marchant and Cowan and has led and helped strategise, conceptualise & direct the creative work on many global brands. She has led the redesign of multiple bluechip brands including Unilever  in markets across the world and won design awards for her work on Comfort, Pernod Ricard and Johnsons Baby. More recently, she has worked with smaller boutique clients ranging from corporate to digital start ups and luxury brands, hand-holding them through their creative journey and helping them bring to life their vision.",
    img: "/assets/Ridhi.jpg"
  },
  {
    title: '',
    sub: '<strong>The</strong> Squad',
    content: "We have cherry picked some of best talent in the industry and across the globe as our project partners depending on the project, budget and skillset required.",
    img: "/assets/220212_Bobba_04_Website_Mobile.jpg"
  },
  {
    title: '',
    sub: "We are RMC certified",
    content: "Lorem Ipsum",
    img: "/assets/220212_Bobba_04_Website_Mobile.jpg",
  }
];

let slideshow = [
  "/assets/220212_Bobba_04_Website_Mobile.jpg",
  "/assets/220212_DEB_02-scaled.jpg",
  "/assets/220212_LeSal_02-scaled.jpg",
  "/assets/220212_Lovespun_08.jpg",
]

onMount(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".slideshowContainer img", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".slideshowContainer",
      scrub: true,
    },
  })

  // gsap.to(".break div", {
  //   yPercent: 50,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".break",
  //     scrub: true
  //   },
  // })

  const split: null | NodeListOf<HTMLSpanElement> = document.querySelectorAll('.split span');
    if (split) {
      const tl = gsap.timeline();
      gsap.to(split, {
        y: "-0.1em",
        duration: 0.5,
        stagger: 0.2,
      })
      gsap.to(split, {
        autoAlpha: 1,
        stagger: 0.2,
      })
    }

    const duration = 1;
    const pause = 0.75;
    const repeatDelay = (duration + pause) * (slideshow.length - 1) + pause;
    const stagger = {
      each: duration + pause,
      repeat: -1,
      repeatDelay,
    };

    const tl = gsap.timeline()
    tl.from(".slideshow", {
      autoAlpha: 0,
      stagger
    }, 0).to(".slideshow", {
      autoAlpha: 1,
      stagger,
      duration: 1},
    duration + pause);

    for(let i=0; i<10000; i++) {
      tl.set(document.querySelectorAll(".slideshow")[i%slideshow.length], {
        zIndex: i,
      }, i * (duration + pause));
    };
});
</script>

<style global>
  .split span {
    opacity: 0;
    visibility: hidden;
    margin-right: 0.2em;
    display: inline-block;
    transform: translateY(400%);
    line-height: 0.6;
    font-family: "Barlow";
    font-weight: 700;
  }

  .drama {
    font-family: "Narziss";
  }
  .drama strong {
    font-weight: 800;
    font-family: "Barlow";
    letter-spacing: -0.015em;
  }
  .drama span {
    letter-spacing: -0.15em;
  }
  /* p {
    font-family: "Barlow" !important;
  } */
</style>

<svelte:head>
  <title>COMOMAYA - About Us</title>
</svelte:head>

<main class="relative bg-black mx-auto flex flex-col justify-center pt-10 md:pt-20">
  <section class="flex flex-col justify-center min-h-screen py-10 md:mx-40">
    <h2 class="text-active mx-5 md:mx-0 font-semibold tracking-widest mb-5">HELLO</h2>
    <h1 class="split leading-5 mb-5 mx-5 md:mx-0 text-white text-4xl md:text-8xl font-semibold overflow-hidden">
      <span>We</span><span>are</span><strong><span>a</span><span>creative</span><span>boutique</span><span>agency</span></strong><span>and</span><span>we</span><strong><span>build</span><br /><span>powerful</span><span>brands</span></strong></h1>
    <p class="text-white text-xl mx-5 md:mx-0">Here to empower new business owners & entrepreneurs with great design and powerful brands that tell a story…</p>
  </section>
  <section class="slideshowContainer relative overflow-hidden h-96 md:h-screen z-0">
    {#each slideshow as pics, i}
      <img class="absolute opacity-0 slideshow brightness-75" src={pics} alt="" />
    {/each}
  </section>
  <section class="boxesContainer relative -top-52 -mb-52 flex flex-col md:flex-row h-min justify-center py-10">
    <div class="bg-beige mx-10 md:mx-3 m-3 p-12 h-min md:w-1/5">
      <Fa icon={faBook} size="2x" class="text-black" />
      <h3 class="text-2xl font-semibold my-3">Branding</h3>
      <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value. Leverage agile frameworks to provide a robust high level overviews.</p>
    </div>
    <div class="bg-beige mx-10 md:mx-3 m-3 p-12 h-min md:w-1/5">
      <Fa icon={faPencil} size="2x" class="text-black" />
      <h3 class="text-2xl font-semibold my-3">Design</h3>
      <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value. Leverage agile frameworks to provide a robust high level overviews.</p>
    </div>
    <div class="bg-beige mx-10 md:mx-3 m-3 p-12 h-min md:w-1/5">
      <Fa icon={faLaptop} size="2x" class="text-black" />
      <h3 class="text-2xl font-semibold my-3">Digital SCM</h3>
      <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value. Leverage agile frameworks to provide a robust high level overviews.</p>
    </div>
    <div class="bg-beige mx-10 md:mx-3 m-3 p-12 h-min md:w-1/5">
      <Fa icon={faTrophy} size="2x" class="text-black" />
      <h3 class="text-2xl font-semibold my-3">SEO</h3>
      <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value. Leverage agile frameworks to provide a robust high level overviews.</p>
    </div>
  </section>
  <!-- <section class="break flex flex-col justify-center m-12 my-36 md:my-52 md:m-52">
    <h4 class="text-white text-4xl md:text-8xl font-semibold text-center relative z-10">All-Stars Roster</h4>
    <p class="text-white text-center relative z-10">Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition organically grow the holistic world view of innovation.</p>
    <div class="bg-active h-40 w-3/4 absolute left-0 -translate-y-24 z-0" />
  </section> -->
  <div class="bg-white">
    {#each posts as post, i}
    <section class="{i === 1 ? "bg-beige md:flex-row-reverse" : ""}{(i % 2 === 0) ? "bg-beige md:flex-row" : "bg-black md:flex-row-reverse"} flex flex-col-reverse justify-center h-[80vh] my-24">
      <div class="md:w-2/3 px-5 md:px-16 my-auto {i%2 === 0 ? "md:pl-52" : "md:pr-52"}">
        <span class="mb-5 flex items-center">
          <h3 class="text-active text-2xl font-semibold tracking-widest {(i % 2 === 0) ? "text-right" : "text-left"}">{post.title.toUpperCase()}</h3>
          {#if i === 3}
            <img class="ml-5 max-h-12" src="/assets/awards.jpg" alt="Awards" />
          {/if}
        </span>
        <!-- {#if post.title !== ""}
          <hr class="border-active my-9 md:my-12 border w-28 md:w-44 {(i % 2 === 0) ? "ml-auto" : "mr-auto"}" />
        {/if} -->
        <h2 class="drama mb-5 text-4xl md:text-7xl overflow-hidden {(i % 2 === 0) ? "text-right text-black" : "text-left text-beige"}{i === 1 ? "text-black" : ""}">
          {@html post.sub}
        </h2>
        <p class="{(i % 2 === 0) ? "text-right text-black" : "text-left text-beige"}{i === 1 ? "text-black" : ""} text-lg">{@html post.content}</p>
      </div>
      <div class="w-full min-h-[15rem] md:w-1/2 overflow-hidden">
        {#if (/\.(gif|jpg|jpeg|tiff|png|webp)$/i).test(post.img)}
        <img class="w-full h-full object-cover" src={post.img} alt="" />
        {/if}
        {#if (/\.(mp4|webm)$/i).test(post.img)}
        <video class="w-full h-full object-cover" src={post.img} muted autoplay loop />
        {/if}
      </div>
    </section>
    {/each}
  </div>
  <section class="flex flex-col justify-center p-10 py-20 md:py-52 md:p-52">
    <h4 class="text-white text-4xl md:text-8xl font-semibold text-center mb-10">Brands</h4>
    <p class="text-white text-center mb-10 md:mb-20">Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition organically grow the holistic world view of innovation.</p>
    <div class="grid grid-rows-3 md:grid-rows-2 gap-3 md:gap-10 grid-flow-col-dense">
      {#each Array(12) as _}
        <img class="md:w-52 h-auto" src="/assets/220212_Bobba_04_Website_Mobile.jpg" alt="">
      {/each}
    </div>
  </section>
  <section class="flex flex-col items-center justify-center p-20 md:px-72 md:p-72 bg-beige">
    <h3 class="text-active text-xl font-semibold tracking-widest mb-5">START A PROJECT</h3>
    <h2 class="font-semibold p-2 mb-5 text-4xl md:text-5xl overflow-hidden">Ready to rock together?!</h2>
    <button class="relative z-0 my-16 w-fit bg-black text-beige py-3 px-5 hover:bg-beige hover:outline hover:text-black outline-black"><a href="/contact">Contact Us</a></button>
  </section>
  <!-- 
  <section>
    <h2><strong>Why</strong> us?</h2>
    <p>COMOMAYA exists in order to make international standards of branding & design more accessible to new and upcoming brands, business owners and start-ups alike.<br/>To provide the highest quality of work, by engaging some of the best international talent there is, but without the exhorbitant price tag that comes with hiring a top global agency. To empower business owners & entrepreneurs with powerful brands that tell a story. To express them through great design that makes heads turn. To energise brands. And to add some magic.</p>
    <img src="" alt="">
  </section>
  <section>
    <h2><strong>How</strong> do we do it?</h2>
    <p>Let’s get this straight - what we are is value for money. What we are not is cheap.<br/>We have cherry picked some of best talent in the industry and across the globe. We keep things simple. We cut out the extra frills and layers of complexity that exist in large global agencies, and get straight to the point. We work in a fluid and organic way by engaging the right talent for the right job and don’t have unnecessary studio overheads. We almost always nail the creative work in the first stage, making it a seamless process right from the start.</p>
    <img src="" alt="">
  </section>
  <section>
    <h2><strong>What</strong> we offer</h2>
    <p>We have a vibrant portfolio of clients ranging from FMCG to B2B and from corporate to boutique &amp; luxury brands spread across various categories. We are multidisciplinary and provide holistic services for your brand woven together from day one.</p>
    <img src="" alt="">
  </section>
  <section>
    <h2>We build global brands</h2>
    <img src="" alt="">
  </section>
  <section>
    <h2>and boutique &amp; startup brands</h2>
    <img src="" alt="">
  </section>
  <section>
    <h3>Ridhi Sain</h3>
    <h4>Founder & creative direction</h4>
    <p>Ridhi is an award-winning brand, identity & packaging designer, and founder of COMOMAYA.  With a career spanning almost 20 years in the UK, Singapore & India, Ridhi is ex-Assoc Creative Director and Design Director of international agencies such as Coley Porter Bell (WPP Group), Pi Global, Holmes & Marchant and Cowan and has led and helped strategise, conceptualise &amp; direct the creative work on many global brands. She has led the redesign of multiple bluechip brands including Unilever  in markets across the world  and won design awards for her work on Comfort, Pernod Ricard and Johnsons Baby. More recently, she has worked with smaller boutique clients ranging from corporate to digital start ups and luxury brands,  hand-holding them through their creative journey and helping them bring to life their vision. Her mission is to make beautiful design and strong branding accessible to upcoming and new brands around the world.</p>
  </section>
  <section>
    <h3>e Squad</h3>
    <p>We have cherry picked some of best talent in the industry and across the globe as our project partners depending on the project, budget and skillset required.</p>
  </section> -->
</main>