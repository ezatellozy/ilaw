import { createStore } from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'

function updateLocaleStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}
function updateWashlistStorage(washlist) {
  localStorage.setItem('washlist', JSON.stringify(washlist))
}

export default createStore({
  state: {
    status: '',
    currency: Cookies.get('currency') || 'UAE',
    user: JSON.parse(localStorage.getItem('user')) || null,
    loginMenu: false,
    publisher: null,
    cart: JSON.parse(localStorage.getItem('cart')) || [],

    washlist: JSON.parse(localStorage.getItem('washlist')) || [],
    token: Cookies.get('token') || null,
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    isPublisher: (state) => !!state.publisher,
    loginMenu: (state) => state.loginMenu,
    currency: (state) => state.currency,
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
        return state.user[0].id
      }
    },
    cart: (state) => state.cart,
    washlist: (state) => state.washlist,
  },
  mutations: {
    addToCart(state, product) {
      console.log(product)
      let item = state.cart.filter((i) => i.id === product.id)
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
    auth_success(state) {
      state.status = 'success'
      state.token = Cookies.get('token')
      state.user = JSON.parse(localStorage.getItem('user'))
    },
    auth_error(state) {
      state.status = 'error'
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
            console.log(resp)
            const token = resp.data.access_token
            const user = resp.data.user
            Cookies.set('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            const lang = user[0].default_language

            if (lang == 'Arabic') {
              Cookies.set('locale', 'ar')
            } else if (lang == 'English') {
              Cookies.set('locale', 'en')
            } else {
              Cookies.set('locale', 'fr')
            }

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
      console.log(url)
      return new Promise((resolve, reject) => {
        context.commit('auth_request')
        axios({
          url: `${url}`,
          data: user,
          method: 'POST',
        })
          .then((resp) => {
            context.dispatch('login', user)
            resolve(resp)
          })
          .catch((err) => {
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
