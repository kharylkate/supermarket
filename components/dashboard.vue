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
                        <h3 class="text-right ml-auto">{{itemCounter}}</h3>
                      </div>
                      <div class="card-footer bg-white"><small></small></div>
                    </div>
                  </div>
                  <div class="small-box col-md-4 m-0">
                    <div class="card col m-3">
                      <div class="card-body d-flex">
                        <div class="row">
                          <h3 class="text-left">SUPPLIES</h3>
                        </div>
                        <h3 class="text-right ml-auto">6</h3>
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
                        <h3 class="text-right ml-auto">0</h3>
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
                              <tbody>
                                <tr>
                                  <td>
                                    1
                                  </td>
                                  <td>Churned Milk 1kg</td>
                                  <td>40</td>
                                </tr>
                                <tr>
                                  <td>
                                    2
                                  </td>
                                  <td>Muck n Cheez</td>
                                  <td>40</td>
                                </tr>
                              </tbody>
                              
                            </thead>
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

export default {
    name: 'dash-board',
    computed: {
        ...mapGetters([
            'itemCounter'
        ])
    }
    
}
</script>