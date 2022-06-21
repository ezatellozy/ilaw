<template>
  <div
    class="modal d-block bookinfoModal"
    :class="$i18n.locale == 'ar' ? 'is-rtl' : ''"
    @click="closemodal"
  >
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
              :src="book.photo"
              alt="Image Description"
              class="mx-auto w-100"
            />
          </div>

          <div class="px-4 px-xl-7 border-bottom pb-5">
            <h1 class="product_title text-center fs-3 entry-title mb-3 mt-3">
              {{ book.name }}
            </h1>
            <div class="font-size-2 mb-4">
              <div class="d-flex justify-content-center">
                <div>
                  <span class="text-yellow-darker">
                    <span
                      :class="book.reviewsTotal > 1 ? 'fas' : 'far'"
                      class="fa-star"
                    ></span>
                    <span
                      :class="book.reviewsTotal > 1 ? 'fas' : 'far'"
                      class="fa-star"
                    ></span>
                    <span
                      :class="book.reviewsTotal > 2 ? 'fas' : 'far'"
                      class="fa-star"
                    ></span>
                    <span
                      :class="book.reviewsTotal > 3 ? 'fas' : 'far'"
                      class="fa-star"
                    ></span>
                    <span
                      :class="book.reviewsTotal > 4 ? 'fas' : 'far'"
                      class="fa-star"
                    ></span>
                  </span>
                  <span class="ml-3">({{ book.reviewsTotal }})</span>
                </div>
                <div>
                  <router-link
                    :class="
                      $i18n.locale == 'ar' ? 'd-flex flex-row-reverse' : ''
                    "
                    :to="`/author/${book.writer.id}`"
                  >
                    <span class="ml-3 font-weight-medium text-black">
                      <bdi>{{ $t('misc.By') }}</bdi>
                      ({{ $t('misc.author') }})
                    </span>
                    <span class="ml-2 text-gray-600">
                      {{ book.writer.name }}
                    </span>
                  </router-link>
                </div>
                <div>
                  <router-link
                    :class="
                      $i18n.locale == 'ar' ? 'd-flex flex-row-reverse' : ''
                    "
                    :to="`/publisher/${book.publisher.id}`"
                  >
                    <span class="ml-3 font-weight-medium text-black">
                      <bdi>{{ $t('misc.seller') }}</bdi>
                      ({{ $t('misc.publisher') }})
                    </span>
                    <span class="ml-2 text-gray-600">
                      {{ book.publisher.name }}
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
            <div>
              <!-- <span
                class="woocommerce-Price-currencySymbol d-flex justify-content-around text-center"
                v-if="currency"
              >
                <div class="pdf" v-if="book.pdfCopy">
                  <h5 class="price">{{ $t('misc.pdf') }}</h5>
                  <span v-if="book.pdfCopy.status == 1">
                    <span v-if="book.pdfCopy.price.offer">
                      {{ book.pdfCopy.price.offer }} -
                    </span>

                    <span
                      :class="
                        book.pdfCopy.price.offer
                          ? 'text-decoration-line-through'
                          : ''
                      "
                    >
                      {{ book.pdfCopy.price.original }}
                    </span>
                    {{ currency.sympl }}
                  </span>
                </div>
                <div class="hardCopy" v-if="book.hardCopy">
                  <h5 class="price">{{ $t('misc.Hardcopy') }}</h5>
                  <span v-if="book.hardCopy.status == 1">
                    <span v-if="book.hardCopy.price.offer">
                      {{ book.hardCopy.price.offer }} -
                    </span>

                    <span
                      :class="
                        book.hardCopy.price.offer
                          ? 'text-decoration-line-through text-gray-700'
                          : ''
                      "
                    >
                      {{ book.hardCopy.price.original }}
                    </span>
                    {{ currency.sympl }}
                  </span>
                </div>
              </span> -->
            </div>
            <div
              class="mb-2 mt-4 font-size-2"
              :class="$i18n.locale == 'ar' ? 'text-right' : ''"
            >
              <span class="font-weight-medium">
                {{ $t('misc.Book Format') }}:
              </span>
              <span class="ml-2 text-gray-600">
                {{ $t('misc.Choose an option') }}
              </span>
            </div>

            <div class="row mb-4">
              <div class="col mb-3 mb-md-0">
                <div class="" v-if="book.hardCopy.status == 1">
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
                      <span v-if="book.hardCopy.price.offer">
                        {{ book.hardCopy.price.offer }} -
                      </span>

                      <span
                        :class="
                          book.hardCopy.price.offer
                            ? 'text-decoration-line-through text-gray-700'
                            : ''
                        "
                      >
                        {{ book.hardCopy.price.original }}
                      </span>
                      {{ currency.sympl }}
                    </span>
                  </label>
                </div>
              </div>
              <div class="col mb-3 mb-md-0" v-if="book.pdfCopy.status == 1">
                <div class="">
                  <input
                    id="typeOfListingRadio2"
                    type="radio"
                    value="pdfCopy"
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
                      {{ $t('misc.pdf') }}
                    </span>
                    <span class="d-block text-center fw-bold">
                      <span v-if="book.pdfCopy.price.offer">
                        {{ book.pdfCopy.price.offer }} -
                      </span>

                      <span
                        :class="
                          book.pdfCopy.price.offer
                            ? 'text-decoration-line-through'
                            : ''
                        "
                      >
                        {{ book.pdfCopy.price.original }}
                      </span>
                      {{ currency.sympl }}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div
              class="woocommerce-product-details__short-description font-size-2 mb-5"
            >
              <p :class="$i18n.locale == 'ar' ? 'text-right' : ''">
                {{ book.des }}
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
      bookType: 'pdfCopy',
      price: 0,
      totalPrice: 0,
      book: props.book,
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
      if (item.bookType == 'pdfCopy') {
        if (item.book.pdfCopy.price.offer) {
          item.price = item.book.pdfCopy.price.offer
        } else {
          item.price = item.book.pdfCopy.price.original
        }
      } else {
        if (item.book.hardCopy.price.offer) {
          item.price = item.book.hardCopy.price.offer
        } else {
          item.price = item.book.hardCopy.price.original
        }
      }

      item.totalPrice = item.price * item.qty

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
  h2,
  div,
  h6 {
    text-align: right !important;
  }
}
</style>
