<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from "swiper";
import 'swiper/scss';
import { onMounted, ref, type Ref, watch } from 'vue';
import { useStore } from '../../stores';
import { useRoute } from "vue-router"

const route = useRoute()
const modules = [Autoplay]
const store = useStore()
const brands = Object.values(import.meta.glob('@/assets/brands/*.{jpg,png,jpeg,svg,webp}', { as: 'url', eager: true }));
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
});

watch(route, (to) => {
  setTimeout(() => {
    if (to.hash) {
      document.querySelector(to.hash) ? window.scrollTo({
        top: document.querySelector(to.hash)!.getBoundingClientRect().top + window.scrollY - 50,
        behavior: "smooth"
      }) : null
    }
  }, 1000);
}, { flush: 'pre', immediate: true, deep: true })
</script>

<template>
  <main class="relative bg-stone-300 mx-auto flex flex-col justify-center pt-10">
    <section class="relative z-0 overflow-hidden">
      <div class="flex px-9 lg:px-20 xl:px-36 flex-col py-24 relative z-10">
        <h1 class="md:text-7xl text-5xl font-extrabold tracking-tight text-active mb-5">about</h1>
        <!-- <h2 class="text-beige-lighter font-bold text-xl md:text-3xl">comomaya</h2>
        <p class="italic text-stone-700 leading-tight text-base md:text-xl">
          <span class="font-semibold">noun</span>
          <br>
          como: (Spanish) as, like
          <br v-if="store.getWidth <= 768" />
          <span v-else class="pl-7" />
          maya: (Sanskrit) energy,&nbsp;magic
        </p> -->
        <div class="flex flex-col-reverse md:flex-row-reverse items-start gap-5">
          <h3
            class="split md:-mt-9 lowercase text-6xl md:text-7xl xl:text-8xl 2xl:text-[7rem] leading-[3.25rem] md:leading-[4rem] xl:leading-[5.25rem] text-active font-extrabold overflow-hidden relative md:ml-auto md:py-4">
            <span>simple</span><br><span>beautiful</span><br><span>purposeful</span><br><span
              class="drama text-blue font-semibold text-[3rem] md:text-[4rem] xl:text-[5.5rem] 2xl:text-[6.5rem] md:leading-[4rem] 2xl:leading-[9rem]">design<span
                class="-ml-1 text-3xl xl:text-5xl align-super">&#x2122;</span></span>
          </h3>
          <p class="text-beige-lighter 2xl:text-4xl text-2xl flex-1">
            We believe that great design is one that strikes the right balance between simplicity, beauty and purpose —
            it simplifies the complex, grabs attention through its visual appeal, and carries meaning &amp; has a story
            behind its&nbsp;existence.
          </p>
        </div>
      </div>
    </section>
    <div>

      <!--- RIDHI --->

      <section
        class="relative flex px-9 lg:px-20 xl:px-36 gap-8 md:gap-16 py-16 flex-col-reverse justify-center bg-beige-lighter md:flex-row-reverse overflow-visible">
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
          <p class="text-base md:text-lg text-left text-black lg:max-w-[550px]">
            Ridhi Sain is an award-winning brand, identity &amp; packaging designer, and founder of
            <strong>COMOMAYA</strong> which she launched in March
            2022.<br class="mt-2 block" style="content: ''">With a career spanning almost 20 years in the UK, Singapore
            &amp; India, Ridhi has worked with international agencies
            such as Coley Porter Bell (part of the Ogilvy &amp; WPP Group), Elmwood, NiCE and WhyBD. She is also
            ex-Assoc
            Creative Director and ex-Design Director of Holmes &amp; Marchant, Cowan &amp; Pi Global where she has led
            and
            helped strategise, conceptualise and direct creative work on multiple global brands such as Unilever's Dove,
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
      </section>

      <!--- SONALI --->

      <section
        class="relative flex gap-8 md:gap-16 px-9 lg:px-20 xl:px-36 flex-col-reverse justify-center py-16 bg-stone-300 md:flex-row">
        <div class="md:w-2/3 my-auto flex flex-col md:items-end">
          <h3 class="text-beige-lighter text-sm md:text-lg font-semibold tracking-widest md:text-right">
            CLIENT &amp;&nbsp;OPS
          </h3>
          <h2 class="drama mb-2 text-6xl md:text-8xl md:text-right !leading-[0.75em] text-active">
            <strong>sonali</strong> sani
          </h2>
          <p class="text-base md:text-lg md:text-right text-black lg:max-w-[550px]">
            Sonali Sani has had over a decade of experience in Client Services. She has worked with big international
            agencies and smaller boutique ones, across Singapore, the UK and Hong Kong. Her client list includes SGX,
            Pan
            Pacific Hotels &amp; Resorts, Intercontinental Hotels Group, Twinings Tea, McCormick, GSK, Reckitt Benckiser
            and Moneycorp to name a&nbsp;few.
            <br class="mt-2 block" style="content: ''">
            Sonali brings a wealth of knowledge and experience to Comomaya. She has a natural strength at maintaining
            strong relationships with all of our clients, helping them meet their business needs and growth potential,
            whilst ensuring this is done on time and on&nbsp;budget.
          </p>
        </div>
        <div class="w-full md:w-auto min-h-[15rem] overflow-hidden">
          <picture>
            <source srcset="/assets/Sonali.jpg" type="image/jpeg">
            <source srcset="/assets/Sonali.webp" type="image/webp">
            <img class="w-full h-full object-contain max-w-[300px] md:py-16 m-auto md:mr-0" src="/assets/Sonali.jpg"
              alt="Sonali Sani" />
          </picture>
        </div>
      </section>

      <!--- Nishaa Bhojwani --->

      <section
        class="relative flex gap-8 md:gap-16 px-9 lg:px-20 xl:px-36 flex-col-reverse justify-center py-16 bg-beige-lighter md:flex-row-reverse">
        <div class="md:w-2/3 my-auto flex flex-col">
          <h3 class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-left">
            GROWTH
          </h3>
          <h2 class="drama mb-2 md:-ml-1 text-6xl md:text-8xl text-left !leading-[0.75em] text-black">
            <strong>nishaa</strong> bhojwani
          </h2>
          <p class="text-base md:text-lg text-left text-black lg:max-w-[550px]">
            Nishaa Bhojwani is a seasoned business development professional with over a decade of experience in media
            and
            technology. She has worked for companies such as Google and Mastercard and her past client list includes
            some
            of the biggest names in media and technology across North America and Asia Pacific. Through a consultative
            sales approach, she is able to truly understand her clients needs and help deliver on hyper-targeted custom
            solutions. Nishaa has built a reputation of being results oriented and brings to Comomaya a proven track
            record of successfully cultivating and growing strategic relationships with SMEs as well as
            large&nbsp;enterprises.
          </p>
        </div>
        <div class="w-full min-h-[15rem] md:w-auto overflow-hidden">
          <picture>
            <source srcset="/assets/Nishaa.jpg" type="image/jpeg">
            <source srcset="/assets/Nishaa.webp" type="image/webp">
            <img class="w-full h-full object-contain max-w-[300px] md:py-16 m-auto" src="/assets/Nishaa.jpg"
              alt="Nishaa Bhojwani" />
          </picture>
        </div>
      </section>

      <!--- OUR PEOPLE --->
      <section class="flex justify-center px-9 lg:px-20 xl:px-36 bg-stone-300 flex-col pt-8 pb-4 md:py-16">
        <h3 class="text-beige-lighter md:pt-16 text-sm md:text-lg font-semibold tracking-widest text-right">
          INDUSTRY&nbsp;TALENT
        </h3>
        <h2
          class="drama text-6xl md:text-8xl !leading-[0.75em] md:mb-3 overflow-hidden text-right text-active font-medium">
          our <strong>people</strong>
        </h2>
        <h3 v-if="store.getWidth >= 768"
          class="text-black md:text-xl 2xl:text-2xl text-right pb-5 !leading-snug lg:max-w-[550px] md:ml-auto">
          Headquartered in Singapore, and with an equal footing in India, we cater to both a local and a global
          clientele that includes Dubai, USA, UK, Australia and more. We work in an organic way, collaborating with some
          of the best talent in the industry and across the&nbsp;globe.
        </h3>
      </section>

      <section class="flex flex-col justify-center lg:flex-row">
        <div class="lg:w-2/3 p-0 m-0 bg-blue">
          <picture>
            <source srcset="/assets/globe.png" type="image/png">
            <source srcset="/assets/globe.webp" type="image/webp">
            <img class="object-contain min-w-full min-h-full h-auto py-3 md:p-5" src="/assets/globe.png" alt="Globe" />
          </picture>
        </div>
        <section v-if="store.getWidth < 768" class="flex flex-col-reverse justify-center px-9 lg:px-20 xl:px-36">
          <h3 class="text-black text-xl py-5 !leading-snug">
            Headquartered in Singapore, and with an equal footing in India, we cater to both a local and a global
            clientele that includes Dubai, USA, UK, Australia and more. We work in an organic way, collaborating with
            some of the best talent in the industry and across the&nbsp;globe.
          </h3>
        </section>
        <div class="w-full min-h-[15rem] lg:w-1/2 overflow-hidden bg-beige grid grid-cols-3 grid-row-3 gap-1 md:gap-3">
          <!-- <picture>
            <source srcset="/assets/theSquad.png" type="image/png">
            <source srcset="/assets/theSquad.webp" type="image/webp">
            <img class="w-full h-full object-contain" src="/assets/theSquad.png" alt="The Squad" />
          </picture> -->
          <img class="aspect-square object-cover" v-for="person in people" :src="person"
            :alt="person.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" />
          </div>
      </section>

      <!-- <span id="services" /> -->
      <span id="grant" />

      <!--- RMC --->

      <section class="bg-beige-lighter lg:flex-row relative flex flex-col gap-8 justify-center">
        <div class="lg:w-2/3 my-auto pt-10 md:pt-16 px-9 lg:pl-20 xl:pl-36 flex flex-col items-end">
          <h3 class="text-stone-500 text-sm md:text-lg font-semibold tracking-widest text-right">
            GRANTS &amp; SUBSIDIES
          </h3>
          <h2
            class="drama mb-1 md:-mt-3 md:mb-3 text-5xl md:text-8xl overflow-hidden font-medium text-right text-black">
            singapore&nbsp;<strong>SMEs</strong>
          </h2>
          <p class="pb-10 text-right text-black lg:max-w-[590px] md:text-xl 2xl:text-2xl !leading-snug">
            We are certified as a Registered Management Consultant (RMC) with IMC Singapore (Institute of Management
            Consultants). Under the EDG (Enterprise Development Grant) program, Singapore-based SMEs (Small &amp; Medium
            Enterprises) can apply for up to 50% of government funding towards their costs with us (or 70% for
            sustainability-related projects).
            <wbr>If you qualify for this grant and are interested in this opportunity you can visit&nbsp;<a
              class='text-blue hover:underline cursor-pointer font-extrabold z-10' target="_blank"
              rel="noopener noreferrer" aria-label="Open Enterprise Development Program Application"
              href="https://www.enterprisesg.gov.sg/financial-support/enterprise-development-grant">here.</a>
          </p>
        </div>
        <div
          class="w-full md:h-[500px] lg:max-h-none flex justify-center items-center lg:w-1/2 overflow-hidden bg-black">
          <picture>
            <source srcset="/assets/RMC_Stamp.jpg" type="image/jpeg">
            <source srcset="/assets/RMC_Stamp.webp" type="image/webp">
            <img class="w-full h-full object-cover" src="/assets/RMC_Stamp.jpg" alt="RMC Certified" />
          </picture>
        </div>
      </section>

      <!--- BRANDS --->

      <section
        class="bg-stone-300 flex flex-col justify-center relative min-h-[70vh] px-9 md:px-20 xl:px-36 py-10 md:py-20 lg:pt-16 gap-4 md:gap-10">
        <h3 class="text-blue drama text-5xl md:text-6xl lg:text-8xl font-semibold">
          brands <strong>we have<br>worked&nbsp;with</strong>
          <br />
        </h3>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-x-10 md:gap-y-16">
          <div v-for="brand in brands" class="flex justify-center items-center w-full h-full">
            <img class="object-contain w-16 md:w-40 h-32 md:py-8 md:px-5 p-1" :src="brand"
              :alt="brand.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" />
            <!-- <p class="flop text-2xl md:text-5xl text-active text-center">{{
              brand.match(/([^\/]+)(?=\.\w+$)/)![0].toString().split('.')[0] }}</p> -->
          </div>
        </div>
        <!-- <swiper class="w-full" :autoplay="{
          delay: 1000,
          disableOnInteraction: false,
        }" :loop="true" :simulateTouch="false" :modules="modules" :slides-per-view="3" :space-between="12"
          :breakpoints="{
            768: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 24
            }
          }">
          <swiper-slide class="py-10 flex flex-col justify-center items-start select-none" v-for="brand in brands">
            <img class="object-contain w-16 md:w-48 h-20 brightness-0" :src="brand"
              :alt="brand.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" />
          </swiper-slide>
        </swiper> -->
      </section>

      <!--- TESTIMONIALS --->

      <section class="bg-blue px-12 md:px-20 xl:px-36 flex flex-col justify-center relative min-h-[70vh]">
        <h3
          class="text-active drama md:pb-3 pt-8 md:pt-20 lg:pt-16 text-5xl md:text-6xl lg:text-8xl font-semibold text-center">
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
            <p class="md:leading-10 text-base md:text-2xl lg:text-center text-beige-lighter my-auto"
              v-html="`${items[Object.keys(items)[0]]}`" />
            <h2 class="text-active md:px-0 mt-7 font-medium text-base tracking-wider text-left lg:text-center"
              v-html="`${Object.keys(items)[0]}`" />
            <h2 class="text-stone-700 md:px-0 mt-2 font-medium text-base tracking-wider text-left lg:text-center">
              {{ testimonialsDate[i] }}</h2>
          </swiper-slide>
        </swiper>
      </section>
    </div>

    <!--- END --->

    <!-- <section
      class="flex flex-col items-center justify-center mx-20 lg:mx-auto my-20 md:my-32 lg:pt-64 lg:p-72 max-w-7xl bg-stone-300">
      <video class="mb-10 recolor" playsinline loop autoplay="true" muted>
        <source src="/assets/aboutus.mp4" type="video/mp4" />
      </video>
      <div class="flex gap-10">
        <a class="z-10" key="ig" href="https://instagram.com/comomaya" aria-label="Open Comomaya's Instagram Page"
          target="_blank" rel="noopener noreferrer">
          <p class="text-beige-lighter hover:text-active hover:font-bold">(INSTAGRAM)</p>
        </a>
        <a class="z-10" key="linkedin" href="https://www.linkedin.com/company/comomaya"
          aria-label="Open Comomaya's Linkedin Page" target="_blank" rel="noopener noreferrer">
          <p class="text-beige-lighter hover:text-active hover:font-bold">(LINKEDIN)</p>
        </a>
      </div>
    </section> -->
  </main>
</template>

<style lang="scss">
.swiper-button-next,
.swiper-button-prev {
  color: black;
}

// .swiper-button-next {
//   transform: translateX(-1em) scale(0.6);
// }

// .swiper-button-prev {
//   transform: translateX(1em) scale(0.6);
// }</style>

<style lang="scss" scoped>
.split span {
  opacity: 0;
  visibility: hidden;
  margin-right: 0.2em;
  display: inline-block;
  transform: translateY(400%);
  //line-height: 0.6;

  @media (min-width: 1024) {
   // line-height: 0.7;
  }
}

.drama {
  font-weight: 600;
  font-family: "Narziss";
}

.drama strong {
  font-weight: 800;
  font-family: "Barlow";
  letter-spacing: -0.015em;
}

.drama span {
  letter-spacing: -0.15em;
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