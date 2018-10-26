<template class="wrapper">
    <div class="full-page" :style="headerStyle">
        <div class="md-toolbar md-transparent md-toolbar-absolute md-theme-default md-elevation-0">
            <div class="md-toolbar-row md-offset">
            </div>
        </div>
        <div class="wrapper wrapper-full-page">
            <div filter-color="black" class="page-header header-filter register-page">
                <div class="container  regcen">
                    <div class="md-layout">
                        <div class="md-layout-item">
                            <div class="md-card md-card-signup md-theme-default">
                                <div v-if="step == 1">
                                    <h2 class="title text-center">Register</h2>
                                    <div class="md-card-content">
                                        <div class="md-layout">
                                            <div class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 ml-auto">
                                                <div class="info info-horizontal">
                                                    <div class="icon icon-success">
                                                        <i class="md-icon md-icon-font md-theme-default">timeline</i>
                                                    </div>
                                                    <div class="description">
                                                        <h4 class="info-title">Marketing</h4>
                                                        <p class="description">
                                                            We've created the marketing campaign of the website. It was
                                                            a very interesting
                                                            collaboration.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="info info-horizontal">
                                                    <div class="icon icon-danger">
                                                        <i class="md-icon md-icon-font md-theme-default">code</i>
                                                    </div>
                                                    <div class="description">
                                                        <h4 class="info-title">Fully Coded in HTML5</h4>
                                                        <p class="description">
                                                            We've developed the website with HTML5 and CSS3. The client
                                                            has access to the code using
                                                            GitHub.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="info info-horizontal">
                                                    <div class="icon icon-info">
                                                        <i class="md-icon md-icon-font md-theme-default">group</i>
                                                    </div>
                                                    <div class="description">
                                                        <h4 class="info-title">Built Audience</h4>
                                                        <p class="description">
                                                            There is also a Fully Customizable CMS Admin Dashboard for
                                                            this product.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 mr-auto">
                                                <form @submit.prevent="onSubmit()">
                                                    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                                                    <md-field class="md-form-group" slot="inputs" :class="{error: errors.has('email')}">
                                                        <md-icon>email</md-icon>
                                                        <label>Email...</label>
                                                        <md-input type="email" name="email" class="input" v-validate="'required|email'"
                                                            v-model="user.email"></md-input>
                                                    </md-field>
                                                    <div class="error" v-if="errors.has('email')">&emsp;
                                                        {{errors.first('email')}}</div>
                                                    <md-field class="md-form-group" slot="inputs" :class="{error: errors.has('password')}">
                                                        <md-icon>lock_outline</md-icon>
                                                        <label>Password...</label>
                                                        <md-input ref="password" v-validate="'required|min:6'" name="password"
                                                            v-model="user.password" type="password" class="input"></md-input>
                                                    </md-field>
                                                    <div class="error" v-if="errors.has('password')">{{errors.first('password')}}</div>
                                                    <md-field class="md-form-group" slot="inputs" :class="{error: errors.has('confirmpassword')}">
                                                        <md-icon>lock_outline</md-icon>
                                                        <label>Confirm Password...</label>
                                                        <md-input v-validate="'required|confirmed:password'" name="confirmpassword"
                                                            v-model="user.confirmPassword" type="password" class="input"></md-input>
                                                    </md-field>
                                                    <div class="error" v-if="errors.has('confirmpassword')">{{errors.first('confirmpassword')}}</div>
                                                    <md-field>
                                                        <label for="accountType">Account Type</label>
                                                        <md-select v-validate="'required'" v-model="user.accountType"
                                                            name="accountType" id="accountType">
                                                            <md-option value="sponser"> Sponser</md-option>
                                                            <md-option value="campaigner">Campaigner</md-option>
                                                        </md-select>
                                                    </md-field>
                                                    <div class="error" v-if="errors.has('accountType')">{{errors.first('accountType')}}</div>
                                                    <div class="button-container">
                                                        <button href="" type="submit" :disabled="errors.any()" class="md-button md-success md-round mt-4 md-theme-default"
                                                            slot="footer">
                                                            <div class="md-ripple">
                                                                <div class="md-button-content">Get Started</div>
                                                            </div>
                                                        </button>
                                                        <md-button @click="login()" class=" pos1 md-simple md-success md-lg">
                                                            <span>Already have a account.login?</span>
                                                        </md-button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="step == 2">
                                    <h2 class="title text-center">Seed</h2>
                                    <div class="md-card-content">
                                        <div class="md-layout">
                                            <div class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 ml-auto">
                                                <div class="info info-horizontal">
                                                    <div class="icon icon-success">
                                                        <i class="md-icon md-icon-font md-theme-default">timeline</i>
                                                    </div>
                                                    <div class="description">
                                                        <h4 class="info-title">Marketing</h4>
                                                        <p class="description">
                                                            We've created the marketing campaign of the website. It was
                                                            a very interesting
                                                            collaboration.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="info info-horizontal">
                                                    <div class="icon icon-danger">
                                                        <i class="md-icon md-icon-font md-theme-default">code</i>
                                                    </div>
                                                    <div class="description">
                                                        <h4 class="info-title">Fully Coded in HTML5</h4>
                                                        <p class="description">
                                                            We've developed the website with HTML5 and CSS3. The client
                                                            has access to the code using
                                                            GitHub.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="info info-horizontal">
                                                    <div class="icon icon-info">
                                                        <i class="md-icon md-icon-font md-theme-default">group</i>
                                                    </div>
                                                    <div class="description">
                                                        <h4 class="info-title">Built Audience</h4>
                                                        <p class="description">
                                                            There is also a Fully Customizable CMS Admin Dashboard for
                                                            this product.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 mr-auto">
                                                <div class="seedbox">
                                                    <p>{{seed}}</p>
                                                </div>
                                                <div class="button-container">
                                                    <button href="" type="button" class="md-button md-success md-round mt-4 md-theme-default"
                                                        slot="footer">
                                                        <div class="md-ripple">
                                                            <div @click="downloadFile()" class="md-button-content">Save
                                                                as file</div>
                                                        </div>
                                                    </button>
                                                </div>
                                                <div class="button-container">
                                                    <button href="" type="button" class="md-button md-success md-round mt-4 md-theme-default"
                                                        slot="footer">
                                                        <div class="md-ripple">
                                                            <div @click="signupsucces()" class="md-button-content">I
                                                                saved continue</div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="md-card-actions md-alignment-right"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <footer  class="footer">
                <div  class="container md-offset">
                  <nav >
                    <ul >
                      <li >
                        <a  href="#/dashboard" class="">Home</a>
                      </li>
                      <li >
                        <a  href="#">
                            Company
                        </a>
                      </li>
                      <li >
                        <a  href="#">
                            Portfolio
                        </a>
                      </li>
                      <li >
                        <a  href="#">
                            Blog
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div  class="copyright text-center">
              © 2018 
                    <a  href="https://www.creative-tim.com/?ref=mdf-vuejs" target="_blank">Creative Tim</a>, made with 
                    <i  class="fa fa-heart heart"></i> for a better web
            
                  </div>
                </div>
              </footer> -->
        </div>
    </div>
</template>

<script>
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    export default {
        bodyClass: 'login-page',
        data() {
            return {
                user: {},
            }
        },

        props: {
            header: {
                type: String,
                default: require('@/assets/img/register.jpg')
            }
        },
        methods: {
            onSubmit() {
                let self = this;
                this.$validator.validateAll()
                    .then(
                        res => {
                            if (res) {
                                const {
                                    dispatch
                                } = self.$store;
                                dispatch('authentication/signup', self.user);
                            }
                        }
                    )
            },
            login(){
              this.$router.push({path:'/login'})
            },
            downloadFile() {
                let self = this;
                const filename = `${new Date().getTime()}seed.txt`
                const element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(self.seed));
                element.setAttribute('download', filename);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            },
            signupsucces() {
                this.$router.push({
                    name: 'Dashboard'
                })
            }
        },
        computed: {
            headerStyle() {
                return {
                    backgroundImage: `url(${this.header})`,
                    backgroundRepeat: 'round'
                }
            },
            alert() {
                return this.$store.state.alert
            },
            step() {
                return this.$store.state.authentication.signstep;
            },
            seed() {
                return this.$store.state.authentication.seed;
            }
        }
    }

</script>

<style scoped>
    .wrapper.wrapper-full-page {
        min-height: 90vh !important
    }

    .seedbox {
        height: 150px;
        background: #e8e4e4;
        box-shadow: 4px 3px #d0c8c8;
        padding: 50px;
    }

    .regcen {
        width: 58%;
        margin: 0 auto !important;
    }

    .wizard {
        padding-left: 5%;
        padding-top: 2%;
        padding-right: 2%;
        background-color: white;
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 2%;
        border-radius: 2%;
    }

    .button-container {
        text-align: center
    }

    .al {
        width: 73%;
        text-align-last: left;
        border-top-style: hidden;
        border-left-style: hidden;
        border-right-style: hidden;
        padding-top: 25px;
        border-bottom-color: #4CAF50 !important;
        border-bottom: 2px solid #4CAF50 !important;
    }

    .input {
        padding-left: 6%;
    }

    select {
        text-align-last: center;
        color: gray;
    }

    .textcls {
        border: #4CAF50 !important;
        border: 2px solid #4CAF50 !important;
        margin: 0px;
        width: 100%;
        height: 91px;
    }

    .save {
        background: #4CAF50;
        width: 20%;
        color: white;
        border: none;
        cursor: pointer;
    }

    .section {
        /* height: 100vh !important; */
        padding-top: 3%;
    }

    .wrapper {
        margin: 0 !important;
    }

    .error {
        color: red;

    }

    .select {
        text-align: left;
        color: gray;
    }

    @-webkit-keyframes zoomIn8-data-v-438c1908 {
        0% {
            -webkit-transform: scale3d(.1, .1, .1);
            opacity: 0;
            transform: scale3d(.1, .1, .1)
        }

        to {
            opacity: 1
        }
    }

    @keyframes zoomIn8-data-v-438c1908 {
        0% {
            -webkit-transform: scale3d(.1, .1, .1);
            opacity: 0;
            transform: scale3d(.1, .1, .1)
        }

        to {
            opacity: 1
        }
    }

    .wrapper-full-page .zoomIn {
        -webkit-animation-name: zoomIn;
        animation-name: zoomIn
    }

    @-webkit-keyframes zoomOut {
        0% {
            -webkit-transform: scale3d(.7, .7, .7);
            opacity: 1;
            transform: scale3d(.7, .7, .7)
        }

        to {
            -webkit-transform: scale3d(.46, .46, .46);
            opacity: 0;
            transform: scale3d(.46, .46, .46)
        }
    }

    @keyframes zoomOut {
        0% {
            -webkit-transform: scale3d(.7, .7, .7);
            opacity: 1;
            transform: scale3d(.7, .7, .7)
        }

        to {
            -webkit-transform: scale3d(.46, .46, .46);
            opacity: 0;
            transform: scale3d(.46, .46, .46)
        }
    }

    .wrapper-full-page .zoomOut {
        -webkit-animation-name: zoomOut;
        animation-name: zoomOut
    }

    .register-page .md-card-signup {
        -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);
        border-radius: 6px;
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);
        max-width: 920px;
        padding: 40px 0;
    }

    .full-page .container {
        padding-left: 15px;
        padding-right: 15px;
    }

</style>
