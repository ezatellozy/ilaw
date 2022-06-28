<template>
  <div class="masthead">
    <div class="bg-white">
      <div class="container px-0 py-3 py-md-4">
        <div
          class="d-flex align-items-center justify-content-between position-relative flex-wrap"
        >
          <div class="site-branding pe-4 mx-auto mx-md-0">
            <a href="/" class="d-block">
              <img class="img-fluid" src="@/assets/logo.png" alt="ilaw-logo" />
            </a>
          </div>
          <div class="site-navigation ms-auto d-none d-xl-block">
            <ul class="nav">
              <li class="nav-item">
                <router-link class="font-weight-medium link-black-100" to="/">
                  {{ $t('nav.home') }}
                </router-link>
              </li>

              <li class="nav-item shop">
                <b-dropdown
                  id="shop"
                  class="link-black-100 fw-bold d-flex align-items-center"
                  :text="$t('nav.shops')"
                >
                  <router-link to="/shop/all">
                    <b-dropdown-item>
                      {{ $t('misc.By Books') }}
                    </b-dropdown-item>
                  </router-link>
                  <router-link to="/publishers">
                    <b-dropdown-item>
                      {{ $t('misc.By Vendor / publisher') }}
                    </b-dropdown-item>
                  </router-link>
                  <router-link to="/authers">
                    <b-dropdown-item>
                      {{ $t('misc.By Author') }}
                    </b-dropdown-item>
                  </router-link>
                </b-dropdown>
              </li>
              <li class="nav-item">
                <router-link
                  class="font-weight-medium link-black-100"
                  to="/about-us"
                >
                  {{ $t('nav.aboutUs') }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="font-weight-medium link-black-100"
                  to="/faq"
                >
                  {{ $t('nav.faq') }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="font-weight-medium link-black-100"
                  to="/contact"
                >
                  {{ $t('nav.contactUs') }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="d-none d-md-flex align-items-center mt-3 mt-md-0">
            <div
              :class="$i18n.locale == 'ar' ? 'ml-4' : 'mr-4'"
              class="mb-4 mb-md-0"
            >
              <div
                class="d-flex align-items-center text-dark font-size-2 text-lh-sm"
                :class="$i18n.locale == 'ar' ? 'text-end' : ''"
              >
                <i class="flaticon-question font-size-5 mt-2 mr-1"></i>
                <div class="ml-2">
                  <a
                    :href="`mailto:${contact_data.email}`"
                    class="text-secondary-gray-1090 font-size-1"
                  >
                    {{ contact_data.email }}
                  </a>
                  <router-link
                    to="/contact"
                    class="h6 mb-0 d-block text-black mt-2"
                  >
                    {{ $t('misc.Any questions') }}
                  </router-link>
                </div>
              </div>
            </div>
            <a :href="`tel:${contact_data.phone}`">
              <div
                class="d-flex align-items-center text-dark font-size-2 text-lh-sm"
                :class="$i18n.locale == 'ar' ? 'text-end' : ''"
              >
                <i class="flaticon-phone font-size-5 mt-2 mr-1"></i>
                <div class="ml-2">
                  <span class="text-secondary-gray-1090 font-size-1">
                    {{ contact_data.phone }}
                  </span>
                  <div class="h6 mb-0">{{ $t('misc.Call toll-free') }}</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="navigation py-2">
      <div class="container my-1">
        <div class="d-md-flex align-items-center position-relative py-1">
          <div
            class="offcanvas-toggler px-2 px-sm-0 d-flex d-md-block justify-content-between align-items-center"
            :class="$i18n.locale == 'ar' ? 'ml-md-2' : 'mr-md-2'"
          >
            <a
              @click="openGategoryMenu"
              role="button"
              class="cat-menu text-white"
            >
              <svg width="20px" height="18px" data-v-41458b80="">
                <path
                  fill-rule="evenodd"
                  fill="rgb(255, 255, 255)"
                  d="M-0.000,-0.000 L20.000,-0.000 L20.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z"
                  data-v-41458b80=""
                ></path>
                <path
                  fill-rule="evenodd"
                  fill="rgb(255, 255, 255)"
                  d="M-0.000,8.000 L20.000,8.000 L20.000,10.000 L-0.000,10.000 L-0.000,8.000 Z"
                  data-v-41458b80=""
                ></path>
                <path
                  fill-rule="evenodd"
                  fill="rgb(255, 255, 255)"
                  d="M-0.000,16.000 L20.000,16.000 L20.000,18.000 L-0.000,18.000 L-0.000,16.000 Z"
                  data-v-41458b80=""
                ></path>
              </svg>

              <span :class="$i18n.locale == 'ar' ? 'mr-3' : 'ml-3'">
                {{ $t('misc.Browse categories') }}
              </span>
            </a>
            <ul class="nav d-md-none site-user">
              <li class="nav-item">
                <a
                  role="button"
                  @click="goWashList('wishlist')"
                  href="#"
                  class="nav-link text-white"
                >
                  <i class="glph-icon flaticon-heart font-size-4"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  role="button"
                  @click="goWashList('accountDetails')"
                  class="nav-link btn text-white"
                  v-if="isLoggedIn"
                >
                  <i class="glph-icon flaticon-user font-size-4"></i>
                </a>
                <button
                  class="nav-link btn text-white"
                  @click="openUserMenu"
                  v-else
                >
                  <i class="glph-icon flaticon-user font-size-4"></i>
                </button>
              </li>
              <li class="nav-item">
                <button
                  @click="openCartMenu"
                  class="nav-link btn text-white position-relative"
                  :class="$i18n.locale == 'ar' ? 'pl-0' : 'pr-0'"
                >
                  <span
                    class="position-absolute bg-primary-yellow width-16 height-16 rounded-circle d-flex align-items-center justify-content-center text-dark font-size-n9 left-0"
                  >
                    {{ totalQuantity }}
                  </span>
                  <i class="glph-icon flaticon-icon-126515 font-size-4"></i>
                  <span
                    class="d-none d-xl-inline h6 mb-0 ml-1"
                    v-if="currency && totalPrice != 0"
                  >
                    {{ totalPrice }} {{ currency.sympl }}
                  </span>
                </button>
              </li>
            </ul>
            <!-- <ul class="nav d-md-none ml-auto">
              <li class="nav-item">
                <button class="nav-link btn text-white" @click="openUserMenu">
                  <i class="glph-icon flaticon-user font-size-4"></i>
                </button>
              </li>
            </ul> -->
          </div>
          <div
            class="site-search ml-xl-0 px-2 px-sm-0 ml-md-auto w-r-100 flex-grow-1 mr-md-5 mt-2 mt-md-0 py-2 py-md-0"
          >
            <form class="form-inline my-2 my-xl-0" @submit.prevent>
              <div class="input-group input-group-borderless w-100">
                <input
                  type="text"
                  class="form-control px-3"
                  :class="
                    $i18n.locale == 'ar'
                      ? 'border-left rounded-right-1'
                      : 'border-right'
                  "
                  v-model="searchInput"
                  :placeholder="$t('misc.Search for books by keyword')"
                />
                <div class="input-group-append ml-0">
                  <div class="dropdown">
                    <button
                      class="dropdown-toggle h-100 custom-select pr-7 pl-4 rounded-0 shadow-none border-0 text-dark"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {{ $t('misc.All Categories') }}
                    </button>
                    <ul
                      class="dropdown-menu category"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li v-for="category in categories" :key="category.id">
                        <a
                          class="dropdown-item fw-bold"
                          href="#"
                          role="button"
                          @click="categoryId = category.id"
                        >
                          {{ category.name }}
                        </a>
                        <ul v-if="category.subs.length">
                          <li
                            v-for="sub in category.subs"
                            :key="sub.id"
                            @click="categoryId = sub.id"
                          >
                            <a class="text-black" role="button" href="#">
                              {{ sub.name }}
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <button
                    class="btn btn-primary-yellow px-3 py-2"
                    @click="search"
                  >
                    <i class="mx-1 glph-icon flaticon-loupe text-dark"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <ul class="nav d-none site-user d-md-flex">
            <li class="nav-item">
              <router-link to="/account/wishlist" class="nav-link text-white">
                <i class="glph-icon flaticon-heart font-size-4"></i>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/account/accountDetails"
                class="nav-link btn text-white"
                v-if="isLoggedIn"
              >
                <i class="glph-icon flaticon-user font-size-4"></i>
              </router-link>
              <button
                class="nav-link btn text-white"
                @click="openUserMenu"
                v-else
              >
                <i class="glph-icon flaticon-user font-size-4"></i>
              </button>
            </li>
            <li class="nav-item">
              <button
                @click="openCartMenu"
                class="nav-link btn text-white position-relative"
                :class="$i18n.locale == 'ar' ? 'pl-0' : 'pr-0'"
              >
                <span
                  class="position-absolute bg-primary-yellow width-16 height-16 rounded-circle d-flex align-items-center justify-content-center text-dark font-size-n9 left-0"
                >
                  {{ totalQuantity }}
                </span>
                <i class="glph-icon flaticon-icon-126515 font-size-4"></i>
                <span
                  class="d-none d-xl-inline h6 mb-0 ml-1"
                  v-if="currency && totalPrice != 0"
                >
                  {{ totalPrice }} {{ currency.sympl }}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <transition name="show-side">
    <sidebar-categories
      :categories="categories"
      @closeMenu="openGategoryMenu"
      v-if="categoriesSideMenu"
    />
  </transition>

  <transition name="fade">
    <user-account @closeMenu="openUserMenu" v-if="userAccount" />
  </transition>
  <transition name="fade">
    <cart-menu @closeMenu="openCartMenu" v-if="cartMenu" />
  </transition>
</template>

<script>
import Cookies from 'js-cookie'
import SidebarCategories from '@/components/SidebarCategories.vue'
import UserAccount from './UserAccount.vue'
import CartMenu from './CartMenu.vue'
export default {
  props: ['categories'],
  components: { SidebarCategories, UserAccount, CartMenu },
  data() {
    return {
      contact_data: [],
      navShow: null,
      categoriesSideMenu: false,
      miniCart: false,
      cartMenu: false,
      lang: this.$store.state.locale,
      locales: [
        { value: 'en', text: 'English' },
        { value: 'ar', text: 'عربي' },
      ],
      categoryId: '',
      searchInput: '',
    }
  },
  mounted() {
    this.getSettings()
  },
  computed: {
    userAccount() {
      return this.$store.getters.loginMenu
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    totalQuantity() {
      return this.$store.getters.totalQuantity
    },
    totalPrice() {
      return this.$store.getters.totalPrice
    },
    currency() {
      return this.$store.getters.currency
    },
  },
  methods: {
    changeLang(event) {
      Cookies.set('locale', event)
      this.$store.commit('changeLocale', event)
      setTimeout(() => window.location.reload(), 200)
    },
    openGategoryMenu() {
      this.categoriesSideMenu = !this.categoriesSideMenu
    },
    openUserMenu() {
      this.$store.commit('login_Menu')
    },
    openCartMenu() {
      this.cartMenu = !this.cartMenu
    },
    getSettings() {
      this.axios.get('settings').then((data) => {
        this.contact_data = data.data.data.contact_data
      })
    },
    search() {
      this.$router.push(
        `/search/name=${this.searchInput}&section=${this.categoryId}&`,
      )
    },
  },
}
</script>

<style lang="scss">
.navigation {
  background-color: #22559d;
}
.site-navigation {
  .nav-item {
    position: relative;
    transition: all 0.3s;

    a {
      overflow: hidden;
      position: relative;
      padding-bottom: 1rem;
      padding-top: 1rem;
      margin-inline-start: 1rem;
      margin-inline-end: 1rem;
      &.router-link-active.router-link-exact-active {
        color: #f30b0b !important;
        &::before {
          content: '';
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: #f30b0b;
          position: absolute;
          left: 0;
        }
      }
      &::before {
        content: '';
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #f30b0b;
        position: absolute;
        left: -100%;
        transition: all 0.3s;
      }
      &:hover {
        &::before {
          left: 0;
        }
      }
    }
    .dropdown-toggle {
      font-weight: 500;
    }
    &.shop {
      a {
        padding-bottom: 0;
        padding-top: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        &.router-link-active.router-link-exact-active {
          color: #000;
          &::before {
            content: unset;
          }
        }
        &::before {
          content: unset;
        }
      }
    }
  }
}
.site-user {
  .nav-item {
    > a {
      color: #fff !important;
      &:focus {
        box-shadow: unset !important;
      }
    }
  }
}
.site-branding {
  width: 12rem;
}
.cat-menu {
  span {
    color: #fff !important;
  }
}

button.btn:focus {
  outline: none !important;
  box-shadow: none !important;
}

.modal {
  // width: fit-content !important;
  .modal-content {
    border: unset !important;
    border-radius: unset !important;
  }
}
.select-category {
  text-align: left;
}
.is-rtl {
  .select-category {
    text-align: right;
  }
  .offcanvas-toggler {
    direction: rtl !important;
  }
  .input-group:not(.has-validation)
    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3) {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }

  div {
    text-align: right;
  }
}
.is-rtl .shop .btn-group:hover .dropdown-menu {
  inset: 0px 0px auto auto !important;
  text-align: right;
}
.dropdown-toggle:focus {
  outline: none !important;
}
.dropdown-menu.category {
  height: 200px;
  overflow: auto;
  font-size: 14px;
}
</style>
