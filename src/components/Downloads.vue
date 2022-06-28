<template>
  <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-lg-2 mb-lg-4">
    <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">
      {{ $t('misc.Books') }}
    </h6>
    <table class="table">
      <thead>
        <tr class="border">
          <th
            scope="col"
            class="py-3 border-bottom-0 font-weight-medium pl-3 pl-md-5"
          >
            {{ $t('misc.Book') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.publisher') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.author') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.type') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.Actions') }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr class="border" v-for="book in books" :key="book.id">
          <th class="pl-3 pl-md-5 font-weight-normal align-middle py-6">
            {{ book.name }}
          </th>
          <td class="align-middle py-5">{{ book.publisher.name }}</td>
          <td class="align-middle py-5">{{ book.writer.name }}</td>
          <td class="align-middle py-5">
            <span class="text-primary" v-if="book.hardCopy.status == 1">
              {{ $t('misc.Hardcopy') }}
            </span>
            -
            <span class="text-primary" v-if="book.pdfCopy.status == 1">
              {{ $t('misc.pdf') }}
            </span>
          </td>
          <td class="align-middle py-5">
            <div class="d-flex justify-content-center">
              <router-link
                :to="`/book/${book.id}`"
                class="btn btn-dark rounded-0 btn-wide font-weight-medium"
              >
                {{ $t('misc.View') }}
              </router-link>
            </div>
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
      books: null,
    }
  },
  methods: {
    getBooks() {
      this.axios.get('books').then((data) => {
        this.books = data.data.data
      })
    },
  },
  mounted() {
    this.getBooks()
  },
}
</script>

<style></style>
