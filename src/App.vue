<script setup lang="ts">
import { onUpdated, ref, reactive, onMounted, computed, type Ref, watch } from 'vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useRouter, useRoute } from 'vue-router';
import { gsap } from 'gsap';
import { useStore } from './stores';
import { useSchemaOrg } from '@unhead/schema-org'

const router = useRouter()
const route = useRoute()
const store = useStore()

useHead({
  title: 'COMOMAYA - Branding | Design | Digital | Social Media',
  meta: [
    {
      name: 'description',
      content: 'A creative boutique agency building powerful brands',
    },
  ],
})

useSchemaOrg([
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.comomaya.com",
    "url": "https://www.comomaya.com",
    "sameAs": [
      "https://www.instagram.com/comomaya",
      "https://www.linkedin.com/company/comomaya"
    ],
    "logo": "https://www.comomaya.com/cropped-Comomaya_Symbol_Black_HD-270x270.png",
    "name": "COMOMAYA",
    "description": "A creative boutique agency building powerful brands",
    "email": "ridhisain@comomaya.com",
    "telephone": "+65-9424-5994"
  }
])

useSeoMeta({
  charset: 'utf-8',
  description: 'A creative boutique agency building powerful brands',
  ogImage: '',
})

const pop = ref(false)
let timeout: ReturnType<typeof setTimeout>;
const scrollY = ref(0);
const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full transition ease transform duration-300 bg-active group-hover:bg-black`;
const linkSelected = ref(false);
const links = [
  '',
  'work',
  'about',
  'services',
  'contact'
];
const target = reactive({ x: 0, y: 0 })
let hoverables: NodeListOf<HTMLAnchorElement> | null = null

const cursor: Ref<HTMLDivElement | null> = ref(null);

onMounted(() => {
  timeout = setTimeout(() => {
    pop.value = true
  }, 10000)
  store.width = window.innerWidth
  const classNames = [];
  if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) classNames.push('device-ios');
  if (navigator.userAgent.match(/android/i)) classNames.push('device-android');
  if (document.querySelector("html")) document.querySelector("html")!.classList.add.apply(document.querySelector("html")!.classList, classNames);

  let raf: (number | null) = requestAnimationFrame(render);

  function render() {
    if (!cursor.value) return;
    if (linkSelected.value) {
      cursor.value.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) scale(1)`;
    } else {
      cursor.value.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) scale(33%)`;
    }

    raf = requestAnimationFrame(render);
  }

  window.addEventListener('resize', () => {
    store.width = window.innerWidth
  })

  document.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })

  document.addEventListener('mousemove', function (e) {
    target.x = e.clientX,
      target.y = e.clientY,
      cursor.value ? cursor.value.style.opacity = "1" : null;
    !raf ? raf = requestAnimationFrame(render) : null;
  });
  hoverLink()

  watch(route, (to) => {
    if (to.hash) {
      setTimeout(() => {
        document.querySelector(to.hash) ? window.scrollTo({
          top: document.querySelector(to.hash)!.getBoundingClientRect().top + window.scrollY - 50,
          behavior: "smooth"
        }) : null
      }, 1000);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }, { flush: 'pre', immediate: true, deep: true })
})

function openPop() {
  pop.value = true;
  timeout ? clearTimeout(timeout) : null;
}

function whatisLink(l: string) {
  if (l === 'grants') return '/about#grant'
  if (l === 'services') return '/services'
  if (l === 'work') return '/work'
  if (l === 'about') return '/about'
  return `/${l}`
}

function hoverLink() {
  hoverables = document.querySelectorAll('a, button, input, label, .select, .swiper-button-prev, .swiper-button-next');
  if (!hoverables || !hoverables.length) return
  hoverables.forEach(item => {
    if (item.getAttribute('listener') === 'true') return
    item.addEventListener('mouseover', () => {
      linkSelected.value = true;
    });
    item.addEventListener('mouseleave', () => {
      linkSelected.value = false;
    });
  })
}

function flip(e: TouchEvent | MouseEvent, touch: boolean, href: string) {
  if (touch && !touchmoved.value) {
    setTimeout(() => {
      router.push(whatisLink(href))
      handleNav(true);
    }, 600);
  } else if (!touchmoved.value) {
    router.push(whatisLink(href))
    handleNav(true);
  }
  touchmoved.value = false;
}

onUpdated(() => {
  hoverLink()
})

const opened = ref(false)
const touchmoved = ref(false)

function handleNav(close: boolean | undefined) {
  if (close) {
    opened.value = false
  } else {
    opened.value = !opened.value;
  }
  if (opened.value) {
    gsap.set('body', { overflow: 'hidden' })
  } else {
    gsap.set('body', { overflow: 'auto' })
  }
}

function handleScrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const isBlue = computed(() => {
  const blue = ['/work/[slug]']
  if (opened.value) return false
  return blue.some(item => item === route.name) ? true : false;
})

const isTransparent = computed(() => {
  return (route.path === '/' || route.path === '/about')
    && scrollY.value < 50
})
</script>

<template>
  <!-- Cursor -->

  <div ref="cursor"
    class="origin-center cursor transform-gpu pointer-events-none z-50 fixed w-16 h-16 -top-8 -left-8 rounded-full opacity-0 transition-transform ease-out"
    :class="[store.getWidth <= 570 ? '!opacity-0' : '', opened || $route.name === '/work/[slug]' ? 'bg-stone-300' : 'bg-active !mix-blend-hard-light', $route.path === '/' && !opened ? 'mix-blend-hard-light' : 'mix-blend-multiply']" />

  <!-- Pop -->

  <transition name="fly-right">
    <Pop v-if="pop" @close="pop = false" @mount="hoverLink()" />
  </transition>

  <!-- Nav Button + Logo -->

  <nav
    class="fixed w-full top-0 left-0 flex py-3 2xl:py-4 px-9 lg:px-20 2xl:px-36 justify-between items-center z-40 transition-all origin-top-left bg-beige-normal"
    :class="{ 'bg-opacity-0': isTransparent && !opened, 'bg-blue': isBlue, '!bg-beige-normal': opened }">

    <router-link aria-label="Go to Landing Page" to="/" @click="handleNav(true)">
      <Vue3Lottie
        :class="[(!isTransparent || opened) && !isBlue ? 'brightness-0 hover:brightness-100' : 'hover:brightness-200']"
        class="logo transition-all duration-700 h-5 object-contain md:h-6 img-responsive origin-top-left"
        animationLink="./assets/logo.json" :height="store.getWidth > 1024 ? 50 : 38"
        :width="store.getWidth > 1024 ? 249 : 178" />
    </router-link>

    <div class="flex items-center gap-3 md:gap-5 h-full">
      <router-link v-if="store.getWidth > 570" aria-label="Go to Enterprise Singapore Grants & Subsidies"
        to="/about#grant" @click="handleNav(true)">
        <picture>
          <source srcset="/assets/enterprise-singapore.avif" type="image/avif">
          <source srcset="/assets/enterprise-singapore.webp" type="image/webp">
          <source srcset="/assets/enterprise-singapore.png" type="image/png">
          <img src="/assets/enterprise-singapore.png" alt="Tzo Packaging Design"
            class="object-fit h-10 w-auto hover:scale-125 transition-transform" />
        </picture>
      </router-link>
      <span v-if="store.getWidth > 570" class="h-6 w-[2px]"
        :class="[(!isTransparent || opened) && !isBlue ? 'bg-black' : 'bg-active']" />
      <button aria-label="Navigation"
        class="group flex flex-col h-8 w-8 justify-center items-center group p-2 -m-2 transition-transform"
        @click="handleNav(false)">
        <div v-for="i in 3" :key="i" :class="[
          (i === 1 && opened ? 'rotate-45 translate-y-1.5 bg-black group-hover:bg-active' : ''),
          (i === 2 && opened ? 'opacity-0 bg-black group-hover:bg-active' : ''),
          (i === 3 && opened ? '-rotate-45 -translate-y-1.5 bg-black group-hover:bg-active' : ''),
          genericHamburgerLine,
          (!isTransparent || opened) && !isBlue ? 'bg-black group-hover:bg-active' : ''
        ]" />
      </button>
    </div>
  </nav>

  <!-- Nav Menu -->

  <transition name="fly">
    <nav v-show="opened" @touchmove="e => { touchmoved = true }"
      class="moreNav bg-beige-normal w-screen h-screen fixed left-0 bottom-0 z-30">
      <div
        class="w-full bottom-0 2xl:h-[calc(100%-116px)] lg:h-[calc(100%-74px)] sm:h-[calc(100%-106px)] h-[calc(100%-62px)] flex items-center justify-center absolute flex-col overflow-y-scroll gap-5 md:gap-20 sm:pt-0">
        <transition-group tag="ul" name="stagger-in" :style="{ '--total': links.length }"
          class="text-center relative h-min">
          <li v-for="(link, i) in links" :key="i" :style="{ '--i': i }"
            class="px-5 cube md:my-0 2xl:text-8xl md:text-7xl sm:text-6xl text-5xl leading-[3rem] md:leading-[3.5rem]"
            @touchend="e => flip(e, true, link)" @click="(e) => flip(e, false, link)">
              <p class="flip">
                <span class="text-blue">{{ $route.path === whatisLink(link) ? "(YOU ARE HERE)" : '' }}</span>
                <a @click.prevent :aria-label="`Go to ${link}`">{{ link === '' ? 'home' : link }}</a>
                <span class="text-blue">{{ $route.path === whatisLink(link) ? "(YOU ARE HERE)" : '' }}</span>
              </p>
              <p class="flop text-active">
                <a @click.prevent :aria-label="`Go to ${link}`">{{ link === '' ? 'home' : link }}</a>
              </p>
          </li>
          <li v-if="store.getWidth <= 570" class="px-5 flex items-center justify-center py-5" @click="handleNav(true)">
            <router-link to="/about#grant">
              <picture>
                <source srcset="/assets/enterprise-singapore.avif" type="image/avif">
                <source srcset="/assets/enterprise-singapore.webp" type="image/webp">
                <source srcset="/assets/enterprise-singapore.png" type="image/png">
                <img src="/assets/enterprise-singapore.png" alt="Tzo Packaging Design"
                  class="object-fit h-10 w-auto hover:scale-125 transition-transform" />
              </picture>
            </router-link>
          </li>
        </transition-group>
        <transition-group name="fade" tag="span"
          class="relative flex justify-center text-center mb-10 md:mb-24 h-min text-sm md:text-base w-full">
          <a key="ig" @click="handleNav(false)"
            class="absolute -translate-x-full text-blue hover:text-active hover:font-bold"
            href="https://instagram.com/comomaya" aria-label="Open Comomaya's Instagram Page" target="_blank"
            rel="noopener noreferrer">
            <p>(INSTAGRAM)</p>
          </a>
          <a key="linkedin" @click="handleNav(false)"
            class="absolute translate-x-full text-blue hover:text-active hover:font-bold"
            href="https://www.linkedin.com/company/comomaya" aria-label="Open Comomaya's Linkedin Page" target="_blank"
            rel="noopener noreferrer">
            <p>(LINKEDIN)</p>
          </a>
        </transition-group>
      </div>
    </nav>
  </transition>

  <transition name="fade">
    <div v-show="opened" @click="handleNav(false)" class="fixed w-screen h-screen bg-opacity-50 bg-black z-10" />
  </transition>

  <!-- Scroll up -->

  <transition name="fade">
    <button aria-label="Scroll Up" v-show="scrollY > 50 && !opened" @click="handleScrollUp" @keypress="handleScrollUp"
      class="flex justify-center items-center fixed bottom-5 left-5 md:left-10 bg-active hover:bg-blue duration-200 transition-all w-10 h-10 z-30">
      <font-awesome-icon :icon="['fas', 'angle-up']" size="lg"
        class="mx-2 text-blue hover:text-active duration-200 transition-all" />
    </button>
  </transition>

  <!-- WhatsApp -->

  <button aria-label="WhatsApp"
    class="flex justify-center gap-2 md:text-5xl text-3xl items-center fixed bottom-5 right-5 md:bottom-10 md:right-10 duration-200 transition-all w-auto h-10 z-10 p-3 text-active group hover:scale-125">
    <a class="font-bold uppercase flex items-center gap-2" href="https://wa.me/6594245994" target="_blank"
      rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'whatsapp']" class="my-3 group-hover:scale-125" />
    </a>
  </button>

  <!-- Contact Us -->

  <transition name="fade">
    <button v-if="$route.path !== '/contact' && !pop && !opened && !store.submitted" aria-label="Contact Us"
      @click="openPop()"
      class="flex justify-center gap-2 md:text-base text-xs items-center fixed bottom-1/2 bg-active hover:bg-blue right-0 duration-200 transition-all w-auto h-10 z-30 p-3 text-blue hover:text-active group -rotate-90 origin-bottom-right font-bold uppercase">
      <p>Enquiries</p>
    </button>
  </transition>

  <!-- Main component -->

  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <transition name="fade">
        <Suspense>
          <component :is="Component" :target="target" />
          <template #fallback>
            <div class="flex justify-center items-center h-screen">
              <h1 class="text-xl">Loading...</h1>
            </div>
          </template>
        </Suspense>
      </transition>
    </template>
  </router-view>
  <CustomFooter />
</template>

<style lang="scss" scoped>
.flip {
  transition: all 0.5s ease;
  transform: translateZ(0.9375rem);
  font-family: "Narziss";
  font-weight: 600;
  color: theme("colors.black");
  @apply flex justify-center gap-5 h-20 md:h-32 items-center;

  @media (min-width: 768px) {
    transform: translateZ(4rem);
  }

  span {
    @apply text-sm md:text-base;
    font-family: barlow;
    font-weight: normal;
    margin: auto 0;
  }
}

.flop {
  transition: all 0.5s ease;
  transform: rotateX(-90deg) translateZ(-0.9375rem);
  font-family: "Barlow";
  font-weight: 800;
  opacity: 0;
  @apply flex justify-center gap-5 h-24 md:h-32 items-center;

  @media (min-width: 768px) {
    transform: rotateX(-90deg) translateZ(-4rem);
  }
}

.cube {
  transition: transform 0.5s;
  transform-style: preserve-3d;
  perspective: 5000px;
  @apply h-20 md:h-32;

  &:hover {
    transform: rotateX(90deg);

    .flop {
      opacity: 1;
    }
  }
}
</style>
