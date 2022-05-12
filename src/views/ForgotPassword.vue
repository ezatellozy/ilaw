<template>
  <div class="col-6 mx-auto" id="forgotPassword" data-target-group="idForm">
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
          href="/login"
          data-target="#login"
          data-link-group="idForm"
          data-animation-in="fadeIn"
        >
          Login
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
