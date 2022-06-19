<template>
  <div class="cart-menu">
    <div class="over" @click="closeCartMenu"></div>
    <aside
      id="sidebarContent1"
      class="u-sidebar u-sidebar__xl"
      aria-labelledby="sidebarNavToggler1"
    >
      <div class="u-sidebar__scroller js-scrollbar">
        <div class="u-sidebar__container">
          <div class="u-header-sidebar__footer-offset">
            <!-- Toggle Button -->
            <div
              class="d-flex align-items-center border-bottom z-index-2 mt-5 mr-md-6 mr-4"
            >
              <button
                type="button"
                class="close ml-auto"
                @click="closeCartMenu"
              >
                <span aria-hidden="true">
                  {{ $t('misc.Close') }}
                  <i class="fas fa-times ml-2"></i>
                </span>
              </button>
              <header class="px-4 px-md-6 py-4">
                <h2 class="font-size-3 mb-0 d-flex align-items-center">
                  <i class="flaticon-icon-126515 mr-3 font-size-5"></i>
                  {{ $t('misc.Your shopping bag') }} ({{ totalQuantity }})
                </h2>
              </header>
            </div>
            <!-- End Toggle Button -->

            <!-- Content -->
            <div class="u-sidebar__body">
              <div class="u-sidebar__content u-header-sidebar__content">
                <!-- Title -->

                <!-- End Title -->

                <div
                  class="px-4 py-5 px-md-6 border-bottom"
                  v-for="item in cart"
                  :key="item.id"
                >
                  <div class="media">
                    <a :href="`/book/${item.book.id}`" class="d-block">
                      <img
                        :src="item.book.photo"
                        class="bookimg"
                        alt="image-description"
                      />
                    </a>
                    <div
                      class="media-body"
                      :class="$i18n.locale == 'ar' ? 'mr-4' : 'ml-4'"
                    >
                      <div
                        class="text-primary text-uppercase font-size-1 mb-1 text-truncate"
                      >
                        <a :href="`/shop/${item.book.section.id}`">
                          {{ item.book.section.name }}
                        </a>
                      </div>
                      <h2
                        class="woocommerce-loop-product__title h6 text-lh-md mb-1 text-height-2 crop-text-2"
                      >
                        <a :href="`/book/${item.book.id}`" class="text-dark">
                          {{ item.book.name }}
                        </a>
                      </h2>
                      <div
                        class="font-size-2 mb-1 text-truncate"
                        v-if="item.book.writer"
                      >
                        <a
                          :href="`/author/${item.book.writer.id}`"
                          class="text-gray-700"
                        >
                          {{ item.book.writer.name }}
                        </a>
                      </div>
                      <div class="font-size-2 mb-1 text-truncate">
                        <p class="text-gray-700 my-2">{{ item.bookType }}</p>
                      </div>
                      <div
                        class="price d-flex align-items-center font-weight-medium font-size-3"
                      >
                        <span class="woocommerce-Price-amount amount">
                          {{ item.qty }} x
                          <span class="woocommerce-Price-currencySymbol">
                            {{ item.price }}
                          </span>
                          {{ currency }}
                        </span>
                      </div>
                    </div>
                    <div class="mt-3 ml-3">
                      <a
                        role="button"
                        href="#"
                        @click="removeItem(item)"
                        class="text-dark"
                      >
                        <i class="fas fa-times"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="px-4 py-5 px-md-6 d-flex justify-content-between align-items-center font-size-3"
                >
                  <h4 class="mb-0 font-size-3">{{ $t('misc.Subtotal:') }}</h4>
                  <div class="font-weight-medium">{{ totalPrice }}</div>
                </div>

                <div class="px-4 mb-8 px-md-6">
                  <router-link
                    to="/cart"
                    class="btn btn-block py-4 rounded-0 btn-outline-dark mb-4"
                    @click="closeCartMenu"
                  >
                    {{ $t('misc.View Cart') }}
                  </router-link>
                </div>
              </div>
            </div>
            <!-- End Content -->
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  methods: {
    closeCartMenu() {
      this.$emit('closeMenu')
    },
    removeItem(item) {
      this.$store.commit('removeItem', item)
    },
  },
  mounted() {
    console.log(this.cart)
  },
  computed: {
    totalQuantity() {
      return this.$store.getters.totalQuantity
    },
    totalPrice() {
      return this.$store.getters.totalPrice
    },
    currency() {
      return this.$store.getters.currency
    },
    cart() {
      return this.$store.getters.cart
    },
  },
}
</script>

<style scoped lang="scss">
.u-sidebar {
  opacity: 1 !important;
}

.cart-menu {
  .u-sidebar.u-sidebar__md.u-sidebar--left {
    z-index: 101;
  }
  .over {
    &::before {
      position: fixed;
      content: '';
      top: 0%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.63);
      z-index: 100;
    }
  }
}
.bookimg {
  width: 200px;
  height: 200px;
}
</style>
