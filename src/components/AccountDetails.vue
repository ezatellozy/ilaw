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
              v-model="name"
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
              disabled
              v-model="username"
            />
          </div>
        </div>
        <div class="col-md-12 mb-4">
          <div class="js-form-message">
            <label for="exampleFormControlInput3">
              {{ $t('misc.Email') }}
            </label>
            <input
              type="email"
              class="form-control rounded-0"
              name="email"
              disabled
              required=""
              v-model="email"
            />
          </div>
        </div>
        <div class="col-md-12 mb-4">
          <div class="js-form-message">
            <label for="exampleFormControlInput3">
              {{ $t('misc.address') }}
            </label>
            <input
              type="text"
              class="form-control rounded-0"
              name="address"
              required=""
              v-model="address"
            />
          </div>
        </div>

        <div class="col-md-12 mb-4">
          <div class="js-form-message">
            <label for="exampleFormControlInput4">
              {{ $t('misc.phone') }}
            </label>
            <input
              type="phone"
              class="form-control rounded-0"
              name="phone"
              required=""
              v-model="phone"
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
              class="form-select form-control rounded-0 height-4 px-4"
              v-model="defaultLanguage"
            >
              <!-- <option value="" disabled>{{ defaultLanguage }}</option> -->
              <option value="Arabic">العربية</option>
              <option value="English">English</option>
              <option value="France">France</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pl-md-5 pl-lg-9 space-bottom-2 space-bottom-lg-3">
    <div class="font-weight-medium font-size-22 mb-4 pb-xl-1">
      Password Change
    </div>
    <div class="row">
      <div class="col-md-12 mb-4">
        <div class="js-form-message">
          <label for="exampleFormControlInput5">
            Current Password
          </label>
          <input
            type="password"
            class="form-control rounded-0"
            name="name"
            id="exampleFormControlInput5"
            aria-label="Jack Wayley"
            required=""
            data-error-class="u-has-error"
            data-msg="Please enter your name."
            data-success-class="u-has-success"
          />
        </div>
      </div>
      <div class="col-md-12 mb-4">
        <div class="js-form-message">
          <label for="exampleFormControlInput6">New Password</label>
          <input
            type="password"
            class="form-control rounded-0"
            name="name"
            id="exampleFormControlInput6"
            aria-label="Jack Wayley"
            required=""
            data-error-class="u-has-error"
            data-msg="Please enter your name."
            data-success-class="u-has-success"
          />
        </div>
      </div>
      <div class="col-md-12 mb-5">
        <div class="js-form-message">
          <label for="exampleFormControlInput7">
            Confirm new password
          </label>
          <input
            type="password"
            class="form-control rounded-0"
            name="name"
            id="exampleFormControlInput7"
            aria-label="Jack Wayley"
            required=""
            data-error-class="u-has-error"
            data-msg="Please enter your name."
            data-success-class="u-has-success"
          />
        </div>
      </div>
      <div class="ml-3">
        <button
          type="submit"
          class="btn btn-wide btn-dark text-white rounded-0 transition-3d-hover height-60 width-390"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
// import Cookies from 'js-cookie'
export default {
  setup() {
    const user = JSON.parse(localStorage.getItem('user'))
    const username = user[0].user_name
    const email = user[0].email
    const name = ref(user[0].name)
    const phone = ref(user[0].phone)
    const address = ref(user[0].address)
    const defaultLanguage = ref(user[0].default_language)

    return { name, username, phone, email, address, defaultLanguage }
  },
}
</script>

<style></style>
