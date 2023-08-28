<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, onBeforeUnmount, reactive, ref, computed } from 'vue';
import axios, { AxiosResponse } from 'axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const filterList = reactive({
  "Branding": 0,
  "Logo": 0,
  "Naming": 0,
  "Identity": 0,
  "Brand Guide": 0,
  "Strategy": 0,
  "Digital": 0,
  "Investor Deck": 0,
  "Brand Film": 0,
  "Packaging": 0
} as { [key in type]: number })

const filtered = ref({
  "Branding": false,
  "Logo": false,
  "Naming": false,
  "Identity": false,
  "Brand Guide": false,
  "Strategy": false,
  "Digital": false,
  "Investor Deck": false,
  "Brand Film": false,
  "Packaging": false
} as { [key in type]: boolean })

const response = ref({ list: [] as Featured[] | never[] })

// const link: any = computed(() => {
//   return response.list.map(x => ({
//     rel: 'preload',
//     as: 'image',
//     href: x.thumbnail.toString()
//   }))
// })

async function load() {
  axios.get('https://api.cosmicjs.com/v3/buckets/comomayacom-production/objects/64803dec2fb5fafdbb9670bc?read_key=Yz8ifYSRHxv4SzRygKNMbdGZnUaTUAUZBbseBGOILB3eWpiwh1&depth=1&props=metadata', { withCredentials: false })
    .then((res: AxiosResponse<List>) => {
      response.value.list = res.data.object.metadata.list
      response.value.list.forEach(x => x.metadata.typejson.type.forEach((y) => filterList[y]++))
      filteredFunc()
    }).catch((err) => {
      console.error(err)
    })
}

// const imgSrc = ref("");
// const imgAlt = ref("");
// const show = ref(false);
// let handleHover: Function = () => {};
// let handleClick: Function = () => {};
// let handleOut: Function = () => {};

// const props = defineProps<{
//   target: {x: number, y: number}
// }>()

const width = ref(0)

function resize() {
  width.value = window.innerWidth
}

function filteredFunc() {
  const entries = Object.entries(filtered.value) as unknown as [type, boolean][]
  entries.forEach(([key, value]) => value ? null : delete filtered.value[key])
  const f = response.value.list.filter(x => {
    return entries.every(([key]) => {
      return entries.length ? x.metadata.typejson.type.toString().match(`${key}`) : true
      // return true
    })
  })
  return f
}

function clearFilter() {
  Object.entries(filtered.value).forEach(([key]) => {
    filtered.value[key as type] = false;
  })
}

onMounted(() => {
  // loadContent()
  load()
  window.addEventListener('resize', resize)
  resize()

  // async function loadContent() {
  //   const content = await load();
  // const imgEl: HTMLDivElement | null = document.querySelector('.imgP'); 
  // let raf: (number | null) = null;

  // function render() {
  //   gsap.to(imgEl, {
  //     x: props.target.x,
  //     y: props.target.y,
  //     duration: 1,
  //   })
  //   show.value ? raf = requestAnimationFrame(render) : null;
  // }

  // let clicked: number | null = null;

  // handleClick = (e: Event, i: number) => {
  //   if (window.innerWidth > 768 || clicked === i) {
  //     e.target ? window.location.href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")! : null;
  //   } else {
  //     clicked = i
  //     handleHover(null, i)
  //   }
  // }

  // handleHover = (_e: MouseEvent | FocusEvent, i: number) => {
  //   show.value = true;
  //   imgSrc.value = response.list.map(x => `${x.thumbnail.toString()}?q=75&auto=format,compress`)[i];
  //   imgAlt.value = response.list.map(x => x.title)[i];
  //   gsap.to(imgEl, {
  //     opacity: 1,
  //     duration: 0.3,
  //   });

  // raf = requestAnimationFrame(render);
  // }

  // handleOut = () => {
  //   show.value = false;
  //   gsap.to(imgEl, {
  //     opacity: 0,
  //     duration: 0.3,
  //     onComplete: () => {
  //       raf ? cancelAnimationFrame(raf) : null;
  //     },
  //   })
  // }
  // }
  // gsap.to('html', { backgroundColor: "black" })
})

useHead({
  title: 'COMOMAYA - Work',
  meta: [
    {
      name: 'COMOMAYA',
      content: 'Work',
    },
  ],
})

onBeforeUnmount(() => {
  // gsap.to('html', {backgroundColor: "theme(colors.brown)"})
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <main
    class="min-h-screen flex flex-col justify-center py-32 bg-brown text-black z-0 relative mx-10 md:mx-28 md:justify-start">
    <h1 class="text-7xl font-bold tracking-tight">selected <strong>projects</strong></h1>
    <div class="h-[1px] w-full bg-black my-5" />
    <p class="text-xl mb-5 pointer-cursor w-1/2">
      <span v-for="(value, key, i) in filterList" @click="filtered[key] = !filtered[key]">
        <input :name="key" v-model="filtered[key]" type="checkbox" class="hidden bg-transparent text-transparent" />
        <label class="hover:underline whitespace-nowrap" :class="[filtered[key] ? 'font-bold' : '']">{{ key }} <sup
            v-if="typeof value === 'number'">{{ value }}</sup>{{ (i + 1 !== Object.keys(filterList).length) ||
              Object.values(filtered).some(v => v === true) ? ', ' : '' }} </label>
        <wbr>
      </span>
      <a v-if="Object.values(filtered).some(v => v === true)" @click="clearFilter()"
        class="hover:underline font-semibold whitespace-nowrap">
        <font-awesome-icon :icon="['fas', 'square-xmark']" size="sm" class="text-black" /> Clear filters
      </a>
    </p>
    <ul v-if="filteredFunc().length" class="grid z-10 md:grid-cols-2 w-full max-w-7xl gap-5 mx-auto">
      <li v-for="(portfolio, i) in filteredFunc()" :key="response.list.toString()">
        <a :href="`/work/${portfolio.slug}`" :aria-label="`Go to ${portfolio.title}`">
          <div class="relative w-full h-[24em] overflow-hidden">
            <img :src="`${portfolio.thumbnail}?auto=format`" :srcset="`${portfolio.thumbnail}?w=1024&auto=format 2048w,
                                  ${portfolio.thumbnail}?w=640&auto=format 1024w,
                                  ${portfolio.thumbnail}?w=480&auto=format 640w`" :alt="portfolio.title"
              class="w-full h-full object-cover hover:scale-125 transition-all" />
          </div>
          <!-- <div class="flex py-3 md:py-10 flex-wrap" @focus="(e) => handleHover(e, i)" @mouseenter="(e) => handleHover(e, i)" @onfocusout="handleOut" @mouseleave="() => handleOut()"> -->
          <div class="flex items-center mt-2 select">
            <img src="/plus.svg" class="plus cursor-pointer h-12 w-12 mr-3" />
            <span>
              <h2 class="text-lg whitespace-nowrap font-semibold uppercase tracking-widest">{{ portfolio.title }}</h2>
              <!-- <h3 v-if="width > 768 || !portfolio.metadata.type_mobile" class="text-xs md:text-s whitespace-nowrap">{{portfolio.metadata.type}}</h3> -->
            </span>
          </div>
          <!-- </div> -->
        </a>
      </li>
    </ul>
    <p v-else>No result. Try clearing the filters.</p>
  </main>
</template>

<style lang="scss" scoped>
strong {
  font-weight: bold;
}

sup {
  background-color: black;
  border-radius: 20px;
  color: white;
  padding: 0 5px;
  font-size: 12px;
  text-align: center;
}

li:hover {
  .plus {
    transition: all 0.5s ease;
    filter: invert(1);
  }
}
</style>