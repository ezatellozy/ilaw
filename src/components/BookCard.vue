<template>
  <li class="product col bg-hover-white">
    <div class="product__inner overflow-hidden p-3 p-md-4d875">
      <div
        class="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative"
      >
        <div class="woocommerce-loop-product__thumbnail">
          <router-link to="/book">
            <img
              src="@/assets/img9.jpg"
              class="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
              alt="image-description"
            />
          </router-link>
        </div>
        <div
          class="woocommerce-loop-product__body product__body pt-3 text-start"
        >
          <div class="text-uppercase font-size-1 mb-1 text-truncate">
            <router-link to="/book" class="text-gray-700">
              Paperback
            </router-link>
          </div>
          <h2
            class="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"
          >
            <router-link to="/book" class="text-gray-700">
              Man's Search for Meaning
            </router-link>
          </h2>
          <div class="font-size-2 mb-1 text-truncate">
            <router-link to="/authers" class="text-gray-700">
              Jay Shetty
            </router-link>
          </div>
          <div
            class="price d-flex align-items-center justify-content-start font-weight-medium font-size-3"
          >
            <span class="woocommerce-Price-amount amount">
              <span class="woocommerce-Price-currencySymbol">
                $
              </span>
              29
            </span>
          </div>
          <div
            class="product__rating d-md-flex align-items-center justify-content-start font-size-2 d-none"
          >
            <div class="text-yellow-darker mr-2">
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
              <small class="fas fa-star"></small>
              <small class="far fa-star"></small>
              <small class="far fa-star"></small>
            </div>
            <div class="">(3,714)</div>
          </div>
        </div>
        <div class="product__hover d-flex align-items-center">
          <router-link
            to="/book"
            class="text-uppercase text-dark h-dark font-weight-medium mr-auto"
          >
            <span class="product__add-to-cart">ADD TO CART</span>
            <span class="product__add-to-cart-icon font-size-4">
              <i class="flaticon-icon-126515"></i>
            </span>
          </router-link>

          <router-link
            to="/book"
            class="text-uppercase text-dark h-dark font-weight-medium"
          >
            <span class="product__add-to-cart-icon font-size-4">
              <i class="flaticon-heart"></i>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {}
</script>

<style>
@media (min-width: 1200px) {
  .products
    .product:not(.product__card):not(.product__no-border):not(.product__list):not(.product__space):hover {
    border-color: #161619;
  }
  .products
    .product:not(.product__card):not(.product__no-border):not(.product__list):not(.product__space):hover::before {
    background-color: #161619;
  }
}
</style>
