<template>
  <swiper
    :modules="modules"
    @swiper="onSwiper"
    :slides-per-view="1"
    grab-cursor
    :preload-images="false"
    lazy
    :thumbs="{ swiper: thumbs }"
    :dir="$i18n.locale == 'ar' ? 'rtl' : ''"
    v-if="products.slider"
  >
    <SwiperSlide
      v-for="(product, index) in products.slider"
      :key="product.id"
      class="customSlide"
    >
      <div class="swiper-thumbs" @click="slideHandler(index)">
        <img :src="product" style="width: 100%;" />
      </div>
    </SwiperSlide>
  </swiper>
</template>

<script>
import { ref, watch, toRefs } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Thumbs, Lazy } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'

export default {
  components: { Swiper, SwiperSlide },
  // setup() {
  //   return {
  //     modules: [A11y, Thumbs, Lazy],
  //   }
  // },
  props: {
    currentSlide: Number,
    thumbs: Object,
    products: Object,
  },
  data() {
    return {
      lightbox: false,
      slide: 0,
    }
  },
  methods: {
    closeLightbox(e) {
      this.lightbox = e
    },
    slideHandler(i) {
      this.slide = i
      this.lightbox = true
    },
  },

  setup(props) {
    const swiperRef = ref(null)

    const { currentSlide } = toRefs(props)

    watch(currentSlide, () => {
      if (swiperRef.value !== null) {
        swiperRef.value.slideTo(props.currentSlide)
      }
    })

    const onSwiper = (swiper) => {
      swiperRef.value = swiper
    }

    return {
      swiperRef,
      onSwiper,
      A11y,
      Lazy,
      Thumbs,
    }
  },
}
</script>
