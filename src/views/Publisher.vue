<template>
  <div class="container">
    <div class="mt-5 pio pt-5">
      <div class="row">
        <div class="col-lg-4 col-md-3 text-center">
          <img
            v-if="publisher.image"
            class="img-fluid my-auto"
            :src="publisher.image"
            alt="Image-Description"
          />
        </div>
        <div class="col-lg-8 col-md-9 px-4">
          <div class="mb-8 w-100">
            <h6 class="fs-4 primary-color mt-2 mb-3 pb-1">
              {{ publisher.company_name }}
            </h6>
            <p class="mb-0">
              {{ publisher.bio }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="publisher">
      <h2 class="main-title">
        {{ $t('misc.Books') }}
      </h2>

      <div class="products-book border-top border-right">
        <ul
          class="list-unstyled products border-left border-bottom mb-0"
          v-for="book in publisher.books"
          :key="book.id"
        >
          <book-card :items="book" />
        </ul>
      </div>
      <div class="text-center">
        <button class="btn btn-primary mt-5">See more</button>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue'

export default {
  components: { BookCard },

  data() {
    return {
      publisher: [],
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
  mounted() {
    this.getPublisher()
  },
  methods: {
    getPublisher() {
      this.axios
        .get(`/vendors/vendor/${this.$route.params.id}`)
        .then((data) => {
          this.publisher = data.data.data
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
.pio {
  .row {
    padding: 40px 0 20px;
  }
}
.publisher {
  .products-book {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
.is-rtl {
  p,
  h2,
  h6 {
    text-align: right;
  }
}
</style>
