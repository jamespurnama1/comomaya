<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useStore } from '../../stores';
import { useSchemaOrg } from '@unhead/schema-org';

const store = useStore()

const people = Object.values(import.meta.glob('@/assets/people/*.{jpg,png,jpeg,svg,webp}', { as: 'url', eager: true }));

useHead({
  title: 'About - COMOMAYA',
})

useSchemaOrg([
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "COMOMAYA",
      "url": "https://www.comomaya.com",
      "logo": "https://www.comomaya.com/cropped-Comomaya_Symbol_Black_HD-270x270.png",
      "description": "A creative boutique agency building powerful brands",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "General Inquiry",
        "email": "ridhisain@comomaya.com",
        "telephone": "+65-9424-5994",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.instagram.com/comomaya",
        "https://www.linkedin.com/company/comomaya"
      ],
      "founder": {
        "@type": "Person",
        "name": "Ridhi Sain",
        "jobTitle": "Founder & Creative",
        "url": "https://www.comomaya.com/about#ridhi"
      },
      "foundingDate": "2022-01-01",
      "about": "Headquartered in Singapore, and with an equal footing in India, we cater to both a local and a global clientele that includes Dubai, USA, UK, Australia and more. We work in an organic way, collaborating with some of the best talent in the industry and across the globe."
    }
  }
])
</script>

<template>
  <main class="relative bg-stone-300 mx-auto flex flex-col justify-center overflow-hidden items-center">
    <picture class="w-full">
      <source srcset="/assets/tzo.avif" type="image/avif">
      <source srcset="/assets/tzo.webp" type="image/webp">
      <source srcset="/assets/tzo.jpg" type="image/jpeg">
      <img src="/assets/tzo.jpg" alt="Tzo Packaging Design" class="w-full h-72 md:h-[36rem] object-cover" />
    </picture>
    <div class="w-full">
      <h1 class="hidden">About</h1>

      <!--- RIDHI --->

      <section class="bg-beige-lighter overflow-visible w-full" id="ridhi">
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
              <source srcset="/assets/Ridhi.webp" type="image/webp">
              <source srcset="/assets/Ridhi.jpg" type="image/jpeg">
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
              <source srcset="/assets/globe.webp" type="image/webp">
              <source srcset="/assets/globe.png" type="image/png">
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
              :alt="person.match(/([^\/]+)(?=\.\w+$)/)![0].toString()" :key="person" />
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
      <Testimonials />

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