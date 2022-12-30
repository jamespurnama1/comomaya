<script setup lang="ts">
  import { useHead } from '@vueuse/head'
  import { gsap } from "gsap";
  import { onMounted, onBeforeUnmount, reactive, ref, computed } from 'vue';
  import axios, { AxiosResponse } from 'axios'

  const response: { list: Featured[] } = reactive({ list: [] })

  const link: any = computed(() => {
    return response.list.map(x => ({
      rel: 'preload',
      as: 'image',
      href: x.thumbnail.toString()
    }))
  })

  async function load() {
    axios.get('https://api.cosmicjs.com/v2/buckets/comomaya-production/objects?query=%7B%22type%22%3A%22portfolio-list%22%2C%22slug%22%3A%22list%22%7D&pretty=true&read_key=a59I38Pp6PQ3OIRd6QnAQNvatVHRuIAfN3dzAnv8bFMD7p0qAF&props=metadata', { withCredentials: false })
      .then((res: AxiosResponse<List>) => {
        response.list = res.data.objects[0].metadata.list
      }).catch((err) => {
        console.error(err)
      })
	}

  const imgSrc = ref("");
  const imgAlt = ref("");
  const show = ref(false);
  let handleHover: Function = () => {};
  let handleClick: Function = () => {};
  let handleOut: Function = () => {};

  const props = defineProps<{
    target: {x: number, y: number}
  }>()

  const width = ref(0)

  function resize() {
    width.value = window.innerWidth
  }

  onMounted(() => {
    loadContent()
    
    window.addEventListener('resize', resize)
    resize()
		
		async function loadContent() {
      const content = await load();
      const imgEl: HTMLDivElement | null = document.querySelector('.imgP'); 
      let raf: (number | null) = null;

      function render() {
        gsap.to(imgEl, {
          x: props.target.x,
          y: props.target.y,
          duration: 1,
        })
        show.value ? raf = requestAnimationFrame(render) : null;
      }

      let clicked: number | null = null;

      handleClick = (e: Event, i: number) => {
        if (window.innerWidth > 768 || clicked === i) {
          e.target ? window.location.href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")! : null;
        } else {
          clicked = i
          handleHover(null, i)
        }
      }

      handleHover = (_e: MouseEvent | FocusEvent, i: number) => {
        show.value = true;
        imgSrc.value = response.list.map(x => x.thumbnail.toString())[i];
        imgAlt.value = response.list.map(x => x.title)[i];
        gsap.to(imgEl, {
          opacity: 1,
          duration: 0.3,
        });

        raf = requestAnimationFrame(render);
      }

      handleOut = () => {
        show.value = false;
        gsap.to(imgEl, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            raf ? cancelAnimationFrame(raf) : null;
          },
        })
      }
    }
  })

  useHead({
    title: 'COMOMAYA - Portfolio',
    meta: [
      {
        name: 'COMOMAYA',
        content: 'Portfolio',
      },
    ],
    link,
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
  })
</script>

<template>
  <main class="min-h-screen flex justify-center py-32 bg-beige z-0 relative mx-10 md:mx-28 md:justify-start">
    <img :src="imgSrc" :alt="imgAlt" class="imgP fixed max-w-[10rem] md:max-w-md h-auto top-0 left-0 opacity-0 z-20 pointer-events-none" />
    <ul class="grid z-10">
        <li v-for="(portfolio, i) in response.list">
          <a :href="`/portfolio/${portfolio.slug}`" @click.prevent="(e) => handleClick(e, i)">
            <div class="flex py-3 md:py-10 flex-wrap" @focus="(e) => handleHover(e, i)" @mouseenter="(e) => handleHover(e, i)" @onfocusout="handleOut" @mouseleave="() => handleOut()">
              <h2 class="text-4xl md:text-7xl whitespace-nowrap font-semibold">{{portfolio.title}}</h2>
              <h3 v-if="width > 768 || !portfolio.metadata.type_mobile" class="text-xs md:text-s font-semibold whitespace-nowrap">{{portfolio.metadata.type}}</h3>
              <h3 v-else class="text-xs md:text-s font-semibold whitespace-nowrap">{{portfolio.metadata.type_mobile}}</h3>
            </div>
          </a>
        </li>
    </ul>
  </main>
</template>