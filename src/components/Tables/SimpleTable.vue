<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Sno">{{ item.sno }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Amount(e-cash)">{{ item.amt }}</md-table-cell>
        <a class="delete" @click="remove"> <strong>X</strong></a>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'simple-table',
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
        {
          name: 'Dakota Rice',
          amt: '36,738',
          sno: 1,
        
        },
        {
          name: 'Minerva Hooper',
          amt: '23,738',
          sno: 2,
        },
        {
          name: 'Sage Rodriguez',
          amt: '56,142',
          sno: 3,
        },
        {
          name: 'Philip Chaney',
          amt: '38,735',
          sno: 4,
        },
        {
          name: 'Doris Greene',
          amt: '63,542',
          sno: 5,
        },
        {
          name: 'Mason Porter',
          amt: '78,615',
          sno: 6,
        }
      ]
    }
  },
   methods: {
    remove: function (index) {
     this.users.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.delete{
  line-height: 4;
  cursor: pointer !important;
  
}
</style>