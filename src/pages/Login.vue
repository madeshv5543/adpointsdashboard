<template>
  <div class="wrapper">
    <div class="full-page" :style="headerStyle">
    <div class="wrapper wrapper-full-page" >
      <div class="top">
        <div class="md-layout">
          <div class="layout md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <form header-color="green" @submit.prevent="onSubmit()">
              <div>
              <!-- <h4 slot="title" class="card-title"></h4> -->
                              <md-card>
                  <md-card-header data-background-color="green" class="txt-cen">
                    <h4 class="title">Ad Points</h4>
                  </md-card-header>
                </md-card>
              <!-- <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-49">

              </div> -->
              <!-- <md-field class="md-form-group" slot="inputs">
                        <md-icon>face</md-icon>
                        <label>First Name...</label>
                        <md-input v-model="firstname" class="input"></md-input>
                      </md-field> -->
              <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
              <md-field class="md-form-group" slot="inputs" :class="{error: errors.has('email')}">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input autocomplete="email" type="email" name="email" class="input" v-validate="'required|email'" v-model="user.email"></md-input>
              </md-field>
              <div class="error" v-if="errors.has('email')">&emsp; {{errors.first('email')}}</div>
              <md-field class="md-form-group" slot="inputs" :class="{error: errors.has('password')}">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input autocomplete="email" v-validate="'required'" name="password" v-model="user.password" type="password" class="input"></md-input>
              </md-field>
              <div class="error" v-if="errors.has('password')">{{errors.first('password')}}</div>
              <md-button class=" forgot md-simple md-success ">
                Forgot password?
              </md-button>
              <md-button @click="signup()" class=" pos1 md-simple md-success md-lg">
               <span>create new account?</span> 
              </md-button>
               </div>
              <md-button  type="submit" class=" pos2 ">
                <strong>LOGIN</strong>
              </md-button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    bodyClass: 'login-page',
    data() {
      return {
        user: {
          email: '',
          password: '',
          submitted: false,
          msg: 'fdr'
        }
      }
    },
    methods: {
      onSubmit() {
        let self = this;
        this.$validator.validateAll()
        .then( res =>{
          if(res) {
          const { dispatch } = self.$store;
          const data  ={
            email: self.user.email,
            password: self.user.password
          }
          dispatch('authentication/login',data);
          }
          else {
            console.log('false res')
          }
        },
        err => {
          console.log("err",err)
        })
        // if (!this.errors.any()) {
        //   window.location.href = 'http://localhost:8080/#/dashboard'
        // }
        // else {
        //   console.log('stayyy')
        // }
      },
      signup: function() {
       this.$router.push({path:'/signup'})
      },
      submitForm() {
        this.submitted = true
      }
    },
    props: {
      header: {
        type: String,
        default: require('@/assets/img/profile_city.jpg')
      }
    },
    computed: {
      headerStyle() {
        return {
          backgroundImage: `url(${this.header})`
        }
      },
      alert () {
            return this.$store.state.alert
        }
    }
  }
</script>

<style scoped>
  .top {
    padding-left: 25%;
    display: -ms-flexbox;
    -ms-flex-pack: justify;
    padding-top: 100px;
    padding-bottom: 150px;
  }

  .txt-cen{
    text-align: center
  }
  
  .align {
    display: flex;
    flex-wrap: wrap;
  }
  
  .layout {
    min-width: 65.3333%;
    max-width: 66.3333%;
    flex: 0 1 33.3333%;
    background: white;
    border-radius: 2%;
  }
  
  .description {
    padding-left: 33%;
    color: #999999;
  }
  
  .md-button.md-fab,
  .md-button.md-just-icon {
    font-size: 24px;
    height: 41px;
    width: 41px;
    padding: 0;
    overflow: hidden;
    position: relative;
    line-height: 41px;
    border-radius: 50%;
  }
  
  .md-icon {
    padding-left: 2%;
  }
  
  .md-field>.md-icon~label {
    left: 79px;
  }
  
  .pos {
    padding-left: 41%;
  }
  
  .section {
    height: auto;
  }
  
  .input {
    padding-left: 2% !important;
  }
  
  .pos2 {
    margin-left: 14%;
    background: linear-gradient(60deg, #66bb6a, #43a047) !important;
  }
  
  .pos1 {
    float: left;
    line-height: 1;
    text-transform: capitalize;
  }
  
  .forgot {
    float: right;
    text-transform: capitalize;
    font-size: inherit;
  }
  .section{
      height: 100%;
    height:stretch,;

  }
  
  .error {
    color: red;
    padding-left: 5%;
  }
</style>
