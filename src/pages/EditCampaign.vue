<template>
    <div v-if="campaign">
         <vue-element-loading :active="loading" spinner="bar-fade-scale" color="#5dc596"   :is-full-screen="true"/>
        <form>
            <md-card>
                <md-card-header data-background-color="orange">
                    <h4 class="title">Edit Compaign</h4>
                    <p class="category">Complete your form</p>
                </md-card-header>

                <md-card-content>
                    <form novalidate @submit.prevent="addcampaign">
                        <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                        <div class="md-layout">
                            <div class="picker">
                                <md-field :class="{error: errors.has('title')}">
                                    <label id="title">Title</label>
                                    <md-input name="title" id="title" v-validate="'required'" v-model="campaign.title"
                                        type="text"></md-input>
                                    <span class="error" v-if="errors.has('title')">{{errors.first('title')}}</span>
                                </md-field>
                            </div>
                            <div class="space" v-if="!campaign.campaignImage">
                                <md-field :class="{error: errors.has('campimg')}">

                                    <md-file name="campimg" v-validate="'required'" id="campimg" v-model="file1"
                                        @change="handleFileUpload($event)" placeholder="upload compaign image" />
                                    <span class="error" v-if="errors.has('image')">{{errors.first('campimg')}}</span>
                                </md-field>
                            </div>
                            <div class="space" v-if="campaign.campaignImage">
                                <md-field>
                                    <md-file name="image" v-validate="'required'" id="campimg" v-model="campaign.campaignImage"
                                        disabled placeholder="upload compaign image" />
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
                                    <md-input v-validate="'required'" name="city" id="city" v-model="campaign.place"
                                        type="text"></md-input>
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

        <md-card>
            <md-card-header data-background-color="orange">
                <h4 class="title">Add Images</h4>
                <p class="category">Add images to campaign gallery</p>
            </md-card-header>
            <md-card-content>
                <div v-if="isSuccess">
                    <button type="button" @click="reset" class="md-button md-success md-round mt-4 md-theme-default">
                        <div class="md-ripple">
                            <div class="md-button-content">Upload </div>
                        </div>
                    </button>
                </div>
                <div v-if="deleteArray.length">
                    <button type="button" @click="deleteImages" class="md-button md-success md-round mt-4 md-theme-default">
                        <div class="md-ripple">
                            <div class="md-button-content">delete ( {{deleteArray.length}} image )</div>
                        </div>
                    </button>
                </div>
                <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                    <h1>Upload images</h1>
                    <div class="dropbox">
                        <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                            accept="image/*" class="input-file">
                        <p v-if="isInitial">
                            Drag your file(s) here to begin<br> or click to browse
                        </p>
                        <p v-if="isSaving">
                            Uploading {{ fileCount }} files...
                        </p>
                    </div>
                </form>
                <gallery :images="images" :index="index" @close="index = null"></gallery>
                <div class="md-layout">
                    <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-20" v-for="(image, imageIndex) in images"
                        :key="imageIndex">
                        <md-card class="cusmd">
                            <md-card-header class="card-chart">
                                <div class="hello">
                                <label class="delcontainer">
                                    <input type="checkbox" @click="addtodelete(image)" :checked="checkdelete(image)">
                                    <span class="checkmark"></span>
                                </label>
                                    <img  @click="index = imageIndex" class="gaimg" :src="image">
                                </div>

                            </md-card-header>
                        </md-card>
                    </div>
                </div>
            </md-card-content>

        </md-card>
    </div>
</template>
<script>
    const params = require('../_helpers/config.js');
    const CONFIG = params.params; 
    const STATUS_INITIAL = 0,
        STATUS_SAVING = 1,
        STATUS_SUCCESS = 2,
        STATUS_FAILED = 3;
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
                file1: null,
                uploadedFiles: [],
                uploadError: null,
                uploadFieldName: 'photos',
                fileCount: '',
                index: null
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
                                if (!campaignImage) {
                                    data.append('camimg', self.camimg)
                                }
                                dispatch('user/updatecampaign', {
                                    data,
                                    id: self.campaign._id
                                })
                            }
                        }
                    )
            },
            checkdelete(img) {
                return this.deleteArray.includes(img) ? 'checked':''
            },
            handleFileUpload(e) {
                let self = this;
                self.camimg = e.target.files[0]
            },
            addtodelete(img){
                const { commit } = this.$store
                if(this.deleteArray.includes(img)) {
                    let samarray = this.deleteArray.filter(n => {
                      return  n != img
                    })
                    commit('user/emptydeletarray', samarray)
                }else {
                    commit('user/additemDelete', img)
                }
            },
            removeimage() {
                this.campaign.campaignImage = null;
            },
            reset() {
                const {
                    commit
                } = this.$store;
                // reset form to initial state
                commit('user/uploadstatus', STATUS_INITIAL)
                this.uploadedFiles = [];
                this.uploadError = null;
            },
            deleteImages() {
                let self = this;
                const {dispatch, commit} = self.$store;
                  commit('user/setloading', true)
                let images = this.deleteArray.map( n => {
                    let imar = n.split('/');
                    return imar[imar.length -1]
                })
                console.log("images", images)
         

                dispatch('user/deletecamapignimgs',{images:images, id: self.campaign._id})
            },
            save(formData) {
                let self = this
                const {
                    dispatch,
                    commit
                } = self.$store;
                // upload data to the server
                commit('user/uploadstatus', STATUS_SAVING);

                dispatch('user/addcampaignimg', {
                    formData,
                    id: self.campaign._id
                })
            },
            filesChange(fieldName, fileList) {
                // handle file changes
                const formData = new FormData();

                if (!fileList.length) return;

                // append the files to FormData
                Array
                    .from(Array(fileList.length).keys())
                    .map(x => {
                        formData.append(fieldName, fileList[x], fileList[x].name);
                    });

                // save it
                this.save(formData);
            }

        },
        computed: {
            alert() {
                return this.$store.state.alert
            },
            campaign() {
                return this.$store.state.user.selectedCampaign
            },
            deleteArray( ) {
                return this.$store.state.user.deleteimagArray
            },
            currentStatus() {
                return this.$store.state.user.currentStatus
            },
            loading() {
                 return this.$store.state.user.loading
            },
            campaignImgs() {
                return this.campaign.images
            },
            isInitial() {
                return this.currentStatus === STATUS_INITIAL;
            },
            isSaving() {
                return this.currentStatus === STATUS_SAVING;
            },
            isSuccess() {
                return this.currentStatus === STATUS_SUCCESS;
            },
            isFailed() {
                return this.currentStatus === STATUS_FAILED;
            },
            images() {
                let images = [];
                if(this.campaign.images && this.campaign.images.length) {
                    images = this.campaignImgs.map(n => {
                        return `${CONFIG.IMGURL}/${n}`
                    });
                }
                return images
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

    .gaimg {
        width: 100%;
        height: 150px !important;
    }

    dropbox {
        outline: 2px dashed grey;
        /* the dash box */
        outline-offset: -10px;
        background: lightcyan;
        color: dimgray;
        padding: 10px 10px;
        min-height: 200px;
        /* minimum height */
        position: relative;
        cursor: pointer;
    }

    .input-file {
        opacity: 0;
        /* invisible but it's there! */
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }

    .dropbox:hover {
        background: lightblue;
        /* when mouse over to the drop zone, change color */
    }

    .dropbox p {
        font-size: 1.2em;
        text-align: center;
        padding: 50px 0;
    }

    .delcontainer {
    display: block;
    position: absolute;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.delcontainer input {
    position: relative;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
}

/* On mouse-over, add a grey background color */
.delcontainer:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.delcontainer input:checked ~ .checkmark {
    background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.delcontainer input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.delcontainer .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

</style>
