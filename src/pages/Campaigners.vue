<template>
  <div class="content">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Campaigners</h4>
          </md-card-header>        
        </md-card>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          chart-image="https://www.marketingdonut.co.uk/sites/default/files/how-promote-your-business-writing-killer-case-study200938151.jpg" 
          data-background-color="blue">
          <template slot="content">
            <h4 class="title">Title</h4>
              <p> Amount: <strong>37 ENS </strong></p>
          </template>

          <template slot="footer">
            <div class="stats">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
           chart-image="https://mk0ninjaoutreacgog6y.kinstacdn.com/wp-content/uploads/2017/03/Advertising-strategy.jpg"
          data-background-color="red">
          <template slot="content">
            <h4 class="title">Title</h4>
              <p> Amount: <strong>12 ENS </strong></p>
          </template>

          <template slot="footer">
            <div class="stats">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="dataCompletedTasksChart.data"
          :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Line'"
           chart-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0IpuIFZzOVl6zBRQ07AirKqlcb8HWTTBnOf5oRCO1O_fg8I1"
          data-background-color="green">
          <template slot="content">
            <h4 class="title">Title</h4>
              <p> Amount: <strong>25 ENS </strong></p>
          </template>

          <template slot="footer">
            <div class="stats">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
           chart-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDl_R1VEfH69n6_-QpK7QPhk-m4MXK6aaHHUhcbjCU3Fa2bbc9MQ"
          data-background-color="blue">
          <template slot="content">
            <h4 class="title">Title</h4>
              <p> Amount: <strong>80 ENS </strong></p>
          </template>

          <template slot="footer">
            <div class="stats">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
           chart-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0IpuIFZzOVl6zBRQ07AirKqlcb8HWTTBnOf5oRCO1O_fg8I1"
          data-background-color="blue">
          <template slot="content">
            <h4 class="title">Title</h4>
              <p> Amount: <strong>65 ENS </strong></p>
          </template>

          <template slot="footer">
            <div class="stats">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
           chart-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDl_R1VEfH69n6_-QpK7QPhk-m4MXK6aaHHUhcbjCU3Fa2bbc9MQ"
          data-background-color="blue">
          <template slot="content">
            <h4 class="title">Title</h4>
              <p> Amount: <strong>120 ENS </strong></p>
          </template>

          <template slot="footer">
            <div class="stats">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </template>
        </chart-card>
      </div>  
      
    </div>
  </div>
</template>

<script>
import {
    ChartCard
  } from '@/components'

export default{
  components: {
      ChartCard,
      },
  data () {
    return {
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 23, 18, 38]
          ]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [
            [230, 750, 450, 300, 280, 240, 200, 190]
          ]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      }
    }
  }
}
</script>