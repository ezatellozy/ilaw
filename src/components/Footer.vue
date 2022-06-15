<template>
  <footer>
    <div class="border-top space-top-3">
      <div class="border-bottom pb-5 space-bottom-lg-3">
        <div class="container overflow-hidden">
          <b-row>
            <div class="col-lg-6 mb-6 mb-lg-0">
              <div class="row">
                <div class="col-sm-5">
                  <figure class="brandlogo">
                    <img src="@/assets/logo.png" class="img-fluid" alt="" />
                  </figure>
                  <div
                    class="pt-4 text-center text-sm-start"
                    :class="
                      $i18n.locale == 'ar' ? 'text-sm-end' : 'text-sm-start'
                    "
                  >
                    <address class="font-size-2 mb-5">
                      <span class="mb-2 font-weight-normal text-dark">
                        {{ address }}
                      </span>
                    </address>
                    <div class="mb-4">
                      <a
                        :href="`mailto:${contactEmail}`"
                        class="font-size-2 d-block link-black-100 mb-1"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'envelope']"
                          size="lg"
                          :class="$i18n.locale == 'ar' ? 'ms-2' : 'me-2'"
                        />
                        {{ contactEmail }}
                      </a>
                      <a
                        :href="`tel:${phone}`"
                        class="font-size-2 d-block link-black-100"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'phone']"
                          size="lg"
                          :class="$i18n.locale == 'ar' ? 'ms-2' : 'me-2'"
                        />
                        {{ phone }}
                      </a>
                    </div>
                    <ul
                      class="list-unstyled social justify-content-center justify-content-sm-start p-0 mb-0 d-flex"
                    >
                      <li
                        class="btn"
                        v-if="instgram"
                        :class="$i18n.locale == 'ar' ? 'pr-0' : 'pl-0'"
                      >
                        <a
                          class="link-black-100"
                          target="_blank"
                          :href="instgram"
                        >
                          <span class="fab fa-instagram"></span>
                        </a>
                      </li>
                      <li class="btn" v-if="facebook">
                        <a
                          class="link-black-100"
                          target="_blank"
                          :href="facebook"
                        >
                          <span class="fab fa-facebook-f"></span>
                        </a>
                      </li>
                      <li class="btn" v-if="youtube">
                        <a
                          class="link-black-100"
                          target="_blank"
                          :href="youtube"
                        >
                          <span class="fab fa-youtube"></span>
                        </a>
                      </li>
                      <li
                        class="btn"
                        v-if="twitter"
                        :class="$i18n.locale == 'ar' ? 'pl-0' : ''"
                      >
                        <a
                          class="link-black-100"
                          target="_blank"
                          :href="twitter"
                        >
                          <span class="fab fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-sm-7 map" v-html="mapAddessLink"></div>
              </div>
            </div>
            <div class="col-4 col-lg-2 mb-6 mb-lg-0">
              <h4 class="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">
                {{ $t('misc.Explore') }}
              </h4>
              <ul class="list-unstyled mb-0">
                <li class="pb-2">
                  <a
                    class="widgets-hover transition-3d-hover font-size-2 link-black-100"
                    href="/"
                  >
                    {{ $t('nav.home') }}
                  </a>
                </li>
                <li class="py-2">
                  <a
                    class="widgets-hover transition-3d-hover font-size-2 link-black-100"
                    href="/shop"
                  >
                    {{ $t('nav.shops') }}
                  </a>
                </li>
                <li class="py-2">
                  <a
                    class="widgets-hover transition-3d-hover font-size-2 link-black-100"
                    href="/faq"
                  >
                    {{ $t('nav.faq') }}
                  </a>
                </li>
                <li class="py-2">
                  <a
                    role="button"
                    @click="openUserMenu"
                    class="widgets-hover transition-3d-hover font-size-2 link-black-100"
                  >
                    {{ $t('misc.loginRegister') }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-4 col-lg-2 mb-6 mb-lg-0">
              <h4 class="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">
                {{ $t('misc.Customer Service') }}
              </h4>
              <ul class="list-unstyled mb-0">
                <li class="py-2">
                  <a
                    class="widgets-hover transition-3d-hover font-size-2 link-black-100"
                    href="/about-us"
                  >
                    {{ $t('nav.aboutUs') }}
                  </a>
                </li>
                <li class="py-2">
                  <a
                    class="widgets-hover transition-3d-hover font-size-2 link-black-100"
                    href="/contact"
                  >
                    {{ $t('nav.contactUs') }}
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-4 col-lg-2 mb-6 mb-lg-0">
              <h4 class="font-size-3 font-weight-medium mb-2 mb-xl-5 pb-xl-1">
                {{ $t('nav.categories') }}
              </h4>
              <ul class="list-unstyled mb-0" v-if="categories.length">
                <li class="py-2" v-for="n in 5" :key="n">
                  <a
                    class="widgets-hover transition-3d-hover text-capitalize font-size-2 link-black-100"
                    :href="`/shop/${categories[n].id}`"
                  >
                    {{ categories[n].name }}
                  </a>
                </li>
              </ul>
            </div>
          </b-row>
        </div>
      </div>
      <div class="space-1">
        <div class="container">
          <div
            class="d-lg-flex text-center text-lg-left justify-content-between align-items-center"
          >
            <!-- Copyright -->
            <p class="mb-3 mb-lg-0 font-size-2">
              <bdi>{{ $t('misc.All rights reserved') }}</bdi>
              <bdi>ilaw ©{{ year }}</bdi>
            </p>
            <!-- End Copyright -->
            <a
              target="_blank"
              href="https://technomasr.com/"
              class="mb-3 mb-lg-0 text-black font-size-2"
            >
              {{ $t('misc.Powered by Technomasr') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['categories'],
  data() {
    return {
      contactEmail: '',
      phone: '',
      instgram: '',
      mapAddessLink: '',
      facebook: '',
      youtube: '',
      twitter: '',
    }
  },
  mounted() {
    this.getSettings()
  },
  methods: {
    getSettings() {
      this.axios.get('settings').then((data) => {
        let result = data.data.data
        this.contactEmail = result.contact_data.email
        this.phone = result.contact_data.phone
        this.instgram = result.social.instagram
        this.mapAddessLink = result.contact_data.map
        this.facebook = result.social.facebook
        this.youtube = result.social.youtube
        this.twitter = result.social.twitter
      })
    },
    openUserMenu() {
      this.$store.commit('login_Menu')
    },
  },
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss">
.brandlogo {
  @media (max-width: 576px) {
    margin: 0 auto !important;
  }
  max-width: 14rem;
}
.map {
  iframe {
    width: 100%;
    height: 200px !important;
    border: 0;
  }
}
.is-rtl {
  div {
    text-align: right;
  }
}
</style>
