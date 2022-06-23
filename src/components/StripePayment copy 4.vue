<template>
  <StripeElements
    v-if="stripeLoaded"
    v-slot="{ elements }"
    ref="elms"
    :stripe-key="stripeKey"
    :instance-options="instanceOptions"
    :elements-options="elementsOptions"
  >
    <StripeElement type="cardNumber" :elements="elements" ref="card" />
    <StripeElement type="cardExpiry" :elements="elements" ref="card" />
    <StripeElement type="cardCvc" :elements="elements" ref="card" />

    <StripeElement type="postalCode" ref="card" :elements="elements" />
  </StripeElements>
  <button type="button" @click="pay">Pay</button>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from 'vue'
import { loadStripe } from '@stripe/stripe-js'
import { StripeElements, StripeElement } from 'vue-stripe-js'

export default defineComponent({
  name: 'CardOnly',
  components: {
    StripeElements,
    StripeElement,
  },
  setup() {
    const stripeKey = ref(
      'pk_test_51LD4NMCFpxZuZ7GgdEHTVS4ZeguXdH79wvjEa9Fpy68KVD9pwkgJ4iwa3k9vK7M2nvY2giHrXGYoLPWjZJjSStRm0078bwyXVe',
    ) // test key
    const instanceOptions = ref({})
    const elementsOptions = ref({})
    const cardNumberOptions = ref({
      value: {
        cardNumber: '',
      },
    })
    const cardExpiry = ref({
      value: {
        cardExpiry: '',
      },
    })
    const cardCvc = ref({
      value: {
        cardCvc: '',
      },
    })
    const cardOptions = ref({
      value: {
        postalCode: '',
      },
    })
    const stripeLoaded = ref(false)
    const card = ref()
    const elms = ref()
    onBeforeMount(() => {
      const stripePromise = loadStripe(stripeKey.value)
      stripePromise.then(() => {
        stripeLoaded.value = true
      })
    })
    return {
      stripeKey,
      stripeLoaded,
      instanceOptions,
      elementsOptions,
      cardExpiry,
      cardCvc,
      cardOptions,
      cardNumberOptions,
      card,
      elms,
    }
  },

  methods: {
    data() {
      return {
        token: null,
      }
    },
    async pay() {
      // Get stripe element
      const cardElement = this.card.stripeElement
      // Access instance methods, e.g. createToken()
      await this.elms.instance.createToken(cardElement).then((result) => {
        // Handle result.error or result.token
        this.token = result.token
        console.log(this.token.id)
      })
      const clientSecert =
        'sk_test_51LD4NMCFpxZuZ7GgVevJnkY1WMZgxGe1YsWvD3bohYeqjbrF0UXnAPG6PloeN4ae7kfCSRwjdKOGlCCWhurJVY3T00I2z7KdD5'
      this.elms.instance
        .confirmPayment({
          clientSecert,
        })
        .then((result) => {
          console.log(result)
        })

      // await this.elms.instance.PaymentIntent(this.token).then((result) => {
      //   // Handle result.error or result.token
      //   console.log(result)
      // })

      // confirmCardPayment
    },
  },
})
</script>

<style>
.InputContainer .InputElement {
  position: relative !important;
}
</style>
