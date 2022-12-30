<script setup lang="ts">
  import { useHead } from '@vueuse/head'
  import { gsap } from 'gsap';
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Navigation } from "swiper";
  import 'swiper/scss'
  import "swiper/css/navigation";
  import { onMounted, onBeforeUnmount, ref } from 'vue';

  const modules = [Autoplay, Navigation]

  useHead({
    title: 'COMOMAYA - About',
    meta: [
      {
        name: 'COMOMAYA',
        content: 'About',
      },
    ],
  })

let tl: GSAPTimeline

const testimonials: {[key: string]: string}[] = [
  {
    "TANUSHREE SETH | Chief Executive Officer | Mirror Mirror": "&quot;Ridhi's deep experience in branding, design, and strategy coupled with her consulting experience on top beauty and personal care brands globally has given her a distinctive ability to provide strategies that leverage first - principles thinking and propose solutions that are uniquely defined for the brand under&nbsp;study.&quot;",
  },
  {
    "WILLIAM WATSON | Vice President | Everstone Group": "&quot;Ridhi Sain of COMOMAYA was instrumental in driving the successful delivery and launch of Culinary Brands. As a professional consultant, she worked tirelessly to meet and exceed our expectations, not only in terms of the quality of brand strategy &amp; design outputs, but also in terms of timely&nbsp;delivery.&quot;",
  },
  {
    "TANUSHREE SETH | Chief Executive Officer | Mirror Mirror": "&quot;Not only did she exhibit a strong creative, design-led skillset, but Ridhi also demonstrated the ability to build confidence and trust as a true consulting partner with every single member of the Mirror&nbsp;Mirror&nbsp;team.&quot;",
  },
  {
    "ROSHINI BAKSHI | Head of Impact | Managing Director | Private Equity | Everstone Group": "&quot;Ridhi &amp; COMOMAYA invested a lot of time in working on the brand strategy, vision, mission and proposition. Very good execution of the brand strategy in terms of identity and design elements. Differentiated and fresh approach. A pleasure working with COMOMAYA and we look forward to working with Ridhi Sain on our next project&nbsp;together.&quot;"
  },
  {
    "KRISHNAN NARAYAN | Founder &amp; Chief Technologist | Netracity LLC": "&quot;I worked with Ridhi Sain in 2021 to help me with the market positioning, naming, design and brand strategy for my company, Netracity LLC based in Texas, USA. Ridhi &amp; COMOMAYA did a great job on the company mission &amp; vision and created the brand strategy &amp; logo to accurately communicate the company's strategy to my clients. Her interactions with me &amp; my team were very tidy and professional. I highly recommend Ridhi Sain &amp; COMOMAYA.&quot;"
  }
]

const testimonialsDate = [
  "October 2022",
  "November 2022",
  "October 2022",
  "November 2022",
  "December 2021"
]

const width = ref(0)

function resize() {
  width.value = window.innerWidth;
}

onMounted(() => {

  window.addEventListener('resize', resize)

  resize();

  const split: null | NodeListOf<HTMLSpanElement> = document.querySelectorAll('.split span');
    if (split) {
      const tl = gsap.timeline();
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
      document.querySelector(location.hash) ? document.querySelector(location.hash)!.scrollIntoView() : null
    }
  }, 500);
});

	onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
	})
</script>

<template>
  <main class="relative bg-black mx-auto flex flex-col justify-center pt-10 md:pt-20">
    <section class="flex flex-col justify-center min-h-screen py-10 md:mx-40">
      <h2 class="text-beige mx-5 md:mx-0 font-semibold tracking-widest mb-5">HELLO</h2>
      <h1 class="split leading-10 mb-5 mx-5 md:mx-0 text-active text-4xl md:text-8xl font-semibold overflow-hidden">
        <span>We</span><span>are</span><strong><span>a</span><span>creative</span><span>boutique</span><span>agency</span></strong><span>and</span><span>we</span><strong><span>build</span><span>powerful</span><span>brands</span></strong></h1>
      <p class="text-white text-xl mx-5 md:mx-0"><strong>COMOMAYA</strong> exists in order to make international standards of branding & design more accessible to new and upcoming
      brands, business owners and start-ups alike. To provide the highest quality of work, by engaging some of the best
      international talent there is, but without the exhorbitant price tag that comes with hiring a top global agency. We are here to empower new business owners &amp; entrepreneurs with great design and powerful brands that tell a&nbsp;story…</p>
    </section>
    <div class="bg-white">

      <!--- RIDHI --->

      <section id="ourPeople" class="relative flex flex-col-reverse justify-center md:min-h-[40vh] my-12 lg:my-24 bg-beige md:flex-row-reverse">
        <div class="md:w-2/3 my-auto px-5 md:px-16 md:pr-12 lg:pr-52">
          <span class="relative pt-16 md:mb-1 flex items-center">
            <h3 class="text-active text-2xl font-semibold tracking-widest text-left">
              RIDHI&nbsp;SAIN
            </h3>
              <img class="md:ml-5 md:max-h-12 max-h-6 mx-5" src="/assets/awards.jpg" alt="Awards" />
          </span>
          <h2 class="drama mb-1 text-4xl md:text-7xl overflow-hidden text-left text-black">
            <strong>Owner</strong> &amp; Director
          </h2>
          <p class="pb-10 text-lg text-left text-black">
            Ridhi Sain is an award-winning brand, identity &amp; packaging designer, and founder of <strong>COMOMAYA</strong> which she launched in March 2022. With a
            career spanning almost 20 years in the UK, Singapore &amp; India, Ridhi is ex-Assoc Creative Director and Design Director of
            international agencies such as Coley Porter Bell (WPP Group), Pi Global, Holmes &amp; Marchant and Cowan and has led and
            helped strategise, conceptualise &amp; direct creative work on many global brands. More recently, she has worked with
            smaller boutique clients ranging from luxury to corporate and digital start ups, bringing her vast experience and
            immense passion to help them through their creative journey.<br><br>You can check out some of her past work at 
            <a class='text-active cursor-pointer font-bold z-10' target="_blank" rel="noopener noreferrer" href='https://www.ridhisain.com'>
              www.ridhisain.com
            </a>
          </p>
        </div>
        <div class="w-full min-h-[15rem] md:w-1/2 overflow-hidden bg-beige">
          <img class="w-full h-full object-contain"
            srcset="/assets/Ridhi.jpg 2x, /assets/Ridhi.jpg 4x"
            sizes="(max-width: 768px) 2x, 4x"
            src="/assets/Ridhi.jpg" alt="Ridhi Sain" />
        </div>
      </section>

      <!--- THE PEOPLE --->
      <section class="flex justify-center mt-12 lg:mt-24 bg-black flex-col">
        <h3 class="text-active pt-10 md:pt-16 px-12 md:mx-16 text-lg md:text-2xl font-semibold tracking-widest text-left">
          THE COMOMAYA&nbsp;SQUAD
        </h3>
        <h2 class="drama md:pt-3 px-12 md:mx-16 pb-5 text-5xl md:text-7xl overflow-hidden text-left text-beige font-medium">
          <strong>Our</strong> people
        </h2>
        <h3 v-if="width > 768" class="text-beige font-medium text-5xl pb-5 px-12 mx-16 leading-tight">
          Headquartered in Singapore, we cater to both a local and a global clientele. We work in an organic way, collaborating
          with some of the best talent in the industry and across the&nbsp;globe.
        </h3>
      </section>

      <section class="flex flex-col justify-center md:min-h-[40vh] my-12 mt-0 lg:mb-24 bg-beige md:flex-row">
        <div class="md:w-2/3 p-0 m-0">
          <img class="object-cover min-w-full min-h-full h-auto" src="/assets/globe.jpg" alt="globe" />
        </div>
        <section v-if="width <= 768" class="flex flex-col-reverse justify-center bg-black md:flex-row">
          <h3 class="text-beige text-2xl font-medium py-5 mx-16 leading-tight">
            Headquartered in Singapore, we cater to both a local and a global clientele. We work in an organic way, collaborating
            with some of the best talent in the industry and across the&nbsp;globe.
          </h3>
        </section>
        <div class="w-full min-h-[15rem] md:w-1/2 overflow-hidden bg-black">
          <img class="w-full h-full object-contain" src="/assets/theSquad.jpg" alt="The Squad" />
        </div>
      </section>

      <!--- WHAT WE OFFER --->

      <section id="ourServices" class="flex justify-center mt-12 lg:mt-24 bg-beige flex-col">
        <h3 class="text-active pt-10 md:pt-16 px-12 md:mx-16 text-lg md:text-2xl font-semibold tracking-widest text-left">
          WHAT WE&nbsp;OFFER
        </h3>
        <h2 class="drama md:pt-3 px-12 md:mx-16 pb-5 text-5xl md:text-7xl overflow-hidden text-left text-black font-medium">
          <strong>Our</strong> services
        </h2>
        <h3 v-if="width > 768" class="text-black font-medium text-3xl pb-10 md:px-12 mx-16">
            We have a vibrant portfolio of clients ranging from FMCG to
            B2B and from corporate to boutique &amp; luxury brands spread across various categories. We are multidisciplinary and
            provide holistic services for your brand woven together from day&nbsp;one.
        </h3>
      </section>
      
      <section class="flex flex-col justify-center md:min-h-[40vh] my-12 mt-0 lg:mb-24 bg-beige md:flex-row">
        <div class="md:w-2/3 p-0 m-0 bg-black">
          <img class="object-contain min-w-full min-h-full h-auto" src="/assets/services.jpg" alt="list of services" />
        </div>
        <section v-if="width <= 768" class="flex flex-col-reverse justify-center bg-beige md:flex-row">
          <h3 class="text-black text-2xl font-medium py-5 mx-10">
            We have a vibrant portfolio of clients ranging from FMCG to B2B
            and from corporate to boutique &amp; luxury brands spread across various categories. We are multidisciplinary and
            provide holistic services for your brand woven together from day&nbsp;one.
          </h3>
        </section>
        <div class="w-full min-h-[15rem] md:w-1/2 overflow-hidden bg-black">
          <img class="w-full h-full object-contain" src="/assets/WhatWeOffer.jpg" alt="What we offer" />
        </div>
      </section>
      
      <!-- <section id="ourServices" class="bg-beige md:flex-row-reverse relative flex flex-col-reverse justify-center md:min-h-[65vh] my-12 md:my-24">
        <div class="md:w-2/3 my-auto px-5 md:px-16 md:pr-12 lg:pr-52">
          <h3 class="text-active text-2xl font-semibold tracking-widest text-left">
            OUR&nbsp;SERVICES
          </h3>
          <h2 class="drama my-3 mb-1 md:mb-3 text-4xl md:text-7xl overflow-hidden text-left text-black">
            <strong>What</strong> we offer
          </h2>
          <p class="text-lg text-left text-black">
            We build global brands and boutique &amp; startup brands. We have a vibrant portfolio of clients ranging from FMCG to B2B
            and from corporate to boutique &amp; luxury brands spread across various categories. We are multidisciplinary and provide
            holistic services for your brand woven together from day&nbsp;one.
          </p>
        </div>
        <div class="w-full min-h-[15rem] md:w-1/2 overflow-hidden bg-black">
          <img class="w-full h-full object-cover" src="/assets/WhatWeOffer.jpg" alt="What we offer" />
        </div>
      </section> -->

      <!--- RMC --->

      <section id="grant" class="bg-black md:flex-row relative flex flex-col justify-center md:min-h-[40vh] my-12 lg:my-24">
        <div class="md:w-2/3 my-auto pt-10 md:pt-16 px-5 lg:px-16 lg:pl-52">
          <h3 class="text-active text-lg md:text-2xl font-semibold tracking-widest text-right">
            GRANTS &amp; SUBSIDIES
          </h3>
          <h2 class="drama mb-1 md:mb-3 text-5xl md:text-7xl overflow-hidden text-right text-beige">
            <strong>We are RMC</strong><br>certified
          </h2>
          <p class="pb-10 text-lg text-right text-beige">
            Under the EDG (Enterprise Development Grant) program, Singapore-based SMEs (Small & Medium Enterprises) can apply for up
            to 80% of government funding towards their costs with us. We are certified as a Registered Management Consultant (*RMC)
            with IMC Singapore (Institute of Management Consultants). If you qualify for this grant and are interested in this
            opportunity you can find out more 
            <a class='text-active cursor-pointer font-bold z-10' target="_blank" rel="noopener noreferrer" href="https://www.enterprisesg.gov.sg/financial-assistance/grants/for-local-companies/enterprise-development-grant/apply/pre-application">here.</a>
          </p>
        </div>
        <div class="w-full min-h-[15rem] md:w-1/2 overflow-hidden bg-black">
          <img class="w-full h-full object-cover" src="/assets/RMC_Stamp.jpg" alt="RMC Certified" />
        </div>
      </section>

      <!--- TESTIMONIALS --->

      <section id="testimonials" class="bg-black flex flex-col justify-center mt-12 lg:mt-24">
        <h3 class="text-active tracking-[1em] pb-16 pt-32 text-lg md:text-2xl font-semibold text-center">
          TESTIMONIALS
        </h3>
      </section>
      <swiper
      class="min-h-[40vh] bg-black"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :loop="true"
      :navigation="true"
      :modules="modules">
      <swiper-slide class="h-full py-10 flex flex-col justify-center align-middle" v-for="(items, i) in testimonials">
        <h3 class="md:leading-10 text-xl md:text-3xl md:text-center font-medium text-beige px-16 md:px-20 my-auto" v-html="`${items[Object.keys(items)[0]]}`" />
        <h2 class="text-active md:px-0 px-16 mt-7 font-medium text-lg md:text-2xl tracking-wider text-left md:text-center" v-html="`${Object.keys(items)[0]}`" />
        <h2 class="text-active md:px-0 px-16 mt-2 font-medium text-base md:text-xl tracking-wider text-left md:text-center">{{ testimonialsDate[i] }}</h2>
      </swiper-slide>
    </swiper>
  </div>

    <!--- END --->

    <section class="flex flex-col items-center justify-center p-20 md:pt-64 md:p-72 bg-black">
    <video class="mb-10" loop autoplay muted src="/assets/aboutus.mp4" />
    <h3 class="text-beige text-base md:text-xl font-semibold tracking-widest text-center my-16">FOLLOW US ON INSTAGRAM&nbsp;&amp;&nbsp;LINKEDIN</h3>
    <a class="z-10" key="ig" href="https://instagram.com/comomaya" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'square-instagram']" size="xl" class="mx-2 my-3 text-active" />
    </a>
    <a class="z-10" key="linkedin" href="https://linkedin.com/comomaya" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" class="mx-2 my-3 text-active" />
    </a>
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
    font-family: "Barlow";
    font-weight: 700;
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
  .swiper-button-next, .swiper-button-prev {
    color: white;
  }
  .swiper-button-next {
      transform: translateX(-1em) scale(0.6);
  }
  .swiper-button-prev {
      transform: translateX(1em) scale(0.6);
  }
</style>