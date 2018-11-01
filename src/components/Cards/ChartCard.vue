<template>
    <md-card>

        <md-card-header class="card-chart">
            <div class="hello">

                <img :src="getImageSrc(campaign.campaignImage)">

            </div>

        </md-card-header>

        <md-card-content class="txt-ov">
            <div class="md-card-action-buttons text-center">
                <!----><button @click="viewCampaign(campaign._id)" type="button" title="View" class="md-button md-simple md-just-icon md-theme-default">
                    <div class="md-ripple">
                        <div class="md-button-content"><i class="md-icon md-icon-font md-theme-default">art_track</i></div>
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
</template>
<script>
    const params = require('../../_helpers/config.js');
    const CONFIG = params.params;
    export default {
        name: 'chart-card',
        props: {
            campaign: {
                type: Object
            },
            dataBackgroundColor: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                chartId: 'no-id'
            }
        },
        methods: {
            getImageSrc(img) {
                return `${CONFIG.IMGURL}/${img}`
            },
            viewCampaign(id) {
                let self = this;
                self.$router.push({
                    name: 'viewCampaign',
                    params: {
                        id
                    }
                })
            }
        },
        mounted() {

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

    /* .hello:hover{
    transform: translate3d(0,-50px,0);
} */

    /* .md-card .md-card-action-buttons {
    left: 15px;
    position: absolute;
    text-align: center;
    top: 140px;
    width: calc(100% - 30px);
    z-index: -1;
}

 .card-chart:hover{
        transform: translate3d(0,-50px,0);
}

.md-card-action-buttons:hover .card-chart {
    transform: translate3d(0,-50px,0);
} */

</style>
