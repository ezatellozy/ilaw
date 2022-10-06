import { createStore } from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'
import { createToaster } from '@meforma/vue-toaster'
import i18n from '../i18n'

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
    currency: JSON.parse(localStorage.getItem('currency')) || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    loginMenu: false,
    publisher: null,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    phoneStatus: '',
    emailStatus: '',
    loading: false,
    pageLoading: false,
    popup: false,
    message: '',
    popupMode: '',
    usernamestatus: '',
    washlist: JSON.parse(localStorage.getItem('washlist')) || [],
    token: Cookies.get('token') || null,
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    isPublisher: (state) => !!state.publisher,
    loginMenu: (state) => state.loginMenu,
    currency: (state) => state.currency,
    popup: (state) => state.popup,
    popupMode: (state) => state.popupMode,
    message: (state) => state.message,
    status: (state) => state.status,
    settings: (state) => state.settings,
    loading: (state) => state.loading,
    pageLoading: (state) => state.pageLoading,
    totalPrice: (state) => {
      return `${state.cart.reduce((a, b) => +a + +b.totalPrice, 0)}`
    },
    totalQuantity: (state) => {
      return state.cart.reduce((a, b) => +a + +b.quntity, 0)
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
    washlistLength: (state) => state.washlist.length,
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    pageLoading(state, payload) {
      state.pageLoading = payload
    },

    addToCartByOne(state, product) {
      let item = state.cart.filter((i) => i.book.id === product.book.id)
      if (item.length) {
        let cItem = item.filter((i) => i.book_type === product.book_type)
        if (cItem.length) {
          item = item.find((e) => e.book_type === product.book_type)
          item.quntity += 1
          item.totalPrice += +product.price
        } else {
          state.cart.push({ ...product })
        }
      } else {
        state.cart.push({ ...product })
      }
      updateLocaleStorage(state.cart)
    },

    cart(state, cart) {
      state.cart = cart
    },
    popup(state) {
      state.popup = true
      setTimeout(() => (state.popup = false), 2000)
    },
    closePopup(state) {
      state.popup = false
    },
    popupMode(state, popupMode) {
      state.popupMode = popupMode
    },
    message(state, message) {
      state.message = message
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
        context.commit('pageLoading', true)
        axios({
          url: '/user/login',
          data: { email: user.email, password: user.password },
          method: 'POST',
        })
          .then((resp) => {
            if (resp.data.status == 'faild') {
              context.commit('auth_error', resp.data.message)
              context.commit('pageLoading', false)
              return
            }
            // const token = resp.data.access_token
            const user = resp.data.data
            context.commit('updateUser', user)
            Cookies.set('token', 'successed')
            localStorage.setItem('user', JSON.stringify(user))
            const lang = user.language

            if (lang == 'ar') {
              Cookies.set('locale', 'ar')
            } else if (lang == 'en') {
              Cookies.set('locale', 'en')
            } else {
              Cookies.set('locale', 'fr')
            }

            if (context.state.cart.length) {
              let obj = { cart: [] }
              context.state.cart.forEach((element) => {
                obj.cart.push(element)
              })
              axios
                .post('/user/orders/cart/add', obj, {
                  headers: {
                    user: JSON.parse(localStorage.getItem('user')).id,
                  },
                })
                .then(() => {
                  axios
                    .get('/user/orders/cart/myCart', {
                      headers: {
                        user: JSON.parse(localStorage.getItem('user')).id,
                      },
                    })
                    .then((data) => {
                      updateLocaleStorage(data.data.data.items)
                      if (context.state.washlist.length) {
                        let itemsCount = 0
                        context.state.washlist.forEach((el) => {
                          axios
                            .post(
                              '/user/favorites/create',
                              { book_id: el.id },
                              {
                                headers: {
                                  user: JSON.parse(localStorage.getItem('user'))
                                    .id,
                                },
                              },
                            )
                            .then(() => {
                              itemsCount++
                              if (itemsCount == context.state.washlist.length) {
                                axios
                                  .get('/user/favorites', {
                                    headers: {
                                      user: JSON.parse(
                                        localStorage.getItem('user'),
                                      ).id,
                                    },
                                  })
                                  .then((data) => {
                                    updateWashlistStorage(data.data.data)
                                    context.commit('pageLoading', false)
                                    setTimeout(() => {
                                      window.location.reload()
                                    }, 300)
                                  })
                              }
                            })
                        })
                      } else {
                        axios
                          .get('/user/favorites', {
                            headers: {
                              user: JSON.parse(localStorage.getItem('user')).id,
                            },
                          })
                          .then((data) => {
                            if (data.data.data) {
                              updateWashlistStorage(data.data.data)
                              setTimeout(() => {
                                window.location.reload()
                              }, 300)
                              return
                            }
                            setTimeout(() => {
                              window.location.reload()
                            }, 300)
                          })
                      }
                    })
                })
            } else {
              axios
                .get('/user/orders/cart/myCart', {
                  headers: {
                    user: JSON.parse(localStorage.getItem('user')).id,
                  },
                })
                .then((data) => {
                  if (data.data.data.items) {
                    updateLocaleStorage(data.data.data.items)
                    if (context.state.washlist.length) {
                      let itemsCount = 0
                      context.state.washlist.forEach((el) => {
                        axios
                          .post(
                            '/user/favorites/create',
                            { book_id: el.id },
                            {
                              headers: {
                                user: JSON.parse(localStorage.getItem('user'))
                                  .id,
                              },
                            },
                          )
                          .then(() => {
                            itemsCount++
                            if (itemsCount == context.state.washlist.length) {
                              axios
                                .get('/user/favorites', {
                                  headers: {
                                    user: JSON.parse(
                                      localStorage.getItem('user'),
                                    ).id,
                                  },
                                })
                                .then((data) => {
                                  updateWashlistStorage(data.data.data)
                                  context.commit('pageLoading', false)
                                  setTimeout(() => {
                                    window.location.reload()
                                  }, 300)
                                })
                            }
                          })
                      })
                    } else {
                      axios
                        .get('/user/favorites', {
                          headers: {
                            user: JSON.parse(localStorage.getItem('user')).id,
                          },
                        })
                        .then((data) => {
                          if (data.data.data) {
                            updateWashlistStorage(data.data.data)
                            setTimeout(() => {
                              window.location.reload()
                            }, 300)
                            return
                          }
                          setTimeout(() => {
                            window.location.reload()
                          }, 300)
                        })
                    }
                  }
                })
            }

            if (resp.data.message) {
              context.commit('message', resp.data.message)
              context.commit('popupMode', 'success')
              context.commit('popup')
            }

            context.commit('auth_success')

            resolve(resp)
          })
          .catch((err) => {
            context.commit('auth_error')
            Cookies.remove('token')
            reject(err)
          })
      })
    },
    removeItem(context, product) {
      context.commit('setLoading', true)
      if (context.state.token) {
        axios
          .get(`/user/orders/cart/removeItem/${product.id}`)
          .then((data) => {
            updateLocaleStorage(data.data.data.items)
            context.state.cart = data.data.data.items
          })
          .finally(() => {
            context.commit('setLoading', false)
            context.dispatch('getCart')
          })
        return
      }
      let item = context.state.cart.filter(
        (el) => el.book.id !== product.book.id,
      )
      let cItem = context.state.cart.filter((el) => el.id == product.id)
      let removed = cItem.filter((el) => el.book_type != product.book_type)
      let newItems = []
      newItems.push(...item, ...removed)
      updateLocaleStorage(newItems)
      context.state.cart = JSON.parse(localStorage.getItem('cart'))
      context.commit('setLoading', false)
    },
    removeItemWashlist(context, product) {
      context.commit('setLoading', true)
      axios.get(`/user/favorites/${product.fav_id}/delete`).then((data) => {
        if (data.data.status == 'success') {
          let item = context.state.washlist.filter(
            (el) => el.fav_id !== product.fav_id,
          )
          updateWashlistStorage(item)
          context.state.washlist = JSON.parse(localStorage.getItem('washlist'))
          context.commit('setLoading', false)
        }
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
        localStorage.removeItem('cart')
        localStorage.removeItem('washlist')
        this.state.user = {}
        Cookies.remove('token')
        resolve()
        console.log(reject)
      })
    },
    getCart() {
      axios
        .get('/user/orders/cart/myCart', {
          headers: {
            user: JSON.parse(localStorage.getItem('user')).id,
          },
        })
        .then((data) => {
          if (data.data.data.items) {
            updateLocaleStorage(data.data.data.items)
          }
        })
    },
    addToWashlist(context, product) {
      let item = context.state.washlist.filter((i) => i.id === product.id)
      if (item.length) {
        if (context.state.token) {
          axios
            .post(
              '/user/favorites/create',
              { book_id: product.id },
              {
                headers: {
                  user: JSON.parse(localStorage.getItem('user')).id,
                },
              },
            )
            .then((data) => {
              context.commit('message', data.data.message)
              context.commit('popupMode', 'success')
              context.commit('popup')
              axios
                .get('/user/favorites', {
                  headers: {
                    user: JSON.parse(localStorage.getItem('user')).id,
                  },
                })
                .then((data) => {
                  context.state.washlist = data.data.data
                  updateWashlistStorage(data.data.data)
                })
            })
          return
        }
        return
      } else {
        if (context.state.token) {
          axios
            .post(
              '/user/favorites/create',
              { book_id: product.id },
              {
                headers: {
                  user: JSON.parse(localStorage.getItem('user')).id,
                },
              },
            )
            .then((data) => {
              context.commit('message', data.data.message)
              context.commit('popupMode', 'success')
              context.commit('popup')
              axios
                .get('/user/favorites', {
                  headers: {
                    user: JSON.parse(localStorage.getItem('user')).id,
                  },
                })
                .then((data) => {
                  updateWashlistStorage(data.data.data)
                  context.state.washlist = data.data.data
                })
            })
          return
        }
        context.state.washlist.push({ ...product })

        context.commit('message', i18n.global.t('misc.addSuccess'))
        context.commit('popupMode', 'success')
        context.commit('popup')
      }
      updateWashlistStorage(context.state.washlist)
    },
    addToCart(context, product) {
      if (context.state.token) {
        let obj = { cart: [] }
        obj.cart.push(product)
        axios.post('/user/orders/cart/add', obj).then((data) => {
          context.state.cart = data.data.data.items

          updateLocaleStorage(data.data.data.items)

          context.commit('message', data.data.message)
          context.commit('popupMode', 'success')
          context.commit('popup')
        })
        return
      }
      let item = context.state.cart.filter((i) => i.book.id === product.book.id)
      if (item.length) {
        let cItem = item.filter((i) => i.book_type === product.book_type)
        if (cItem.length) {
          item = item.find((e) => e.book_type === product.book_type)
          item.quntity += product.quntity
          item.totalPrice += product.totalPrice
        } else {
          context.state.cart.push({ ...product })
          updateLocaleStorage(context.state.cart)
          context.commit('message', i18n.global.t('misc.addSuccess'))
          context.commit('popupMode', 'success')
          context.commit('popup')
        }
      } else {
        context.state.cart.push({ ...product })
        updateLocaleStorage(context.state.cart)
        context.commit('message', i18n.global.t('misc.addSuccess'))
        context.commit('popupMode', 'success')
        context.commit('popup')
      }
      updateLocaleStorage(context.state.cart)
    },
  },
  modules: {},
})
