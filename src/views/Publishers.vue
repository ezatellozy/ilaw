<template>
  <h2 class="mt-11 text-center main-title">{{ $t('misc.publishers') }}</h2>
  <div class="container pb-11">
    <div class="mb-4" v-for="publisher in publishers" :key="publisher.id">
      <div class="author col px-0">
        <div class="item">
          <router-link :to="`/publisher/${publisher.id}`">
            <figure class="devLogo mx-auto">
              <img
                v-if="publisher.photo"
                :src="publisher.photo"
                alt=""
                class="w-auto"
              />
            </figure>
          </router-link>
        </div>
        <div class="author__body text-center mb-2">
          <!-- <h2 class="author__name h6 mb-0">{{ cardtitle }}</h2> -->
          <div class="text-gray-700 font-size-2 text-center">
            {{ publisher.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publishers: null,
    }
  },
  mounted() {
    this.getWriters()
  },
  methods: {
    getWriters() {
      this.axios.get('publishers').then((data) => {
        this.publishers = data.data.data
      })
    },
  },
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.devLogo {
  border-radius: 50%;
  height: 150px;
  border: 2px solid #fff;
  /* background: #141e61; */
  width: 150px;
  position: relative;
}
img {
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  max-width: 100%;
  /* padding: 15px; */
}
</style>
