<script setup lang="ts">
import { onUpdated, ref, reactive, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useStore } from './stores'

const store = useStore()

useHead({
  title: 'COMOMAYA - Branding | Design | Digital | Social Media',
  meta: [
    {
      name: 'COMOMAYA',
      content: 'Branding | Design | Digital | Social Media',
    },
  ],
})

  const scrollY = ref(0);
  const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-beige transition ease transform duration-300`;
  const linkSelected = ref(false);
  const links = [
    '',
    'portfolio',
    'about',
    'contact'
  ];
  const target = reactive({x: 0, y:0})
  let hoverables: NodeListOf<HTMLAnchorElement> | null = null

  onMounted(() => {
    store.width = window.innerWidth

    window.addEventListener('resize', () => {
      store.width = window.innerWidth
    })

    window.addEventListener('scroll', () => {
      scrollY.value = window.scrollY
    })

    const cursor: HTMLDivElement | null = document.querySelector('.cursor'); 
    
    let raf: (number | null) = requestAnimationFrame(render);

    document.addEventListener('mousemove', function(e) {
      target.x = e.clientX,
      target.y = e.clientY,
      cursor ? cursor.style.opacity = "1" : null;
      !raf ? raf = requestAnimationFrame(render) : null;
    });

    function render() {
      if (!cursor) return;
      if (linkSelected.value) {
        cursor.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) scale(3)`;
      } else {
        cursor.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }

      raf = requestAnimationFrame(render);
    }
  })

  function hoverLink() {
    hoverables = document.querySelectorAll('a, button');
    if (!hoverables || !hoverables.length) return
    hoverables.forEach(item => {
      if(item.getAttribute('listener') === 'true') return
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

  function handleNav() {
    opened.value = !opened.value;
  }

  function handleScrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
</script>

<template>
  <div class="cursor origin-center pointer-events-none z-50 fixed mix-blend-difference w-6 h-6 -top-3 -left-3 rounded-3xl bg-white opacity-0 transition-transform ease-out"
    :class="[store.getWidth < 768 ? '!opacity-0' : '']"
  />

  <nav class="fixed w-screen top-0 left-0 flex py-7 px-9 justify-between items-center z-30 transition-all bg-beige bg-opacity-0 origin-top-left"
  :class="[((scrollY > 50) && $route.path !== '/')  || $route.path !== '/' ? 'bg-opacity-100' : '']">
    <a href="/">
      <img src="/COMOMAYA_Logo_Beige_800x90.png" alt="COMOMAYA"
        class="logo transition-all duration-700 h-9 img-responsive origin-top-left"
        :class="[opened || ((scrollY > 50) && $route.path !== '/') || $route.path !== '/' ? 'brightness-0' : '']"
      />
    </a>
    <button
      class="flex flex-col h-12 w-12 justify-center items-center group p-2 -m-2 transition-transform"
      @click="handleNav"
      @keydown="handleNav"
    >
      <div
        :class="[
          (opened ? 'rotate-45 translate-y-1.5 opacity-100 !bg-black' : 'opacity-100'),
          genericHamburgerLine,
          (((scrollY > 50) && $route.path !== '/')  || $route.path !== '/' ? 'bg-black' : '')
        ]"
      />
      <div :class="[
        (opened ? 'opacity-0 !bg-black' : 'opacity-100'),
        genericHamburgerLine,
        (((scrollY > 50) && $route.path !== '/')  || $route.path !== '/' ? 'bg-black' : '')
        ]"
      />
      <div
        :class="[
          (opened ? '-rotate-45 -translate-y-1.5 opacity-100 !bg-black' : 'opacity-100'),
          genericHamburgerLine,
          (((scrollY > 50) && $route.path !== '/')  || $route.path !== '/' ? 'bg-black' : '')
        ]"
      />
    </button>
  </nav>

  <transition name="fly">
  <nav v-show="opened" class="moreNav bg-beige w-screen fixed left-0 top-0 z-20 h-screen flex items-center md:justify-center flex-col">
    <transition-group tag="ul" name="stagger-in" :style="{ '--total': links.length }" class="text-center mt-24 mb-8">
      <li v-for="(link, i) in links"
        :key="i"
        :style="{'--i': i}"
        class="my-3 text-lg md:text-3xl hover:text-active"
        :class="[$route.path === `/${link}` ? 'text-active' : '']"
      >
        <a @click="handleNav" :href="`/${link}`">
          {{link === '' ? 'home' : link}}
        </a>
      </li>
      </transition-group>
    <transition-group name="fade" tag="span" class="flex justify-center mb-10">
      <a key="ig" @click="handleNav" href="https://instagram.com/comomaya" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'instagram']" size="xl" class="mx-2 hover:text-active" />
      </a>
      <a key="linkedin" @click="handleNav" href="https://linkedin.com/comomaya" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" class="mx-2 hover:text-active" />
      </a>
    </transition-group>
  </nav>
  </transition>

  <transition name="fade">
    <div v-show="opened" @click="handleNav" @keydown="handleNav"
      class="fixed w-screen h-screen bg-opacity-50 bg-black z-10"
    />
  </transition>

  <transition name="fade">
    <button
      v-show="scrollY > 50"
      @click="handleScrollUp"
      @keypress="handleScrollUp"
      class="flex justify-center items-center fixed bottom-10 right-10 bg-black w-10 h-10 z-20"
    >
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

  <footer class="fixed bottom-0 my-5 ml-10">
    <p class="text-xs mix-blend-difference text-white">
      © 2022 COMOMAYA. All rights reserved.
    </p>
  </footer>
</template>

<style lang="scss">
</style>
