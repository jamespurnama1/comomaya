import { ViteSSG } from 'vite-ssg'
import './style.scss'
import './fonts.scss'
import './transition.scss'
import App from './App.vue'
import routes from '~pages'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareInstagram, faLinkedin, faTwitter, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faAnglesDown, faBook, faPencil, faLaptop, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'

library.add(faAngleUp, faSquareInstagram, faAnglesDown, faLinkedin, faTwitter, faPinterest, faWhatsapp, faBook, faPencil, faLaptop, faTrophy)
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
    app.use(store)
  },
)