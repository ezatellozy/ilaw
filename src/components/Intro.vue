<template>
  <div class="hero-slider-with-banners overflow-hidden">
    <div class="">
      <b-row>
        <b-col cols="12" class="mb-xl-0">
          <div class="bg-gray-200 min-height-530">
            <carousel v-bind="settings" class="h-100">
              <slide v-for="n in 5" :key="n">
                <!-- <intro-slider /> -->
                <intro-slider />
              </slide>

              <!-- <slide>
                <div class="d-block d-xl-flex media">
                  <div
                    class="hero__body media-body align-self-center mb-4 mb-xl-0"
                  >
                    <div
                      class="hero__pretitle text-uppercase text-gray-400 font-weight-bold mb-3"
                      data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="200"
                    >
                      Book Club
                    </div>

                    <h2
                      class="hero__title font-size-10 mb-3"
                      data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="300"
                    >
                      <span class="hero__title--1 font-weight-bold d-block">
                        A selection with
                      </span>
                      <span class="hero__title--2 d-block font-weight-normal">
                        only the best books
                      </span>
                    </h2>

                    <p
                      class="hero__subtitle font-size-2 mb-5"
                      data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="400"
                    >
                      Sale Ends Midnight 30th April 2020
                    </p>

                    <a
                      href="../shop/v2.html"
                      class="hero__btn btn btn-primary-green text-white btn-wide"
                      data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="500"
                    >
                      Explore Books
                    </a>
                  </div>

                  <div
                    data-scs-animation-in="fadeInUp"
                    data-scs-animation-delay="600"
                  >
                    <img
                      src="@/assets/img2.png"
                      class="img-fluid"
                      alt="image-description"
                    />
                  </div>
                </div>
              </slide>
              <slide>
                <div class="d-block d-xl-flex media">
                  <div
                    class="hero__body media-body align-self-center mb-4 mb-xl-0"
                  >
                    <div
                      class="hero__pretitle text-uppercase text-gray-400 font-weight-bold mb-3"
                      data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="200"
                    >
                      Book Club
                    </div>

                    <h2
                      class="hero__title font-size-10 mb-3"
                      data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="300"
                    >
                      <span class="hero__title--1 font-weight-bold d-block">
                        A selection with
                      </span>
                      <span class="hero__title--2 d-block font-weight-normal">
                        only the best books
                      </span>
                    </h2>

                    <p
                      class="hero__subtitle font-size-2 mb-5"
                      data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="400"
                    >
                      Sale Ends Midnight 30th April 2020
                    </p>

                    <a
                      href="../shop/v2.html"
                      class="hero__btn btn btn-primary-green text-white btn-wide"
                      data-scs-animation-in="fadeInUp"
                      data-scs-animation-delay="500"
                    >
                      Explore Books
                    </a>
                  </div>

                  <div
                    data-scs-animation-in="fadeInUp"
                    data-scs-animation-delay="600"
                  >
                    <img
                      src="@/assets/img2.png"
                      class="img-fluid"
                      alt="image-description"
                    />
                  </div>
                </div>
              </slide> -->
              <template #addons>
                <pagination />
              </template>
            </carousel>
          </div>
        </b-col>
        <!-- <b-col cols="12" xl="3" class="d-none d-xxl-block">
          <div class="banners d-md-flex d-xl-block">
            <div
              class="slider-banner flex-grow-1 mr-md-3 mr-xl-0 bg-gray-200 p-6 mb-4d875 position-relative overflow-hidden"
              style="height: 250px;"
            >
              <div class="z-index-2 position-relative">
                <h2 class="slider-banner__title font-size-4 text-lh-md">
                  <span
                    class="slider-banner__title--1 d-block font-weight-bold"
                  >
                    Best Seller
                  </span>
                  <span class="slider-banner__title--2">Books</span>
                </h2>
                <a
                  href="#"
                  class="slider-banner__btn text-primary-green text-uppercase font-weight-medium"
                >
                  Purchase
                </a>
              </div>
              <img
                src="@/assets/img3.png"
                class="img-fluid position-absolute bottom-n60 right-n60"
                alt="image-description"
              />
            </div>
            <div
              class="slider-banner flex-grow-1 ml-md-3 ml-xl-0 bg-gray-200 p-6 position-relative overflow-hidden"
              style="height: 250px;"
            >
              <div class="z-index-2 position-relative">
                <h2 class="slider-banner__title font-size-4 text-lh-md">
                  <span
                    class="slider-banner__title--1 d-block font-weight-bold"
                  >
                    Featured Book
                  </span>
                  <span class="slider-banner__title--2">of the Month</span>
                </h2>
                <a
                  href="#"
                  class="slider-banner__btn text-primary-green text-uppercase font-weight-medium"
                >
                  Purchase
                </a>
              </div>
              <img
                src="@/assets/img3.png"
                class="img-fluid position-absolute bottom-0 right-n60"
                alt="image-description"
              />
            </div>
          </div>
        </b-col> -->
      </b-row>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import IntroSlider from '@/components/IntroSlider.vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
export default {
  components: { Carousel, Slide, Pagination, IntroSlider },
  data() {
    return {
      settings: {
        autoplay: 5000,
        itemsToShow: 1,
        // wrapAround: true,
        snapAlign: 'center',
      },
    }
  },
}
</script>

<style>
.carousel__pagination {
  margin: 0 !important;
  padding: 20px 0;
}
</style>
