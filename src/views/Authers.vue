<template>
  <h2 class="mt-11 text-center main-title">Authers</h2>
  <div class="container pb-11">
    <div class="mb-4" v-for="n in 10" :key="n">
      <slider-card
        imgSrc="./img4.jpg"
        cardtitle="Barbara O'Neil"
        cardDesc="25 Published Books"
        styles="rounded-circle"
      />
    </div>
  </div>
</template>

<script>
import SliderCard from '@/components/SliderCard.vue'
export default {
  components: { SliderCard },
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
