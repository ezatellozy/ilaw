<template>
  <div class="author col px-0">
    <div class="item">
      <router-link :to="routerPath == 'partners' ? '' : `/${routerPath}/${id}`">
        <figure class="devLogo mx-auto">
          <img
            v-if="imgSrc"
            :src="imgSrc"
            :class="styles"
            alt=""
            class="w-auto"
          />
        </figure>
      </router-link>
    </div>
    <div class="author__body text-center mb-2">
      <!-- <h2 class="author__name h6 mb-0">{{ cardtitle }}</h2> -->
      <div v-if="routerPath == 'author'" class="text-gray-700 font-size-2">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['styles', 'imgSrc', 'id', 'routerPath', 'name'],
}
</script>

<style scoped>
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
