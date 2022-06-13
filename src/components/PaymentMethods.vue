<template>
  <div class="pt-5 px-2 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-2 mb-lg-4">
    <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-5 mb-lg-8 pb-xl-1">
      {{ $t('misc.Paymentmethods') }}
    </h6>
    <div class="row addresses">
      <div
        class="col-sm-5 address mb-4 p-2 border"
        v-for="payment in paymentMethods"
        :key="payment.id"
      >
        <h6 class="font-weight-medium font-size-22 mb-3">
          {{ $t('misc.PaymentMethod') }}
        </h6>
        <address class="d-flex flex-column mb-4">
          <span class="text-gray-600 font-size-2">{{ payment.name }}</span>

          <span class="text-gray-600 font-size-2">
            {{ payment.card_year }} /{{ payment.card_month }}
          </span>
          <span class="text-gray-600 font-size-2">
            {{ changeStr(payment.card_number) }}
          </span>
        </address>
        <div class="row">
          <div class="col">
            <button
              @click="openFrmEdit(payment.id)"
              class="btn btn-dark w-100 mt-2 rounded-0 btn-wide font-weight-medium"
            >
              {{ $t('misc.Edit') }}
            </button>
          </div>
          <div class="col">
            <Deleter :id="payment.id" name="/user/paymentMethods" />
          </div>
          <FrmEditPayment
            @openFrmEdit="selectedItem = 0"
            v-if="payment.id == selectedItem"
            :id="payment.id"
          />
        </div>
      </div>
      <div
        class="col-sm-5 address d-flex align-items-center justify-content-center flex-column new mb-4 p-2 border"
      >
        <h6 class="font-weight-medium font-size-22 mb-3">
          {{ $t('misc.NewPaymentmethod') }}
        </h6>

        <button
          @click="openFrmNew"
          class="btn fs-3 rounded-0 font-weight-medium"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
      </div>
    </div>
  </div>
  <transition name="fade">
    <FrmNewPayment v-if="addNew" @openFrmNew="openFrmNew" />
    <!-- <FrmNewAddress v-if="addNew" @openFrmNew="openFrmNew" /> -->
  </transition>
</template>

<script>
import FrmNewPayment from './payment/FrmNewPayment.vue'
import FrmEditPayment from './payment/FrmEditPayment.vue'
import Deleter from './Deleter.vue'
export default {
  // FrmNewAddress, DeleterFrm,EditAddress
  components: { FrmNewPayment, FrmEditPayment, Deleter },
  data() {
    return {
      selectedItem: 0,
      EditAddress: false,
      addNew: false,
      paymentMethods: null,
      addresse: null,
    }
  },
  mounted() {
    this.getPayments()
  },
  methods: {
    openFrmNew() {
      this.addNew = !this.addNew
    },
    openFrmEdit(id) {
      this.selectedItem = id
      this.EditAddress = !this.EditAddress
    },

    getPayments() {
      this.axios.get('/user/paymentMethods').then((data) => {
        this.paymentMethods = data.data.data
      })
    },
    changeStr(str) {
      let arr = str.split('').splice(str.length - 5)
      arr[0] = 'xxxxxxxxx'

      return arr.join('')
    },
  },
}
</script>

<style scoped lang="scss">
.addresses .address {
  // margin: 0 10px;
  min-height: 200px;
}
</style>
