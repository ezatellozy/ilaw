<template>
  <div class="modal d-block bookinfoModal" @click="closemodal">
    <div class="modal-dialog" @click.stop>
      <div class="row modal-content">
        <div class="pl-0 summary entry-summary border-left">
          <div class="d-flex align-items-center">
            <button type="button" @click="closemodal" class="close ml-auto">
              <span>
                <i class="fas fa-times ml-2 mt-2"></i>
              </span>
            </button>
          </div>
          <div
            class="js-slick-carousel mx-auto u-slick woocommerce-product-gallery__wrapper"
            data-pagi-classes="text-center u-slick__pagination my-4"
          >
            <img
              :src="book.main_media"
              alt="Image Description"
              class="mx-auto w-100"
            />
          </div>

          <div class="px-4 px-xl-7 border-bottom pb-5">
            <h1 class="product_title entry-title font-size-7 mb-3">
              {{ book.title }}
            </h1>
            <div class="font-size-2 mb-4">
              <span class="text-yellow-darker">
                <span
                  :class="book.rate > 1 ? 'fas' : 'far'"
                  class="fa-star"
                ></span>
                <span
                  :class="book.rate > 1 ? 'fas' : 'far'"
                  class="fa-star"
                ></span>
                <span
                  :class="book.rate > 2 ? 'fas' : 'far'"
                  class="fa-star"
                ></span>
                <span
                  :class="book.rate > 3 ? 'fas' : 'far'"
                  class="fa-star"
                ></span>
                <span
                  :class="book.rate > 4 ? 'fas' : 'far'"
                  class="fa-star"
                ></span>
              </span>
              <span class="ml-3">({{ book.rate }})</span>
              <router-link to="/author">
                <span class="ml-3 font-weight-medium text-black">
                  <bdi>{{ $t('misc.By') }}</bdi>
                  ({{ $t('misc.author') }})
                </span>
                <span class="ml-2 text-gray-600">
                  {{ book.author }}
                </span>
              </router-link>
              <router-link to="/publisher">
                <span class="ml-3 font-weight-medium text-black">
                  <bdi>{{ $t('misc.seller') }}</bdi>
                  ({{ $t('misc.publisher') }})
                </span>
                <span class="ml-2 text-gray-600">
                  {{ book.publisher }}
                </span>
              </router-link>
            </div>
            <p class="price font-size-22 font-weight-medium mb-3">
              <span class="woocommerce-Price-amount amount">
                <span class="woocommerce-Price-currencySymbol">
                  {{ currency }}
                </span>
                {{ book.hardcopy_price }} - {{ book.pdf_price }}
              </span>
            </p>
            <div class="mb-2 font-size-2">
              <span class="font-weight-medium">
                {{ $t('misc.Book Format') }}:
              </span>
              <span class="ml-2 text-gray-600">
                {{ $t('misc.Choose an option') }}
              </span>
            </div>

            <div class="row mb-4">
              <div class="col mb-3 mb-md-0">
                <div class="">
                  <input
                    id="typeOfListingRadio1"
                    type="radio"
                    v-model="item.bookType"
                    value="hardcopy"
                    name="typeOfListingRadio1"
                    class="custom-control-input checkbox-outline__input"
                  />
                  <label
                    class="border-bottom d-block checkbox-outline__label py-3 px-1 mb-0"
                    for="typeOfListingRadio1"
                  >
                    <span class="d-block text-center">
                      {{ $t('misc.Hardcopy') }}
                    </span>
                    <span class="d-block text-center fw-bold">
                      {{ book.hardcopy_price }} {{ currency }}
                    </span>
                  </label>
                </div>
              </div>
              <div class="col mb-3 mb-md-0">
                <div class="">
                  <input
                    id="typeOfListingRadio2"
                    type="radio"
                    value="pdf"
                    name="typeOfListingRadio1"
                    v-model="item.bookType"
                    class="custom-control-input checkbox-outline__input"
                  />
                  <label
                    class="border-bottom d-block checkbox-outline__label py-3 px-1 mb-0"
                    for="typeOfListingRadio2"
                  >
                    <span
                      class="d-block text-uppercase text-center d-block text-center"
                    >
                      PDF
                    </span>
                    <span class="d-block text-center fw-bold">
                      {{ book.pdf_price }} {{ currency }}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div
              class="woocommerce-product-details__short-description font-size-2 mb-5"
            >
              <p class="">
                {{ book.description }}
              </p>
            </div>

            <form
              @click.prevent
              class="cart d-md-flex justify-content-center justify-content-md-start align-items-center"
            >
              <div
                class="quantity mb-4 mb-md-0 d-flex justify-content-center align-items-center"
              >
                <div class="border px-3">
                  <div class="js-quantity">
                    <div class="d-flex align-items-center">
                      <label class="screen-reader-text sr-only">
                        {{ $t('misc.Quantity') }}
                      </label>
                      <button class="js-minus text-dark" @click="qtyMinus">
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
                      </button>
                      <input
                        type="number"
                        class="input-text qty text form-control text-center border-0"
                        step="1"
                        min="1"
                        max="100"
                        name="quantity"
                        v-model="item.qty"
                        title="Qty"
                      />
                      <button class="js-plus text-dark" @click="qtyPlus">
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
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button
                  @click="addToCart"
                  name="add-to-cart"
                  :class="$i18n.locale == 'ar' ? 'mr-md-4' : 'ml-md-4'"
                  class="btn btn-dark border-0 rounded-0 p-3 min-width-250 single_add_to_cart_button button alt"
                >
                  {{ $t('misc.Add to cart') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { inject } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
export default {
  props: ['book'],
  emits: ['closemodal'],
  //   methods: {
  //     closemodal() {
  //       this.$emit('closemodal')
  //     },
  //   },
  computed: {
    cartQuantity() {
      return this.$store.getters.totalQuantity
    },
    currency() {
      return this.$store.getters.currency
    },
  },
  setup(props, { emit }) {
    const store = useStore()
    const toast = inject('toast')
    const { t } = useI18n()

    const item = reactive({
      // id: route.params.id,
      qty: 1,
      bookType: 'pdf',
      price: 0,
      totalPrice: 0,
      ...props.book,
    })

    function qtyPlus() {
      item.qty++
    }
    function qtyMinus() {
      if (item.qty > 1) item.qty--
    }
    function closemodal() {
      emit('closemodal')
    }
    function addToCart() {
      if (item.bookType == 'pdf') {
        item.price = item.pdf_price
      } else {
        item.price = item.hardcopy_price
      }

      item.totalPrice = item.price * item.qty
      console.log(item.totalPrice)

      store.commit('addToCart', item)
      toast.success(t('misc.addSuccess'))
      emit('closemodal')
    }

    return { item, qtyPlus, qtyMinus, addToCart, closemodal }
  },
}
</script>

<style scoped lang="scss">
.modal::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.507);
}
.bookinfoModal {
  .woocommerce-product-gallery__wrapper {
    width: 150px;
  }
}
.is-rtl {
  p,
  h1,
  div,
  h2,
  h6 {
    text-align: right;
  }
}
</style>
