<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from "swiper";
import 'swiper/scss';
import { ref, type Ref } from 'vue';
import { useStore } from '../../stores';

const modules = [Autoplay]
const store = useStore()

const people = Object.values(import.meta.glob('@/assets/people/*.{jpg,png,jpeg,svg,webp}', { as: 'url', eager: true }));

useHead({
  title: 'COMOMAYA - About',
  meta: [
    {
      name: 'COMOMAYA',
      content: 'About',
    },
  ],
})

const testimonials: { [key: string]: string }[] = [
  {
    "TANUSHREE SETH | Chief Executive&nbsp;Officer | Mirror&nbsp;Mirror, Guild&nbsp;Capital": "&quot;Ridhi's deep experience in branding, design, and strategy coupled with her consulting experience on top beauty and personal care brands globally has given her a distinctive ability to provide strategies that leverage first-principles thinking and propose solutions that are uniquely defined for the brand under&nbsp;study.&quot;",
  },
  {
    "WILLIAM WATSON | Vice&nbsp;President | Everstone&nbsp;Group": "&quot;Ridhi Sain of COMOMAYA was instrumental in driving the successful delivery and launch of Culinary Brands. As a professional consultant, she worked tirelessly to meet and exceed our expectations, not only in terms of the quality of brand strategy &amp; design outputs, but also in terms of timely&nbsp;delivery.&quot;",
  },
  {
    "TANUSHREE SETH | Chief Executive&nbsp;Officer | Mirror&nbsp;Mirror, Guild&nbsp;Capital": "&quot;Every interaction with Ridhi is a pleasure; in fact the branding &amp; logo design project outcome was so successful, that we reached out to Ridhi again to join hands on a new project that has been recently kicked-off. The success of the branding and logo design project was largely attributable to Ridhi’s strong analytical, yet creative and design-led strategic consulting skills. We have been so happy to have her expertise as a consulting partner on this&nbsp;brand.&quot;",
  },
  {
    "ROSHINI BAKSHI | Head of&nbsp;Impact | Managing&nbsp;Director | Private&nbsp;Equity | Everstone&nbsp;Group": "&quot;Ridhi &amp; COMOMAYA invested a lot of time in working on the brand strategy, vision, mission and proposition. Very good execution of the brand strategy in terms of identity and design elements. Differentiated and fresh approach. A pleasure working with COMOMAYA and we look forward to working with Ridhi Sain <wbr>on our next project&nbsp;together.&quot;"
  },
  {
    "KRISHNAN NARAYAN | Founder &amp; Chief&nbsp;Technologist | Netracity&nbsp;LLC": "&quot;I worked with Ridhi Sain to help me with the market positioning, naming, design and brand strategy for my company, Netracity LLC based in Texas, USA. Ridhi &amp; COMOMAYA did a great job on the company mission &amp; vision and created the brand strategy &amp; logo to accurately communicate the company's strategy to my clients. Her interactions with me &amp; my team were very timely and professional. I highly recommend Ridhi Sain &amp;&nbsp;COMOMAYA.&quot;"
  },
  {
    "MARGIE WARRELL, PhD | Bestselling Author &amp; Keynote Speaker	| CEO, Global Courage Leadership": "&quot;Love my new branding by the very talented Ridhi&nbsp;Sain&quot;"
  }
]

const testimonialsDate = [
  "October 2022",
  "November 2022",
  "October 2022",
  "November 2022",
  "September 2022",
  ""
]

const swiperDOM = ref(null) as Ref<null | typeof Swiper>
</script>

<template>
  <main class="relative bg-stone-300 mx-auto flex flex-col justify-center overflow-hidden items-center">
    <picture class="w-full">
      <source srcset="/assets/tzo.avif">
      <source srcset="/assets/tzo.webp">
      <img src="/assets/tzo.jpg" alt="Tzo Packaging Design" class="w-full h-72 md:h-[36rem] object-cover" />
    </picture>
    <div class="w-full">
      <h1 class="hidden">About</h1>

      <!--- RIDHI --->

      <section class="bg-beige-lighter overflow-visible w-full">
        <div
          class="max-w-[1920px] flex gap-8 md:gap-32 py-16 flex-col-reverse items-start justify-end md:flex-row-reverse mx-auto px-9 lg:px-20 xl:px-36">
          <div class="md:w-2/3 my-auto md:pt-16">
            <h3 class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left">
              FOUNDER &amp;&nbsp;CREATIVE
            </h3>
            <span class="relative md:mb-1 flex md:flex-row flex-col md:items-center">
              <h2 class="drama mb-2 text-6xl md:-ml-1 md:text-8xl text-left !leading-[0.75em] text-black">
                <strong>ridhi</strong> sain
              </h2>
              <picture>
                <source srcset="/assets/awards.webp" type="image/webp">
                <source srcset="/assets/awards.png" type="image/png">
                <img class="md:pl-5 md:max-h-16 max-w-[100%] max-h-8 md:mt-3 md:mb-0 mb-5 mix-blend-multiply"
                  src="/assets/awards.png" alt="Awards">
              </picture>
            </span>
            <p class="text-base md:text-lg text-left text-black lg:max-w-[720px]">
              Ridhi Sain is an award-winning brand, identity &amp; packaging designer, and founder of
              <strong>COMOMAYA</strong> which she launched in March
              2022.<br class="mt-2 block" style="content: ''">With a career spanning almost 20 years in the UK,
              Singapore
              &amp; India, Ridhi has worked with international agencies
              such as Coley Porter Bell (part of the Ogilvy &amp; WPP Group), Elmwood, NiCE and WhyBD. She is also
              ex-Assoc
              Creative Director and ex-Design Director of Holmes &amp; Marchant, Cowan &amp; Pi Global where she has led
              and
              helped strategise, conceptualise and direct creative work on multiple global brands such as Unilever's
              Dove,
              Closeup &amp; Comfort as well as others such as Johnson &amp; Johnson, Nescafe, SKII, Kraft Heinz, Pernod
              Ricard, Kellogg's and many&nbsp;more.<br class="mt-2 block" style="content: ''"><br>More recently, she has
              worked
              with
              smaller boutique
              clients ranging from luxury, to corporate and digital start ups, bringing her vast experience and immense
              passion to help
              them through their creative&nbsp;journey.
            </p>
          </div>
          <div class="w-full min-h-[15rem] md:w-auto overflow-hidden">
            <picture>
              <source srcset="/assets/Ridhi.jpg" type="image/jpeg">
              <source srcset="/assets/Ridhi.webp" type="image/webp">
              <img class="w-full h-full object-contain max-w-[300px] md:py-16 m-auto" src="/assets/Ridhi.jpg"
                alt="Ridhi Sain" />
            </picture>
          </div>
        </div>
      </section>

      <!--- OUR PEOPLE --->
      <section class="bg-stone-300">
        <div class="max-w-[1920px] px-9 lg:px-20 xl:px-36 flex justify-center flex-col pt-8 pb-4 md:py-1 mx-auto">
          <h3 class="text-beige-lighter md:pt-16 text-sm md:text-lg font-semibold tracking-widest text-right">
            INDUSTRY&nbsp;TALENT
          </h3>
          <h2
            class="drama text-6xl md:text-8xl !leading-[0.75em] md:mb-3 overflow-hidden text-right text-active font-medium">
            our <strong>people</strong>
          </h2>
          <h3 v-if="store.getWidth > 768"
            class="text-black text-base md:text-lg text-right pb-5 !leading-snug lg:max-w-[720px] md:ml-auto">
            Headquartered in Singapore, and with an equal footing in India, we cater to both a local and a global
            clientele that includes Dubai, USA, UK, Australia and more. We work in an organic way, collaborating with
            some
            of the best talent in the industry and across the&nbsp;globe.
          </h3>
        </div>
      </section>

      <section class="relative">
        <div class="bg-blue left-0 md:block hidden md:w-1/2 absolute h-full z-0" />
        <div
          class="max-w-[1920px] md:px-9 lg:px-20 xl:px-36 flex flex-col justify-center items-center md:flex-row relative mx-auto">
          <div class="p-0 m-0 bg-blue flex-0 relative z-10 md:w-1/2">
            <picture class="w-full min-h-0">
              <source srcset="/assets/globe.png" type="image/png">
              <source srcset="/assets/globe.webp" type="image/webp">
              <img class="object-contain py-3 md:p-5 w-full min-h-0" src="/assets/globe.png" alt="Globe" />
            </picture>
          </div>


          <!-- Mobile Only -->
          <section v-if="store.getWidth <= 768" class="flex flex-col-reverse justify-center px-9 lg:px-20 xl:px-36">
            <h3 class="text-black text-xl py-5 !leading-snug">
              Headquartered in Singapore, and with an equal footing in India, we cater to both a local and a global
              clientele that includes Dubai, USA, UK, Australia and more. We work in an organic way, collaborating with
              some of the best talent in the industry and across the&nbsp;globe.
            </h3>
          </section>


          <div class="overflow-hidden grid grid-cols-4 gap-1 md:gap-3 flex-shrink md:h-full md:w-1/2 py-5 md:py-0">
            <img class="aspect-square object-cover" v-for="person in people" :src="person"
              :alt="person.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" />
          </div>
        </div>
      </section>

      <!-- <span id="services" /> -->
      <span id="grant" />

      <!--- RMC --->
      <RMC />

      <!--- BRANDS --->

      <Brands />

      <!--- TESTIMONIALS --->

      <section class="bg-blue">
        <div class="max-w-[1920px] mx-auto px-12 md:px-20 xl:px-36 flex flex-col justify-center relative min-h-[70vh]">
          <h3
            class="text-active drama md:pb-3 pt-8 md:pt-20 lg:pt-16 text-5xl md:text-6xl lg:text-8xl font-semibold md:text-center">
            client <strong>testimonials</strong>
          </h3>
          <button @click="swiperDOM ? swiperDOM.$el.swiper.slideNext() : null"
            class="absolute right-3 md:right-10 md:hover:scale-150 transition-transform">
            <img class="block w-7 h-7 md:w-10 md:h-10 object-contain" src="/assets/arrow-right.svg" alt="button next" />
          </button>
          <button @click="swiperDOM ? swiperDOM.$el.swiper.slidePrev() : null"
            class="absolute left-3 md:left-10 md:hover:scale-150 transition-transform">
            <img class="block w-7 h-7 md:w-10 md:h-10 object-contain rotate-180" src="/assets/arrow-right.svg"
              alt="button previous" />
          </button>
          <swiper class="w-full" :autoplay="{
            delay: 8000,
            disableOnInteraction: false,
          }" :loop="true" :autoHeight="true" :simulateTouch="false" :modules="modules" ref="swiperDOM">
            <swiper-slide class="h-full py-10 flex flex-col justify-center align-middle select-none"
              v-for="(items, i) in testimonials">
              <blockquote class="md:leading-10 text-base md:text-2xl lg:text-center text-beige-lighter my-auto"
                v-html="`${items[Object.keys(items)[0]]}`" />
              <h2 class="text-active md:px-0 mt-7 font-medium text-base tracking-wider text-left lg:text-center"
                v-html="`${Object.keys(items)[0]}`" />
            </swiper-slide>
          </swiper>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
.swiper-button-next,
.swiper-button-prev {
  color: black;
}
</style>

<style lang="scss" scoped>
.split span {
  opacity: 0;
  visibility: hidden;
  margin-right: 0.2em;
  display: inline-block;
  transform: translateY(400%);
}

.flop {
  transition: all 0.5s ease;
  transform: rotateX(-90deg) translateZ(-0.9375rem);
  font-family: "Barlow";
  font-weight: 800;
  opacity: 0;
  @apply absolute flex justify-center gap-5 h-24 md:h-32 items-center;

  @media (min-width: 768px) {
    transform: rotateX(-90deg) translateZ(-4rem);
  }
}

.cube {
  transition: transform 0.5s;
  transform-style: preserve-3d;
  perspective: 5000px;
  @apply h-24 md:h-32;

  @media (min-width: 768px) {
    &:hover {
      transform: rotateX(90deg);

      .flop {
        opacity: 1;
      }
    }
  }
}
</style>