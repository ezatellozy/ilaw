import { createStore } from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'

export default createStore({
  state: {
    status: '',
    user: null,
    loginMenu: false,
    publisher: null,
    token: Cookies.get('token') || null,
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    isPublisher: (state) => !!state.publisher,
    loginMenu: (state) => state.loginMenu,
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    login_Menu(state) {
      state.loginMenu = !state.loginMenu
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
            console.log(lang)
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
