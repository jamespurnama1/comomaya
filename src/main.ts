import { ViteSSG } from 'vite-ssg'
import './style.scss'
import './fonts.scss'
import './transition.scss'
import App from './App.vue'
import routes from '~pages'
import { createHead } from '@unhead/vue'
import posthogPlugin from "./plugins/posthog";
import CustomFooter from '@/components/CustomFooter.vue';
import Splash from '@/components/Splash.vue';
import Service from '@/components/Service.vue';
import Brands from '@/components/Brands.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareInstagram, faLinkedin, faXTwitter, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faAnglesDown, faBook, faPencil, faLaptop, faTrophy, faSquareXmark, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'

const head = createHead()

library.add(faAngleUp, faSquareXmark, faSquareInstagram, faAnglesDown, faLinkedin, faXTwitter, faPinterest, faWhatsapp, faBook, faPencil, faLaptop, faTrophy, faAnglesRight)
const store = createPinia()

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  {
    routes
  },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.component('CustomFooter', CustomFooter)
    app.component('Splash', Splash)
    app.component('Brands', Brands)
    app.component('Service', Service)
    app.use(store)
    app.use(Vue3Lottie)
    if (isClient) {
      app.use(posthogPlugin)
    }
    app.use(head)
  },
)