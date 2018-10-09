<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="green">
          <template slot="header">
                  <md-icon >store</md-icon>
</template>

<template slot="content">
  <p class="category">
    BALANCE</p>
  <h3 class="title">{{balance}} ENS</h3>
</template>

</stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
      
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
       
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
       
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-49">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Transactions</h4>
            <p class="category"></p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
     
    </div>
  </div>
</template>

<script>
  import {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  } from '@/components'
  
  export default {
    components: {
      StatsCard,
      ChartCard,
      NavTabsCard,
      NavTabsTable,
      OrderedTable
    },
    data() {
      return {
  
        balance: 20000000
      }
  
    }
  }
</script>

