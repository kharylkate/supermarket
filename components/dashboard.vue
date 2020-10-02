<template>
    <div id="dash-board" role="main" class="main-content col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
    <!-- <main role="main" class="main-content col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light"> -->
        
        
        <div class="container-fluid">
            <div class="">
                <!-- <div class=""> -->
                    <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                        <h4 class="text-uppercase">Dashboard</h4>
                    </div>
                <!-- </div> -->

              <div class="d-flex bg-white"> 
                <div class="row col-md-12 d-flex">
                  <div class="small-box col-md-4 m-0">
                    <div class="card col m-3">
                      <div class="card-body d-flex">
                        <div class="row">
                          <h3 class="text-left">STOCKS</h3>
                        </div>
                        <h3 class="text-right ml-auto">{{inventoryCounter}}</h3>
                      </div>
                      <div class="card-footer bg-white"><small></small></div>
                    </div>
                  </div>
                  <div class="small-box col-md-4 m-0">
                    <div class="card col m-3">
                      <div class="card-body d-flex">
                        <div class="row">
                          <h3 class="text-left">SUPPLIERS</h3>
                        </div>
                        <h3 class="text-right ml-auto">{{supplierCounter}}</h3>
                      </div>
                      <div class="card-footer bg-white"><small></small></div>
                    </div>
                  </div>
                  <div class="small-box col-md-4 m-0">
                    <div class="card col m-3">
                      <div class="card-body d-flex">
                        <div class="row">
                          <h3 class="text-left">ZERO STOCKS</h3>
                        </div>
                        <h3 class="text-right ml-auto">{{zeroStocks}}</h3>
                      </div>
                      <div class="card-footer bg-white"><small></small></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex bg-white"> 
                <div class="row col-md-12">
                  <div class="col-md-4 mb-3 mt-3 ml-3">
                    <div class="big-box m-0">
                      <div class="card col-md-12">
                        <div class="card-header bg-white">Low Stock Products</div>
                        <div class="table-responsive low-stock">
                          <table class="table table-hover table-borderless">
                            <thead>
                              <tr>
                                <th>Product Description</th>
                                <th>Qty</th>
                              </tr>
                              </thead>
                              <tbody>
                                <tr v-for="low in lowStocks" :key="low.id">
                                  <td>{{low.product_description}}</td>
                                  <td>{{low.quantity}}</td>
                                </tr>
                              </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8 row mb-3 mt-3">
                    <div class="big-box ml-3">
                      <div class="card col-md-12">
                        <div class="card-header bg-white">Quantity Per Items</div>
                        <!-- <div class="table table-responsive table-graph" id="myChart">

                        </div> -->
                        <div class="small">
                          <line-chart :chart-data="datacollection"></line-chart>
                          <button @click="fillData()">Randomize</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
            </div>
        </div>
    <!-- </main> -->
    <div class="modal fade" id="defaultPass" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="">
              <div>
                <div class="form-group">
                  <label for="new">New Password</label>
                  <input type="password" v-model="user.password" class="form-control form-control-sm">
                </div>
                <div class="form-group">
                  <label for="new">Confirm Password</label>
                  <input type="password" v-model="user.password_confirm" class="form-control form-control-sm">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import { mapGetters } from 'vuex';
import { LineChart } from '../node_modules/vue-chartjs/dist/vue-chartjs' //'../node_modules/vue-chartjs/dist/vue-chartjs'
import * as CanvasJS from '../node_modules/canvasjs/dist/canvasjs'

export default {
    name: 'dash-board',
    components: { LineChart },
    data(){
      return{
        user: {},
        username: localStorage.username,
        role_name: localStorage.role_name,
        points: [],
        // arrr: this.inventoryList
        datacollection: null
      }
    },
    computed: {
      ...mapGetters({
        inventoryCounter: 'inventoryCounter',
        supplierCounter: 'supplierCounter',
        zeroStocks: 'zeroStocks',
        inventoryList: 'inventoryList',
        lowStocks: 'lowStocks'
      })
    },
    mounted() {
      this.fillData()
      

     
    },

    methods: {
      fillData() {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      onLoad() {
        console.log("inv",this.inventoryList);
        console.log("storage", localStorage);
        // console.log(this.arrr);
        var dataPointers = []

        for(var i = 0; i < this.inventoryList.length; i++){
          dataPointers.push({
            y: this.inventoryList[i].quantity,
            label: this.inventoryList[i].product_description
          })
          // dataPointers.push({
          //   'y': this.inventoryList[i].quantity, 'label': this.inventoryList[i].product_description
          // })
        }

        console.log("datapoints", dataPointers);


        var chart = new CanvasJS.Chart("funnel-itemchart", {
          animationEnabled: true,
          title:{
            text: "",
            horizontalAlign: "left"
          },

          data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: dataPointers
            // [
            //   { y: 40, label: "Churned Milk 1kg" },
            //   { y: 75, label: "Cadbury 65g" },
            //   { y: 45, label: "Dairy Meelk 250 mL" },
            //   { y: 70, label: "Hershey's Chocs 65g"},
            //   { y: 50, label: "Oreo Cookies"},
            //   { y: 40, label: "Muck n Cheez"}
            // ]
          }]
        });
        
        
        chart.render();
      },



    },

    async beforeCreate() {
      await this.$store.dispatch("fetchInventoryList")
    }
    
}
</script>