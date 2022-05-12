<template>
  <div class="table-content table-responsive">
    <table class="table mb-4">
      <thead>
        <tr>
          <th class="product-img">images</th>
          <th class="cart-product-name">Product</th>
          <th class="product-price">Unit Price</th>
          <th class="product-quantity">Quantity</th>
          <th class="product-subtotal">Total</th>
          <th class="product-remove">remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="product-img">
            <a href="#">
              <img src="@/assets/img2.png" class="img-fluid" alt="ilaw" />
            </a>
          </td>
          <td class="product-name">
            <a href="#">Accusantium dolorem1</a>
          </td>
          <td class="product-price">
            <span class="amount fw-bold">$46.80</span>
          </td>
          <td class="quantity">
            <label class="fw-bold">Quantity</label>
            <div class="d-flex justify-content-center">
              <button class="btnn" @click="decreaseQty">-</button>
              <p class="btnn text-center m-0">{{ quantity }}</p>
              <button class="btnn" @click="increaseQty">+</button>
            </div>
          </td>
          <td class="product-subtotal">
            <span class="amount fw-bold">$70.00</span>
          </td>
          <td class="product-remove">
            <a href="#"><i class="fa fa-times"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    }
  },
  methods: {
    increaseQty() {
      this.quantity++
    },
    decreaseQty() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.quantity {
  button.btnn {
    background: #232f3e;
    color: #fff;
    &:hover {
      background: #4c5b6d;
    }
  }
  .btnn {
    width: 25px;
    height: 25px;
    &:not(:nth-child(2)) {
      border: 1px solid #000;
    }
    &:nth-child(2) {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
    }
  }
}
.table-content {
  .table {
    background: #fff none repeat scroll 0 0;
    border-color: #ebebeb;
    border-radius: 0;
    border-style: solid;
    border-width: 1px 0 0 1px;
    text-align: center;
    width: 100%;
    margin-bottom: 0;
    > :not(:last-child) > :last-child > * {
      border-bottom-color: #ebebeb;
    }
    thead {
      background-color: #f6f6f6;
    }
    th {
      border-top: medium none;
      font-size: 15px;
      text-transform: capitalize;
      padding: 20px 10px;
      text-align: center;
      font-weight: 500;
      vertical-align: middle;
      white-space: nowrap;
      //   border-bottom: 1px solid #ebebeb;
      border-right: 1px solid #ebebeb;
    }
    td {
      border-bottom: 1px solid #ebebeb;
      border-right: 1px solid #ebebeb;
      border-top: medium none;
      padding: 20px 10px;
      vertical-align: middle;
      font-size: 13px;
      &.product-name {
        font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
        > a {
          color: #212529 !important;
        }
      }
      img {
        max-width: 90px;
      }
    }
  }
}
</style>
