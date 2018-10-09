<template>
  <form>
    <md-card>
    <md-card-header data-background-color="orange">
        <h4 class="title">Add Compaign</h4>
        <p class="category">Complete your form</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <!-- <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Company (disabled)</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
          </div> -->
          <div class="picker">
            <md-field>
              <label>Title</label>
              <md-input v-model="Title" type="text"></md-input>
            </md-field>
          </div>
          <div class="space">
            <md-field>
             
              <md-file v-model="placeholder" placeholder="upload compaign image" />
            </md-field>
          </div>
          <div class="picker">
            <md-field>
              <label>Description</label>
              <md-textarea v-model="textarea"></md-textarea>
            </md-field>
          </div>
             <div class="space" >
            <md-field>
              <label>sponser amount</label>
              <md-input v-model="sponseramount" type="text"></md-input>
            </md-field>
          </div>
           <div class="picker">
            <md-field>
              <label>category</label>
              <md-input v-model="category" type="text"></md-input>
            </md-field>
          </div>
              <div class="space">
            <md-field>
              <label>city</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
         
<div class="md-layout-item md-small-size-100 md-size-40">
                 <md-datepicker v-model="selectedDate1">
                   <label>Start date</label>
                 </md-datepicker>
               </div>
          
         
<div class="space">
                 <md-datepicker v-model="selectedDate1">
                   <label>end date</label>
                 </md-datepicker>
               </div>
           <md-button class="md-dense md-raised md-primary">Add Compaigners</md-button>

           
           
           

          <!-- <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>About Me</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Update Profile</md-button>
          </div> -->
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: 'edit-profile-form',
  name: 'BasicDatepicker',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      Description: null,
      selectedDate: null,
      
    }
  },
   computed: {
      startdate: {
        get () {
          return this.$material.locale.startdate
        },
        set (val) {
          this.$material.locale.startdate = val
        }
      }
    }
}

</script>
<style>
.picker{
    width:40%;
    float:left;
    padding-left:20px;
}
.space{
    width:50%;
    
    padding-left:120px;
    
}

</style>