<template>
  <dialog :open="status"
    class="bg-beige-lighter z-40 fixed w-screen h-screen flex items-center justify-center flex-col gap-24">
    <picture class="absolute top-0 left-0 py-3 md:py-7 px-9 lg:px-20 xl:px-36 brightness-0">
      <img src="/logo.svg" alt="COMOMAYA"
        class="logo transition-all duration-700 h-5 object-contain md:h-7 img-responsive origin-top-left" />
    </picture>
    <div class="">
      <h3 class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left mr-auto">
        HELLO
      </h3>
      <h1 class="split lowercase mr-auto text-6xl text-black font-extrabold overflow-hidden relative">
        <span>We</span><span>are</span><span>a</span><span>creative</span><span>boutique</span><span>agency</span><br><span>&amp;</span><span>we</span><span>build</span><span>powerful</span><span>brands</span>
      </h1>
    </div>
    <button class="cube my-10 md:my-0 xl:text-8xl md:text-7xl text-5xl leading-[3rem] md:leading-[3.5rem]"
      @click="close()">
      <p class="flip">
        <span class="text-blue">(CLICK HERE)</span>
        what we do
        <span class="text-blue">(CLICK HERE)</span>
      </p>
      <p class="flop text-active">
        what we do
      </p>
    </button>
  </dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const emit = defineEmits(['close'])
const status = ref(true)

function close() {
  gsap.to('dialog', {
    opacity: 0,
    onComplete: () => {
      status.value = false;
      emit('close')
    }
  })
}

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