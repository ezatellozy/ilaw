<template>
  <div class="container row mx-auto">
    <div class="col-md-8 mx-auto">
      <h2 class="page-title my-5 text-center main-title fs-5">
        {{ $t('misc.Frequently Asked Questions') }}
      </h2>
      <div class="accordian">
        <b-accordion>
          <b-accordion-item
            v-for="faq in faqs"
            :key="faq.id"
            :title="faq.question"
          >
            <div v-html="faq.answer"></div>
          </b-accordion-item>
        </b-accordion>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: null,
    }
  },
  mounted() {
    this.getFaqs()
  },
  methods: {
    getFaqs() {
      this.axios
        .get('faqs', {
          headers: {
            count: 'all',
          },
        })
        .then((data) => {
          this.faqs = data.data.data
        })
    },
  },
}
</script>

<style lang="scss">
.accordian {
  margin-bottom: 40px;
  h4 {
    margin-bottom: 2rem !important;
    font-size: 1.25rem;
    font-weight: 500;
  }
}
.accordion-button::after {
  margin-right: unset !important;
}
.is-rtl {
  .accordion-button::after {
    margin-left: unset !important;
    margin-right: auto !important;
  }
  .accordion-body {
    text-align: start;
  }
}
</style>
