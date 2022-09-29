<template>
  <div id="content" class="site-content space-bottom-3 checkout">
    <div class="col-full container">
      <div
        class="log border text-center mt-4 py-4 px-4 fs-4"
        v-if="!isLoggedIn"
      >
        <div class="row">
          <div class="col-md-6">
            <header class="border-bottom px-4 px-md-6 py-4">
              <h2 class="font-size-3 mb-0 d-flex align-items-center">
                <i class="flaticon-resume font-size-5 ml-3"></i>
                {{ $t('buttons.Login') }}
              </h2>
            </header>
            <div class="p-4">
              <Login checkout="true" />
            </div>
          </div>
          <div class="col-md-6">
            <header class="border-bottom px-4 px-md-6 py-4">
              <h2 class="font-size-3 mb-0 d-flex align-items-center">
                <i class="flaticon-resume font-size-5 ml-3"></i>
                {{ $t('misc.New Account') }}
              </h2>
            </header>
            <NewAccount checkout="true" />
          </div>
        </div>
      </div>

      <div id="primary" class="content-area" v-else>
        <main id="main" class="site-main">
          <article
            id="post-6"
            class="post-6 page type-page status-publish hentry"
          >
            <header class="entry-header space-top-2 space-bottom-1 mb-2">
              <h4 class="entry-title font-size-7 text-center">
                {{ $t('misc.Checkout') }}
              </h4>
            </header>
            <!-- .entry-header -->
            <div class="entry-content" v-if="cart">
              <div class="woocommerce d-block" v-if="cart.items.length">
                <div>
                  <form
                    name="checkout"
                    @submit.prevent="addNewAddress"
                    class="checkout woocommerce-checkout row mt-8"
                    :class="needAddress ? '' : 'justify-content-center'"
                  >
                    <div
                      class="col2-set col-md-7 col-lg-7 col-xl-8 mb-6 mb-md-0"
                    >
                      <div class="" id="customer_details" v-if="needAddress">
                        <div
                          class="addresses px-4 py-3 bg-white border"
                          v-if="addresses"
                        >
                          <h2 class="fs-4 mb-3">
                            {{ $t('misc.shipping addresses') }}
                          </h2>
                          <form>
                            <div
                              class="radio-check alert mb-2 alert-info"
                              v-for="address in addresses"
                              :key="address.id"
                            >
                              <input
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                :value="address.id"
                                v-model="selectedAddress"
                                @change="
                                  {
                                    getShippingCost, checkDisabled
                                  }
                                "
                              />
                              <label
                                class="form-check-label d-block"
                                for="flexRadioDefault1"
                              >
                                <bdi>{{ address.country.name }}</bdi>
                                -
                                <bdi>{{ address.address }}</bdi>
                                -
                                <bdi>{{ $t('misc.phonenumber') }} :</bdi>
                                <bdi>{{ address.phone }}</bdi>
                              </label>
                            </div>
                          </form>

                          <button
                            type="button"
                            class="d-block btn"
                            @click="newAddress = !newAddress"
                          >
                            <font-awesome-icon :icon="['fas', 'plus']" />
                            <bdi class="mx-2">{{ $t('misc.New Address') }}</bdi>
                          </button>
                        </div>
                        <transition name="fade">
                          <div
                            class="px-4 pt-5 bg-white border"
                            v-if="addresses || newAddress"
                          >
                            <div
                              class="woocommerce-billing-fields"
                              v-if="addresses.length == 0 || newAddress"
                            >
                              <h3 class="mb-4 font-size-3">
                                {{ $t('misc.Billing details') }}
                              </h3>
                              <div class="form-group mb-4">
                                <div class="js-form-message js-focus-state">
                                  <label
                                    id="signinEmailLabel"
                                    class="form-label d-block"
                                    for="country"
                                  >
                                    {{ $t('misc.Country') }}
                                  </label>
                                  <select
                                    name="country"
                                    id="country"
                                    required=""
                                    v-model="form.country"
                                    @change="getCities($event)"
                                    class="form-select form-control rounded-0 height-4 px-4"
                                  >
                                    <option value="" disabled>
                                      {{ $t('misc.Select country') }}
                                    </option>
                                    <option
                                      v-for="country in countries"
                                      :key="country.id"
                                      :value="country.id"
                                    >
                                      {{ country.name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div class="form-group mb-4">
                                <div class="js-form-message js-focus-state">
                                  <label
                                    id="signinEmailLabel"
                                    class="form-label d-block"
                                    for="city"
                                  >
                                    {{ $t('misc.City') }}
                                  </label>
                                  <select
                                    v-model="form.city"
                                    name="city"
                                    id="city"
                                    required=""
                                    :disabled="!cities"
                                    class="form-select form-control rounded-0 height-4 px-4"
                                  >
                                    <option value="" disabled>
                                      {{ $t('misc.Select city') }}
                                    </option>
                                    <option
                                      v-for="city in cities"
                                      :key="city"
                                      :value="city"
                                    >
                                      {{ city }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div class="form-group mb-4">
                                <div class="js-form-message js-focus-state">
                                  <label
                                    class="form-label d-block"
                                    for="address"
                                  >
                                    {{ $t('misc.address') }}
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control rounded-0 height-4 px-4"
                                    name="address"
                                    id="address"
                                    :placeholder="
                                      $t('placeholder.Enter Your Address')
                                    "
                                    required=""
                                    v-model="form.address"
                                  />
                                </div>
                              </div>
                              <div class="form-group mb-4">
                                <div class="js-form-message js-focus-state">
                                  <label class="form-label d-block" for="city">
                                    {{ $t('inputs.phone') }}
                                  </label>
                                  <input
                                    type="phone"
                                    class="form-control rounded-0 height-4 px-4"
                                    :placeholder="
                                      $t('placeholder.Please enter your phone')
                                    "
                                    v-model="form.phone"
                                    required=""
                                  />
                                </div>
                              </div>
                              <div class="form-group mb-4">
                                <div class="js-form-message js-focus-state">
                                  <label
                                    class="form-label d-block"
                                    for="postalcode"
                                  >
                                    {{ $t('inputs.Postal code') }}
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control rounded-0 height-4 px-4"
                                    name="postal code"
                                    id="postalcode"
                                    :placeholder="$t('inputs.Postal code')"
                                    required=""
                                    v-model="form.postal_code"
                                  />
                                </div>
                              </div>

                              <div class="mb-4d75">
                                <button
                                  type="submit"
                                  class="btn btn-block py-3 rounded-0 btn-dark"
                                >
                                  {{ $t('buttons.Add New Address') }}
                                </button>
                              </div>
                            </div>
                          </div>
                        </transition>
                        <div v-if="addressMsg">
                          <p class="errMsg">
                            {{ $t(`misc.${addressMsg}`) }}
                          </p>
                        </div>
                      </div>
                      <div class="" id="customer_details">
                        <div
                          class="payments px-4 py-3 bg-white border"
                          v-if="paymentMethods"
                        >
                          <h2 class="fs-4 mb-3">
                            {{ $t('misc.PaymentMethod') }}
                          </h2>
                          <form>
                            <div
                              class="radio-check alert mb-2 alert-info"
                              v-for="paymentMethod in paymentMethods"
                              :key="paymentMethod.id"
                            >
                              <input
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                :value="paymentMethod.id"
                                v-model="selectedPayment"
                                @change="checkDisabled"
                              />
                              <label
                                class="form-check-label d-block"
                                for="flexRadioDefault1"
                              >
                                <div class="d-flex flex-wrap mb-2">
                                  <bdi>{{ $t('inputs.name') }} :</bdi>
                                  <bdi>{{ paymentMethod.name }}</bdi>
                                </div>
                                <div class="d-flex flex-wrap mb-2">
                                  <bdi>{{ $t('inputs.cardNumber') }} :</bdi>
                                  <bdi>
                                    {{ changeStr(paymentMethod.card_number) }}
                                  </bdi>
                                </div>
                                <div class="d-flex flex-wrap mb-2">
                                  <bdi>{{ $t('inputs.Exp date') }}</bdi>
                                  <bdi>{{ paymentMethod.card_date }}</bdi>
                                </div>
                              </label>
                            </div>
                          </form>

                          <button
                            type="button"
                            class="d-block btn"
                            @click="newPayment = !newPayment"
                          >
                            <font-awesome-icon :icon="['fas', 'plus']" />
                            <bdi class="mx-2">
                              {{ $t('misc.NewPaymentmethod') }}
                            </bdi>
                          </button>
                        </div>
                        <transition name="fade">
                          <div
                            class="px-4 pt-5 bg-white border"
                            v-if="newPayment"
                          >
                            <div
                              class="woocommerce-billing-fields"
                              v-if="paymentMethods.length == 0 || newPayment"
                            >
                              <h3 class="mb-4 font-size-3">
                                {{ $t('misc.NewPaymentmethod') }}
                              </h3>
                              <div id="new-address">
                                <div class="">
                                  <div class="form-group mb-4">
                                    <div class="js-form-message js-focus-state">
                                      <label
                                        class="form-label"
                                        for="holder name"
                                      >
                                        {{ $t('inputs.name') }}
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control rounded-0 height-4 px-4"
                                        name="holder name"
                                        id="holder name"
                                        :placeholder="
                                          $t('placeholder.card holder name')
                                        "
                                        required=""
                                        v-model="paymentForm.name"
                                      />
                                    </div>
                                  </div>
                                  <div class="form-group mb-4">
                                    <div class="js-form-message js-focus-state">
                                      <label
                                        class="form-label"
                                        for="cardNumber"
                                      >
                                        {{ $t('inputs.cardNumber') }}
                                      </label>
                                      <input
                                        type="number"
                                        class="form-control rounded-0 height-4 px-4"
                                        name="cardNumber"
                                        id="cardNumber"
                                        :placeholder="$t('inputs.cardNumber')"
                                        required=""
                                        v-model="paymentForm.card_number"
                                      />
                                    </div>
                                  </div>
                                  <div class="form-group mb-4">
                                    <div class="row">
                                      <div class="col-6">
                                        <div
                                          class="js-form-message js-focus-state"
                                        >
                                          <label
                                            class="form-label"
                                            for="Exp Year"
                                          >
                                            {{ $t('inputs.Exp Year') }}
                                          </label>
                                          <input
                                            id="Exp Year"
                                            type="number"
                                            class="form-control rounded-0 height-4"
                                            :placeholder="
                                              $t('placeholder.Exp Year')
                                            "
                                            v-model="paymentForm.card_year"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                      <div class="col-6">
                                        <div
                                          class="js-form-message js-focus-state"
                                        >
                                          <label
                                            class="form-label"
                                            for="Exp Month"
                                          >
                                            {{ $t('inputs.Exp Month') }}
                                          </label>
                                          <input
                                            id="Exp Month"
                                            type="number"
                                            class="form-control rounded-0 height-4"
                                            :placeholder="
                                              $t('placeholder.Exp Month')
                                            "
                                            v-model="paymentForm.card_month"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="form-group mb-4">
                                    <div class="row">
                                      <div class="col-6">
                                        <div
                                          class="js-form-message js-focus-state"
                                        >
                                          <label class="form-label" for="cvv">
                                            {{ $t('inputs.cvv') }}
                                          </label>
                                          <input
                                            id="cvv"
                                            type="number"
                                            class="form-control rounded-0 height-4"
                                            :placeholder="$t('placeholder.cvv')"
                                            v-model="paymentForm.card_cvv"
                                            required=""
                                          />
                                        </div>
                                      </div>
                                      <div class="col-6">
                                        <div
                                          class="js-form-message js-focus-state"
                                        >
                                          <label
                                            id="signinEmailLabel"
                                            class="form-label"
                                            for="primary"
                                          >
                                            {{ $t('misc.primary') }}
                                          </label>
                                          <select
                                            name="primary"
                                            id="primary"
                                            required=""
                                            v-model="paymentForm.primary"
                                            class="form-select rounded-0 height-4 px-4"
                                          >
                                            <option value="0">
                                              {{ $t('misc.none') }}
                                            </option>
                                            <option value="1">
                                              {{ $t('misc.primary') }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="mb-4d75">
                                    <button
                                      type="button"
                                      @click="addNewPayment"
                                      class="btn btn-block py-3 rounded-0 btn-dark"
                                    >
                                      {{ $t('misc.NewPaymentmethod') }}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </transition>
                        <p class="errMsg">
                          {{ errMsg }}
                        </p>
                      </div>
                    </div>

                    <h3 id="order_review_heading" class="d-none">
                      {{ $t('misc.Order') }}
                    </h3>

                    <div
                      id="order_review"
                      class="col-md-5 col-lg-5 col-xl-4 woocommerce-checkout-review-order"
                      v-if="cart"
                    >
                      <b-accordion free>
                        <b-accordion-item
                          :title="$t(`misc.Your order`)"
                          visible
                        >
                          <table
                            class="shop_table woocommerce-checkout-review-order-table"
                          >
                            <thead>
                              <tr class="d-none">
                                <th class="product-name">
                                  {{ $t('misc.Product') }}
                                </th>
                                <th class="product-total">
                                  {{ $t('misc.total') }}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                class="cart_item"
                                v-for="item in cart.items"
                                :key="item.id"
                              >
                                <td class="product-name">
                                  {{ item.book.name }}

                                  &nbsp;
                                  <strong class="product-quantity">
                                    × {{ item.quntity }}
                                  </strong>
                                </td>
                                <td class="product-total">
                                  <span
                                    class="woocommerce-Price-amount amount"
                                    v-if="currency"
                                  >
                                    <span
                                      class="woocommerce-Price-currencySymbol"
                                    >
                                      {{ item.totalPrice }}
                                    </span>
                                    {{ currency.sympl }}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot class="d-none">
                              <tr class="cart-subtotal">
                                <th>{{ $t('misc.Subtotal') }}</th>
                                <td>
                                  <span class="woocommerce-Price-amount amount">
                                    <span
                                      class="woocommerce-Price-currencySymbol"
                                    >
                                      £
                                    </span>
                                    97.99
                                  </span>
                                </td>
                              </tr>

                              <tr class="order-total">
                                <th>{{ $t('misc.total') }}</th>
                                <td>
                                  <strong>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                    >
                                      <span
                                        class="woocommerce-Price-currencySymbol"
                                      >
                                        £
                                      </span>
                                      97.99
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </b-accordion-item>
                        <b-accordion-item visible :title="$t('misc.total')">
                          <table class="shop_table shop_table_responsive">
                            <tbody>
                              <tr class="checkout-subtotal">
                                <th>{{ $t('misc.Subtotal') }}</th>
                                <td>
                                  <span
                                    class="woocommerce-Price-amount amount"
                                    v-if="currency"
                                  >
                                    <span
                                      class="woocommerce-Price-currencySymbol"
                                    >
                                      {{ cart.total }}
                                    </span>
                                    {{ currency.sympl }}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </b-accordion-item>
                        <b-accordion-item visible :title="$t('misc.Shipping')">
                          <ul id="shipping_method">
                            <div v-for="ship in shippingMethods" :key="ship.id">
                              <li
                                v-if="ship.status == 1"
                                class="d-flex justify-content-between"
                              >
                                <table class="shop_table shop_table_responsive">
                                  <tbody>
                                    <tr class="order-total">
                                      <th>
                                        <input
                                          type="radio"
                                          name="shipping_method[0]"
                                          data-index="0"
                                          id="shipping_method_0_flat_rate1"
                                          :value="ship.id"
                                          class="shipping_method"
                                          v-model="shippingCost"
                                        />
                                        <label
                                          for="shipping_method_0_flat_rate1"
                                        >
                                          {{ ship.name }}
                                        </label>
                                      </th>
                                      <td data-title="Total">
                                        <strong>
                                          <span
                                            class="woocommerce-Price-amount amount"
                                            v-if="currency"
                                          >
                                            {{ shippingCostPrice }}
                                            {{ currency.sympl }}
                                          </span>
                                        </strong>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </li>
                            </div>
                          </ul>
                        </b-accordion-item>

                        <div class="p-4d875 border">
                          <table class="shop_table shop_table_responsive">
                            <tbody>
                              <tr class="order-total">
                                <th class="py-2">{{ $t('misc.total') }}</th>
                                <td class="py-2">
                                  <strong>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                    >
                                      <span
                                        class="woocommerce-Price-currencySymbol"
                                        v-if="currency"
                                      >
                                        {{ cart.total }} {{ currency.sympl }}
                                      </span>
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                              <tr class="order-total">
                                <th class="py-2">{{ $t('misc.discount') }}</th>
                                <td class="py-2">
                                  <strong>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                    >
                                      <span
                                        class="woocommerce-Price-currencySymbol"
                                        v-if="currency"
                                      >
                                        {{ cart.discount }} {{ currency.sympl }}
                                      </span>
                                    </span>
                                    <!-- <button
                                      class="btn text-danger"
                                      v-if="cart.discount"
                                      @click="removeCoupon"
                                    >
                                      <i class="fa-solid fa-xmark"></i>
                                      {{ $t('misc.delete') }}
                                    </button> -->
                                  </strong>
                                </td>
                              </tr>
                              <tr class="order-total">
                                <th class="py-2">
                                  {{ $t('misc.shipping cost') }}
                                </th>
                                <td class="py-2">
                                  <strong>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                    >
                                      <span
                                        class="woocommerce-Price-currencySymbol"
                                        v-if="currency"
                                      >
                                        {{ shippingCostPrice }}
                                        {{ currency.sympl }}
                                      </span>
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                              <p v-if="shippingErrMsg" class="errMsg">
                                {{ shippingErrMsg }}
                              </p>
                              <tr class="order-total">
                                <th class="py-2">{{ $t('misc.net price') }}</th>
                                <td class="py-2">
                                  <strong>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                    >
                                      <span
                                        class="woocommerce-Price-currencySymbol"
                                        v-if="currency"
                                      >
                                        {{ cart.netTotal + shippingCostPrice }}
                                        {{ currency.sympl }}
                                      </span>
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <b-accordion-item visible :title="$t('misc.Payment')">
                          <div
                            id="payment"
                            class="woocommerce-checkout-payment"
                          >
                            <ul
                              class="wc_payment_methods payment_methods methods p-0"
                            >
                              <li
                                class="wc_payment_method payment_method_bacs d-block"
                              >
                                <div>
                                  <input
                                    id="payment_method_bacs"
                                    type="radio"
                                    class="input-radio"
                                    name="payment_method"
                                    value="online"
                                    v-model="paymentMethod"
                                  />

                                  <label for="payment_method_bacs">
                                    {{ $t('misc.Visa/Master card') }}
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </b-accordion-item>
                      </b-accordion>

                      <div class="form-row place-order">
                        <button
                          :disabled="!this.disabledValue || loading"
                          name="woocommerce_checkout_place_order"
                          type="button"
                          class="button alt btn btn-dark btn-block rounded-0 py-4"
                          @click="placeOrder"
                        >
                          <div class="text-center" v-if="loading">
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>
                          <span v-else>
                            {{ $t('buttons.Place order') }}
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div v-else class="text-center">
                <p>{{ $t('misc.cart is empty') }}</p>
                <a
                  href="/"
                  class="btn btn-block py-4 rounded-0 btn-outline-dark mb-4"
                >
                  {{ $t('buttons.Continue shopping') }}
                </a>
              </div>
            </div>
            <div v-else class="text-center">
              <p>{{ $t('misc.cart is empty') }}</p>
              <a
                href="/"
                class="btn btn-block py-4 rounded-0 btn-outline-dark mb-4"
              >
                {{ $t('buttons.Continue shopping') }}
              </a>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, inject } from 'vue'
import NewAccount from '@/components/NewAccount.vue'
import Login from '@/components/Login.vue'
import Cookie from 'js-cookie'

export default {
  components: {
    NewAccount,
    Login,
  },
  data() {
    return {
      form: {
        country: '',
        governorate: '',
        city: '',
        postal_code: '',
        phone: '',
        address: '',
      },
      loading: false,
      newAccount: false,
      shippingCost: 'exprese',
      shippingCostPrice: 0,
      cart: null,
      haveCoppon: false,
      countries: null,
      governments: null,
      cities: null,
      paymentMethods: null,
      paymentMethod: 'online',
      addresses: null,
      selectedAddress: '',
      selectedPayment: '',
      newAddress: false,
      newPayment: false,
      shippingMethods: null,
      needAddress: false,
      newData: [],
      addressMsg: '',
      errMsg: '',
      shippingErrMsg: '',
      disabledValue: '',
    }
  },
  computed: {
    currency() {
      return this.$store.getters.currency
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    countryId() {
      return Cookie.get('countryCode')
    },
    popup() {
      return this.$store.getters.popup
    },
    message() {
      return this.$store.getters.message
    },
    popupMode() {
      return this.$store.getters.popupMode
    },
  },
  mounted() {
    this.getCountries()
    this.getAddresses()
    this.getPayments()
    this.getShippingMethod()
    this.checkDisabled()
    this.SeperateOrderByPublisher()
    if (this.isLoggedIn) {
      this.getCart()
    }
    this.setCountry()
  },
  methods: {
    checkCard() {
      let found

      if (this.cart) {
        this.cart.items.forEach((element) => {
          found = element.book_type == 'hardcopy'

          if (found) {
            this.needAddress = true
          }
        })
      }
    },
    getCountries() {
      axios.get('countries', { headers: { value: 'iso' } }).then((res) => {
        this.countries = res.data.data
      })
    },
    setCountry() {
      this.form.country = this.countryId
      this.getCities()
    },

    getCities(e) {
      this.cities = null
      let url = ''
      if (e == undefined) {
        url = `aramex_api/getCountryCities/${this.countryId}`
      } else {
        this.form.city = ''
        url = `aramex_api/getCountryCities/${e.target.value}`
      }
      axios.get(`${url}`).then((res) => {
        this.cities = res.data.Cities.string
      })
    },
    addNewAddress() {
      axios
        .post('user/address/create', this.form)
        .then((data) => {
          if (data.data.status == 'faild') {
            this.$toast.error(data.data.message)
            return
          }
          this.$toast.success(data.data.message)
          setTimeout(() => {
            window.location.reload()
          }, 300)
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
    },
    changeStr(str) {
      let arr = str.split('').splice(str.length - 5)
      arr[0] = 'xxxxxxxxx'

      return arr.join('')
    },
    getAddresses() {
      this.axios
        .get('user/address')
        .then((data) => {
          this.addresses = data.data.data
          if (this.addresses.length) {
            this.selectedAddress = this.addresses[0].id

            this.getShippingCost()
          }
        })
        .finally(() => this.checkDisabled())
    },
    getPayments() {
      this.axios
        .get('/user/paymentMethods')
        .then((data) => {
          this.paymentMethods = data.data.data
          this.paymentMethods.forEach((el) => {
            if (el.primary == 1) {
              this.selectedPayment = el.id
            }
          })
        })
        .finally(() => this.checkDisabled())
    },
    getShippingMethod() {
      this.axios.get('/settings').then((data) => {
        this.shippingMethods = data.data.data.shippingMethods
      })
    },
    placeOrder() {
      this.loading = true
      if (this.cart) {
        this.axios
          .post('/user/orders/create', {
            payment_method_id: this.selectedPayment,
            shipping_total: this.shippingCostPrice,
          })
          .then((data) => {
            this.errMsg = ''
            if (data.data.status == 'faild') {
              this.$store.commit('message', data.data.message)
              this.$store.commit('popupMode', 'danger')
              this.$store.commit('popup')
              this.loading = false
              return
            }


            this.checkDisabled()
            this.$nextTick(() => {
              this.getCart()
            })
            localStorage.removeItem('cart')
            window.location.href = '/account/orders'
          })
          .finally(() => (this.loading = false))
      }
    },
    getShippingCost() {
      this.axios
        .get(`/user/orders/getShippingRate?shipping_id=${this.selectedAddress}`)
        .then((data) => {
          if (data.data.message == 0) {
            this.shippingCostPrice = 0
          }

          if (data.data.data.status == 'faild') {
            this.shippingCostPrice = 0
            this.shippingErrMsg = data.data.data.message
            return
          }
          this.shippingCostPrice = data.data.data.message
        })
    },
    checkDisabled() {
      this.disabledValue = true
      if (this.disabledValue) {
        if (this.selectedAddress == '' && this.needAddress) {
          this.disabledValue = false
          return
        } else if (this.selectedPayment == 0) {
          this.disabledValue = false
          return
        }
      }
    },
    SeperateOrderByPublisher() {
      // let publishers = this.cart.map((element) => element.book.publisher)
    },
    getCart() {
      this.axios
        .get('/user/orders/cart/myCart')
        .then((data) => {
          this.cart = data.data.data
        })
        .finally(() => {
          this.checkCard()
        })
    },

    login() {
      this.$store.commit('login_Menu')
    },
  },

  setup() {
    // const store = useStore()
    const toast = inject('toast')
    const paymentForm = reactive({
      name: '',
      card_number: '',
      card_cvv: '',
      card_month: '',
      card_year: '',
      primary: '0',
    })
    function addNewPayment() {
      axios
        .post('user/paymentMethods/create', paymentForm)
        .then((data) => {
          if (data.data.status == 'faild') {
            toast.error(data.data.message)
            return
          }
          toast.success(data.data.message)
          setTimeout(() => {
            window.location.reload()
          }, 300)
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }

    return {
      paymentForm,
      addNewPayment,
      // countries,
    }
  },
}
</script>

<style lang="scss" scoped>
.coppon-enter-from,
.coppon-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.coppon-enter-active,
.coppon-leave-active {
  transition: all 0.6s;
}

.coppon-enter-to,
.coppon-leave-from {
  opacity: 1;
}

.showcoupon {
  color: #f75454;
}
.newAccount {
  max-width: 750px;
  margin: auto;
}

.radio-check {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.payments label div bdi:first-child {
  min-width: 150px;
}

.is-rtl {
  label,
  h2,
  h3 {
    text-align: right;
  }
  .radio-check {
    flex-direction: row-reverse;
  }
  .woocommerce-info {
    text-align: right;
  }
}
.errMsg {
  text-align: center;
  color: red;
}
.spinner-border {
  width: 1rem;
  height: 1rem;
}
</style>
