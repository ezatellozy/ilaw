<template>
  <button
    type="button"
    class="btn mt-2 btn-danger"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    {{ $t('misc.delete') }}
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    refs="modal"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ $t('misc.delete') }}
          </h5>
          <button
            ref="closeModal"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ $t('misc.are you sure you want to delete address') }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            {{ $t('misc.Close') }}
          </button>
          <button type="button" @click="deleteItem" class="btn btn-primary">
            {{ $t('misc.delete') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  methods: {
    deleteItem() {
      this.axios.post(`/user/address/${this.id}/delete`).then((data) => {
        this.$toast.success(data.data.message)
        setTimeout(() => {
          window.location.reload()
        }, 300)
        this.$refs.closeModal.click()
      })
    },
  },
}
</script>

<style>
.delete {
  position: absolute;
  width: 100%;
}
</style>
