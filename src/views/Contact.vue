<template>
  <div class="map w-100">
    <div v-if="map" v-html="mapAddessLink" class="iframe"></div>
  </div>
  <div class="container contacts-us row mx-auto">
    <div class="card mx-auto mb-2 tra" :class="map ? 'map' : ''">
      <div class="ml-xl-4 space-bottom-1 space-bottom-lg-2">
        <div class="mb-4 mb-lg-7">
          <h6 class="font-weight medium font-size-10 mb-4 mb-lg-7">
            {{ $t('misc.Contact Information') }}
          </h6>
          <p class="font-weight-medium font-italic">
            {{ $t('misc.Contact description') }}
          </p>
        </div>
        <div class="mb-4 mb-lg-8">
          <div class="row">
            <div class="col-md-6">
              <address class="font-size-2 mb-5" v-if="address">
                <p class="d-flex align-items-center">
                  <font-awesome-icon
                    size="lg"
                    :icon="['fas', 'location-dot']"
                  />
                  <span
                    class="mb-2 font-weight-normal text-dark"
                    :class="$i18n.locale == 'ar' ? 'mr-2' : 'ml-2'"
                  >
                    {{ address }}
                  </span>
                </p>
              </address>
              <div>
                <a
                  :href="`mailto:${contactEmail}`"
                  class="font-size-2 mb-2 d-block link-black-100 mb-1"
                >
                  <font-awesome-icon size="lg" :icon="['fas', 'envelope']" />
                  <span :class="$i18n.locale == 'ar' ? 'mr-2' : 'ml-2'">
                    {{ contactEmail }}
                  </span>
                </a>

                <a
                  :href="`tel:${phone}`"
                  class="font-size-2 d-block link-black-100"
                >
                  <font-awesome-icon size="lg" :icon="['fas', 'phone']" />
                  <span :class="$i18n.locale == 'ar' ? 'mr-2' : 'ml-2'">
                    {{ phone }}
                  </span>
                </a>
                <a
                  :href="`tel:${mobile}`"
                  class="font-size-2 d-block link-black-100"
                >
                  <font-awesome-icon size="lg" :icon="['fas', 'phone']" />
                  <span :class="$i18n.locale == 'ar' ? 'mr-2' : 'ml-2'">
                    {{ mobile }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5 mb-xl-9 pb-xl-1">
          <h6 class="font-size-4 font-weight-medium">
            {{ $t('misc.Social Media') }}
          </h6>
          <ul class="list-unstyled mb-0 p-0 d-flex">
            <li
              class="btn"
              v-if="instgram"
              :class="$i18n.locale == 'ar' ? 'pr-0' : 'pl-0'"
            >
              <a class="link-black-100" target="_blank" :href="instgram">
                <span class="fab fa-instagram"></span>
              </a>
            </li>
            <li class="btn" v-if="facebook">
              <a class="link-black-100" target="_blank" :href="facebook">
                <span class="fab fa-facebook-f"></span>
              </a>
            </li>
            <li class="btn" v-if="youtube">
              <a class="link-black-100" target="_blank" :href="youtube">
                <span class="fab fa-youtube"></span>
              </a>
            </li>
            <li class="btn" v-if="twitter">
              <a class="link-black-100" target="_blank" :href="twitter">
                <span class="fab fa-twitter"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="page-title">{{ $t('misc.Tell Us Your Message') }}</h2>
        <b-form
          class="row form"
          ref="contactFrm"
          @submit="onSubmit"
          @reset="onReset"
        >
          <div class="col-md-6">
            <b-form-group :label="$t('inputs.name')" label-for="name">
              <b-form-input
                id="name"
                v-model="contact.name"
                :placeholder="$t('inputs.name')"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group
              id="email"
              :label="$t('inputs.Email Address')"
              label-for="input-1"
            >
              <b-form-input
                id="email"
                v-model="contact.email"
                type="email"
                :placeholder="$t('inputs.Email Address')"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group
              id="companyname"
              :label="$t('inputs.company name')"
              label-for="input-1"
            >
              <b-form-input
                id="companyname"
                v-model="contact.company"
                type="text"
                :placeholder="$t('inputs.company name')"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-4">
              <div class="js-form-message js-focus-state">
                <label
                  id="signinEmailLabel"
                  class="form-label d-block"
                  for="country"
                >
                  {{ $t('misc.Country') }}
                </label>
                <select
                  name="country"
                  id="country"
                  v-model="contact.country"
                  required
                  class="form-select form-control rounded-0 height-4 px-4"
                >
                  <option value="" disabled>
                    {{ $t('misc.Select country') }}
                  </option>
                  <option
                    v-for="country in countries"
                    :key="country.id"
                    :value="country.id"
                  >
                    {{ country.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <b-form-group
              id="subject"
              :label="$t('inputs.phone')"
              label-for="phone"
            >
              <b-form-input
                id="phone"
                v-model="contact.phone"
                type="phone"
                :placeholder="$t('placeholder.Please enter your phone')"
                required
              ></b-form-input>
            </b-form-group>
          </div>

          <div>
            <b-form-group
              id="subject"
              :label="$t('inputs.title')"
              label-for="title"
            >
              <b-form-input
                id="title"
                v-model="contact.title"
                type="text"
                :placeholder="$t('inputs.title')"
              ></b-form-input>
            </b-form-group>
          </div>
          <div>
            <b-form-group
              id="subject"
              :label="$t('inputs.Subject')"
              label-for="subject"
            >
              <b-form-input
                id="subject"
                v-model="contact.subject"
                type="text"
                :placeholder="$t('inputs.Subject')"
              ></b-form-input>
            </b-form-group>
          </div>
          <div>
            <b-form-group
              id="input-group-4"
              :label="$t('inputs.your message')"
              label-for="textarea"
            >
              <b-form-textarea
                id="textarea"
                v-model="contact.content"
                :placeholder="$t('inputs.Enter something')"
                rows="3"
                max-rows="6"
                required
              ></b-form-textarea>
            </b-form-group>
          </div>

          <div class="d-flex justify-content-center">
            <b-button class="send mr-2" type="submit">
              <span v-if="!loading">
                {{ $t('buttons.Send') }}
              </span>
              <Loading v-if="loading" />
            </b-button>

            <b-button class="bg-danger mr-2" type="reset">
              {{ $t('buttons.Reset') }}
            </b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import Loading from '../components/Loading.vue'
export default {
  components: { Loading },
  data() {
    return {
      contact: {
        email: '',
        name: '',
        country: '',
        phone: '',
        title: '',
        company: '',
        content: '',
        subject: '',
      },
      // address: '',
      // contactEmail: '',
      // phone: '',
      // mobile: '',
      // instgram: '',
      // facebook: '',
      // youtube: '',
      // twitter: '',
      // mapAddessLink: '',
      loading: false,
      countries: null,
    }
  },
  mounted() {
    this.getCountries()
  },
  methods: {
    onSubmit() {
      this.loading = true
      const frmData = new FormData()
      frmData.append('email', this.contact.email)
      frmData.append('name', this.contact.name)
      frmData.append('content', this.contact.content)
      frmData.append('subject', this.contact.subject)
      frmData.append('company', this.contact.company)
      frmData.append('title', this.contact.title)
      frmData.append('phone', this.contact.phone)
      frmData.append('country', this.contact.country)
      this.axios
        .post('sendContactMessage', frmData, {
          Headers: {
            'Accept-Language': Cookie.get('locale'),
          },
        })
        .then((data) => {
          this.$toast.success(data.data.message)
          this.loading = false
          this.contact.email = ''
          this.contact.name = ''
          this.contact.content = ''
          this.contact.subject = ''
          this.contact.company = ''
          this.contact.title = ''
          this.contact.phone = ''
          this.contact.country = ''
        })
    },

    getCountries() {
      this.axios.get('countries', { headers: { value: 'id' } }).then((res) => {
        this.countries = res.data.data
      })
    },
  },
  computed: {
    contactEmail() {
      return this.$store.getters.settings.contact_data.email
    },
    address() {
      return this.$store.getters.settings.contact_data.address
    },
    phone() {
      return this.$store.getters.settings.contact_data.phone
    },
    mobile() {
      return this.$store.getters.settings.contact_data.mobile
    },
    instgram() {
      return this.$store.getters.settings.contact_data.instgram
    },
    facebook() {
      return this.$store.getters.settings.contact_data.facebook
    },
    youtube() {
      return this.$store.getters.settings.contact_data.youtube
    },
    twitter() {
      return this.$store.getters.settings.contact_data.twitter
    },
    mapAddessLink() {
      return this.$store.getters.settings.contact_data.map
    },
  },
}
</script>

<style lang="scss">
.map {
  max-height: 400px;
  overflow: hidden;
  img {
    height: auto;
  }
}
.contacts-us {
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
  }
  .card.map {
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
}
.iframe {
  height: 300px;
  border: 0;
  iframe {
    width: 100%;
  }
}
.is-rtl {
  .contacts-us {
    h2,
    h6,
    p,
    label,
    a {
      text-align: start !important;
    }
  }
  [type='tel'],
  [type='url'],
  [type='email'],
  [type='number'] {
    direction: rtl !important;
  }
}
</style>
