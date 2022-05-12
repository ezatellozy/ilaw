<template>
  <div class="topbar border-bottom d-none d-md-block">
    <div class="container">
      <div
        class="topbar__nav d-md-flex justify-content-between align-items-center font-size-2"
      >
        <ul class="topbar__nav--left nav mb-0">
          <li class="nav-item">
            <span class="link-black-100">Free Shipping on Orders Over $99</span>
          </li>
        </ul>
        <ul class="topbar__nav--right nav mb-0">
          <li class="nav-item">
            <router-link
              to="/account"
              class="nav-link p-2 link-black-100 d-flex align-items-center"
            >
              <i class="glph-icon flaticon-sent mr-2 font-size-3"></i>
              Track Your Order
            </router-link>
          </li>
          <li class="nav-item">
            <b-dropdown
              id="currency"
              class="link-black-100 d-flex align-items-center"
              text="USD"
            >
              <b-dropdown-item>EG</b-dropdown-item>
              <b-dropdown-item>USD</b-dropdown-item>
              <b-dropdown-item>EUR</b-dropdown-item>
            </b-dropdown>
          </li>
          <li class="nav-item">
            <b-dropdown id="language" text="English">
              <b-dropdown-item>العربية</b-dropdown-item>
              <b-dropdown-item>English</b-dropdown-item>
              <b-dropdown-item>France</b-dropdown-item>
            </b-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      miniCart: false,
    }
  },
}
</script>

<style lang="scss">
.nav-item {
  display: flex;
  justify-content: center;
  a {
    font-size: 0.875rem !important;
    color: #19110b !important;

    &:hover {
      color: #f30b0b !important;
    }
  }
}
.btn-group {
  .dropdown-toggle {
    font-size: 0.875rem !important;
  }
  &:hover {
    .dropdown-menu {
      display: block !important;
    }
  }
  .btn {
    &:hover {
      color: #f30b0b !important;
    }
    color: #19110b !important;
    background: none !important;
    border: none !important;
    box-shadow: none !important;
  }
}
</style>
