<script setup lang="ts">
import { onUpdated, ref, reactive, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

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
const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-beige transition ease transform duration-300`;
const linkSelected = ref(false);
const links = [
  '',
  'clients & work',
  'people & services',
  'grants for SMEs',
  'contact'
];
const target = reactive({ x: 0, y: 0 })
let hoverables: NodeListOf<HTMLAnchorElement> | null = null

onMounted(() => {
  innerWidth.value = window.innerWidth

  window.addEventListener('resize', () => {
    innerWidth.value = window.innerWidth
  })

  document.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })

  const cursor: HTMLDivElement | null = document.querySelector('.cursor');

  let raf: (number | null) = requestAnimationFrame(render);

  document.addEventListener('mousemove', function (e) {
    target.x = e.clientX,
      target.y = e.clientY,
      cursor ? cursor.style.opacity = "1" : null;
    !raf ? raf = requestAnimationFrame(render) : null;
  });

  function render() {
    if (!cursor) return;
    if (linkSelected.value) {
      cursor.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) scale(1)`;
    } else {
      cursor.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) scale(33%)`;
    }

    raf = requestAnimationFrame(render);
  }

})

function whatisLink(l: string) {
  if(l === 'grants for SMEs') return '/about#grant'
  if (l === 'clients & work') return '/work'
  if (l === 'people & services') return '/about'
  return `/${l}`
}

function hoverLink() {
  hoverables = document.querySelectorAll('a, button');
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

onUpdated(() => {
  hoverLink()
})

const opened = ref(false)
// const aboutOpen = ref(false);

function handleNav() {
  opened.value = !opened.value;
  // aboutOpen.value = false;
}


// function handleLink(e: Event, l: string) {
//   if (l === 'about' && !aboutOpen.value) {
//     e.preventDefault()
//     aboutOpen.value = true
//   } else {
//     handleNav()
//   }
// }

function handleScrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <div
    class="cursor origin-center transform-gpu pointer-events-none z-50 fixed mix-blend-difference w-16 h-16 -top-8 -left-8 rounded-full bg-white opacity-0 transition-transform ease-out"
    :class="[innerWidth < 570 ? '!opacity-0' : '']" />

  <nav
    class="fixed w-screen top-0 left-0 flex py-3 md:py-7 px-9 justify-between bg-black md:bg-beige items-center z-30 transition-all origin-top-left"
    :class="[((scrollY > 50) && $route.path !== '/' && innerWidth > 768) || ($route.path !== '/' || innerWidth < 768) ? '!bg-opacity-100' : '!bg-opacity-0']">
    <a href="/">
      <img src="/COMOMAYA_Logo_Beige_800x90.png" alt="COMOMAYA"
        class="logo transition-all duration-700 h-9 md:h-10 img-responsive origin-top-left"
        :class="[(opened && innerWidth > 768) || ((scrollY > 50) && $route.path !== '/' && innerWidth > 768) || ($route.path !== '/' && innerWidth > 768) ? 'brightness-0' : '']" />
    </a>
    <button class="flex flex-col h-12 w-12 justify-center items-center group p-2 -m-2 transition-transform"
      @click="handleNav" @keydown="handleNav">
      <div :class="[
  (opened ? 'rotate-45 translate-y-1.5 opacity-100 !bg-beige md:!bg-black' : 'opacity-100'),
  genericHamburgerLine,
  (((scrollY > 50) && $route.path !== '/' && innerWidth > 768) || ($route.path !== '/' && innerWidth > 768) ? 'bg-black' : '')
]" />
      <div :class="[
  (opened ? 'opacity-0 !bg-beige md:!bg-black' : 'opacity-100'),
  genericHamburgerLine,
  (((scrollY > 50) && $route.path !== '/' && innerWidth > 768) || ($route.path !== '/' && innerWidth > 768) ? 'bg-black' : '')
]" />
      <div :class="[
  (opened ? '-rotate-45 -translate-y-1.5 opacity-100 !bg-beige md:!bg-black' : 'opacity-100'),
  genericHamburgerLine,
  (((scrollY > 50) && $route.path !== '/' && innerWidth > 768) || ($route.path !== '/' && innerWidth > 768) ? 'bg-black' : '')
]" />
    </button>
  </nav>

  <transition name="fly">
    <nav v-show="opened"
      class="moreNav bg-beige w-screen fixed left-0 top-0 z-20 h-screen flex items-center md:justify-center flex-col">
      <transition-group tag="ul" name="stagger-in" :style="{ '--total': links.length }" class="text-center mt-24 mb-8">
        <li v-for="(link, i) in links" :key="i" :style="{ '--i': i }" class="font-bold my-10 md:my-5 text-3xl hover:text-active"
          :class="[$route.path === `/${link}` ? 'text-active' : '']">
          <a @click="handleNav" :href="whatisLink(link)">
            {{ link === '' ? 'home' : link }}
          </a>
          <!-- <Transition name="fade">
            <ul class="mt-3" v-if="aboutOpen && i === 2">
              <li @click="handleNav" class="my-5 font-normal text-xl md:text-xl text-black hover:text-active"><a class="z-20" href="/about#ourPeople">our people</a></li>
              <li @click="handleNav" class="my-5 font-normal text-xl md:text-xl text-black hover:text-active"><a class="z-20" href="/about#ourServices">our services</a></li>
              <li @click="handleNav" class="my-5 font-normal text-xl md:text-xl text-black hover:text-active"><a class="z-20" href="/about#grant">grants &amp; subsidies</a></li>
              <li @click="handleNav" class="my-5 font-normal text-xl md:text-xl text-black hover:text-active"><a class="z-20" href="/about#testimonials">testimonials</a></li>
            </ul>
          </Transition> -->
        </li>
      </transition-group>
      <transition-group name="fade" tag="span" class="flex flex-col justify-center mb-10">
        <a key="ig" @click="handleNav" href="https://instagram.com/comomaya" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'square-instagram']" size="xl" class="mx-2 my-3 hover:text-active" />
        </a>
        <a key="linkedin" @click="handleNav" href="https://www.linkedin.com/company/comomaya" target="_blank"
          rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" class="mx-2 my-3 hover:text-active" />
        </a>
      </transition-group>
    </nav>
  </transition>

  <transition name="fade">
    <div v-show="opened" @click="handleNav" @keydown="handleNav"
      class="fixed w-screen h-screen bg-opacity-50 bg-black z-10" />
  </transition>

  <transition name="fade">
    <button v-show="scrollY > 50" @click="handleScrollUp" @keypress="handleScrollUp"
      class="flex justify-center items-center absolute bottom-10 right-10 bg-black w-10 h-10 z-20">
      <font-awesome-icon :icon="['fas', 'angle-up']" size="lg" class="mx-2 text-beige" />
    </button>
  </transition>

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

  <footer class="absolute bottom-0 my-5 ml-10">
    <p class="text-xs mix-blend-difference text-white">
      © 2023 COMOMAYA. All rights reserved.
    </p>
  </footer>
</template>

<style lang="scss">

</style>