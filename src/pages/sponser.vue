<template>
<form>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Sponser</h4>
 <!--           <p class="category">Created using Roboto Font Family</p>    -->
          </md-card-header>
         <md-card-content>
            <div id="typography">
               <div class="title">

               
                
                
                
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>From</label>
                    <md-input v-model="disabled" disabled type="text"></md-input>
                    <span class="md-helper-text">Eth address</span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>To</label>
                    <md-input v-model="disabled" disabled type="text"></md-input>
                    <span class="md-helper-text">Eth address</span>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>Amount</label>
                    <md-input v-model="disabled" disabled type="number"></md-input>
                  </md-field>
                </div>
                <button class="button" @click="transfer">Sponsor</button>
                
                

                




                

                   
               </div>
               
               
           </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
export default{
      data: () => ({
      disabled: null
   }),
    methods:  {
     transfer: function (){
         window.location.href = "http://localhost:8080/#/transfer"
     }
 }
}
</script>

