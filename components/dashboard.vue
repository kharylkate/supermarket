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
                                  <td>{{low.qty}}</td>
                                </tr>
                                <!-- <tr>
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
                                </tr> -->
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
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import { mapGetters } from 'vuex';
// import CanvasJS from 'canvasjs';


export default {
    name: 'dash-board',
    data(){
      return{
        username: localStorage.username,
        role_name: localStorage.role_name
      }
    }, 
    mounted() {
    //   var chart = new CanvasJS.Chart("funnel-itemchart", {
    //     animationEnabled: true,
    //     title:{
    //         text: "",
    //         horizontalAlign: "left"
    //     },
    //     data: [{
    //         type: "doughnut",
    //         startAngle: 60,
    //         //innerRadius: 60,
    //         indexLabelFontSize: 17,
    //         indexLabel: "{label} - #percent%",
    //         toolTipContent: "<b>{label}:</b> {y} (#percent%)",
    //         dataPoints: [
    //             { y: 40, label: "Churned Milk 1kg" },
    //             { y: 75, label: "Cadbury 65g" },
    //             { y: 45, label: "Dairy Meelk 250 mL" },
    //             { y: 70, label: "Hershey's Chocs 65g"},
    //             { y: 50, label: "Oreo Cookies"},
    //             { y: 40, label: "Muck n Cheez"}
    //         ]
    //     }]
    // });
    // chart.render();
    },
    computed: {
        ...mapGetters([
            'inventoryCounter',
            'supplierCounter',
            'zeroStocks',
            'lowStocks'
        ])
    },
    methods: {

    }
    
}
</script>