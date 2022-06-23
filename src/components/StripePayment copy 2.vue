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
    const stripeKey = ref('pk_test_TYooMQauvdEDq54NiTphI7jx') // test key
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
    pay() {
      // Get stripe element
      const cardElement = this.card.stripeElement
      // Access instance methods, e.g. createToken()
      this.elms.instance.createToken(cardElement).then((result) => {
        // Handle result.error or result.token
        console.log(result)
      })
      console.log(this.card)
    },
  },
})
</script>

<style>
.InputContainer .InputElement {
  position: relative !important;
}
</style>
