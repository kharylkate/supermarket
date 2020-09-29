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
              <div class="form-group row container">
                <div class="form-group mx-2">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <label class="input-group-text">Show</label>
                    </div>
                    <select class="form-control form-control-sm search-filter" @change="filter()" v-model="filter_supplier" name="filter_supplier" id="filter_supplier">
                      <option value="" selected>Supplier</option>
                      <option v-for="supply in suppliersList" :key="supply.id" :value="supply.company_name">{{supply.company_name}}</option>
                    </select>
                  </div>
                  
                </div>
                <div class="form-group mx-2">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <label class="input-group-text">From</label>
                    </div>
                    <input type="date" v-model="date_from" class="form-control form-control-sm" id="date_from">
                  </div>
                </div>
                <div class="form-group mx-2">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <label class="input-group-text">To</label>
                    </div>
                    <input type="date" v-model="date_to" class="form-control form-control-sm date-picker" id="date_to">
                    <div class="input-group-append">
                      <button type="button" @click="date_filter()" class="btn lg-btn text-white">Search</button>
                    </div>
                  </div>

                </div>
                <div class="form-group mx-2">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                      <label class="input-group-text">Item</label>
                    </div>
                    <select class="form-control form-control-sm search-filter" @change="items()" v-model="filter_items" name="filter_supplier" id="filter_supplier">
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
        </div>

         <!-- <b-table
         id="btable"
            class="table"
            :items="delivery"
            thead-class="thead-sea-green"
            :per-page="perPage"
            :current-page="currentPage"
            > -->
            <b-col lg="6" class="my-1">
              <b-form-group
                label="Sort"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                label-for="sortBySelect"
                class="mb-0"
              >
                <b-input-group size="sm">
                  <b-form-select v-model="sortBy" id="sortBySelect" :options="filter_options" class="w-75">
                    <template v-slot:first>
                      <option value="">-- none --</option>
                    </template>
                  </b-form-select>
                 
                </b-input-group>
              </b-form-group>
            </b-col>

            <b-table
              show-empty
              class="bg-white"
              id="btable"
              stacked="md"
              thead-class="thead-sea-green"
              :items="deliveryList"
              :fields="fields"
              :current-page="currentPage"
              :per-page="perPage"
              
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              @filtered="onFiltered"
            >

            <template v-slot:cell(actions)="row">
              <b-button size="sm" @click="select(row.item)" class="mr-1 lg-btn">
                <img src="../../static/icons/eye.svg" alt="">
              </b-button>
            </template>
          
            </b-table>

            <div class="overflow-auto">
               <b-pagination
                v-model="currentPage"
                :total-rows="tablerows"
                :per-page="perPage"
                align="center"
                aria-controls="deliverytable">
            </b-pagination>
          </div>
        
        <!-- <div class="table-responsive bg-white rounded-lg">
            <table :per-page="perPage" :current-page="currentPage" class="table table-data data-table align-items-center table-flush" id="deliverytable">
            <thead class="thead-sea-green">
                <tr>
                  <th scope="col" class="sort" data-sort="name">Delivery Receipt Number</th>
                  <th scope="col" class="sort" data-sort="name">Supplier</th>
                  <th scope="col" class="sort" data-sort="name">Date of Delivery</th>
                  <th scope="col" class="sort" data-sort="status">Total Amount</th>

                  <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody class="list" id="delivery_table">

                <tr v-for="dt in deliveryList" :key="dt.dtransactions_code">
                    <td>{{dt.dr_no}}</td>
                    <td>{{dt.supplier_name}}</td>
                    <td>{{ new Date(dt.transaction_date).toDateString()}}, {{ new Date(dt.transaction_date).getUTCHours()}}:{{ new Date(dt.transaction_date).getUTCMinutes()}}:{{ new Date(dt.transaction_date).getUTCSeconds()}}</td>
                    <td>₱{{dt.total_cost}}</td>
                    <td><button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#viewDelivery" @click="select(dt)"><img src="../../static/icons/eye.svg" alt=""></button></td>
                </tr>
            </tbody>
            </table>

           

        </div> -->

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
import moment from "moment";
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name: 'delivery',
    components: {

    },
    data() {
      return {
        dt: {},
        date_from: "",
        date_to: "",
        filter_supplier: "",
        filter_items: 5,
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        // filter: null,
        // filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        },
        // items: []
        fields: [
          { key: 'dr_no', label: 'Delivery Receipt Number', sortable: true, sortDirection: 'desc' },
          { key: 'supplier_name', label: 'Supplier', sortable: true },
          { key: 'transaction_date', label: 'Date of Delivery', sortable: true, sortDirection: 'desc' },
          { key: 'total_cost', label: 'Total Amount', sortable: true},
          { key: 'actions', label: 'Actions' }
        ],
        // filterOptions: [
        //   { value: 'supplier_id', text: 'company_name' },
        //   { value: 'supplier_id', text: 'company_name' }
        // ]

      
      }
    },
    methods: {
      select(dt) {
          console.log(dt)
        
        for(var i = 0; i < this.suppliersList.length; i++){
          if(dt.supplier_name == this.suppliersList[i].company_name){
            dt.company_address = this.suppliersList[i].company_address
            dt.contact_no = this.suppliersList[i].contact_no
          }
        }

        this.dt = { ...dt }
        
        $("#viewDelivery").modal('show')
        
      },
      filter(){
          var value = $("#filter_supplier").val().toLowerCase();
          $("#btable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
      },
      date_filter() {
        var from = new Date(this.date_from)
        var to = new Date(this.date_to)
        var d = new Date()
        console.log(d);
        console.log(to);

      },
      items() {
        this.perPage = this.filter_items
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }

    },
    computed: {
        ...mapGetters({
            deliveryList: "deliveryList",
            suppliersList: "suppliersList"
        }),
        tablerows() {
          return this.deliveryList.length
        },
        filterOptions() {
          return { text: this.suppliersList.company_name, value: this.suppliersList.supplier_id}
        }
   
    },
    async beforeCreate() {
      await this.$store.dispatch("fetchDTransactionsList")
      
    }
    
}
</script>

<style scoped>
.lg-btn {
  border: none;
}
</style>
