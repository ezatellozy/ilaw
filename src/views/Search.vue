<template>
  <div class="site-content space-bottom-3 pt-11" id="content">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-lg-3">
          <div id="secondary" class="sidebar widget-area" role="complementary">
            <b-accordion free>
              <b-accordion-item :title="$t('nav.categories')" visible>
                <ul class="product-categories">
                  <li
                    class="cat-item cat-item-9 cat-parent"
                    v-for="category in categories"
                    :key="category.id"
                  >
                    <span
                      class="d-flex justify-content-between align-items-center"
                    >
                      <a :href="`/shop/${category.id}`">{{ category.name }}</a>
                      <button
                        v-if="category.subs.length"
                        class="btn"
                        @click="openSub(category.id)"
                      >
                        <font-awesome-icon
                          size="lg"
                          :icon="['fas', 'caret-down']"
                        />
                      </button>
                    </span>
                    <div v-if="category.subs.length">
                      <transition name="fade">
                        <ul v-show="selectedItem == category.id">
                          <li v-for="sub in category.subs" :key="sub.id">
                            <a :href="`/shop/${sub.id}`">
                              {{ sub.name }}
                            </a>
                          </li>
                        </ul>
                      </transition>
                    </div>
                  </li>
                </ul>
              </b-accordion-item>

              <b-accordion-item :title="$t('misc.author')">
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
                      :placeholder="$t('misc.Search')"
                      aria-label="Search"
                    />
                  </div>
                  <button
                    class="btn btn-outline-success my-2 my-sm-0 sr-only"
                    type="submit"
                  >
                    {{ $t('misc.Search') }}
                  </button>
                </form>
                <ul class="product-categories">
                  <li
                    class="cat-item cat-item-9 cat-parent"
                    v-for="item in publishers"
                    :key="item.id"
                  >
                    <input
                      type="radio"
                      :id="`publisher${item.id}`"
                      :value="item.id"
                      class="mx-2"
                      v-model="publisher"
                      @change="getBooks"
                    />
                    <label :for="`publisher${item.id}`">
                      {{ item.name }}
                    </label>
                  </li>
                </ul>
              </b-accordion-item>
              <b-accordion-item :title="$t('misc.language')">
                <ul class="product-categories">
                  <li class="custom-control custom-checkbox mb-2 pb-2">
                    <input
                      type="radio"
                      class="mx-2"
                      value="en"
                      id="languageen"
                      v-model="language"
                      @change="getBooks"
                    />
                    <label for="languageen">
                      English
                    </label>
                  </li>
                  <li class="custom-control custom-checkbox mb-2 pb-2">
                    <input
                      type="radio"
                      class="mx-2"
                      id="languagefr"
                      value="fr"
                      v-model="language"
                      @change="getBooks"
                    />
                    <label for="languagefr">
                      French
                    </label>
                  </li>
                  <li class="custom-control custom-checkbox mb-2 pb-2">
                    <input
                      type="radio"
                      class="mx-2"
                      id="languagear"
                      value="ar"
                      @change="getBooks"
                      v-model="language"
                    />
                    <label for="languagear">
                      العربية
                    </label>
                  </li>
                </ul>
              </b-accordion-item>
              <b-accordion-item :title="$t('misc.format')">
                <ul class="product-categories">
                  <li class="cat-item cat-item-9 cat-parent">
                    <input
                      type="radio"
                      class="mx-2"
                      id="hardcopy"
                      value="hardcopy"
                      v-model="type"
                      @change="getBooks"
                    />
                    <label for="hardcopy">
                      {{ $t('misc.Hardcopy') }}
                    </label>
                  </li>
                  <li class="cat-item cat-item-69 cat-parent">
                    <input
                      type="radio"
                      class="mx-2"
                      id="pdf"
                      value="pdf"
                      @change="getBooks"
                      v-model="type"
                    />
                    <label for="pdf">
                      {{ $t('misc.pdf') }}
                    </label>
                  </li>
                  <li class="cat-item cat-item-69 cat-parent">
                    <input
                      type="radio"
                      class="mx-2"
                      id="both"
                      value="both"
                      v-model="type"
                      @change="getBooks"
                    />
                    <label for="both">
                      {{ $t('misc.both') }}
                    </label>
                  </li>
                </ul>
              </b-accordion-item>

              <b-accordion-item :title="$t('misc.By review')">
                <div
                  class="form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-2 pb-1"
                >
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="rating5"
                      value="5"
                      v-model="rate"
                      @change="getBooks"
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
                      value="4"
                      v-model="rate"
                      @change="getBooks"
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
                      value="3"
                      v-model="rate"
                      @change="getBooks"
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
                      value="2"
                      v-model="rate"
                      @change="getBooks"
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
                      value="1"
                      v-model="rate"
                      @change="getBooks"
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
        <div class="col-md-7 col-lg-9">
          <div id="primary" class="content-area">
            <div
              class="shop-control-bar d-lg-flex justify-content-end align-items-center mb-5 text-center text-md-left"
            >
              <div class="shop-control-bar__right d-md-flex align-items-center">
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
                <Loading v-if="loading" />
                <ul v-if="list" id="" class="products list-unstyled mb-6">
                  <book-card-list
                    v-for="book in books"
                    :key="book.id"
                    :items="book"
                  />
                </ul>
                <ul
                  v-if="!list"
                  id=""
                  class="products list-unstyled row no-gutters row-cols-2 row-cols-lg-3 row-cols-wd-4 border-top border-left mb-6"
                >
                  <book-card
                    v-for="book in books"
                    :key="book.id"
                    :items="book"
                  />
                </ul>
              </div>
              <div class="container" v-if="pageCount > 1">
                <paginate
                  v-model="page"
                  :page-count="pageCount"
                  :click-handler="onChangePage"
                  :prev-text="$t('misc.prev')"
                  :next-text="$t('misc.next')"
                  :page-range="3"
                  :margin-pages="0"
                  :container-class="'pagination'"
                  :page-class="'page-item'"
                  :break-view-class="'break-view'"
                ></paginate>
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
import Paginate from 'vuejs-paginate-next'
import Loading from './Loading.vue'
export default {
  // components: { BookCardList, BookCard, Paginate },
  components: { BookCardList, BookCard, Paginate, Loading },
  data() {
    return {
      selectedItem: 0,
      books: null,
      list: false,
      categories: null,
      publishers: null,
      pageOfItems: [],
      rate: [],
      rates: '',
      publisher: '',
      section: '',
      writer: '',
      language: '',
      type: '',
      page: 1,
      pageCount: '',
    }
  },
  mounted() {
    this.getMainGategories()
    this.getPublishers()
    this.getBooks()
    if (this.$route.query.page) {
      this.page = Number(this.$route.query.page)
    }
  },
  methods: {
    onChangePage(e) {
      this.$router.push(`?page=${e}`)
    },
    getMainGategories() {
      this.axios
        .get('/sections', {
          headers: {
            section: 0,
          },
        })
        .then((data) => {
          this.categories = data.data.data
        })
    },
    openSub(id) {
      this.selectedItem = id
    },
    getPublishers() {
      this.axios.get('publishers').then((data) => {
        this.publishers = data.data.data
      })
    },
    getBooks() {
      this.$store.commit('setLoading', true)
      let url
      if (this.$route.query.page) {
        let e = this.$route.query.page
        if (!this.$route.params.id) {
          url = `books?section&publisher=${this.publisher}&writer=${this.writer}&language=${this.language}&type=${this.type}&rate=${this.rates}&page=${e}`
        } else {
          if (this.rate.length) {
            const min = this.rate.reduce((a, b) => Math.min(a, b))
            this.rates = min
          }
          url = `books?section=${this.$route.params.id}&publisher=${this.publisher}&writer=${this.writer}&language=${this.language}&type=${this.type}&rate=${this.rates}&page=${e}`
        }
      } else {
        if (this.$route.params.id == 'all') {
          url = 'books'
        } else {
          if (this.rate.length) {
            const min = this.rate.reduce((a, b) => Math.min(a, b))
            this.rates = min
          }
          url = `books?section=${
            this.$route.params.id == 'all' ? '' : this.$route.params.id
          }&name=${
            this.$route.params.name == 'queryall' ? '' : this.$route.params.name
          }&publisher=${this.publisher}&writer=${this.writer}&language=${
            this.language
          }&type=${this.type}&rate=${this.rates}`
        }
      }

      this.$nextTick(() => {
        this.axios.get(`${url}`).then((data) => {
          this.books = data.data.data
          this.page = data.data.paginationData.current_page
          this.pageCount = data.data.paginationData.last_page
          this.$store.commit('setLoading', false)
        })
      })
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
  },
  watch: {
    $route() {
      this.getBooks()
    },
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
.page-link {
  border-radius: 50px !important;
  cursor: pointer;
}
.pagination {
  justify-content: center;
}
</style>
