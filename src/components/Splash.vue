<template>
  <div class="bg-stone-300 z-40 w-full h-screen px-9 lg:px-20 xl:px-36 flex items-start justify-center splash flex-col">
    <h3 class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left">
      HELLO
    </h3>
    <div class="flex gap-5 md:gap-24 md:flex-row flex-col">
      <div class="mr-auto">
        <h1 class="split lowercase text-2xl md:text-6xl text-active font-extrabold overflow-hidden relative">
          <span>We</span><span>are</span><span>a</span><br><span>boutique</span><span>creative</span><span>agency</span><br><span>&amp;</span><span>we</span><span>build</span><span>powerful&nbsp;brands</span>
        </h1>
      </div>
      <p class="ml-auto md:text-4xl text-lg !leading-normal">
        COMOMAYA's mission is to make international standards of branding &amp; design more accessible to startups
        and&nbsp;SMEs.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

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

onMounted(() => {
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
})
</script>

<style scoped lang="scss">
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