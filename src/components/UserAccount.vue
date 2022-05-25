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
              class="d-flex align-items-center position-absolute top-0 right-0 z-index-2 mt-5 mr-md-6 mr-4"
            >
              <button type="button" class="close ml-auto" @click="openUserMenu">
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
                <form class="" @submit.prevent>
                  <div id="login">
                    <header class="border-bottom px-4 px-md-6 py-4">
                      <h2 class="font-size-3 mb-0 d-flex align-items-center">
                        <i class="flaticon-user mr-3 font-size-5"></i>
                        Account
                      </h2>
                    </header>
                  </div>
                  <transition name="fade">
                    <div class="p-4 p-md-6" v-if="signIn">
                      <Login @setting="setting($event)" />
                    </div>
                  </transition>
                  <transition name="fade">
                    <div id="signup" v-if="signUp">
                      <NewAccount @setting="setting($event)" />
                    </div>
                  </transition>
                  <transition name="fade">
                    <div id="forgotPassword" v-if="forgotPassword">
                      <!-- Title -->
                      <ForgotPassword @setting="setting($event)" />
                    </div>
                  </transition>
                </form>
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
  data() {
    return {
      signIn: true,
      signUp: false,
      forgotPassword: false,
    }
  },
  methods: {
    openUserMenu() {
      this.$emit('closeMenu')
    },
    setting(event) {
      this.signIn = false
      this.signUp = false
      this.forgotPassword = false
      this[event] = true
    },
  },
  components: { Login, NewAccount, ForgotPassword },
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
