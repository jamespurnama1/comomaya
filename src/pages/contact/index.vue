<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { onMounted, ref, getCurrentInstance } from 'vue'
import { gsap } from 'gsap'
import { useRouter } from 'vue-router';
import axios, { AxiosResponse } from 'axios';

const router = useRouter();
const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
const phoneRegex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
const instance = getCurrentInstance();
const posthog = instance?.appContext.config.globalProperties.$posthog;

function handleSubmit() {
  incomplete.value = null
  if (emailRegex.test(email.value) && phoneRegex.test(phone.value) && name.value !== '' && message.value !== '') {
    //email ok
    loading.value = true
    error.value = null
    if (posthog) {
      posthog.identify(email.value, {
        name: name.value,
        phone: phone.value
      })
    }

    const requestOptions = { name: name.value, email: email.value, phone: phone.value, message: message.value }

    axios.post('/api/contact', requestOptions)
      .then((response: AxiosResponse) => {
        if (response.statusText === 'OK') {
          router.push('/thank-you')
        } else {
          throw new Error(`${response.status.toString()} error. Please try again later.`);
        }
      })
      .catch(response => error.value = response.message)
      .finally(() => loading.value = false)
  } else {
    //email not ok
    if (name.value === '') incomplete.value = 'name'
    if (!emailRegex.test(email.value)) incomplete.value = 'email'
    if (!phoneRegex.test(phone.value)) incomplete.value = 'phone'
    if (message.value === '') incomplete.value = 'message'
  }
}

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const error = ref(null as null | string);
const incomplete = ref(null as null | string);
const loading = ref(false);

function editMessage(e: InputEvent | Event) {
  if (!e.target) return
  message.value = (e.target as HTMLDivElement).innerText;
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
          <a class="z-10" target="_blank" rel="noopener noreferrer" href="https://wa.me/6594245994">
            <p class="text-blue hover:text-active font-semibold mb-5">+65 9424 5994</p>
          </a>
          <a class="z-10" href="mailto:ridhisain@comomaya.com">
            <p class="text-blue hover:text-active font-semibold mb-5">ridhisain@comomaya.com</p>
          </a>
        </div>
      </div>

      <form class="flex flex-col flex-wrap w-full md:w-2/3 content-start">

        <label class="text-beige-lighter text-lg md:text-xl font-semibold" for="name">NAME</label>
        <label v-if="incomplete === 'name'" class="text-red text-sm md:text-base" for="name">Please enter
          your&nbsp;name.</label>
        <input v-model="name"
          class="bg-stone-300 autofill:bg-stone-300 w-full text-black placeholder-stone-700 border-active text-lg md:text-xl border-b-4 mb-4 md:mb-7 focus:outline-none h-6 md:h-12"
          type="text" name="name">

        <label class="text-beige-lighter text-lg md:text-xl font-semibold" for="email">E-MAIL</label>
        <label v-if="incomplete === 'email'" class="text-red text-sm md:text-base" for="email">Please double check you
          e-mail&nbsp;address.</label>
        <input v-model="email"
          class="bg-stone-300 autofill:bg-stone-300 text-black placeholder-stone-700 border-active text-lg md:text-xl border-b-4 mb-4 md:mb-7 focus:outline-none h-6 md:h-12"
          type="email" name="email">

        <label class="text-beige-lighter text-lg md:text-xl font-semibold" for="phone">PHONE</label>
        <label v-if="incomplete === 'phone'" class="text-red text-sm md:text-base" for="phone">Please
          double check
          you
          phone&nbsp;number.</label>
        <input v-model="phone"
          class="bg-stone-300 autofill:bg-stone-300 text-black placeholder-stone-700 border-active text-lg md:text-xl border-b-4 mb-4 md:mb-7 focus:outline-none h-6 md:h-12"
          :class="[incomplete === 'phone' ? 'mb-1' : 'md:mb-7 mb-4']" type="phone" name="phone">

        <label class="text-beige-lighter text-lg md:text-xl font-semibold" for="message">MESSAGE</label>
        <label v-if="incomplete === 'message'" class="text-red text-sm md:text-base" for="message">Please type in
          your&nbsp;message.</label>
        <div contenteditable id="message" @input="editMessage"
          class="bg-stone-300 autofill:bg-stone-300 text-black placeholder-stone-700 border-active text-lg md:text-xl border-b-4 mb-4 md:mb-7 resize-none w-full min-h-[24px] md:min-h-[36px] focus:outline-none md:py-2"
          name="message"></div>
        <label v-if="error" class="text-red text-sm md:text-base">{{ error }}</label>
        <button v-if="!loading"
          class="z-0 relative bg-stone-300 text-blue outline-4 py-10 px-1 mr-auto my-12 -ml-2 h-12 flex items-center hover:text-active text-4xl md:text-7xl font-extrabold"
          type="submit" @click.prevent="handleSubmit()">submit</button>
        <img v-else class="h-12 w-12 my-12 object-contain spin" src="@/assets/loader.svg" alt="loading" />
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 60px #A0AAC4 inset !important;
  background-color: #A0AAC4 !important;
  background-clip: content-box !important;
}

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