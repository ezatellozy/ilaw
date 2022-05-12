<template>
  <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-2 mb-lg-4">
    <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-5 mb-lg-8 pb-xl-1">
      Addresses
    </h6>
    <div class="row addresses">
      <div class="col-5 address mb-4 p-2 border">
        <div class="mb-6 mb-md-0">
          <h6 class="font-weight-medium font-size-22 mb-3">
            Billing Address
          </h6>
          <address class="d-flex flex-column mb-4">
            <span class="text-gray-600 font-size-2">Ali Tufan</span>
            <span class="text-gray-600 font-size-2">
              Bedford St,
            </span>
            <span class="text-gray-600 font-size-2">
              Covent Garden,
            </span>
            <span class="text-gray-600 font-size-2">
              London WC2E 9ED
            </span>
            <span class="text-gray-600 font-size-2">
              United Kingdom
            </span>
          </address>
          <div class="d-flex">
            <button
              type="submit"
              class="btn btn-dark width-150 rounded-0 btn-wide font-weight-medium"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div class="col-5 address mb-4 p-2 border">
        <h6 class="font-weight-medium font-size-22 mb-3">
          Shipping Address
        </h6>
        <address class="d-flex flex-column mb-4">
          <span class="text-gray-600 font-size-2">Ali Tufan</span>
          <span class="text-gray-600 font-size-2">Bedford St,</span>
          <span class="text-gray-600 font-size-2">
            Covent Garden,
          </span>
          <span class="text-gray-600 font-size-2">
            London WC2E 9ED
          </span>
          <span class="text-gray-600 font-size-2">
            United Kingdom
          </span>
        </address>
        <div class="d-flex">
          <button
            type="submit"
            class="btn btn-dark width-150 rounded-0 btn-wide font-weight-medium"
          >
            Edit
          </button>
        </div>
      </div>
      <div
        class="col-5 address d-flex align-items-center justify-content-center flex-column new mb-4 p-2 border"
      >
        <h6 class="font-weight-medium font-size-22 mb-3">
          New Address
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
    <frm-new-address v-if="addNew" @openFrmNew="openFrmNew" />
  </transition>
</template>

<script>
import FrmNewAddress from './FrmNewAddress.vue'
export default {
  components: { FrmNewAddress },
  data() {
    return {
      addNew: false,
    }
  },
  methods: {
    openFrmNew() {
      this.addNew = !this.addNew
    },
  },
}
</script>

<style scoped lang="scss">
.addresses .address {
  margin: 0 10px;
  min-height: 200px;
}
</style>
