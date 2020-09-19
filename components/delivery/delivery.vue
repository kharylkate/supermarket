<template>
    <div id="items" role="main" class="main-content col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div>
            <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                <h4 class="text-uppercase">Delivery</h4>
                <div class="btn-toolbar mb-2 mb-md-0">
                <button type="button" class="btn lg-btn" data-toggle="modal" data-target="#addDelTrans">
                    <img src="../../static/icons/file-earmark-plus.svg" alt="">
                   Receive Item
                </button>
                </div>
            </div>
        </div>
        
        <div class="table-responsive bg-white rounded-lg">
            <table class="table table-data align-items-center table-flush">
            <thead class="thead-sea-green">
                <tr>
                    <th scope="col" class="sort" data-sort="name">Delivery Receipt Number</th>
                <th scope="col" class="sort" data-sort="name">Supplier</th>
                <th scope="col" class="sort" data-sort="name">Date of Delivery</th>
                <th scope="col" class="sort" data-sort="status">Total Amount</th>
                <!-- <th scope="col" class="sort" data-sort="budget">Cost per unit</th> -->
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody class="list" id="body-bg">

                <tr v-for="dt in deliveryList" :key="dt.dtransactions_code">
                    <td>{{dt.dr_no}}</td>
                    <td>{{dt.company_name}}</td>
                    <td>{{ new Date(dt.dtransaction_date).toDateString()}}, {{ new Date(dt.dtransaction_date).getUTCHours()}}:{{ new Date(dt.dtransaction_date).getUTCMinutes()}}:{{ new Date(dt.dtransaction_date).getUTCSeconds()}}</td>
                    <td>₱{{dt.total_cost}}</td>
                    <td><button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#viewDelivery" @click="select(dt)"><img src="../../static/icons/eye.svg" alt=""></button></td>
                </tr>
            </tbody>
            </table>

        </div>

         <div class="modal fade" id="viewDelivery" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Deliveries</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
                
            
            <!-- <li v-if="!selectedDelivery">No item found</li> -->
            <!-- <div v-for="item in selectedDelivery" :key="item.id">
              <div>{{item.customerName}}</div>
            </div> -->
            <div >
              <div class="form-row justify-content-center">
                <div class="container text-center mb-2">
                  <h5>{{dt.company_name}}</h5>
                  <small>{{dt.company_address}}</small>
                  <div><small>Date: {{ new Date(dt.dtransaction_date).toDateString()}}, {{ new Date(dt.dtransaction_date).getUTCHours()}}:{{ new Date(dt.dtransaction_date).getUTCMinutes()}}:{{ new Date(dt.dtransaction_date).getUTCSeconds()}}</small></div>  
                </div>

                <div class="container row mt-3">
                  <div class="mr-auto">Delivery Receipt: {{dt.dr_no}}</div>      
                </div>

                <div class="table-responsive">
                  <table class="table table-borderless">
                    <thead>
                    </thead>
                    <tbody>

                      <tr v-for="item in dt.items" :key="item.id">
                        <!-- <td>{{item.dr_no}}</td> -->
                        <td>{{item.barcode}}</td>
                        <td>{{item.quantity}}</td>
                        <td>₱{{item.unit_cost}}</td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- <div class="text-right">
                    Total: ₱ {{ }}
                  </div> -->
                </div>
            </div>
                
              </div>
            </div>              
          </div>
          <div class="modal-footer my-0">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
          
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';


export default {
    name: 'delivery',
    data() {
        return {
            dt: {}
        }
    },
    methods: {
      //...mapActions(['selectDelivery']),
      select(dt) {
          console.log(dt)
        this.dt = { ...dt }
      }
    },
    computed: {
        ...mapGetters({
            deliveryList: "deliveryList"
        }),
    },
    async beforeCreate() {
        await this.$store.dispatch("fetchDTransactionsList")
    }
    
}
</script>

<style scoped>

</style>
