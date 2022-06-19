<template>
  <div class="pt-5 pl-md-5 pt-lg-8 pl-lg-9 space-bottom-lg-3">
    <h6 class="font-weight-medium font-size-7 ml-lg-1 mb-lg-8 pb-xl-1">
      Wishlist
    </h6>
    <table class="table mb-0">
      <thead>
        <tr class="border">
          <th
            scope="col"
            class="py-3 border-bottom-0 font-weight-medium pl-3 pl-md-5"
          >
            {{ $t('misc.Product') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.Price') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.Status') }}
          </th>
          <th scope="col" class="py-3 border-bottom-0 font-weight-medium">
            {{ $t('misc.Actions') }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr class="border" v-for="item in washList" :key="item.id">
          <Teleport to="body">
            <BookTypeModal
              v-if="BookTypeModal"
              @closemodal="addToCart"
              :book="item"
            />
          </Teleport>
          <th class="pl-3 pl-md-5 font-weight-normal align-middle py-6">
            <div
              class="d-flex flex-wrap justify-content-center align-items-center"
            >
              <a class="d-block" :href="`/book/${item.id}`">
                <img
                  class="img-fluid"
                  :src="item.photo"
                  alt="Image-Description"
                />
              </a>
              <div class="ml-xl-4">
                <div class="font-weight-normal">
                  <a :href="`/book/${item.id}`">{{ item.name }}</a>
                </div>
                <div class="font-size-2">
                  <a
                    :href="`author/${item.writer.id}`"
                    class="text-gray-700"
                    tabindex="0"
                  >
                    {{ item.writer.name }}
                  </a>
                </div>
              </div>
            </div>
          </th>
          <td class="align-middle py-5">
            <span
              class="woocommerce-Price-currencySymbol d-flex justify-content-around text-center"
              v-if="currency"
            >
              <div class="pdf" v-if="item.pdfCopy.status != 0">
                <h5 class="price">{{ $t('misc.pdf') }}</h5>
                <span v-if="item.pdfCopy.status == 1">
                  <span v-if="item.pdfCopy.price.offer">
                    {{ item.pdfCopy.price.offer }} -
                  </span>

                  <span
                    :class="
                      item.pdfCopy.price.offer
                        ? 'text-decoration-line-through'
                        : ''
                    "
                  >
                    {{ item.pdfCopy.price.original }}
                  </span>
                  {{ currency.sympl }}
                </span>
              </div>
              <div class="hardCopy" v-if="item.hardCopy.status != 0">
                <h5 class="price">{{ $t('misc.Hardcopy') }}</h5>
                <span v-if="item.hardCopy.status == 1">
                  <span v-if="item.hardCopy.price.offer">
                    {{ item.hardCopy.price.offer }} -
                  </span>

                  <span
                    :class="
                      item.hardCopy.price.offer
                        ? 'text-decoration-line-through text-gray-700'
                        : ''
                    "
                  >
                    {{ item.hardCopy.price.original }}
                  </span>
                  {{ currency.sympl }}
                </span>
              </div>
            </span>
          </td>
          <td class="align-middle py-5">
            {{
              item.stock > 0
                ? `${$t('misc.In Stock')}`
                : `${$t('misc.unavailable')}`
            }}
          </td>
          <td class="align-middle py-5 text-center">
            <span class="add-to-cart btn text-primary" @click="addToCart">
              {{ $t('misc.ADD TO CART') }}
            </span>
            <span>
              <i
                class="fas fa-times ml-2 mt-2 add-to-cart"
                @click="removefromCard"
              ></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="!washList.length" class="text-center fs-5 mt-4">
      {{ $t('misc.washlist is empty') }}
    </div>
  </div>
</template>

<script>
// import { inject, reactive } from 'vue'
import BookTypeModal from './BookTypeModal.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
// import { useI18n } from 'vue-i18n'
export default {
  components: { BookTypeModal },
  data() {
    return {
      BookTypeModal: false,
    }
  },

  methods: {
    addToCart() {
      this.BookTypeModal = !this.BookTypeModal
    },
    // addToWashlist() {
    //   this.BookTypeModal = !this.BookTypeModal
    // },
  },
  computed: {
    // washList() {
    //   return this.$store.getters.washlist
    // },
    currency() {
      return this.$store.getters.currency
    },
  },

  setup() {
    const store = useStore()
    // const toast = inject('toast')
    // const { t } = useI18n()

    const washList = computed(() => store.getters.washlist)

    // function addToCard() {
    //   store.commit('addToCart', item)
    //   toast.success(t('misc.addSuccess'))
    // }
    function removefromCard() {
      store.commit('removeItemWashlist', washList.value[0])
    }
    return { washList, removefromCard }
  },
}
</script>

<style>
.add-to-cart {
  cursor: pointer;
}
</style>
