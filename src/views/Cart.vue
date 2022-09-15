<template>
  <div class="Shopping-cart-area">
    <div class="site-content overflow-hidden" id="content">
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
      <div class="container" v-else>
        <div>
          <header class="entry-header space-top-2 space-bottom-1 mb-2">
            <h1 class="entry-title font-size-7">
              {{ $t('misc.Your cart:') }} ({{ cart.itemsCount }})
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
                              v-for="item in cart.items"
                              :key="item.id"
                            >
                              <td class="product-name" data-title="Product">
                                <div class="d-flex align-items-center">
                                  <a :href="`/book/${item.book.id}`">
                                    <img
                                      :src="item.book.photo"
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
                                      :href="`/author/${item.book.writer.id}`"
                                      class="text-gray-700 font-size-2 d-block"
                                      tabindex="0"
                                    >
                                      {{ item.book.writer.name }}
                                    </a>
                                  </div>
                                </div>
                              </td>

                              <td class="product-price" data-title="Price">
                                <span
                                  class="woocommerce-Price-amount amount"
                                  v-if="currency"
                                >
                                  <span
                                    class="woocommerce-Price-currencySymbol"
                                  >
                                    {{ item.price }}
                                  </span>
                                  {{ currency.sympl }}
                                </span>
                              </td>

                              <td
                                class="product-quantity"
                                data-title="Quantity"
                              >
                                <div class="quantity d-flex align-items-center">
                                  <!-- Quantity -->
                                  <div class="border px-3 width-120">
                                    <div class="js-quantity">
                                      <div class="d-flex align-items-center">
                                        <label
                                          class="screen-reader-text sr-only"
                                        >
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
                                          :value="item.quntity"
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
                <b-accordion-item
                  :title="$t('misc.Cart Totals')"
                  visible
                  v-if="cart.coupon_code == ''"
                >
                  <table class="shop_table shop_table_responsive">
                    <tbody>
                      <tr class="cart-subtotal">
                        <th>{{ $t('misc.Subtotal:') }}</th>
                        <td data-title="Subtotal">
                          <span
                            class="woocommerce-Price-amount amount"
                            v-if="currency"
                          >
                            {{ cart.total }} {{ currency.sympl }}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </b-accordion-item>

                <b-accordion-item
                  :title="$t('misc.Coupon')"
                  visible
                  v-if="!cart.coupon_code"
                >
                  <div
                    class="coupon"
                    :class="
                      $i18n.locale == 'ar'
                        ? 'd-flex justify-content-between '
                        : ''
                    "
                  >
                    <label for="coupon_code">{{ $t('misc.Coupon') }}</label>
                    <input
                      type="text"
                      name="coupon_code"
                      class="input-text"
                      v-model="coupon"
                      id="coupon_code"
                      :placeholder="$t('misc.Coupon code')"
                      autocomplete="off"
                    />
                    <input
                      type="submit"
                      class="button"
                      name="apply_coupon"
                      @click="applyCoupon"
                      :disabled="coupon == ''"
                      :value="$t('buttons.Apply coupon')"
                    />
                  </div>
                  <p class="errMsg" v-if="errMsg">{{ errMsg }}</p>
                </b-accordion-item>
              </b-accordion>
              <div class="border border-gray-900 bg-white mb-5">
                <div class="p-4d875 border">
                  <table class="shop_table shop_table_responsive">
                    <tbody>
                      <tr class="order-total">
                        <th class="py-2">{{ $t('misc.total') }}</th>
                        <td class="py-2">
                          <strong>
                            <span class="woocommerce-Price-amount amount">
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
                            <span class="woocommerce-Price-amount amount">
                              <span
                                class="woocommerce-Price-currencySymbol"
                                v-if="currency"
                              >
                                {{ cart.discount }} {{ currency.sympl }}
                              </span>
                            </span>
                            <button
                              class="btn text-danger"
                              v-if="cart.discount"
                              @click="removeCoupon"
                            >
                              <i class="fa-solid fa-xmark"></i>
                              {{ $t('misc.delete') }}
                            </button>
                          </strong>
                        </td>
                      </tr>
                      <tr class="order-total">
                        <th class="py-2">{{ $t('misc.net price') }}</th>
                        <td class="py-2">
                          <strong>
                            <span class="woocommerce-Price-amount amount">
                              <span
                                class="woocommerce-Price-currencySymbol"
                                v-if="currency"
                              >
                                {{ cart.netTotal }} {{ currency.sympl }}
                              </span>
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
                  class="checkout-button button text-center alt wc-forward btn btn-dark btn-block rounded-0 py-4"
                >
                  {{ $t('misc.select addresses') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewAccount from '@/components/NewAccount.vue'
import Login from '@/components/Login.vue'
// import CartItems from '@/components/CartItems.vue'
// import CartSummary from '@/components/CartSummary.vue'
// import Coppon from '@/components/Coppon.vue'
export default {
  components: { NewAccount, Login },
  // components: { CartItems, CartSummary, Coppon },
  data() {
    return {
      coupon: '',
      errMsg: '',
      cart: [],
    }
  },
  mounted() {
    if (this.isLoggedIn) {
      this.getCart()
    }
  },
  computed: {
    // cart() {
    //   return this.$store.getters.cart
    // },
    currency() {
      return this.$store.getters.currency
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
  },
  methods: {
    removeItem(item) {
      this.$store.commit('removeItem', item)
      this.$nextTick(() => {
        this.getCart()
      })
    },
    addToCart(item) {
      this.$store.commit('addToCartByOne', item)
    },
    removeItemByOne(item) {
      this.$store.commit('removeItemByOne', item)
    },
    applyCoupon() {
      this.axios
        .post('/user/orders/cart/addCoupon', { coupon: this.coupon })
        .then((data) => {
          if (data.data.status == 'faild') {
            this.errMsg = data.data.message
          } else {
            this.$nextTick(() => {
              this.$toast.success(data.data.message)
              this.getCart()
            })
          }
        })
    },
    removeCoupon() {
      this.axios.get('/user/orders/cart/removeCoupon').then((data) => {
        if (data.data.status == 'success') {
          this.$nextTick(() => {
            this.getCart()
          })
        }
      })
    },
    getCart() {
      this.axios.get('/user/orders/cart/myCart').then((data) => {
        this.cart = data.data.data
      })
    },
  },
}
</script>

<style scoped lang="scss">
.old-price {
  text-decoration: line-through;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  margin: 0 10px 0 0;
}
.btn-danger {
  margin: 0 0 0 20px !important;
}
.is-rtl {
  .btn-danger {
    margin: 0 20px 0 0px !important;
  }
  .shop_table.cart tbody td:first-child {
    border-left: unset;
    border-right: 1px solid #eae8e4;
  }
  .shop_table.cart tbody td:last-child {
    border-right: unset;
    border-left: 1px solid #eae8e4;
  }
  .old-price {
    margin: 0 0 0 10px;
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
.attachment-shop_thumbnail {
  width: 150px;
  height: 150px;
}
.errMsg {
  color: red;
  text-align: center !important;
  margin: 10px 0;
  font-size: 14px;
}
</style>
