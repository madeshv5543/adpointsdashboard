<template>
  <div>
    <h4 style="text-align:center">No data available</h4>
    <!-- <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }"  @click="routerLink" class="mouse">
        <md-table-cell md-label="SNo.">{{ item.sno }} </md-table-cell>
        <md-table-cell md-label="Name" >{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Value(e-cash)">{{ item.value }} </md-table-cell>
        
      </md-table-row>
    </md-table> -->
  </div>
</template>

<script>
export default {
  name: 'ordered-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      users: [
      ]
    }
  },
  methods: {
    routerLink: function () {
       window.location.href = "http://localhost:8080/#/transactions"
    }
  }
}
</script>
<style scoped>
.mouse{
   cursor: pointer;
}
</style>

