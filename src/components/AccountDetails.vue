<template>
  <div class="border-bottom mb-6 pb-6 mb-lg-8 pb-lg-9">
    <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9">
      <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">
        {{ $t('misc.Account Details') }}
      </h6>
      <div class="font-weight-medium font-size-22 mb-4 pb-xl-1">
        {{ $t('misc.Edit Account') }}
      </div>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="js-form-message">
            <label for="exampleFormControlInput1">
              {{ $t('inputs.name') }}
            </label>
            <input
              type="text"
              class="form-control rounded-0 pl-3 placeholder-color-3"
              name="name"
              :placeholder="$t('placeholder.Please enter your name')"
              required=""
              v-model="accountDetails.name"
            />
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="js-form-message">
            <label for="exampleFormControlInput2">
              {{ $t('inputs.username') }}
            </label>
            <input
              type="text"
              class="form-control rounded-0 pl-3 placeholder-color-3"
              id="exampleFormControlInput2"
              name="username"
              required=""
              v-model="accountDetails.userName"
            />
          </div>
        </div>
        <div class="col-md-12 mb-4">
          <div class="js-form-message">
            <label for="exampleFormControlInput3">
              {{ $t('misc.Email Address') }}
            </label>
            <input
              type="email"
              class="form-control rounded-0"
              name="email"
              required=""
              v-model="accountDetails.email"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group mb-4">
            <div class="js-form-message js-focus-state">
              <label id="signinEmailLabel" class="form-label" for="country">
                {{ $t('misc.Country') }}
              </label>
              <select
                name="country"
                id="country"
                v-model="accountDetails.country"
                @change="getGovernment($event)"
                class="form-select rounded-0 height-4"
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
        </div>
        <div class="col-md-4">
          <div class="form-group mb-4">
            <div class="js-form-message js-focus-state">
              <label id="signinEmailLabel" class="form-label" for="governorate">
                {{ $t('misc.Governorate') }}
              </label>
              <select
                v-model="accountDetails.governorate"
                name="governorate"
                id="governorate"
                @change="getCities($event)"
                class="form-select rounded-0 height-4"
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
        </div>
        <div class="col-md-4">
          <div class="form-group mb-4">
            <div class="js-form-message js-focus-state">
              <label id="signinEmailLabel" class="form-label" for="city">
                {{ $t('misc.City') }}
              </label>
              <select
                v-model="accountDetails.city"
                name="city"
                id="city"
                class="form-select rounded-0 height-4"
              >
                <option value="" disabled>{{ $t('misc.Select city') }}</option>
                <option v-for="city in cities" :key="city.id" :value="city.id">
                  {{ city.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-md-12 mb-4">
          <div class="js-form-message">
            <label for="exampleFormControlInput3">
              {{ $t('inputs.address') }}
            </label>
            <input
              type="text"
              class="form-control rounded-0"
              name="address"
              :placeholder="$t('placeholder.Enter Your Address')"
              required=""
              v-model="accountDetails.address"
            />
          </div>
        </div>
        <div class="col-md-12 mb-4">
          <div class="js-form-message">
            <label for="exampleFormControlInput4">
              {{ $t('inputs.phone') }}
            </label>
            <input
              type="phone"
              class="form-control rounded-0"
              name="phone"
              required=""
              v-model="accountDetails.phone"
              :placeholder="$t('placeholder.Please enter your phone')"
            />
          </div>
        </div>
        <div class="col-md-12 mb-4 mb-md-0">
          <div class="js-form-message js-focus-state">
            <label id="signinEmailLabel" class="form-label" for="country">
              {{ $t('misc.defaultLanguage') }}
            </label>
            <select
              name="country"
              id="country"
              required=""
              class="form-select form-control rounded-0 height-4"
              v-model="accountDetails.language"
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
              <option value="fr">France</option>
            </select>
          </div>
          <div class="error-msg" v-if="profileErr">{{ profileErr }}</div>
        </div>

        <div class="mt-3">
          <button
            @click="updateProfile"
            class="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-390"
          >
            {{ $t('buttons.Save Changes') }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="pl-md-5 pl-lg-9 space-bottom-2 space-bottom-lg-3">
    <div class="font-weight-medium font-size-22 mb-4 pb-xl-1">
      {{ $t('misc.changePassword') }}
    </div>
    <form @submit.prevent="changePassword">
      <div class="row">
        <div class="col-md-12 mb-4">
          <div class="js-form-message">
            <label for="exampleFormControlInput5">
              {{ $t('misc.Current password') }}
            </label>
            <input
              type="password"
              class="form-control rounded-0"
              name="name"
              v-model="oldPassword"
              :placeholder="$t('misc.Current password')"
            />
            <div v-for="error of v$.oldPassword.$errors" :key="error.$uid">
              <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-12 mb-4">
          <div class="js-form-message">
            <label for="exampleFormControlInput6">
              {{ $t('misc.New Password') }}
            </label>
            <input
              type="password"
              class="form-control rounded-0"
              name="name"
              v-model="password"
              :placeholder="$t('misc.New Password')"
            />
            <div v-for="error of v$.password.$errors" :key="error.$uid">
              <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-12 mb-5">
          <div class="js-form-message">
            <label for="exampleFormControlInput7">
              {{ $t('misc.Confirm new password') }}
            </label>
            <input
              type="password"
              class="form-control rounded-0"
              name="name"
              :placeholder="$t('misc.Confirm new password')"
              v-model="cPassword"
            />
            <div v-for="error of v$.cPassword.$errors" :key="error.$uid">
              <div class="error-msg">{{ $t(`misc.${error.$message}`) }}</div>
            </div>
          </div>
        </div>
        <div>
          <button
            @click="changePassword"
            class="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-390"
          >
            {{ $t('buttons.Save Changes') }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import { ref, reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, sameAs } from '@vuelidate/validators'
import Cookie from 'js-cookie'
import axios from 'axios'
export default {
  data() {
    return {
      accountDetails: {
        name: '',
        userName: '',
        country: '',
        phone: '',
        email: '',
        governorate: '',
        city: '',
        address: '',
        language: '',
      },

      oldPassword: '',
      password: '',
      cPassword: '',
      profileErr: '',
      countries: null,
      governments: null,
      cities: null,
      test: true,
    }
  },
  mounted() {
    this.getProfile()
    this.getCountries()
  },
  methods: {
    getCountries() {
      axios.get('countries', { headers: { value: 'id' } }).then((res) => {
        this.countries = res.data.data
      })
    },
    getGovernment(e) {
      this.governments = null
      let url = ''
      if (e == undefined) {
        url = `countries/${this.countryId}/governorates`
      } else {
        this.cities = null
        this.accountDetails.governorate = ''
        this.accountDetails.city = ''
        url = `countries/${e.target.value}/governorates`
      }
      axios.get(`${url}`).then((res) => {
        this.governments = res.data.data
      })
    },
    getCities(e) {
      this.cities = null
      let url = ''
      if (e == undefined) {
        url = `countries/${this.countryId}/governorates/${this.governmentId}/cities`
      } else {
        url = `countries/${this.countryId}/governorates/${e.target.value}/cities`
      }
      axios.get(`${url}`).then((res) => {
        this.cities = res.data.data
      })
    },
    getProfile() {
      axios.get('user/my-profile').then((data) => {
        let result = data.data.data
        this.accountDetails.name = result.name
        this.accountDetails.userName = result.userName
        this.accountDetails.country = result.country.id
        this.accountDetails.phone = result.phone
        this.accountDetails.email = result.email
        this.accountDetails.governorate = result.governorate.id
        this.accountDetails.city = result.city.id
        this.accountDetails.address = result.address
        this.accountDetails.language = result.language
      })
    },
    updateProfile() {
      axios
        .post('user/update-my-profile', this.accountDetails, {
          headers: {
            'Accept-Language': Cookie.get('locale'),
          },
        })
        .then((res) => {
          if (res.data.status == 'faild') {
            this.profileErr = res.data.message
            return
          }
          Cookie.set('locale', this.accountDetails.language)
          this.$toast.success(res.data.message)
          setTimeout(() => {
            window.location.reload()
          }, 300)
        })
    },
    async changePassword() {
      const isFormCorrect = await this.v$.$validate()
      if (isFormCorrect) {
        let frmdata = new FormData()
        frmdata.append('name', this.accountDetails.name)
        frmdata.append('userName', this.accountDetails.userName)
        frmdata.append('country', this.accountDetails.country)
        frmdata.append('phone', this.accountDetails.phone)
        frmdata.append('city', this.accountDetails.city)
        frmdata.append('email', this.accountDetails.email)
        frmdata.append('governorate', this.accountDetails.governorate)
        frmdata.append('address', this.accountDetails.address)
        frmdata.append('language', this.accountDetails.language)
        frmdata.append('password', this.password)
        axios.post('user/update-my-profile', frmdata).then((data) => {
          if (data.data.status == 'faild') {
            this.profileErr = data.data.message
            return
          }
          this.$store.dispatch('logout')
          this.$toast.success(data.data.message)
          setTimeout(() => {
            window.location.reload()
          }, 300)
        })
      }
    },
  },
  computed: {
    countryId() {
      return this.accountDetails.country
    },
    governmentId() {
      return this.accountDetails.governorate
    },
  },
  watch: {
    countryId: function (n) {
      if (n) {
        this.getGovernment()
      }
    },
    governmentId: function (n) {
      if (n) {
        this.getCities()
      }
    },
  },
  validations() {
    return {
      oldPassword: { required },
      password: { required },
      cPassword: {
        required,
        sameAsPassword: sameAs(this.password),
      },
    }
  },
  setup() {
    return { v$: useVuelidate() }
  },
}
</script>

<style scoped lang="scss">
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
