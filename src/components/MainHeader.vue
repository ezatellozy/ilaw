<template>
  <div class="topbar border-bottom d-none d-md-block">
    <div class="container">
      <div
        class="topbar__nav d-md-flex justify-content-between align-items-center font-size-2"
      >
        <ul class="topbar__nav--left nav mb-0">
          <li class="nav-item" v-if="false">
            <span class="link-black-100">Free Shipping on Orders Over $99</span>
          </li>
        </ul>
        <ul class="topbar__nav--right nav mb-0">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link p-2 link-black-100 d-flex align-items-center"
            >
              <i class="glph-icon flaticon-sent mr-2 font-size-3"></i>
              {{ $t('misc.Track Your Order') }}
            </router-link>
          </li>
          <li class="nav-item">
            <b-dropdown
              id="currency"
              class="link-black-100 d-flex align-items-center"
              v-model="currency"
              :text="currency"
            >
              <b-dropdown-item
                v-for="currency in currencis"
                :key="currency.value"
                :value="currency.code"
                @click="changeCurrency(currency.code)"
              >
                {{ currency.code }}
              </b-dropdown-item>
            </b-dropdown>
          </li>
          <li class="nav-item">
            <b-dropdown v-model="locale" id="language" :text="locale">
              <b-dropdown-item
                v-for="lang in langs"
                :key="lang.value"
                :value="lang.value"
                @click="changeLocale(lang.value)"
              >
                {{ lang.text }}
              </b-dropdown-item>
            </b-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      currencis: null,

      miniCart: false,
      // locale: this.$i18n.locale,
      langs: [
        {
          value: 'ar',
          text: 'العربية',
        },
        {
          value: 'en',
          text: 'English',
        },
        {
          value: 'fr',
          text: 'France',
        },
      ],
    }
  },
  mounted() {
    this.getCurrencis()
  },
  methods: {
    changeLocale(lang) {
      Cookies.set('locale', lang)

      setTimeout(() => {
        window.location.reload()
      }, 300)
    },
    changeCurrency(c) {
      Cookies.set('currency', c)
      this.$store.commit('currency', c)
    },
    getCurrencis() {
      this.axios.get('countries').then((data) => {
        this.currencis = data.data.data
      })
    },
  },
  computed: {
    locale() {
      if (this.$i18n.locale == 'ar') {
        return 'العربية'
      } else if (this.$i18n.locale == 'en') {
        return 'English'
      } else {
        return 'France'
      }
    },
    currency() {
      return this.$store.getters.currency
    },
  },
}
</script>

<style lang="scss">
.nav-item {
  display: flex;
  justify-content: center;
  a {
    font-size: 0.875rem !important;
    color: #19110b !important;

    &:hover {
      color: #f30b0b !important;
    }
  }
}
.btn-group {
  .dropdown-toggle {
    font-size: 0.875rem !important;
  }
  &:hover {
    .dropdown-menu {
      display: block !important;
      position: absolute;
      inset: 0px 0px auto auto;
      margin: 0px;
      transform: translate3d(0px, 43.6364px, 0px);
    }
  }
  .btn {
    &:hover {
      color: #f30b0b !important;
    }
    color: #19110b !important;
    background: none !important;
    border: none !important;
    box-shadow: none !important;
  }
}

.is-rtl {
  .btn-group {
    &:hover {
      .dropdown-menu {
        inset: 0px auto auto 0px !important;
      }
    }
  }
}
</style>
