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
    <div v-if="getCodeSection">
      <form @submit.prevent="getCode">
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
              required=""
              v-model="email"
            />
          </div>
        </div>

        <div class="mb-3">
          <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">
            <Loading v-if="loading" />
            <span v-else>
              {{ $t('buttons.Recover Password') }}
            </span>
          </button>
        </div>
      </form>
      <div class="text-center mb-4">
        <span class="small text-muted">
          {{ $t('buttons.Remember your password?') }}
        </span>
        <button
          type="button"
          class="js-animation-link small btn"
          @click="setting('signIn')"
        >
          {{ $t('buttons.Login') }}
        </button>
      </div>
    </div>
    <div v-else>
      <form @submit.prevent="resetPassword">
        <div class="form-group mb-4">
          <div class="js-form-message js-focus-state">
            <label class="form-label" for="code">{{ $t('misc.code') }} *</label>
            <input
              type="text"
              class="form-control rounded-0 height-4 px-4"
              name="code"
              id="code"
              :placeholder="$t('placeholder.Enter code')"
              v-model="form.code"
            />
            <div v-for="error of v$.code.$errors" :key="error.$uid">
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

        <div class="mb-3">
          <button type="submit" class="btn btn-block py-3 rounded-0 btn-dark">
            {{ $t('buttons.Save Changes') }}
          </button>
        </div>
      </form>
      <div class="text-center mb-4">
        <span class="small text-muted">
          {{ $t('buttons.Remember your password?') }}
        </span>
        <button class="js-animation-link small btn" @click="setting('signIn')">
          {{ $t('buttons.Login') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, sameAs } from '@vuelidate/validators'
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
export default {
  components: { Loading },

  emits: ['settings'],
  setup(props, { emit }) {
    const store = useStore()
    const email = ref('')
    const loading = ref(false)
    const getCodeSection = ref(true)
    const form = reactive({
      code: '',
      password: '',
      cPassword: '',
    })
    const rules = computed(() => {
      return {
        code: { required },
        password: { required },
        cPassword: {
          required,
          sameAsPassword: sameAs(form.password),
        },
      }
    })

    function getCode() {
      loading.value = true
      axios.post('sendResetCode', { email: email.value }).then((data) => {
        console.log(data)
        store.commit('message', data.data.message)
        store.commit('popupMode', 'success')
        store.commit('popup')

        if (data.data.status == 'success') {
          getCodeSection.value = !getCodeSection.value
        }
        loading.value = false
      })
    }

    const v$ = useVuelidate(rules, form)
    async function resetPassword() {
      const isFormCorrect = await this.v$.$validate()

      if (isFormCorrect) {
        loading.value = true
        axios
          .post('/resetMyPassword', {
            email: email.value,
            resetCode: form.code,
            password: form.password,
          })
          .then((data) => {
            console.log(data)
            store.commit('message', data.data.message)
            store.commit('popupMode', 'success')
            store.commit('popup')

            if (data.data.status == 'success') {
              getCodeSection.value = !getCodeSection.value
              store.dispatch('logout')
              setting('signIn')
            }
            loading.value = false
          })
      }
    }

    function setting(e) {
      emit('setting', e)
    }

    return {
      form,
      email,
      resetPassword,
      getCodeSection,
      getCode,
      loading,
      setting,
      v$,
    }
  },
}
</script>

<style></style>
