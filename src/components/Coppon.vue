<template>
  <div class="row mt-4">
    <div class="coupon row d-flex justify-content-between">
      <div class="col-md-10 d-flex col-lg-8">
        <input
          id="coupon_code"
          class="input-text px-4 py-2 mr-1 w-100 col-sm-8"
          name="coupon_code"
          value=""
          :placeholder="$t('misc.Coupon code')"
          type="text"
        />
        <button
          class="update-cart bg-transparent border-0 text-white rounded px-4 py-2 mt-2 mt-sm-0 col-sm-4"
        >
          {{ $t('buttons.Apply coupon') }}
        </button>
      </div>
      <div class="col-md-2">
        <button
          v-if="withUpdate"
          class="update-cart mt-2 mt-md-0 bg-transparent border-0 text-white rounded px-4 py-2"
        >
          {{ $t('buttons.Update') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['withUpdate'],
}
</script>

<style lang="scss" scoped>
.update-cart {
  background: #333 !important;
  width: 100%;
  &:hover {
    background: #e23e57 !important;
  }
}
</style>
