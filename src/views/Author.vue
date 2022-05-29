<template>
  <section class="mt-5 space-bottom-2 py-5 space-bottom-lg-3">
    <div class="">
      <div class="container space-top-2 space-top-wd-3 px-3">
        <div class="row">
          <div class="col-lg-4 col-wd-3 d-flex">
            <img
              class="img-fluid mb-5 mb-lg-0 mt-auto"
              src="@/assets/img5.png"
              alt="Image-Description"
            />
          </div>
          <div class="col-lg-8 col-wd-9">
            <div class="mb-8">
              <span class="text-gray-400 font-size-2">AUTHOR OF THE MONTH</span>
              <h6 class="font-size-7 ont-weight-medium mt-2 mb-3 pb-1">
                Jessica Simpson
              </h6>
              <p class="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <ul
              class="products list-unstyled row no-gutters row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-wd-4 my-0 mb-md-8 mb-wd-12"
            >
              <book-card v-for="n in 3" :key="n" />
              <!-- <book-cart v-for="n in 3" :key="n" /> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="space-bottom-3 author">
    <div class="container">
      <header class="mb-2 d-md-flex justify-content-between align-items-center">
        <h2 class="font-size-7 mb-3 mb-md-0">
          Author's Books
        </h2>
      </header>

      <div class="product">
        <carousel v-bind="settingsBook">
          <slide v-for="n in 10" :key="n">
            <div
              class="js-slick-carousel products no-gutters border-top border-left border-right"
            >
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <book-card />
              </div>
            </div>
          </slide>
          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import BookCard from '@/components/BookCard.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
export default {
  components: { Carousel, Slide, Pagination, BookCard },

  data() {
    return {
      settingsBook: {
        autoplay: 5000,
        itemsToShow: 1,
        // wrapAround: true,
        snapAlign: 'center',
        breakpoints: {
          576: {
            itemsToShow: 1,
            snapAlign: 'center',
          },
          768: {
            itemsToShow: 3,
            snapAlign: 'center',
          },
          992: {
            itemsToShow: 4,
            snapAlign: 'center',
          },
        },
      },
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
.container {
  transform: translateY(-100px);
  .img-profile {
    // padding: 2px;
    width: 200px;
    height: 200px;
    // background: #fff;
    // outline: #212529 2px solid;
    overflow: hidden;
  }
}

.space-2,
.space-bottom-2 {
  padding-bottom: 4rem !important;
}

.author {
  .products {
    width: calc(100% - 1px);
    .product__inner {
      padding: 0 !important;
    }
  }
}
</style>
