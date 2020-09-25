<template>
    <div role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
          <div class="container-fluid">
              <div class="">
                <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                  <h4 class="text-uppercase">Sales Transaction</h4>
                  <button class="btn btn-default lg-btn" @click="addModal()">New Transaction</button>
                  <!-- <button @click="pdf()">export</button> -->
                </div>
              </div>

              <!-- <div>
              <div class="row mb-3">
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
                </div>
              </div>
            </div> -->

            <div class="table-responsive bg-white rounded-lg">
              <table class="table table-data align-items-center table-flush" id="sales_table">
                <thead class="thead-sea-green">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Official Receipt Number</th>
                    <th scope="col" class="sort" data-sort="name">Transaction Date</th>
                    <th scope="col" class="sort" data-sort="status">Customer Name</th>
                    <th scope="col" class="sort" data-sort="budget">Total Sales</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="sales in salesList" :key="sales.id">
                    <td>{{sales.or_no}}</td>
                    <td>{{ new Date(sales.stransaction_date).toDateString()}}, {{ new Date(sales.stransaction_date).getUTCHours()}}:{{ new Date(sales.stransaction_date).getUTCMinutes()}}:{{ new Date(sales.stransaction_date).getUTCSeconds()}} </td>
                    <td>{{sales.customer_name}}</td>
                    <td>₱{{(sales.total_cost)}}</td>
                    <td><button class="btn lg-btn" data-toggle="modal" data-target="#viewTransaction" @click="(select(sales))" ><img src="../../static/icons/eye.svg" alt=""></button>
                    <button class="btn lg-btn" data-toggle="modal" data-target="#view_trans" @click="(sales.items)"><img src="../../static/icons/printer.svg" alt=""></button></td>
                    
                    <!-- <td>
                        <div v-for="(item,i) in sales.items" :key="i"> 
                            inventory_id: {{item.inventory_id}}
                            Description: {{item.description}}
                            Unit Cost: {{item.unitcost}}
                            Amount: {{item.amt}}
                        </div>
                    </td> -->
                    
                  </tr>
                </tbody>
              </table>
            </div>
           </div>

      <div class="modal fade" id="viewTransaction" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Official Receipt</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              

            <div> 
              <div class="form-row justify-content-center">
                <div class="container text-center mb-2">
                  <h5>LOU GEH SUPERMARKET</h5>
                  <small>Some bldg-name, st name, road name, STATE</small>
                  <div class="mt-2"><small>{{sales.stransaction_date}}</small>  </div>
                </div>

                <div class="container row mt-3">
                  <div class="mr-auto">OR Number: {{sales.or_no}}</div>    
                </div>

                <div class="table-responsive">
                  <table class="table table-borderless">
                    <thead>
                    </thead>
                    <tbody>
                      <tr v-for="items in sales.items" :key="items.id">
                        <td>{{items.barcode}}</td>
                        <td>{{items.product_description}}</td>
                        <td>{{items.quantity}}</td>
                        <td>₱ {{items.sales_cost}}</td>
                        <td>₱ {{(items.sales_cost * items.quantity).toFixed(2)}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>

                <div class="container">
                  <div class="row">
                  <div class="mr-auto">Total:</div>    
                  <div class="ml-auto">₱ {{(sales.total_cost)}}</div>    
                </div>
                <div class="row">
                  <div class="mr-auto">Cash:</div>    
                  <div class="ml-auto">₱ {{sales.payment_amt}}</div>    
                </div>
                <div v-if="(sales.total_cost<sales.payment_amt)" class="row">
                  <div class="mr-auto">Change: </div>    
                  <div class="ml-auto">₱ {{(sales.payment_amt-sales.total_cost).toFixed(2)}}</div>    
                </div>
                </div>

                <div class="mt-3">
                  <div class="mr-auto">Customer Name: {{sales.customer_name}}</div> 
                  <div class="mr-auto">Contact Number: {{sales.customer_contact_no}}</div> 
                  <div class="mr-auto">Address: {{sales.customer_address}}</div> 
                </div>

              </div>
            </div>
            
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary text-white" data-dismiss="modal">Cancel</button>
                <button type="button" data-dismiss="modal" class="btn btn-primary text-white">OK</button>
              </div>
              
          </div>
          
        </div>
      </div>
      </div>

      <div class="modal fade" id="addSales" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Sales Transaction</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form action id="add_item_form">
                <div class="row col-md-12">
                  <div class="card col-md-4">
                    <div class="form-group mt-3 mb-0 container">
                      <div class="form-group form-group-sm">
                        <label for="input_rtransaction_date">Date:</label>
                        <input
                          type="date"
                          v-model="st.stransaction_date"
                          class="form-control form-control-sm form-control form-control-sm-sm form__date"
                          id="input_rtransaction_date"
                          placeholder="06/06/2020"
                          disabled
                        />
                      </div>
                      <div class="form-group form-group-sm">
                        <label for="input_stransaction_no">Sales Official Receipt Number:</label>
                        <input
                          type="number"
                          v-model="st.or_no"
                          class="form-control form-control-sm form-control form-control-sm-sm form__orNo"
                          value="1654325"
                          id="input_stransaction_no"
                          disabled
                        />
                      </div>
                    </div>
                    <hr />
                    <div class="form-group">
                      <div>
                        <p>Customer Information:</p>
                      </div>
                      <div class="container">
                        <div class="form-group form-group-sm">
                          <label for="input_cus_name">Customer Name:</label>
                          <input
                            type="text"
                            v-model="st.customer_name"
                            class="form-control form-control-sm form-control form-control-sm-sm form__cusname"
                            id="input_cus_name"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-group">
                          <label for="input_contno">Contact Number:</label>
                          <input
                            type="number"
                            v-model="st.customer_contact_no"
                            class="form-control form-control-sm form-control form-control-sm-sm cont_no"
                            placeholder="Contact Number"
                            id="input_contno"
                          />
                        </div>
                        <div class="form-group">
                          <label for="cus_address">Address:</label>
                          <input
                            type="text"
                            v-model="st.customer_address"
                            class="form-control form-control-sm form-control form-control-sm-sm cus_address"
                            placeholder="Address"
                            id="cus_address"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card col-md-8">
                    <div
                      class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-1 px-2"
                      id="topName"
                    >
                      <label for>Sales Transaction Items:</label>
                      <div class="btn btn-sm-toolbar mb-2 mb-md-0">
                        <button
                          type="button"
                          class="btn btn-sm lg-btn mt-2 btn-sm_rtrans text-white"
                          id="btn btn-sm_rtransaction_add"
                          @click="addRow"
                        >Add Items</button>
                      </div>
                    </div>
                    <div class="card">
                      <ul>
                        <li>
                          <div class="form-row d-flex col-md-12 mt-2">
                            <div class="form-group col-md-3">
                              <label for="form__inventory_id">inventory_id</label>
                            </div>
                            <div class="form-group col-md-3">
                              <label for="form__description">Description</label>
                            </div>
                            <div class="form-group col-md-2">
                              <label for="form__quantity">Quantity</label>
                            </div>
                            <div class="form-group col-md-3">
                              <label for="form__unitcost">Cost Per Unit</label>
                            </div>
                            <div class="form-group col-md-1">
                              <label for>Action:</label>
                            </div>
                          </div>
                        </li>
                        <li v-for="(row, index) in rows" :key="index.id">
                          <div class="form-row d-flex col-md-12">
                            <div class="form-group col-md-3">
                              <input
                                @keyup.enter="getinventory_id()"
                                type="text"
                                list="inventory_id_list"
                                v-model="row.inventory_id"
                                class="form-control form-control-sm form-control form-control-sm-sm form__inventory_id"
                                placeholder="inventory_id"
                                id="rtransaction_inventory_id"
                                autocomplete="off"
                              />
                              <datalist id="inventory_id_list">
                                <option
                                  v-for="items in inventoryList"
                                  :key="items.id"
                                  :value="items.inventory_id"
                                >{{items.product_description}}</option>
                              </datalist>
                            </div>
                            <div class="form-group col-md-3">
                              <input
                                type="text"
                                v-model="row.product_description"
                                class="form-control form-control-sm form-control form-control-sm-sm form__description"
                                placeholder="Product Description"
                                disabled
                              />
                            </div>
                            <div class="form-group col-md-2">
                              <input
                                type="number"
                                @blur="getTotal()"
                                
                                v-model="row.quantity"
                                class="form-control form-control-sm form-control form-control-sm-sm form__quantity"
                                placeholder="Quantity"
                              />
                            </div>
                            <div class="form-group col-md-3">
                              <input
                                type="text"
                                v-model="row.sales_cost"
                                class="form-control form-control-sm form-control form-control-sm-sm form__unitcost"
                                placeholder="Cost Per Unit"
                                disabled
                              />
                            </div>
                            <div class="form-group col-md-1">
                              <button
                                class="btn btn-sm btn btn-danger rem_item text-white"
                                type="button"
                                @click="removeElement"
                                id="Action"
                              >
                                <img
                                  src="../../static/icons/dash.svg"
                                  style="color:white"
                                  class="text-white"
                                  alt
                                />
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div class="form-row mt-5">
                      <div class="form-group ml-auto col-md-3 mr-1">
                        <label for>Total Sales Amount:</label>
                        <input
                          type="text"
                          v-model="st.total_cost"
                          class="form-control form-control-sm form-control form-control-sm-sm form__totalAmt text-right"
                          id="total_cost"
                          placeholder="Total Sales Amount"
                        />
                      </div>

                      <div class="form-group col-md-3 mr-1">
                        <label for>Payment Amount:</label>
                        <input
                          type="text"
                          v-model="st.payment_amt" @click="getTotal()"
                          class="form-control form-control-sm form-control form-control-sm-sm form__totalAmt text-right"
                          placeholder="Payment Amount"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-sm btn btn-secondary text-white"
                    id="salescancel"
                    data-dismiss="modal"
                  >Cancel</button>
                  <button
                    type="button"
                    @click="saveSales()"
                    class="btn text-white btn-sm btn btn-primary"
                  >OK</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
    name: 'sales',
    computed: {
      ...mapGetters({
        salesTransactions: 'salesTransactions',
        salesList: 'salesList',
        inventoryList: 'inventoryList'
      })
    },
    data() {
      return {
        sales: {},
        st: {
          // total_cost: 0,
          or_no: null,
        },
        inv: {},
        rows: [
          {
            inventory_id: "",
            product_description: "",
            quantity: "",
            sales_cost: "",
          },
        ],
        date_from: "",
        date_to: "",
      }
    },
    
    methods: {
       ...mapActions(['selectTransaction']),
      select(sales) {
        this.sales = { ...sales }
        console.log(sales)
        var d = new Date()
        this.sales.stransaction_date = d.toDateString()
      },
      pdf(){
        autoTable(doc, { html: '#sales_table' })
        doc.save('table.pdf')
      },
      filter() {
        
      },
      addModal(){
        // let or_no = this.salesList[this.salesList.length-1].or_no+1
        // document.getElementById("input_stransaction_no").value = or_no
        // this.st.or_no = or_no
       
        // let sales_date = new Date();
        // console.log(sales_date.toDateString());
        // this.st.stransaction_date = sales_date.toDateString()
        console.log(this.inventoryList);
        $("#addSales").modal('show')
        
      },
      addRow: function () {
        var elem = document.createElement("li");
        this.rows.push({
          inventory_id: "",
          product_description: "",
          quantity: "",
          sales_cost: "",
        });
      },
      removeElement: function (index) {
        if((this.rows.length-1)==0){
          alert("Item is required")
        }else {
          this.rows.splice(index, 1);
        }
      },
      getinventory_id() {
        //get inventory_id and load product info in respective input fields
        for (var i = 0; i < this.inventoryList.length; i++) {
          if (
            this.inventoryList[i].inventory_id ==
            this.rows[this.rows.length - 1].inventory_id
          ) {
            this.rows[
              this.rows.length - 1
            ].product_description = this.inventoryList[i].product_description;
            this.rows[this.rows.length - 1].sales_cost = this.inventoryList[
              i
            ].sales_cost;
            this.rows[this.rows.length - 1].quantity = 1;
            this.rows[this.rows.length - 1].inventory_code = this.inventoryList[
              i
            ].inventory_code;
          }
        }
      },
      getTotal() {
        var total = 0;
        console.log(this.rows);
        for(var i = 0; i < this.rows.length; i++){
          if(!isNaN(this.rows[i].quantity) && !isNaN(this.rows[i].cost_per_unit) && (this.rows[i].quantity.length !=0) && (this.rows[i].cost_per_unit.length !=0)) {
            total += (this.rows[i].quantity * this.rows[i].cost_per_unit)
          }
        }
        this.st.total_cost = total
      },
      ...mapActions(["addSales"]),
      async saveSales() {

        // get uid and date for logging
        this.st.created_by = localStorage.uid
        this.st.created_at = "today"

        //payment should be enough or more than the total cost to continue
        if(this.st.total_cost > this.st.payment_amt){
          alert("Payment not enough")
        } else {
          //if payment == enough

          // get items
          this.st.items = this.rows;
          //send to actions (api route))
          await this.addSales({
            sales: this.st,
          });

          $("#addSales").modal("hide");
          $("#add_item_form")[0].reset();

          await this.$store.dispatch("fetchSTransactionsList"),
          await this.$store.dispatch("fetchSalesList");
          await this.$store.dispatch("fetchInventoryList");
          }

        
      },
    
    },
    async beforeCreate(){
      await this.$store.dispatch("fetchSTransactionsList"),
      await this.$store.dispatch("fetchSalesList");
      await this.$store.dispatch("fetchInventoryList");
    }
}

</script>

<style scoped>

</style>
