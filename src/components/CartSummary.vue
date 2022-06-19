<template>
  <div class="row mt-11">
    <div class="col-md-4 m-auto">
      <div class="cart-page-total">
        <h2>Cart totals</h2>
        <ul>
          <li>
            Subtotal
            <span>$130.00</span>
          </li>
          <li>
            Total
            <span>$130.00</span>
          </li>
        </ul>
        <router-link to="/checkout" class="py-2 px-4 w-100 d-block text-center">
          Proceed to checkout
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cart-page-total {
  h2 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: capitalize;
  }
  ul {
    padding: 10px;
    border: 1px solid #ddd;
    li {
      list-style: none;
      font-size: 15px;
      color: #252525;
      padding: 10px 30px;
      font-weight: 700;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      &:not(:last-child) {
        border-bottom: 1px solid #ebebeb;
      }
    }
  }
  a {
    background: #333 !important;
    color: #fff;
    &:hover {
      background: #e23e57 !important;
    }
  }
}
</style>
