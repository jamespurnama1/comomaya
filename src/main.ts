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
import RMC from '@/components/RMC.vue';
import Pop from '@/components/Pop.vue';
import Testimonials from '@/components/Testimonials.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareInstagram, faLinkedin, faWhatsapp, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faAnglesDown, faBook, faPencil, faLaptop, faTrophy, faPhone, faSquareXmark, faXmark, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'
import { createGtm } from '@gtm-support/vue-gtm';

const head = createHead()

library.add(faAngleUp, faSquareXmark, faXmark, faSquareInstagram, faSquareWhatsapp, faAnglesDown, faLinkedin, faWhatsapp, faPhone, faBook, faPencil, faLaptop, faTrophy, faAnglesRight)
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
    app.component('RMC', RMC)
    app.component('Testimonials', Testimonials)
    app.component('Pop', Pop)
    app.use(store)
    app.use(Vue3Lottie)
    if (isClient) {
      app.use(posthogPlugin)
      app.use(
  createGtm({
    id: "GTM-T4M77K2S",
    vueRouter: router
  })
)
    }
    app.use(head)
  },
)