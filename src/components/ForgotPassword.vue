<template>
  <header class="border-bottom px-4 px-md-6 py-4">
    <h2 class="font-size-3 mb-0 d-flex align-items-center">
      <i class="flaticon-question mr-3 font-size-5"></i>
      {{ $t('misc.Forgot Password?') }}
    </h2>
  </header>
  <!-- End Title -->

  <div class="p-4 p-md-6">
    <!-- Form Group -->
    <div class="form-group mb-4">
      <div class="js-form-message js-focus-state">
        <label id="signinEmailLabel3" class="form-label" for="signinEmail3">
          {{ $t('misc.Email') }} *
        </label>
        <input
          type="email"
          class="form-control rounded-0 height-4 px-4"
          name="email"
          id="signinEmail3"
          placeholder="info@ilaw.com"
          aria-describedby="signinEmailLabel3"
          required=""
        />
      </div>
    </div>

    <div class="mb-3">
      <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">
        {{("buttons.Recover Password")}}
      </button>
    </div>
    <div class="text-center mb-4">
      <span class="small text-muted">
        {{ $t('buttons.Remember your password?') }}
      </span>
      <button class="js-animation-link small btn" @click="setting('signIn')">
        {{ $t('buttons.Login') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setting(e) {
      this.$emit('setting', e)
    },
  },
}
</script>

<style></style>
