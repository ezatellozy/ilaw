<template>
  <div class="container">
    <div class="mt-5 pio d-flex align-items-center pt-5">
      <div class="row">
        <div class="col-lg-4 col-wd-3 d-flex">
          <img
            class="img-fluid my-auto"
            src="@/assets/technologo.png"
            alt="Image-Description"
          />
        </div>
        <div class="col-lg-8 col-wd-9">
          <div class="mb-8">
            <h6 class="fs-4 primary-color ont-weight-medium mt-2 mb-3 pb-1">
              Jessica Simpson
            </h6>
            <p class="mb-0 font-size-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="publisher">
      <h2 class="main-title">
        Books
      </h2>

      <div class="products-book border-top border-right">
        <ul
          class="list-unstyled products border-left border-bottom mb-0"
          v-for="n in 8"
          :key="n"
        >
          <book-card />
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
</style>
