<template>
  <div class="Shopping-cart-area">
    <div class="site-content overflow-hidden" id="content">
      <div class="container">
        <header class="entry-header space-top-2 space-bottom-1 mb-2">
          <h1 class="entry-title font-size-7">
            {{ $t('misc.Your cart:') }} ({{ totalQuantity }})
            {{ $t('misc.items') }}
          </h1>
        </header>

        <div class="row pb-8">
          <div id="primary" class="content-area col-lg-8 mb-4 mb-lg-0">
            <main id="main" class="site-main">
              <div class="page type-page status-publish hentry">
                <!-- .entry-header -->
                <div class="entry-content">
                  <div class="woocommerce">
                    <form
                      class="woocommerce-cart-form table-responsive"
                      @submit.prevent
                    >
                      <table
                        class="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                      >
                        <thead>
                          <tr>
                            <th class="product-name">
                              {{ $t('misc.Product') }}
                            </th>
                            <th class="product-price">
                              {{ $t('misc.Price') }}
                            </th>
                            <th class="product-quantity">
                              {{ $t('misc.Quantity') }}
                            </th>
                            <th class="product-subtotal">
                              {{ $t('misc.total') }}
                            </th>
                            <th class="product-remove">&nbsp;</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr
                            class="woocommerce-cart-form__cart-item cart_item"
                            v-for="item in cart"
                            :key="item.id"
                          >
                            <td class="product-name" data-title="Product">
                              <div class="d-flex align-items-center">
                                <a :href="`/book/${item.id}`">
                                  <img
                                    :src="item.photp"
                                    class="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                    alt=""
                                  />
                                </a>
                                <div
                                  class="m-w-200-lg-down"
                                  :class="
                                    $i18n.locale == 'ar' ? 'mr-3' : 'ml-3'
                                  "
                                >
                                  <a :href="`/book/${item.book.id}`">
                                    {{ item.book.name }}
                                  </a>
                                  <a
                                    :href="`/author/${item.item.book.writer.id}`"
                                    class="text-gray-700 font-size-2 d-block"
                                    tabindex="0"
                                  >
                                    {{ item.book.writer.name }}
                                  </a>
                                </div>
                              </div>
                            </td>

                            <td class="product-price" data-title="Price">
                              <span class="woocommerce-Price-amount amount">
                                <span class="woocommerce-Price-currencySymbol">
                                  {{ item.price }}
                                </span>
                                {{ currency }}
                              </span>
                            </td>

                            <td class="product-quantity" data-title="Quantity">
                              <div class="quantity d-flex align-items-center">
                                <!-- Quantity -->
                                <div class="border px-3 width-120">
                                  <div class="js-quantity">
                                    <div class="d-flex align-items-center">
                                      <label class="screen-reader-text sr-only">
                                        {{ $t('misc.Quantity') }}
                                      </label>
                                      <a
                                        class="js-minus text-dark"
                                        href="javascript:;"
                                        role="button"
                                        @click="removeItemByOne(item)"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlns:xlink="http://www.w3.org/1999/xlink"
                                          width="10px"
                                          height="1px"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            fill="rgb(22, 22, 25)"
                                            d="M-0.000,-0.000 L10.000,-0.000 L10.000,1.000 L-0.000,1.000 L-0.000,-0.000 Z"
                                          />
                                        </svg>
                                      </a>
                                      <input
                                        type="number"
                                        class="input-text qty text js-result form-control text-center border-0"
                                        step="1"
                                        min="1"
                                        max="100"
                                        name="quantity"
                                        :value="item.qty"
                                        title="Qty"
                                      />
                                      <a
                                        class="js-plus text-dark"
                                        role="button"
                                        @click="addToCart(item)"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlns:xlink="http://www.w3.org/1999/xlink"
                                          width="10px"
                                          height="10px"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            fill="rgb(22, 22, 25)"
                                            d="M10.000,5.000 L6.000,5.000 L6.000,10.000 L5.000,10.000 L5.000,5.000 L-0.000,5.000 L-0.000,4.000 L5.000,4.000 L5.000,-0.000 L6.000,-0.000 L6.000,4.000 L10.000,4.000 L10.000,5.000 Z"
                                          />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <!-- End Quantity -->
                              </div>
                            </td>

                            <td class="product-subtotal">
                              <span class="woocommerce-Price-amount amount">
                                <span class="woocommerce-Price-currencySymbol">
                                  {{ item.totalPrice }}
                                </span>
                                {{ currency }}
                              </span>
                            </td>
                            <td class="product-remove">
                              <a
                                href="#"
                                role="button"
                                @click="removeItem(item)"
                                class="remove"
                                aria-label="Remove this item"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="15px"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    fill="rgb(22, 22, 25)"
                                    d="M15.011,13.899 L13.899,15.012 L7.500,8.613 L1.101,15.012 L-0.012,13.899 L6.387,7.500 L-0.012,1.101 L1.101,-0.012 L7.500,6.387 L13.899,-0.012 L15.011,1.101 L8.613,7.500 L15.011,13.899 Z"
                                  />
                                </svg>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
                <!-- .entry-content -->
              </div>
            </main>
          </div>
          <div
            id="secondary"
            class="sidebar cart-collaterals order-1 col-lg-4"
            role="complementary"
          >
            <b-accordion>
              <b-accordion-item title="Cart Totals" visible>
                <table class="shop_table shop_table_responsive">
                  <tbody>
                    <tr class="cart-subtotal">
                      <th>{{ $t('misc.Subtotal:') }}</th>
                      <td data-title="Subtotal">
                        <span class="woocommerce-Price-amount amount">
                          {{ totalPrice }}
                        </span>
                      </td>
                    </tr>

                    <tr class="order-shipping">
                      <th>{{ $t('misc.Shipping') }}</th>
                      <td data-title="Shipping">
                        {{ $t('misc.Free Shipping') }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </b-accordion-item>
              <b-accordion-item title="Shipping" visible>
                <!-- Checkboxes -->
                <ul id="shipping_method">
                  <li>
                    <input
                      type="radio"
                      name="shipping_method[0]"
                      data-index="0"
                      id="shipping_method_0_flat_rate1"
                      value="flat_rate:1"
                      class="shipping_method"
                    />
                    <label for="shipping_method_0_flat_rate1">
                      Free shipping
                    </label>
                  </li>

                  <li>
                    <input
                      type="radio"
                      name="shipping_method[0]"
                      data-index="0"
                      id="shipping_method_0_flat_rate2"
                      value="flat_rate:2"
                      class="shipping_method"
                      checked="checked"
                    />
                    <label for="shipping_method_0_flat_rate2">
                      Flat rate:
                      <span class="woocommerce-Price-amount amount">
                        <span class="woocommerce-Price-currencySymbol">
                          15
                        </span>
                        {{ currency }}
                      </span>
                    </label>
                  </li>

                  <li>
                    <input
                      type="radio"
                      name="shipping_method[0]"
                      data-index="0"
                      id="shipping_method_0_flat_rate3"
                      value="flat_rate:2"
                      class="shipping_method"
                      checked="checked"
                    />
                    <label for="shipping_method_0_flat_rate3">
                      Local pickup::
                      <span class="woocommerce-Price-amount amount">
                        <span class="woocommerce-Price-currencySymbol">
                          8
                        </span>
                        {{ currency }}
                      </span>
                    </label>
                  </li>
                </ul>
                <!-- End Checkboxes -->
                <span class="font-size-2">Shipping to Turkey.</span>
                <a
                  href="#"
                  class="font-weight-medium h-primary ml-3 font-size-2"
                >
                  Change Address
                </a>
              </b-accordion-item>
              <b-accordion-item title="Coupon " visible>
                <div class="coupon">
                  <label for="coupon_code">Coupon:</label>
                  <input
                    type="text"
                    name="coupon_code"
                    class="input-text"
                    id="coupon_code"
                    value=""
                    placeholder="Coupon code"
                    autocomplete="off"
                  />
                  <input
                    type="submit"
                    class="button"
                    name="apply_coupon"
                    value="Apply coupon"
                  />
                </div>
              </b-accordion-item>
            </b-accordion>
            <div class="border border-gray-900 bg-white mb-5">
              <div class="p-4d875 border">
                <table class="shop_table shop_table_responsive">
                  <tbody>
                    <tr class="order-total">
                      <th>{{ $t('misc.total') }}</th>
                      <td>
                        <strong>
                          <span class="woocommerce-Price-amount amount">
                            <span class="woocommerce-Price-currencySymbol">
                              97.99
                            </span>
                            {{ currency }}
                          </span>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="wc-proceed-to-checkout">
              <a
                href="/checkout"
                class="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4"
              >
                {{ $t('misc.Proceed to checkout') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CartItems from '@/components/CartItems.vue'
// import CartSummary from '@/components/CartSummary.vue'
// import Coppon from '@/components/Coppon.vue'
export default {
  // components: { CartItems, CartSummary, Coppon },

  computed: {
    cart() {
      return this.$store.getters.cart
    },
    totalQuantity() {
      return this.$store.getters.totalQuantity
    },
    totalPrice() {
      return this.$store.getters.totalPrice
    },
    currency() {
      return this.$store.getters.currency
    },
  },
  methods: {
    removeItem(item) {
      this.$store.commit('removeItem', item)
    },
    addToCart(item) {
      this.$store.commit('addToCartByOne', item)
    },
    removeItemByOne(item) {
      this.$store.commit('removeItemByOne', item)
    },
  },
}
</script>

<style scoped lang="scss">
.is-rtl {
  .shop_table.cart tbody td:first-child {
    border-left: unset;
    border-right: 1px solid #eae8e4;
  }
  .shop_table.cart tbody td:last-child {
    border-right: unset;
    border-left: 1px solid #eae8e4;
  }
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
