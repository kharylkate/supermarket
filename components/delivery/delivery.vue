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
            <div>
              <div class="row">
                <div class="form-group col-md-3">
                  <select class="form-control form-control-sm" @change="filter()" v-model="filter_supplier" name="filter_supplier" id="filter_supplier">
                    <option value="" selected disabled>Supplier</option>
                    <option v-for="supply in suppliersList" :key="supply.id" :value="supply.id">{{supply.company_name}}</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <label class="input-group-text">From</label>
                    </div>
                    <input type="date" v-model="date_from" class="form-control form-control-sm">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <label class="input-group-text">To</label>
                    </div>
                    <input type="date" v-model="date_to" class="form-control form-control-sm">
                    <div class="input-group-append">
                      <button type="button" class="btn lg-btn text-white">Search</button>
                    </div>
                  </div>
                  <!-- <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <label class="input-group-text">To</label>
                    </div>
                    <input type="date" v-model="date_from" class="form-control form-control-sm">
                  </div> -->
                </div>
              </div>
            </div>
        </div>

        
        
        <div class="table-responsive bg-white rounded-lg">
            <table class="table table-data align-items-center table-flush" id="delivery_table">
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
                    <td>{{dt.supplier_name}}</td>
                    <td>{{ new Date(dt.transaction_date).toDateString()}}, {{ new Date(dt.transaction_date).getUTCHours()}}:{{ new Date(dt.transaction_date).getUTCMinutes()}}:{{ new Date(dt.transaction_date).getUTCSeconds()}}</td>
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
                  <h5>{{dt.supplier_name}}</h5>
                  <small>{{dt.company_address}} <br/>
                  {{dt.contact_no}}</small>
                  <div><small v-if="dt.transaction_date != null">Date: {{dt.transaction_date}}</small></div>  
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
                        <td>{{item.product_description}}</td>
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
        
        for(var i = 0; i < this.suppliersList.length; i++){
          if(dt.supplier_name == this.suppliersList[i].company_name){
            dt.company_address = this.suppliersList[i].company_address
            dt.contact_no = this.suppliersList[i].contact_no
          }
        }

        this.dt = { ...dt }
        
      },
      filter(){
        var input, filter, table, tr, td, i;
        input = document.getElementById("filter_supplier");
        filter = input.value.toUpperCase();
        table = document.getElementById("delivery_table");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }
    },
    computed: {
        ...mapGetters({
            deliveryList: "deliveryList",
            suppliersList: "suppliersList"
        }),
    },
    async beforeCreate() {
        await this.$store.dispatch("fetchDTransactionsList")
    }
    
}
</script>

<style scoped>

</style>
