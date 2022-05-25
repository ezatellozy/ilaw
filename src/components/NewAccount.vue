<template>
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
        <label id="signinEmailLabel" class="form-label" for="firstname">
          First name
        </label>
        <input
          type="text"
          class="form-control rounded-0 height-4 px-4"
          name="name"
          id="firstname"
          placeholder="First name"
          v-model="firstName"
          required=""
        />
      </div>
    </div>
    <div class="form-group mb-4">
      <div class="js-form-message js-focus-state">
        <label id="signinEmailLabel" class="form-label" for="lastname">
          Last name
        </label>
        <input
          type="text"
          class="form-control rounded-0 height-4 px-4"
          name="name"
          id="lastname"
          v-model="lastName"
          placeholder="Last name"
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
          v-model="phone"
          required=""
        />
      </div>
    </div>
    <div class="form-group mb-4">
      <div class="js-form-message js-focus-state">
        <label id="signinEmailLabel" class="form-label" for="authorphone">
          Author phone
        </label>
        <input
          type="phone"
          class="form-control rounded-0 height-4 px-4"
          name="name"
          id="authorphone"
          placeholder="Author phone"
          v-model="authorPhone"
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
          v-model="email"
        />
      </div>
    </div>
    <div class="form-group mb-4">
      <div class="js-form-message js-focus-state">
        <label id="signinEmailLabel" class="form-label" for="country">
          Country
        </label>
        <input
          type="text"
          class="form-control rounded-0 height-4 px-4"
          name="country"
          id="country"
          placeholder="Country"
          required=""
          v-model="country"
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
          v-model="address"
          required=""
        />
      </div>
    </div>
    <div class="form-group mb-4">
      <div class="js-form-message js-focus-state">
        <label id="signinEmailLabel" class="form-label" for="governorate">
          Governorate
        </label>
        <input
          type="text"
          class="form-control rounded-0 height-4 px-4"
          name="governorate"
          id="governorate"
          placeholder="Governorate"
          required=""
          v-model="governorate"
        />
      </div>
    </div>
    <div class="form-group mb-4">
      <div class="js-form-message js-focus-state">
        <label id="signinEmailLabel" class="form-label" for="city">
          City
        </label>
        <input
          type="text"
          class="form-control rounded-0 height-4 px-4"
          name="city"
          id="city"
          placeholder="City"
          required=""
          v-model="city"
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
          v-model="password"
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
          v-model="cPassword"
          required
        />
      </div>
    </div>

    <div class="mb-4d75">
      <button @click="register" class="btn btn-block py-3 rounded-0 btn-dark">
        Create Account
      </button>
      <div class="text-center mb-4">
        <span class="small text-muted">
          Already have an account?
        </span>
        <button class="js-animation-link small btn" @click="setting('signIn')">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  methods: {
    setting(e) {
      this.$emit('setting', e)
    },
  },
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const authorPhone = ref('')
    const phone = ref('')
    const email = ref('')
    const country = ref('')
    const address = ref('')
    const governorate = ref('')
    const city = ref('')
    const password = ref('')
    const cPassword = ref('')

    function register() {
      console.log(
        email.value,
        firstName.value,
        lastName.value,
        authorPhone.value,
        phone.value,
        password.value,
      )
    }

    return {
      firstName,
      lastName,
      authorPhone,
      phone,
      email,
      country,
      address,
      password,
      governorate,
      city,
      cPassword,
      register,
    }
  },
}
</script>

<style></style>
