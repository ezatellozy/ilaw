<template>
  <header class="border-bottom px-4 px-md-6 py-4">
    <h2 class="font-size-3 mb-0 d-flex align-items-center">
      <i class="flaticon-resume mr-3 font-size-5"></i>
      Create Account
    </h2>
  </header>
  <!-- End Title -->

  <div class="p-4 p-md-6">
    <form class="" @submit.prevent="register">
      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="name">
            Name
          </label>
          <input
            type="text"
            class="form-control rounded-0 height-4 px-4"
            name="name"
            id="name"
            placeholder="Your name"
            v-model="form.name"
            required=""
          />
        </div>
      </div>
      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="lastname">
            User name
          </label>
          <input
            type="text"
            class="form-control rounded-0 height-4 px-4"
            name="name"
            id="lastname"
            v-model="form.user_name"
            placeholder="User name"
            required=""
          />
        </div>
      </div>
      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="phone">
            Phone
          </label>
          <input
            type="phone"
            class="form-control rounded-0 height-4 px-4"
            name="name"
            id="phone"
            placeholder="Phone"
            v-model="form.phone"
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
            v-model="form.email"
          />
        </div>
      </div>

      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="address">
            Address
          </label>
          <input
            type="text"
            class="form-control rounded-0 height-4 px-4"
            name="address"
            id="address"
            placeholder="Address"
            v-model="form.address"
            required
          />
        </div>
      </div>

      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="country">
            Country
          </label>
          <select
            name="country"
            id="country"
            required=""
            v-model="form.country_id"
            @change="getGovernment($event)"
            class="form-select rounded-0 height-4 px-4"
          >
            <option value="" disabled>Select country</option>
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
      <div class="form-group mb-4" v-if="governments">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="governorate">
            Governorate
          </label>
          <select
            v-model="form.governorate_id"
            name="governorate"
            id="governorate"
            required=""
            class="form-select rounded-0 height-4 px-4"
          >
            <option value="" disabled>Select government</option>
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
          <label id="signinEmailLabel" class="form-label" for="city">
            City
          </label>
          <select
            v-model="form.city_id"
            name="city"
            id="city"
            required=""
            class="form-select rounded-0 height-4 px-4"
          >
            <option value="" disabled>Select city</option>
            <option v-for="city in cities" :key="city.id" :value="city.id">
              {{ city.name }}
            </option>
          </select>
          <!-- <input
            type="text"
            class="form-control"
            name="city"
            id="city"
            placeholder="City"
            required=""
          /> -->
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
            v-model="form.password"
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
            v-model="form.cPassword"
            required
          />
        </div>
      </div>

      <div class="mb-4d75">
        <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">
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
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
// import useVuelidate from '@vuelidate/core'
// import { required, email } from '@vuelidate/validators'
import axios from 'axios'
export default {
  data() {
    return {
      countries: null,
      governments: null,
      cities: null,
    }
  },
  mounted() {
    this.getCountries()
    this.getCities()
    // this.getGovernment()
  },
  methods: {
    setting(e) {
      this.$emit('setting', e)
    },
    getCountries() {
      axios.get('countries/countries').then((res) => {
        this.countries = res.data.data
      })
    },
    getCities() {
      axios.get('cities/cities').then((res) => {
        this.cities = res.data.data
      })
    },
    getGovernment(e) {
      console.log(e)
      axios.get(`governorates/governorates/`).then((res) => {
        this.governments = res.data.data
      })
    },
  },
  setup() {
    const store = useStore()
    const form = reactive({
      name: '',
      user_name: '',
      phone: '',
      email: '',
      country_id: '',
      address: '',
      governorate_id: '',
      city_id: '',
      password: '',
      cPassword: '',
    })
    // let countries = null
    // const rules = [
    //   firstName: { required }, // Matches state.firstName
    //   lastName: { required }, // Matches state.lastName
    //   contact: {
    //     email: { required, email } // Matches state.contact.email
    // ]

    // function fetchCuntries() {

    // }
    console.log(store.getters.isLoggedIn)
    function register() {
      store.dispatch('register', form)
    }

    return {
      form,
      register,
      // countries,
    }
  },
}
</script>

<style></style>
