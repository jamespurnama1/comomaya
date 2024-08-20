<template>
  <div
    class="fixed top-1/2 -translate-y-1/2 right-0 z-40 p-5 md:p-12 bg-beige-lighter flex items-center justify-center gap-3 md:gap-10 flex-col max-w-[80%] md:max-w-full drop-shadow-2xl bg-opacity-85 scale-75 origin-right">
    <p class="text-black text-2xl md:text-3xl font-extrabold md:text-center text-balance pt-3 pr-5">
      Let's connect
      over&nbsp;coffee...
    </p>
    <form class="flex flex-col flex-wrap w-full content-start items-center justify-center">
      <input v-model="name"
        class="bg-white autofill:bg-white w-full text-black placeholder-stone-700 md:text-xl focus:outline-none h-6 md:h-12 placeholder:text-blue placeholder:font-semibold px-2 py-4"
        :class="[incomplete === 'name' ? 'mb-1' : 'md:mb-7 mb-4']" type="text" name="name" placeholder="Name">
      <label v-if="incomplete === 'name'" class="text-red mb-4 md:mb-7 text-sm md:text-base" for="name">Please enter
        your&nbsp;name.</label>

      <input v-model="email"
        class="bg-white autofill:bg-white w-full text-black placeholder-stone-700 md:text-xl focus:outline-none h-6 md:h-12 placeholder:text-blue placeholder:font-semibold px-2 py-4"
        :class="[incomplete === 'email' ? 'mb-1' : 'md:mb-7 mb-4']" placeholder="Email" type="email" name="email">
      <label v-if="incomplete === 'email'" class="text-red mb-4 md:mb-7 text-sm md:text-base" for="email">Please
        double check
        you
        e-mail&nbsp;address.</label>

      <input v-model="phone"
        class="bg-white autofill:bg-white w-full text-black placeholder-stone-700 md:text-xl focus:outline-none h-6 md:h-12 placeholder:text-blue placeholder:font-semibold px-2 py-4"
        :class="[incomplete === 'phone' ? 'mb-1' : 'md:mb-7 mb-4']" placeholder="Phone" type="phone" name="phone">
      <label v-if="incomplete === 'phone'" class="text-red mb-4 md:mb-7 text-sm md:text-base" for="phone">Please
        double check
        you
        phone&nbsp;number.</label>

      <div contenteditable role="textbox" spellcheck="true" id="message" @input="editMessage"
        @focus="(e) => { if (message === 'Message') (e.target as HTMLDivElement).textContent = ''; message = '' }"
        class="bg-white autofill:bg-white placeholder-stone-700 md:text-xl resize-none w-full min-h-[24px] md:min-h-[36px] focus:outline-none px-2 py-1 md:py-3"
        :class="[message === 'Message' ? 'text-blue font-semibold' : 'text-black', incomplete === 'message' ? 'mb-1' : 'md:mb-7 mb-4']" />
      <label v-if="incomplete === 'message'" class="text-red mb-1 text-sm md:text-base" for="message">Please
        type in
        your&nbsp;message.</label>
      <label v-if="error" class="text-red mb-1 text-sm md:text-base">{{ error }}</label>

      <button v-if="!loading"
        class="hover:bg-active duration-200 transition-all z-0 relative bg-blue outline-4 py-2 md:py-4 px-1 my-2 md:my-8 mb-0 md:mb-8 flex items-center text-active hover:text-blue text-2xl md:text-4xl font-extrabold text-center w-3/4 justify-center"
        type="submit" @click.prevent="handleSubmit()">submit</button>
      <img v-else class="h-12 w-12 my-12 object-contain spin" src="@/assets/loader.svg" alt="loading" />
    </form>
    <button class="absolute top-5 right-5 my-3 hover:scale-125 hover:text-active transition-all duration-200">
      <font-awesome-icon @click="closeModal()" :icon="['fas', 'xmark']" size="xl" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios, { AxiosResponse } from 'axios';

const router = useRouter();
const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
const phoneRegex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
const instance = getCurrentInstance();
const posthog = instance?.appContext.config.globalProperties.$posthog;

const emit = defineEmits(['close', 'mount'])

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('Message');
const error = ref(null as null | string);
const incomplete = ref(null as null | string);
const loading = ref(false);

function handleSubmit() {
  incomplete.value = null
  if (emailRegex.test(email.value) && phoneRegex.test(phone.value) && name.value !== '' && message.value !== '' && message.value !== 'Message') {
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
        if (response.status === 200) {
          closeModal()
          router.push('/thank-you')
        } else {
          throw new Error(`${response.status.toString()} error. Please try again later.`);
        }
      })
      .catch(response => error.value = response.message)
      .finally(() => loading.value = false)
  } else {
    //validation not ok
    if (name.value === '') incomplete.value = 'name'
    if (!emailRegex.test(email.value)) incomplete.value = 'email'
    if (!phoneRegex.test(phone.value)) incomplete.value = 'phone'
    if (message.value === '' || message.value === 'Message') incomplete.value = 'message'
  }
}

function editMessage(e: InputEvent | Event) {
  if (!e.target) return
  message.value = (e.target as HTMLDivElement).innerText;
}

function closeModal() {
  name.value = ''
  message.value = 'Message'
  email.value = ''
  phone.value = ''
  emit('close')
}

onMounted(() => {
  const contentEditable = document.querySelector('#message');
  contentEditable ? contentEditable.textContent = message.value : null;
  emit('mount')
})
</script>
