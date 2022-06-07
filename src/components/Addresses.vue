<template>
  <div class="pt-5 px-2 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-2 mb-lg-4">
    <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-5 mb-lg-8 pb-xl-1">
      {{ $t('misc.Addresses') }}
    </h6>
    <div class="row addresses">
      <div
        class="col-sm-5 address mb-4 p-2 border"
        v-for="address in addresses"
        :key="address.id"
      >
        <h6 class="font-weight-medium font-size-22 mb-3">
          {{ $t('misc.Shipping Address') }}
        </h6>
        <address class="d-flex flex-column mb-4">
          <span class="text-gray-600 font-size-2">{{ address.address }}</span>

          <span class="text-gray-600 font-size-2">
            {{ address.city.name }}
          </span>
          <span class="text-gray-600 font-size-2">
            {{ address.governorate.name }}
          </span>
          <span class="text-gray-600 font-size-2">
            {{ address.country.name }}
          </span>
          <span class="text-gray-600 font-size-2">
            {{ address.phone_number }}
          </span>
        </address>
        <div class="row">
          <div class="col">
            <button
              @click="openFrmEdit(address.id)"
              class="btn btn-dark w-100 mt-2 rounded-0 btn-wide font-weight-medium"
            >
              {{ $t('misc.Edit') }}
            </button>
          </div>
          <div class="col">
            <Deleter :id="address.id" />
          </div>

          <FrmEditAddress
            @openFrmEdit="selectedItem = 0"
            v-if="address.id == selectedItem"
            :id="address.id"
          />
        </div>
      </div>
      <div
        class="col-sm-5 address d-flex align-items-center justify-content-center flex-column new mb-4 p-2 border"
      >
        <h6 class="font-weight-medium font-size-22 mb-3">
          {{ $t('misc.New Address') }}
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
    <FrmNewAddress v-if="addNew" @openFrmNew="openFrmNew" />
  </transition>
</template>

<script>
// import addresses from '@/addresses.json'
import FrmEditAddress from './FrmEditAddress.vue'
import FrmNewAddress from './FrmNewAddress.vue'
import Deleter from './Deleter.vue'
export default {
  data() {
    return {
      selectedItem: 0,
      EditAddress: false,
      addNew: false,
      addresses: null,
      addresse: null,
    }
  },
  mounted() {
    this.getAddresses()
  },
  methods: {
    openFrmNew() {
      this.addNew = !this.addNew
    },
    openFrmEdit(id) {
      this.selectedItem = id
      this.EditAddress = !this.EditAddress
    },

    getAddresses() {
      this.axios.get('shippingAddress/shippingAddresses').then((data) => {
        this.addresses = data.data.data
      })
    },
  },
  components: { FrmEditAddress, FrmNewAddress, Deleter },
}
</script>

<style scoped lang="scss">
.addresses .address {
  // margin: 0 10px;
  min-height: 200px;
}
</style>
