<template>
  <intro />
  <div class="publisher">
    <slider
      title="Publisher"
      cardStyles="rounded-circle"
      imgSrc="./publisher2.jpg"
      publisher="true"
    />
  </div>
  <Content />
  <div class="auther mb-11">
    <slider
      cardDesc="25 Published Books"
      cardtitle="Barbara O'Neil"
      cardStyles="rounded-circle"
      title="Authers"
      imgSrc="./img4.jpg"
      author="true"
    />
  </div>

  <slider title="partners" partner="true" imgSrc="./img3.png" />
  <attract-features />
</template>

<script>
import Intro from '@/components/Intro.vue'
import Content from '@/components/Content.vue'
import Slider from '@/components/Slider.vue'
import AttractFeatures from '@/components/AttractFeatures.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: { Intro, Content, Slider, AttractFeatures },
  data() {
    return {
      authors: null,
      publisher: null,
    }
  },
  methods: {
    getAuthors() {
      this.axios.get('writer/writers').then((data) => {
        console.log(data.data)
      })
    },
    getPublisher() {
      this.axios.get('vendors/vendors').then((data) => {
        console.log(data.data)
      })
    },
  },
  mounted() {
    this.getAuthors()
    this.getPublisher()
  },
}
</script>

<style scoped lang="scss">
.publisher {
  background-color: #f5f5f5;
}
</style>
