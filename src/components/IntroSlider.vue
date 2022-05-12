<template>
  <div
    class="media intro w-100 d-flex justify-content-center px-11 align-items-center"
    style="background-image: url('./img1.jpg');"
  >
    <div class="intro">
      <div class="hero__body media-body mb-4 mb-xl-0">
        <div class="info">
          <div class="hero__pretitle text-uppercase font-weight-bold mb-3">
            Book Club
          </div>
          <h2 class="hero__title font-size-10 mb-3">
            <span class="hero__title--1 font-weight-bold d-block">
              A selection with
            </span>
            <span class="hero__title--2 d-block font-weight-normal">
              only the best books
            </span>
          </h2>
          <p class="hero__subtitle font-size-2 mb-5">
            Sale Ends Midnight 30th April 2020
          </p>
        </div>
        <router-link
          to="/book"
          class="hero__btn fw-bold fs-5 rounded py-2 px-4 btn text-white btn-wide"
        >
          Explore Books
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.media.intro {
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #00000088;
  }
  min-height: 530px;
  max-height: 530px;

  background-size: cover;
  background-position: center center;
}
.hero__btn {
  background: #22559d !important;

  color: #fff;
  &:hover {
    background-color: #f1c111 !important;
  }
}
.intro {
  z-index: 10;
  .info {
    z-index: 10;
    color: #f5f5f5;
    text-shadow: 2px 2px 2px rgb(10, 10, 10);
  }
}
</style>
