<template>
    <form>
         <vue-element-loading :active="loading" spinner="bar-fade-scale" color="#5dc596" :is-full-screen="true" />
        <md-card>
            <md-card-header data-background-color="orange">
                <h4 class="title">Add Compaign</h4>
                <p class="category">Complete your form</p>
            </md-card-header>

            <md-card-content>
                <form novalidate @submit.prevent="addcampaign">
                   <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <div class="md-layout">
                        <div class="picker">
                            <md-field :class="{error: errors.has('title')}">
                                <label id="title">Title</label>
                                <md-input name="title" id="title" v-validate="'required'" v-model="campaign.title" type="text"></md-input>
                                <span class="error" v-if="errors.has('title')">{{errors.first('title')}}</span>
                            </md-field>
                        </div>
                        <div class="space">
                            <md-field :class="{error: errors.has('image')}">

                                <md-file name="image" v-validate="'required'" id="campimg" v-model="file1"  @change="handleFileUpload($event)"  placeholder="upload compaign image" />
                                <span class="error" v-if="errors.has('image')">{{errors.first('image')}}</span>
                            </md-field>
                        </div>
                        <div class="picker">
                            <md-field :class="{error: errors.has('description')}">
                                <label for="description">Description</label>
                                <md-textarea name="description" v-validate="'required'" id="description" v-model="campaign.description"></md-textarea>
                                <span class="error" v-if="errors.has('description')">{{errors.first('description')}}</span>
                            </md-field>
                        </div>
                        <div class="space">
                            <md-field :class="{error: errors.has('amount')}">
                                <label form="amount">sponser amount</label>
                                <md-input name="amount" v-validate="'required'" id="amount" v-model="campaign.value"
                                    type="number"></md-input>
                                <span class="error" v-if="errors.has('amount')">{{errors.first('amount')}}</span>
                            </md-field>
                        </div>
                        <div class="picker">
                            <md-field :class="{error: errors.has('category')}">
                                <label for="category">Select category</label>
                                <md-select v-validate="'required'" v-model="campaign.category" name="category" id="category">
                                    <md-option value="sport">Sports</md-option>
                                    <md-option value="charity">charity</md-option>
                                    <md-option value="autobanner">autobanner</md-option>
                                    <md-option value="magazine">magazine </md-option>
                                    <md-option value="others">others</md-option>
                                </md-select>
                                <span class="error" v-if="errors.has('category')">{{errors.first('category')}}</span>
                            </md-field>
                        </div>
                        <div class="space">
                            <md-field :class="{error: errors.has('city')}">
                                <label for="city">city</label>
                                <md-input v-validate="'required'" name="city" id="city" v-model="campaign.city" type="text"></md-input>
                                <span class="error" v-if="errors.has('city')">{{errors.first('city')}}</span>
                            </md-field>
                        </div>

                        <div class="md-layout-item md-small-size-100 md-size-40">
                            <md-datepicker v-validate="'required'" name="startDate" id="startDate" v-model="campaign.startdate">
                                <label>Start date</label>
                            </md-datepicker>
                            <span class="error" v-if="errors.has('startDate')">{{errors.first('startDate')}}</span>
                        </div>


                        <div class="space">
                            <md-datepicker v-validate="'required'" name="enddate" id="enddate" v-model="campaign.enddate">
                                <label>end date</label>
                            </md-datepicker>
                            <span class="error" v-if="errors.has('enddate')">{{errors.first('enddate')}}</span>
                        </div>
                        <div class="md-layout-item md-size-100 text-right">
                            <button type="submit" class="md-button md-success md-round mt-4 md-theme-default">
                                <div class="md-ripple">
                                    <div class="md-button-content">Add Campaign</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </md-card-content>
        </md-card>
    </form>
</template>
<script>
    export default {
        name: 'edit-profile-form',
        props: {
            dataBackgroundColor: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                campaign: {},
                camimg:null,
                file1:null
            }
        },
        methods: {
          addcampaign() {
            let self = this;
            const {dispatch} = self.$store;
            dispatch('alert/clear', '', {root: true})
           self.$validator.validateAll()
           .then(
             res => {
               if(res) {
                 let data = new FormData();
                 const {title, description, startdate, enddate, value, category, city } = self.campaign;
                 data.append('title', title)
                 data.append('description', description)
                 data.append('startdate', new Date(startdate).getTime())
                 data.append('enddate', new Date(enddate).getTime())
                 data.append('value', value)
                 data.append('category', category)
                 data.append('place', city)
                 data.append('camimg', self.camimg)
                  dispatch('user/addcampaign',data)
               }
             }
           )
          },
          handleFileUpload(e) {
            let self = this;
            self.camimg =  e.target.files[0]
          }
        },
        computed: {
          alert() {
            return this.$store.state.alert
          },
          loading() {
                return this.$store.state.user.loading
          },
        }
    }

</script>
<style>
    .picker {
        width: 40%;
        float: left;
        padding-left: 20px;
    }

    .space {
        width: 50%;

        padding-left: 120px;

    }

</style>
