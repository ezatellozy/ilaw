<template>
  <div class="hero-slider-with-banners overflow-hidden">
    <div class="" v-if="sliders">
      <b-row>
        <b-col cols="12" class="mb-xl-0">
          <div class="bg-gray-200 min-height-530">
            <carousel v-bind="settings" class="h-100">
              <slide v-for="slider in sliders" :key="slider.id">
                <intro-slider :item="slider" />
              </slide>
              <template #addons>
                <pagination />
              </template>
            </carousel>
          </div>
        </b-col>
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
      sliders: null,
      settings: {
        autoplay: 5000,
        itemsToShow: 1,
        wrapAround: true,
        dir: 'rtl',
        snapAlign: 'center',
      },
    }
  },
  methods: {
    getSlider() {
      this.axios.get('settings').then((data) => {
        this.sliders = data.data.data.slider
      })
    },
  },
  mounted() {
    this.getSlider()
  },
}
</script>

<style>
.carousel__pagination {
  margin: 0 !important;
  padding: 20px 0;
}
</style>
