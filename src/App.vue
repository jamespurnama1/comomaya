<script setup lang="ts">
import { onUpdated, ref, reactive, onMounted, computed, type Ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useRouter, useRoute } from 'vue-router';
import { gsap } from 'gsap';
import CustomFooter from '@/components/CustomFooter.vue';

const router = useRouter()
const route = useRoute()

useHead({
  title: 'COMOMAYA - Branding | Design | Digital | Social Media',
  meta: [
    {
      name: 'COMOMAYA',
      content: 'Branding | Design | Digital | Social Media',
    },
  ],
})

const innerWidth = ref(0);
const scrollY = ref(0);
const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full transition ease transform duration-300 bg-active group-hover:bg-black`;
const linkSelected = ref(false);
const links = [
  '',
  'work',
  'about',
  'grants',
  'contact'
];
const target = reactive({ x: 0, y: 0 })
let hoverables: NodeListOf<HTMLAnchorElement> | null = null

const cursor: Ref<HTMLDivElement | null> = ref(null);

onMounted(() => {
  innerWidth.value = window.innerWidth
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
    innerWidth.value = window.innerWidth
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
})

function whatisLink(l: string) {
  if (l === 'grants') return '/about#grant'
  if (l === 'clients & work') return '/work'
  if (l === 'people & services') return '/about'
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

function flip(e: TouchEvent | PointerEvent, touch: boolean, href: string) {
  if (touch && !touchmoved.value) {
    setTimeout(() => {
      router.push(whatisLink(href))
      handleNav();
    }, 600);
  } else if ((e as PointerEvent).pointerType !== 'touch' && !touchmoved.value) {
    console.log(touchmoved.value)
    router.push(whatisLink(href))
    handleNav();
  }
  if (href !== 'grants for SMEs' && !touchmoved.value) handleScrollUp()
  touchmoved.value = false;
}

onUpdated(() => {
  hoverLink()
})

const opened = ref(false)
const splash = ref(true)
const touchmoved = ref(false)

function handleNav() {
  if (!opened.value) {
    gsap.set('body', { overflow: 'hidden' })
  } else {
    gsap.set('body', { overflow: 'auto' })
  }
  opened.value = !opened.value;
}

function handleScrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const isBlue = computed(() => {
  const blue = ['about', 'work', 'contact']
  if (opened.value) return false
  return blue.some(item => item === route.name) ? true : false;
})

const isTransparent = computed(() => {
  return route.path === '/'
  //&& scrollY.value < 50
})
</script>

<template>
  <!-- Cursor -->

  <div ref="cursor"
    class="origin-center cursor transform-gpu pointer-events-none z-50 fixed w-16 h-16 -top-8 -left-8 rounded-full opacity-0 transition-transform ease-out"
    :class="[innerWidth < 570 ? '!opacity-0' : '', opened || $route.name === 'work-slug' ? 'bg-stone-300' : 'bg-active !mix-blend-hard-light', $route.path === '/' && !opened ? 'mix-blend-hard-light' : 'mix-blend-multiply']" />

  <!-- Splash Screen -->
  <!-- <Splash v-if="splash" @close="() => splash = false" /> -->

  <!-- Nav Button + Logo -->

  <nav
    class="fixed w-full top-0 left-0 flex py-3 md:py-7 px-9 lg:px-20 xl:px-36 justify-between bg-beige-normal items-center z-30 transition-all origin-top-left"
    :class="{ 'bg-opacity-0': isTransparent && !opened, 'bg-stone-300': isBlue }">

    <router-link aria-label="Go to Landing Page" to="/">
      <!-- <picture class="transition-all"
        :class="[(!isTransparent || opened) && !isBlue ? 'brightness-0 hover:brightness-100' : 'hover:brightness-200']">
        <img src="/logo.svg" alt="COMOMAYA"
          class="logo transition-all duration-700 h-5 object-contain md:h-7 img-responsive origin-top-left" />
      </picture> -->
      <Vue3Lottie
        :class="[(!isTransparent || opened) && !isBlue ? 'brightness-0 hover:brightness-100' : 'hover:brightness-200']"
        class="logo transition-all duration-700 h-5 object-contain md:h-7 img-responsive origin-top-left"
        animationLink="./assets/logo.json" :height="innerWidth > 768 ? 50 : 38" :width="innerWidth > 768 ? 249 : 178" />
    </router-link>

    <button aria-label="Navigation"
      class="group flex flex-col h-12 w-12 justify-center items-center group p-2 -m-2 transition-transform"
      @click="handleNav">
      <div v-for="i in 3" :class="[
      (i === 1 && opened ? 'rotate-45 translate-y-1.5 bg-black group-hover:bg-active' : ''),
      (i === 2 && opened ? 'opacity-0 bg-black group-hover:bg-active' : ''),
      (i === 3 && opened ? '-rotate-45 -translate-y-1.5 bg-black group-hover:bg-active' : ''),
      genericHamburgerLine,
      (!isTransparent || opened) && !isBlue ? 'bg-black group-hover:bg-active' : ''
    ]" />
    </button>
  </nav>

  <!-- Nav Menu -->

  <transition name="fly">
    <nav v-show="opened" @touchmove="e => { touchmoved = true }"
      class="moreNav bg-beige-normal w-screen fixed left-0 top-0 z-20 flex items-center md:justify-center flex-col overflow-y-scroll gap-5 md:gap-20">
      <transition-group tag="ul" name="stagger-in" :style="{ '--total': links.length }"
        class="text-center mt-16 sm:mt-24">
        <li v-for="(link, i) in links" :key="i" :style="{ '--i': i }"
          class="px-5 cube my-3 md:my-0 xl:text-8xl md:text-7xl text-5xl leading-[3rem] md:leading-[3.5rem]"
          @touchend="e => flip(e, true, link)" @click="e => flip(e as PointerEvent, false, link)">
          <p class="flip">
            <span class="text-blue">{{ $route.path === whatisLink(link) ? "(YOU ARE HERE)" : '' }}</span>
            <a @click.prevent :aria-label="`Go to ${link}`">{{ link === '' ? 'home' : link }}</a>
            <span class="text-blue">{{ $route.path === whatisLink(link) ? "(YOU ARE HERE)" : '' }}</span>
          </p>
          <p class="flop text-active">
            <a @click.prevent :aria-label="`Go to ${link}`">{{ link === '' ? 'home' : link }}</a>
          </p>
        </li>
      </transition-group>
      <transition-group name="fade" tag="span"
        class="relative flex justify-center text-center mb-10 text-sm md:text-base w-full">
        <a key="ig" @click="handleNav" class="absolute -translate-x-full text-blue hover:text-active hover:font-bold"
          href="https://instagram.com/comomaya" aria-label="Open Comomaya's Instagram Page" target="_blank"
          rel="noopener noreferrer">
          <p>(INSTAGRAM)</p>
        </a>
        <a key="linkedin" @click="handleNav"
          class="absolute translate-x-full text-blue hover:text-active hover:font-bold"
          href="https://www.linkedin.com/company/comomaya" aria-label="Open Comomaya's Linkedin Page" target="_blank"
          rel="noopener noreferrer">
          <p>(LINKEDIN)</p>
        </a>
      </transition-group>
    </nav>
  </transition>

  <transition name="fade">
    <div v-show="opened" @click="handleNav" class="fixed w-screen h-screen bg-opacity-50 bg-black z-10" />
  </transition>

  <!-- Scroll up -->

  <transition name="fade">
    <button aria-label="Scroll Up" v-show="scrollY > 50" @click="handleScrollUp" @keypress="handleScrollUp"
      class="flex justify-center items-center absolute bottom-5 right-10 bg-active hover:bg-blue duration-200 transition-all w-10 h-10 z-20">
      <font-awesome-icon :icon="['fas', 'angle-up']" size="lg"
        class="mx-2 text-blue hover:text-active duration-200 transition-all" />
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
.moreNav {
  height: -webkit-fill-available;
  //height: 100vh;
  //padding: safe-area-inset-top 0 safe-area-inset-bottom 0;
}

.logoInv:hover {
  filter: invert(22%) sepia(44%) saturate(611%) hue-rotate(50deg) brightness(95%) contrast(124%);
}

.logoNorm:hover {
  filter: invert(22%) sepia(44%) saturate(611%) hue-rotate(50deg) brightness(95%) contrast(124%);
}

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
  @apply h-24 md:h-32;

  &:hover {
    transform: rotateX(90deg);

    .flop {
      opacity: 1;
    }
  }
}
</style>