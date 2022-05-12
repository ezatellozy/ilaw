<template>
  <form class="col-6 mx-auto mb-5">
    <div id="login" data-target-group="idForm">
      <header class="border-bottom px-4 px-md-6 py-4">
        <h2 class="font-size-3 mb-0 d-flex align-items-center">
          <i class="flaticon-resume mr-3 font-size-5"></i>
          Create Account
        </h2>
      </header>

      <div class="p-4 p-md-6">
        <div class="form-group mb-4">
          <div class="js-form-message js-focus-state">
            <label id="signinEmailLabel" class="form-label" for="name">
              Your Name
            </label>
            <input
              type="text"
              class="form-control rounded-0 height-4 px-4"
              name="name"
              id="name"
              placeholder="Your Name"
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
            />
          </div>
        </div>
        <div class="form-group mb-4">
          <div class="js-form-message js-focus-state">
            <label id="signinEmailLabel" class="form-label" for="Username">
              Username
            </label>
            <input
              type="text"
              class="form-control rounded-0 height-4 px-4"
              name="Username"
              id="Username"
              placeholder="Enter Your Username.."
              required=""
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
              required
            />
          </div>
        </div>

        <div class="mb-4d75">
          <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">
            Create Account
          </button>
          <div class="text-center mb-4">
            <span class="small text-muted">Already have an account?</span>
            <a class="js-animation-link small" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
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
          <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">
            Create Account
          </button>
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
    </div>

    <div
      id="forgotPassword"
      style="display: none; opacity: 0;"
      data-target-group="idForm"
    >
      <header class="border-bottom px-4 px-md-6 py-4">
        <h2 class="font-size-3 mb-0 d-flex align-items-center">
          <i class="flaticon-question mr-3 font-size-5"></i>
          Forgot Password?
        </h2>
      </header>

      <div class="p-4 p-md-6">
        <div class="form-group mb-4">
          <div class="js-form-message js-focus-state">
            <label id="signinEmailLabel3" class="form-label" for="signinEmail3">
              Email *
            </label>
            <input
              type="email"
              class="form-control rounded-0 height-4 px-4"
              name="email"
              id="signinEmail3"
              placeholder="creativelayers088@gmail.com"
              aria-label="creativelayers088@gmail.com"
              aria-describedby="signinEmailLabel3"
              required=""
            />
          </div>
        </div>

        <div class="mb-3">
          <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">
            Recover Password
          </button>
        </div>
        <div class="text-center mb-4">
          <span class="small text-muted">Remember your password?</span>
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
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style></style>
