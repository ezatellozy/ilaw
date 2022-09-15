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
          :placeholder="$t('placeholder.Enter Your Password')"
          aria-label=""
          required=""
          v-model="form.password"
        />
      </div>
    </div>

    <div class="error-msg mb-2">{{ loginMessage }}</div>

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
      <a
        role="button"
        target="_blank"
        class="js-animation-link btn text-dark font-size-2 t-d-u link-muted font-weight-medium"
        :href="globalResetPassword"
      >
        {{ $t('misc.Forgot Password?') }}
      </a>
    </div>
    <div class="mb-4d75">
      <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">
        {{ $t('buttons.Login') }}
      </button>
    </div>
    <div class="py-2 text-center line">
      <span>{{ $t('misc.Or') }}</span>
    </div>
    <div class="d-flex justify-content-center mb-4">
      <div class="text-center btn-google">
        <a class="btn text-uppercase btn-outline" href="#">
          <span><i class="fa-brands fa-google"></i></span>
        </a>
      </div>
      <div class="text-center btn-face">
        <a class="btn text-uppercase btn-outline" href="#">
          <i class="fa-brands fa-facebook"></i>
        </a>
      </div>
    </div>
  </form>
  <div class="mb-4d75" v-if="!checkout">
    <button
      class="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
      @click="setting('signUpUser')"
    >
      {{ $t('misc.New Account') }}
    </button>
  </div>
  <div class="mb-4d75" v-if="!checkout">
    <a
      target="_blank"
      :href="PublisherLogin"
      class="vendor js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
    >
      {{ $t('buttons.Login as a vendor') }}
    </a>
  </div>

  <div class="mb-4d75" v-if="!checkout">
    <a
      target="_blank"
      :href="PublisherRegister"
      class="vendor js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
    >
      {{ $t('misc.New Publisher Account') }}
    </a>
    <!-- <button
      class="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
      @click="setting('signUpVendor')"
    >
      {{ $t('misc.New Publisher Account') }}
    </button> -->
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive, ref } from 'vue'
export default {
  props: ['checkout'],
  computed: {
    loginMessage() {
      return this.$store.getters.status
    },
  },
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
    }

    return { form, rememberMe, login }
  },
}
</script>

<style lang="scss">
a.vendor:hover {
  color: #fff !important;
}

.line {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    background: #f2f2f2;
  }
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 2;
  }
}
</style>
