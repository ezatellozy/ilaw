<template>
  <div class="user-account">
    <div class="over" @click="openFrmNew"></div>
    <aside
      id="sidebarContent"
      class="u-sidebar u-sidebar__lg"
      aria-labelledby="sidebarNavToggler"
    >
      <div class="u-sidebar__scroller">
        <div class="u-sidebar__container">
          <div class="u-header-sidebar__footer-offset">
            <!-- Content -->
            <div class="js-scrollbar u-sidebar__body">
              <div class="u-sidebar__content u-header-sidebar__content">
                <form class="">
                  <!-- Login -->
                  <div id="login">
                    <!-- Title -->
                    <header class="border-bottom px-4 px-md-6 py-4">
                      <div>
                        <button
                          type="button"
                          class="close ml-auto"
                          @click="openFrmNew"
                        >
                          <span aria-hidden="true">
                            Close
                            <i class="fas fa-times ml-2"></i>
                          </span>
                        </button>
                      </div>
                      <h2 class="font-size-3 mb-0 d-flex align-items-center">
                        <font-awesome-icon
                          class="mr-3"
                          size="lg"
                          :icon="['fas', 'location-dot']"
                        />
                        New address
                      </h2>
                    </header>
                    <!-- End Title -->
                  </div>

                  <div id="new-address">
                    <div class="p-4 p-md-6">
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
                          <label class="form-label" for="governorate">
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
                          <label class="form-label" for="city">
                            Phone
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
                          <label class="form-label" for="postalcode">
                            Postal code
                          </label>
                          <input
                            type="text"
                            class="form-control rounded-0 height-4 px-4"
                            name="postal code"
                            id="postalcode"
                            placeholder="Postal code"
                            required=""
                          />
                        </div>
                      </div>
                      <div class="form-group mb-4">
                        <div class="js-form-message js-focus-state">
                          <label class="form-label" for="address">
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
                          <label class="form-label" for="phonenumber">
                            Phone number
                          </label>
                          <input
                            type="text"
                            class="form-control rounded-0 height-4 px-4"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder="Phone number"
                            required=""
                          />
                        </div>
                      </div>

                      <div class="mb-4d75">
                        <button
                          type="submit"
                          class="btn btn-block py-3 rounded-0 btn-dark"
                        >
                          Add New Account
                        </button>
                      </div>
                    </div>
                  </div>
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
    openFrmNew() {
      this.$emit('openFrmNew')
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
