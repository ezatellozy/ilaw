import '@babel/polyfill'
import 'mutationobserver-shim'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseCard from '@/components/ui/BaseCard.vue'
import './style/main.scss'
// import './style/theme.scss'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import '@/assets/bootstrap-select/dist/js/bootstrap-select.min.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import i18n from './i18n'

import Toaster from '@meforma/vue-toaster'

axios.defaults.baseURL = `https://ilaw.technomasrsystems.com/api/`
axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  lang: i18n.global.locale,
}

library.add(fas)
library.add(fab)
library.add(far)

const app = createApp(App).use(i18n)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.component('BaseCard', BaseCard)

app.use(BootstrapVue3)
app.use(VueAxios, axios)
app.use(store)
app.use(Toaster, {
  duration: 4000,
  position: 'bottom',
})

app.use(router)
app.mount('#app')
