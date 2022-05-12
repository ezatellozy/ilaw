<template>
  <div class="container" :class="name">
    <div class="text-center pt-4">
      <h2 class="font-size-7 mb-2 main-title">{{ title }}</h2>
    </div>
    <carousel v-bind="settings">
      <slide v-for="n in 10" :key="n">
        <div class="w-100 list-unstyled slider-container">
          <slider-card
            :imgSrc="imgSrc"
            :cardtitle="cardtitle"
            :cardDesc="cardDesc"
            :styles="cardStyles"
            :publisher="publisher"
            :partner="partner"
            :author="author"
          />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import SliderCard from './SliderCard.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
export default {
  components: { SliderCard, Carousel, Slide },
  props: [
    'title',
    'cardStyles',
    'cardtitle',
    'cardDesc',
    'name',
    'imgSrc',
    'publisher',
    'partner',
    'author',
  ],
  data() {
    return {
      settings: {
        autoplay: 2000,
        itemsToShow: 2,
        // wrapAround: true,
        snapAlign: 'center',
        breakpoints: {
          768: {
            itemsToShow: 3,
            snapAlign: 'center',
          },
          1200: {
            itemsToShow: 5,
            snapAlign: 'center',
          },
        },
      },
    }
  },
}
</script>

<style>
.slider-container {
  max-width: 200px;
}

.team .carousel__slide {
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
}
.authors .carousel__viewport {
  padding: 80px 0 !important;
}
.carousel__pagination-item {
  margin: 0 5px;
}
.authors .carousel__track {
  justify-content: center !important;
}
</style>
