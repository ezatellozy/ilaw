<template>
  <div class="thumnails-wrapper">
    <Swiper
      @swiper="onSwiper"
      :slides-per-view="4"
      :breakpoints="breakpoints"
      :space-between="10"
      :modules="modules"
      watch-slides-progress
      :dir="$i18n.locale == 'ar' ? 'rtl' : ''"
      v-if="products.slider"
    >
      <SwiperSlide
        v-for="(product, index) in products.slider"
        :key="product.id"
        @click.stop="$emit('update:currentSlide', Number(index))"
      >
        <img class="img-fluid w-100" :src="product" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/bundle'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      breakpoints: {
        450: {
          slidesPerView: 5,
          spaceBetweenSlides: 30,
        },
        600: {
          slidesPerView: 6,
          spaceBetweenSlides: 30,
        },
        768: {
          slidesPerView: 8,
          spaceBetweenSlides: 30,
        },
        992: {
          slidesPerView: 6,
          spaceBetweenSlides: 30,
        },
      },
    }
  },
  props: {
    currentSlide: Number,
    products: Object,
  },

  emits: ['thumbs', 'update:currentSlide'],
  setup(props, { emit }) {
    const onSwiper = (swiper) => {
      emit('thumbs', swiper)
    }

    return {
      onSwiper,

      modules: { Thumbs },
    }
  },
}
</script>
<style lang="scss">
.thumnails-wrapper {
  .swiper-wrapper {
    justify-content: center !important;
  }
}
</style>
