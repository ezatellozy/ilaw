<template>
  <StripeCheckout
    ref="checkoutRef"
    mode="payment"
    :pk="publishableKey"
    :line-items="lineItems"
    :success-url="successURL"
    :cancel-url="cancelURL"
    locale="none"
    @loading="(v) => (loading = v)"
  />
  <button
    class="button alt btn btn-dark btn-block rounded-0"
    type="button"
    @click="submit"
  >
    {{ $t('misc.Pay now') }}
  </button>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe'

export default {
  nuxtI18n: false,
  name: 'CardOnly',
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey =
      'pk_test_51LD4NMCFpxZuZ7GgdEHTVS4ZeguXdH79wvjEa9Fpy68KVD9pwkgJ4iwa3k9vK7M2nvY2giHrXGYoLPWjZJjSStRm0078bwyXVe'
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1LDPCFCFpxZuZ7GgJfAckr1y', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:8080/success',
      cancelURL: 'http://localhost:8080/error',
    }
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout()
    },
  },
  mounted() {},
}
</script>

<style>
.InputContainer .InputElement {
  position: relative !important;
}
</style>
