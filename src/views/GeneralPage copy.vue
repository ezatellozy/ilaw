<template>
  <div class="w-100">
    <img class="img-fluid" src="@/assets/img1.jpg" alt="" />
  </div>
  <div class="container py-2">
    <div class="img-profile mx-auto rounded-circle text-center">
      <img class="img-fluid" src="@/assets/images.jpg" alt="" />
    </div>
    <div class="content mt-2 rounded row">
      <h2 class="title text-center fs-3 mx-auto mt-4 col-md-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <div class="descreption py-5 py-md-0 border">
        <div class="mb-4 mx-auto p-md-11 pb-xl-1 ml-xl-4">
          <h6 class="font-weight-medium font-size-4 mb-4">
            What we really do?
          </h6>
          <p class="font-size-2">
            Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
            fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl
            vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices
            massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui
            mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.
            Pellentesque vitae eros eget enim mollis placerat. Aliquam non
            tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin
            sed ultrices erat. Praesent varius ultrices massa at faucibus.
            Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim
            tortor, sit amet condimentum mi ligula sit amet augue. Pellentesque
            vitae eros eget enim mollis placerat.
          </p>
        </div>

        <div class="conatact mx-auto col-lg-9 mx-auto p-md-11 pb-xl-1 ml-xl-4">
          <div class="row p-2 justify-content-center">
            <div class="logo col-8 col-sm-5 col-md-4">
              <img src="@/assets/technologo.png" alt="ilaw" class="img-fluid" />
            </div>
            <div
              class="info mt-2 mt-sm-0 col-sm-6 d-flex align-items-center justify-content-center"
            >
              <div class="">
                <h6 class="font-weight-medium font-size-4 mb-4">
                  Jone Min
                </h6>
                <address class="font-size-2 mb-5">
                  <span class="mb-2 font-weight-normal text-dark">
                    1418 River Drive, Suite 35 Cottonhall, CA 9622
                    <br />
                    United States
                  </span>
                </address>
                <div>
                  <a
                    href="mailto:sale@bookworm.com"
                    class="font-size-2 d-block link-black-100 mb-1"
                  >
                    <font-awesome-icon
                      size="lg"
                      class="me-2"
                      :icon="['fas', 'envelope']"
                    />
                    Jone Min@Jonemin.com
                  </a>
                  <a
                    href="tel:+1246-345-0695"
                    class="font-size-2 d-block link-black-100"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'phone']"
                      size="lg"
                      class="me-2"
                    />
                    +1 246-345-0695
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  transform: translateY(-100px);
  .img-profile {
    // padding: 2px;
    width: 200px;
    height: 200px;
    // background: #fff;
    // outline: #212529 2px solid;
    overflow: hidden;
  }
}
</style>
