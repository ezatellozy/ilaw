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
import 'bootstrap/dist/css/bootstrap.rtl.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Paginate from 'vuejs-paginate-next'
import Cookies from 'js-cookie'
import mitt from 'mitt'
const emitter = mitt()
import Toaster from '@meforma/vue-toaster'
import i18n from './i18n'

// api link
const apiLink = `https://ilawfairv2.technomasrsystems.com/api`
// reset password global
const ResetPasswordLink =
  'https://ilawfairv2.technomasrsystems.com/password/reset'

axios.defaults.baseURL = apiLink
axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  lang: i18n.global.locale,
  user: store.getters.userId,
  'Accept-Language': Cookies.get('locale'),
  currency: Cookies.get('currency'),
}

library.add(fas)
library.add(fab)
library.add(far)

const app = createApp(App).use(i18n)

app.config.globalProperties.globalResetPassword = ResetPasswordLink

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.component('BaseCard', BaseCard)
app.use(BootstrapVue3)
app.use(VueAxios, axios)
app.use(store)
app.use(Paginate)
app.config.globalProperties.emitter = emitter
app
  .use(Toaster, {
    duration: 4000,
    position: 'bottom',
  })
  .provide('toast', app.config.globalProperties.$toast)

app.use(router)
app.mount('#app')
