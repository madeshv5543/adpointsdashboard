<template>
    <div class="content">
        <div class="md-layout">
        <md-card class="md-card-plain">
            <md-card-header data-background-color="green">
                <h4 class="title">All Campaigns</h4>
            </md-card-header>
        </md-card>
            <md-content class="nocamp" v-if="!campaigns.length">
                <div class="nocampc">
                    <h3>No Campaigns Available</h3>
                </div>
            </md-content>
            <div v-for="campaign in campaigns" :key="campaign._id" class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
                <campaign-card :campaign="campaign" data-background-color="red"></campaign-card>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        CampaignCard,
    }

    from "@/components";

    export default {
        components: {
            CampaignCard,
        }

        ,
        data() {
            return {}
        }

        ,
        methods: {
            view: function () {
                    window.location.href = "http://localhost:8080/#/viewcampaign"
                }

                ,
            sponser: function () {
                window.location.href = "http://localhost:8080/#/sponser"
            }
        }

        ,
        computed: {
            campaigns() {
                return this.$store.state.user.allcampaigns
            }

            ,
            alert() {
                return this.$store.state.alert
            }
        }

        ,
        created: function () {
            let self = this;
            const {
                dispatch
            } = self.$store;
            dispatch('user/getAllcampaign');
        }
    }

    ;

</script>
<style>
    .md-card-img {
        width: 100%;
        height: 170px;
    }

    .nocamp {
        width: 100%;
        min-height: 400px
    }

    .nocampc h3 {
        margin: auto;
        text-align: center;
    }

    .nocampc {
        display: flex;
        width: 50%;
        min-height: 400px;
        margin: auto;
    }

</style>
