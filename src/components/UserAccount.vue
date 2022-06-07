<template>
  <div class="user-account">
    <div class="over" @click="openUserMenu"></div>
    <aside
      id="sidebarContent"
      class="u-sidebar u-sidebar__lg"
      aria-labelledby="sidebarNavToggler"
    >
      <div class="u-sidebar__scroller">
        <div class="u-sidebar__container">
          <div class="u-header-sidebar__footer-offset">
            <!-- Toggle Button -->
            <div
              class="d-flex align-items-center justify-content-between border-bottom px-4 px-md-6 py-4"
            >
              <div id="login">
                <header class="">
                  <h2 class="font-size-3 mb-0 d-flex align-items-center">
                    <i class="flaticon-user mr-3 font-size-5"></i>
                    {{ $t('misc.Account') }}
                  </h2>
                </header>
              </div>
              <button type="button" class="close" @click="openUserMenu">
                <span aria-hidden="true">
                  Close
                  <i class="fas fa-times ml-2"></i>
                </span>
              </button>
            </div>
            <!-- End Toggle Button -->

            <!-- Content -->
            <div class="js-scrollbar u-sidebar__body">
              <div class="u-sidebar__content u-header-sidebar__content">
                <transition name="fade">
                  <div class="p-4 p-md-6" v-if="signIn">
                    <Login @setting="setting($event)" />
                  </div>
                </transition>
                <transition name="fade">
                  <div id="signUpUser" v-if="signUpUser">
                    <NewAccount
                      urlRoute="/user/register"
                      @setting="setting($event)"
                    />
                  </div>
                </transition>
                <transition name="fade">
                  <div id="signUpVendor" v-if="signUpVendor">
                    <NewAccount
                      urlRoute="/vendor/register"
                      @setting="setting($event)"
                    />
                  </div>
                </transition>
                <transition name="fade">
                  <div id="forgotPassword" v-if="forgotPassword">
                    <!-- Title -->
                    <ForgotPassword @setting="setting($event)" />
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import Login from './Login.vue'
import NewAccount from './NewAccount.vue'
import ForgotPassword from './ForgotPassword.vue'
export default {
  components: { Login, NewAccount, ForgotPassword },
  data() {
    return {
      signIn: true,
      signUpUser: false,
      signUpVendor: false,
      forgotPassword: false,
    }
  },
  methods: {
    openUserMenu() {
      this.$emit('closeMenu')
    },
    setting(event) {
      this.signIn = false
      this.signUpUser = false
      this.signUpVendor = false
      this.forgotPassword = false
      this[event] = true
    },
  },
}
</script>

<style scoped lang="scss">
.user-account {
  .u-sidebar {
    opacity: 1;
  }
}

.user-account {
  .u-sidebar.u-sidebar__md.u-sidebar--left {
    z-index: 101;
  }
  .over {
    &::before {
      position: fixed;
      content: '';
      top: 0%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.63);
      z-index: 100;
    }
  }
}
</style>
