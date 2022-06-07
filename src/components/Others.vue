<template>
  <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-lg-2 mb-lg-4">
    <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">
      {{ $t('misc.Orders') }}
    </h6>
    <table class="table">
      <thead>
        <tr class="border">
          <th
            scope="col"
            class="py-3 border-bottom-0 font-weight-medium pl-3 pl-lg-5"
          >
            {{ $t('misc.Order') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.Date') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.Status') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.total') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.Actions') }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr class="border">
          <th class="pl-3 pl-md-5 font-weight-normal align-middle py-6">
            #30785
          </th>
          <td class="align-middle py-5">March 26, 2020</td>
          <td class="align-middle py-5">On hold</td>
          <td class="align-middle py-5">
            <span class="text-primary">$1,855.00</span>
            for 5 items
          </td>
          <td class="align-middle py-5">
            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-dark rounded-0 btn-wide font-weight-medium"
              >
                View
              </button>
              <router-link
                to="/order-recived"
                class="btn ml-2 rounded-0 btn-wide font-weight-medium"
              >
                <font-awesome-icon
                  class="text-black"
                  :icon="['fas', 'print']"
                />
              </router-link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.is-rtl {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  tr,
  th,
  div,
  li {
    text-align: right;
    direction: rtl;
  }
}
</style>
