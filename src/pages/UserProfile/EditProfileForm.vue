<template>
<form novalidate  @submit.prevent="validateUser">
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title"> Update Profile</h4>
 <!--           <p class="category">Created using Roboto Font Family</p>    -->
          </md-card-header>
         <md-card-content>
            <div id="typography">
               <div class="title">

               
               <div class="md-layout-item md-small-size-100 md-size-90">
            <div class="piker">
            <md-field>
              <label>Account Type</label>
              <md-input v-model="user.accountType" type="text" disabled></md-input>
            </md-field>
          </div>
          </div>
                               <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email</label>
              <md-input v-model="user.email" type="email" disabled></md-input>
            </md-field>
          </div>
         
                
                <div class="md-layout-item md-small-size-100 md-size-90">
                     <div class="piker">
                  <md-field :class="getValidationClass('firstname')">
                    <label for="firstname">firstname</label>
                    <md-input name="firstname" id="firstname"  v-model="user.firstName" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.firstname.required">This field is required</span>
                  </md-field>
                </div>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field :class="getValidationClass('lastname')">
                    <label for="lastname">lastname</label>
                    <md-input name="lastname" id="lastname"  v-model="user.lastName" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.lastname.required">This field is required</span>
                  </md-field>
                </div>
                 <div class="md-layout-item md-small-size-100 md-size-90">
                      <div class="piker">
                  <md-field :class="getValidationClass('address')">
                    <label for="address">address</label>
                    <md-input name="address" id="address"  v-model="user.address" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.address.required">This field is required</span>
                  </md-field>
                </div>
                </div>
                 <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field :class="getValidationClass('city')">
                    <label for="city">city</label>
                    <md-input name="city" id="city"  v-model="user.city" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.city.required">This field is required</span>
                  </md-field>
                </div>
                 <div class="md-layout-item md-small-size-100 md-size-90">
                   <div class="piker">
                  <md-field :class="getValidationClass('postalcode')">
                    <label for="postalcode">postalcode</label>
                    <md-input name="postalcode" type= "number" id="to"  v-model="user.pincode" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.postalcode.required">This field is required</span>
                  </md-field>
                </div>
                 </div>
                 <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field :class="getValidationClass('country')">
                    <label for="country">country</label>
                    <md-input name="country" id="country"  v-model="user.country" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.country.required">This field is required</span>
                  </md-field>
                </div>
                
                <div class="md-layout-item md-small-size-100 md-size-33">
                  <md-field :class="getValidationClass('phonenumber')">
                    <label for="phonenumber">phonenumber</label>
                    <md-input name="phonenumber" type= "number" id="to"  v-model="user.phoneNumber" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.phonenumber.required">This field is required</span>
                  </md-field>
                </div>

                  <div class="md-layout-item md-size-100 pad">
                     <div class="spce"> 
            <input type="file" value="File upload">
            </div>
        <div class="piker">    <input type="file" value="File upload"></div>
          </div>
               <div class="md-layout-item md-size-100 text-right">
             <button >updateprofile</button>
          </div>
                
                

                




                

                   
               </div>
               
               
           </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstname: null,
        lastname: null,
        phonenumber: null,
        postalcode: null,
        address:null,
        city:null,
        country: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstname: {
          required
        },
        lastname: {
          required
         
        },
        phonenumber: {
          required
        },
        address: {
          required
        },
          postalcode: {
          required
        },
          city: {
          required
        },
          country: {
          required
        },
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstname= null
        this.form.lastname = null
        this.form.phonenumber = null
        this.form. postalcode= null
        this.form. city= null
        this.form. address= null
        this.form. country= null
      },
      
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    },
      computed: {
        user() {
          return this.$store.state.user.user
        }
      },
       created: function () {
         let self = this
          const { dispatch } = self.$store;
          dispatch('user/getuser');
       }
  }
</script>

<style>
.button {
  padding: 15px 25px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
box-shadow: 0 9px #999;
border-bottom:none;
height:43px;

}
.piker{
    width:60%;
   float:right;
     padding-left:120px;
}

.spce{
  float:left; width:40%;
}
</style>



