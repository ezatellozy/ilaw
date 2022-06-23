<template>
  <div class="user-account">
    <div class="over" @click="openFrmNew"></div>
    <aside
      id="sidebarContent"
      class="u-sidebar u-sidebar__lg"
      aria-labelledby="sidebarNavToggler"
    >
      <div class="u-sidebar__scroller">
        <div class="u-sidebar__container">
          <div class="u-header-sidebar__footer-offset">
            <!-- Content -->
            <div class="js-scrollbar u-sidebar__body">
              <div class="u-sidebar__content u-header-sidebar__content">
                <form class="" @submit.prevent="addNewPayment">
                  <div>
                    <header class="border-bottom px-4 px-md-6 py-4">
                      <div>
                        <button
                          type="button"
                          class="close ml-auto"
                          @click="openFrmNew"
                        >
                          <span aria-hidden="true">
                            {{ $t('misc.Close') }}
                            <i class="fas fa-times ml-2"></i>
                          </span>
                        </button>
                      </div>
                      <h2 class="font-size-3 mb-0 d-flex align-items-center">
                        <font-awesome-icon
                          class="mr-3"
                          size="lg"
                          :icon="['fas', 'location-dot']"
                        />
                        {{ $t('misc.NewPaymentmethod') }}
                      </h2>
                    </header>
                  </div>
                  <div id="new-address">
                    <div class="p-4 p-md-6">
                      <div class="form-group mb-4">
                        <div class="js-form-message js-focus-state">
                          <label class="form-label" for="holder name">
                            {{ $t('inputs.name') }}
                          </label>
                          <input
                            type="text"
                            class="form-control rounded-0 height-4 px-4"
                            name="holder name"
                            id="holder name"
                            :placeholder="$t('placeholder.card holder name')"
                            required=""
                            v-model="form.name"
                          />
                        </div>
                      </div>
                      <div class="form-group mb-4">
                        <div class="js-form-message js-focus-state">
                          <label class="form-label" for="cardNumber">
                            {{ $t('inputs.cardNumber') }}
                          </label>
                          <input
                            type="number"
                            class="form-control rounded-0 height-4 px-4"
                            name="cardNumber"
                            id="cardNumber"
                            :placeholder="$t('inputs.cardNumber')"
                            required=""
                            v-model="form.card_number"
                          />
                        </div>
                      </div>
                      <div class="form-group mb-4">
                        <div class="row">
                          <div class="col-6">
                            <div class="js-form-message js-focus-state">
                              <label class="form-label" for="Exp Year">
                                {{ $t('inputs.Exp Year') }}
                              </label>
                              <input
                                id="Exp Year"
                                type="number"
                                class="form-control rounded-0 height-4"
                                :placeholder="$t('placeholder.Exp Year')"
                                v-model="form.card_year"
                                required=""
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="js-form-message js-focus-state">
                              <label class="form-label" for="Exp Month">
                                {{ $t('inputs.Exp Month') }}
                              </label>
                              <input
                                id="Exp Month"
                                type="number"
                                class="form-control rounded-0 height-4"
                                :placeholder="$t('placeholder.Exp Month')"
                                v-model="form.card_month"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group mb-4">
                        <div class="row">
                          <div class="col-6">
                            <div class="js-form-message js-focus-state">
                              <label class="form-label" for="cvv">
                                {{ $t('inputs.cvv') }}
                              </label>
                              <input
                                id="cvv"
                                type="number"
                                class="form-control rounded-0 height-4"
                                :placeholder="$t('placeholder.cvv')"
                                v-model="form.card_cvv"
                                required=""
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="js-form-message js-focus-state">
                              <label
                                id="signinEmailLabel"
                                class="form-label"
                                for="primary"
                              >
                                {{ $t('misc.primary') }}
                              </label>
                              <select
                                name="primary"
                                id="primary"
                                required=""
                                v-model="form.primary"
                                class="form-select rounded-0 height-4 px-4"
                              >
                                <option value="0">
                                  {{ $t('misc.none') }}
                                </option>
                                <option value="1">
                                  {{ $t('misc.primary') }}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mb-4d75">
                        <button
                          type="submit"
                          class="btn btn-block py-3 rounded-0 btn-dark"
                        >
                          {{ $t('misc.NewPaymentmethod') }}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import axios from 'axios'
// import { useStore } from 'vuex'
import { inject } from 'vue'
import { reactive } from 'vue'
export default {
  methods: {
    openFrmNew() {
      this.$emit('openFrmNew')
    },
  },
  setup() {
    // const store = useStore()
    const toast = inject('toast')
    const form = reactive({
      name: '',
      card_number: '',
      card_cvv: '',
      card_month: '',
      card_year: '',
      primary: '0',
    })
    function addNewPayment() {
      axios
        .post('user/paymentMethods/create', form)
        .then((data) => {
          if (data.data.status == 'faild') {
            toast.error(data.data.message)
            return
          }
          toast.success(data.data.message)
          setTimeout(() => {
            window.location.reload()
          }, 300)
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }

    return {
      form,
      addNewPayment,
      // countries,
    }
  },
}
</script>

<style scoped lang="scss">
.user-account {
  .u-sidebar {
    opacity: 1;
  }
}

.user-account {
  .u-sidebar.u-sidebar__md.u-sidebar--left {
    z-index: 101;
  }
  .over {
    &::before {
      position: fixed;
      content: '';
      top: 0%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.63);
      z-index: 100;
    }
  }
}
</style>
