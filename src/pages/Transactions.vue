<template>
  <div>

    
<div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon >content_copy</md-icon>
          </template>

          <template slot="content">
            <p class="poison">0x05965afbd303de82c7fdd578449ff305bcbe739fb9e97f99023b9b220e4a93a8</p>
         <strong>   <h3 class="title">34,565
               
            </h3>
            </strong>
          </template>

        </stats-card>
      </div>



   <md-card>
<md-card-header data-background-color="orange">
<h4 class="title">Transactions</h4>
<p class="category"></p>
</md-card-header>
<md-card-content>
<ordered-table table-header-color="orange"></ordered-table>

    <md-table v-model="searched" md-sort="to" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
        
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>

       
      </md-table-toolbar>

      <!-- <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
        <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
      </md-table-empty-state> -->

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="DATE" md-sort-by="date">{{ item.date }}</md-table-cell>
         <md-table-cell md-label=" TO" md-sort-by="to">{{ item.to }}</md-table-cell>
       <md-table-cell md-label="ADDRESS"  md-sort-by="address" > <span class="transtable-tag">{{ item.address }}</span></md-table-cell>       
      
   
      <md-table-cell md-label="TRANSFER
      (E-cash)" md-sort-by="transfer">{{ item.transfer }}</md-table-cell>
        
      </md-table-row>
   

     <md-table-pagination
    
     md-size="5"
    md-total="10"
    md-page="1"
    md-label="Rows"
    md-separator="of"
    :md-page-options="[5, 10, 25, 50]"
    
    @pagination="onPagination"></md-table-pagination>
     </md-table>
    </md-card-content>
</md-card>

  </div>
</template>

<script>


import {
  StatsCard
} from '@/components'

  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByTO = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.to).includes(toLower(term)))
    }

    return items
  }




export default{
 
    name: 'TableSearch',
    data: () => ({
      search: null,     
      searched: [],
      users: [
        {
         date:'08-09-2012',
          address: '0x05965afbd303de82c7fdd578449ff305bcbe739fb9e97f99023b9b220e4a93a8',         
          to: "saravana",
          transfer: "1,200",
          
                 },
        {
          date:'05-08-2016',
         address: '0x05965afbd303de82c7fdd578449ff305bcbe739fb9e97f99023b9b220e4a93a8',         
          to: "ulric",
          transfer: "29,474.999999999"
          
        },
        {
            date:'04-03-2013',
         address: '0x05965afbd303de82c7fdd578449ff305bcbe739fb9e97f99023b9b220e4a93a8',         
          to: "daniel",
          transfer: "20,344"
         
        },
        {
          date:'09-06-2017',
         address: '0x5e0077da189486d62d9ffc87014fd8c67c94da0f023dff35fcc9008b6d782e82',         
          to: "dani",
          transfer: "15,000"
          
        },
        {
           date:'08-09-2018',
          address: '0x1bb5ba798e6c753c36ecca457ac3f9733ea6a73fbed96955520add06d70152fd',          
          to: "aathira",
          transfer:"  1,250"
          
        },
        {
          date:'03-02-2016',
          address: '0xeb9b31359cd68e905f6f59c0486cd6e2a2046a9239df3de514f18c5bc4ca663b',          
          to: "dharanya",
          transfer: " 1,250"
          
        },
        {
         date:'03-04-2014',
          address: '0xcd955a90381474f6a1b36873f1a46f64a53832012df273a7b67221a8faac1ce8',          
          to: "malar",
          transfer: "2,775"
           
        },
        {
          date:'09-09-2016',
          address: '0x77b614c6b8f23d5f934712de831f327dd02e66a05ed47d9300dbe0dcc395e8ae',        
          to: "madhesh",
          transfer: " 87,534"
           
        },
       
      ]
    }),
     components: {
    StatsCard,
    
  },
 
    methods: {
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByTO(this.users, this.search)
      }
    },
    created () {
      this.searched = this.users
    }
  }
</script>

<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }
  
  .transtable-tag {
    width: 200px;
    display: inline-block;
    vertical-align: bottom;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: normal;
}
.poison{
    text-overflow: ellipsis;
    overflow: hidden;
      

}
</style>