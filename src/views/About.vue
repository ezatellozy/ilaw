<template>
  <div class="page-title text-center py-2">
    <h2 class="main-title">About us</h2>
  </div>
  <div class="w-100">
    <img class="img-fluid" src="@/assets/img1.jpg" alt="" />
  </div>
  <div class="container row mx-auto">
    <div class="mb-lg-8">
      <div class="col-lg-9 mx-auto">
        <div
          class="bg-white mt-n10 mt-md-n13 pt-5 pt-lg-7 px-3 px-md-5 pl-xl-10 pr-xl-4"
        >
          <div class="mb-4 mb-lg-7 ml-xl-4">
            <h6 class="font-weight medium font-size-10 mb-4 mb-lg-7">
              Welcome to Bookworm
            </h6>
            <p class="font-weight-medium font-italic">
              “ Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model search for eolved over
              sometimes by accident, sometimes on purpose ”
            </p>
          </div>
          <div class="mb-4 pb-xl-1 ml-xl-4">
            <h6 class="font-weight-medium font-size-4 mb-4">
              What we really do?
            </h6>
            <p class="font-size-2">
              Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
              fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl
              vitae ullamcorper. Proin sed ultrices erat. Praesent varius
              ultrices massa at faucibus. Aenean dignissim, orci sed faucibus
              pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula
              sit amet augue. Pellentesque vitae eros eget enim mollis placerat.
              Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae
              ullamcorper. Proin sed ultrices erat. Praesent varius ultrices
              massa at faucibus. Aenean dignissim, orci sed faucibus pharetra,
              dui mi dignissim tortor, sit amet condimentum mi ligula sit amet
              augue. Pellentesque vitae eros eget enim mollis placerat.
            </p>
          </div>
          <div class="ml-xl-4">
            <div class="row">
              <div class="col-md-6">
                <h6 class="font-weight-medium font-size-4">Our Vision</h6>
                <p class="font-size-2">
                  Pellentesque sodales augue eget ultricies ultricies. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Curabitur sagittis ultrices
                  condimentum.
                </p>
              </div>
              <div class="col-md-6">
                <h6 class="font-weight-medium font-size-4">Our Vision</h6>
                <p class="font-size-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  quis diam erat. Duis velit lectus, posuere a blandit metus
                  mauris, tristique quis sapien eu, rutrum vulputate enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slider
      title="Our team"
      name="team"
      cardDesc="25 Published Books"
      cardtitle="Barbara O'Neil"
      imgSrc="./images.jpg"
      partner="true"
    />
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
export default {
  components: { Slider },
}
</script>

<style></style>
