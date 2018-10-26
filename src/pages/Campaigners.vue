<template>
  <div class="content">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Sponsored Campaigners</h4>
          </md-card-header>        
        </md-card>
        <md-content class="nocamp" v-if="!campaigns.length">
            <div class="nocampc">
                <h3>No Campaigns Available</h3>
            </div>
        </md-content>
    <div class="md-layout">
      <div v-for="campaign in campaigns" :key="campaign._id" class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card
          :campaign="campaign"
          data-background-color="blue">
        </chart-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
    ChartCard
  } from '@/components'

export default {
  components: {
      ChartCard,
      },
  data () {
    return {
    }
  },
  computed: {
      campaigns() {
        return this.$store.state.user.campaigns
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
      dispatch('user/getCampaignlist');
    }
}
</script>