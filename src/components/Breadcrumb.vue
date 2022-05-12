<template>
  <div class="page-header border-bottom mb-8">
    <div class="container">
      <div class="d-md-flex justify-content-end align-items-center py-4">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item active">
              {{ path }}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: '',
    }
  },
  mounted() {
    this.getRouter()
  },
  methods: {
    getRouter() {
      this.path = this.$route.name
    },
  },

  watch: {
    $route() {
      this.getRouter()
    },
  },
}
</script>

<style></style>
