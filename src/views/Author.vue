<template>
  <section class="mt-5 space-bottom-2 py-5 space-bottom-lg-3">
    <div class="">
      <div class="container space-top-2 space-top-wd-3 px-3">
        <div class="row">
          <div class="col-lg-4 col-md-3 text-center" v-if="author">
            <img
              v-if="author.photo"
              class="w-100 mb-5 mb-lg-0 mt-auto"
              :src="author.photo"
              alt="Image-Description"
            />
          </div>
          <div class="col-lg-8 col-md-9">
            <div class="mb-8">
              <!-- <span class="text-gray-400 font-size-2">AUTHOR OF THE MONTH</span> -->
              <h4 class="font-weight-medium mt-2 mb-3 pb-1">
                {{ author.name }}
              </h4>

              <div class="mb-0" v-html="author.bio"></div>
            </div>
            <ul
              class="products list-unstyled row no-gutters row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-wd-4 my-0 mb-md-8 mb-wd-12"
            >
              <book-card
                v-for="book in author.books"
                :key="book.id"
                :items="book"
              />
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
          {{ $t('misc.Authors Books') }}
        </h2>
      </header>

      <div class="product">
        <carousel v-bind="settingsBook">
          <slide v-for="book in author.books" :key="book.id">
            <div
              class="js-slick-carousel products no-gutters border-top border-left border-right"
            >
              <div class="product__inner overflow-hidden p-3 p-md-4d875">
                <book-card :items="book" />
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
      author: [],
    }
  },
  mounted() {
    this.getAuthor()
  },
  methods: {
    getAuthor() {
      this.axios
        .get(`writers/${this.$route.params.id}/details`)
        .then((data) => {
          this.author = data.data.data
          console.log(this.author)
        })
    },
  },
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
.is-rtl {
  p,
  div,
  h2,
  h4 {
    text-align: right;
  }
}
</style>
