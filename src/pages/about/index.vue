<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from "swiper";
import 'swiper/scss'
// import "swiper/css/navigation";
import { onMounted, onBeforeUnmount, ref, type Ref } from 'vue';

const modules = [Autoplay]

useHead({
  title: 'COMOMAYA - About',
  meta: [
    {
      name: 'COMOMAYA',
      content: 'About',
    },
  ],
})

const services = {
  "strategy": [
    "CONSUMER RESEARCH",
    "COMPETITOR LANDSCAPE",
    "BRAND PILLARS",
    "BRAND POSITIONING",
    "BRAND VISION",
    "BRAND MISSION",
    "BRAND VALUES",
    "BRAND PERSONALITY",
    "TONE OF VOICE",
    "NAMING",
    "TAGLINE CREATION",
    "PORTFOLIO STRATEGY",
    "STRATEGY CONSULTING",
  ],
  "creative": [
    "LOGOS & BRANDMARKS",
    "DESIGN IDENTITY",
    "PACKAGING DESIGN 2D & 3D",
    "ILLUSTRATION",
    "STATIONERY",
    "BRAND GUIDES & PLAY BOOKS",
    "INVESTOR DECKS",
    "COLLATERALS",
    "MERCHANDISE",
    "BROCHURES",
    "DIGITAL LOGOS",
    "BRAND FILMS",
    "WEBSITE DESIGN",
    "SOCIAL MEDIA TEMPLATES",
    "DESIGN CONSULTING",
  ],
  "production": [
    "PHOTOGRAPHY",
    "ARTWORK FOR PRINT",
    "WEB DEVELOPMENT",
    "DATA ANALYTICS, SEM, SEO",
  ]
}

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

const width = ref(0)
const swiperDOM = ref(null) as Ref<null | typeof Swiper>

function resize() {
  width.value = window.innerWidth;
}

onMounted(() => {

  window.addEventListener('resize', resize)

  resize();

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
  setTimeout(() => {
    if (location.hash) {
      document.querySelector(location.hash) ? window.scrollTo({
        top: document.querySelector(location.hash)!.getBoundingClientRect().top - 50,
        behavior: "smooth"
      }) : null
    }
  }, 500);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <main class="relative bg-stone-300 mx-auto flex flex-col justify-center pt-10 md:pt-20">
    <section class="relative z-0 overflow-hidden">
      <div class="flex px-9 lg:px-20 xl:px-36 flex-col py-16 relative z-10">
        <h2 class="text-active font-bold text-xl md:text-3xl">comomaya</h2>
        <p class="italic text-stone-700 leading-tight text-base md:text-xl">
          <span class="font-semibold">noun</span>
          <br>
          como: (Spanish) as, like
          <br v-if="width <= 768" />
          <span v-else class="pl-7" />
          maya: (Sanskrit) energy,&nbsp;magic
        </p>
        <h1 class="split lowercase my-5 text-6xl md:text-9xl leading-none text-active font-extrabold lg:w-2/3 overflow-hidden relative">
          <span>simple</span><br><span>beautiful</span><br><span>purposeful</span><span
            class="drama text-blue font-semibold text-[3.5rem] md:text-[7.5rem]">design</span>
        </h1>
        <p class="text-black text-xl"><strong>COMOMAYA</strong> exists in order to make international standards of
          branding &amp; design more accessible to new and upcoming brands, business owners and start-ups alike. To
          provide the highest quality of work, by engaging some of the best international talent there is, but without the
          exhorbitant price tag that comes with hiring a top global agency. To empower business owners &amp; entrepreneurs
          with powerful brands that tell a story.<wbr> To express them through great design that makes heads turn.<wbr> To energise brands. And to add some&nbsp;magic.
        </p>
      </div>
    </section>
    <div>

      <!--- RIDHI --->

      <section
        class="relative flex px-9 lg:px-20 xl:px-36 gap-8 md:gap-16 py-16 flex-col-reverse justify-center md:min-h-[40vh] bg-beige-lighter md:flex-row-reverse overflow-visible">
        <div class="md:w-2/3 my-auto md:pt-16">
          <h3 class="text-black text-sm md:text-lg font-semibold tracking-widest text-left pl-1">
            FOUNDER &amp; CREATIVE&nbsp;HEAD
          </h3>
          <span class="relative md:mb-1 flex md:flex-row flex-col md:items-center">
            <h2 class="drama mb-1 text-6xl md:-ml-1 md:text-8xl text-left !leading-[0.75em] text-active">
              <strong>ridhi&nbsp;sain</strong>
            </h2>
            <picture>
              <source srcset="/assets/awards.webp" type="image/webp">
              <source srcset="/assets/awards.png" type="image/png">
              <img class="md:pl-5 md:max-h-16 max-w-[100%] max-h-8 md:mt-3 md:mb-0 mb-5 mix-blend-multiply"
                src="/assets/awards.png" alt="Awards">
            </picture>
          </span>
          <p class="text-base md:text-lg text-left text-black lg:max-w-[520px]">
            Ridhi Sain is an award-winning brand, identity &amp; packaging designer, and founder of
            <strong>COMOMAYA</strong> which she launched in March
            2022.<br class="mt-2 block" style="content: ''">With a career spanning almost 20 years in the UK, Singapore
            &amp; India, Ridhi has worked with international agencies
            such as Coley Porter Bell (part of the Ogilvy &amp; WPP Group), Elmwood, NiCE and WhyBD. She is also ex-Assoc
            Creative Director and ex-Design Director of Holmes &amp; Marchant, Cowan &amp; Pi Global where she has led and
            helped strategise, conceptualise and direct creative work on multiple global brands such as Unilever's Dove,
            Closeup &amp; Comfort as well as others such as Johnson &amp; Johnson, Nescafe, SKII, Kraft Heinz, Pernod
            Ricard, Kellogg's and many more.<br class="mt-2 block" style="content: ''">More recently, she has worked with
            smaller boutique
            clients ranging from luxury, to corporate and digital start ups, bringing her vast experience and immense
            passion to help
            them through their creative&nbsp;journey.<br class="mt-2 block" style="content: ''">You can check out some of
            her
            past work at
            <a class='text-blue hover:underline cursor-pointer font-bold z-10' target="_blank" rel="noopener noreferrer"
              aria-label="Open Ridhi's Past Work" href='https://www.ridhisain.com'>
              www.ridhisain.com
            </a>
          </p>
        </div>
        <div class="w-full min-h-[15rem] md:w-auto overflow-hidden ">
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
        class="relative flex gap-8 md:gap-16 px-9 lg:px-20 xl:px-36 flex-col-reverse justify-center md:min-h-[40vh] py-16 bg-stone-300 md:flex-row">
        <div class="md:w-2/3 my-auto">
          <h3 class="text-black text-sm md:text-lg font-semibold tracking-widest md:text-right">
            CLIENT LEAD
          </h3>
          <h2 class="drama mb-1 text-6xl md:text-8xl md:text-right !leading-[0.75em] text-active">
            <strong>sonali&nbsp;sani</strong>
          </h2>
          <p class="text-base md:text-lg md:text-right text-black">
            Sonali Sani has had over a decade of experience in Client Services. She has worked with big international
            agencies and smaller boutique ones, across Singapore, the UK and Hong Kong. Her client list includes SGX, Pan
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
        class="relative flex gap-8 md:gap-16 px-9 lg:px-20 xl:px-36 flex-col-reverse justify-center md:min-h-[40vh] py-16 bg-beige-lighter md:flex-row-reverse">
        <div class="md:w-2/3 my-auto">
          <h3 class="text-black text-sm md:text-lg font-semibold tracking-widest text-left">
            BUSINESS HEAD
          </h3>
          <h2 class="drama mb-1 md:-ml-1 text-6xl md:text-8xl text-left !leading-[0.75em] text-active">
            <strong>nishaa bhojwani</strong>
          </h2>
          <p class="text-base md:text-lg text-left text-black">
            Nishaa Bhojwani is a seasoned business development professional with over a decade of experience in media and
            technology. She has worked for companies such as Google and Mastercard and her past client list includes some
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
      <section class="flex justify-center px-9 lg:px-20 xl:px-36 bg-stone-300 flex-col">
        <h3 class="text-black pt-5 md:pt-16 text-sm md:text-lg font-semibold tracking-widest text-right">
          INDUSTRY&nbsp;TALENT
        </h3>
        <h2 class="drama -mt-3 text-5xl pb-5 md:pb-0 md:text-8xl md:mb-3 overflow-hidden text-right text-active font-medium">
          <strong>our people</strong>
        </h2>
        <h3 v-if="width >= 768"
          class="text-black md:text-lg text-right pb-5 leading-tight md:max-w-lg md:ml-auto">
          Headquartered in Singapore, we cater to both a local and a global clientele. We work in an organic way,
          collaborating
          with some of the best talent in the industry and across the&nbsp;globe.
        </h3>
      </section>

      <section class="flex flex-col justify-center md:min-h-[40vh] lg:flex-row">
        <div class="lg:w-2/3 p-0 m-0 bg-blue">
          <picture>
            <source srcset="/assets/globe.png" type="image/png">
            <source srcset="/assets/globe.webp" type="image/webp">
            <img class="object-contain min-w-full min-h-full h-auto py-3 md:p-5" src="/assets/globe.png" alt="Globe" />
          </picture>
        </div>
        <section v-if="width < 768" class="flex flex-col-reverse justify-center px-9 lg:px-20 xl:px-36">
          <h3 class="text-black text-base py-5 leading-tight">
            Headquartered in Singapore, we cater to both a local and a global clientele. We work in an organic way,
            collaborating
            with some of the best talent in the industry and across the&nbsp;globe.
          </h3>
        </section>
        <div class="w-full min-h-[15rem] lg:w-1/2 overflow-hidden bg-beige">
          <picture>
            <source srcset="/assets/theSquad.png" type="image/png">
            <source srcset="/assets/theSquad.webp" type="image/webp">
            <img class="w-full h-full object-contain" src="/assets/theSquad.png" alt="The Squad" />
          </picture>
        </div>
      </section>

      <!--- WHAT WE OFFER --->

      <section id="ourServices" class="flex px-9 lg:px-20 xl:px-36 justify-center flex-col">
        <h3 class="text-black pt-10 md:pt-16 text-sm md:text-lg font-semibold tracking-widest text-left">
          WHAT WE&nbsp;OFFER
        </h3>
        <h2
          class="drama md:ml-[-2px] -mt-3 mb-3 md:mb-0 text-5xl md:text-8xl overflow-hidden text-left text-active font-medium">
          <strong>our services</strong>
        </h2>
        <h3 v-if="width >= 768" class="text-black md:text-lg pb-10 md:max-w-lg">
          We have a vibrant portfolio of clients ranging from FMCG to
          B2B and from corporate to boutique &amp; luxury brands spread across various categories. We are
          multidisciplinary and
          provide holistic services for your brand woven together from day&nbsp;one.
        </h3>
      </section>

      <section class="bg-blue flex flex-col justify-center md:min-h-[40vh] lg:flex-row gap-8">
        <div class="lg:w-2/3 p-0 m-0 bg-beige mt-5 lg:my-auto flex justify-center lg:justify-start px-9 lg:pl-20 xl:pl-36 gap-3">
          <div v-for="(value, key) in services">
            <h4 class="font-bold md:text-3xl text-active mb-3">// {{ key }}</h4>
            <ul v-for="items in value" class="mb-1 font-medium text-xs md:text-base">/ {{ items }}</ul>
          </div>
          <!-- <picture>
            <source srcset="/assets/services.png" type="image/png">
            <source srcset="/assets/services.webp" type="image/webp">
            <img class="object-contain min-h-full h-auto" src="/assets/services.png" alt="list of services" />
          </picture> -->
        </div>
        <section v-if="width < 768" class="flex flex-col-reverse justify-center px-9 lg:px-20 xl:px-36">
          <h3 class="text-black text-base font-medium py-5">
            We have a vibrant portfolio of clients ranging from FMCG to B2B
            and from corporate to boutique &amp; luxury brands spread across various categories. We are multidisciplinary
            and
            provide holistic services for your brand woven together from day&nbsp;one.
          </h3>
        </section>
        <div class="w-full min-h-[15rem] lg:w-1/2 overflow-hidden bg-black">
          <picture>
            <source srcset="/assets/WhatWeOffer.jpg" type="image/jpeg">
            <source srcset="/assets/WhatWeOffer.webp" type="image/webp">
            <img class="w-full h-full object-cover" src="/assets/WhatWeOffer.jpg" alt="What we offer" />
          </picture>
        </div>
      </section>
      <span id="grant" />

      <!--- RMC --->

      <section class="bg-stone-300 lg:flex-row relative flex flex-col gap-8 justify-center md:min-h-[40vh]">
        <div class="lg:w-2/3 my-auto pt-10 md:pt-16 px-9 lg:pl-20 xl:pl-36">
          <h3 class="text-black text-sm md:text-lg font-semibold tracking-widest text-right">
            GRANTS &amp; SUBSIDIES
          </h3>
          <h2 class="drama mb-1 -mt-3 md:mb-3 text-5xl md:text-8xl overflow-hidden font-medium text-right text-active">
            <strong>grants<br>for&nbsp;SMEs</strong>
          </h2>
          <p class="pb-10 text-base md:text-lg text-right text-black">
            We are certified as a Registered Management Consultant (RMC)
            with IMC Singapore (Institute of Management Consultants).
            Under the EDG (Enterprise Development Grant) program, Singapore&#8209;based SMEs (Small &amp; Medium
            Enterprises) can apply for up
            to 80% of government funding towards their costs with us. If you qualify for this grant and are interested in
            this
            opportunity you can find out more&nbsp;<a class='text-blue hover:underline cursor-pointer font-bold z-10'
              target="_blank" rel="noopener noreferrer" aria-label="Open Enterprise Development Program Application"
              href="https://www.enterprisesg.gov.sg/financial-support/enterprise-development-grant">here.</a>
          </p>
        </div>
        <div class="w-full max-h-[30rem] lg:max-h-none min-h-[15rem] flex justify-center items-center lg:w-1/2 overflow-hidden bg-black">
          <picture>
            <source srcset="/assets/RMC_Stamp.jpg" type="image/jpeg">
            <source srcset="/assets/RMC_Stamp.webp" type="image/webp">
            <img class="w-full h-full object-cover" src="/assets/RMC_Stamp.jpg" alt="RMC Certified" />
          </picture>
        </div>
      </section>

      <!--- BRANDS --->

      <section class="bg-stone-300 px-12 md:px-24 xl:px-40 flex flex-col justify-center relative">
        <h3 class="text-active md:pb-3 pt-8 md:pt-20 lg:pt-16 text-4xl lg:text-8xl font-semibold text-center">
          <strong>brands we have worked&nbsp;with</strong>
          <br/>
        </h3>
        <a class="text-sm text-beige-normal text-center uppercase hover:text-active hover:font-bold" target="_blank" href="https://www.ridhisain.com">( www.ridhisain.com )</a>
        <!-- <button @click="swiperDOM ? swiperDOM.$el.swiper.slideNext() : null"
          class="absolute right-3 md:right-10 md:hover:scale-150 transition-transform">
          <img class="block w-7 h-7 md:w-10 md:h-10 object-contain" src="/assets/arrow-right.svg" alt="button next" />
        </button>
        <button @click="swiperDOM ? swiperDOM.$el.swiper.slidePrev() : null"
          class="absolute left-3 md:left-10 md:hover:scale-150 transition-transform">
          <img class="block w-7 h-7 md:w-10 md:h-10 object-contain rotate-180" src="/assets/arrow-right.svg" alt="button previous" />
        </button> -->
        <swiper class="w-full" :autoplay="{
          delay: 1000,
          disableOnInteraction: false,
        }" :loop="true" :simulateTouch="false" :modules="modules" slidesPerView="auto">
          <swiper-slide class="py-10 px-12 flex !w-min flex-col justify-center align-middle select-none"
            v-for="i in 15">
            <img class="object-contain h-12 min-w-[5rem]"  src="/assets/brands/dove.png" alt="Dove" />
          </swiper-slide>
        </swiper>
      </section>

      <!--- TESTIMONIALS --->

      <section class="bg-beige-lighter px-12 md:px-24 xl:px-40 flex flex-col justify-center relative">
        <h3 class="text-active md:pb-3 pt-8 md:pt-20 lg:pt-16 text-4xl lg:text-8xl font-semibold text-center">
          <strong>testimonials</strong>
        </h3>
        <button @click="swiperDOM ? swiperDOM.$el.swiper.slideNext(): null"
          class="absolute right-3 md:right-10 md:hover:scale-150 transition-transform">
          <img class="block w-7 h-7 md:w-10 md:h-10 object-contain" src="/assets/arrow-right.svg" alt="button next" />
        </button>
        <button @click="swiperDOM ? swiperDOM.$el.swiper.slidePrev() : null"
          class="absolute left-3 md:left-10 md:hover:scale-150 transition-transform">
          <img class="block w-7 h-7 md:w-10 md:h-10 object-contain rotate-180" src="/assets/arrow-right.svg" alt="button previous" />
        </button>
        <swiper class="w-full" :autoplay="{
          delay: 8000,
          disableOnInteraction: false,
        }" :loop="true" :autoHeight="true" :simulateTouch="false" :modules="modules" ref="swiperDOM">
          <swiper-slide class="h-full py-10 flex flex-col justify-center align-middle select-none"
            v-for="(items, i) in testimonials">
            <p class="md:leading-10 text-base md:text-2xl lg:text-center text-black my-auto"
              v-html="`${items[Object.keys(items)[0]]}`" />
            <h2 class="text-black md:px-0 mt-7 font-medium text-base tracking-wider text-left lg:text-center"
              v-html="`${Object.keys(items)[0]}`" />
            <h2 class="text-black md:px-0 mt-2 font-medium text-base tracking-wider text-left lg:text-center">
              {{ testimonialsDate[i] }}</h2>
          </swiper-slide>
        </swiper>
      </section>
    </div>

    <!--- END --->

    <section class="flex flex-col items-center justify-center p-20 md:p-32 lg:pt-64 lg:p-72 bg-stone-300">
      <video class="mb-10 recolor" playsinline loop autoplay="true" muted>
        <source src="/assets/aboutus.mp4" type="video/mp4" />
      </video>
      <!-- <h3 class="text-blue text-base md:text-xl font-semibold tracking-widest text-center my-16">FOLLOW US ON
        INSTAGRAM&nbsp;&amp;&nbsp;LINKEDIN</h3> -->
      <div class="flex gap-10">
        <a class="z-10" key="ig" href="https://instagram.com/comomaya" aria-label="Open Comomaya's Instagram Page"
          target="_blank" rel="noopener noreferrer">
          <!-- <font-awesome-icon :icon="['fab', 'square-instagram']" size="xl" class="mx-2 my-3 text-beige" /> -->
          <p class="text-beige-normal hover:text-active hover:font-bold">(INSTAGRAM)</p>
        </a>
        <a class="z-10" key="linkedin" href="https://www.linkedin.com/company/comomaya"
          aria-label="Open Comomaya's Linkedin Page" target="_blank" rel="noopener noreferrer">
          <p class="text-beige-normal hover:text-active hover:font-bold">(LINKEDIN)</p>
          <!-- <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" class="mx-2 my-3 text-beige" /> -->
        </a>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.split span {
  opacity: 0;
  visibility: hidden;
  margin-right: 0.2em;
  display: inline-block;
  transform: translateY(400%);
  line-height: 0.6;
}

.drama {
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

.swiper-button-next,
.swiper-button-prev {
  color: black;
}

// .swiper-button-next {
//   transform: translateX(-1em) scale(0.6);
// }

// .swiper-button-prev {
//   transform: translateX(1em) scale(0.6);
// }
</style>

<style lang="scss" scoped>.recolor {
  filter: saturate(114%) brightness(91%) contrast(115.3%);
}</style>