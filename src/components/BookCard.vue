<template>
  <Teleport to="body">
    <BookTypeModal v-if="BookTypeModal" @closemodal="addToCart" :book="items" />
  </Teleport>
  <li class="product col bg-hover-white">
    <div class="product__inner overflow-hidden p-3 p-md-4d875" v-if="items">
      <div
        class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative"
      >
        <div class="woocommerce-loop-product__thumbnail">
          <router-link :to="`/book/${items.id}`">
            <img
              :src="items.photo"
              class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
              alt="image-description"
            />
          </router-link>
        </div>
        <div
          class="woocommerce-loop-product__body product__body pt-3 text-start"
        >
          <div class="text-uppercase font-size-1 mb-1 text-truncate">
            <router-link
              :to="`/shop/${items.section.id}`"
              class="text-gray-700"
            >
              {{ items.section.name }}
            </router-link>
          </div>
          <h2
            class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"
          >
            <router-link :to="`/book/${items.id}`" class="text-gray-700">
              {{ items.name }}
            </router-link>
          </h2>
          <div class="font-size-2 mb-1 text-truncate">
            <router-link
              :to="`/author/${items.writer.id}`"
              class="text-gray-700"
            >
              {{ items.writer.name }}
            </router-link>
          </div>
          <div
            class="price d-flex align-items-center justify-content-start font-weight-medium font-size-3"
          >
            <span class="woocommerce-Price-amount amount">
              <span class="woocommerce-Price-currencySymbol">
                <div class="pdf" v-if="items.pdfCopy">
                  <h5 class="price">{{ $t('misc.pdf') }}</h5>
                  <span v-if="items.pdfCopy.status == 1">
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
                    {{ currency }}
                  </span>
                </div>
                <div class="hardCopy" v-if="items.hardCopy">
                  <h5 class="price">{{ $t('misc.Hardcopy') }}</h5>
                  <span v-if="items.hardCopy.status == 1">
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
                    {{ currency }}
                  </span>
                </div>
              </span>
            </span>
          </div>
          <div
            class="product__rating d-md-flex align-items-center justify-content-start font-size-2 d-none"
          >
            <div class="text-yellow-darker mr-2">
              <small
                :class="items.reviewsTotal == 0 ? 'far' : 'fas'"
                class="fa-star"
              ></small>
              <small
                :class="items.reviewsTotal > 1 ? 'fas' : 'far'"
                class="fa-star"
              ></small>
              <small
                :class="items.reviewsTotal > 2 ? 'fas' : 'far'"
                class="fa-star"
              ></small>
              <small
                :class="items.reviewsTotal > 3 ? 'fas' : 'far'"
                class="fa-star"
              ></small>
              <small
                :class="items.reviewsTotal > 4 ? 'fas' : 'far'"
                class="fa-star"
              ></small>
            </div>
            <div class="">{{ items.reviewsTotal }}</div>
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
  mounted() {
    console.log(this.items)
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
