<template>
    <div class="content">
        <md-card class="md-card-plain">
            <md-card-header data-background-color="green">
                <h4 class="title">My Campaigns</h4> 
            </md-card-header>
        </md-card>
        <div class="md-layout">
            <md-content class="nocamp" v-if="!campaigns.length">
                <div class="nocampc">
                    <h3>No Campaigns Available</h3>
                </div>
            </md-content>
            <div v-for="campaign in campaigns" :key="campaign._id" class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
                <md-card>

                    <md-card-header class="card-chart">
                        <div class="hello">

                            <img :src="getImageSrc(campaign.campaignImage)">

                        </div>

                    </md-card-header>

                    <md-card-content class="txt-ov">
                        <div class="md-card-action-buttons text-center">
                            <button @click="viewCampaign(campaign._id)" type="button" title="View" class="md-button md-simple md-just-icon md-theme-default">
                                <div class="md-ripple">
                                    <div class="md-button-content"><i class="md-icon md-icon-font md-theme-default">art_track</i></div>
                                </div>
                            </button>
                            <button v-if="!campaign.sponser" @click="editCampaign(campaign._id)" type="button" title="Edit"
                                class="md-button md-success md-simple md-just-icon md-theme-default">
                                <div class="md-ripple">
                                    <div class="md-button-content"><i class="md-icon md-icon-font md-theme-default">edit</i></div>
                                </div>
                            </button>
                        </div>
                        <h4>{{campaign.title}}</h4>
                        <p>{{campaign.description}}</p>
                    </md-card-content>
                    <div class="md-card-actions md-alignment-space-between">
                        <div class="price">
                            <h4>{{campaign.value}} e-cash</h4>
                        </div>
                        <div class="stats">
                            <p class="category"><i class="md-icon md-icon-font md-theme-default">place</i>
                                {{campaign.place}}
                            </p>
                        </div>
                    </div>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
    const params = require('../_helpers/config.js');
    const CONFIG = params.params;
    export default {
        data() {
            return {}
        },
        methods: {
            getImageSrc(img) {
                console.log(params)
                return `${CONFIG.IMGURL}/${img}`
            },
            editCampaign(id) {
                this.$router.push({
                    name: 'EditCampaign',
                    params: {
                        id
                    }
                })
            },
            viewCampaign(id) {
                this.$router.push({
                    name: 'campaign',
                    params: {
                        id
                    }
                })
            }
        },
        computed: {
            campaigns() {
                return this.$store.state.user.mycampaigns
            },
            alert() {
                return this.$store.state.alert
            }
        },
        created: function () {
            let self = this
            const {
                dispatch
            } = self.$store;
            dispatch('user/getMyCampaignlist');
        }
    }

</script>
<style scoped>
    .md-card img {
        width: 100%;
        height: 200px;
    }

    .md-card .price {
        color: #000000;
        font-size: 18px;
    }

    .txt-ov {
        overflow: hidden;
        height: 200px
    }

</style>
