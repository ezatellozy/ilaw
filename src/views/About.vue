<template>
  <div class="page-title text-center py-2">
    <h2 class="main-title">{{ $t('nav.aboutUs') }}</h2>
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
              {{ welcomeTitle }}
            </h6>
            <p class="font-weight-medium font-italic">
              “ {{ welcomeSubject }} ”
            </p>
          </div>
          <div class="mb-4 pb-xl-1 ml-xl-4">
            <h6 class="font-weight-medium font-size-4 mb-4">
              {{ contentQuestion }}
            </h6>
            <p class="font-size-2">
              {{ contentAnswer }}
            </p>
          </div>
          <div class="ml-xl-4">
            <div class="row">
              <div class="col-md-6">
                <h6 class="font-weight-medium font-size-4">
                  {{ $t('misc.Our Vision') }}
                </h6>
                <p class="font-size-2">
                  {{ ourVision }}
                </p>
              </div>
              <div class="col-md-6">
                <h6 class="font-weight-medium font-size-4">
                  {{ $t('misc.Our Mission') }}
                </h6>
                <p class="font-size-2">
                  {{ ourMission }}
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
  data() {
    return {
      settings: [],
      welcomeTitle: '',
      welcomeSubject: '',
      contentQuestion: '',
      contentAnswer: '',
      ourVision: '',
      ourMission: '',
    }
  },
  mounted() {
    this.getSettings()
  },
  methods: {
    getSettings() {
      this.axios.get('Settings/settings').then((data) => {
        let resault = data.data.setting
        for (let i = 0; i < resault.length; i += 1) {
          if (resault[i].key == 'welcome title') {
            this.welcomeTitle = resault[i].value
          } else if (resault[i].key == 'welcome subject') {
            this.welcomeSubject = resault[i].value
          } else if (resault[i].key == 'content question') {
            this.contentQuestion = resault[i].value
          } else if (resault[i].key == 'content answer') {
            this.contentAnswer = resault[i].value
          } else if (resault[i].key == 'our vision') {
            this.ourVision = resault[i].value
          } else if (resault[i].key == 'our mission') {
            this.ourMission = resault[i].value
          }
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
.is-rtl {
  p,
  h6 {
    text-align: start;
  }
}
</style>
