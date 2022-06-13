<template>
  <div class="user-account">
    <div class="over" @click="close"></div>
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
                <div>
                  <header class="border-bottom px-4 px-md-6 py-4">
                    <div>
                      <button
                        type="button"
                        class="close ml-auto"
                        @click="close"
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
                      {{ $t('misc.New address') }}
                    </h2>
                  </header>
                </div>
                <form class="" @submit.prevent="addNewAddress">
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
                            v-model="form.country"
                            @change="getGovernment($event)"
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
                            v-model="form.governorate"
                            name="governorate"
                            id="governorate"
                            :disabled="!governments"
                            required=""
                            @change="getCities($event)"
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
                            v-model="form.city"
                            name="city"
                            id="city"
                            required=""
                            :disabled="!cities"
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
                          {{ $t('buttons.Add New Address') }}
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
import { reactive } from 'vue'
export default {
  props: ['item'],
  data() {
    return {
      addresse: null,
      signIn: true,
      signUp: false,
      forgotPassword: false,
      countries: null,

      governments: null,
      cities: null,
    }
  },
  mounted() {
    // this.getCountries()
    console.log(this.item)
  },
  methods: {
    setting(event) {
      this.signIn = false
      this.signUp = false
      this.forgotPassword = false
      this[event] = true
    },
    getCountries() {
      axios.get('countries', { headers: { value: 'id' } }).then((res) => {
        this.countries = res.data.data
      })
    },
    getGovernment(e) {
      console.log(e)
      // this.governments = null
      // axios.get(`governorates/${e.target.value}`).then((res) => {
      //   this.governments = res.data.data
      // })
    },
    getCities(e) {
      console.log(e)
      // this.cities = null
      // axios.get(`cites/${e.target.value}`).then((res) => {
      //   this.cities = res.data.data
      // })
    },
    close() {
      this.$emit('close')
    },
  },
  setup() {
    const form = reactive({
      postal_code: '',
      phone_number: '',
      country: '',
      address: '',
      governorate: '',
      city: '',
    })
    function addNewAddress() {
      axios
        .post('shippingAddress/shippingAddress', form)
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log('Error', err)
        })
    }
    return {
      form,
      addNewAddress,
      // countries,
    }
  },
}
</script>

<style></style>
