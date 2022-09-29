<template>
  <div :class="$i18n.locale == 'ar' ? 'is-rtl' : ''">
    <header id="site-header" class="site-header__v3">
      <main-header />
      <navbar :categories="categories" />
    </header>

    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer :categories="categories" />
    <teleport to="body">
      <Popup
        v-if="popup"
        @close-popup="closePopup"
        :mode="popupMode"
        :msg="message"
      />
    </teleport>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Navbar from './components/Navbar.vue'

import Footer from './components/Footer.vue'
import Cookies from 'js-cookie'

export default {
  components: { MainHeader, Navbar, Footer, Breadcrumb },
  data() {
    return {
      categories: [],
      countryCode: '',
      countryId: '',
    }
  },
  methods: {
    getMainGategories() {
      this.axios
        .get('/sections', {
          headers: {
            section: 0,
          },
        })
        .then((data) => {
          this.categories = data.data.data
        })
    },
    getCountryCode() {
      this.axios.get(`getLocationInfo`).then((data) => {
        this.countryCode = data.data.data.countryCode
        this.countryId = data.data.data.countryId
        Cookies.set('countryCode', this.countryCode)
        Cookies.set('countryId', this.countryId)
      })
    },
    getSettings() {
      this.axios.get('settings').then((data) => {
        this.$store.commit('settings', data.data.data)
      })
    },
    closePopup() {
      this.$store.commit('closePopup')
    },
  },

  mounted() {
    this.getSettings()
    this.getCountryCode()
    this.getMainGategories()
  },
  computed: {
    popup() {
      return this.$store.getters.popup
    },
    message() {
      return this.$store.getters.message
    },
    popupMode() {
      return this.$store.getters.popupMode
    },
  },
}
</script>

<style lang="scss">
.checkout label {
  font-size: 16px !important;
}
.btn-face {
  margin: 0 5px;
  background: #1877f2;
  a {
    color: #fff !important;
    &:hover {
      color: #fff !important;
    }
  }
  border-radius: 4px;
}
.btn-google {
  background: #ea4335;
  a {
    color: #fff !important;
    &:hover {
      color: #fff !important;
    }
  }
  border-radius: 4px;
}

.carousel__pagination-button {
  padding: 0 !important;
  width: 15px !important;
  height: 15px !important;
  position: relative;
  border-radius: 50% !important;
  background: transparent !important;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    width: 8px;
    height: 8px;

    background-color: #dccccc;
    border: 0 solid transparent;
    border-radius: 50%;

    transform: scale(1);
  }
  &.carousel__pagination-button--active {
    outline: 2px solid #22559d !important;
    &::before {
      background-color: #22559d;
    }
    // background: #22559d !important;
  }
}

.main-title {
  text-transform: uppercase;
  margin: 0 auto 0.5rem;
  // border: 2px solid black;
  padding: 10px 20px;
  font-size: 30px;
  width: fit-content;
  position: relative;
  z-index: 1;
  transition: 0.3s;
}
.main-title::before,
.main-title::after {
  content: '';
  width: 12px;
  height: 4px;
  background-color: #22559d;
  position: absolute;
  // border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}
.main-title::before {
  left: -30px;
}
.main-title::after {
  right: -30px;
}
.main-title:hover::before {
  z-index: -1;
  animation: left-move 0.5s linear forwards;
}
.main-title:hover::after {
  z-index: -1;
  animation: right-move 0.5s linear forwards;
}
.main-title:hover {
  color: white !important;
  // border: 2px solid white !important;
  transition-delay: 0.5s;
}
@keyframes left-move {
  50% {
    left: 0;
    width: 12px;
    height: 12px;
  }
  100% {
    left: 0;
    border-radius: 0;
    width: 60%;
    height: 100%;
  }
}
@keyframes right-move {
  50% {
    right: 0;
    width: 12px;
    height: 12px;
  }
  100% {
    right: 0;
    border-radius: 0;
    width: 60%;
    height: 100%;
  }
}
.nav-link {
  font-size: 1rem;
}
.link-black-100 {
  color: #19110b;
}

.font-weight-medium {
  font-weight: 500 !important;
}
.btn-primary-yellow {
  transition: 0.3s;
  color: #161619 !important;
  background-color: #f1c111 !important;
  border-color: #f1c111 !important;
}
.btn-primary-yellow:hover {
  color: #161619 !important;
  background-color: #fbe84b !important;
  border-color: #fbe73e !important;
}
.btn-primary-green {
  color: #161619 !important;
  background-color: #88cf00 !important;
  border-color: #88cf00 !important;
}
.btn-primary-green:hover {
  color: #fff !important;
  background-color: #6fa900 !important;
  border-color: #669c00 !important;
}
h2.title {
  font-size: 32px;
  line-height: 32px;
  color: #363f4d;
  font-weight: 500;
  margin-bottom: 20px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.show-side-enter-from,
.show-side-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
  // opacity: 0;
}
.show-side-enter-active,
.show-side-leave-active {
  transition: transform 0.2s ease;
}
.show-side-enter-to,
.show-side-leave-from {
  transform: translateX(0);
  transition: all 150ms ease-in 0s;
}

.dropdown-toggle {
  padding: 8px !important;
}

.dropdown-toggle:after {
  border-top: none !important;
}

.btn-group .btn:focus {
  outline: none !important;
}

.primary-color {
  color: #22559d;
}
</style>
