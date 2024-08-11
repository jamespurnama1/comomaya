<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { onMounted, ref, getCurrentInstance } from 'vue'
import { gsap } from 'gsap'

const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
const instance = getCurrentInstance();
const posthog = instance?.appContext.config.globalProperties.$posthog;

function handleSubmit() {
  if (emailRegex.test(email.value)) {
    //email ok
    loading.value = true
    error.value = null
    email.value = ''
    if (posthog) {
      posthog.identify(email.value, {
        name: name.value
      })
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value })
    };
    fetch('/api/contact', requestOptions)
      .then(response => {
        if (response.ok) {
        // dialog.value ? dialog.value.show() : null;
        success.value = true;
        } else {
          throw new Error(`${response.status.toString()} error`);
        }
      })
      .catch(response => error.value = response.message)
      .finally(() => loading.value = false)
  } else {
    error.value = 'email'
  }
}

function closeModal() {
  success.value = false
  // dialog.value ? dialog.value.close() : null;
  name.value = ''
  message.value = ''
  email.value = ''
}

// const dialog = ref();
const name = ref('');
const email = ref('');
const message = ref('');
const error = ref(null as null | string);
const success = ref(false);
const loading = ref(false);

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

useHead({
  title: 'COMOMAYA - Contact Us',
  meta: [
    {
      name: 'COMOMAYA',
      content: 'Contact Us',
    },
  ],
})

</script>

<template>
  <transition name="fade">
    <div @click="closeModal()" @keydown.esc="closeModal()" @keydown.enter="closeModal()" v-if="success"
      class="fixed z-30 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div class="p-12 bg-beige-normal">
        <div class="flex w-full h-full flex-col gap-12 items-center justify-center ">
          <p class="text-active text-4xl md:text-3xl lg:text-6xl font-extrabold text-center">Thank you {{ name
            }}!<br>We'll
            reply you soon!
          </p>
          <button @click="closeModal()"
            class="bg-active hover:bg-blue duration-200 transition-all p-3 font-bold uppercase hover:text-active">OKAY</button>
        </div>
      </div>
    </div>
  </transition>
  <main class="bg-stone-300">
    <div class="max-w-[1920px] mx-auto px-9 lg:px-20 xl:px-36 flex flex-col justify-center pt-24 md:pt-20">
      <div class="min-h-[50vh] md:min-h-[75vh] justify-center flex flex-col">
        <h1 class="text-white text-lg md:text-xl font-semibold tracking-widest md:mb-3">CONTACT US</h1>
        <h2
          class="split max-w-4xl text-active text-5xl md:!leading-[7rem] md:text-4xl lg:text-7xl font-extrabold overflow-hidden">
          <span>let's</span><span>start</span>
          <span>a</span><span>conversation...</span>
        </h2>
        <div class="mt-5 text-2xl md:text-4xl flex flex-col">
          <!-- <p class="text-black font-semibold tracking-widest mb-3">CALL</p> -->
          <!-- <a class="z-10" href="tel:+6594245994">
            <p class="text-active font-semibold mb-5">+65 9424 5994</p>
          </a> -->
          <!-- <p class="text-black font-semibold tracking-widest mb-3">WHATSAPP</p> -->
          <a class="z-10" target="_blank" rel="noopener noreferrer" href="https://wa.me/6594245994">
            <p class="text-blue hover:text-active font-semibold mb-5">+65 9424 5994</p>
          </a>
          <!-- <p class="text-black font-semibold tracking-widest mb-3">WRITE TO US</p> -->
          <a class="z-10" href="mailto:ridhisain@comomaya.com">
            <p class="text-blue hover:text-active font-semibold mb-5">ridhisain@comomaya.com</p>
          </a>
        </div>
      </div>

      <form class="flex flex-col flex-wrap w-full md:w-2/3 content-start">

        <label class="text-beige-lighter text-lg md:text-xl font-semibold" for="name">NAME</label>
        <input v-model="name"
          class="bg-stone-300 autofill:bg-stone-300 w-full text-black placeholder-stone-700 border-active text-lg md:text-xl border-b-4 mb-4 md:mb-7 focus:outline-none h-6 md:h-12"
          type="text" name="name">

        <label class="text-beige-lighter text-lg md:text-xl font-semibold" for="email">E-MAIL</label>
        <label v-if="error" class="text-red text-sm md:text-base" for="email">Please double check you e-mail
          address.</label>
        <input v-model="email"
          class="bg-stone-300 autofill:bg-stone-300 text-black placeholder-stone-700 border-active text-lg md:text-xl border-b-4 mb-4 md:mb-7 focus:outline-none h-6 md:h-12"
          type="email" name="email">
        <label class="text-beige-lighter text-lg md:text-xl font-semibold" for="message">MESSAGE</label>
        <textarea contenteditable id="message" v-model="message"
          class="bg-stone-300 autofill:bg-stone-300 text-black placeholder-stone-700 border-active text-lg md:text-xl border-b-4 mb-4 md:mb-7 resize-none w-full min-h-[24px] md:min-h-[36px] focus:outline-none py-2"
          name="message"></textarea>
        <label v-if="error !== 'email'" class="text-red text-sm md:text-base">{{ error }}</label>
        <button v-if="!loading"
          class="z-0 relative bg-stone-300 text-blue outline-4 py-10 px-1 mr-auto my-12 -ml-2 h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold"
          type="submit" @click.prevent="handleSubmit()">submit</button>
        <img v-else class="h-12 w-12 my-12 object-contain spin" src="@/assets/loader.svg" alt="loading" />
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.spin {
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.split span {
  opacity: 0;
  visibility: hidden;
  margin-right: 0.2em;
  display: inline-block;
  transform: translateY(400%);
  line-height: 0.5;
}
</style>