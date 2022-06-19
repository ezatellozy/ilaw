import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import AboutUs from '../views/About.vue'
import Faq from '../views/Faq.vue'
import Shop from '../views/Shop.vue'
import Search from '../views/Search.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Login from '../views/Login.vue'
import Register from '../views/Signup.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Account from '../views/Account.vue'
import Page from '../views/Page.vue'
import Author from '../views/Author.vue'
import Publisher from '../views/Publisher.vue'
import Authers from '../views/Authers.vue'
import Publishers from '../views/Publishers.vue'
import OrderRecived from '../views/OrderRecived.vue'
import Book from '@/components/BookInfo.vue'
import PageNotFound from '@/components/NotFound.vue'
import createStore from '@/store'
import Cookies from 'js-cookie'
const store = createStore

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/book/:id',
    name: 'book',
    component: Book,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/authers',
    name: 'authers',
    component: Authers,
  },
  { path: '/shop', redirect: '/shop/all' },

  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs,
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq,
  },
  {
    path: '/order-recived',
    name: 'order-recived',
    component: OrderRecived,
  },
  {
    path: '/shop/:id',
    name: 'shop',
    component: Shop,
  },
  {
    path: '/search/:id',
    name: 'search',
    component: Search,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ForgotPassword,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/checkout',
    name: 'checkout',
    meta: {
      auth: true,
    },
    component: Checkout,
  },
  {
    path: '/account/:slug',
    name: 'account',
    meta: {
      auth: true,
    },
    component: Account,
  },
  {
    path: '/page',
    name: 'page',
    component: Page,
  },
  {
    path: '/publishers',
    name: 'publishers',
    component: Publishers,
  },
  {
    path: '/author/:id',
    name: 'author',
    component: Author,
  },
  {
    path: '/publisher/:id',
    name: 'publisher',
    component: Publisher,
  },
  { path: '/:pathMatch(.*)*', component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = Cookies.get('token')

  if (to.meta.auth && token == undefined) {
    next('/')
    store.commit('login_Menu')
  } else {
    next()
  }
})

export default router
