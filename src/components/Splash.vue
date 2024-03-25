<template>
  <div
    class="bg-stone-300 z-40 w-full py-9 px-9 lg:px-20 xl:px-36 flex items-start justify-center flex-col gap-5 md:gap-5">
    <div class="w-full">
      <h3 class="text-stone-500 mb-3 text-sm md:text-lg font-semibold tracking-widest text-left">
        HELLO
      </h3>
      <div class="flex gap-5 md:gap-5 md:flex-row flex-col w-full justify-between">
        <div class="flex flex-col md:w-1/2">
          <h1
            class="split drama text-4xl md:text-8xl text-active font-extrabold overflow-hidden relative !leading-[0.85]">
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
          <!-- <p class="text-white group-hover:text-active duration-500 transition-all">Info</p> -->
          <!-- <router-link to="/about">
            <button class="py-3 rounded-lg mr-auto group font-semibold flex items-center gap-2">
              <p class="text-white group-hover:text-active duration-500 transition-all">About COMOMAYA</p>
              <font-awesome-icon :icon="['fas', 'fa-angles-right']"
                class="text-white group-hover:text-active duration-500 transition-all group-hover:translate-x-2" />
            </button></router-link> -->
        </div>

        <div class="md:w-1/2 relative overflow-hidden flex items-start aspect-square">
          <picture class="w-full h-full">
            <source srcset=" /assets/gabongo.webp" type="image/webp">
            <source srcset="/assets/gabongo.jpg" type="image/jpeg">
            <img class="object-cover w-full h-full origin-top" src="/assets/gabongo.jpg" alt="Gabongo">
          </picture>
        </div>
      </div>
    </div>

    <div class="flex md:flex-row flex-col-reverse gap-5 md:gap-5">
      <div class="md:w-1/2 relative overflow-hidden flex items-end">
        <picture class="w-full">
          <source srcset=" /assets/lovespun.webp" type="image/webp">
          <source srcset="/assets/lovespun.jpg" type="image/jpeg">
          <img class="object-cover w-full origin-top" src="/assets/lovespun.jpg" alt="Lovespun">
        </picture>
      </div>

      <div class="md:w-1/2 flex flex-col gap-5 md:gap-5">
        <div class="w-full relative overflow-hidden flex h-[30vw]">
          <picture class="w-full h-full">
            <source srcset=" /assets/fairtrade.webp" type="image/webp">
            <source srcset="/assets/fairtrade.jpeg" type="image/jpeg">
            <img class="object-cover w-full h-full origin-bottom" src="/assets/fairtrade.jpeg" alt="Fairtrade">
          </picture>
        </div>
        <div class="bg-beige-lighter p-12 pt-24 flex flex-col gap-12 h-[80%]">
          <h3 class="split text-4xl md:text-6xl text-black font-extrabold overflow-hidden relative drama">
            <span class="!leading-[0.9]"><strong>COMOMAYA's</strong>&nbsp;mission</span>
          </h3>
          <p class="ml-auto md:text-3xl text-xl font-semibold !leading-normal text-black">
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