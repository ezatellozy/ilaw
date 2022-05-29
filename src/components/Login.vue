<template>
  <form @submit.prevent="login">
    <div class="form-group mb-4">
      <div class="js-form-message js-focus-state">
        <label id="signinEmailLabel" class="form-label" for="signinEmail">
          {{ $t('misc.Username or email') }} *
        </label>
        <input
          type="email"
          class="form-control rounded-0 height-4 px-4"
          name="email"
          id="signinEmail"
          :placeholder="$t('misc.Username or email')"
          aria-describedby="signinEmailLabel"
          required=""
          v-model="form.email"
        />
      </div>
    </div>

    <div class="form-group mb-4">
      <div class="js-form-message js-focus-state">
        <label id="signinPasswordLabel" class="form-label" for="signinPassword">
          {{ $t('misc.Password') }} *
        </label>
        <input
          type="password"
          class="form-control rounded-0 height-4 px-4"
          name="password"
          id="signinPassword"
          placeholder=""
          aria-label=""
          required=""
          v-model="form.password"
        />
      </div>
    </div>

    <div class="d-flex justify-content-between mb-5 align-items-center">
      <div class="js-form-message">
        <div
          class="custom-control custom-checkbox d-flex align-items-center text-muted"
        >
          <input
            type="checkbox"
            class="custom-control-input"
            id="termsCheckbox"
            name="termsCheckbox"
            v-model="rememberMe"
          />
          <label class="custom-control-label" for="termsCheckbox">
            <span class="font-size-2 text-secondary-gray-700">
              {{ $t('misc.Remember me') }}
            </span>
          </label>
        </div>
      </div>
      <button
        class="js-animation-link btn text-dark font-size-2 t-d-u link-muted font-weight-medium"
        @click="setting('forgotPassword')"
      >
        {{ $t('misc.Forgot Password?') }}
      </button>
    </div>
    <div class="mb-4d75">
      <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">
        Sign In
      </button>
    </div>

    <div class="mb-4d75">
      <button
        class="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
        @click="setting('signUp')"
      >
        {{ $t('misc.New Account') }}
      </button>
    </div>
    <div class="mb-4d75">
      <button
        class="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
        @click="setting('signUp')"
      >
        {{ $t('misc.New Publisher Account') }}
      </button>
    </div>
  </form>
</template>

<script>
import { useStore } from 'vuex'
import { reactive, ref } from 'vue'
export default {
  methods: {
    setting(e) {
      this.$emit('setting', e)
    },
  },
  setup() {
    const store = useStore()
    const form = reactive({
      email: '',
      password: '',
    })
    const rememberMe = ref(null)

    function login() {
      store.dispatch('login', form)
      // console.log(email.value, password.value, rememberMe.value)
    }

    return { form, rememberMe, login }
  },
}
</script>

<style></style>
