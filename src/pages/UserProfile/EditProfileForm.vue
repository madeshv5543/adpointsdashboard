<template>
    <form v-if="user" novalidate @submit.prevent="validateUser">
        <div class="content">
            <div class="md-layout">
                <div class="md-layout-item">
                    <vue-element-loading :active="loading" spinner="bar-fade-scale" color="#5dc596" :is-full-screen="true" />
                    <md-card>
                        <md-card-header data-background-color="green">
                            <h4 class="title"> Update Profile</h4>
                            <!--           <p class="category">Created using Roboto Font Family</p>    -->
                        </md-card-header>
                        <md-card-content>
                            <div id="typography">
                                <div class="title">
                                    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                                    <div class="md-layout md-small-size-100 md-size-100">
                                        <div class="md-layout-item md-small-size-100 md-medium-size-50">
                                            <md-field>
                                                <label>Email</label>
                                                <md-input v-model="user.email" type="email" disabled></md-input>
                                            </md-field>
                                        </div>
                                        <div class="md-layout-item md-small-size-100 md-medium-size-50">
                                            <div class="">
                                                <md-field>
                                                    <label>Account Type</label>
                                                    <md-input v-model="user.accountType" type="text" disabled></md-input>
                                                </md-field>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="md-layout">
                                        <div class="md-layout-item md-small-size-100 md-medium-size-50">
                                            <div>
                                                <md-field :class="{error: errors.has('firstname')}">
                                                    <label for="firstname">Firstname</label>
                                                    <md-input name="firstname" v-validate="'required'" id="firstname"
                                                        v-model="user.firstName" />
                                                    <span class="error" v-if="errors.has('firstname')">{{errors.first('firstname')}}</span>
                                                </md-field>
                                            </div>
                                        </div>
                                        <div class="md-layout-item md-small-size-100 md-medium-size-50">
                                            <md-field :class="{error: errors.has('lastname')}">
                                                <label for="lastname">Lastname</label>
                                                <md-input name="lastname" v-validate="'required'" id="lastname" v-model="user.lastName" />
                                                <span class="error" v-if="errors.has('lastname')">{{errors.first('lastname')}}</span>
                                            </md-field>
                                        </div>
                                    </div>
                                    <div class="md-layout">
                                        <div class="md-layout-item md-small-size-100 md-medium-size-50">
                                            <div>
                                                <md-field :class="{error: errors.has('address')}">
                                                    <label for="address">Address</label>
                                                    <md-input name="address" v-validate="'required'" id="address"
                                                        v-model="user.physicaladdress" />
                                                    <span class="error" v-if="errors.has('address')">{{errors.first('address')}}</span>
                                                </md-field>
                                            </div>
                                        </div>
                                        <div class="md-layout-item md-small-size-100 md-medium-size-50">
                                            <md-field :class="{error: errors.has('city')}">
                                                <label for="city">City</label>
                                                <md-input name="city" v-validate="'required'" id="city" v-model="user.city" />
                                                <span class="error" v-if="errors.has('city')">{{errors.first('city')}}</span>
                                            </md-field>
                                        </div>
                                    </div>
                                    <div class="md-layout">
                                        <div class="md-layout-item md-small-size-100 md-medium-size-50">
                                            <div>
                                                <md-field :class="{error: errors.has('postalcode')}">
                                                    <label for="postalcode">Postalcode</label>
                                                    <md-input name="postalcode" v-validate="'required'" type="number"
                                                        id="postalcode" v-model="user.pincode" />
                                                    <span class="error" v-if="errors.has('postalcode')">{{errors.first('postalcode')}}</span>
                                                </md-field>
                                            </div>
                                        </div>
                                        <div class="md-layout-item md-small-size-100 md-medium-size-50">
                                            <md-field :class="{error: errors.has('country')}">
                                                <md-select v-model="user.country"  v-validate="'required'" name="country" id="country" placeholder="country">
                                                    <md-option v-for="item in country" :key="item.name" :value="item.name">{{item.name}}</md-option>
                                                </md-select>
                                                <span class="error" v-if="errors.has('country')">{{errors.first('country')}}</span>
                                            </md-field>
                                        </div>
                                    </div>
                                    <div class="md-layout">
                                        <div class="md-layout-item md-small-size-100 md-medium-size-50">
                                            <div>
                                                <md-field :class="{error: errors.has('companyName')}">
                                                    <label for="companyName">Company Name</label>
                                                    <md-input name="companyName" v-validate="'required'" type="text" id="companyName"
                                                        v-model="user.companyName" />
                                                    <span class="error" v-if="errors.has('companyName')">{{errors.first('companyName')}}</span>
                                                </md-field>
                                            </div>
                                        </div>

                                        <div class="md-layout-item md-small-size-100 md-medium-size-50">
                                            <md-field :class="{error: errors.has('phonenumber')}">
                                                <label for="phonenumber">Phonenumber</label>
                                                <md-input name="phonenumber" v-validate="'required|digits:10'" type="number"
                                                    id="phonenumber" v-model="user.phoneNumber" />
                                                <span class="error" v-if="errors.has('phonenumber')">{{errors.first('phonenumber')}}</span>
                                            </md-field>
                                        </div>
                                    </div>
                                    <div class="spce" v-if="user.filename1">
                                        <md-field>
                                            <md-file name="filename1" id="filename1" v-model="user.filename1" disabled
                                                placeholder="upload compaign image" />
                                            <button @click="removefileOne()" type="button" class="md-button md-icon-button md-dense md-input-action md-clear md-theme-default"
                                                tabindex="-1">
                                                <div class="md-ripple">
                                                    <div class="md-button-content"><i class="md-icon md-icon-font md-icon-image md-theme-default"><svg
                                                                height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                            </svg></i></div> <span></span>
                                                </div>
                                            </button>
                                        </md-field>
                                    </div>
                                    <div class="md-layout-item md-size-100 pad">
                                        <div class="spce" v-if="!user.filename1">
                                            <md-field>
                                                <label>Upload files</label>
                                                <md-file id="file" name="file1" v-model="file1" v-validate="'required'"
                                                    @change="handleFileUploadOne($event)" placeholder="A nice input placeholder" />
                                                <span class="error" v-if="errors.has('file1')">{{errors.first('file1')}}</span>
                                            </md-field>
                                        </div>
                                        <div class="piker" v-if="user.filename2">
                                            <md-field>
                                                <md-file name="filename2" id="filename2" v-model="user.filename2"
                                                    disabled placeholder="upload compaign image" />
                                                <button @click="removefileTwo()" type="button" class="md-button md-icon-button md-dense md-input-action md-clear md-theme-default"
                                                    tabindex="-1">
                                                    <div class="md-ripple">
                                                        <div class="md-button-content"><i class="md-icon md-icon-font md-icon-image md-theme-default"><svg
                                                                    height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                                                </svg></i></div> <span></span>
                                                    </div>
                                                </button>
                                            </md-field>
                                        </div>
                                        <div class="piker" v-if="!user.filename2">
                                            <md-field>
                                                <label>Upload files</label>
                                                <md-file id="file2" name="file2" v-model="file2" v-validate="'required'"
                                                    @change="handleFileUploadTwo($event)" placeholder="A nice input placeholder" />
                                                <span class="error" v-if="errors.has('file2')">{{errors.first('file2')}}</span>
                                            </md-field>
                                        </div>
                                    </div>
                                    <div class="md-layout-item md-size-100 text-right">
                                        <button type="submit" class="md-button md-success md-round mt-4 md-theme-default">
                                            <div class="md-ripple">
                                                <div class="md-button-content">Update Profile</div>
                                            </div>
                                        </button>
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
    export default {
        name: 'FormValidation',
        data: () => ({
            fileone: null,
            filetwo: null,
            userSaved: false,
            sending: false,
            lastUser: null,
            file1: null,
            file2: null
        }),
        methods: {
            validateUser() {
                let self = this;
                console.log(self.alert)
                self.$validator.validateAll()
                    .then(
                        res => {
                            console.log("validation result", res, self.errors.first('firstname'))
                            if (res) {
                                const {
                                    dispatch
                                } = self.$store;
                                var formData = new FormData();
                                const {
                                    firstName,
                                    lastName,
                                    physicaladdress,
                                    city,
                                    pincode,
                                    country,
                                    companyName,
                                    phoneNumber
                                } = self.user
                                formData.append('firstName', firstName)
                                formData.append('lastName', lastName)
                                formData.append('physicaladdress', physicaladdress)
                                formData.append('city', city)
                                formData.append('country', country)
                                formData.append('companyName', companyName)
                                formData.append('phoneNumber', phoneNumber)
                                formData.append('pincode', pincode)
                                formData.append('fileone', self.fileone)
                                formData.append('filetwo', self.filetwo)
                                if (!self.user.filename1)
                                    formData.append('fieldname1', self.file1)
                                if (!self.user.filename2)
                                    formData.append('fieldname2', self.file2)
                                dispatch('user/updateuser', formData)
                            }
                        }
                    )
            },
            removefileOne() {
                let self = this;
                self.user.filename1 = null
            },
            removefileTwo() {
                let self = this;
                self.user.filename2 = null
            },
            handleFileUploadOne(e) {
                this.fileone = e.target.files[0];
                console.log("file one", this.fileone)
            },
            handleFileUploadTwo(e) {
                this.filetwo = e.target.files[0];
                console.log("file one", this.file2)
            },
        },
        computed: {
            user() {
                return this.$store.state.user.user
            },
            alert() {
                return this.$store.state.alert
            },
            loading() {
                return this.$store.state.user.loading
            },
            country() {
                return this.$store.state.user.country
            }
        },
        created: function () {
            let self = this
            const {
                dispatch
            } = self.$store;
            dispatch('user/getuser');
            dispatch('user/getCountry');
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
        border-bottom: none;
        height: 43px;

    }

    .error {
        color: red;
    }

    .piker {
        width: 60%;
        float: right;
        padding-left: 120px;
    }

    .spce {
        float: left;
        width: 40%;
    }

</style>
