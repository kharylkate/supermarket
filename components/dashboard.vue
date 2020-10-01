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
                                <th>#</th>
                                <th>Product Description</th>
                                <th>Qty</th>
                              </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    1
                                  </td>
                                  <td>Churned Milk 1kg</td>
                                  <td>20</td>
                                </tr>
                                <tr>
                                  <td>
                                    2
                                  </td>
                                  <td>Dairy Meelk</td>
                                  <td>35</td>
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
                        <div class="table table-responsive table-graph" id="funnel-itemchart">

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
import * as CanvasJS from '../node_modules/canvasjs/dist/canvasjs'

export default {
    name: 'dash-board',
    data(){
      return{
        user: {},
        username: localStorage.username,
        role_name: localStorage.role_name,
        points: []
      }
    },
    mounted: function() {
      console.log("inv",this.inventoryList);
      console.log("storage", localStorage);
      // var points = []
      for(var i = 0; i < this.inventoryList.length-1; i++){
        this.points[i].y = this.inventoryList[i].quantity
        this.points[i].label = this.inventoryList[i].product_description
      }
      console.log(this.points);

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
          dataPoints: 
          // this.points
          
          // this.inventoryList[i].quantity
          [
            { y: 40, label: "Churned Milk 1kg" },
            { y: 75, label: "Cadbury 65g" },
            { y: 45, label: "Dairy Meelk 250 mL" },
            { y: 70, label: "Hershey's Chocs 65g"},
            { y: 50, label: "Oreo Cookies"},
            { y: 40, label: "Muck n Cheez"}
          ]
        }]
      });
      chart.render();
    },
    computed: {
        ...mapGetters({
            inventoryCounter: 'inventoryCounter',
            supplierCounter: 'supplierCounter',
            zeroStocks: 'zeroStocks',
            inventoryList: 'inventoryList'
        })
    },
    async beforeCreate() {
      await this.$store.dispatch("fetchInventoryList")
    }
    
}
</script>