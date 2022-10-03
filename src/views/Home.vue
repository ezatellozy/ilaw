<template>
  <intro />
  <Content routeName="books" title="Bestselling Books" />
  <Content routeName="books" title="Newest" />
  <div class="publisher">
    <slider
      title="publishers"
      cardStyles="rounded-circle"
      routerPath="publisher"
      name="publisher"
      v-if="publisher"
      :items="publisher"
    />
  </div>

  <div class="auther mb-11">
    <slider
      v-if="authors"
      cardStyles="rounded-circle"
      title="Authers"
      name="author"
      routerPath="author"
      :items="authors"
    />
  </div>

  <slider
    v-if="partners"
    title="partners"
    name="partners"
    routerPath="partners"
    :items="partners"
  />
  <attract-features v-if="false" />
</template>

<script>
import Intro from '@/components/Intro.vue'
import Content from '@/components/Content.vue'
import Slider from '@/components/Slider.vue'
import AttractFeatures from '@/components/AttractFeatures.vue'

export default {
  name: 'Home',
  components: { Intro, Content, Slider, AttractFeatures },
  data() {
    return {
      authors: null,
      publisher: null,
      partners: null,
    }
  },
  mounted() {
    this.getAuthors()
    this.getPublisher()
  },
  methods: {
    getAuthors() {
      this.$store.commit('pageLoading', true)
      this.axios.get('writers').then((data) => {
        this.authors = data.data.data
        this.$store.commit('pageLoading', false)
      })
    },
    getPublisher() {
      this.$store.commit('pageLoading', true)
      this.axios.get('publishers').then((data) => {
        this.publisher = data.data.data
        this.$store.commit('pageLoading', false)
      })
    },
  },
}
</script>

<style scoped lang="scss">
.publisher {
  background-color: #f5f5f5;
}
</style>
