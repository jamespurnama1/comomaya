import { ViteSSG } from 'vite-ssg'
import './style.scss'
import './fonts.scss'
import './transition.scss'
import App from './App.vue'
import routes from '~pages'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faLinkedin, faTwitter, faPinterest, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faBook, faPencil, faLaptop, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import scaleFade from "./components/scaleFade.vue";
import { createPinia } from 'pinia'

library.add(faAngleUp, faInstagram, faLinkedin, faTwitter, faPinterest, faTelegram, faBook, faPencil, faLaptop, faTrophy)
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
    app.component('scaleFade', scaleFade)
    app.use(store)
  },
)