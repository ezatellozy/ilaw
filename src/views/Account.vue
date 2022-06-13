<template>
  <main id="content">
    <div class="container">
      <div class="row">
        <div
          class="col-md-3"
          :class="$i18n.locale == 'ar' ? 'border-left' : 'border-right'"
        >
          <h6 class="font-weight-medium font-size-7 pt-5 pt-lg-8 mb-5 mb-lg-7">
            {{ $t('misc.My account') }}
          </h6>
          <div class="tab-wrapper">
            <ul
              class="my__account-nav nav flex-column mb-0"
              role="tablist"
              id="pills-tab"
            >
              <li class="nav-item mx-0">
                <router-link
                  to="/account/dashboard"
                  class="nav-link d-flex align-items-center px-0 active"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Dashboard') }}
                  </span>
                </router-link>
              </li>
              <li class="nav-item mx-0">
                <router-link
                  to="/account/orders"
                  class="nav-link d-flex align-items-center px-0"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Orders') }}
                  </span>
                </router-link>
              </li>
              <li class="nav-item mx-0">
                <router-link
                  to="/account/downloads"
                  class="nav-link d-flex align-items-center px-0"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Downloads') }}
                  </span>
                </router-link>
              </li>
              <li class="nav-item mx-0">
                <router-link
                  to="/account/addresses"
                  class="nav-link d-flex align-items-center px-0"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Addresses') }}
                  </span>
                </router-link>
              </li>
              <li class="nav-item mx-0">
                <router-link
                  to="/account/accountDetails"
                  class="nav-link d-flex align-items-center px-0"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Account details') }}
                  </span>
                </router-link>
              </li>
              <li class="nav-item mx-0">
                <router-link
                  to="/account/wishlist"
                  class="nav-link d-flex align-items-center px-0"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Wishlist') }}
                  </span>
                </router-link>
              </li>
              <li class="nav-item mx-0">
                <router-link
                  to="/account/payment"
                  class="nav-link d-flex align-items-center px-0"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Paymentmethods') }}
                  </span>
                </router-link>
              </li>
              <li class="nav-item mx-0">
                <a
                  role="button"
                  @click="logout"
                  class="nav-link d-flex align-items-center px-0"
                  href="#"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Logout') }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-9">
          <div class="tab-content" id="pills-tabContent">
            <transition name="tabs">
              <dashboard v-if="dashboard" @openTab="openTab($event)" />
            </transition>
            <transition name="tabs">
              <others v-if="orders" />
            </transition>
            <transition name="tabs">
              <downloads v-if="downloads" />
            </transition>
            <transition name="tabs">
              <addresses v-if="addresses" />
            </transition>
            <transition name="tabs">
              <wishlist v-if="wishlist" />
            </transition>
            <transition name="tabs">
              <payment-methods v-if="payment" />
            </transition>
            <transition name="tabs">
              <account-details v-if="accountDetails" />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
import Others from '@/components/Others.vue'
import Downloads from '@/components/Downloads.vue'
import Addresses from '@/components/Addresses.vue'
import Wishlist from '@/components/Wishlist.vue'
import PaymentMethods from '@/components/PaymentMethods.vue'
import AccountDetails from '@/components/AccountDetails.vue'
export default {
  components: {
    Dashboard,
    AccountDetails,
    Others,
    Downloads,
    Addresses,
    Wishlist,
    PaymentMethods,
  },
  data() {
    return {
      dashboard: true,
      orders: false,
      addresses: false,
      wishlist: false,
      accountDetails: false,
      payment: false,
      downloads: false,
    }
  },
  mounted() {
    this.openTab(this.tabOpen)
  },
  computed: {
    tabOpen() {
      return this.$route.params.slug
    },
  },
  watch: {
    $route() {
      this.openTab(this.$route.params.slug)
    },
  },
  methods: {
    openTab(tab) {
      this.dashboard = false
      this.orders = false
      this.addresses = false
      this.wishlist = false
      this.downloads = false
      this.payment = false
      this.accountDetails = false
      this[tab] = true
    },
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs-enter-from,
.tabs-leave-to {
  opacity: 0;
}
.tabs-enter-active,
.tabs-leave-active {
  transition: all 0.3s;
}
.tabs-enter-to,
.tabs-leave-from {
  opacity: 1;
}
.is-rtl {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  tr,
  th,
  div,
  li {
    text-align: right;
    direction: rtl;
  }
}
</style>
