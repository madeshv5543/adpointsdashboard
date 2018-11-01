<template>
    <div class="content" v-if="campaign">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">View Campaign</h4>
                    </md-card-header>
                    <md-card-content>
                        <div class="row">
                            <vue-element-loading :active="loading" spinner="bar-fade-scale" color="#5dc596"
                                :is-full-screen="true" />
                            <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                            <div v-if="campaign" id="typography">
                                <div class="row">
                                    <div class="column">
                                        <div class="w3-round-large camp">
                                            <img :src="getImageSrc(campaign.campaignImage)">
                                        </div>
                                        <br>
                                        <h3 style="color:blue;">
                                            <b>&nbsp; {{campaign.title}}</b>
                                        </h3>
                                        <h3 style="color:#9c27b0;">
                                            <b>&nbsp; {{campaign.value}} e-cash</b>
                                        </h3>
                                        <md-card-content>
                                            {{campaign.description}}
                                        </md-card-content>
                                        <h4 style="color:black;"> &nbsp;
                                            <b>&nbsp; &nbsp;{{campaign.startdate | moment("MMMM Do YYYY") }}</b>&nbsp;&nbsp;
                                            to
                                            <b>&nbsp;&nbsp;{{campaign.enddate | moment("MMMM Do YYYY") }}</b>
                                        </h4>
                                    </div>
                                    <div v-if="campaign.sponser" class="column">
                                        <h3>
                                            <b> Sponser Details: </b>
                                        </h3>
                                        <h4>
                                            Name : {{campaign.user.firstName}} {{campaign.user.lastName}}
                                        </h4>
                                        <h4>
                                            Address : {{campaign.user.physicaladdress}}
                                        </h4>
                                        <h4 style="text-indent: 30px;"> {{campaign.user.city}}
                                            -{{campaign.user.pincode}}
                                        </h4>
                                        <h4 style="text-indent: 30px;"> {{campaign.user.country}} </h4>
                                        <h4>
                                            Email : {{campaign.user.email}}
                                        </h4>
                                        <h4>
                                            Company Name : {{campaign.user.companyName}}
                                        </h4>
                                        <br>
                                        <button v-if="!campaign.sponser" type="submit" class="md-button md-success md-round mt-4 md-theme-default">
                                            <div class="md-ripple">
                                                <div class="md-button-content" @click="sponser(campaign._id)">Sponser</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <md-dialog :md-active.sync="showDialog" :md-backdrop="backdrop">
                                    <md-dialog-title>Add Event</md-dialog-title>
                                    <form novalidate @submit.prevent="addevent">
                                        <div class="addec">
                                            <md-field :class="{error: errors.has('title')}">
                                                <label for="title">Subject</label>
                                                <md-input v-validate="'required'" name="title" id="title" v-model="event.title" />
                                                <span class="error" v-if="errors.has('title')">{{errors.first('title')}}</span>
                                            </md-field>
                                            <md-field :class="{error: errors.has('description')}">
                                                <label>Description</label>
                                                <md-textarea v-validate="'required'" name="description" id="desccription"
                                                    v-model="event.description"></md-textarea>
                                                <span class="error" v-if="errors.has('description')">{{errors.first('description')}}</span>
                                            </md-field>
                                            <md-field :class="{error: errors.has('eventimg')}">
                                                <label>File</label>
                                                <md-file v-validate="'required'" @change="handleFileUpload($event)"
                                                    name="eventimg" id="eventimg" v-model="eventfile" />
                                                <span class="eventimg" v-if="errors.has('eventimg')">{{errors.first('description')}}</span>
                                            </md-field>
                                        </div>
                                        <md-dialog-actions>
                                            <md-button class="md-success" @click="hideModal()">Close</md-button>
                                            <md-button class="md-success" type="submit">Save</md-button>
                                        </md-dialog-actions>
                                    </form>
                                </md-dialog>

                                <!-- <md-button v-if="campaign.status != 'Completed' " class="md-success md-raised" @click="showDialog = true">Add Event</md-button> -->
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <md-dialog :md-active.sync="showImgModel">
            <img :src="selectedImg">
        </md-dialog>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Campaign Timeline</h4>
                    </md-card-header>
                    <md-card-content>
                        <div id="timeline-template">
                            <ul class="timeline" v-if="campaign.events.length">
                                <li v-for="item in campaign.events" :key="item._id" lass="timeline-item">
                                    <div v-if="item.image" @click="showImg(item.image)" :class="'timeline-badge ' ">
                                        <img :src="getImageSrc(item.image)">
                                    </div>
                                    <div v-if="!item.image" :class="'timeline-badge ' ">
                                        <img :src="defaultchat">
                                    </div>
                                    <div class="timeline-panel" :class="getmsgclass(item.from, campaign.user.address)">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">{{ item.title }}</h4>
                                            <div class="timeline-panel-controls">
                                                <div class="timestamp">
                                                    <small class="text-muted">{{ item.date | moment("MMMM Do YYYY") }}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline-body">
                                            <div>{{ item.description }}</div>
                                            <div v-if="item.from" class="recname">
                                                <span class="sender" v-if="item.from !== campaign.user.address"> By you</span>
                                                <span class="receiver" v-if="item.from === campaign.user.address"> By
                                                    {{campaign.user.firstName}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div v-if="campaign && campaign.status == 'Completed' " class="alert alert-info">
                            <p class="txhash"> Transaction completed successfully. Transaction Reference number <a
                                    :href="`http://explorer.evenscoin.io/tx/${campaign.txhash.trim()}`">
                                    {{campaign.txhash}} </a></p>
                        </div>
                        <md-button v-if="campaign.status != 'Completed' " class="md-success md-raised" @click="showDialog = true">Add
                            Event</md-button>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout" v-if="campaign && campaign.images && campaign.images.length">
            <div class="md-layout-item">
                <md-card>
                    <md-card-header data-background-color="green">
                        <h4 class="title">Campaign Image Gallery</h4>
                    </md-card-header>
                    <md-card-content>
                        <div class="md-layout">
                            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-20" v-for="(image, imageIndex) in images"
                                :key="imageIndex">
                                <md-card class="cusmd">
                                    <md-card-header class="card-chart">
                                        <div class="hello">
                                            <img @click="index = imageIndex" class="gaimg" :src="image" style="height:150px !important">
                                        </div>
                                    </md-card-header>
                                </md-card>
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
    const params = require('../_helpers/config.js');
    const CONFIG = params.params; 
    export default {
        props: {
            dataBackgroundColor: {
                type: String,
                default: ''
            },
            defaultchat: {
                type: String,
                default: require('@/assets/img/chatimg.jpg')
            },
            gallery: {
                type: String,
                default: require('@/assets/img/gallery.jpg')
            },
        },
        data() {
            return {
                event: {},
                eventimg: null,
                backdrop: false,
                showDialog: false,
                eventfile: null,
                showImgModel: false,
                selectedImg: null,
                index: null
            }
        },
        methods: {
            sponser: function (id) {
                const {
                    dispatch
                } = this.$store;
                dispatch('user/addcampaignsponser', id)
            },
            getmsgclass(a, b) {
                return a === b ? 'rec' : 'send'
            },
            getImageSrc(img) {
                return `${CONFIG.IMGURL}/${img}`
            },
            hideModal() {
                let self = this;
                self.showDialog = false;
                self.event = {}
            },
            addevent() {
                let self = this;
                this.$validator.validateAll()
                    .then(
                        res => {
                            if (res) {
                                let formdata = new FormData();
                                const {
                                    title,
                                    description
                                } = self.event;
                                formdata.append('title', title)
                                formdata.append('description', description)
                                formdata.append('eventimg', self.eventimg)
                                formdata.append('id', self.campaign._id)
                                const {
                                    dispatch
                                } = self.$store;
                                self.showDialog = false;
                                self.event = {}
                                dispatch('user/addevent', {
                                    formdata,
                                    id: self.campaign._id
                                })

                            }
                        }
                    )
            },
            handleFileUpload(e) {
                let self = this;
                self.eventimg = e.target.files[0]
            },
            showImg(img) {
                let self = this;
                self.selectedImg = `${CONFIG.IMGURL}/${img}`
                self.showImgModel = true
            },
        },
        computed: {
            campaign() {
                return this.$store.state.user.selectedCampaign
            },
            alert() {
                return this.$store.state.alert
            },
            loading() {
                return this.$store.state.user.loading
            },
            images() {
                let images = [];
                if (this.campaign.images) {
                    images = this.campaign.images.map(n => {
                        return `${CONFIG.IMGURL}/${n}`
                    });
                }
                return images
            }
        },
        created: function () {
            let self = this
            let id = self.$route.params.id
            const {
                dispatch
            } = self.$store;
            dispatch('user/getCampainerCampaignDetails', id);
        }
    }

</script>

<style scoped>
    .column {
        float: left;
        width: 50%;
        padding: 10px;
    }

    .md-dialog {
        min-width: 500px !important
    }

    .recname span {
        float: right;
    }

    .txhash {
        font-size: 16px;
        font-weight: bold;
    }

    .recname .receiver {
        color: #08d649d4;
        font-weight: bold;
    }

    .recname .sender {
        color: #b91313d4;
        font-weight: bold;
    }

    .md-card img {
        height: 300px !important;
    }

    .timeline-badge img {
        height: 60px !important;
        border-radius: 50%
    }

    .addec {
        padding: 30px
    }

    .gaimg {
        width: 100%;
        height: 200px !important;
    }

    .md-datepicker-header {
        background: black;
    }

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

    #timeline-header {
        font-size: 26px;
    }

    .timeline {
        list-style: none;
        padding: 20px 0 20px;
        position: relative;
    }

    .timeline:before {
        background-color: #eee;
        bottom: 0;
        content: " ";
        left: 50px;
        margin-left: -1.5px;
        position: absolute;
        top: 0;
        width: 3px;
    }

    .timeline>li {
        margin-bottom: 20px;
        position: relative;
    }

    .timeline>li:before,
    .timeline>li:after {
        content: " ";
        display: table;
    }

    .timeline>li:after {
        clear: both;
    }

    .timeline>li>.timeline-panel {
        border-radius: 2px;
        border: 1px solid #d4d4d4;
        box-shadow: 0 1px 2px rgba(100, 100, 100, 0.2);
        margin-left: 100px;
        padding: 20px;
        position: relative;
    }

    .timeline>li>.timeline-panel .timeline-heading .timeline-panel-controls {
        position: absolute;
        right: 8px;
        top: 5px;
    }

    .timeline>li>.timeline-panel .timeline-heading .timeline-panel-controls .timestamp {
        display: inline-block;
    }

    .timeline>li>.timeline-panel .timeline-heading .timeline-panel-controls .controls {
        display: inline-block;
        padding-right: 5px;
        border-right: 1px solid #aaa;
    }

    .timeline>li>.timeline-panel .timeline-heading .timeline-panel-controls .controls a {
        color: #999;
        font-size: 11px;
        padding: 0 5px;
    }

    .timeline>li>.timeline-panel .timeline-heading .timeline-panel-controls .controls a:hover {
        color: #333;
        text-decoration: none;
        cursor: pointer;
    }

    .timeline>li>.timeline-panel .timeline-heading .timeline-panel-controls .controls+.timestamp {
        padding-left: 5px;
    }

    .timeline>li .timeline-badge {
        background-color: #999;
        border-radius: 50%;
        color: #fff;
        font-size: 1.4em;
        height: 50px;
        left: 50px;
        line-height: 52px;
        margin-left: -30px;
        position: absolute;
        text-align: center;
        top: 16px;
        width: 60px;
        z-index: 100;
    }

    .timeline>li .timeline-badge+.timeline-panel:before {
        border-bottom: 15px solid transparent;
        border-left: 0 solid #ccc;
        border-right: 15px solid #ccc;
        border-top: 15px solid transparent;
        content: " ";
        display: inline-block;
        position: absolute;
        left: -15px;
        right: auto;
        top: 26px;
    }

    .timeline>li .timeline-badge+.timeline-panel:after {
        border-bottom: 14px solid transparent;
        border-left: 0 solid #fff;
        border-right: 14px solid #fff;
        border-top: 14px solid transparent;
        content: " ";
        display: inline-block;
        position: absolute;
        left: -14px;
        right: auto;
        top: 27px;
    }

    .timeline-badge.primary {
        background-color: #2e6da4 !important;
    }

    .timeline-badge.success {
        background-color: #3f903f !important;
    }

    .timeline-badge.warning {
        background-color: #f0ad4e !important;
    }

    .timeline-badge.danger {
        background-color: #d9534f !important;
    }

    .timeline-badge.info {
        background-color: #5bc0de !important;
    }

    .timeline-title {
        margin-top: 0;
        color: inherit;
    }

    .timeline-body>p,
    .timeline-body>ul {
        margin-bottom: 0;
    }

    .timeline-body>p+p {
        margin-top: 5px;
    }

    .copy {
        position: absolute;
        top: 5px;
        right: 5px;
        color: #aaa;
        font-size: 11px;
    }

    .copy>* {
        color: #444;
    }

</style>
