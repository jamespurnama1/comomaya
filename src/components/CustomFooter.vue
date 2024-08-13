<template>
  <footer
    class="flex flex-col items-start justify-start py-12 md:py-24 px-9 lg:px-20 2xl:px-36 lg:mx-auto w-screen gap-12 md:gap-24 z-20 relative"
    :class="[$route.name === 'work-slug' ? 'bg-stone-300 text-active' : 'bg-beige-normal text-black']">
    <ul class="flex gap-8 md:gap-24 md:flex-row flex-col">
      <li class="group"><router-link to="/work">
          <div>
            <p class="text-lg text-stone-500 font-semibold tracking-widest">
              WORK</p>
            <p class="font-extrabold text-3xl tracking-tight"
              :class="[$route.name === 'work-slug' ? 'group-hover:text-blue' : 'group-hover:text-active']">
              See it here.</p>
          </div>
        </router-link></li>
      <li class="group"><router-link to="/about">
          <div>
            <p class="text-lg text-stone-500 font-semibold tracking-widest">
              ABOUT</p>
            <p class="font-extrabold text-3xl tracking-tight -ml-1"
              :class="[$route.name === 'work-slug' ? 'group-hover:text-blue' : 'group-hover:text-active']">
              Who we are.</p>
          </div>
        </router-link></li>
      <li class="group"><router-link to="/services">
          <div>
            <p class="text-lg text-stone-500 font-semibold tracking-widest">
              SERVICES</p>
            <p class="font-extrabold text-3xl tracking-tight -ml-1"
              :class="[$route.name === 'work-slug' ? 'group-hover:text-blue' : 'group-hover:text-active']">
              What we do.</p>
          </div>
        </router-link></li>
      <li class="group"><router-link to="/contact">
          <div>
            <p class="text-lg text-stone-500 font-semibold tracking-widest">
              CONTACT</p>
            <p class="font-extrabold text-3xl tracking-tight"
              :class="[$route.name === 'work-slug' ? 'group-hover:text-blue' : 'group-hover:text-active']">
              Let's chat.</p>
          </div>
        </router-link></li>
    </ul>
    <ul class="flex gap-3 md:gap-10 font-extrabold tracking-tight text-xl 2xl:text-2xl">
      <li>Singapore.</li>
      <li>India.</li>
    </ul>
    <div class="flex justify-between w-full md:flex-row flex-col-reverse gap-5">
      <p class="text-stone-500 2xl:text-base text-sm">
        © 2024 COMOMAYA. All rights reserved.
      </p>
      <div class="flex gap-1 md:gap-5 md:text-base text-sm">
        <a class="z-10 relative text-stone-500 hover:text-active hover:scale-150 transition-all" key="ig"
          href="https://instagram.com/comomaya" aria-label="Open Comomaya's Instagram Page" target="_blank"
          rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'square-instagram']" size="xl"
            class="mx-2 my-3 transition-all duration-200" />
        </a>
        <a class="z-10 relative text-stone-500 hover:text-active hover:scale-150 transition-all" key="linkedin"
          href="https://www.linkedin.com/company/comomaya" aria-label="Open Comomaya's Linkedin Page" target="_blank"
          rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" class="mx-2 my-3 transition-all duration-200" />
        </a>
        <a class="z-10 relative text-stone-500 hover:text-active hover:scale-150 transition-all" key="ig"
          href="https://wa.me/6594245994" aria-label="Send a WhatsApp message to COMOMAYA" target="_blank"
          rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'square-whatsapp']" size="xl"
            class="mx-2 my-3 transition-all duration-200" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.device-ios,
.device-android {
  .recolor {
    filter: saturate(89%) brightness(97%) contrast(115.3%);
  }
}
</style>

<style lang="scss" scoped>
.recolor {
  filter: saturate(114%) brightness(91%) contrast(115.3%);
}
</style>