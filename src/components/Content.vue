<template>
  <div class="bg-gray-200 pt-5">
    <section class="space-bottom-2 space-bottom-lg-3">
      <header class="mb-4">
        <h2 class="font-size-7 text-center main-title">
          {{ $t('misc.Bestselling Books') }}
        </h2>
      </header>
      <div>
        <ul
          id="featuredBooks"
          class="nav justify-content-md-center nav-gray-700 mb-5 flex-nowrap flex-md-wrap overflow-auto overflow-md-visible"
          role="tablist"
        >
          <li class="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
            <a
              id="featured-tab"
              class="nav-link px-0 active"
              data-toggle="tab"
              href="#featured"
              role="tab"
              aria-controls="featured"
              aria-selected="true"
            >
              Featured
            </a>
          </li>

          <li class="nav-item mx-5 mb-1 flex-shrink-0 flex-md-shrink-1">
            <a
              id="mostviewed-tab"
              class="nav-link px-0"
              data-toggle="tab"
              href="#mostviewed"
              role="tab"
              aria-controls="mostviewed"
              aria-selected="false"
            >
              Most Viewed
            </a>
          </li>
        </ul>
        <div id="featuredBooksContent" class="tab-content">
          <div
            id="featured"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="featured-tab"
          >
            <ul
              class="products list-unstyled m-0 row no-gutters row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 border-top border-left my-0"
            >
              <book-card :items="book" v-for="book in books" :key="book.id" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue'
// import Books from '@/books.json'
export default {
  components: { BookCard },
  data() {
    return {
      books: null,
    }
  },
  mounted() {
    this.getBooks()
  },
  methods: {
    getBooks() {
      this.axios
        .get('book/books')
        .then((data) => {
          this.books = data.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
