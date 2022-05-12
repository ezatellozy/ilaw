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
                <form class="">
                  <!-- Login -->
                  <div id="login">
                    <!-- Title -->
                    <header class="border-bottom px-4 px-md-6 py-4">
                      <h2 class="font-size-3 mb-0 d-flex align-items-center">
                        <i class="flaticon-user mr-3 font-size-5"></i>
                        Account
                      </h2>
                    </header>
                    <!-- End Title -->
                  </div>
                  <transition name="fade">
                    <div class="p-4 p-md-6" v-if="signIn">
                      <!-- Form Group -->
                      <div class="form-group mb-4">
                        <div class="js-form-message js-focus-state">
                          <label
                            id="signinEmailLabel"
                            class="form-label"
                            for="signinEmail"
                          >
                            Username or email *
                          </label>
                          <input
                            type="email"
                            class="form-control rounded-0 height-4 px-4"
                            name="email"
                            id="signinEmail"
                            placeholder="creativelayers088@gmail.com"
                            aria-label="creativelayers088@gmail.com"
                            aria-describedby="signinEmailLabel"
                            required=""
                          />
                        </div>
                      </div>

                      <div class="form-group mb-4">
                        <div class="js-form-message js-focus-state">
                          <label
                            id="signinPasswordLabel"
                            class="form-label"
                            for="signinPassword"
                          >
                            Password *
                          </label>
                          <input
                            type="password"
                            class="form-control rounded-0 height-4 px-4"
                            name="password"
                            id="signinPassword"
                            placeholder=""
                            aria-label=""
                            aria-describedby="signinPasswordLabel"
                            required=""
                          />
                        </div>
                      </div>

                      <div
                        class="d-flex justify-content-between mb-5 align-items-center"
                      >
                        <div class="js-form-message">
                          <div
                            class="custom-control custom-checkbox d-flex align-items-center text-muted"
                          >
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="termsCheckbox"
                              name="termsCheckbox"
                              required=""
                            />
                            <label
                              class="custom-control-label"
                              for="termsCheckbox"
                            >
                              <span class="font-size-2 text-secondary-gray-700">
                                Remember me
                              </span>
                            </label>
                          </div>
                        </div>
                        <button
                          class="js-animation-link btn text-dark font-size-2 t-d-u link-muted font-weight-medium"
                          @click="setting('forgotPassword')"
                        >
                          Forgot Password?
                        </button>
                      </div>
                      <div class="mb-4d75">
                        <button
                          type="submit"
                          class="btn btn-block py-3 rounded-0 btn-dark"
                        >
                          Sign In
                        </button>
                      </div>

                      <div class="mb-4d75">
                        <button
                          class="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
                          @click="setting('signUp')"
                        >
                          New Account
                        </button>
                      </div>
                      <div class="mb-4d75">
                        <button
                          class="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
                          @click="setting('signUp')"
                        >
                          New Publisher Account
                        </button>
                      </div>
                    </div>
                  </transition>
                  <transition name="fade">
                    <div id="signup" v-if="signUp">
                      <!-- Title -->
                      <header class="border-bottom px-4 px-md-6 py-4">
                        <h2 class="font-size-3 mb-0 d-flex align-items-center">
                          <i class="flaticon-resume mr-3 font-size-5"></i>
                          Create Account
                        </h2>
                      </header>
                      <!-- End Title -->

                      <div class="p-4 p-md-6">
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel"
                              class="form-label"
                              for="firstname"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              class="form-control rounded-0 height-4 px-4"
                              name="name"
                              id="firstname"
                              placeholder="First name"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel"
                              class="form-label"
                              for="lastname"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              class="form-control rounded-0 height-4 px-4"
                              name="name"
                              id="lastname"
                              placeholder="Last name"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel"
                              class="form-label"
                              for="phone"
                            >
                              Phone
                            </label>
                            <input
                              type="phone"
                              class="form-control rounded-0 height-4 px-4"
                              name="name"
                              id="phone"
                              placeholder="Phone"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel"
                              class="form-label"
                              for="authorphone"
                            >
                              Author phone
                            </label>
                            <input
                              type="phone"
                              class="form-control rounded-0 height-4 px-4"
                              name="name"
                              id="authorphone"
                              placeholder="Author phone"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label class="form-label" for="email">
                              Email Address
                            </label>
                            <input
                              type="email"
                              class="form-control rounded-0 height-4 px-4"
                              name="email"
                              id="email"
                              placeholder="Enter Your Email Address"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel"
                              class="form-label"
                              for="country"
                            >
                              Country
                            </label>
                            <input
                              type="text"
                              class="form-control rounded-0 height-4 px-4"
                              name="country"
                              id="country"
                              placeholder="Country"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel"
                              class="form-label"
                              for="address"
                            >
                              Address
                            </label>
                            <input
                              type="text"
                              class="form-control rounded-0 height-4 px-4"
                              name="address"
                              id="address"
                              placeholder="Address"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel"
                              class="form-label"
                              for="governorate"
                            >
                              Governorate
                            </label>
                            <input
                              type="text"
                              class="form-control rounded-0 height-4 px-4"
                              name="governorate"
                              id="governorate"
                              placeholder="Governorate"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel"
                              class="form-label"
                              for="city"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              class="form-control rounded-0 height-4 px-4"
                              name="city"
                              id="city"
                              placeholder="City"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label class="form-label" for="Password">
                              Password *
                            </label>
                            <input
                              type="password"
                              class="form-control rounded-0 height-4 px-4"
                              name="password"
                              id="Password"
                              placeholder="Enter Your Password..."
                              required
                            />
                          </div>
                        </div>
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label class="form-label" for="cPassword">
                              Confirm Password *
                            </label>
                            <input
                              type="password"
                              class="form-control rounded-0 height-4 px-4"
                              name="password"
                              id="cPassword"
                              placeholder="Confirm Password"
                              required
                            />
                          </div>
                        </div>

                        <div class="mb-4d75">
                          <button
                            type="submit"
                            class="btn btn-block py-3 rounded-0 btn-dark"
                          >
                            Create Account
                          </button>
                          <div class="text-center mb-4">
                            <span class="small text-muted">
                              Already have an account?
                            </span>
                            <button
                              class="js-animation-link small btn"
                              @click="setting('signIn')"
                            >
                              Login
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                  <transition name="fade">
                    <div id="forgotPassword" v-if="forgotPassword">
                      <!-- Title -->
                      <header class="border-bottom px-4 px-md-6 py-4">
                        <h2 class="font-size-3 mb-0 d-flex align-items-center">
                          <i class="flaticon-question mr-3 font-size-5"></i>
                          Forgot Password?
                        </h2>
                      </header>
                      <!-- End Title -->

                      <div class="p-4 p-md-6">
                        <!-- Form Group -->
                        <div class="form-group mb-4">
                          <div class="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel3"
                              class="form-label"
                              for="signinEmail3"
                            >
                              Email *
                            </label>
                            <input
                              type="email"
                              class="form-control rounded-0 height-4 px-4"
                              name="email"
                              id="signinEmail3"
                              placeholder="creativelayers088@gmail.com"
                              aria-label="creativelayers088@gmail.com"
                              aria-describedby="signinEmailLabel3"
                              required=""
                            />
                          </div>
                        </div>

                        <div class="mb-3">
                          <button
                            type="submit"
                            class="btn btn-block py-3 rounded-0 btn-dark"
                          >
                            Recover Password
                          </button>
                        </div>
                        <div class="text-center mb-4">
                          <span class="small text-muted">
                            Remember your password?
                          </span>
                          <button
                            class="js-animation-link small btn"
                            @click="setting('signIn')"
                          >
                            Login
                          </button>
                        </div>
                      </div>
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
