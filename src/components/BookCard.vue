<template>
  <BookTypeModal v-if="BookTypeModal" @closemodal="addToCart" :book="items" />
  <li class="product col bg-hover-white">
    <div class="product__inner overflow-hidden p-3 p-md-4d875" v-if="items">
      <div
        class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative"
      >
        <div class="woocommerce-loop-product__thumbnail">
          <router-link :to="`/book/${items.id}`">
            <img
              :src="items.main_media"
              class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
              alt="image-description"
            />
          </router-link>
        </div>
        <div
          class="woocommerce-loop-product__body product__body pt-3 text-start"
        >
          <div class="text-uppercase font-size-1 mb-1 text-truncate">
            <router-link to="/book" class="text-gray-700">
              {{ items.category }}
            </router-link>
          </div>
          <h2
            class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"
          >
            <router-link to="/book" class="text-gray-700">
              {{ items.name }}
            </router-link>
          </h2>
          <div class="font-size-2 mb-1 text-truncate">
            <router-link to="/authers" class="text-gray-700">
              {{ items.author }}
            </router-link>
          </div>
          <div
            class="price d-flex align-items-center justify-content-start font-weight-medium font-size-3"
          >
            <span class="woocommerce-Price-amount amount">
              <span class="woocommerce-Price-currencySymbol">
                {{ items.pdf_price }} - {{ items.hardcopy_price }}
              </span>
              {{ currency }}
            </span>
          </div>
          <div
            class="product__rating d-md-flex align-items-center justify-content-start font-size-2 d-none"
          >
            <div class="text-yellow-darker mr-2">
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
              <small class="far fa-star"></small>
              <small class="far fa-star"></small>
            </div>
            <div class="">{{ items.rate }}</div>
          </div>
        </div>
        <div class="product__hover d-flex align-items-center">
          <a
            role="button"
            @click="addToCart"
            class="text-uppercase text-dark h-dark font-weight-medium mr-auto"
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
            <span class="product__add-to-cart-icon font-size-4">
              <i class="flaticon-heart"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { inject } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import BookTypeModal from './BookTypeModal.vue'

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
    const toast = inject('toast')
    const { t } = useI18n()

    function addToWashList(item) {
      store.commit('addToWashlist', item)
      toast.success(t('misc.addSuccess'))
    }
    return { addToWashList }
  },
}
</script>

<style>
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
</style>
