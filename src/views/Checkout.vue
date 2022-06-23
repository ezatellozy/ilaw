<template>
  <div id="content" class="site-content space-bottom-3">
    <div class="col-full container">
      <div class="log border text-center mt-4 py-4 fs-4" v-if="!isLoggedIn">
        <p>
          {{ $t('misc.you must') }}
          <a role="button" @click="login" href="#">{{ $t('buttons.Login') }}</a>
          {{ $t('misc.to continue') }}
        </p>
      </div>

      <div id="primary" class="content-area" v-else>
        <main id="main" class="site-main">
          <article
            id="post-6"
            class="post-6 page type-page status-publish hentry"
          >
            <header class="entry-header space-top-2 space-bottom-1 mb-2">
              <h4 class="entry-title font-size-7 text-center">
                {{ $t('misc.Checkout') }}
              </h4>
            </header>
            <!-- .entry-header -->
            <div class="entry-content">
              <div class="woocommerce d-block">
                <div>
                  <form
                    name="checkout"
                    @submit.prevent="addNewAddress"
                    class="checkout woocommerce-checkout row mt-8"
                    :class="needAddress ? '' : 'justify-content-center'"
                  >
                    <div
                      class="col2-set col-md-6 col-lg-7 col-xl-8 mb-6 mb-md-0"
                      id="customer_details"
                      v-if="needAddress"
                    >
                      <div
                        class="addresses px-4 py-3 bg-white border"
                        v-if="addresses"
                      >
                        <h2 class="fs-4 mb-3">
                          {{ $t('misc.shipping addresses') }}
                        </h2>
                        <form>
                          <div
                            class="radio-check alert mb-2 alert-info"
                            v-for="address in addresses"
                            :key="address.id"
                          >
                            <input
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              :value="address.id"
                              v-model="selectedAddress"
                            />
                            <label
                              class="form-check-label d-block"
                              for="flexRadioDefault1"
                            >
                              <bdi>{{ address.address }}</bdi>
                              -
                              <bdi>{{ $t('misc.phonenumber') }} :</bdi>
                              <bdi>{{ address.phone }}</bdi>
                            </label>
                          </div>
                        </form>

                        <button
                          type="button"
                          class="d-block btn"
                          @click="newAddress = !newAddress"
                        >
                          <font-awesome-icon :icon="['fas', 'plus']" />
                          <bdi class="mx-2">{{ $t('misc.New Address') }}</bdi>
                        </button>
                      </div>
                      <transition name="fade">
                        <div
                          class="px-4 pt-5 bg-white border"
                          v-if="addresses || newAddress"
                        >
                          <div
                            class="woocommerce-billing-fields"
                            v-if="addresses.length == 0 || newAddress"
                          >
                            <h3 class="mb-4 font-size-3">
                              {{ $t('misc.Billing details') }}
                            </h3>
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
                                  required=""
                                  v-model="form.country"
                                  @change="getGovernment($event)"
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
                            <div class="form-group mb-4">
                              <div class="js-form-message js-focus-state">
                                <label
                                  id="signinEmailLabel"
                                  class="form-label d-block"
                                  for="governorate"
                                >
                                  {{ $t('misc.Governorate') }}
                                </label>
                                <select
                                  v-model="form.governorate"
                                  name="governorate"
                                  id="governorate"
                                  :disabled="!governments"
                                  required=""
                                  @change="getCities($event)"
                                  class="form-select form-control rounded-0 height-4 px-4"
                                >
                                  <option value="" disabled>
                                    {{ $t('misc.Select government') }}
                                  </option>
                                  <option
                                    v-for="government in governments"
                                    :key="government.id"
                                    :value="government.id"
                                  >
                                    {{ government.name }}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div class="form-group mb-4">
                              <div class="js-form-message js-focus-state">
                                <label
                                  id="signinEmailLabel"
                                  class="form-label d-block"
                                  for="city"
                                >
                                  {{ $t('misc.City') }}
                                </label>
                                <select
                                  v-model="form.city"
                                  name="city"
                                  id="city"
                                  required=""
                                  :disabled="!cities"
                                  class="form-select form-control rounded-0 height-4 px-4"
                                >
                                  <option value="" disabled>
                                    {{ $t('misc.Select city') }}
                                  </option>
                                  <option
                                    v-for="city in cities"
                                    :key="city.id"
                                    :value="city.id"
                                  >
                                    {{ city.name }}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div class="form-group mb-4">
                              <div class="js-form-message js-focus-state">
                                <label class="form-label d-block" for="address">
                                  {{ $t('misc.address') }}
                                </label>
                                <input
                                  type="text"
                                  class="form-control rounded-0 height-4 px-4"
                                  name="address"
                                  id="address"
                                  :placeholder="
                                    $t('placeholder.Enter Your Address')
                                  "
                                  required=""
                                  v-model="form.address"
                                />
                              </div>
                            </div>
                            <div class="form-group mb-4">
                              <div class="js-form-message js-focus-state">
                                <label class="form-label d-block" for="city">
                                  {{ $t('inputs.phone') }}
                                </label>
                                <input
                                  type="phone"
                                  class="form-control rounded-0 height-4 px-4"
                                  :placeholder="
                                    $t('placeholder.Please enter your phone')
                                  "
                                  v-model="form.phone"
                                  required=""
                                />
                              </div>
                            </div>
                            <div class="form-group mb-4">
                              <div class="js-form-message js-focus-state">
                                <label
                                  class="form-label d-block"
                                  for="postalcode"
                                >
                                  {{ $t('inputs.Postal code') }}
                                </label>
                                <input
                                  type="text"
                                  class="form-control rounded-0 height-4 px-4"
                                  name="postal code"
                                  id="postalcode"
                                  :placeholder="$t('inputs.Postal code')"
                                  required=""
                                  v-model="form.postal_code"
                                />
                              </div>
                            </div>

                            <div class="mb-4d75">
                              <button
                                type="submit"
                                class="btn btn-block py-3 rounded-0 btn-dark"
                              >
                                {{ $t('buttons.Add New Address') }}
                              </button>
                            </div>
                            <!-- <div
                          class="woocommerce-billing-fields__field-wrapper row"
                        >
                          <p
                            class="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
                            id="billing_first_name_field"
                            data-priority="10"
                          >
                            <label for="billing_first_name" class="form-label">
                              First name
                              <abbr class="required" title="required">*</abbr>
                            </label>
                            <input
                              type="text"
                              class="input-text form-control"
                              name="billing_first_name"
                              id="billing_first_name"
                              placeholder=""
                              value=""
                              autocomplete="given-name"
                              autofocus="autofocus"
                            />
                          </p>

                          <p
                            class="col-lg-6 mb-4d75 form-row form-row-last validate-required"
                            id="billing_last_name_field"
                            data-priority="20"
                          >
                            <label for="billing_last_name" class="form-label">
                              Last name
                              <abbr class="required" title="required">*</abbr>
                            </label>
                            <input
                              type="text"
                              class="input-text form-control"
                              name="billing_last_name"
                              id="billing_last_name"
                              placeholder=""
                              value=""
                              autocomplete="family-name"
                            />
                          </p>

                          <p
                            class="col-12 mb-4d75 form-row form-row-wide"
                            id="billing_company_field"
                            data-priority="30"
                          >
                            <label for="billing_company" class="form-label">
                              Company name
                            </label>
                            <input
                              type="text"
                              class="input-text form-control"
                              name="billing_company"
                              id="billing_company"
                              placeholder=""
                              value=""
                              autocomplete="organization"
                            />
                          </p>

                          <p
                            class="col-12 mb-4d75 form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                            id="billing_country_field"
                            data-priority="40"
                          >
                            <label for="billing_country" class="form-label">
                              Country
                              <abbr class="required" title="required">*</abbr>
                            </label>
                            <select
                              name="billing_country"
                              id="billing_country"
                              class="form-control country_to_state country_select select2-hidden-accessible"
                              autocomplete="country"
                              tabindex="-1"
                              aria-hidden="true"
                            >
                              <option value="">Select a country…</option>
                              <option value="AX">Åland Islands</option>
                              <option value="AF">Afghanistan</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AQ">Antarctica</option>
                              <option value="AG">Antigua and Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="PW">Belau</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">Bolivia</option>
                              <option value="BQ">
                                Bonaire, Saint Eustatius and Saba
                              </option>
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BV">Bouvet Island</option>
                              <option value="BR">Brazil</option>
                              <option value="IO">
                                British Indian Ocean Territory
                              </option>
                              <option value="VG">British Virgin Islands</option>
                              <option value="BN">Brunei</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">
                                Central African Republic
                              </option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">Congo (Brazzaville)</option>
                              <option value="CD">Congo (Kinshasa)</option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CW">Curaçao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">Falkland Islands</option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="TF">
                                French Southern Territories
                              </option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HM">
                                Heard Island and McDonald Islands
                              </option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">Iran</option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="CI">Ivory Coast</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">Laos</option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macao S.A.R., China</option>
                              <option value="MK">Macedonia</option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">Micronesia</option>
                              <option value="MD">Moldova</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="KP">North Korea</option>
                              <option value="MP">
                                Northern Mariana Islands
                              </option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PS">Palestinian Territory</option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PN">Pitcairn</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="PR">Puerto Rico</option>
                              <option value="QA">Qatar</option>
                              <option value="RE">Reunion</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russia</option>
                              <option value="RW">Rwanda</option>
                              <option value="ST">São Tomé and Príncipe</option>
                              <option value="BL">Saint Barthélemy</option>
                              <option value="SH">Saint Helena</option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="SX">
                                Saint Martin (Dutch part)
                              </option>
                              <option value="MF">
                                Saint Martin (French part)
                              </option>
                              <option value="PM">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="VC">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="GS">
                                South Georgia/Sandwich Islands
                              </option>
                              <option value="KR">South Korea</option>
                              <option value="SS">South Sudan</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SJ">Svalbard and Jan Mayen</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syria</option>
                              <option value="TW">Taiwan</option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">Tanzania</option>
                              <option value="TH">Thailand</option>
                              <option value="TL">Timor-Leste</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB" selected="selected">
                                United Kingdom (UK)
                              </option>
                              <option value="US">United States (US)</option>
                              <option value="UM">
                                United States (US) Minor Outlying Islands
                              </option>
                              <option value="VI">
                                United States (US) Virgin Islands
                              </option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VA">Vatican</option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Vietnam</option>
                              <option value="WF">Wallis and Futuna</option>
                              <option value="EH">Western Sahara</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </select>
                          </p>

                          <p
                            class="col-12 mb-3 form-row form-row-wide address-field validate-required"
                            id="billing_address_1_field"
                            data-priority="50"
                          >
                            <label for="billing_address_1" class="form-label">
                              Street address
                              <abbr class="required" title="required">*</abbr>
                            </label>
                            <input
                              type="text"
                              class="input-text form-control"
                              name="billing_address_1"
                              id="billing_address_1"
                              placeholder="House number and street name"
                              value=""
                              autocomplete="address-line1"
                            />
                          </p>

                          <p
                            class="col-12 mb-4d75 form-row form-row-wide address-field"
                            id="billing_address_2_field"
                            data-priority="60"
                          >
                            <input
                              type="text"
                              class="input-text form-control"
                              name="billing_address_2"
                              id="billing_address_2"
                              placeholder="Apartment, suite, unit etc. (optional)"
                              value=""
                              autocomplete="address-line2"
                            />
                          </p>

                          <p
                            class="col-12 mb-4d75 form-row form-row-wide address-field validate-required"
                            id="billing_city_field"
                            data-priority="70"
                            data-o_class="form-row form-row-wide address-field validate-required"
                          >
                            <label for="billing_city" class="form-label">
                              Town / City
                              <abbr class="required" title="required">*</abbr>
                            </label>
                            <input
                              type="text"
                              class="input-text form-control"
                              name="billing_city"
                              id="billing_city"
                              placeholder=""
                              value=""
                              autocomplete="address-level2"
                            />
                          </p>

                          <p
                            class="col-12 mb-4d75 form-row form-row-wide address-field validate-state woocommerce-validated"
                            id="billing_state_field"
                            data-priority="80"
                            data-o_class="form-row form-row-wide address-field validate-state"
                          >
                            <label for="billing_state" class="form-label">
                              County
                            </label>
                            <input
                              type="text"
                              class="input-text form-control"
                              value=""
                              placeholder=""
                              name="billing_state"
                              id="billing_state"
                              autocomplete="address-level1"
                            />
                          </p>

                          <p
                            class="col-12 mb-4d75 form-row form-row-wide address-field validate-postcode validate-required"
                            id="billing_postcode_field"
                            data-priority="90"
                            data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
                          >
                            <label for="billing_postcode" class="form-label">
                              Postcode
                              <abbr class="required" title="required">*</abbr>
                            </label>
                            <input
                              type="text"
                              class="input-text form-control"
                              name="billing_postcode"
                              id="billing_postcode"
                              placeholder=""
                              value=""
                              autocomplete="postal-code"
                            />
                          </p>

                          <p
                            class="col-12 mb-4d75 form-row form-row-first validate-required validate-phone"
                            id="billing_phone_field"
                            data-priority="100"
                          >
                            <label for="billing_phone" class="form-label">
                              Phone
                              <abbr class="required" title="required">*</abbr>
                            </label>
                            <input
                              type="tel"
                              class="input-text form-control"
                              name="billing_phone"
                              id="billing_phone"
                              placeholder=""
                              value=""
                              autocomplete="tel"
                            />
                          </p>

                          <p
                            class="col-12 mb-4d75 form-row form-row-last validate-required validate-email"
                            id="billing_email_field"
                            data-priority="110"
                          >
                            <label for="billing_email" class="form-label">
                              Email address
                              <abbr class="required" title="required">*</abbr>
                            </label>
                            <input
                              type="email"
                              class="input-text form-control"
                              name="billing_email"
                              id="billing_email"
                              placeholder=""
                              value=""
                              autocomplete="email"
                            />
                          </p>
                        </div> -->
                          </div>
                        </div>
                      </transition>

                      <!-- <div
                      class="px-4 pt-5 bg-white border border-top-0 mt-n-one"
                    >
                      <div class="woocommerce-additional-fields">
                        <h3 class="mb-4 font-size-3">Additional information</h3>
                        <div
                          class="woocommerce-additional-fields__field-wrapper"
                        >
                          <p
                            class="col-12 mb-4d75 px-0 form-row notes"
                            id="order_comments_field"
                            data-priority=""
                          >
                            <label for="order_comments" class="form-label">
                              Order notes (optional)
                            </label>
                            <textarea
                              name="order_comments"
                              class="input-text form-control"
                              id="order_comments"
                              placeholder="Notes about your order, e.g. special notes for delivery."
                              rows="8"
                              cols="5"
                            ></textarea>
                          </p>
                        </div>
                      </div>
                    </div> -->
                    </div>

                    <h3 id="order_review_heading" class="d-none">
                      {{ $t('misc.Order') }}
                    </h3>

                    <div
                      id="order_review"
                      class="col-md-6 col-lg-5 col-xl-4 woocommerce-checkout-review-order"
                    >
                      <b-accordion free>
                        <b-accordion-item
                          :title="$t(`misc.Your order`)"
                          visible
                        >
                          <table
                            class="shop_table woocommerce-checkout-review-order-table"
                          >
                            <thead>
                              <tr class="d-none">
                                <th class="product-name">
                                  {{ $t('misc.Product') }}
                                </th>
                                <th class="product-total">
                                  {{ $t('misc.total') }}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                class="cart_item"
                                v-for="item in cart"
                                :key="item.id"
                              >
                                <td class="product-name">
                                  {{ item.book.name }}&nbsp;
                                  <strong class="product-quantity">
                                    × {{ item.qty }}
                                  </strong>
                                </td>
                                <td class="product-total">
                                  <span
                                    class="woocommerce-Price-amount amount"
                                    v-if="currency"
                                  >
                                    <span
                                      class="woocommerce-Price-currencySymbol"
                                    >
                                      {{ item.totalPrice }}
                                    </span>
                                    {{ currency.sympl }}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot class="d-none">
                              <tr class="cart-subtotal">
                                <th>{{ $t('misc.Subtotal') }}</th>
                                <td>
                                  <span class="woocommerce-Price-amount amount">
                                    <span
                                      class="woocommerce-Price-currencySymbol"
                                    >
                                      £
                                    </span>
                                    97.99
                                  </span>
                                </td>
                              </tr>

                              <tr class="order-total">
                                <th>{{ $t('misc.total') }}</th>
                                <td>
                                  <strong>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                    >
                                      <span
                                        class="woocommerce-Price-currencySymbol"
                                      >
                                        £
                                      </span>
                                      97.99
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </b-accordion-item>
                        <b-accordion-item visible :title="$t('misc.total')">
                          <table class="shop_table shop_table_responsive">
                            <tbody>
                              <tr class="checkout-subtotal">
                                <th>{{ $t('misc.Subtotal') }}</th>
                                <td>
                                  <span
                                    class="woocommerce-Price-amount amount"
                                    v-if="currency"
                                  >
                                    <span
                                      class="woocommerce-Price-currencySymbol"
                                    >
                                      {{ totalPrice }}
                                    </span>
                                    {{ currency.sympl }}
                                  </span>
                                </td>
                              </tr>

                              <!-- <tr class="order-shipping">
                                <th>{{ $t('misc.Shipping') }}</th>
                                <td data-title="Shipping">Free Shipping</td>
                              </tr> -->
                            </tbody>
                          </table>
                        </b-accordion-item>
                        <b-accordion-item visible :title="$t('misc.Shipping')">
                          <ul id="shipping_method">
                            <div v-for="ship in shippingMethods" :key="ship.id">
                              <li v-if="ship.status == 1">
                                <input
                                  type="radio"
                                  name="shipping_method[0]"
                                  data-index="0"
                                  id="shipping_method_0_flat_rate1"
                                  :value="ship.id"
                                  class="shipping_method"
                                  v-model="shippingCost"
                                />
                                <label for="shipping_method_0_flat_rate1">
                                  {{ ship.name }}
                                </label>
                              </li>
                            </div>
                          </ul>
                        </b-accordion-item>

                        <div class="p-4d875 border">
                          <table class="shop_table shop_table_responsive">
                            <tbody>
                              <tr class="order-total">
                                <th>{{ $t('misc.total') }}</th>
                                <td data-title="Total">
                                  <strong>
                                    <span
                                      class="woocommerce-Price-amount amount"
                                      v-if="currency"
                                    >
                                      {{ totalPrice }} {{ currency.sympl }}
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <b-accordion-item visible :title="$t('misc.Payment')">
                          <div
                            id="payment"
                            class="woocommerce-checkout-payment"
                          >
                            <ul
                              class="wc_payment_methods payment_methods methods p-0"
                            >
                              <li
                                class="wc_payment_method payment_method_bacs d-block"
                              >
                                <div>
                                  <input
                                    id="payment_method_bacs"
                                    type="radio"
                                    class="input-radio"
                                    name="payment_method"
                                    value="online"
                                    v-model="paymentMethod"
                                  />

                                  <label for="payment_method_bacs">
                                    {{ $t('misc.Visa/Master card') }}
                                  </label>
                                </div>

                                <div
                                  class="strip"
                                  v-if="paymentMethod === 'online'"
                                >
                                  <StripePayment />
                                </div>
                              </li>

                              <li class="wc_payment_method payment_method_cod">
                                <input
                                  id="payment_method_cod"
                                  type="radio"
                                  class="input-radio"
                                  name="payment_method"
                                  value="cash"
                                  v-model="paymentMethod"
                                />

                                <label for="payment_method_bacs">
                                  {{ $t('misc.Cash on delivery') }}
                                </label>
                              </li>
                            </ul>
                          </div>
                        </b-accordion-item>
                      </b-accordion>

                      <div class="form-row place-order">
                        <button
                          :disabled="paymentMethod != 'cash'"
                          name="woocommerce_checkout_place_order"
                          type="button"
                          class="button alt btn btn-dark btn-block rounded-0 py-4"
                          @click="placeOrder"
                        >
                          {{ $t('buttons.Place order') }}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import StripePayment from '../components/StripePayment.vue'
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    StripePayment: defineAsyncComponent(() =>
      import('../components/StripePayment.vue'),
    ),
  },
  data() {
    return {
      form: {
        country: '',
        governorate: '',
        city: '',
        postal_code: '',
        phone: '',
        address: '',
      },
      shippingCost: 'exprese',
      haveCoppon: false,
      countries: null,
      governments: null,
      cities: null,
      paymentMethods: null,
      paymentMethod: '',
      addresses: null,
      selectedAddress: '',
      newAddress: false,
      shippingMethods: null,
      needAddress: false,
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    },
    currency() {
      return this.$store.getters.currency
    },
    totalPrice() {
      return this.$store.getters.totalPrice
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
  },
  mounted() {
    this.getCountries()
    this.getAddresses()
    this.getPayments()
    this.checkCard()
    this.getShippingMethod()
    console.log(process.env.LOCALE)
  },
  methods: {
    checkCard() {
      let found
      this.cart.forEach((element) => {
        found = element.bookType == 'hardcopy'
      })
      if (found) {
        this.needAddress = true
      }
    },
    getCountries() {
      axios.get('countries', { headers: { value: 'id' } }).then((res) => {
        this.countries = res.data.data
      })
    },
    getGovernment(e) {
      this.governments = null
      axios.get(`countries/${e.target.value}/governorates`).then((res) => {
        this.governments = res.data.data
      })
    },
    getCities(e) {
      this.cities = null
      axios
        .get(
          `countries/${this.countryId}/governorates/${e.target.value}/cities`,
        )
        .then((res) => {
          this.cities = res.data.data
        })
    },
    addNewAddress() {
      axios
        .post('user/address/create', this.form)
        .then((data) => {
          if (data.data.status == 'faild') {
            this.$toast.error(data.data.message)
            return
          }
          this.$toast.success(data.data.message)
          setTimeout(() => {
            window.location.reload()
          }, 300)
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
    },
    getAddresses() {
      this.axios.get('user/address').then((data) => {
        this.addresses = data.data.data
        if (this.addresses.length) {
          this.selectedAddress = this.addresses[0].id
        }
      })
    },
    getPayments() {
      this.axios.get('/user/paymentMethods').then((data) => {
        this.paymentMethods = data.data.data
      })
    },
    getShippingMethod() {
      this.axios.get('/settings').then((data) => {
        this.shippingMethods = data.data.data.shippingMethods
      })
    },
    placeOrder() {
      const cart = JSON.parse(localStorage.getItem('cart'))
      if (cart) {
        let items = []
        cart.forEach((element) => {
          items.push({
            book_id: element.book.id,
            book_type: element.bookType,
            quntity: element.qty,
            price: element.price,
          })
        })
        let payment_method_id = this.paymentMethod
        let shipping_address_id = this.selectedAddress
        let shipping_method = this.shippingCost
        if (this.needAddress && this.addresses.length == 0) {
          this.$toast.error(this.$t('misc.you must select your address'))
          this.newAddress = true
          return
        }
        this.axios
          .post('/user/orders/create', {
            items,
            payment_method_id,
            shipping_address_id,
            shipping_method,
          })
          .then((data) => {
            this.$toast.success(data.data.message)
            localStorage.removeItem('cart')
            setTimeout(() => {
              window.location.reload()
            }, 300)
          })
      } else {
        this.$toast.success(this.$t('misc.cart is empty'))
      }
    },
    login() {
      this.$store.commit('login_Menu')
    },
  },
  watch: {
    paymentMethod(val) {
      console.log(val)
    },
  },
}
</script>

<style lang="scss" scoped>
.coppon-enter-from,
.coppon-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.coppon-enter-active,
.coppon-leave-active {
  transition: all 0.6s;
}

.coppon-enter-to,
.coppon-leave-from {
  opacity: 1;
}

.showcoupon {
  color: #f75454;
}

.radio-check {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.is-rtl {
  label,
  h2,
  h3 {
    text-align: right;
  }
  .radio-check {
    flex-direction: row-reverse;
  }
  .woocommerce-info {
    text-align: right;
  }
}
</style>
