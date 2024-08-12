<template>
  <div @click.self="closeModal()" @keydown.esc="closeModal()" @keydown.enter="closeModal()"
    class="fixed z-40 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
    <div class="p-12 bg-beige-lighter flex items-center justify-center gap-10 flex-col md:flex-row w-4/5 max-w-6xl">
      <div class="flex items-center justify-center gap-5">
        <img class="h-24 md:h-[30vh] w-auto" src="@/assets/coffee.svg" alt="Coffee" />
        <p v-if="store.getWidth <= 768"
          class="text-black text-xl md:text-xl font-extrabold md:text-center text-balance">Let's connect
          over&nbsp;coffee...
        </p>
      </div>
      <div class="flex w-full h-full flex-col gap-8 items-center justify-center md:w-2/3 md:px-20 md:pt-12">
        <p v-if="store.getWidth > 768" class="text-black text-2xl md:text-3xl font-extrabold text-balance mr-auto">Let's
          connect
          over&nbsp;coffee...
        </p>
        <form class="flex flex-col flex-wrap w-full content-start items-center justify-center">
          <input v-model="name"
            class="bg-white autofill:bg-white w-full text-black placeholder-stone-700 md:text-xl focus:outline-none h-6 md:h-12 placeholder:text-blue placeholder:font-semibold px-2 py-4"
            :class="[incomplete === 'name' ? 'mb-1' : 'md:mb-7 mb-4']" type="text" name="name" placeholder="Name">
          <label v-if="incomplete === 'name'" class="text-red mb-4 md:mb-7 text-sm md:text-base" for="name">Please enter
            your
            name.</label>

          <input v-model="email"
            class="bg-white autofill:bg-white w-full text-black placeholder-stone-700 md:text-xl focus:outline-none h-6 md:h-12 placeholder:text-blue placeholder:font-semibold px-2 py-4"
            :class="[incomplete === 'email' ? 'mb-1' : 'md:mb-7 mb-4']" placeholder="Email" type="email" name="email">
          <label v-if="incomplete === 'email'" class="text-red mb-4 md:mb-7 text-sm md:text-base" for="email">Please
            double check
            you
            e-mail
            address.</label>

          <div contenteditable role="textbox" spellcheck="true" id="message" @input="editMessage"
            @focus="(e) => {if (message === 'Message') (e.target as HTMLDivElement).textContent = ''; message = ''}"
            class="bg-white autofill:bg-white placeholder-stone-700 md:text-xl resize-none w-full min-h-[24px] md:min-h-[36px] focus:outline-none px-2 py-1 md:py-3"
            :class="[message === 'Message' ? 'text-blue font-semibold' : 'text-black', incomplete === 'message' ? 'mb-1' : 'md:mb-7 mb-4']" />
          <label v-if="incomplete === 'message'" class="text-red mb-1 text-sm md:text-base" for="message">Please
            type in
            your message.</label>
          <label v-if="error" class="text-red mb-1 text-sm md:text-base">{{ error }}</label>

          <button v-if="!loading"
            class="hover:bg-active duration-200 transition-all z-0 relative bg-blue outline-4 py-2 md:py-4 px-1 my-8 mb-0 md:mb-8 flex items-center text-active hover:text-blue text-2xl md:text-4xl font-extrabold text-center w-3/4 justify-center"
            type="submit" @click.prevent="handleSubmit()">submit</button>
          <img v-else class="h-12 w-12 my-12 object-contain spin" src="@/assets/loader.svg" alt="loading" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import {useStore} from '../stores';

const store = useStore();
const router = useRouter();
const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
const instance = getCurrentInstance();
const posthog = instance?.appContext.config.globalProperties.$posthog;

const emit = defineEmits(['close', 'mount'])

const name = ref('');
const email = ref('');
const message = ref('Message');
const error = ref(null as null | string);
const incomplete = ref(null as null | string);
const loading = ref(false);

function handleSubmit() {
  incomplete.value = null
  if (emailRegex.test(email.value) && name.value !== '' && message.value !== '' && message.value !== 'Message') {
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
  emit('close')
}

onMounted(() => {
  document.body.style.overflow = 'hidden';
  const contentEditable = document.querySelector('#message');
  contentEditable ? contentEditable.textContent = message.value : null;
  emit('mount')
})

onBeforeUnmount(() => {
  document.body.style.overflow = 'auto'

})
</script>
