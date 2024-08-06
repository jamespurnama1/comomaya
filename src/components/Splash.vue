<template>
  <div
    class="bg-stone-300 z-40 w-full py-9 px-9 lg:px-20 xl:px-36 flex items-start justify-center flex-col gap-5 md:gap-5">
    <h3 class="text-stone-500 mb-3 text-sm md:text-lg font-semibold tracking-widest text-left">
      HELLO
    </h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-[min-content_max(25vw,10vh)_1fr] gap-5 w-full">

      <!-- 1A -->
      <div class="row-span-1">
        <div class="h-min-0 w-min-0">
          <h1
            class="split drama text-4xl md:text-5xl 2xl:text-7xl text-active font-extrabold overflow-hidden relative !leading-[0.85]">
            <strong><span>We</span><span>are</span><span>COMOMAYA,</span><br><span>a</span><span>boutique</span><span>creative</span><span>agency</span><span>just</span><br><span>like</span><span>any</span><span>other.</span><br><span
                class="text-beige-normal">...not quite.</span></strong>
          </h1>
          <p class="text-lg md:text-xl lg:text-2xl pt-8 leading-relaxed">
            Yes we do <strong class="font-extrabold">work</strong> that is fabulous.<br>
            Yes we offer a wide range of <strong class="font-extrabold">services</strong>.<br>
            Yes our team and <strong class="font-extrabold">people</strong> are stellar.<br>
            <strong class="font-extrabold">But we also work in a way that is personal, flexible,
              agile, collaborative and we will try our best to not be beaten on pricing and affordability. Anything else
              on your wishlist?</strong>
          </p>
          <a class="text-active font-extrabold lg:text-2xl" href="https://wa.me/6594245994">Call us.</a>
          <!-- <div class="flex flex-col text-active !font-extrabold text-xl md:text-3xl drama my-3 md:my-5">

          </div> -->
        </div>
      </div>

      <!-- 1B -->
      <div class="flex flex-col row-start-1 row-span-1 col-start-1 sm:col-start-2 bg-beige-lighter h-full p-8 md:pt-12">
        <h3 class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left">
          INDUSTRIES WE CATER&nbsp;TO
        </h3>
        <ul class="text-xl md:text-2xl 2xl:text-5xl h-full font-extrabold grid grid-cols-2 pt-5">
          <li>banking</li>
          <li>beauty</li>
          <li>boutique</li>
          <li>corporate</li>
          <li>drink</li>
          <li>finance</li>
          <li>fintech</li>
          <li>fitness</li>
          <li>food</li>
          <li>health</li>
          <li>home</li>
          <li>hospitality</li>
          <li>household</li>
          <li>lifestyle</li>
          <li>logistics</li>
          <li>luxury</li>
          <li>warehousing</li>
          <li>wellness</li>
          <li class="text-blue">and more...</li>
        </ul>
      </div>

      <!-- 2A -->
      <div class="sm:col-start-2 sm:row-start-2 row-span-1">
        <picture class="">
          <source srcset=" /assets/fairtrade.webp" type="image/webp">
          <source srcset="/assets/fairtrade.jpeg" type="image/jpeg">
          <img class="object-cover w-full h-full origin-bottom" src="/assets/fairtrade.jpeg" alt="Fairtrade">
        </picture>
      </div>

      <!-- 2B -->
      <div class="sm:row-end-4 col-start-1 sm:row-start-2 h-min-0 w-min-0">
        <picture class="">
          <source srcset=" /assets/lovespun.webp" type="image/webp">
          <source srcset="/assets/lovespun.jpg" type="image/jpeg">
          <img class="object-cover origin-top w-full h-full" src="/assets/lovespun.jpg" alt="Lovespun">
        </picture>
      </div>

      <!-- 3 -->
      <div class="sm:col-start-2 sm:row-start-3 sm:row-end-4 h-min-0 w-min-0">
        <div class="bg-beige-lighter h-full w-full p-8 md:pt-12 flex flex-col gap-4 md:gap-12">
          <div>
            <h2 class="text-black font-bold text-3xl md:text-4xl">comomaya</h2>
            <p class="italic text-stone-700 leading-tight text-base md:text-xl">
              <span class="font-semibold">noun</span>
              <br>
              como: (Spanish) as, like
              <br v-if="store.getWidth <= 768" />
              <span v-else class="pl-7" />
              maya: (Sanskrit) power, energy,&nbsp;magic
            </p>
          </div>
          <p
            class="ml-auto text-base 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg font-semibold !leading-normal text-black">
            COMOMAYA exists for one simple reason —<br>to make great design more accessible.
            From start-ups and new businesses to corporate enterprises — small, medium and large alike. To empower
            business owners &amp; entrepreneurs with powerful brands that tell a story. To make heads turn. And to add
            some&nbsp;magic.
            <br>
            <br>
            From naming to brandmarks, from brand strategy to creating print &amp; digital identities, from packaging to
            website and social media — we have it all covered. So come on in and take a&nbsp;look!
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, nextTick, onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { useStore } from '../stores';

const store = useStore()
const parallax = ref([]) as Ref<NodeListOf<HTMLDivElement>[]>

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
})
</script>

<style scoped lang="scss">
.vertical {
  font-family: Heaters;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  text-orientation: mixed;
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