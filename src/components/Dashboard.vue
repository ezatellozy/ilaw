<template>
  <div
    class="pt-5 pt-lg-8 pl-md-5 pl-lg-9 space-bottom-2 space-bottom-lg-3 mb-xl-1"
  >
    <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">
      {{ $t('misc.Dashboard') }}
    </h6>
    <div class="ml-lg-1 mb-4">
      <span class="font-size-22">{{ $t('misc.Hello') }} {{ user }}</span>
      <span class="font-size-2">
        (
        <bdi v-if="user">{{ $t('misc.not') }}</bdi>
        {{ user }}?
        <a role="button" @click="logout" class="link-black-100" href="#">
          {{ $t('misc.Logout') }}
        </a>
        )
      </span>
    </div>
    <div class="mb-4">
      <p class="mb-0 font-size-2 ml-lg-1 text-gray-600">
        {{ $t('misc.From your account dashboard you can view your') }}
        <span class="text-dark">{{ $t('misc.recent orders') }},</span>
        {{ $t('misc.manage your') }}
        <span class="text-dark">
          {{ $t('misc.shipping and billing addresses') }}
        </span>
        {{ $t('misc.and edit your') }}
        <span class="text-dark">
          {{ $t('misc.password and account details') }}.
        </span>
      </p>
    </div>
    <div class="row no-gutters row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div class="col">
        <div class="border py-6 text-center">
          <router-link
            to="/account/orders"
            class="btn btn-primary rounded-circle px-4 mb-2"
          >
            <span class="flaticon-order font-size-10 btn-icon__inner"></span>
          </router-link>
          <div class="font-size-3 mb-xl-1 text-center">
            {{ $t('misc.Orders') }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="border border-left-0 py-6 text-center">
          <router-link
            to="/account/books"
            class="btn bg-gray-200 rounded-circle px-4 mb-2"
          >
            <span class="font-size-10 btn-icon__inner text-primary">
              <i class="fa-solid fa-book"></i>
            </span>
          </router-link>
          <div class="font-size-3 mb-xl-1 text-center">
            {{ $t('misc.Books') }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="border border-left-0 py-6 text-center">
          <router-link
            to="/account/addresses"
            class="btn bg-gray-200 rounded-circle px-4 mb-2"
          >
            <span
              class="flaticon-place font-size-10 btn-icon__inner text-primary"
            ></span>
          </router-link>
          <div class="font-size-3 mb-xl-1 text-center">
            {{ $t('misc.Addresses') }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="border py-6 text-center">
          <router-link
            to="/account/accountDetails"
            class="btn bg-gray-200 rounded-circle px-4 mb-2"
          >
            <span
              class="flaticon-user-1 font-size-10 btn-icon__inner text-primary"
            ></span>
          </router-link>
          <div class="font-size-3 mb-xl-1 text-center">
            {{ $t('misc.Account details') }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="border border-left-0 py-6 text-center">
          <router-link
            to="/account/wishlist"
            class="btn bg-gray-200 rounded-circle px-4 mb-2"
          >
            <span
              class="flaticon-heart font-size-10 btn-icon__inner text-primary"
            ></span>
          </router-link>
          <div class="font-size-3 mb-xl-1 text-center">
            {{ $t('misc.Wishlist') }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="border border-left-0 py-6 text-center">
          <router-link
            to="/account/payment"
            class="btn bg-gray-200 rounded-circle px-4 mb-2"
          >
            <span
              class="flaticon-credit font-size-10 btn-icon__inner text-primary"
            ></span>
          </router-link>
          <div class="font-size-3 mb-xl-1 text-center">
            {{ $t('misc.Paymentmethods') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openTab(tab) {
      this.$emit('openTab', tab)
    },
    logout() {
      this.$store.dispatch('logout')
    },
  },
  computed: {
    user() {
      return this.$store.state.user.name
    },
  },
}
</script>

<style></style>
