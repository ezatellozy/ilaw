<template>
  <main id="content">
    <div class="container">
      <div class="row">
        <div class="col-md-3 border-right">
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
                <a
                  class="nav-link d-flex align-items-center px-0 active"
                  role="button"
                  @click="openTab('dashboard')"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Dashboard') }}
                  </span>
                </a>
              </li>
              <li class="nav-item mx-0">
                <a
                  class="nav-link d-flex align-items-center px-0"
                  role="button"
                  @click="openTab('orders')"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Orders') }}
                  </span>
                </a>
              </li>
              <li class="nav-item mx-0">
                <a
                  class="nav-link d-flex align-items-center px-0"
                  role="button"
                  @click="openTab('downloads')"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Downloads') }}
                  </span>
                </a>
              </li>
              <li class="nav-item mx-0">
                <a
                  class="nav-link d-flex align-items-center px-0"
                  role="button"
                  @click="openTab('addresses')"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Addresses') }}
                  </span>
                </a>
              </li>
              <li class="nav-item mx-0">
                <a
                  class="nav-link d-flex align-items-center px-0"
                  role="button"
                  @click="openTab('accountDetails')"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Account details') }}
                  </span>
                </a>
              </li>
              <li class="nav-item mx-0">
                <a
                  class="nav-link d-flex align-items-center px-0"
                  role="button"
                  @click="openTab('wishlist')"
                >
                  <span class="font-weight-normal text-gray-600">
                    {{ $t('misc.Wishlist') }}
                  </span>
                </a>
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
import AccountDetails from '@/components/AccountDetails.vue'
export default {
  components: {
    Dashboard,
    AccountDetails,
    Others,
    Downloads,
    Addresses,
    Wishlist,
  },
  data() {
    return {
      dashboard: true,
      orders: false,
      addresses: false,
      wishlist: false,
      accountDetails: false,
      downloads: false,
    }
  },
  methods: {
    openTab(tab) {
      this.dashboard = false
      this.orders = false
      this.addresses = false
      this.wishlist = false
      this.downloads = false
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
</style>
