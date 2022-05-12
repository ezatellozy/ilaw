<template>
  <form class="col-6 mx-auto mb-5">
    <div id="login" data-target-group="idForm">
      <header class="border-bottom px-4 px-md-6 py-4">
        <h2 class="font-size-3 mb-0 d-flex align-items-center">
          <i class="flaticon-user mr-3 font-size-5"></i>
          Account
        </h2>
      </header>

      <div class="p-4 p-md-6">
        <div class="form-group mb-4">
          <div class="js-form-message js-focus-state">
            <label id="signinEmailLabel" class="form-label" for="signinEmail">
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
                required=""
              />
              <label class="custom-control-label" for="termsCheckbox">
                <span class="font-size-2 text-secondary-gray-700">
                  Remember me
                </span>
              </label>
            </div>
          </div>
          <router-link
            class="js-animation-link text-dark font-size-2 t-d-u link-muted font-weight-medium"
            to="/reset-password"
          >
            Forgot Password?
          </router-link>
          <!-- <a
            class="js-animation-link text-dark font-size-2 t-d-u link-muted font-weight-medium"
            href="/forgot-password"
            data-target="#forgotPassword"
            data-link-group="idForm"
            data-animation-in="fadeIn"
          >
            Forgot Password?
          </a> -->
        </div>
        <div class="mb-4d75">
          <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">
            Sign In
          </button>
        </div>
        <div class="mb-2">
          <router-link
            class="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
            to="/register"
          >
            Create Account
          </router-link>
        </div>
      </div>
    </div>

    <!-- <div
      id="signup"
      style="display: none; opacity: 0;"
      data-target-group="idForm"
    >
      <header class="border-bottom px-4 px-md-6 py-4">
        <h2 class="font-size-3 mb-0 d-flex align-items-center">
          <i class="flaticon-resume mr-3 font-size-5"></i>
          Create Account
        </h2>
      </header>

      <div class="p-4 p-md-6">
        <div class="form-group mb-4">
          <div class="js-form-message js-focus-state">
            <label id="signinEmailLabel1" class="form-label" for="signinEmail1">
              Email *
            </label>
            <input
              type="email"
              class="form-control rounded-0 height-4 px-4"
              name="email"
              id="signinEmail1"
              placeholder="creativelayers088@gmail.com"
              aria-label="creativelayers088@gmail.com"
              aria-describedby="signinEmailLabel1"
              required=""
            />
          </div>
        </div>

        <div class="form-group mb-4">
          <div class="js-form-message js-focus-state">
            <label
              id="signinPasswordLabel1"
              class="form-label"
              for="signinPassword1"
            >
              Password *
            </label>
            <input
              type="password"
              class="form-control rounded-0 height-4 px-4"
              name="password"
              id="signinPassword1"
              placeholder=""
              aria-label=""
              aria-describedby="signinPasswordLabel1"
              required=""
            />
          </div>
        </div>

        <div class="form-group mb-4">
          <div class="js-form-message js-focus-state">
            <label
              id="signupConfirmPasswordLabel"
              class="form-label"
              for="signupConfirmPassword"
            >
              Confirm Password *
            </label>
            <input
              type="password"
              class="form-control rounded-0 height-4 px-4"
              name="confirmPassword"
              id="signupConfirmPassword"
              placeholder=""
              aria-label=""
              aria-describedby="signupConfirmPasswordLabel"
              required=""
            />
          </div>
        </div>

        <div class="mb-3">
          <a href="" class="btn btn-block py-3 rounded-0 btn-dark">
            Create Account
          </a>
        </div>
        <div class="text-center mb-4">
          <span class="small text-muted">Already have an account?</span>
          <a
            class="js-animation-link small"
            href="javascript:;"
            data-target="#login"
            data-link-group="idForm"
            data-animation-in="fadeIn"
          >
            Login
          </a>
        </div>
      </div>
    </div> -->
  </form>
  <!-- <div class="col-4 mx-auto my-5">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <a href="#" class="d-block text-right">Forget password</a>
      <div class="text-center">
        <b-button type="submit" variant="primary">Login</b-button>
      </div>
    </b-form>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
    }
  },
}
</script>

<style></style>
