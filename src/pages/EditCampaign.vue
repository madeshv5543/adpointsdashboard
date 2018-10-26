<template>
    <form>
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
                        <div class="space" v-if="!campaign.campaignImage">
                            <md-field :class="{error: errors.has('campimg')}">

                                <md-file name="campimg" v-validate="'required'" id="campimg" v-model="file1" @change="handleFileUpload($event)"
                                    placeholder="upload compaign image" />
                                <span class="error" v-if="errors.has('image')">{{errors.first('campimg')}}</span>
                            </md-field>
                        </div>
                        <div class="space" v-if="campaign.campaignImage">
                            <md-field>
                                <md-file name="image" v-validate="'required'" id="campimg" v-model="campaign.campaignImage"
                                   disabled  placeholder="upload compaign image" />
                                <button @click="removeimage()" type="button" class="md-button md-icon-button md-dense md-input-action md-clear md-theme-default"
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
                                <md-input v-validate="'required'" name="city" id="city" v-model="campaign.place" type="text"></md-input>
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
                                    <div class="md-button-content">Update Campaign</div>
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
                camimg: null,
                file1: null
            }
        },
        methods: {
            addcampaign() {
                let self = this;
                const {
                    dispatch
                } = self.$store;
                dispatch('alert/clear', '', {
                    root: true
                })
                self.$validator.validateAll()
                    .then(
                        res => {
                            debugger;
                            if (res) {
                                let data = new FormData();
                                const {
                                    title,
                                    description,
                                    startdate,
                                    enddate,
                                    value,
                                    category,
                                    place,
                                    campaignImage
                                } = self.campaign;
                                data.append('title', title)
                                data.append('description', description)
                                data.append('startdate', new Date(startdate).getTime())
                                data.append('enddate', new Date(enddate).getTime())
                                data.append('value', value)
                                data.append('category', category)
                                data.append('place', place)
                                if(!campaignImage) {
                                    data.append('camimg', self.camimg)
                                }
                                dispatch('user/updatecampaign',{
                                    data, id:self.campaign._id
                                })
                            }
                        }
                    )
            },
            handleFileUpload(e) {
                let self = this;
                self.camimg = e.target.files[0]
            },
            removeimage(){
                this.campaign.campaignImage=null;
            }
        },
        computed: {
            alert() {
                return this.$store.state.alert
            },
            campaign() {
                return this.$store.state.user.selectedCampaign
            }
        },
        created: function () {
            let self = this;
            let id = self.$route.params.id
            const {
                dispatch
            } = self.$store;
            dispatch('user/getCampaignDetails', id);
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
