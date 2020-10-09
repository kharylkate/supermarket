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
                <div class="row col-md-12 mt-3 mx-auto">
                  <div class="small-box col-md-4">
                    <div class="card col">
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
                    <div class="card col">
                      <div class="card-body d-flex">
                        <div class="row">
                          <h3 class="text-left">SUPPLIERS</h3>
                        </div>
                        <h3 class="text-right ml-auto">{{supplierCounter}}</h3>
                      </div>
                      <div class="card-footer bg-white"><small></small></div>
                    </div>
                  </div>
                  <div class="small-box col-md-4">
                    <div class="card col">
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
                <div class="row col-md-12 mt-3 mx-auto">
                  <div class="col-md-12 mb-3">
                    <div class="big-box">
                      <div class="card col-md-12">
                        <div class="card-header bg-white">Low Stock Products</div>
                        <div class="table-responsive low-stock">
                          <table class="table table-hover table-borderless">
                            <thead>
                              <tr>
                                <th>Barcode</th>
                                <th>Product Description</th>
                                <th>Unit Cost</th>
                                <th>Sales Cost</th>
                                <th>Quantity</th>
                              </tr>
                              </thead>
                              <tbody v-if="lowStocks != null">
                                <tr v-for="low in lowStocks" :key="low.id">
                                  <td>{{ low.barcode }}</td>
                                  <td>{{low.product_description}}</td>
                                  <td>{{low.unit_cost}}</td>
                                  <td>{{low.sales_cost}}</td>
                                  <td>{{low.quantity}}</td>
                                </tr>
                              </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="col-md-8 mb-3">
                    <div class="big-box">
                      <div class="card col-md-12">
                        <div class="card-header bg-white">Quantity Per Items</div>
                        <Doughnut />
                      </div>
                    </div>
                  </div> -->
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
// import * as CanvasJS from '../node_modules/canvasjs/dist/canvasjs'
import Doughnut from '../components/Doughnut'

export default {
    name: 'dash-board',
    components: { Doughnut },
    data(){
      return{
        user: {},
        username: localStorage.username,
        role_name: localStorage.role_name,
        points: [],
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

    async beforeCreate() {
      await this.$store.dispatch("fetchInventoryList")
    }
    
}
</script>