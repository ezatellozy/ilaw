<template>
  <div id="primary" class="content-area">
    <main id="main" class="site-main">
      <div class="product" v-if="book">
        <div class="container overflow-hidden">
          <div class="row">
            <div
              class="col-md-5 woocommerce-product-gallery woocommerce-product-gallery--with-images images"
            >
              <div class="main-image">
                <ProductSwiper
                  v-if="book"
                  :products="book"
                  :current-slide="slide"
                  :thumbs="thumbs"
                />
              </div>
              <div class="additional-images">
                <ProductThumnail
                  v-if="book"
                  :products="book"
                  @thumbs="thumbs"
                  v-model:current-slide="slide"
                />
              </div>
            </div>
            <div class="col-md-7 pl-0 summary entry-summary border-left">
              <div class="space-top-2 px-4 px-xl-7 border-bottom pb-5">
                <h1 class="product_title entry-title font-size-7 mb-3">
                  {{ book.name }}
                </h1>
                <div class="font-size-2 mb-4">
                  <span class="text-yellow-darker">
                    <span
                      :class="book.reviewsTotal > 0 ? 'fas' : 'far'"
                      class="fa-star"
                    ></span>
                    <span
                      :class="book.reviewsTotal >= 2 ? 'fas' : 'far'"
                      class="fa-star"
                    ></span>
                    <span
                      :class="book.reviewsTotal >= 3 ? 'fas' : 'far'"
                      class="fa-star"
                    ></span>
                    <span
                      :class="book.reviewsTotal >= 4 ? 'fas' : 'far'"
                      class="fa-star"
                    ></span>
                    <span
                      :class="book.reviewsTotal > 4 ? 'fas' : 'far'"
                      class="fa-star"
                    ></span>
                  </span>
                  <span class="ml-3">({{ book.reviewsTotal.toFixed(2) }})</span>
                  <router-link :to="`/author/${book.writer.id}`">
                    <span class="ml-3 font-weight-medium text-black">
                      <bdi>{{ $t('misc.By') }}</bdi>
                      ({{ $t('misc.author') }})
                    </span>
                    <span class="ml-2 text-gray-600">
                      {{ book.writer.name }}
                    </span>
                  </router-link>
                  <router-link :to="`/publisher/${book.publisher.id}`">
                    <span class="ml-3 font-weight-medium text-black">
                      <bdi>{{ $t('misc.seller') }}</bdi>
                      ({{ $t('misc.publisher') }})
                    </span>
                    <span class="ml-2 text-gray-600">
                      {{ book.publisher.name }}
                    </span>
                  </router-link>
                </div>
                <div>
                  <span
                    class="woocommerce-Price-currencySymbol d-flex text-center"
                    v-if="currency"
                  >
                    <div class="pdf" v-if="book.pdfCopy">
                      <h5 class="price">{{ $t('misc.pdf') }}</h5>
                      <span v-if="book.pdfCopy.status == 1">
                        <span v-if="book.pdfCopy.price.offer">
                          {{ book.pdfCopy.price.offer }} -
                        </span>

                        <span
                          :class="
                            book.pdfCopy.price.offer
                              ? 'text-decoration-line-through'
                              : ''
                          "
                        >
                          {{ book.pdfCopy.price.original }}
                        </span>
                        {{ currency.sympl }}
                      </span>
                    </div>
                    <div
                      class="hardCopy"
                      :class="$i18n.locale == 'ar' ? ' mr-4' : 'ml-4'"
                      v-if="book.hardCopy"
                    >
                      <h5 class="price">{{ $t('misc.Hardcopy') }}</h5>
                      <span v-if="book.hardCopy.status == 1">
                        <span v-if="book.hardCopy.price.offer">
                          {{ book.hardCopy.price.offer }} -
                        </span>

                        <span
                          :class="
                            book.hardCopy.price.offer
                              ? 'text-decoration-line-through text-gray-700'
                              : ''
                          "
                        >
                          {{ book.hardCopy.price.original }}
                        </span>
                        {{ currency.sympl }}
                      </span>
                    </div>
                  </span>
                </div>
                <div class="mb-2 mt-4 font-size-2">
                  <span class="font-weight-medium">
                    {{ $t('misc.Book Format') }}:
                  </span>
                  <span class="ml-2 text-gray-600">
                    {{ $t('misc.Choose an option') }}
                  </span>
                </div>

                <div class="row mx-gutters-2 mb-4" v-if="currency">
                  <div class="col mb-3 mb-md-0">
                    <div class="">
                      <input
                        id="typeOfListingRadio1"
                        type="radio"
                        v-model="item.book_type"
                        value="hardcopy"
                        name="typeOfListingRadio1"
                        class="custom-control-input checkbox-outline__input"
                      />
                      <label
                        class="border-bottom d-block checkbox-outline__label py-3 px-1 mb-0"
                        for="typeOfListingRadio1"
                      >
                        <span class="d-block text-center">
                          {{ $t('misc.Hardcopy') }}
                        </span>
                        <span class="d-block text-center fw-bold">
                          <span v-if="book.hardCopy.price.offer">
                            {{ book.hardCopy.price.offer }} -
                          </span>

                          <span
                            :class="
                              book.hardCopy.price.offer
                                ? 'text-decoration-line-through text-gray-700'
                                : ''
                            "
                          >
                            {{ book.hardCopy.price.original }}
                          </span>
                          {{ currency.sympl }}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="col mb-3 mb-md-0">
                    <div class="">
                      <input
                        id="typeOfListingRadio2"
                        type="radio"
                        value="pdfCopy"
                        name="typeOfListingRadio1"
                        v-model="item.book_type"
                        class="custom-control-input checkbox-outline__input"
                      />
                      <label
                        class="border-bottom d-block checkbox-outline__label py-3 px-1 mb-0"
                        for="typeOfListingRadio2"
                      >
                        <span
                          class="d-block text-uppercase text-center d-block text-center"
                        >
                          {{ $t('misc.pdf') }}
                        </span>
                        <span class="d-block text-center fw-bold">
                          <span v-if="book.pdfCopy.price.offer">
                            {{ book.pdfCopy.price.offer }} -
                          </span>

                          <span
                            :class="
                              book.pdfCopy.price.offer
                                ? 'text-decoration-line-through'
                                : ''
                            "
                          >
                            {{ book.pdfCopy.price.original }}
                          </span>
                          {{ currency.sympl }}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  class="woocommerce-product-details__short-description font-size-2 mb-5"
                >
                  <p class="">
                    {{ book.des }}
                  </p>
                </div>

                <form
                  @click.prevent
                  class="cart d-md-flex justify-content-center justify-content-md-start align-items-center"
                >
                  <div
                    class="quantity mb-4 mb-md-0 d-flex justify-content-center align-items-center"
                  >
                    <div class="border px-3 width-120">
                      <div class="js-quantity">
                        <div class="d-flex align-items-center">
                          <label class="screen-reader-text sr-only">
                            {{ $t('misc.Quantity') }}
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
                            v-model="item.quntity"
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
                  </div>
                  <div class="text-center">
                    <button
                      @click="addToCart"
                      name="add-to-cart"
                      :class="$i18n.locale == 'ar' ? 'mr-md-4' : 'ml-md-4'"
                      class="btn btn-dark border-0 rounded-0 p-3 min-width-250 single_add_to_cart_button button alt"
                    >
                      {{ $t('misc.Add to cart') }}
                    </button>
                  </div>
                </form>
              </div>
              <div class="px-4 px-xl-7 py-5 d-flex align-items-center">
                <ul class="list-unstyled nav">
                  <li class="mr-6 mb-4 mb-md-0">
                    <a
                      role="button"
                      @click="addToWashList(book)"
                      class="h-primary"
                    >
                      <i class="flaticon-heart mr-2"></i>
                      {{ $t('misc.Add to Wishlist') }}
                    </a>
                  </li>
                  <li class="mr-6">
                    <a href="#" class="h-primary">
                      <i class="flaticon-share mr-2"></i>
                      {{ $t('misc.share') }}
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
              <li
                class="flex-shrink-0 tab flex-md-shrink-1 nav-item"
                v-if="book.full_des"
              >
                <a
                  class="py-4 font-weight-medium"
                  :class="tabs.description ? 'active' : ''"
                  @click="activeTab('description')"
                >
                  {{ $t('misc.Description') }}
                </a>
              </li>

              <li
                class="flex-shrink-0 flex-md-shrink-1 nav-item"
                v-if="book.index"
              >
                <a
                  class="nav-link py-4 font-weight-medium"
                  :class="tabs.index ? 'active' : ''"
                  @click="activeTab('index')"
                >
                  {{ $t('misc.index') }}
                </a>
              </li>
              <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                <a
                  class="nav-link py-4 font-weight-medium"
                  :class="tabs.aboutAuthor ? 'active' : ''"
                  @click="actions('aboutAuthor', book.writer.id)"
                >
                  {{ $t('misc.About author') }}
                </a>
              </li>
              <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                <a
                  class="nav-link py-4 font-weight-medium"
                  :class="tabs.aboutPublisher ? 'active' : ''"
                  @click="actions('aboutPublisher', book.publisher.id)"
                >
                  {{ $t('misc.About publisher') }}
                </a>
              </li>
              <li class="flex-shrink-0 flex-md-shrink-1 nav-item">
                <a
                  class="nav-link py-4 font-weight-medium"
                  :class="tabs.review ? 'active' : ''"
                  @click="activeTab('review')"
                >
                  {{ $t('misc.Reviews') }} {{ book.reviewsCount }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Tab Content -->
          <transition name="fade">
            <div
              v-if="tabs.description"
              class="tab-content font-size-2 overflow-hidden"
            >
              <div class="container">
                <div v-html="book.full_des"></div>
              </div>
            </div>
          </transition>

          <!-- index -->
          <transition name="fade">
            <div v-if="tabs.index" class="tab-content font-size-2 container">
              <div v-html="book.index"></div>
            </div>
          </transition>

          <!-- author -->
          <transition name="fade">
            <div
              v-if="tabs.aboutAuthor"
              class="tab-content font-size-2 container"
            >
              <div class="row mt-5" v-if="writer">
                <div class="col-xl-8 offset-xl-2">
                  <div class="row">
                    <div class="col-md-4">
                      <img :src="writer.photo" alt="ilaw" class="img-fluid" />
                    </div>
                    <div class="col-md-8">
                      <div class="description">
                        <div class="mb-4 pb-xl-1 ml-xl-4">
                          <h6 class="font-weight-medium font-size-4 mb-4">
                            {{ writer.name }}
                          </h6>
                          <div class="font-size-2">
                            <div v-html="bio"></div>
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
              <div class="row mt-5" v-if="publisher">
                <div class="col-xl-8 offset-xl-2">
                  <div class="row">
                    <div class="col-md-4">
                      <img
                        :src="publisher.photo"
                        alt="ilaw"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="description">
                        <div class="mb-4 pb-xl-1 ml-xl-4">
                          <h6 class="font-weight-medium font-size-4 mb-4">
                            {{ publisher.name }}
                          </h6>
                          <div class="font-size-2">
                            {{ publisher.about }}
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
                    <h4 class="font-size-3">
                      {{ $t('misc.Customer Reviews') }}
                    </h4>
                    <div class="row mb-8">
                      <div class="col-md-6 mb-6 mb-md-0">
                        <div class="d-flex align-items-center mb-4">
                          <span class="font-size-15 font-weight-bold">
                            {{ book.reviewsTotal.toFixed(2) }}
                          </span>
                          <div class="ml-3 h6 mb-0">
                            <span class="font-weight-normal">
                              {{ book.reviewsCount }} {{ $t('misc.reviews') }}
                            </span>
                            <div class="text-yellow-darker">
                              <small
                                :class="book.reviewsTotal > 0 ? 'fas' : 'far'"
                                class="fa-star"
                              ></small>
                              <small
                                :class="book.reviewsTotal >= 1 ? 'fas' : 'far'"
                                class="fa-star"
                              ></small>
                              <small
                                :class="book.reviewsTotal >= 2 ? 'fas' : 'far'"
                                class="fa-star"
                              ></small>
                              <small
                                :class="book.reviewsTotal >= 3 ? 'fas' : 'far'"
                                class="fa-star"
                              ></small>
                              <small
                                :class="book.reviewsTotal > 4 ? 'fas' : 'far'"
                                class="fa-star"
                              ></small>
                            </div>
                          </div>
                        </div>

                        <div class="d-md-flex">
                          <button
                            type="button"
                            @click="allReview = !allReview"
                            class="btn rounded-0 px-5 mb-3 mb-md-0"
                            :class="allReview ? 'btn-dark' : 'btn-outline-dark'"
                          >
                            {{ $t('buttons.See all reviews') }}
                          </button>
                          <button
                            type="button"
                            @click="writeReview = !writeReview"
                            class="btn rounded-0 px-5"
                            :class="[
                              $i18n.locale == 'ar' ? ' mr-md-3' : 'ml-md-3 ',
                              writeReview ? 'btn-dark' : 'btn-outline-dark',
                            ]"
                          >
                            {{ $t('buttons.Write a review') }}
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
                                <span class="text-dark">
                                  5 {{ $t('misc.stars') }}
                                </span>
                              </div>
                              <div class="col px-0">
                                <div
                                  class="progress bg-white-100"
                                  style="height: 7px;"
                                >
                                  <div
                                    class="progress-bar bg-yellow-darker"
                                    role="progressbar"
                                    :style="`width: ${
                                      (book.reviewsAnalytics.count_5 /
                                        book.reviewsCount) *
                                      100
                                    }px;`"
                                  ></div>
                                </div>
                              </div>
                              <div class="col-2">
                                <span class="text-secondary">
                                  {{ book.reviewsAnalytics.count_5 }}
                                </span>
                              </div>
                            </a>
                          </li>
                          <li class="py-2">
                            <a
                              class="row align-items-center mx-gutters-2 font-size-2"
                              href="javascript:;"
                            >
                              <div class="col-auto">
                                <span class="text-dark">
                                  4 {{ $t('misc.stars') }}
                                </span>
                              </div>
                              <div class="col px-0">
                                <div
                                  class="progress bg-white-100"
                                  style="height: 7px;"
                                >
                                  <div
                                    class="progress-bar bg-yellow-darker"
                                    role="progressbar"
                                    :style="`width: ${
                                      (book.reviewsAnalytics.count_4 /
                                        book.reviewsCount) *
                                      100
                                    }px;`"
                                  ></div>
                                </div>
                              </div>
                              <div class="col-2">
                                <span class="text-secondary">
                                  {{ book.reviewsAnalytics.count_4 }}
                                </span>
                              </div>
                            </a>
                          </li>
                          <li class="py-2">
                            <a
                              class="row align-items-center mx-gutters-2 font-size-2"
                              href="javascript:;"
                            >
                              <div class="col-auto">
                                <span class="text-dark">
                                  3 {{ $t('misc.stars') }}
                                </span>
                              </div>
                              <div class="col px-0">
                                <div
                                  class="progress bg-white-100"
                                  style="height: 7px;"
                                >
                                  <div
                                    class="progress-bar bg-yellow-darker"
                                    role="progressbar"
                                    :style="`width: ${
                                      (book.reviewsAnalytics.count_3 /
                                        book.reviewsCount) *
                                      100
                                    }px;`"
                                  ></div>
                                </div>
                              </div>
                              <div class="col-2">
                                <span class="text-secondary">
                                  {{ book.reviewsAnalytics.count_3 }}
                                </span>
                              </div>
                            </a>
                          </li>
                          <li class="py-2">
                            <a
                              class="row align-items-center mx-gutters-2 font-size-2"
                              href="javascript:;"
                            >
                              <div class="col-auto">
                                <span class="text-dark">
                                  2 {{ $t('misc.stars') }}
                                </span>
                              </div>
                              <div class="col px-0">
                                <div
                                  class="progress bg-white-100"
                                  style="height: 7px;"
                                >
                                  <div
                                    class="progress-bar bg-yellow-darker"
                                    role="progressbar"
                                    :style="`width: ${
                                      (book.reviewsAnalytics.count_2 /
                                        book.reviewsCount) *
                                      100
                                    }px;`"
                                  ></div>
                                </div>
                              </div>
                              <div class="col-2">
                                <span class="text-secondary">
                                  {{ book.reviewsAnalytics.count_2 }}
                                </span>
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
                                    :style="`width: ${
                                      (book.reviewsAnalytics.count_1 /
                                        book.reviewsCount) *
                                      100
                                    }px;`"
                                  ></div>
                                </div>
                              </div>
                              <div class="col-2">
                                <span class="text-secondary">
                                  {{ book.reviewsAnalytics.count_1 }}
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <!-- End Ratings -->
                      </div>
                    </div>
                    <div class="write-review mb-5" v-if="writeReview">
                      <h4 class="font-size-3 mb-4">
                        {{ $t('buttons.Write a review') }}
                      </h4>
                      <div class="d-flex align-items-center mb-6">
                        <h6 class="mb-0">
                          {{ $t('misc.Select a rating(required)') }}
                        </h6>
                        <div
                          class="text-yellow-darker rate d-flex font-size-4"
                          :class="$i18n.locale == 'ar' ? 'mr-3' : 'ml-3'"
                        >
                          <div class="form-group">
                            <label for="review1">
                              <small
                                class="fa-star"
                                :class="review.review >= 1 ? 'fas' : 'far'"
                              ></small>
                            </label>
                            <input
                              type="radio"
                              v-model="review.review"
                              value="1"
                              id="review1"
                            />
                          </div>
                          <div class="form-group">
                            <label for="review2">
                              <small
                                class="fa-star"
                                :class="review.review >= 2 ? 'fas' : 'far'"
                              ></small>
                            </label>
                            <input
                              type="radio"
                              value="2"
                              v-model="review.review"
                              id="review2"
                            />
                          </div>
                          <div class="form-group">
                            <label for="review3">
                              <small
                                class="fa-star"
                                :class="review.review >= 3 ? 'fas' : 'far'"
                              ></small>
                            </label>
                            <input
                              type="radio"
                              value="3"
                              v-model="review.review"
                              id="review3"
                            />
                          </div>
                          <div class="form-group">
                            <label for="review4">
                              <small
                                class="fa-star"
                                :class="review.review >= 4 ? 'fas' : 'far'"
                              ></small>
                            </label>
                            <input
                              type="radio"
                              value="4"
                              v-model="review.review"
                              id="review4"
                            />
                          </div>
                          <div class="form-group">
                            <label for="review5">
                              <small
                                class="fa-star"
                                :class="review.review >= 5 ? 'fas' : 'far'"
                              ></small>
                            </label>
                            <input
                              type="radio"
                              value="5"
                              v-model="review.review"
                              id="review5"
                            />
                          </div>
                        </div>
                        <div
                          class="input-errors mx-2"
                          v-for="error of v$.review.review.$errors"
                          :key="error.$uid"
                        >
                          <div class="error-msg">
                            {{ $t(`misc.${error.$message}`) }}
                          </div>
                        </div>
                      </div>
                      <div class="js-form-message form-group mb-4">
                        <label
                          for="descriptionTextarea"
                          class="form-label text-dark h6 mb-3"
                        >
                          {{
                            $t(
                              'misc.Details please! Your review helps other shoppers',
                            )
                          }}
                        </label>
                        <textarea
                          id="descriptionTextarea"
                          class="form-control rounded-0 p-4"
                          rows="7"
                          v-model="review.comment"
                          :placeholder="
                            $t(
                              'misc.What did you like or dislike? What should other shoppers know before buying?',
                            )
                          "
                          required
                        ></textarea>
                        <div
                          class="input-errors"
                          v-for="error of v$.review.comment.$errors"
                          :key="error.$uid"
                        >
                          <div class="error-msg">
                            {{ $t(`misc.${error.$message}`) }}
                          </div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <button
                          type="button"
                          @click="submitReview"
                          class="btn btn-dark btn-wide rounded-0 transition-3d-hover"
                        >
                          <Loading v-if="loading" />
                          <span v-else>
                            {{ $t('misc.Send review') }}
                          </span>
                        </button>
                      </div>
                    </div>
                    <div v-if="allReview">
                      <div v-if="book.reviews.length">
                        <h4 class="font-size-3 mb-8">
                          {{ book.reviewsCount }} {{ $t('misc.reviews') }}
                        </h4>

                        <ul class="list-unstyled mb-8">
                          <li
                            class="mb-4 pb-5 border-bottom"
                            v-for="review in book.reviews"
                            :key="review.id"
                          >
                            <div class="d-flex align-items-center mb-3">
                              <h6 class="mb-0">
                                {{ review.user.name }}
                              </h6>
                              <div
                                class="text-yellow-darker"
                                :class="$i18n.locale == 'ar' ? 'mr-3' : 'ml-3'"
                              >
                                <small
                                  class="fa-star"
                                  :class="review.rate > 0 ? 'fas' : 'far'"
                                ></small>
                                <small
                                  class="fa-star"
                                  :class="review.rate >= 2 ? 'fas' : 'far'"
                                ></small>
                                <small
                                  class="fa-star"
                                  :class="review.rate >= 3 ? 'fas' : 'far'"
                                ></small>
                                <small
                                  class="fa-star"
                                  :class="review.rate >= 4 ? 'fas' : 'far'"
                                ></small>
                                <small
                                  class="fa-star"
                                  :class="review.rate > 4 ? 'fas' : 'far'"
                                ></small>
                              </div>
                            </div>
                            <p class="mb-4 text-lh-md">
                              {{ review.comment }}
                            </p>
                            <div class="text-gray-600 mb-4">
                              <!-- Staci, February 22, 2020 -->
                              {{ new Date(review.created_at).toDateString() }}
                            </div>
                            <!-- <ul class="nav">
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
                            </ul> -->
                          </li>
                        </ul>
                      </div>
                    </div>

                    <!-- End Mockup Block -->
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <!-- End Nav Classic -->
        <section class="space-bottom-3" v-if="book.related.length">
          <div class="container">
            <header
              class="d-md-flex mb-3 primary-color justify-content-between align-items-center"
            >
              <h2 class="fs-4">
                {{ $t('misc.Customers Also Considered') }}
              </h2>
            </header>

            <div class="product">
              <carousel v-bind="settingsBook">
                <slide v-for="item in book.related" :key="item.id">
                  <div class="js-slick-carousel w-100 products no-gutters">
                    <div class="overflow-hidden p-3 p-md-4d875">
                      <book-card :items="item" />
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
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import 'vue3-carousel/dist/carousel.css'
import BookCard from '@/components/BookCard.vue'
import axios from 'axios'
import Loading from './Loading.vue'
import ProductSwiper from './ProductSwiper.vue'
import ProductThumnail from './ProductThumnail.vue'
export default {
  components: { BookCard, Loading, ProductSwiper, ProductThumnail },
  data() {
    return {
      v$: useVuelidate(),
      book: null,
      item: {
        quntity: 1,
        book_type: 'pdfCopy',
        price: 0,
        totalPrice: 0,
        book_id: '',
        book: null,
      },
      slide: 0,
      review: {
        comment: '',
        review: '',
      },
      loading: false,
      writer: null,
      publisher: null,
      tabs: {
        description: true,
        review: false,
        index: false,
        aboutAuthor: false,
        aboutPublisher: false,
      },

      writeReview: false,
      allReview: false,
      settings: {
        autoplay: 5000,
        itemsToShow: 1,
        wrapAround: true,
        dir: 'rtl',
        snapAlign: 'center',
      },
      settingsBook: {
        autoplay: 5000,
        itemsToShow: 1,
        wrapAround: true,
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
  validations() {
    return {
      review: {
        comment: { required },
        review: { required },
      },
    }
  },
  mounted() {
    this.getBook()
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
    actions(tab, id) {
      this.activeTab(tab)
      if (tab == 'aboutPublisher') {
        this.getPublisher(id)
      } else {
        this.getWriter(id)
      }
    },
    getWriter(id) {
      axios.get(`writers/${id}/details`).then((data) => {
        this.writer = data.data.data
      })
    },
    getPublisher(id) {
      axios.get(`publishers/${id}/details`).then((data) => {
        this.publisher = data.data.data
      })
    },
    getBook() {
      axios.get(`books/${this.$route.params.id}/details`).then((data) => {
        this.book = data.data.data
        this.item.book = data.data.data
        this.item.book_id = data.data.data.id
      })
    },
    qtyPlus() {
      this.item.quntity++
    },
    qtyMinus() {
      if (this.item.quntity > 1) this.item.quntity--
    },
    addToCart() {
      if (this.item.book_type == 'pdfCopy') {
        if (this.item.book.pdfCopy.price.offer) {
          this.item.price = this.item.book.pdfCopy.price.offer
        } else {
          this.item.price = this.item.book.pdfCopy.price.original
        }
      } else {
        if (this.item.book.hardCopy.price.offer) {
          this.item.price = this.item.book.hardCopy.price.offer
        } else {
          this.item.price = this.item.book.hardCopy.price.original
        }
      }

      // this.item.total = this.item.price * this.item.quntity

      this.$store.commit('addToCart', this.item)
    },
    addToWashList() {
      this.$store.dispatch('addToWashlist', this.book)
    },
    async submitReview() {
      const result = await this.v$.$validate()

      if (result) {
        this.loading = true
        this.axios
          .post(`books/${this.$route.params.id}/SubmitReview`, {
            rate: this.review.review,
            comment: this.review.comment,
          })
          .then((data) => {
            if (data.data.status == 'success') {
              this.$store.commit('message', data.data.message)
              this.$store.commit('popupMode', 'success')
              this.$store.commit('popup')
              this.review.review = ''
              this.review.comment = ''
              this.writeReview = false
              return
            }
          })
          .finally(() => (this.loading = false))
      }
    },
    slideHandler(n) {
      this.slide = Number(n) - 1
    },
  },
  computed: {
    cartQuantity() {
      return this.$store.getters.totalQuantity
    },
    currency() {
      return this.$store.getters.currency
    },
  },
}
</script>
<style scoped lang="scss">
.product {
  padding-top: 50px;
}
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
.rate {
  .form-group {
    margin-bottom: 0 !important;
    label {
      margin-bottom: 0 !important;
    }
  }
  input[type='radio'] {
    display: none;
  }
}
a {
  cursor: pointer;
}

.main-image {
  // height: 100%;
  width: 100%;
  margin-bottom: 10px;
  .swiper {
    max-height: 512px;
    // height: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(226, 226, 226, 1);
    border-radius: 3px;
  }
}
.additional-images {
  width: 100%;
  .swiper {
    max-height: 512px;
  }
  .swiper-slide {
    img {
      width: 100%;
      // height: 70px !important;
      border-width: 1px;
      border-style: solid;
      border-color: rgba(226, 226, 226, 1);
      border-radius: 3px;
      cursor: pointer;
    }
  }
}

@media (max-width: 575.98px) {
  .products
    .product:not(.product__card):not(.product__list):not(.product__space) {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.is-rtl {
  p,
  h1,
  div,
  h2,
  h6 {
    text-align: right;
  }
}
</style>
