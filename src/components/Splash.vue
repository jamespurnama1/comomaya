<template>
  <div
    class="bg-stone-300 z-40 w-full py-9 px-9 lg:px-20 xl:px-36 flex items-start justify-center flex-col gap-5 md:gap-5">
    <div class="w-full">
      <h3 class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left">
        HELLO
      </h3>
      <div class="flex gap-5 md:gap-5 md:flex-row flex-col w-full justify-between">
        <div class="flex flex-col md:w-1/2">
          <h1 class="split drama text-4xl md:text-6xl text-active font-extrabold overflow-hidden relative">
            <strong><span>We</span><span>are</span><span>a</span><span>boutique</span><br><span>creative</span><span>agency</span></strong><br><span>&amp;</span><strong><span>we</span><span>build</span><br><span>powerful&nbsp;brands</span></strong>
          </h1>
          <router-link to="/about">
            <button class="py-3 rounded-lg mr-auto group font-semibold flex items-center gap-2">
              <p class="text-white group-hover:text-active duration-500 transition-all">About COMOMAYA</p>
              <font-awesome-icon :icon="['fas', 'fa-arrow-right']"
                class="text-white group-hover:text-active duration-500 transition-all group-hover:translate-x-2" />
            </button></router-link>
        </div>

        <div class="md:w-1/2 relative overflow-hidden">
          <picture class="">
            <source srcset=" /assets/brewlander-1.webp" type="image/webp">
            <source srcset="/assets/brewlander-1.jpg" type="image/jpeg">
            <img class="parallax object-cover w-full h-[60vw] scale-[2] md:scale-[1.5] origin-bottom"
              src="/assets/brewlander-1.jpg" alt="Brewlander">
          </picture>
        </div>
      </div>
    </div>

    <div class="flex md:flex-row flex-col-reverse gap-5 md:gap-5">
      <div class="md:w-1/2 relative overflow-hidden">
        <picture class="">
          <source srcset=" /assets/carte-dor.webp" type="image/webp">
          <source srcset="/assets/carte-dor.jpeg" type="image/jpeg">
          <img class="parallax object-cover w-full h-full scale-[2] md:scale-[1.5] origin-bottom"
            src="/assets/carte-dor.jpeg" alt="Carte D'Or">
        </picture>
      </div>

      <div class="md:w-1/2 flex flex-col gap-5 md:gap-5">
        <div class="relative overflow-hidden">
          <picture class="">
            <source srcset=" /assets/revolver.webp" type="image/webp">
            <source srcset="/assets/revolver.jpeg" type="image/jpeg">
            <img class="parallax object-cover w-full scale-[2.5] md:scale-[2] origin-bottom" src="/assets/revolver.jpeg"
              alt="Revolver">
          </picture>
        </div>
        <div>
          <h3 class="split text-4xl md:text-6xl text-active font-extrabold overflow-hidden relative">
            <span class="!leading-none">COMOMAYA's Mission</span>
          </h3>
          <p class="ml-auto md:text-lg text-base !leading-normal text-white">
            COMOMAYA&apos;s mission is to make international standards of branding &amp; design more accessible to
            startups and&nbsp;SMEs.
            <br>
            <br>
            We aim to empower business owners with brands that tell a
            powerful story. To help them express their passion through great design. To energise brands with a strong
            purpose. And to make heads&nbsp;turn.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, nextTick, onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
    })
    gsap.to(split, {
      autoAlpha: 1,
      stagger: 0.2,
    })
  }

  const parallax = gsap.utils.toArray(".parallax")
  // parallax.forEach(el => {
  gsap.to(parallax, {
    y: "+=300px",
    scrollTrigger: {
      // trigger: parallax.value,
      scrub: true,
    }
  })
  // })
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