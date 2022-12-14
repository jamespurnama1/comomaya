<script setup lang="ts">
  import { useHead } from '@vueuse/head'
  import {gsap} from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
  import { onMounted, onBeforeUnmount } from 'vue';

  useHead({
    title: 'COMOMAYA - Portfolio',
    meta: [
      {
        name: 'COMOMAYA',
        content: 'Portfolio',
      },
    ],
  })

const posts = [
  {
    title: '',
    sub: '<strong>Why</strong><span> </span>us?',
    content: "<strong>COMOMAYA</strong> exists in order to make international standards of branding & design more accessible to new and upcoming brands, business owners and start-ups alike. To provide the highest quality of work, by engaging some of the best international talent there is, but without the exhorbitant price tag that comes with hiring a top global agency. To empower business owners & entrepreneurs with powerful brands that tell a story. To express them through great design that makes heads turn. To energise brands. And to add some&nbsp;magic.",
    img: "/assets/aboutus.mp4"
  },
  {
    title: '',
    sub: '<strong>How</strong><span> </span>do<span> </span>we<span> </span>do<span> </span>it?',
    content: "Let’s get this straight - what we are is value for money. What we are not is cheap. We have cherry picked some of best talent in the industry and across the globe. We keep things simple. We cut out the extra frills and layers of complexity that exist in large global agencies, and get straight to the point. We work in a fluid and organic way by engaging the right talent for the right job and don’t have unnecessary studio overheads. We almost always nail the creative work in the first stage, making it a seamless process right from the&nbsp;start.",
    img: "/assets/how-we-do-it.jpg"
  },
  {
    title: '',
    sub: '<strong>What</strong> we<span> </span>offer',
    content: "We build global brands and boutique & startup brands. We have a vibrant portfolio of clients ranging from FMCG to B2B and from corporate to boutique & luxury brands spread across various categories. We are multidisciplinary and provide holistic services for your brand woven together from day&nbsp;one.",
    img: "/assets/220212_Bobba_04_Website_Mobile.jpg"
  },
  {
    title: 'Ridhi Sain',
    sub: '<strong>Owner</strong> & Director',
    content: "Ridhi is an award-winning brand, identity & packaging designer, and founder of <strong>COMOMAYA</strong>. With a career spanning almost 20 years in the UK, Singapore & India, Ridhi is ex-Assoc Creative Director and Design Director of international agencies such as Coley Porter Bell (WPP Group), Pi Global, Holmes & Marchant and Cowan and has led and helped strategise, conceptualise & direct the creative work on many global brands. She has led the redesign of multiple bluechip brands including Unilever  in markets across the world and won design awards for her work on Comfort, Pernod Ricard and Johnsons Baby. More recently, she has worked with smaller boutique clients ranging from corporate to digital start ups and luxury brands, hand-holding them through their creative journey and helping them bring to life their&nbsp;vision.",
    img: "/assets/Ridhi.jpg"
  },
  {
    title: '',
    sub: '<strong>The</strong> Squad',
    content: "We have cherry picked some of best talent in the industry and across the globe as our project partners depending on the project, budget and skillset&nbsp;required.",
    img: "/assets/220212_Bobba_04_Website_Mobile.jpg"
  },
  {
    title: '',
    sub: "We are RMC certified",
    content: "Lorem&nbsp;Ipsum",
    img: "/assets/220212_Bobba_04_Website_Mobile.jpg",
  }
];

let tl: GSAPTimeline

const slideshow = [
  "/assets/220212_Bobba_04_Website_Mobile.jpg",
  "/assets/220212_DEB_02-scaled.jpg",
  "/assets/220212_LeSal_02-scaled.jpg",
  "/assets/220212_Lovespun_08.jpg",
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".slideshowContainer img", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".slideshowContainer",
      scrub: true,
      id: "slideshow"
    },
  })

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

    tl = gsap.timeline()
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

	onBeforeUnmount(() => {
		tl.kill()
		if (!ScrollTrigger.getById("slideshow")) return
		ScrollTrigger.getById("slideshow")!.kill()
	})
</script>

<template>
  <main class="relative bg-black mx-auto flex flex-col justify-center pt-10 md:pt-20">
    <section class="flex flex-col justify-center min-h-screen py-10 md:mx-40">
      <h2 class="text-active mx-5 md:mx-0 font-semibold tracking-widest mb-5">HELLO</h2>
      <h1 class="split leading-10 mb-5 mx-5 md:mx-0 text-white text-4xl md:text-8xl font-semibold overflow-hidden">
        <span>We</span><span>are</span><strong><span>a</span><span>creative</span><span>boutique</span><span>agency</span></strong><span>and</span><span>we</span><strong><span>build</span><br /><span>powerful</span><span>brands</span></strong></h1>
      <p class="text-white text-xl mx-5 md:mx-0">Here to empower new business owners &amp; entrepreneurs with great design and powerful brands that tell a story…</p>
    </section>
    <section class="slideshowContainer relative overflow-hidden h-96 md:h-screen z-0">
      <img v-for="(pics, i) in slideshow" class="absolute opacity-0 slideshow brightness-75" :src="pics" alt="" />
    </section>
    <section class="boxesContainer relative -top-52 -mb-52 flex flex-col md:flex-row h-min justify-center py-10">
      <div class="bg-beige mx-10 md:mx-3 m-3 p-12 h-min md:w-1/5">
        <font-awesome-icon :icon="['fas', 'book']" size="2x" class="text-black" />
        <h3 class="text-2xl font-semibold my-3">Branding</h3>
        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value. Leverage agile frameworks to provide a robust high level overviews.</p>
      </div>
      <div class="bg-beige mx-10 md:mx-3 m-3 p-12 h-min md:w-1/5">
        <font-awesome-icon :icon="['fas', 'pencil']" size="2x" class="text-black" />
        <h3 class="text-2xl font-semibold my-3">Design</h3>
        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value. Leverage agile frameworks to provide a robust high level overviews.</p>
      </div>
      <div class="bg-beige mx-10 md:mx-3 m-3 p-12 h-min md:w-1/5">
        <font-awesome-icon :icon="['fas', 'laptop']" size="2x" class="text-black" />
        <h3 class="text-2xl font-semibold my-3">Digital SCM</h3>
        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value. Leverage agile frameworks to provide a robust high level overviews.</p>
      </div>
      <div class="bg-beige mx-10 md:mx-3 m-3 p-12 h-min md:w-1/5">
        <font-awesome-icon :icon="['fas', 'trophy']" size="2x" class="text-black" />
        <h3 class="text-2xl font-semibold my-3">SEO</h3>
        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value. Leverage agile frameworks to provide a robust high level overviews.</p>
      </div>
    </section>
    <div class="bg-white">
      <section v-for="(post, i) in posts"
        :class="[(i % 2 === 0 ? 'bg-beige md:flex-row' : 'bg-black md:flex-row-reverse'), (i === 1 ? '!bg-beige md:flex-row-reverse' : '')]"
        class="flex flex-col-reverse justify-center md:min-h-[80vh] my-24">
        <div class="md:w-2/3 px-5 md:px-16 my-auto" :class="[i % 2 === 0 ? 'md:pl-52' : 'md:pr-52']">
          <span class="my-5 md:mb-5 flex items-center">
            <h3 class="text-active text-2xl font-semibold tracking-widest" :class="[i % 2 === 0 ? 'text-right' : 'text-left']">{{post.title.toUpperCase()}}</h3>
              <img v-if="i === 3" class="md:ml-5 md:max-h-12 max-h-6 mx-5" src="/assets/awards.jpg" alt="Awards" />
          </span>
          <h2 v-html="post.sub"
            class="drama mb-1 md:mb-5 text-4xl md:text-7xl overflow-hidden"
            :class="[(i % 2 === 0 ? 'text-right text-black' : 'text-left text-beige'), (i === 1 ? 'text-black' : '')]"
          >
          </h2>
          <p v-html="post.content" :class="[(i % 2 === 0 ? 'text-right text-black' : 'text-left text-beige'), (i === 1 ? 'text-black' : '')]" class="pb-10 text-lg"></p>
        </div>
        <div class="w-full min-h-[15rem] md:w-1/2 overflow-hidden">
          <img v-if="(/\.(gif|jpg|jpeg|tiff|png|webp)$/i).test(post.img)" class="w-full h-full object-cover" :src="post.img" :alt="post.title" />
          <video v-if="(/\.(mp4|webm)$/i).test(post.img)" class="w-full h-full object-cover" :src="post.img" muted autoplay loop />
        </div>
      </section>
    </div>
    <section class="flex flex-col justify-center p-10 py-20 md:py-52 md:p-52">
      <h4 class="text-white text-4xl md:text-8xl font-semibold text-center mb-10">Brands</h4>
      <p class="text-white text-center mb-10 md:mb-20">
        Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition organically grow the holistic world view of&nbsp;innovation.
      </p>
      <div class="grid grid-rows-3 md:grid-rows-2 gap-3 md:gap-10 grid-flow-col-dense">
        <img v-for="i in 12" class="md:w-52 h-auto" src="/assets/220212_Bobba_04_Website_Mobile.jpg" alt="">
      </div>
    </section>
    <section class="flex flex-col items-center justify-center p-20 md:px-72 md:p-72 bg-beige">
      <h3 class="text-active text-xl font-semibold tracking-widest mb-5">START A PROJECT</h3>
      <h2 class="font-semibold p-2 mb-5 text-4xl md:text-5xl overflow-hidden">Ready to rock together?!</h2>
      <button class="relative z-0 my-16 w-fit bg-black text-beige py-3 px-5 hover:bg-beige hover:outline hover:text-black outline-black">
        <a href="/contact">Contact Us</a>
      </button>
    </section>
  </main>
</template>

<style lang="scss">
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
</style>