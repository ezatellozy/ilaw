<template>
  <div class="site-content space-bottom-3 pt-11" id="content">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div id="secondary" class="sidebar widget-area" role="complementary">
            <b-accordion free>
              <b-accordion-item title="Categories" visible>
                <ul class="product-categories">
                  <li class="cat-item cat-item-9 cat-parent">
                    <a href="/shop">Clothing</a>
                  </li>
                  <li class="cat-item cat-item-9 cat-parent">
                    <a href="/shop">Electronics</a>
                  </li>
                  <li class="cat-item cat-item-9 cat-parent">
                    <a href="/shop">Kitchen</a>
                  </li>
                  <li class="cat-item cat-item-9 cat-parent">
                    <a href="/shop">Clothing</a>
                  </li>
                  <li class="cat-item cat-item-9 cat-parent">
                    <a href="/shop">Clothing</a>
                  </li>
                </ul>
              </b-accordion-item>

              <b-accordion-item title="Author">
                <form class="form-inline my-2 overflow-hidden">
                  <div class="input-group flex-nowrap w-100">
                    <div class="input-group-prepend">
                      <i
                        class="glph-icon flaticon-loupe py-2d75 bg-white-100 border-white-100 text-dark pl-3 pr-0 rounded-0"
                      ></i>
                    </div>
                    <input
                      class="form-control bg-white-100 py-2d75 height-4 border-white-100 rounded-0"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                  <button
                    class="btn btn-outline-success my-2 my-sm-0 sr-only"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
                <ul class="product-categories">
                  <li class="cat-item cat-item-9 cat-parent">
                    <a href="/authers">A. J. Finn</a>
                  </li>
                  <li class="cat-item cat-item-69 cat-parent">
                    <a href="/authers">Anne Frank</a>
                  </li>
                  <li class="cat-item cat-item-65 cat-parent">
                    <a href="/authers">Camille Pagán</a>
                  </li>
                  <li class="cat-item cat-item-11 cat-parent">
                    <a href="/authers">Daniel H. Pink</a>
                  </li>
                  <li class="cat-item cat-item-12">
                    <a href="/authers">Danielle Steel</a>
                  </li>
                  <li class="cat-item cat-item-31">
                    <a href="/authers">David Quammen</a>
                  </li>
                </ul>
              </b-accordion-item>
              <b-accordion-item title="language">
                <ul class="product-categories">
                  <li class="custom-control custom-checkbox mb-2 pb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="brandEnglish"
                    />
                    <label class="custom-control-label" for="brandEnglish">
                      English
                    </label>
                  </li>
                  <li class="custom-control custom-checkbox mb-2 pb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="brandGerman"
                    />
                    <label class="custom-control-label" for="brandGerman">
                      German
                    </label>
                  </li>
                  <li class="custom-control custom-checkbox mb-2 pb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="brandFrench"
                    />
                    <label class="custom-control-label" for="brandFrench">
                      French
                    </label>
                  </li>
                  <li class="custom-control custom-checkbox mb-2 pb-2">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="brandSpanish"
                    />
                    <label class="custom-control-label" for="brandSpanish">
                      Spanish
                    </label>
                  </li>
                  <li class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="brandTurkish"
                    />
                    <label class="custom-control-label" for="brandTurkish">
                      Turkish
                    </label>
                  </li>
                </ul>
              </b-accordion-item>
              <b-accordion-item title="format">
                <ul class="product-categories">
                  <li class="cat-item cat-item-9 cat-parent">
                    <a href="../shop/v3.html">Audio CD</a>
                  </li>
                  <li class="cat-item cat-item-69 cat-parent">
                    <a href="../shop/v3.html">Audio Book</a>
                  </li>
                  <li class="cat-item cat-item-65 cat-parent">
                    <a href="../shop/v3.html">Hardcover</a>
                  </li>
                  <li class="cat-item cat-item-11 cat-parent">
                    <a href="../shop/v3.html">Kindle Books</a>
                  </li>
                  <li class="cat-item cat-item-12">
                    <a href="../shop/v3.html">Paperback</a>
                  </li>
                </ul>
              </b-accordion-item>
              <b-accordion-item title="Filter by price">
                <form
                  method="get"
                  action="https://themes.woocommerce.com/storefront/shop/"
                >
                  <div class="price_slider_wrapper">
                    <div
                      class="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                      style=""
                    >
                      <div
                        class="ui-slider-range ui-widget-header ui-corner-all"
                        style="left: 0%; width: 100%;"
                      ></div>
                      <span
                        class="ui-slider-handle ui-state-default ui-corner-all"
                        tabindex="0"
                        style="left: 0%;"
                      ></span>
                      <span
                        class="ui-slider-handle ui-state-default ui-corner-all"
                        tabindex="0"
                        style="left: 98%;"
                      ></span>
                    </div>
                    <div class="price_slider_amount">
                      <input
                        type="text"
                        id="min_price"
                        name="min_price"
                        value="2"
                        data-min="2"
                        placeholder="Min price"
                        style="display: none;"
                      />
                      <input
                        type="text"
                        id="max_price"
                        name="max_price"
                        value="1495"
                        data-max="1495"
                        placeholder="Max price"
                        style="display: none;"
                      />
                      <button type="submit" class="button d-none">
                        Filter
                      </button>
                      <div class="mx-auto price_label mt-2" style="">
                        Price:
                        <span class="from">£2</span>
                        —
                        <span class="to">£1,495</span>
                      </div>
                    </div>
                  </div>
                </form>
              </b-accordion-item>
              <b-accordion-item title="By review">
                <div
                  class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-2 pb-1"
                >
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="rating5"
                    />
                    <label class="custom-control-label" for="rating5">
                      <span class="d-block text-yellow-darker mt-plus-3">
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="fas fa-star font-size-2"></span>
                      </span>
                    </label>
                  </div>
                  <small class="font-size-2 text-gray-600">24</small>
                </div>
                <div
                  class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-2 pb-1"
                >
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="rating4"
                    />
                    <label class="custom-control-label" for="rating4">
                      <span class="d-block text-yellow-darker mt-plus-3">
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="far fa-star font-size-2"></span>
                      </span>
                    </label>
                  </div>
                  <small class="font-size-2 text-gray-600">15</small>
                </div>
                <div
                  class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-2 pb-1"
                >
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="rating3"
                    />
                    <label class="custom-control-label" for="rating3">
                      <span class="d-block text-yellow-darker mt-plus-3">
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="far fa-star font-size-2 mr-1"></span>
                        <span class="far fa-star font-size-2"></span>
                      </span>
                    </label>
                  </div>
                  <small class="font-size-2 text-gray-600">43</small>
                </div>
                <div
                  class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-2 pb-1"
                >
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="rating2"
                    />
                    <label class="custom-control-label" for="rating2">
                      <span class="d-block text-yellow-darker mt-plus-3">
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="far fa-star font-size-2 mr-1"></span>
                        <span class="far fa-star font-size-2 mr-1"></span>
                        <span class="far fa-star font-size-2"></span>
                      </span>
                    </label>
                  </div>
                  <small class="font-size-2 text-gray-600">78</small>
                </div>
                <div
                  class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-0"
                >
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="rating1"
                    />
                    <label class="custom-control-label" for="rating1">
                      <span class="d-block text-yellow-darker mt-plus-3">
                        <span class="fas fa-star font-size-2 mr-1"></span>
                        <span class="far fa-star font-size-2 mr-1"></span>
                        <span class="far fa-star font-size-2 mr-1"></span>
                        <span class="far fa-star font-size-2 mr-1"></span>
                        <span class="far fa-star font-size-2"></span>
                      </span>
                    </label>
                  </div>
                  <small class="font-size-2 text-gray-600">21</small>
                </div>
              </b-accordion-item>
            </b-accordion>
          </div>
        </div>
        <div class="col-9">
          <div id="primary" class="content-area">
            <div
              class="shop-control-bar d-lg-flex justify-content-between align-items-center mb-5 text-center text-md-left"
            >
              <div class="shop-control-bar__left mb-4 m-lg-0">
                <p class="woocommerce-result-count m-0">
                  Showing 1–12 of 126 results
                </p>
              </div>
              <div class="shop-control-bar__right d-md-flex align-items-center">
                <form
                  class="woocommerce-ordering ml-2 mb-4 m-md-0"
                  method="get"
                >
                  <select
                    class="form-select border-0 border-bottom shadow-none outline-none py-2"
                    name="orderby"
                    aria-label="Default select example"
                  >
                    <option value="popularity">Sort by popularity</option>
                    <option value="default" selected>
                      Default sorting
                    </option>
                    <option value="date">Sort by newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                  <!-- Select -->
                </form>

                <form
                  class="number-of-items ml-md-4 mb-4 m-md-0 d-none d-xl-block"
                  method="get"
                >
                  <select
                    class="form-select border-0 border-bottom shadow-none outline-none py-2"
                    name="orderby"
                  >
                    <option value="show10">Show 10</option>
                    <option value="show15">Show 15</option>
                    <option value="show20" selected="selected">Show 20</option>
                    <option value="show25">Show 25</option>
                    <option value="show30">Show 30</option>
                  </select>
                  <!-- Select -->
                </form>

                <ul
                  class="nav nav-tab ml-lg-4 justify-content-center justify-content-md-start ml-md-auto"
                >
                  <li class="nav-item border">
                    <a
                      class="nav-link p-0 height-38 width-38 justify-content-center d-flex align-items-center"
                      :class="!list ? 'active' : ''"
                      @click="list = !list"
                    >
                      <font-awesome-icon :icon="['fas', 'grip-vertical']" />
                    </a>
                  </li>
                  <li class="nav-item border">
                    <a
                      class="nav-link p-0 height-38 width-38 justify-content-center d-flex align-items-center"
                      :class="list ? 'active' : ''"
                      @click="list = !list"
                    >
                      <font-awesome-icon :icon="['fas', 'list']" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Tab Content -->
            <div class="tab-content">
              <div class="tab-pane fade show active">
                <ul v-if="list" id="" class="products list-unstyled mb-6">
                  <book-card-list v-for="n in 10" :key="n" />
                </ul>
                <ul
                  v-if="!list"
                  id=""
                  class="products list-unstyled row no-gutters row-cols-2 row-cols-lg-3 row-cols-wd-4 border-top border-left mb-6"
                >
                  <book-card v-for="n in 10" :key="n" />
                </ul>

                <b-pagination
                  class="justify-content-center"
                  v-model="currentPage"
                  pills
                  :total-rows="rows"
                  size="sm"
                  area-controll="pills-one-example1"
                ></b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue'
import BookCardList from '@/components/BookCardList.vue'
export default {
  components: { BookCardList, BookCard },
  data() {
    return {
      list: false,
      currentPage: '1',
      rows: 10,
    }
  },
}
</script>

<style lang="scss">
select {
  option {
    padding: 1.75rem 0 !important;
  }
}

.accordion {
  .accordion-body {
    padding-top: 10px !important ;
  }
  .accordion-button {
    color: #161619;
    font-weight: 500;
    font-size: 1.125rem;
    &:not(.collapsed)::after {
      transform: rotate(-180deg);
    }
    &:focus {
      border-color: none !important;
      outline: 0 !important;
      box-shadow: none !important;
    }
    &:not(.collapsed) {
      color: inherit !important;
      background-color: transparent !important;
      box-shadow: none !important;
    }
  }
}

.nav-tab {
  .nav-item {
    a.active {
      svg {
        color: #000 !important;
      }
    }
    svg {
      color: gray !important;
    }
  }
}

.product-categories {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  font-size: 14px;
  .cat-item {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    font-size: 14px;
    a {
      display: inline-block;
      padding: 9px 0;
      color: #161619;
      &:hover {
        color: #f75454 !important;
      }
    }
  }
}
</style>
