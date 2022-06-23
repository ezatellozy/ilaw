<template>
  <StripeElement :element="cardElement" @change="event = $event" />
  <button @click="registerCard">Add</button>
  <div v-if="event && event.error">{{ event.error.message }}</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useStripe, StripeElement } from 'vue-use-stripe'

export default defineComponent({
  components: { StripeElement },
  setup() {
    const event = ref(null)
    const {
      // elements.create('card', {
      //   postalCode: 123545,
      // })
      stripe,
      elements: [cardElement],
    } = useStripe({
      key:
        'pk_test_51LD4NMCFpxZuZ7GgdEHTVS4ZeguXdH79wvjEa9Fpy68KVD9pwkgJ4iwa3k9vK7M2nvY2giHrXGYoLPWjZJjSStRm0078bwyXVe',
      elements: [{ type: 'card', options: {} }],
    })

    const registerCard = () => {
      console.log(stripe.value)
      console.log(cardElement.value)
      if (event.value?.complete) {
        // Refer to the official docs to see all the Stripe instance properties.
        // E.g. https://stripe.com/docs/js/setup_intents/confirm_card_setup
        return stripe.value?.confirmCardSetup(
          'seti_1Kg25XCLU6thghKmYJlzkgEa_secret_LMlcrbhpUzEBR77GEGadRmbdoaUQnst',
          {
            payment_method: {
              card: cardElement.value,
            },
          },
        )
      }
    }

    return {
      event,
      cardElement,
      registerCard,
    }
  },
})
</script>

<style></style>
