<template>
  <div class="user-account">
    <div class="over" @click="openFrmEdit"></div>
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
                <form class="" @submit.prevent="updateAddress">
                  <div>
                    <header class="border-bottom px-4 px-md-6 py-4">
                      <div>
                        <button
                          type="button"
                          class="close ml-auto"
                          @click="openFrmEdit"
                        >
                          <span aria-hidden="true">
                            {{ $t('misc.Close') }}
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
                        {{ $t('misc.Edit address') }}
                      </h2>
                    </header>
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
                            {{ $t('misc.Country') }}
                          </label>
                          <select
                            name="country"
                            id="country"
                            required=""
                            v-model="form.country_id"
                            @change="updateGovernment(form.country_id)"
                            class="form-select rounded-0 height-4 px-4"
                          >
                            <option value="" disabled>
                              {{ $t('misc.Select country') }}
                            </option>
                            <option
                              v-for="country in countries"
                              :key="country.id"
                              :value="country.id"
                            >
                              {{ country.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group mb-4">
                        <div class="js-form-message js-focus-state">
                          <label
                            id="signinEmailLabel"
                            class="form-label"
                            for="governorate"
                          >
                            {{ $t('misc.Governorate') }}
                          </label>
                          <select
                            v-model="form.governorate_id"
                            name="governorate"
                            id="governorate"
                            required=""
                            @change="getCities(form.governorate_id)"
                            class="form-select rounded-0 height-4 px-4"
                          >
                            <option value="" disabled>
                              {{ $t('misc.Select government') }}
                            </option>
                            <option
                              v-for="government in governments"
                              :key="government.id"
                              :value="government.id"
                            >
                              {{ government.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group mb-4">
                        <div class="js-form-message js-focus-state">
                          <label
                            id="signinEmailLabel"
                            class="form-label"
                            for="city"
                          >
                            {{ $t('misc.City') }}
                          </label>
                          <select
                            v-model="form.city_id"
                            name="city"
                            id="city"
                            required=""
                            class="form-select rounded-0 height-4 px-4"
                          >
                            <option value="" disabled>
                              {{ $t('misc.Select city') }}
                            </option>
                            <option
                              v-for="city in cities"
                              :key="city.id"
                              :value="city.id"
                            >
                              {{ city.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group mb-4">
                        <div class="js-form-message js-focus-state">
                          <label class="form-label" for="address">
                            {{ $t('misc.address') }}
                          </label>
                          <input
                            type="text"
                            class="form-control rounded-0 height-4 px-4"
                            name="address"
                            id="address"
                            :placeholder="$t('placeholder.Enter Your Address')"
                            required=""
                            v-model="form.address"
                          />
                        </div>
                      </div>
                      <div class="form-group mb-4">
                        <div class="js-form-message js-focus-state">
                          <label class="form-label" for="city">
                            {{ $t('inputs.phone') }}
                          </label>
                          <input
                            type="phone"
                            class="form-control rounded-0 height-4 px-4"
                            :placeholder="
                              $t('placeholder.Please enter your phone')
                            "
                            v-model="form.phone_number"
                            required=""
                          />
                        </div>
                      </div>
                      <div class="form-group mb-4">
                        <div class="js-form-message js-focus-state">
                          <label class="form-label" for="postalcode">
                            {{ $t('inputs.Postal code') }}
                          </label>
                          <input
                            type="text"
                            class="form-control rounded-0 height-4 px-4"
                            name="postal code"
                            id="postalcode"
                            :placeholder="$t('inputs.Postal code')"
                            required=""
                            v-model="form.postal_code"
                          />
                        </div>
                      </div>

                      <div class="mb-4d75">
                        <button
                          type="submit"
                          class="btn btn-block py-3 rounded-0 btn-dark"
                        >
                          {{ $t('misc.Edit') }}
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
import axios from 'axios'

export default {
  props: ['id'],
  data() {
    return {
      form: {
        postal_code: '',
        phone_number: '',
        country_id: '',
        address: '',
        governorate_id: '',
        city_id: '',
      },
      signIn: true,
      signUp: false,
      forgotPassword: false,
      countries: null,
      governments: null,
      cities: null,
    }
  },
  mounted() {
    this.getAddress()
    this.getCountries()
    this.getGovernment()
    this.getCities()
  },
  methods: {
    getAddress() {
      axios
        .get(`shippingAddress/shippingAddress/${this.id}`)
        .then(({ data }) => {
          let reasult = data.data
          this.form.address = reasult.address
          this.form.postal_code = reasult.postal_code
          this.form.phone_number = reasult.phone_number
          this.form.governorate_id = reasult.governorate.id
          this.form.city_id = reasult.city.id
          this.form.country_id = reasult.country.id
        })
        .finally(() => {
          this.getGovernment(this.form.country_id)
          this.getCities(this.form.governorate_id)
        })
    },
    getCountries() {
      axios.get('countries/countries').then((res) => {
        this.countries = res.data.data
      })
    },
    getGovernment(id) {
      axios.get(`governorates/${id}`).then((res) => {
        this.governments = res.data.data
      })
    },
    updateGovernment(id) {
      this.governments = null
      this.cities = null
      this.form.governorate_id = ''
      this.form.city_id = ''
      axios.get(`governorates/${id}`).then((res) => {
        this.governments = res.data.data
      })
    },
    getCities(id) {
      this.cities = ''
      axios.get(`cites/${id}`).then((res) => {
        this.cities = res.data.data
      })
    },
    openFrmEdit() {
      this.$emit('openFrmEdit')
    },
    updateAddress() {
      this.axios
        .post(`shippingAddress/shippingAddresses/${this.id}`, this.form)
        .then((data) => {
          this.$toast.success(data.data.message)
          setTimeout(() => {
            window.location.reload()
          }, 300)
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
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
