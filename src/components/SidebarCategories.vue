<template>
  <div class="categoryMenu" @click="closeGategoryMenu">
    <div class="over"></div>
    <aside
      id="sidebarContent2"
      class="u-sidebar u-sidebar__md u-sidebar--left"
      aria-labelledby="sidebarNavToggler2"
    >
      <div class="u-sidebar__scroller js-scrollbar" @click.stop>
        <div class="u-sidebar__container">
          <div class="u-header-sidebar__footer-offset">
            <!-- Content -->
            <div class="u-sidebar__body">
              <div class="u-sidebar__content u-header-sidebar__content">
                <header
                  class="border-bottom px-4 px-md-5 py-4 d-flex align-items-center justify-content-between"
                >
                  <h2 class="font-size-3 mb-0 text-uppercase">
                    {{ $t('misc.SHOP BY CATEGORY') }}
                  </h2>
                  <div class="d-flex align-items-center">
                    <button
                      type="button"
                      @click="closeGategoryMenu"
                      class="close ml-auto"
                    >
                      <span>
                        <i class="fas fa-times ml-2"></i>
                      </span>
                    </button>
                  </div>
                </header>
                <div class="border-bottom">
                  <div class="zeynep pt-4">
                    <ul>
                      <li class="has-submenu">
                        <a href="#" role="button" data-submenu="off-pages">
                          {{ $t('misc.Pages') }}
                        </a>

                        <div id="off-pages" class="submenu">
                          <div
                            class="submenu-header"
                            data-submenu-close="off-pages"
                          >
                            <a href="#">{{ $t('misc.back') }}</a>
                          </div>
                          <ul>
                            <li class="nav-item">
                              <router-link to="/">
                                {{ $t('nav.home') }}
                              </router-link>
                            </li>
                            <li class="has-submenu nav-item">
                              <a
                                href="#"
                                role="button"
                                data-submenu="off-single-product"
                              >
                                {{ $t('nav.shops') }}
                              </a>

                              <div class="submenu js-scrollbar">
                                <div
                                  class="submenu-header"
                                  data-submenu-close="off-single-product"
                                >
                                  <a href="#">{{ $t('nav.back') }}</a>
                                </div>
                                <ul class="">
                                  <li>
                                    <router-link to="/shop/all">
                                      {{ $t('misc.By Books') }}
                                    </router-link>
                                  </li>

                                  <li>
                                    <router-link to="/authers">
                                      {{ $t('misc.By Vendor / publisher') }}
                                    </router-link>
                                  </li>
                                  <li>
                                    <router-link to="/publishers">
                                      {{ $t('misc.By Author') }}
                                    </router-link>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li class="nav-item">
                              <router-link to="/about-us">
                                {{ $t('nav.aboutUs') }}
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/faq">
                                {{ $t('nav.faq') }}
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link to="/contact">
                                {{ $t('nav.contactUs') }}
                              </router-link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="has-submenu">
                        <a href="#" role="button" data-submenu="off-single">
                          {{ $t('nav.categories') }}
                        </a>

                        <div class="submenu js-scrollbar">
                          <div
                            class="submenu-header"
                            data-submenu-close="off-single"
                          >
                            <a href="#">{{ $t('nav.back') }}</a>
                          </div>
                          <ul>
                            <li
                              v-for="category in categories"
                              :key="category.id"
                              :class="category.subs.length ? 'has-submenu' : ''"
                            >
                              <a
                                role="button"
                                data-submenu="off-single-product"
                              >
                                {{ category.name }}
                              </a>

                              <div
                                class="submenu js-scrollbar"
                                v-if="category.subs"
                              >
                                <div
                                  class="submenu-header"
                                  data-submenu-close="off-single-product"
                                >
                                  <a href="#">
                                    {{ $t('nav.back') }}
                                  </a>
                                </div>

                                <ul class="">
                                  <li
                                    v-for="sub in category.subs"
                                    :key="sub.id"
                                  >
                                    <a :href="`/shop/${sub.id}`">
                                      {{ sub.name }}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="has-submenu">
                        <a href="#" role="button" data-submenu="off-single">
                          {{ $t('nav.lang') }}
                        </a>

                        <div class="submenu js-scrollbar">
                          <div
                            class="submenu-header"
                            data-submenu-close="off-single"
                          >
                            <a href="#">{{ $t('nav.back') }}</a>
                          </div>
                          <ul>
                            <li>
                              <a role="button" @click="changeLocale('ar')">
                                العربية
                              </a>
                            </li>
                            <li>
                              <a role="button" @click="changeLocale('en')">
                                English
                              </a>
                            </li>
                            <li>
                              <a role="button" @click="changeLocale('fr')">
                                France
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="px-4 px-md-5 pt-5 pb-4 border-bottom">
                  <h2 class="font-size-3 mb-3">
                    {{ $t('misc.HELP & SETTINGS') }}
                  </h2>
                  <ul class="list-group list-group-flush list-group-borderless">
                    <li class="list-group-item px-0 py-2 border-0">
                      <a href="/account" class="h-primary">
                        {{ $t('misc.Account') }}
                      </a>
                    </li>
                    <li class="list-group-item px-0 py-2 border-0">
                      <a href="/faq" class="h-primary">
                        {{ $t('misc.Help') }}
                      </a>
                    </li>
                    <li class="list-group-item px-0 py-2 border-0">
                      <a
                        href="#"
                        role="button"
                        @click="goLogin"
                        class="h-primary"
                      >
                        {{ $t('buttons.Login') }}
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="px-4 px-md-5 py-5">
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item" v-if="social.facebook != ''">
                      <a
                        class="h-primary pr-2 font-size-2"
                        :href="social.facebook"
                      >
                        <span class="fab fa-facebook-f btn-icon__inner"></span>
                      </a>
                    </li>
                    <li class="list-inline-item" v-if="social.instagram != ''">
                      <a
                        class="h-primary pr-2 font-size-2"
                        :href="social.instagram"
                      >
                        <span class="fab fa-instagram btn-icon__inner"></span>
                      </a>
                    </li>
                    <li class="list-inline-item" v-if="social.youtube != ''">
                      <a
                        class="h-primary pr-2 font-size-2"
                        :href="social.youtube"
                      >
                        <span class="fab fa-youtube btn-icon__inner"></span>
                      </a>
                    </li>
                    <li class="list-inline-item" v-if="social.twitter != ''">
                      <a
                        class="h-primary pr-2 font-size-2"
                        :href="social.twitter"
                      >
                        <span class="fab fa-twitter btn-icon__inner"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  props: ['categories'],
  data() {
    return {
      social: [],
    }
  },
  methods: {
    closeGategoryMenu() {
      this.$emit('closeMenu')
    },
    changeLocale(lang) {
      Cookies.set('locale', lang)

      setTimeout(() => {
        window.location.reload()
      }, 300)
    },
    getSettings() {
      this.axios.get('settings').then((data) => {
        this.social = data.data.data.social
      })
    },
    goLogin() {
      this.$emit('closeMenu')
      this.$store.commit('login_Menu')
    },
  },
  mounted() {
    // this.getSettings()
    let hasSubmenu = document.querySelectorAll('.has-submenu')
    hasSubmenu.forEach((el) => {
      el.addEventListener('click', (e) => {
        if (e.target.dataset.submenu) {
          e.target.nextSibling.classList.add('opened')
        } else if (e.target.parentNode.dataset.submenuClose) {
          e.target.parentNode.parentNode.classList.remove('opened')
        }
      })
    })
  },
}
</script>

<style scoped lang="scss">
.u-sidebar {
  opacity: 1 !important;
}

.zeynep {
  min-height: 300px;
}

.categoryMenu {
  .u-sidebar.u-sidebar__md.u-sidebar--left {
    z-index: 101;
  }
  .over {
    &::before {
      position: fixed;
      content: '';
      top: 0%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.63);
      z-index: 100;
    }
  }
}

.router-link-active.router-link-exact-active {
  font-weight: bold;
}

.is-rtl {
  .has-submenu {
    direction: ltr;
  }
}
</style>
