<template>
  <div class="map w-100">
    <img class="img-fluid w-100" src="@/assets/GoogleMapTA.webp" alt="" />
  </div>
  <div class="container row mx-auto">
    <div class="card mx-auto mb-2 tra">
      <!-- <div class="mb-5 border-bottom">
        <h2 class="page-title">Contact us</h2>
        <p class="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          facilis
        </p>
        <div class="info">
          <div class="mb-2">
            <h3 class="m-0">Office Address</h3>
          </div>
          <p class="d-flex align-items-center">
            <font-awesome-icon
              class="mx-2"
              size="lg"
              :icon="['fas', 'location-dot']"
            />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            officiis
          </p>
        </div>
        <div class="info">
          <div class="mb-2">
            <h3 class="m-0">Phone Number</h3>
          </div>
          <p class="d-flex align-items-center">
            <font-awesome-icon
              class="mx-2"
              size="lg"
              :icon="['fas', 'phone']"
            />
            101010101010
          </p>
          <p class="d-flex align-items-center">
            <font-awesome-icon
              class="mx-2"
              size="lg"
              :icon="['fas', 'phone']"
            />
            101010101010
          </p>
        </div>
        <div class="info">
          <div class="mb-2">
            <h3 class="m0">Email</h3>
          </div>
          <p class="d-flex align-items-center">
            <font-awesome-icon
              class="mx-2"
              size="lg"
              :icon="['fas', 'envelope']"
            />
            info@technomasr.com
          </p>
        </div>
      </div> -->
      <div class="ml-xl-4 space-bottom-1 space-bottom-lg-2">
        <div class="mb-4 mb-lg-7">
          <h6 class="font-weight medium font-size-10 mb-4 mb-lg-7">
            Contact Information
          </h6>
          <p class="font-weight-medium font-italic">
            We will answer any questions you may have about our online sales,
            rights or partnership service right here.
          </p>
        </div>
        <div class="mb-4 mb-lg-8">
          <div class="row">
            <div class="col-md-6">
              <h6 class="font-weight-medium font-size-4 mb-4">
                New York Office
              </h6>
              <address class="font-size-2 mb-5 d-flex align-items-center">
                <font-awesome-icon size="lg" :icon="['fas', 'location-dot']" />
                <p class="mb-0 ml-2">
                  <span class="mb-2 font-weight-normal text-dark">
                    1418 River Drive, Suite 35 Cottonhall, CA 9622
                    <br />
                    United States
                  </span>
                </p>
              </address>
              <div>
                <a
                  href="mailto:sale@bookworm.com"
                  class="font-size-2 ml-2 d-block link-black-100 mb-1"
                >
                  <font-awesome-icon size="lg" :icon="['fas', 'envelope']" />
                  <span class="ml-2">
                    sale@bookworm.com
                  </span>
                </a>

                <a
                  href="tel:+1246-345-0695"
                  class="font-size-2 ml-2 d-block link-black-100"
                >
                  <font-awesome-icon size="lg" :icon="['fas', 'phone']" />
                  <span class="ml-2">
                    +1 246-345-0695
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5 mb-xl-9 pb-xl-1">
          <h6 class="font-size-4 font-weight-medium">Social Media</h6>
          <ul class="list-unstyled mb-0 d-flex">
            <li class="btn pl-0">
              <a class="link-black-100" href="#">
                <span class="fab fa-instagram"></span>
              </a>
            </li>
            <li class="btn">
              <a class="link-black-100" href="#">
                <span class="fab fa-facebook-f"></span>
              </a>
            </li>
            <li class="btn">
              <a class="link-black-100" href="#">
                <span class="fab fa-youtube"></span>
              </a>
            </li>
            <li class="btn">
              <a class="link-black-100" href="#">
                <span class="fab fa-twitter"></span>
              </a>
            </li>
            <li class="btn">
              <a class="link-black-100" href="#">
                <span class="fab fa-pinterest"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="page-title">Tell Us Your Message</h2>
        <b-form class="row form" @submit="onSubmit" @reset="onReset">
          <div class="col-md-6">
            <b-form-group label="Your Name:" label-for="name">
              <b-form-input
                id="name"
                v-model="name"
                placeholder="Name"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group id="email" label="Email address:" label-for="input-1">
              <b-form-input
                id="email"
                v-model="email"
                type="email"
                placeholder="Email"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div>
            <b-form-group id="subject" label="Subject:" label-for="subject">
              <b-form-input
                id="subject"
                v-model="subject"
                type="text"
                placeholder="Subject"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div>
            <b-form-group
              id="input-group-4"
              label="your message:"
              label-for="textarea"
            >
              <b-form-textarea
                id="textarea"
                v-model="message"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </div>

          <div class="d-flex justify-content-center">
            <b-button class="send mr-2" type="submit">
              Send
            </b-button>

            <b-button class="bg-danger" type="reset">
              Reset
            </b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      name: '',
      message: '',
      subject: '',
    }
  },
}
</script>

<style scoped lang="scss">
.map {
  max-height: 400px;
  overflow: hidden;
  img {
    height: auto;
  }
}
.page-title {
  font-size: 32px;
  line-height: 32px;
  color: #363f4d;
  font-weight: 500;
  margin-bottom: 20px;
}

button.send {
  background: #22559d;
}
.card {
  padding: 50px !important;
  max-width: 800px;
  transform: translateY(-100px);
}
.info {
  margin-bottom: 50px;
  h3 {
    color: #000;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    color: #555;
    font-weight: 400;
    padding: 10px;
    margin: 0;
    &:last-child {
      border-bottom: 1px solid #eee;
      width: fit-content;
    }
  }
  svg {
    color: #0d6efd;
  }
}
</style>
