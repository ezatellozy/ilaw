import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    status: '',
    user: null,
    publisher: null,
    token: null,
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    isPublisher: (state) => !!state.publisher,
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state) {
      state.status = 'success'
      // state.token = mixin.getCookie('token')
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
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: '/signin',
          data: user,
          method: 'POST',
        })
          .then((resp) => {
            const token = resp.data.token
            const user = resp.data.user
            // mixin.setCookie('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            commit('auth_success')
            resolve(resp)
          })
          .catch((err) => {
            commit('auth_error')
            // mixin.eraseCookie('token')
            reject(err)
          })
      })
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: '/signup',
          data: user,
          method: 'POST',
        })
          .then((resp) => {
            const token = resp.data.token
            const user = resp.data.user
            // mixin.setCookie('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            commit('auth_success')
            resolve(resp)
          })
          .catch((err) => {
            commit('auth_error', err)
            // mixin.eraseCookie('token')
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        axios({
          url: '/signout',
          method: 'POST',
        })
        // mixin.eraseCookie('token')
        localStorage.removeItem('user')
        this.state.user = {}
        delete axios.defaults.headers.common['Authorization']
        resolve()
        console.log(reject)
      })
    },
  },
  modules: {},
})
