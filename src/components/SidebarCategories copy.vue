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
                        <a
                          href="#"
                          role="button"
                          @click="openPages = !openPages"
                          data-submenu="off-pages"
                        >
                          Pages
                        </a>

                        <div
                          id="off-pages"
                          class="submenu"
                          :class="openPages ? 'opened' : ''"
                        >
                          <div
                            class="submenu-header"
                            data-submenu-close="off-pages"
                            @click="openPages = !openPages"
                          >
                            <a href="#">Pages</a>
                          </div>

                          <ul>
                            <li>
                              <router-link to="/">
                                {{ $t('nav.home') }}
                              </router-link>
                            </li>

                            <li class="has-submenu">
                              <a
                                href="#"
                                role="button"
                                @click="openShop = !openShop"
                                data-submenu="off-single-product"
                              >
                                {{ $t('nav.shops') }}
                              </a>

                              <div
                                class="submenu js-scrollbar"
                                :class="openShop ? 'opened' : ''"
                              >
                                <div
                                  class="submenu-header"
                                  data-submenu-close="off-single-product"
                                  @click="openShop = !openShop"
                                >
                                  <a href="#">{{ $t('nav.shops') }}</a>
                                </div>

                                <ul class="">
                                  <li>
                                    <a href="#">
                                      By Books
                                    </a>
                                  </li>

                                  <li>
                                    <a href="#">
                                      By Vendor / publisher
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      By Author (like page author list)
                                    </a>
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
                        <a
                          href="#"
                          role="button"
                          @click="openCategories = !openCategories"
                          data-submenu="off-single-product"
                        >
                          {{ $t('nav.categories') }}
                        </a>

                        <div
                          class="submenu js-scrollbar"
                          :class="openCategories ? 'opened' : ''"
                        >
                          <div
                            class="submenu-header"
                            data-submenu-close="off-single-product"
                            @click="openCategories = !openCategories"
                          >
                            <a href="#">{{ $t('nav.categories') }}</a>
                          </div>

                          <ul class="">
                            <li class="has-submenu">
                              <a
                                href="#"
                                role="button"
                                @click="category1 = !category1"
                                data-submenu="off-single-product"
                              >
                                category1
                              </a>

                              <div
                                class="submenu js-scrollbar"
                                :class="category1 ? 'opened' : ''"
                              >
                                <div
                                  class="submenu-header"
                                  data-submenu-close="off-single-product"
                                  @click="category1 = !category1"
                                >
                                  <a href="#">category1</a>
                                </div>

                                <ul class="">
                                  <li>
                                    <a href="#">
                                      sub Category
                                    </a>
                                  </li>

                                  <li>
                                    <a href="#">
                                      sub Category
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      sub Category
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <a href="#">
                                Category2
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Category3
                              </a>
                            </li>

                            <li>
                              <a href="#">
                                Category4
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="px-4 px-md-5 pt-5 pb-4 border-bottom">
                  <h2 class="font-size-3 mb-3">HELP & SETTINGS</h2>
                  <ul class="list-group list-group-flush list-group-borderless">
                    <li class="list-group-item px-0 py-2 border-0">
                      <a href="#" class="h-primary">Your Account</a>
                    </li>
                    <li class="list-group-item px-0 py-2 border-0">
                      <a href="#" class="h-primary">Help</a>
                    </li>
                    <li class="list-group-item px-0 py-2 border-0">
                      <a href="#" class="h-primary">Sign In</a>
                    </li>
                  </ul>
                </div>

                <div class="px-4 px-md-5 py-5">
                  <!-- Social Networks -->
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <a class="h-primary pr-2 font-size-2" href="#">
                        <span class="fab fa-facebook-f btn-icon__inner"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="h-primary pr-2 font-size-2" href="#">
                        <span class="fab fa-google btn-icon__inner"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="h-primary pr-2 font-size-2" href="#">
                        <span class="fab fa-twitter btn-icon__inner"></span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="h-primary pr-2 font-size-2" href="#">
                        <span class="fab fa-github btn-icon__inner"></span>
                      </a>
                    </li>
                  </ul>
                  <!-- End Social Networks -->
                </div>
              </div>
            </div>
            <!-- End Content -->
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openShop: false,
      openPages: false,
      openCategories: false,
      category1: false,
    }
  },
  methods: {
    closeGategoryMenu() {
      this.$emit('closeMenu')
    },
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
</style>
