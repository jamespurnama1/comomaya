<template>
  <div
    class="bg-stone-300 z-40 w-full py-9 px-9 lg:px-20 xl:px-36 flex items-start justify-center flex-col gap-5 md:gap-5">
    <!-- <div class="w-full"> -->
    <h3 class="text-stone-500 mb-3 text-sm md:text-lg font-semibold tracking-widest text-left">
      HELLO
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[max-content_1fr_minmax(0,max-content)] gap-5 w-full">

      <!-- 1A -->
      <div class="row-span-1">
        <div class="h-min-0 w-min-0">
          <h1
            class="split drama text-xl md:text-2xl lg:text-5xl 2xl:text-8xl text-active font-extrabold overflow-hidden relative !leading-[0.85]">
            <strong><span>We</span><span>are</span><span>a</span><span>creative</span><span>boutique</span></strong><br><span>&amp;</span><strong><span>we</span><span>build</span><br><span>powerful</span><br><span>brands</span></strong>
          </h1>
          <h2 class="text-beige-lighter font-bold text-xl md:text-3xl mt-3">comomaya</h2>
          <p class="italic text-stone-700 leading-tight text-base md:text-xl">
            <span class="font-semibold">noun</span>
            <br>
            como: (Spanish) as, like
            <br v-if="store.getWidth <= 768" />
            <span v-else class="pl-7" />
            maya: (Sanskrit) power, energy,&nbsp;magic
          </p>
        </div>
      </div>

      <!-- 1B -->
      <div class="row-start-1 row-span-1 col-start-1 md:col-start-2 aspect-square">
        <picture class="h-min-0 w-min-0">
          <source srcset=" /assets/gabongo.webp" type="image/webp">
          <source srcset="/assets/gabongo.jpg" type="image/jpeg">
          <img class="object-cover w-full h-full origin-top" src="/assets/gabongo.jpg" alt="Gabongo">
        </picture>
      </div>

      <!-- 2A -->
      <div class="md:col-start-2 md:row-start-2">
        <picture class="h-min-0 w-min-0">
          <source srcset=" /assets/fairtrade.webp" type="image/webp">
          <source srcset="/assets/fairtrade.jpeg" type="image/jpeg">
          <img class="object-cover w-full h-full origin-bottom" src="/assets/fairtrade.jpeg" alt="Fairtrade">
        </picture>
      </div>

      <!-- 2B -->
      <div class="row-span-2 col-start-1 md:row-start-2">
        <picture class="">
          <source srcset=" /assets/lovespun.webp" type="image/webp">
          <source srcset="/assets/lovespun.jpg" type="image/jpeg">
          <img class="object-cover origin-top h-full" src="/assets/lovespun.jpg" alt="Lovespun">
        </picture>
      </div>

      <!-- 3 -->
      <div class="md:col-start-2 md:row-start-3">
        <div class="bg-beige-lighter p-12 pt-12 md:pt-24 flex flex-col gap-4 md:gap-12">
          <h3 class="split text-2xl md:text-5xl 2xl:text-6xl text-black font-extrabold overflow-hidden relative drama">
            <span class="!leading-[0.9]"><strong>COMOMAYA's</strong> mission</span>
          </h3>
          <p class="ml-auto text-base 2xl:text-2xl lg:text-xl md:text-lg font-semibold !leading-normal text-black">
            COMOMAYA exists for one simple reason — to make great design more accessible to start-ups and new
            businesses — small, medium and large alike. To empower new business owners &amp; entrepreneurs with powerful
            brands that tell a story. And to add some&nbsp;magic.
            <br>
            <br>
            From market research to naming, from brand strategy to creating print &amp; digital identities, from
            packaging to website and social media — we have it all covered. So come on in and take a&nbsp;look!
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, nextTick, onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useStore } from '../stores';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const store = useStore()
const parallax = ref([]) as Ref<NodeListOf<HTMLDivElement>[]>
// const emit = defineEmits(['close'])
// const status = ref(true)

// function close() {
//   gsap.to('dialog', {
//     y: "-=100%",
//     ease: "power1.inOut",
//     onComplete: () => {
//       status.value = false;
//       emit('close')
//     }
//   })
// }

onMounted(async () => {
  await nextTick()
  const split: null | NodeListOf<HTMLSpanElement> = document.querySelectorAll('.split span');
  if (split) {
    gsap.to(split, {
      y: "-0.1em",
      duration: 0.5,
      stagger: 0.2,
      // ScrollTrigger {
      //   trigger: split
      // }
    })
    gsap.to(split, {
      autoAlpha: 1,
      stagger: 0.2,
    })
  }

  //   const parallax = gsap.utils.toArray(".parallax")
  //   parallax.forEach(el => {
  //     gsap.to((el as HTMLDivElement).querySelector('img'), {
  //       y: "-=50%",
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: el as HTMLDivElement,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: true,
  //       }
  //     })
  //   })
})
</script>

<style scoped lang="scss">
.drama {
  font-weight: 600;
  font-family: "Narziss";
}

.drama strong {
  font-weight: 800;
  font-family: "Barlow";
}

.split span {
  opacity: 0;
  visibility: hidden;
  margin-right: 0.2em;
  display: inline-block;
  transform: translateY(400%);
  line-height: 0.6;
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