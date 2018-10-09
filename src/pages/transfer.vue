<template>
  <form novalidate @submit.prevent="validateUser">
    >
    <div class="content">
      <div class="md-layout">
        <div class="md-layout-item">
          <md-card>
            <md-card-header data-background-color="green">
              <h4 class="title"> Transfer</h4>
              <!--           <p class="category">Created using Roboto Font Family</p>    -->
            </md-card-header>
            <md-card-content>
              <div id="typography">
                <div class="title">
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field :class="getValidationClass('from')">
                      <label for="from">From</label>
                      <md-input name="from" id="from" v-model="form.from" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.from.required">This field is required</span>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field :class="getValidationClass('to')">
                      <label for="to">To</label>
                      <md-input name="to" id="to" v-model="form.to" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.to.required">This field is required</span>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field :class="getValidationClass('amount')">
                      <label for="to">Amount</label>
                      <md-input name="amount" type="number" id="to" v-model="form.amount" :disabled="sending" />
                      <span class="md-error" v-if="!$v.form.amount.required">This field is required</span>
                    </md-field>
                  </div>
                  <button class="button">Transfer</button>
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
  import {
    validationMixin
  } from 'vuelidate'
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
        from: null,
        to: null,
        gender: null,
        age: null,
        email: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        from: {
          required
        },
        to: {
          required
  
        },
        amount: {
          required
        }
      }
    },
    methods: {
      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName]
  
        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm() {
        this.$v.$reset()
        this.form.from = null
        this.form.to = null
        this.form.amount = null
      },
  
      validateUser() {
        this.$v.$touch()
  
        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
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
  }
</style>

