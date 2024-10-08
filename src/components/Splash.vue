<template>
  <section class="bg-stone-300 z-40 w-full">
    <div
      class="py-9 px-9 lg:px-20 xl:px-36 flex items-start justify-center flex-col gap-5 md:gap-5 max-w-[1920px] mx-auto">
      <p class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left">
        HELLO
      </p>

      <div
        class="grid grid-cols-1 grid-rows-[min-content_0.9fr_min-content] sm:grid-rows-[min-content_0.9fr_min-content] gap-5 w-full sm:grid-cols-[4fr_3fr]">

        <!-- 1A -->
        <div class="row-span-1 col-start-1 col-span-2 sm:col-span-1">
          <div class="min-h-0 w-full">
            <h1
              class="split drama text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl text-active font-extrabold overflow-hidden relative !leading-[0.85]">
              <strong><span>We</span><span>are</span><span>COMOMAYA,</span><br><span>a</span><span>Singapore-based</span><br><span>boutique</span><span>creative</span><br><span>agency</span><span>just</span><span>like</span><br><span>any</span><span>other.</span><br><span
                  class="text-beige-normal">...not quite.</span></strong>

            </h1>
            <p class="lg:text-lg pt-8 leading-relaxed text-pretty">
              Yes we do <strong class="font-extrabold">work</strong> that is&nbsp;fabulous.<br>Yes we offer a wide range
              of&nbsp;<strong class="font-extrabold">services</strong>.<br>Yes our team and <strong
                class="font-extrabold">people</strong> are&nbsp;stellar.<br><strong class="font-extrabold">But we also
                work
                in a way that is personal, flexible, agile, collaborative and we will try our best to not be beaten on
                pricing and value for&nbsp;money.<br>Anything else on your wishlist?</strong>
            </p>
            <a class="transition-transform hover:scale-150 block origin-center text-center mr-auto w-fit"
              href="https://wa.me/6594245994" target="_blank" rel="noopener noreferrer">
              <p class="text-active font-extrabold text-lg lg:text-xl w-fit">Call us.</p>
            </a>
          </div>
        </div>

        <!-- 1B -->
        <div class="row-start-2 sm:row-start-1 row-span-1 col-start-1 sm:col-start-2 col-span-2 sm:col-span-1">
          <picture class="">
            <source srcset=" /assets/mirror-mirror.webp" type="image/webp">
            <source srcset="/assets/mirror-mirror.jpg" type="image/jpeg">
            <img class="object-cover w-full h-full" src="/assets/mirror-mirror.jpg" alt="Mirror Mirror">
          </picture>
        </div>

        <!-- 2A -->
        <div
          class="flex flex-col sm:col-start-2 col-span-2 sm:col-span-1 row-start-3 row-span-1 h-full p-8 md:pt-12 bg-beige-lighter">
          <h2 class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left">
            INDUSTRIES WE CATER&nbsp;TO
          </h2>
          <ul class="text-xl md:text-2xl 2xl:text-4xl h-full font-extrabold flex pt-5 gap-10">
            <span class="flex flex-col h-full justify-between">
              <li>banking</li>
              <li>beauty</li>
              <li>boutique</li>
              <li>corporate</li>
              <li>drink</li>
              <li>finance</li>
              <li>fintech</li>
              <li>fitness</li>
              <li>food</li>
            </span>
            <span class="flex flex-col h-full justify-between">
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
            </span>
          </ul>
        </div>

        <!-- 2B -->
        <div class="sm:row-end-3 col-start-1 sm:row-start-2 col-span-2 h-min-0 w-min-0">
          <picture class="">
            <source srcset=" /assets/lovespun.webp" type="image/webp">
            <source srcset="/assets/lovespun.jpg" type="image/jpeg">
            <img class="object-cover origin-top w-full h-full" src="/assets/lovespun.jpg" alt="Lovespun">
          </picture>
        </div>

        <!-- 3 -->
        <div class="col-span-2 sm:col-span-1 sm:row-start-3 sm:row-span-1 h-min-0 w-min-0">
          <div class="bg-beige-lighter h-full w-full p-8 md:pt-12 flex flex-col gap-4 md:gap-12">
            <div>
              <h3 class="text-black font-bold text-3xl md:text-4xl">comomaya</h3>
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
              class="ml-auto text-base 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-semibold !leading-normal text-black text-pretty">
              COMOMAYA exists for one simple reason —<br>to make great design more accessible.
              From start-ups and new businesses to corporate enterprises — small, medium and large alike. To empower
              business owners &amp; entrepreneurs with powerful brands that tell a story. To make heads turn. And to add
              some&nbsp;magic.
              <br>
              <br>
              From naming to brandmarks, from brand strategy to creating print &amp; digital identities, from packaging
              to
              website and social media — we have it all covered. So come on in and take a&nbsp;look!
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
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
  line-height: 0.95em;
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