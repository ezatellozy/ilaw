import { createStore } from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'
import { createToaster } from '@meforma/vue-toaster'

// import { inject } from 'vue'
const toast = createToaster()

function updateLocaleStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}
function updateWashlistStorage(washlist) {
  localStorage.setItem('washlist', JSON.stringify(washlist))
}

export default createStore({
  state: {
    settings: [],
    status: '',
    currency: Cookies.get('currency') || 'UAE',
    user: JSON.parse(localStorage.getItem('user')) || null,
    loginMenu: false,
    publisher: null,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    phoneStatus: '',
    emailStatus: '',
    usernamestatus: '',
    washlist: JSON.parse(localStorage.getItem('washlist')) || [],
    token: Cookies.get('token') || null,
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    isPublisher: (state) => !!state.publisher,
    loginMenu: (state) => state.loginMenu,
    currency: (state) => state.currency,
    status: (state) => state.status,
    settings: (state) => state.settings,
    totalPrice: (state) => {
      return `${state.cart.reduce((a, b) => a + b.totalPrice, 0)} ${
        state.currency
      }`
    },
    totalQuantity: (state) => {
      return state.cart.reduce((a, b) => a + b.qty, 0)
    },
    userId: (state) => {
      if (state.user) {
        return state.user.id
      }
    },
    cart: (state) => state.cart,
    usernamestatus: (state) => state.usernamestatus,
    emailstatus: (state) => state.emailStatus,
    phoneStatus: (state) => state.phoneStatus,
    washlist: (state) => state.washlist,
  },
  mutations: {
    addToCart(state, product) {
      console.log(product)
      let item = state.cart.filter((i) => i.book.id === product.book.id)
      if (item.length) {
        let cItem = item.filter((i) => i.bookType === product.bookType)
        if (cItem.length) {
          item = item.find((e) => e.bookType === product.bookType)
          item.qty += product.qty
          item.totalPrice += product.totalPrice
        } else {
          state.cart.push({ ...product })
        }
      } else {
        state.cart.push({ ...product })
      }
      updateLocaleStorage(state.cart)
    },
    addToCartByOne(state, product) {
      let item = state.cart.filter((i) => i.id === product.id)
      if (item.length) {
        let cItem = item.filter((i) => i.bookType === product.bookType)
        if (cItem.length) {
          item = item.find((e) => e.bookType === product.bookType)
          item.qty += 1
          item.totalPrice += product.price
        } else {
          state.cart.push({ ...product })
        }
      } else {
        state.cart.push({ ...product })
      }
      updateLocaleStorage(state.cart)
    },
    removeItem(state, product) {
      let item = state.cart.filter((el) => el.id !== product.id)
      let cItem = state.cart.filter((el) => el.id == product.id)
      let removed = cItem.filter((el) => el.bookType != product.bookType)
      let newItems = []
      newItems.push(...item, ...removed)
      updateLocaleStorage(newItems)
      state.cart = JSON.parse(localStorage.getItem('cart'))
    },
    removeItemByOne(state, product) {
      let item = state.cart.filter((i) => i.id === product.id)
      if (item.length) {
        let cItem = item.filter((i) => i.bookType === product.bookType)
        if (cItem.length) {
          item = item.find((e) => e.bookType === product.bookType)
          item.qty -= 1
          item.totalPrice -= product.price
          if (item.qty < 1) {
            let item = state.cart.filter((el) => el.id !== product.id)
            let cItem = state.cart.filter((el) => el.id == product.id)
            let removed = cItem.filter((el) => el.bookType != product.bookType)
            let newItems = []
            newItems.push(...item, ...removed)
            updateLocaleStorage(newItems)
            state.cart = JSON.parse(localStorage.getItem('cart'))
          }
        } else {
          state.cart.push({ ...product })
        }
      } else {
        state.cart.push({ ...product })
      }
      updateLocaleStorage(state.cart)
    },
    addToWashlist(state, product) {
      let item = state.washlist.filter((i) => i.id === product.id)
      if (item.length) {
        return
      } else {
        state.washlist.push({ ...product })
      }
      updateWashlistStorage(state.washlist)
    },
    removeItemWashlist(state, product) {
      let item = state.washlist.filter((el) => el.id !== product.id)

      updateWashlistStorage(item)
      state.washlist = JSON.parse(localStorage.getItem('washlist'))
    },
    auth_request(state) {
      state.status = 'loading'
    },
    login_Menu(state) {
      state.loginMenu = !state.loginMenu
    },
    currency(state, payload) {
      state.currency = payload
    },
    settings(state, payload) {
      state.settings = payload
    },
    auth_success(state, payload) {
      state.status = payload
      state.token = Cookies.get('token')
      state.user = JSON.parse(localStorage.getItem('user'))
    },
    auth_error(state, payload) {
      state.status = payload
    },
    usernamestatus(state, payload) {
      state.usernamestatus = payload
    },
    emailstatus(state, payload) {
      state.emailStatus = payload
    },

    phoneStatus(state, payload) {
      state.phoneStatus = payload
    },

    logout(state) {
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    opentabs() {},
    login(context, user) {
      return new Promise((resolve, reject) => {
        context.commit('auth_request')
        axios({
          url: '/user/login',
          data: { email: user.email, password: user.password },
          method: 'POST',
        })
          .then((resp) => {
            if (resp.data.status == 'faild') {
              context.commit('auth_error', resp.data.message)
              return
            }
            // const token = resp.data.access_token
            const user = resp.data.data
            Cookies.set('token', 'successed')
            localStorage.setItem('user', JSON.stringify(user))
            console.log(resp)
            const lang = user.language

            if (lang == 'ar') {
              Cookies.set('locale', 'ar')
            } else if (lang == 'en') {
              Cookies.set('locale', 'en')
            } else {
              Cookies.set('locale', 'fr')
            }
            toast.success(resp.data.message)
            context.commit('auth_success')
            setTimeout(() => {
              window.location.reload()
            }, 300)

            resolve(resp)
          })
          .catch((err) => {
            console.log(err)
            context.commit('auth_error')
            Cookies.remove('token')
            reject(err)
          })
      })
    },

    register(context, [user, url]) {
      return new Promise((resolve, reject) => {
        context.commit('auth_request')
        axios({
          url: `${url}`,
          data: user,
          method: 'POST',
          headers: {
            'Accept-Language': Cookies.get('locale'),
          },
        })
          .then((resp) => {
            context.commit('emailstatus', '')
            context.commit('phoneStatus', '')
            context.commit('usernamestatus', '')
            if (resp.data.status == 'faild') {
              context.commit('auth_error', resp.data.message)
              toast.error(resp.data.message)
              if (resp.data.data.email) {
                context.commit('emailstatus', resp.data.data.email[0])
              } else if (resp.data.data.phone) {
                context.commit('phoneStatus', resp.data.data.phone[0])
              } else if (resp.data.data.username) {
                context.commit('usernamestatus', resp.data.data.username[0])
              }
              return
            }
            toast.success(resp.data.message)
            context.dispatch('login', user)
            resolve(resp)
          })
          .catch((err) => {
            toast.error(err.message)
            context.commit('auth_error', err)
            Cookies.remove('token')
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('user')
        this.state.user = {}
        Cookies.remove('token')
        resolve()
        console.log(reject)
      })
    },
  },
  modules: {},
})
