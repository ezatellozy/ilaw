<template>
  <form class="uk-padding">
    <div class="uk-margin uk-text-center">
      <p class="stripeError" v-if="stripeError">
        {{ stripeError }}
      </p>
    </div>
    <div class="uk-margin uk-text-left">
      <label class="uk-form-label" for="Card Number">
        Card Number
      </label>
      <div class="uk-form-controls">
        <div
          id="card-number"
          class="uk-input"
          :class="{ 'uk-form-danger': cardNumberError }"
        ></div>
        <span class="help-block" v-if="cardNumberError">
          {{ cardNumberError }}
        </span>
      </div>
    </div>
    <div class="uk-grid-small uk-text-left" uk-grid>
      <div class="uk-width-1-2@s">
        <label class="uk-form-label" for="Card CVC">
          Card CVC
        </label>
        <div class="uk-form-controls">
          <div
            id="card-cvc"
            class="uk-input"
            :class="{ 'uk-form-danger': cardCvcError }"
          ></div>
          <span class="help-block" v-if="cardCvcError">
            {{ cardCvcError }}
          </span>
        </div>
      </div>
      <div class="uk-width-1-2@s">
        <label class="uk-form-label" for="Expiry Month">
          Expiry
        </label>
        <div class="uk-form-controls">
          <div
            id="card-expiry"
            class="uk-input"
            :class="{ 'uk-form-danger': cardExpiryError }"
          ></div>
          <span class="help-block" v-if="cardExpiryError">
            {{ cardExpiryError }}
          </span>
        </div>
      </div>
    </div>
    <div class="uk-margin uk-margin-remove-bottom uk-text-right">
      <button
        class="uk-button uk-button-small uk-button-default"
        @click.prevent="reset()"
      >
        Reset
      </button>
      <button
        class="uk-button uk-button-small uk-button-primary"
        @click.prevent="submitFormToCreateToken()"
      >
        <span v-if="loading">processing...</span>
        <span v-if="!loading">Donate $1200</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CardOnly',

  data() {
    return {
      card: {
        cvc: '',
        number: '',
        expiry: '',
      },
      //elements
      cardNumber: '',
      cardExpiry: '',
      cardCvc: '',
      stripe: null,
      // errors
      stripeError: '',
      cardCvcError: '',
      cardExpiryError: '',
      cardNumberError: '',
      loading: false,
    }
  },
  mounted() {
    this.setUpStripe()
  },
  methods: {
    setUpStripe() {
      if (window.Stripe === undefined) {
        alert('Stripe V3 library not loaded!')
      } else {
        const stripe = window.Stripe(
          'pk_test_51LD4NMCFpxZuZ7GgNPGY3aKFzMLXWGhog8vVVdtYBUFgYFgdbUrCZqkervSM9XmuHVQU546nACdxEj0anqvhCvkq00YsoK9vLX',
        )
        this.stripe = stripe

        const elements = stripe.elements()
        this.cardCvc = elements.create('cardCvc')
        this.cardExpiry = elements.create('cardExpiry')
        this.cardNumber = elements.create('cardNumber')

        this.cardCvc.mount('#card-cvc')
        this.cardExpiry.mount('#card-expiry')
        this.cardNumber.mount('#card-number')

        this.listenForErrors()
      }
    },

    listenForErrors() {
      const vm = this

      this.cardNumber.addEventListener('change', (event) => {
        vm.toggleError(event)
        vm.cardNumberError = ''
        vm.card.number = event.complete ? true : false
      })

      this.cardExpiry.addEventListener('change', (event) => {
        vm.toggleError(event)
        vm.cardExpiryError = ''
        vm.card.expiry = event.complete ? true : false
      })

      this.cardCvc.addEventListener('change', (event) => {
        vm.toggleError(event)
        vm.cardCvcError = ''
        vm.card.cvc = event.complete ? true : false
      })
    },

    toggleError(event) {
      if (event.error) {
        this.stripeError = event.error.message
      } else {
        this.stripeError = ''
      }
    },

    submitFormToCreateToken() {
      this.clearCardErrors()
      let valid = true

      if (!this.card.number) {
        valid = false
        this.cardNumberError = 'Card Number is Required'
      }
      if (!this.card.cvc) {
        valid = false
        this.cardCvcError = 'CVC is Required'
      }
      if (!this.card.expiry) {
        valid = false
        this.cardExpiryError = 'Month is Required'
      }
      if (this.stripeError) {
        valid = false
      }
      if (valid) {
        this.createToken()
      }
    },

    createToken() {
      // this.stripe.createToken(this.cardNumber).then((result) => {
      //   if (result.error) {
      //     this.stripeError = result.error.message
      //   } else {
      //     const token = result.token.id
      //     console.log(token)
      //     //send the token to your server
      //     //clear the inputs
      //   }

      this.stripe.createToken(this.cardNumber).then((result) => {
        if (result.error) {
          this.stripeValidationError = result.error.message
        } else if (result.token) {
          console.log('token', result.token)

          // let user = this.stripe.customers.create({
          //   email: 'xxxx@gmail.com',
          //   payment_method: result.token.id,
          // })
          // console.log(this.stripe)
          // this.stripe.createPaymentMethod({
          //   amount: 25 * 100, // $25
          //   currency: 'usd',
          //   // customer: user,
          // })
        }
      })

      //  this.stripe
      //   .createPaymentMethod({
      //     type: 'card',
      //     card: this.cardNumber,
      //     billing_details: {
      //       name: 'Jenny Rosen',
      //     },
      //   })
      //   .then((result) => {
      //     console.log(result)

      //     const stripe = require('stripe')('sk_test_xxxxxxxxxxxxxxxxxxxxx');
      //     let user =  stripe.customers.create({ email: 'ezat@gmail.com', payment_method: token });
      //      stripe.paymentIntents.create({
      //       amount: 25 * 100, // $25
      //       currency: 'usd',
      //       customer: user
      //     })
      //   })
      // console.log(this.stripe)
      // let amount = 1000
      // this.stripe.updatePaymentIntent({
      //   amount,
      //   currency: 'usd',
      //   payment_method_types: ['card'],
      //   metadata: { uid: 'some_userID' },
      // })
      // this.stripe
      //   .retrievePaymentIntent(
      //     'pi_1EnkCdCLU6thghKmdb4hLYsy_secret_QSwO5XeANoP2d6gJXOlV8i6pH',
      //   )
      //   .then((result) => {
      //     console.log(result)
      //   })

      //   this.stripe.paymentRequest({
      //     currency: 'aed',
      //     total: {
      //       label: 'Demo total',
      //       amount: 1000,
      //     },
      //     country: 'AE',
      //   })
      // })
    },

    clearElementsInputs() {
      this.cardCvc.clear()
      this.cardExpiry.clear()
      this.cardNumber.clear()
    },

    clearCardErrors() {
      this.stripeError = ''
      this.cardCvcError = ''
      this.cardExpiryError = ''
      this.cardNumberError = ''
    },

    reset() {
      this.clearElementsInputs()
      this.clearCardErrors()
    },
  },
}
</script>

<style>
[v-cloak] {
  display: none;
}

.help-block {
  color: red;
  font-size: 13px;
}

form {
  border-width: 2px;
  border-style: solid;
  border-color: yellow;
}

label.uk-form-label {
  color: blue;
}

button.uk-button-primary {
  color: yellow;
  font-weight: bold;
  background-color: #1e87f0;
}

#card-number,
#card-cvc,
#card-expiry {
  padding-top: 10px;
}

.stripeError {
  color: red;
  font-style: italic;
}
</style>
