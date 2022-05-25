<template>
  <div id="primary" class="content-area">
    <main id="main" class="site-main">
      <div class="product">
        <div class="container">
          <div class="row">
            <div
              class="col-md-5 woocommerce-product-gallery woocommerce-product-gallery--with-images images"
            >
              <figure class="woocommerce-product-gallery__wrapper pt-8 mb-0">
                <div
                  class="js-slick-carousel u-slick"
                  data-pagi-classes="text-center u-slick__pagination my-4"
                >
                  <carousel v-bind="settings">
                    <slide v-for="n in 5" :key="n">
                      <div class="js-slide">
                        <img
                          src="@/assets/book.jpg"
                          alt="Image Description"
                          class="mx-auto img-fluid"
                        />
                      </div>
                    </slide>
                    <template #addons>
                      <pagination />
                    </template>
                  </carousel>
                </div>
              </figure>
            </div>
            <div class="col-md-7 pl-0 summary entry-summary border-left">
              <div class="space-top-2 px-4 px-xl-7 border-bottom pb-5">
                <h1 class="product_title entry-title font-size-7 mb-3">
                  Where the Crawdads Sing
                </h1>
                <div class="font-size-2 mb-4">
                  <span class="text-yellow-darker">
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                    <span class="fas fa-star"></span>
                  </span>
                  <span class="ml-3">(3,714)</span>
                  <router-link to="/author">
                    <span class="ml-3 font-weight-medium text-black">
                      By(Author)
                    </span>

                    <span class="ml-2 text-gray-600">Anna Banks</span>
                  </router-link>
                  <router-link to="/publisher">
                    <span class="ml-3 font-weight-medium text-black">
                      Seller(Publisher)
                    </span>
                    <span class="ml-2 text-gray-600">Anna Banks</span>
                  </router-link>
                </div>
                <p class="price font-size-22 font-weight-medium mb-3">
                  <span class="woocommerce-Price-amount amount">
                    <span class="woocommerce-Price-currencySymbol">$</span>
                    29.95
                  </span>
                  –
                  <span class="woocommerce-Price-amount amount">
                    <span class="woocommerce-Price-currencySymbol">$</span>
                    59.95
                  </span>
                </p>
                <div class="mb-2 font-size-2">
                  <span class="font-weight-medium">Book Format:</span>
                  <span class="ml-2 text-gray-600">Choose an option</span>
                </div>
                <!-- Radio Checkbox Group -->
                <div class="row mx-gutters-2 mb-4">
                  <div class="col-6 col-md-3 mb-3 mb-md-0">
                    <div class="">
                      <input
                        id="typeOfListingRadio1"
                        type="radio"
                        name="typeOfListingRadio1"
                        class="custom-control-input checkbox-outline__input"
                      />
                      <label
                        class="border-bottom d-block checkbox-outline__label py-3 px-1 mb-0"
                        for="typeOfListingRadio1"
                      >
                        <span class="d-block">Hardcopy</span>
                        <span class="">$9.59</span>
                      </label>
                    </div>
                  </div>
                  <div class="col-6 col-md-3 mb-3 mb-md-0">
                    <div class="">
                      <input
                        id="typeOfListingRadio2"
                        type="radio"
                        name="typeOfListingRadio1"
                        class="custom-control-input checkbox-outline__input"
                        checked
                      />
                      <label
                        class="border-bottom d-block checkbox-outline__label py-3 px-1 mb-0"
                        for="typeOfListingRadio2"
                      >
                        <span class="d-block">PDF</span>
                        <span class="">$9.59</span>
                      </label>
                    </div>
                  </div>
                </div>
                <!-- End Radio Checkbox Group -->

                <div
                  class="woocommerce-product-details__short-description font-size-2 mb-5"
                >
                  <p class="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Excepteur sint occaecat.
                  </p>
                </div>

                <form @click.prevent class="cart d-md-flex align-items-center">
                  <div class="quantity mb-4 mb-md-0 d-flex align-items-center">
                    <!-- Quantity -->
                    <div class="border px-3 width-120">
                      <div class="js-quantity">
                        <div class="d-flex align-items-center">
                          <label class="screen-reader-text sr-only">
                            Quantity
                          </label>
                          <button class="js-minus text-dark" @click="qtyMinus">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="10px"
                              height="1px"
                            >
                              <path
                                fill-rule="evenodd"
                                fill="rgb(22, 22, 25)"
                                d="M-0.000,-0.000 L10.000,-0.000 L10.000,1.000 L-0.000,1.000 L-0.000,-0.000 Z"
                              />
                            </svg>
                          </button>
                          <input
                            type="number"
                            class="input-text qty text form-control text-center border-0"
                            step="1"
                            min="1"
                            max="100"
                            name="quantity"
                            v-model="quantity"
                            title="Qty"
                          />
                          <button class="js-plus text-dark" @click="qtyPlus">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="10px"
                              height="10px"
                            >
                              <path
                                fill-rule="evenodd"
                                fill="rgb(22, 22, 25)"
                                d="M10.000,5.000 L6.000,5.000 L6.000,10.000 L5.000,10.000 L5.000,5.000 L-0.000,5.000 L-0.000,4.000 L5.000,4.000 L5.000,-0.000 L6.000,-0.000 L6.000,4.000 L10.000,4.000 L10.000,5.000 Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- End Quantity -->
                  </div>

                  <button
                    type="submit"
                    name="add-to-cart"
                    value="7145"
                    class="btn btn-dark border-0 rounded-0 p-3 min-width-250 ml-md-4 single_add_to_cart_button button alt"
                  >
                    Add to cart
                  </button>
                </form>
              </div>
              <div class="px-4 px-xl-7 py-5 d-flex align-items-center">
                <ul class="list-unstyled nav">
                  <li class="mr-6 mb-4 mb-md-0">
                    <a href="#" class="h-primary">
                      <i class="flaticon-heart mr-2"></i>
                      Add to Wishlist
                    </a>
                  </li>
                  <li class="mr-6">
                    <a href="#" class="h-primary">
                      <i class="flaticon-share mr-2"></i>
                      Share
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Nav Classic -->
        <div class="js-scroll-nav mb-10">
          <div class="border-top border-bottom">
            <ul
              class="container tabs wc-tabs nav justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble"
            >
              <li class="flex-shrink-0 tab flex-md-shrink-1 nav-item">
                <a
                  class="py-4 font-weight-medium"
                  :class="tabs.description ? 'active' : ''"
                  @click="activeTab('description')"
                >
                  Description
                </a>
              </li>

              <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                <a
                  class="nav-link py-4 font-weight-medium"
                  :class="tabs.index ? 'active' : ''"
                  @click="activeTab('index')"
                >
                  index
                </a>
              </li>
              <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                <a
                  class="nav-link py-4 font-weight-medium"
                  :class="tabs.aboutAuthor ? 'active' : ''"
                  @click="activeTab('aboutAuthor')"
                >
                  About author
                </a>
              </li>
              <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                <a
                  class="nav-link py-4 font-weight-medium"
                  :class="tabs.aboutPublisher ? 'active' : ''"
                  @click="activeTab('aboutPublisher')"
                >
                  About publisher
                </a>
              </li>
              <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                <a
                  class="nav-link py-4 font-weight-medium"
                  :class="tabs.review ? 'active' : ''"
                  @click="activeTab('review')"
                >
                  Reviews (0)
                </a>
              </li>
            </ul>
          </div>

          <!-- Tab Content -->
          <transition name="fade">
            <div
              v-if="tabs.description"
              class="tab-content font-size-2 container"
            >
              <div class="row">
                <div class="col-xl-8 offset-xl-2">
                  <div
                    class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab pt-9"
                  >
                    <!-- Mockup Block -->
                    <p class="mb-0">
                      We aim to show you accurate product information.
                      Manufacturers, suppliers and others provide what you see
                      here, and we have not verified it. See our disclaimer
                    </p>
                    <p class="mb-0">#1 New York Times Bestseller</p>
                    <p class="mb-0">
                      A Reese Witherspoon x Hello Sunshine Book Club Pick
                    </p>
                    <p class="mb-4">
                      "I can't even express how much I love this book! I didn't
                      want this story to end!"--Reese Witherspoon
                    </p>
                    <p class="mb-4">
                      "Painfully beautiful."--The New York Times Book Review
                    </p>
                    <p>"Perfect for fans of Barbara Kingsolver."--Bustle</p>
                    <p class="mb-4">
                      For years, rumors of the "Marsh Girl" have haunted Barkley
                      Cove, a quiet town on the North Carolina coast. So in late
                      1969, when handsome Chase Andrews is found dead, the
                      locals immediately suspect Kya Clark, the so-called Marsh
                      Girl. But Kya is not what they say. Sensitive and
                      intelligent, she has survived for years alone in the marsh
                      that she calls home, finding friends in the gulls and
                      lessons in the sand. Then the time comes when she yearns
                      to be touched and loved. When two young men from town
                      become intrigued by her wild beauty, Kya opens herself to
                      a new life--until the unthinkable happens.
                    </p>
                    <p class="mb-4">
                      Perfect for fans of Barbara Kingsolver and Karen Russell,
                      Where the Crawdads Sing is at once an exquisite ode to the
                      natural world, a heartbreaking coming-of-age story, and a
                      surprising tale of possible murder. Owens reminds us that
                      we are forever shaped by the children we once were, and
                      that we are all subject to the beautiful and violent
                      secrets that nature keeps
                    </p>
                    <p>WHERE THE CRAWDADS LP</p>
                    <!-- End Mockup Block -->
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-8 offset-xl-2">
                    <div
                      class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab pt-9"
                    >
                      <!-- Mockup Block -->
                      <div class="table-responsive mb-4">
                        <table class="table table-hover table-borderless">
                          <tbody>
                            <tr>
                              <th class="px-4 px-xl-5">Format:</th>
                              <td class="">Paperback | 384 pages</td>
                            </tr>
                            <tr>
                              <th class="px-4 px-xl-5">Dimensions</th>
                              <td>9126 x 194 x 28mm | 301g</td>
                            </tr>
                            <tr>
                              <th class="px-4 px-xl-5">Publication date:</th>
                              <td>20 Dec 2020</td>
                            </tr>
                            <tr>
                              <th class="px-4 px-xl-5">Publisher:</th>
                              <td>Little, Brown Book Group</td>
                            </tr>
                            <tr>
                              <th class="px-4 px-xl-5">Imprint:</th>
                              <td>Corsair</td>
                            </tr>
                            <tr>
                              <th class="px-4 px-xl-5">
                                Publication City/Country:
                              </th>
                              <td>London, United Kingdom</td>
                            </tr>
                            <tr>
                              <th class="px-4 px-xl-5">Language:</th>
                              <td>English</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- End Mockup Block -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <!-- index -->
          <transition name="fade">
            <div v-if="tabs.index" class="tab-content font-size-2 container">
              <div class="row">
                <div class="col-xl-8 offset-xl-2">
                  <div
                    class="woocommerce-Tabs-panel border border-2 px-4 mt-4 woocommerce-Tabs-panel--description panel entry-content wc-tab pt-9"
                  >
                    <h4 class="mb-2 primary-color pb-2 text-center">
                      Table of content
                    </h4>
                    <div class="table-responsive mb-4">
                      <table class="table table-hover">
                        <tbody>
                          <tr>
                            <th class="px-4 px-xl-5">introduction</th>
                            <td class="">i</td>
                          </tr>
                          <tr>
                            <th class="px-4 px-xl-5">Chapter 1</th>
                            <td>1</td>
                          </tr>
                          <tr>
                            <th class="px-4 px-xl-5">Chapter 2</th>
                            <td>10</td>
                          </tr>
                          <tr>
                            <th class="px-4 px-xl-5">Chapter 3</th>
                            <td>20</td>
                          </tr>
                          <tr>
                            <th class="px-4 px-xl-5">Chapter 4</th>
                            <td>40</td>
                          </tr>
                          <tr>
                            <th class="px-4 px-xl-5">Chapter 5</th>
                            <td>80</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- End Mockup Block -->
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <!-- author -->
          <transition name="fade">
            <div
              v-if="tabs.aboutAuthor"
              class="tab-content font-size-2 container"
            >
              <div class="row mt-5">
                <div class="col-xl-8 offset-xl-2">
                  <div class="row">
                    <div class="col-md-4">
                      <img
                        src="@/assets/img2.png"
                        alt="ilaw"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="description">
                        <div class="mb-4 pb-xl-1 ml-xl-4">
                          <h6 class="font-weight-medium font-size-4 mb-4">
                            Anna Banks
                          </h6>
                          <div class="font-size-2">
                            Mauris tempus erat laoreet turpis lobortis, eu
                            tincidunt erat fermentum. Aliquam non tincidunt
                            urna. Integer tincidunt nec nisl vitae ullamcorper.
                            Proin sed ultrices erat. Praesent varius ultrices
                            massa at faucibus. Aenean dignissim, orci sed
                            faucibus pharetra, dui mi dignissim tortor, sit amet
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div
              v-if="tabs.aboutPublisher"
              class="tab-content font-size-2 container"
            >
              <div class="row mt-5">
                <div class="col-xl-8 offset-xl-2">
                  <div class="row">
                    <div class="col-md-4">
                      <img
                        src="@/assets/img2.png"
                        alt="ilaw"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="description">
                        <div class="mb-4 pb-xl-1 ml-xl-4">
                          <h6 class="font-weight-medium font-size-4 mb-4">
                            Anna Banks
                          </h6>
                          <div class="font-size-2">
                            Mauris tempus erat laoreet turpis lobortis, eu
                            tincidunt erat fermentum. Aliquam non tincidunt
                            urna. Integer tincidunt nec nisl vitae ullamcorper.
                            Proin sed ultrices erat. Praesent varius ultrices
                            massa at faucibus. Aenean dignissim, orci sed
                            faucibus pharetra, dui mi dignissim tortor, sit amet
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>

          <transition name="fade">
            <div
              v-if="tabs.review"
              :class="tabs.review ? 'active' : ''"
              class="tab-content font-size-2 container"
            >
              <div class="row">
                <div class="col-xl-8 offset-xl-2">
                  <div
                    class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab pt-9"
                  >
                    <!-- Mockup Block -->
                    <h4 class="font-size-3">Customer Reviews</h4>
                    <div class="row mb-8">
                      <div class="col-md-6 mb-6 mb-md-0">
                        <div class="d-flex align-items-center mb-4">
                          <span class="font-size-15 font-weight-bold">
                            4.6
                          </span>
                          <div class="ml-3 h6 mb-0">
                            <span class="font-weight-normal">
                              3,714 reviews
                            </span>
                            <div class="text-yellow-darker">
                              <small class="fas fa-star"></small>
                              <small class="fas fa-star"></small>
                              <small class="fas fa-star"></small>
                              <small class="fas fa-star"></small>
                              <small class="far fa-star"></small>
                            </div>
                          </div>
                        </div>

                        <div class="d-md-flex">
                          <button
                            type="button"
                            class="btn btn-outline-dark rounded-0 px-5 mb-3 mb-md-0"
                          >
                            See all reviews
                          </button>
                          <button
                            type="button"
                            class="btn btn-dark ml-md-3 rounded-0 px-5"
                          >
                            Write a review
                          </button>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <!-- Ratings -->
                        <ul class="list-unstyled pl-xl-4">
                          <li class="py-2">
                            <a
                              class="row align-items-center mx-gutters-2 font-size-2"
                              href="javascript:;"
                            >
                              <div class="col-auto">
                                <span class="text-dark">5 stars</span>
                              </div>
                              <div class="col px-0">
                                <div
                                  class="progress bg-white-100"
                                  style="height: 7px;"
                                >
                                  <div
                                    class="progress-bar bg-yellow-darker"
                                    role="progressbar"
                                    style="width: 100%;"
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div class="col-2">
                                <span class="text-secondary">205</span>
                              </div>
                            </a>
                          </li>
                          <li class="py-2">
                            <a
                              class="row align-items-center mx-gutters-2 font-size-2"
                              href="javascript:;"
                            >
                              <div class="col-auto">
                                <span class="text-dark">4 stars</span>
                              </div>
                              <div class="col px-0">
                                <div
                                  class="progress bg-white-100"
                                  style="height: 7px;"
                                >
                                  <div
                                    class="progress-bar bg-yellow-darker"
                                    role="progressbar"
                                    style="width: 53%;"
                                    aria-valuenow="53"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div class="col-2">
                                <span class="text-secondary">55</span>
                              </div>
                            </a>
                          </li>
                          <li class="py-2">
                            <a
                              class="row align-items-center mx-gutters-2 font-size-2"
                              href="javascript:;"
                            >
                              <div class="col-auto">
                                <span class="text-dark">3 stars</span>
                              </div>
                              <div class="col px-0">
                                <div
                                  class="progress bg-white-100"
                                  style="height: 7px;"
                                >
                                  <div
                                    class="progress-bar bg-yellow-darker"
                                    role="progressbar"
                                    style="width: 20%;"
                                    aria-valuenow="20"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div class="col-2">
                                <span class="text-secondary">23</span>
                              </div>
                            </a>
                          </li>
                          <li class="py-2">
                            <a
                              class="row align-items-center mx-gutters-2 font-size-2"
                              href="javascript:;"
                            >
                              <div class="col-auto">
                                <span class="text-dark">2 stars</span>
                              </div>
                              <div class="col px-0">
                                <div
                                  class="progress bg-white-100"
                                  style="height: 7px;"
                                >
                                  <div
                                    class="progress-bar bg-yellow-darker"
                                    role="progressbar"
                                    style="width: 0%;"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div class="col-2">
                                <span class="text-secondary">0</span>
                              </div>
                            </a>
                          </li>
                          <li class="py-2">
                            <a
                              class="row align-items-center mx-gutters-2 font-size-2"
                              href="javascript:;"
                            >
                              <div class="col-auto">
                                <span class="text-dark">1 stars</span>
                              </div>
                              <div class="col px-0">
                                <div
                                  class="progress bg-white-100"
                                  style="height: 7px;"
                                >
                                  <div
                                    class="progress-bar bg-yellow-darker"
                                    role="progressbar"
                                    style="width: 1%;"
                                    aria-valuenow="1"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div class="col-2">
                                <span class="text-secondary">4</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <!-- End Ratings -->
                      </div>
                    </div>

                    <h4 class="font-size-3 mb-8">1-5 of 44 reviews</h4>

                    <ul class="list-unstyled mb-8">
                      <li class="mb-4 pb-5 border-bottom">
                        <div class="d-flex align-items-center mb-3">
                          <h6 class="mb-0">
                            Amazing Story! You will LOVE it
                          </h6>
                          <div class="text-yellow-darker ml-3">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="far fa-star"></small>
                          </div>
                        </div>
                        <p class="mb-4 text-lh-md">
                          Such an incredibly complex story! I had to buy it
                          because there was a waiting list of 30+ at the local
                          library for this book. Thrilled that I made the
                          purchase
                        </p>
                        <div class="text-gray-600 mb-4">
                          Staci, February 22, 2020
                        </div>
                        <ul class="nav">
                          <li class="mr-7">
                            <a
                              href="#"
                              class="text-gray-600 d-flex align-items-center"
                            >
                              <i
                                class="text-dark font-size-5 flaticon-like-1"
                              ></i>
                              <span class="ml-2">90</span>
                            </a>
                          </li>
                          <li class="mr-7">
                            <a
                              href="#"
                              class="text-gray-600 d-flex align-items-center"
                            >
                              <i
                                class="text-dark font-size-5 flaticon-dislike"
                              ></i>
                              <span class="ml-2">10</span>
                            </a>
                          </li>
                          <li class="mr-7">
                            <a
                              href="#"
                              class="text-gray-600 d-flex align-items-center"
                            >
                              <i
                                class="text-dark font-size-5 flaticon-flag"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="mb-4 pb-5 border-bottom">
                        <div class="d-flex align-items-center mb-3">
                          <h6 class="mb-0">
                            Get the best seller at a great price.
                          </h6>
                          <div class="text-yellow-darker ml-3">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="far fa-star"></small>
                          </div>
                        </div>
                        <p class="mb-4 text-lh-md">
                          Awesome book, great price, fast delivery. Thanks so
                          much.
                        </p>
                        <div class="text-gray-600 mb-4">
                          Staci, February 22, 2020
                        </div>
                        <ul class="nav">
                          <li class="mr-7">
                            <a
                              href="#"
                              class="text-gray-600 d-flex align-items-center"
                            >
                              <i
                                class="text-dark font-size-5 flaticon-like-1"
                              ></i>
                              <span class="ml-2">90</span>
                            </a>
                          </li>
                          <li class="mr-7">
                            <a
                              href="#"
                              class="text-gray-600 d-flex align-items-center"
                            >
                              <i
                                class="text-dark font-size-5 flaticon-dislike"
                              ></i>
                              <span class="ml-2">10</span>
                            </a>
                          </li>
                          <li class="mr-7">
                            <a
                              href="#"
                              class="text-gray-600 d-flex align-items-center"
                            >
                              <i
                                class="text-dark font-size-5 flaticon-flag"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="mb-4 pb-5 border-bottom">
                        <div class="d-flex align-items-center mb-3">
                          <h6 class="mb-0">I read this book short...</h6>
                          <div class="text-yellow-darker ml-3">
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="fas fa-star"></small>
                            <small class="far fa-star"></small>
                          </div>
                        </div>
                        <p class="mb-4 text-lh-md">
                          I read this book shortly after I got it and didn't
                          just put it on my TBR shelf mainly because I saw it on
                          Reese Witherspoon's bookclub September read. It was
                          one of the best books I've read this year, and
                          reminded me some of Kristen Hannah's The Great Alone.
                        </p>
                        <div class="text-gray-600 mb-4">
                          Staci, February 22, 2020
                        </div>
                        <ul class="nav">
                          <li class="mr-7">
                            <a
                              href="#"
                              class="text-gray-600 d-flex align-items-center"
                            >
                              <i
                                class="text-dark font-size-5 flaticon-like-1"
                              ></i>
                              <span class="ml-2">90</span>
                            </a>
                          </li>
                          <li class="mr-7">
                            <a
                              href="#"
                              class="text-gray-600 d-flex align-items-center"
                            >
                              <i
                                class="text-dark font-size-5 flaticon-dislike"
                              ></i>
                              <span class="ml-2">10</span>
                            </a>
                          </li>
                          <li class="mr-7">
                            <a
                              href="#"
                              class="text-gray-600 d-flex align-items-center"
                            >
                              <i
                                class="text-dark font-size-5 flaticon-flag"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <h4 class="font-size-3 mb-4">Write a Review</h4>
                    <div class="d-flex align-items-center mb-6">
                      <h6 class="mb-0">Select a rating(required)</h6>
                      <div class="text-yellow-darker ml-3 font-size-4">
                        <small class="far fa-star"></small>
                        <small class="far fa-star"></small>
                        <small class="far fa-star"></small>
                        <small class="far fa-star"></small>
                        <small class="far fa-star"></small>
                      </div>
                    </div>
                    <div class="js-form-message form-group mb-4">
                      <label
                        for="descriptionTextarea"
                        class="form-label text-dark h6 mb-3"
                      >
                        Details please! Your review helps other shoppers.
                      </label>
                      <textarea
                        id="descriptionTextarea"
                        class="form-control rounded-0 p-4"
                        rows="7"
                        placeholder="What did you like or dislike? What should other shoppers know before buying?"
                        required
                        data-msg="Please enter your message."
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"
                      ></textarea>
                    </div>
                    <div class="form-group mb-5">
                      <label
                        for="inputCompanyName"
                        class="form-label text-dark h6 mb-3"
                      >
                        Add a title
                      </label>
                      <input
                        id="inputCompanyName"
                        type="text"
                        class="form-control rounded-0 px-4"
                        name="companyName"
                        placeholder="3000 characters remaining"
                        aria-label="3000 characters remaining"
                      />
                    </div>
                    <div class="d-flex">
                      <button
                        type="submit"
                        class="btn btn-dark btn-wide rounded-0 transition-3d-hover"
                      >
                        Submit Review
                      </button>
                    </div>
                    <!-- End Mockup Block -->
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <!-- End Nav Classic -->
        <section class="space-bottom-3">
          <div class="container">
            <header
              class="d-md-flex mb-3 primary-color justify-content-between align-items-center"
            >
              <h2 class="fs-4">
                Customers Also Considered
              </h2>
            </header>

            <div class="product">
              <carousel v-bind="settingsBook">
                <slide v-for="n in 10" :key="n">
                  <div class="js-slick-carousel products no-gutters">
                    <div class="overflow-hidden p-3 p-md-4d875">
                      <book-card />
                    </div>
                  </div>
                </slide>
                <template #addons>
                  <pagination />
                </template>
              </carousel>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import BookCard from '@/components/BookCard.vue'
import { ref } from 'vue'
export default {
  components: { Carousel, Slide, Pagination, BookCard },
  data() {
    return {
      tabs: {
        description: true,
        review: false,
        index: false,
        aboutAuthor: false,
        aboutPublisher: false,
      },
      settings: {
        autoplay: 5000,
        itemsToShow: 1,
        snapAlign: 'center',
      },
      settingsBook: {
        autoplay: 5000,
        itemsToShow: 1,
        snapAlign: 'center',
        breakpoints: {
          576: {
            itemsToShow: 1,
            snapAlign: 'center',
          },
          768: {
            itemsToShow: 3,
            snapAlign: 'center',
          },
          992: {
            itemsToShow: 4,
            snapAlign: 'center',
          },
        },
      },
    }
  },
  methods: {
    activeTab(tab) {
      this.tabs.description = false
      this.tabs.review = false
      this.tabs.aboutAuthor = false
      this.tabs.index = false
      this.tabs.aboutPublisher = false
      this.tabs[tab] = true
    },
  },

  setup() {
    const quantity = ref(1)
    function qtyPlus() {
      quantity.value++
    }
    function qtyMinus() {
      if (quantity.value > 1) quantity.value--
    }

    return { quantity, qtyPlus, qtyMinus }
  },
}
</script>
<style scoped lang="scss">
.tabs {
  position: relative;
  margin-bottom: -1px;
  a {
    color: #7c6e65 !important;
    padding-right: 0;
    padding-left: 0;
    margin: 0 1.6rem;
    border-bottom: 1px solid transparent;
    position: relative;
    z-index: 1;
    &.active {
      color: #161619 !important;
      border-color: #161619;
    }
  }
}
.js-minus,
.js-plus {
  padding: 0;
  border: 0;
  background-color: transparent;
  box-shadow: none;
  outline: none !important;
}

a {
  cursor: pointer;
}
@media (max-width: 575.98px) {
  .products
    .product:not(.product__card):not(.product__list):not(.product__space) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
