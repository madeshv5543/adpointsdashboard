<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">View Campaign</h4>
            
          </md-card-header>
          <md-card-content>
            <div id="typography">
               <div class="row">
               <div class="column">
               
                <div class="w3-round-large" style="width:45%">
                    <img src="data:image/png;base64,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">
                  </div>  <br>
        
                <h3 style="color:blue;"><b>&nbsp; Sports Articles</b></h3>
                <h3 style="color:#9c27b0;"><b>&nbsp; 120 ENS</b> </h3> 
                
               <md-card-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </md-card-content>
                
                 <h4 style="color:black;">  &nbsp;<b>&nbsp; &nbsp;1/11/2018</b>&nbsp;&nbsp; to <b>&nbsp;&nbsp;2/12/2018</b></h4>
              
              </div>
                <div class="column">
                  <h3><b> Campaigner Details: </b></h3>

                <h4><li> Sports Articles </li></h4>

                <h4><li> 50-East Coast Street ,</li></h4>
                <h4 style = "text-indent: 30px;"> Adyar </h4>
                <h4 style = "text-indent: 30px;"> Chennai - 647477 </h4>

                <h4><li> skysport@sport.in</li></h4>

                <h4><li> Sky Sport</li></h4>  <br>             
                  
                <button class="button" @click="sponser"> Sponsor</button>
                </div>
                
              </div>
               
           </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  methods:  {
     sponser: function (){
         window.location.href = "http://localhost:8080/#/sponser"
     }
 }
}
</script>

<style>
.column {
    float: left;
    width: 50%;
    padding: 10px;
}
.md-datepicker-header{
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
</style>
