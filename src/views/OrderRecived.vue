<template>
  <div class="bg-gray-200 space-bottom-3">
    <div class="container">
      <div class="py-5 py-lg-7">
        <h6 class="font-weight-medium font-size-7 text-center mt-lg-1">
          {{ $t('misc.Order Received') }}
        </h6>
      </div>
      <div class="max-width-890 mx-auto" v-if="order">
        <button
          class="btn btn-dark rounded-0 btn-wide font-weight-medium"
          @click="print"
        >
          {{ $t('buttons.Print') }}
          <font-awesome-icon class="ml-2 text-white" :icon="['fas', 'print']" />
        </button>
        <div class="bg-white pt-6 border" id="order-summary12">
          <h6 class="font-size-3 font-weight-medium text-center mb-4 pb-xl-1">
            {{ $t('misc.Thank youYour order has been received') }}
          </h6>
          <div class="border-bottom mb-5 pb-5">
            <div class="pl-3">
              <table class="table table-borderless mb-0 ml-1">
                <thead>
                  <tr class="text-center">
                    <th
                      scope="col"
                      class="font-size-2 font-weight-normal py-0 text-center"
                    >
                      {{ $t('misc.Order') }}
                    </th>
                    <th scope="col" class="font-size-2 font-weight-normal py-0">
                      {{ $t('misc.Date') }}
                    </th>
                    <th
                      scope="col"
                      class="font-size-2 font-weight-normal py-0 text-md-center"
                    >
                      {{ $t('misc.total') }}
                    </th>
                    <th
                      scope="col"
                      class="font-size-2 font-weight-normal py-0"
                      v-if="order.paymentMethod"
                    >
                      {{ $t('misc.PaymentMethod') }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-center">
                    <th scope="row" class="pr-0 py-0 font-weight-medium">
                      {{ order.id }}
                    </th>
                    <td class="pr-0 py-0 font-weight-medium">
                      {{ order.date }}
                    </td>
                    <td
                      class="pr-0 py-0 font-weight-medium text-md-center"
                      v-if="currency"
                    >
                      {{ order.total }}{{ currency.sympl }}
                    </td>
                    <td
                      class="pr-md-4 py-0 font-weight-medium"
                      v-if="order.paymentMethod"
                    >
                      {{ order.paymentMethod }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="border-bottom mb-5 pb-6">
            <div class="px-3 px-md-4">
              <div class="ml-md-2">
                <h6 class="font-size-3 on-weight-medium mb-4 pb-1">
                  {{ $t('misc.Order Details') }}
                </h6>
                <div
                  class="d-flex justify-content-between mb-4"
                  v-for="item in order.items"
                  :key="item.id"
                >
                  <div class="d-flex align-items-baseline">
                    <div>
                      <h6 class="font-size-2 font-weight-normal mb-1">
                        <bdi>{{ item.book.name }}</bdi>

                        <br />
                        {{ item.publisher.name }}
                      </h6>
                      <span class="font-size-2 text-gray-600">
                        {{ item.type }}
                      </span>
                    </div>
                    <span class="font-size-2 ml-4 ml-md-8">
                      <bdi>x</bdi>
                      <bdi>{{ item.quantity }}</bdi>
                    </span>
                  </div>
                  <span class="font-weight-medium font-size-2" v-if="currency">
                    {{ item.total }}{{ currency.sympl }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="border-bottom mb-5 pb-5">
            <ul class="list-unstyled px-3 pl-md-5 pr-md-4 mb-0">
              <li class="d-flex justify-content-between py-2">
                <span class="font-weight-medium font-size-2">
                  {{ $t('misc.total') }}
                </span>
                <span class="font-weight-medium font-size-2" v-if="currency">
                  {{ order.total }} {{ currency.sympl }}
                </span>
              </li>
              <li class="d-flex justify-content-between py-2">
                <span class="font-weight-medium font-size-2">
                  {{ $t('misc.Shipping') }}:
                </span>
                <span class="font-weight-medium font-size-2">
                  {{ order.shippingMethod }}
                </span>
              </li>
              <li
                class="d-flex justify-content-between pt-2"
                v-if="order.paymentMethod"
              >
                <span class="font-weight-medium font-size-2">
                  {{ $t('misc.PaymentMethod') }}
                </span>
                <span class="font-weight-medium font-size-2">
                  {{ order.paymentMethod }}
                </span>
              </li>
            </ul>
          </div>
          <div class="border-bottom mb-5 pb-4">
            <div class="px-3 pl-md-5 pr-md-4">
              <div class="d-flex justify-content-between">
                <span class="font-size-2 font-weight-medium">
                  {{ $t('misc.total') }}
                </span>
                <span class="font-weight-medium fon-size-2" v-if="currency">
                  {{ order.total }} {{ currency.sympl }}
                </span>
              </div>
            </div>
          </div>
          <div class="px-3 pl-md-5 pr-md-4 mb-6 pb-xl-1">
            <div class="">
              <h6 class="font-weight-medium font-size-22 mb-3">
                {{ $t('misc.Shipping Address') }}
              </h6>
              <address class="">
                <span class="text-gray-600 font-size-2">
                  {{ order.address.address }}
                  <bdi>/</bdi>
                </span>

                <span class="text-gray-600 font-size-2">
                  {{ order.address.city.name }}
                  <bdi>/</bdi>
                </span>
                <span class="text-gray-600 font-size-2">
                  {{ order.address.governorate.name }}
                  <bdi>/</bdi>
                </span>
                <span class="text-gray-600 font-size-2">
                  {{ order.address.country.name }}
                </span>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: null,
    }
  },
  mounted() {
    this.getOrder()
  },
  methods: {
    getOrder() {
      this.axios
        .get(`/user/orders/${this.$route.params.id}/details`)
        .then((data) => {
          this.order = data.data.data
        })
    },
    print() {
      let order = document.getElementById('order-summary12').innerHTML
      let originalContents = document.body.innerHTML
      document.body.innerHTML = order
      window.print()
      document.body.innerHTML = originalContents
      window.location.reload()
    },
  },
  watch: {
    $route() {
      this.getOrder()
    },
  },
  computed: {
    currency() {
      return this.$store.getters.currency
    },
  },
}
</script>

<style></style>
