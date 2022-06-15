<template>
  <header class="border-bottom px-4 px-md-6 py-4">
    <h2 class="font-size-3 mb-0 d-flex align-items-center">
      <i
        class="flaticon-resume font-size-5"
        :class="$i18n.locale == 'ar' ? ' ml-3' : ' mr-3'"
      ></i>
      {{ $t('misc.New Account') }}
    </h2>
  </header>
  <!-- End Title -->

  <div class="p-4 p-md-6">
    <form id="identicalForm" class="" @submit.prevent="register">
      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="name">
            {{ $t('inputs.name') }}
          </label>
          <input
            type="text"
            class="form-control rounded-0 height-4 px-4"
            name="name"
            id="name"
            :placeholder="$t('placeholder.Please enter your name')"
            v-model="form.name"
          />
          <div v-for="error of v$.name.$errors" :key="error.$uid">
            <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
          </div>
        </div>
      </div>
      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="lastname">
            {{ $t('inputs.username') }}
          </label>
          <input
            type="text"
            class="form-control rounded-0 height-4 px-4"
            name="name"
            id="lastname"
            v-model="form.userName"
            :placeholder="$t('inputs.username')"
          />
          <div v-for="error of v$.userName.$errors" :key="error.$uid">
            <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
          </div>
          <div>
            <div class="error-msg">{{ usernamestatus }}</div>
          </div>
        </div>
      </div>
      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="phone">
            {{ $t('inputs.phone') }}
          </label>
          <input
            type="phone"
            class="form-control rounded-0 height-4 px-4"
            name="name"
            id="phone"
            :placeholder="$t('placeholder.Please enter your phone')"
            v-model="form.phone"
          />
          <div v-for="error of v$.phone.$errors" :key="error.$uid">
            <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
          </div>
          <div>
            <div class="error-msg">{{ phoneStatus }}</div>
          </div>
        </div>
      </div>
      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label class="form-label" for="email">
            {{ $t('inputs.Email Address') }}
          </label>
          <input
            type="email"
            class="form-control rounded-0 height-4 px-4"
            name="email"
            id="email"
            :placeholder="$t('placeholder.Enter Your Email Address')"
            v-model="form.email"
          />
          <div v-for="error of v$.email.$errors" :key="error.$uid">
            <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
          </div>
          <div>
            <div class="error-msg">{{ emailstatus }}</div>
          </div>
        </div>
      </div>

      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="address">
            {{ $t('misc.address') }}
          </label>
          <input
            type="text"
            class="form-control rounded-0 height-4 px-4"
            name="address"
            id="address"
            :placeholder="$t('misc.address')"
            v-model="form.address"
          />
          <div v-for="error of v$.address.$errors" :key="error.$uid">
            <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
          </div>
        </div>
      </div>

      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="country">
            {{ $t('misc.Country') }}
          </label>
          <select
            name="country"
            id="country"
            v-model="form.country"
            @change="getGovernment($event)"
            class="form-select rounded-0 height-4 px-4"
          >
            <option value="" disabled>{{ $t('misc.Select country') }}</option>
            <option
              v-for="country in countries"
              :key="country.id"
              :value="country.id"
            >
              {{ country.name }}
            </option>
          </select>
          <div v-for="error of v$.country.$errors" :key="error.$uid">
            <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
          </div>
        </div>
      </div>
      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="governorate">
            {{ $t('misc.Governorate') }}
          </label>
          <select
            v-model="form.governorate"
            name="governorate"
            id="governorate"
            :disabled="!governments"
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
          <div v-for="error of v$.governorate.$errors" :key="error.$uid">
            <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
          </div>
        </div>
      </div>
      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label id="signinEmailLabel" class="form-label" for="city">
            {{ $t('misc.City') }}
          </label>
          <select
            v-model="form.city"
            name="city"
            id="city"
            :disabled="!cities"
            class="form-select rounded-0 height-4 px-4"
          >
            <option value="" disabled>{{ $t('misc.Select city') }}</option>
            <option v-for="city in cities" :key="city.id" :value="city.id">
              {{ city.name }}
            </option>
          </select>
          <div v-for="error of v$.city.$errors" :key="error.$uid">
            <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
          </div>
        </div>
      </div>
      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label class="form-label" for="Password">
            {{ $t('misc.Password') }} *
          </label>
          <input
            type="password"
            class="form-control rounded-0 height-4 px-4"
            name="password"
            id="Password"
            :placeholder="$t('placeholder.Enter Your Password')"
            v-model="form.password"
          />
          <div v-for="error of v$.password.$errors" :key="error.$uid">
            <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
          </div>
        </div>
      </div>
      <div class="form-group mb-4">
        <div class="js-form-message js-focus-state">
          <label class="form-label" for="cPassword">
            {{ $t('misc.Confirm password') }} *
          </label>
          <input
            type="password"
            class="form-control rounded-0 height-4 px-4"
            name="confirmPassword"
            id="confirmPassword"
            :placeholder="$t('misc.Confirm password')"
            v-model="form.cPassword"
          />
          <div v-for="error of v$.cPassword.$errors" :key="error.$uid">
            <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
          </div>
        </div>
      </div>

      <div class="error-msg mb-4">{{ registerErr }}</div>
      <div class="mb-4d75">
        <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">
          {{ $t('misc.Create account') }}
        </button>
        <div class="text-center mb-4">
          <span class="small text-muted">
            {{ $t('misc.Already have an account?') }}
          </span>
          <button
            class="js-animation-link small btn"
            @click="setting('signIn')"
          >
            {{ $t('buttons.Login') }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import useVuelidate from '@vuelidate/core'
import {
  required,
  email,
  sameAs,
  numeric,
  minLength,
} from '@vuelidate/validators'
import axios from 'axios'
export default {
  props: ['urlRoute'],
  data() {
    return {
      countries: null,
      governments: null,
      cities: null,
      countryId: '',
    }
  },
  mounted() {
    this.getCountries()
  },
  methods: {
    setting(e) {
      this.$emit('setting', e)
    },
    getCountries() {
      axios.get('countries', { headers: { value: 'id' } }).then((res) => {
        this.countries = res.data.data
      })
    },
    getGovernment(e) {
      this.countryId = e.target.value
      this.governments = null
      axios.get(`countries/${e.target.value}/governorates`).then((res) => {
        this.governments = res.data.data
      })
    },
    getCities(e) {
      this.cities = null
      axios
        .get(
          `countries/${this.countryId}/governorates/${e.target.value}/cities`,
        )
        .then((res) => {
          this.cities = res.data.data
        })
    },
  },
  computed: {
    registerErr() {
      return this.$store.getters.status
    },
    usernamestatus() {
      return this.$store.getters.usernamestatus
    },
    emailstatus() {
      return this.$store.getters.emailstatus
    },
    phoneStatus() {
      return this.$store.getters.phoneStatus
    },
  },
  setup(props) {
    const store = useStore()
    const form = reactive({
      name: '',
      userName: '',
      phone: '',
      email: '',
      country: '',
      address: '',
      governorate: '',
      city: '',
      password: '',
      cPassword: '',
    })
    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(3) },
        userName: { required },
        email: { required, email },
        phone: {
          required,
          numeric,
          minLength: minLength(9),
        },
        country: { required },
        address: { required },
        governorate: { required },
        city: { required },
        password: { required },
        cPassword: {
          required,
          sameAsPassword: sameAs(form.password),
        },
      }
    })

    const v$ = useVuelidate(rules, form)
    async function register() {
      const isFormCorrect = await this.v$.$validate()

      if (isFormCorrect) {
        store.dispatch('register', [form, props.urlRoute])
      }
    }
    return {
      form,
      register,
      v$,
    }
  },
}
</script>

<style>
.error-msg {
  font-size: 14px;
  text-align: center;
  color: red;
}
</style>
