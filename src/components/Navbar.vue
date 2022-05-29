<template>
  <div class="masthead">
    <div class="bg-white">
      <div class="container px-0 py-3 py-md-4">
        <div class="d-flex align-items-center position-relative flex-wrap">
          <div class="site-branding pe-4 mx-auto mx-md-0">
            <a href="/" class="d-block">
              <img class="img-fluid" src="@/assets/logo.png" alt="ilaw-logo" />
            </a>
          </div>
          <div class="site-navigation mr-auto d-none d-xl-block">
            <ul class="nav">
              <li class="nav-item">
                <router-link class="font-weight-medium link-black-100" to="/">
                  {{ $t('nav.home') }}
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  class="font-weight-medium link-black-100"
                  to="/shop"
                >
                  {{ $t('nav.categories') }}
                </router-link>
              </li>
              <li class="nav-item shop">
                <b-dropdown
                  id="shop"
                  class="link-black-100 fw-bold d-flex align-items-center"
                  :text="$t('nav.shops')"
                >
                  <router-link to="/shop">
                    <b-dropdown-item>
                      By Books
                    </b-dropdown-item>
                  </router-link>
                  <router-link to="/publisher">
                    <b-dropdown-item>By Vendor / publisher</b-dropdown-item>
                  </router-link>
                  <router-link to="/author">
                    <b-dropdown-item>By Author</b-dropdown-item>
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
          <div
            class="d-none d-md-flex align-items-center mt-3 mt-md-0"
            :class="$i18n.locale == 'ar' ? 'me-md-auto' : 'ms-md-auto'"
          >
            <!-- question -->
            <a
              :href="`mailto:${contactEmail}`"
              :class="$i18n.locale == 'ar' ? 'ml-4' : 'mr-4'"
              class="mb-4 mb-md-0"
            >
              <div
                class="d-flex align-items-center text-dark font-size-2 text-lh-sm"
                :class="$i18n.locale == 'ar' ? 'text-end' : ''"
              >
                <i class="flaticon-question font-size-5 mt-2 mr-1"></i>
                <div class="ml-2">
                  <span class="text-secondary-gray-1090 font-size-1">
                    {{ contactEmail }}
                  </span>
                  <div class="h6 mb-0">
                    {{ $t('misc.Any questions') }}
                  </div>
                </div>
              </div>
            </a>
            <!-- End question -->

            <!-- Customer care -->
            <a :href="`tel:${phone}`">
              <div
                class="d-flex align-items-center text-dark font-size-2 text-lh-sm"
                :class="$i18n.locale == 'ar' ? 'text-end' : ''"
              >
                <i class="flaticon-phone font-size-5 mt-2 mr-1"></i>
                <div class="ml-2">
                  <span class="text-secondary-gray-1090 font-size-1">
                    {{ phone }}
                  </span>
                  <div class="h6 mb-0">{{ $t('misc.Call toll-free') }}</div>
                </div>
              </div>
            </a>
            <!-- End Customer care -->
          </div>
        </div>
      </div>
    </div>

    <div class="navigation py-2">
      <div class="container my-1">
        <div class="d-md-flex align-items-center position-relative py-1">
          <div
            class="offcanvas-toggler px-2 px-sm-0 mr-md-8 d-flex d-md-block align-items-center"
          >
            <a
              @click="openGategoryMenu"
              role="button"
              class="cat-menu text-white"
            >
              <svg width="20px" height="18px">
                <path
                  fill-rule="evenodd"
                  fill="rgb(255, 255, 255)"
                  d="M-0.000,-0.000 L20.000,-0.000 L20.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z"
                />
                <path
                  fill-rule="evenodd"
                  fill="rgb(255, 255, 255)"
                  d="M-0.000,8.000 L15.000,8.000 L15.000,10.000 L-0.000,10.000 L-0.000,8.000 Z"
                />
                <path
                  fill-rule="evenodd"
                  fill="rgb(255, 255, 255)"
                  d="M-0.000,16.000 L20.000,16.000 L20.000,18.000 L-0.000,18.000 L-0.000,16.000 Z"
                />
              </svg>
              <span class="ml-3">{{ $t('misc.Browse categories') }}</span>
            </a>

            <ul class="nav d-md-none ml-auto">
              <li class="nav-item">
                <!-- Account Sidebar Toggle Button - Mobile -->
                <button class="nav-link btn text-white" @click="openUserMenu">
                  <i class="glph-icon flaticon-user font-size-4"></i>
                </button>
                <!-- End Account Sidebar Toggle Button - Mobile -->
              </li>
            </ul>
          </div>
          <div
            class="site-search ml-xl-0 px-2 px-sm-0 ml-md-auto w-r-100 flex-grow-1 mr-md-5 mt-2 mt-md-0 py-2 py-md-0"
          >
            <form class="form-inline my-2 my-xl-0">
              <div class="input-group input-group-borderless w-100">
                <input
                  type="text"
                  class="form-control rounded-left-1 px-3 border-right"
                  placeholder="Search for books by keyword"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append ml-0">
                  <select
                    class="d-none d-lg-block h-100 custom-select pr-7 pl-4 rounded-0 shadow-none border-0 text-dark"
                    id="inputGroupSelect01"
                    style="cursor: pointer;"
                  >
                    <option selected>All Categories</option>

                    <option
                      v-for="category in categories"
                      :key="category.id"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                  <button
                    class="btn btn-primary-yellow px-3 py-2"
                    type="submit"
                  >
                    <i class="mx-1 glph-icon flaticon-loupe text-dark"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <ul class="nav d-none site-user d-md-flex">
            <li class="nav-item">
              <a href="#" class="nav-link text-white">
                <i class="glph-icon flaticon-heart font-size-4"></i>
              </a>
            </li>
            <li class="nav-item">
              <!-- Account Sidebar Toggle Button -->
              <button class="nav-link btn text-white" @click="openUserMenu">
                <i class="glph-icon flaticon-user font-size-4"></i>
              </button>
              <!-- End Account Sidebar Toggle Button -->
            </li>
            <li class="nav-item">
              <!-- Cart Sidebar Toggle Button -->
              <button
                @click="openCartMenu"
                class="nav-link btn pr-0 text-white position-relative"
              >
                <span
                  class="position-absolute bg-primary-yellow width-16 height-16 rounded-circle d-flex align-items-center justify-content-center text-dark font-size-n9 left-0"
                >
                  3
                </span>
                <i class="glph-icon flaticon-icon-126515 font-size-4"></i>
                <span class="d-none d-xl-inline h6 mb-0 ml-1">$40.93</span>
              </button>
              <!-- End Cart Sidebar Toggle Button -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <transition name="show-side">
    <sidebar-categories
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
      phone: '',
      contactEmail: '',
      navShow: null,
      categoriesSideMenu: false,
      // userAccount: false,
      miniCart: false,
      cartMenu: false,
      lang: this.$store.state.locale,
      locales: [
        { value: 'en', text: 'English' },
        { value: 'ar', text: 'عربي' },
      ],
    }
  },
  mounted() {
    this.getSettings()
  },
  computed: {
    userAccount() {
      return this.$store.getters.loginMenu
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
      this.axios.get('Settings/settings').then((data) => {
        let resault = data.data.setting
        for (let i = 0; i < resault.length; i += 1) {
          if (resault[i].key == 'email') {
            this.contactEmail = resault[i].value
          } else if (resault[i].key == 'phone') {
            this.phone = resault[i].value
          }
        }
      })
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
  width: fit-content !important;
  .modal-content {
    border: unset !important;
    border-radius: unset !important;
  }
}
</style>
