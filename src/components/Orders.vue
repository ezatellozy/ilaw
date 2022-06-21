<template>
  <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-lg-2 mb-lg-4">
    <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">
      {{ $t('misc.Orders') }}
    </h6>
    <table class="table">
      <thead>
        <tr class="border">
          <th
            scope="col"
            class="py-3 border-bottom-0 font-weight-medium pl-3 pl-lg-5"
          >
            {{ $t('misc.Order') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.Date') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.Status') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.total') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.Actions') }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr class="border" v-for="item in orders" :key="item.id">
          <th class="pl-3 pl-md-5 font-weight-normal align-middle py-6">
            <bdi>#</bdi>
            {{ item.id }}
          </th>
          <td class="align-middle py-5">{{ item.date }}</td>
          <td class="align-middle py-5">{{ item.status }}</td>
          <td class="align-middle py-5">
            <span class="text-primary" v-if="currency">
              {{ item.total }} {{ currency.sympl }}
            </span>
            -
            <bdi>{{ $t('misc.for') }}</bdi>
            {{ item.itemsCount }}
            <bdi>{{ $t('misc.items') }}</bdi>
          </td>
          <td class="align-middle py-5">
            <div class="d-flex justify-content-center">
              <router-link
                :to="`/order-recived/${item.id}`"
                class="btn btn-dark rounded-0 btn-wide font-weight-medium"
              >
                {{ $t('misc.View') }}
              </router-link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: null,
    }
  },
  mounted() {
    this.getOrders()
  },
  methods: {
    getOrders() {
      this.axios.get('/user/orders').then((data) => {
        this.orders = data.data.data
      })
    },
  },
  computed: {
    currency() {
      return this.$store.getters.currency
    },
  },
}
</script>

<style scoped lang="scss">
.is-rtl {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  tr,
  th,
  div,
  li {
    text-align: right;
    direction: rtl;
  }
}
</style>
