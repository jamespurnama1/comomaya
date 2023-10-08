<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, onBeforeUnmount, reactive, ref, type Ref } from 'vue';
import axios, { AxiosResponse } from 'axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { gsap } from 'gsap';

const filterList = reactive({
  "Strategy": 0,
  "Naming": 0,
  "Logo": 0,
  "Identity": 0,
  "Packaging": 0,
  "Website": 0,
  "Digital": 0,
} as { [key in type]: number })

const hov = ref([]) as Ref<boolean[] | never[]>

const filtered = ref({
  "Strategy": false,
  "Naming": false,
  "Logo": false,
  "Identity": false,
  "Packaging": false,
  "Website": false,
  "Digital": false,
} as { [key in type]: boolean })

const response = ref({ list: [] as Featured[] | never[] })


async function load() {
  axios.get('https://api.cosmicjs.com/v3/buckets/comomayacom-production/objects/64803dec2fb5fafdbb9670bc?read_key=Yz8ifYSRHxv4SzRygKNMbdGZnUaTUAUZBbseBGOILB3eWpiwh1&depth=1&props=metadata', { withCredentials: false })
    .then((res: AxiosResponse<List>) => {
      response.value.list = res.data.object.metadata.list
      response.value.list.forEach(x => x.metadata.typejson.type.forEach((y) => {
        if (typeof filterList[y] === 'number') filterList[y]++
      }))
      filteredFunc()
    }).catch((err) => {
      console.error(err)
    })
}

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
  load()
  window.addEventListener('resize', resize)
  resize()
  // gsap.to('html', { backgroundColor: "#F2F2F1" })
  // document.documentElement.setAttribute('data-theme', 'beige');
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
  // document.documentElement.setAttribute('data-theme', 'lavender');
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <main
    class="min-h-screen flex flex-col justify-center py-16 md:py-32 bg-stone-300 text-black z-0 relative px-9 md:px-20 xl:px-36 md:justify-start">
    <div class="px-9 md:px-20 xl:px-36 absolute w-full left-0 top-10 md:top-20 my-5">
    <h1 class="text-7xl font-extrabold tracking-tight text-active">selected projects</h1>
    </div>
    <p class="text-base md:text-xl mb-5 pointer-cursor w-full md:w-1/2 pt-44 md:pt-14">
      <span v-for="(value, key, i) in filterList" @click="filtered[key] = !filtered[key]">
        <input :name="key" v-model="filtered[key]" type="checkbox" class="hidden bg-transparent text-transparent" />
        <label class="hover:underline whitespace-nowrap" :class="[filtered[key] ? 'font-bold text-active' : 'text-beige-lighter']">{{ key }} <sup :class="[filtered[key] ? 'bg-active !text-blue' : 'bg-beige-lighter !text-blue']"
            v-if="typeof value === 'number'">{{ value }}</sup>{{ (i + 1 !== Object.keys(filterList).length) ||
              Object.values(filtered).some(v => v === true) ? ', ' : '' }} </label>
        <wbr>
      </span>
      <a v-if="Object.values(filtered).some(v => v === true)" @click="clearFilter()"
        class="hover:underline font-semibold whitespace-nowrap text-active">
        <font-awesome-icon :icon="['fas', 'square-xmark']" size="sm" class="" /> Clear filters
      </a>
    </p>
    <ul v-if="filteredFunc().length" class="grid z-10 md:grid-cols-2 w-full max-w-7xl gap-5 mx-auto">
      <li v-for="(portfolio, i) in filteredFunc()" :key="response.list.toString()" @mouseover="hov[i] = true" @mouseleave="hov[i] = false">
        <a :href="`/work/${portfolio.slug}`" :aria-label="`Go to ${portfolio.title}`">
          <div class="relative w-full h-48 md:h-[24em] overflow-hidden">
            <img :src="`${portfolio.thumbnail}?auto=format`" :srcset="`${portfolio.thumbnail}?w=1024&auto=format 2048w,
                                  ${portfolio.thumbnail}?w=640&auto=format 1024w,
                                  ${portfolio.thumbnail}?w=480&auto=format 640w`" :alt="portfolio.title"
              class="w-full h-full object-cover transition-all" :class="[hov[i] ? 'scale-125' : '']" />
          </div>
          <!-- <div class="flex py-3 md:py-10 flex-wrap" @focus="(e) => handleHover(e, i)" @mouseenter="(e) => handleHover(e, i)" @onfocusout="handleOut" @mouseleave="() => handleOut()"> -->
          <div class="flex items-center mt-2 select">
            <img v-if="hov[i]" src="/assets/plus_blue.svg" class="cursor-pointer h-6 w-6 md:h-12 md:w-12 mr-3" />
            <img v-else src="/assets/plus.svg" class="cursor-pointer h-6 w-6 md:h-12 md:w-12 mr-3" />
            <span>
              <h2 class="whitespace-nowrap origin-left transition-all" :class="[hov[i] ? 'text-active font-extrabold text-5xl md:text-4xl lg:text-5xl lowercase tracking-[-0.035em]' : 'text-beige-lighter tracking-widest text-lg uppercase font-semibold']">{{ portfolio.title }}</h2>
            </span>
          </div>
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
  border-radius: 20px;
  color: white;
  padding: 0 5px;
  font-size: 12px;
  text-align: center;
}
</style>

<style lang="scss">
</style>