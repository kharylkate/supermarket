<template>
    <div role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
          <div class="container-fluid">
              <div class="">
                <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                  <h4 class="text-uppercase">Sales Transaction</h4>
                </div>
              </div>

              <div>
                <div class="form-group row">
                  <b-col cols="3">
                    <b-form-group>
                      <b-input-group size="sm">
                        <b-form-input
                          v-model="filter"
                          type="search"
                          id="filterInput"
                          placeholder="Type to Search"
                          autocomplete="off"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>

                  <!-- <div>
                    <b-input-group prepend="Date" size="sm" >
                      <date-range-picker
                          id="date_pending"
                          ref="picker"
                          :opens="opens"
                          :locale-data="localeData"
                          :autoApply="true"
                          :singleDatePicker="false"
                          :showWeekNumbers="true"
                          v-model="datePicker"
                          @update="updateValues"
                        >
                          <div slot="input" id="date_pending">
                            {{ datePicker.startDate }} - {{ datePicker.endDate }}
                          </div>
                        </date-range-picker>
                    </b-input-group>
                  </div> -->


                  <div class="form-group mx-2 col-md-2">
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

                  <div v-if="salesList.length > 0" class="form-group mx-2">
                    <button type="button" class="btn btn-sm lg-btn" @click="toPdf()">
                      <!-- <img src="../../static/icons/file-earmark-arrow-down.svg" alt=""> -->
                      Export to PDF
                    </button>
                    
                  </div>

                  <div class="form-group ml-auto mr-3">
                    <button class="btn btn-sm btn-default lg-btn" @click="addModal()">New Transaction</button>
                  </div>

                </div>
              </div>

            <div id="table-table">
              <b-table
              show-empty
              class="bg-white"
              id="btable"
              stacked="md"
              thead-class="thead-sea-green"
              :items="salesList"
              :fields="fields"
              :current-page="currentPage"
              :per-page="perPage"
              :filter="filter"
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
                class="paginations"
                size="sm"
                :total-rows="tablerows"
                :per-page="perPage"
                align="center"
                aria-controls="deliverytable">
                </b-pagination>
              </div>
            </div>
              

            <!-- <div class="table-responsive bg-white rounded-lg">
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
                  </tr>
                </tbody>
              </table>
            </div> -->



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
                  <small>Jose Catolico Sr. Ave, Brgy, General Santos City, 9500 South Cotabato</small>
                  <div><small>{{sales.stransaction_date}}</small>  </div>
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
                        <!-- <td>₱ {{(items.sales_cost * items.quantity).toFixed(2)}}</td> -->
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
                <div v-if="(sales.total_cost<=sales.payment_amt)" class="row">
                  <div class="mr-auto">Change: </div>    
                  <div class="ml-auto">₱ {{(sales.payment_amt - sales.total_cost).toFixed(2)}}</div>    
                </div>
                </div>

                <div class="mt-3 mb-3">
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
                          id="input_stransaction_date"
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
                              <label for="form__inventory_id">Barcode</label>
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
                                @keyup.enter="getbarcode()"
                                type="text"
                                list="inventory_id_list"
                                v-model="row.barcode"
                                class="form-control form-control-sm form-control form-control-sm-sm form__inventory_id"
                                placeholder="Barcode"
                                id="stransaction_barcode"
                                autocomplete="off"
                              />
                              <datalist id="inventory_id_list">
                                <option
                                  v-for="items in inventoryList"
                                  :key="items.id"
                                  :value="items.barcode"
                                >{{items.product_description}}</option>
                              </datalist>
                            </div>
                            <div class="form-group col-md-3">
                              <input
                                type="text"
                                v-model="row.product_description"
                                class="form-control form-control-sm form-control form-control-sm-sm form__description"
                                placeholder="Product Description"
                                id="stransaction_prod_description"
                                disabled
                              />
                            </div>
                            <div class="form-group col-md-2">
                              <input
                                type="number"
                                @blur="getTotal()"
                                v-model="row.quantity"
                                id="stransaction_qty"
                                class="form-control form-control-sm form-control form__quantity"
                                placeholder="Quantity" required
                              />
                            </div>
                            <div class="form-group col-md-3">
                              <input
                                type="text"
                                v-model="row.sales_cost"
                                class="form-control form-control-sm form-control form-control-sm-sm form__unitcost"
                                placeholder="Cost Per Unit"
                                id="stransaction_cost"
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
                          v-model="st.payment_amt"
                          class="form-control form-control-sm form-control form-control-sm-sm form__totalAmt text-right"
                          id="stransaction_payment"
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

      <div id="divtableData">
        <table class="table" id="tableData">
          <thead>
            <tr>
              <th>OR Number</th>
              <th>Customer Details</th>
              <th>Date of Transaction</th>
              <th>Total Amount</th>
              <th>Payment Amount</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="d in salesList" :key="d.id">
              <td>{{d.or_no}}</td>
              <td>{{d.customer_name}} <br> {{d.customer_address}} <br> {{d.customer_contact_no}}</td>
              <td>{{new Date(d.stransaction_date).toDateString()}}</td>
              <td>₱{{d.total_cost}}</td>
              <td>₱{{d.payment_amt}}</td>
              <td>
                <div v-for="i in d.items" :key="i.id">
                  <div>{{i.barcode}} {{i.product_description}} ({{i.quantity}}) @₱{{i.sales_cost}}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import moment from "moment";
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
    name: 'sales',
    components: {
      DateRangePicker
    },
    computed: {
      ...mapGetters({
        salesTransactions: 'salesTransactions',
        salesList: 'salesList',
        inventoryList: 'inventoryList'
      }),
      tablerows() {
        return this.salesList.length
      },
    },
    data() {
      return {
        sales: {},
        filter_supplier: "",
        filter_items: 5,
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: '',
        sortDesc: false,
        filter: null,
        sortDirection: 'asc',
        fields: [
          { key: 'or_no', label: 'Official Receipt Number', sortable: true, sortDirection: 'asc' },
          { key: 'customer_name', label: 'Customer', sortable: true, sortDirection: 'asc' },
          { key: 'stransaction_date', label: 'Date of Transaction', sortable: true, sortDirection: 'asc', formatter:  (value, key, item) => {
            return new Date(value).toDateString()
          }
          },
          { key: 'total_cost', label: 'Total Amount', sortable: true, sortDirection: 'asc'},
          { key: 'actions', label: 'Actions' }
        ],
        // Datepicker
        opens: "center",
        datePicker: {
          startDate: moment().format("MMM DD, YYYY"),
          endDate: moment().format("MMM DD, YYYY"),
        },
        dateRange: {
          date_from: moment().format("YYYY-MM-DD"),
          date_to: moment().format("YYYY-MM-DD"),
        },
        localeData: {
          direction: "ltr",
          format: moment().format("mmm dd, yyyy"),
          separator: " - ",
        },

        st: {
          total_cost: 0,
          or_no: null,
          stransaction_date: new Date().toISOString().slice(0,10)

        },
        inv: {},
        rows: [
          {
            barcode: "",
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

        $("#viewTransaction").modal('show')
      },
      pdf(){
        autoTable(doc, { html: '#sales_table' })
        doc.save('table.pdf')
      },
      addModal(){
        let or_no = this.salesList[this.salesList.length-1].or_no+1
        this.st.or_no = or_no


        $("#addSales").modal('show')
        
      },
      addRow: function () {
        var elem = document.createElement("li");
        this.rows.push({
          barcode: "",
          product_description: "",
          quantity: "",
          sales_cost: "",
        });
      },
      removeElement: function (index) {
        if((this.rows.length-1)==0){
          // alert("Item is required")
          var msg = "Item is required"
          this.toast(false, msg, 'danger')
        }else {
          this.rows.splice(index, 1);
        }
      },
      async getbarcode() {
        //get inventory_id and load product info in respective input fields
        for (var i = 0; i < this.inventoryList.length; i++) {
          if (
            this.inventoryList[i].barcode ==
            this.rows[this.rows.length - 1].barcode
          ) {
            this.rows[this.rows.length - 1].inventory_id = this.inventoryList[i].inventory_id;
            this.rows[this.rows.length - 1].product_description = this.inventoryList[i].product_description;
            this.rows[this.rows.length - 1].sales_cost = this.inventoryList[i].sales_cost;
            this.rows[this.rows.length - 1].quantity = 1;
          }
        }
      },
      getTotal: function(){
        console.log(this.rows);
        var total = 0;
        console.log(this.rows);
        for(var i = 0; i < this.rows.length; i++){
          if(!isNaN(this.rows[i].quantity) && !isNaN(this.rows[i].sales_cost) && (this.rows[i].quantity.length !=0) && (this.rows[i].sales_cost.length !=0)) {
            total += (this.rows[i].quantity * this.rows[i].sales_cost)
          }
        }
        this.st.total_cost = total
      },
      ...mapActions(["addSales"]),
      async saveSales() {

        // get uid and date for logging
        this.st.created_by = localStorage.uid
        this.st.created_at = "today"

        var barcode = $("#stransaction_barcode").val()
        var prod_description = $("#stransaction_prod_description").val()
        var qty = $("#stransaction_qty").val()
        var transcost = $("#stransaction_cost").val()
        var payment = $("#stransaction_payment").val()

        if((barcode == "") || (prod_description == "") || (qty == "") || (transcost == "") || (payment == "")){
          // alert("Please fill in form")
          var msg = "Please check for missing field"
          this.toast(false, msg, 'danger')

        } else {
          //payment should be enough or more than the total cost to continue
          if(this.st.total_cost > this.st.payment_amt){
            // alert("Payment not enough")
          var msg = "Payment not enough"
            this.toast(false, msg, 'danger')

          } else {
            //if payment == enough

            // get items
            this.st.items = this.rows;
            //send to actions (api route))
            await this.addSales({
              sales: this.st,
            })
            .then((result) => {
              if(result.error){
                // alert(result.error)
                this.toast(false, result.error, 'danger')

              } else {
                // alert(result.message)
                this.toast(false, result.message, 'success')
                $("#addSales").modal("hide");
                $("#add_item_form")[0].reset();
              }
            })
          }

          await this.$store.dispatch("fetchSTransactionsList"),
          await this.$store.dispatch("fetchInventoryList");
          }
      },
      toast(success = false, msg, variant) {
      if(success){
          this.$bvToast.toast(msg, {
            title: 'Success',
            toaster: 'b-toaster-bottom-right',
            solid: true,
            variant: variant,
            autoHideDelay: 3000,
          })
        } else {
          this.$bvToast.toast(msg, {
            title: 'Error',
            toaster: 'b-toaster-bottom-right',
            solid: true,
            variant: variant,
            autoHideDelay: 3000,
          })
        }
      },
      items() {
      this.perPage = this.filter_items
      },
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      toPdf() {

        // WINDOW print()
        var sTable = document.getElementById('divtableData').innerHTML;

        var style = "<style>";
        style = style + "table {width: 100%;font: 12px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: left;}";
        style = style + "</style>";

        // CREATE A WINDOW OBJECT.
        var win = window.open('', '', 'height=700,width=700');
        var d = new Date()

        win.document.write('<html><head>');
        win.document.write(`<title>Delivery Transaction (`+ d.toISOString().substring(0, 10) +`) </title>`);   // <title> FOR PDF HEADER.
        win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
        win.document.write('</body></html>');

        win.document.close(); 	// CLOSE THE CURRENT WINDOW.

        win.print();    // PRINT THE CONTENTS.
      },
      async resetDate() {
        this.isBusy = true;

        this.datePicker.startDate = moment().format("MMM DD, YYYY");
        this.datePicker.endDate = moment().format("MMM DD, YYYY");

        this.updateValues();
      },
      async updateValues() {

        this.datePicker.startDate = moment(this.datePicker.startDate).format(
          "MMM DD, YYYY"
        );
        this.datePicker.endDate = moment(this.datePicker.endDate).format(
          "MMM DD, YYYY"
        );
        (this.dateRange.date_from = moment(this.datePicker.startDate).format(
          "YYYY-MM-DD"
        )),
          (this.dateRange.date_to = moment(this.datePicker.endDate).format(
            "YYYY-MM-DD"
          ));

        console.log("daterange", this.dateRange);

      
      },
    
    },
    async beforeCreate(){
      await this.$store.dispatch("fetchSTransactionsList"),
      await this.$store.dispatch("fetchInventoryList");
    }
}

</script>

<style >

</style>
