import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import AboutUs from '../views/About.vue'
import Faq from '../views/Faq.vue'
import Shop from '../views/Shop.vue'
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
import OrderRecived from '../views/OrderRecived.vue'
import Book from '@/components/BookInfo.vue'
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
    path: '/book',
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
    path: '/shop',
    name: 'shop',
    component: Shop,
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
    component: Checkout,
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      auth: true,
    },
    children: [
      {
        path: 'wishlist',
        component: () => import('@/components/Wishlist.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'addresses',
        component: () => import('@/components/Addresses.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'account-details',
        component: () => import('@/components/AccountDetails.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'dashboard',
        component: () => import('@/components/Dashboard.vue'),
        meta: {
          auth: true,
        },
      },
    ],
    component: Account,
  },
  {
    path: '/page',
    name: 'page',
    component: Page,
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
