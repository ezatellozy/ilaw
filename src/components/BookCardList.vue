<template>
  <Teleport to="body">
    <BookTypeModal v-if="BookTypeModal" @closemodal="addToCart" :book="items" />
  </Teleport>
  <div class="product product__list">
    <div class="product__inner overflow-hidden bg-hover-white p-3 p-md-4d875">
      <div class="product__inner overflow-hidden p-3 p-md-4d875">
        <div
          class="woocommerce-LoopProduct-link woocommerce-loop-product__link row position-relative"
        >
          <div
            class="col-md-auto woocommerce-loop-product__thumbnail mb-3 mb-md-0"
          >
            <a href="../shop/single-product-v5.html" class="d-block">
              <router-link :to="`/book/${items.id}`">
                <img
                  :src="items.photo"
                  class="d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image"
                  alt="image-description"
                />
              </router-link>
            </a>
          </div>
          <div
            class="col-md woocommerce-loop-product__body product__body pt-3 bg-white mb-3 mb-md-0"
          >
            <div class="text-uppercase font-size-1 mb-1 text-truncate">
              <router-link to="/book" class="text-gray-700">
                {{ items.section.name }}
              </router-link>
            </div>
            <h2
              class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 crop-text-2 h-dark"
            >
              <router-link to="/book" class="text-gray-700">
                {{ items.name }}
              </router-link>
            </h2>
            <div class="font-size-2 mb-2 text-truncate">
              <router-link to="/authers" class="text-gray-700">
                {{ items.writer.name }}
              </router-link>
            </div>
            <p class="font-size-2 mb-2 crop-text-2">
              {{ items.des }}
            </p>
            <div v-if="currency">
              <div class="pdf" v-if="items.pdfCopy">
                <h5 class="price">{{ $t('misc.pdf') }}</h5>
                <span v-if="items.pdfCopy.status == 1" class="mb-2">
                  <span v-if="items.pdfCopy.price.offer">
                    {{ items.pdfCopy.price.offer }} -
                  </span>

                  <span
                    :class="
                      items.pdfCopy.price.offer
                        ? 'text-decoration-line-through'
                        : ''
                    "
                  >
                    {{ items.pdfCopy.price.original }}
                  </span>
                  {{ currency.sympl }}
                </span>
              </div>
              <div class="hardCopy" v-if="items.hardCopy">
                <h5 class="price">{{ $t('misc.Hardcopy') }}</h5>
                <span v-if="items.hardCopy.status == 1" class="mb-2">
                  <span v-if="items.hardCopy.price.offer">
                    {{ items.hardCopy.price.offer }} -
                  </span>

                  <span
                    :class="
                      items.hardCopy.price.offer
                        ? 'text-decoration-line-through text-gray-700'
                        : ''
                    "
                  >
                    {{ items.hardCopy.price.original }}
                  </span>
                  {{ currency.sympl }}
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-auto d-flex align-items-center">
            <a
              role="button"
              @click="addToCart"
              class="text-uppercase text-dark h-dark font-weight-medium mr-4"
            >
              <span class="product__add-to-cart">
                {{ $t('misc.ADD TO CART') }}
              </span>
              <span class="product__add-to-cart-icon font-size-4">
                <i class="flaticon-icon-126515"></i>
              </span>
            </a>

            <a
              role="button"
              @click="addToWashList(items)"
              class="text-uppercase text-dark h-dark font-weight-medium"
            >
              <i class="flaticon-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookTypeModal from './BookTypeModal.vue'
// import { inject } from 'vue'
import { useStore } from 'vuex'
// import { useI18n } from 'vue-i18n'
export default {
  props: ['items'],
  components: { BookTypeModal },
  data() {
    return {
      BookTypeModal: false,
    }
  },
  methods: {
    addToCart() {
      this.BookTypeModal = !this.BookTypeModal
    },
    addToWashlist() {
      this.BookTypeModal = !this.BookTypeModal
    },
  },
  computed: {
    currency() {
      return this.$store.getters.currency
    },
  },
  setup() {
    const store = useStore()
    // const toast = inject('toast')
    // const { t } = useI18n()

    function addToWashList(item) {
      store.dispatch('addToWashlist', item)
      // toast.success(t('misc.addSuccess'))
    }
    return { addToWashList }
  },
}
</script>

<style scoped lang="scss">
@media (min-width: 1200px) {
  .products
    .product:not(.product__card):not(.product__no-border):not(.product__list):not(.product__space):hover {
    border-color: #161619;
  }
  .products
    .product:not(.product__card):not(.product__no-border):not(.product__list):not(.product__space):hover::before {
    background-color: #161619;
  }
}

.attachment-shop_catalog {
  width: 200px;
  height: 200px;
}

.is-rtl {
  div {
    text-align: right;
  }
}
</style>
