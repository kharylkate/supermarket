<template>
    <div id="items" role="main" class="main-content col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div>
            <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                <h4 class="text-uppercase">Delivery</h4>
                
                <div class="btn-toolbar mb-2 mb-md-0">
                
                
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
                
                <div>
                  <b-input-group size="sm" >
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
                      <b-input-group-append>
                        <b-button
                          @click="resetDate"
                          id="date_reset_pending"
                          style="font-size:12px"
                          >Reset</b-button
                        >
                      </b-input-group-append>
                  </b-input-group>
                </div>


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

                <div class="form-group mx-2">
                  <button type="button" class="btn btn-sm lg-btn" @click="toPdf()">
                    <img src="../../static/icons/file-earmark-arrow-down.svg" alt="">
                    Export to PDF
                  </button>
                  
                </div>

                <div class="form-group ml-auto mr-3">
                  <button type="button" class="btn lg-btn btn-sm" data-toggle="modal" data-target="#addDelTrans">
                      <img src="../../static/icons/file-earmark-plus.svg" alt="">
                    Receive Item
                  </button>
                </div>

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
              :items="deliveryList"
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
            </div>

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

      <div id="divtableData">
        <table class="table" id="tableData">
          <thead>
            <tr>
              <th>Delivery Receipt Number</th>
              <th>Supplier</th>
              <th>Date of Delivery</th>
              <th>Total Amount</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="d in deliveryList" :key="d.id">
              <td>{{d.dr_no}}</td>
              <td>{{d.supplier_name}}</td>
              <td>{{new Date(d.transaction_date).toDateString()}}</td>
              <td>₱{{d.total_cost}}</td>
              <td>
                <div v-for="i in d.items" :key="i.id">
                  <div>{{i.barcode}} {{i.product_description}} ({{i.quantity}}) @₱{{i.unit_cost}}</div>
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
import jsPDF from "jspdf";
import "jspdf-autotable";
import Papa from "papaparse";


export default {
    name: 'delivery',
    components: {
      DateRangePicker
    },
    data() {
      return {
        dt: {},
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
          { key: 'dr_no', label: 'Delivery Receipt Number', sortable: true, sortDirection: 'desc' },
          { key: 'supplier_name', label: 'Supplier', sortable: true },
          { key: 'transaction_date', label: 'Date of Delivery', sortable: true, sortDirection: 'desc', formatter:  (value, key, item) => {
            return new Date(value).toDateString()
          }
          },
          { key: 'total_cost', label: 'Total Amount', sortable: true, formatter: (value, key, item) => {
            return '₱ '+value
          }},
          { key: 'actions', label: 'Actions' }
        ],
        selected: [], // Must be an array reference!
        options: [
          { text: 'Delivery Receipt Number', value: 'dr_no' },
          { text: 'Supplier', value: 'supplier_name' },
          { text: 'Date of Delivery', value: 'transaction_date' },
          { text: 'Total Amount', value: 'total_cost' },
          { text: 'Actions', value: 'actions' }
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
        }
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
      // filter(){
      //     var value = $("#filter_supplier").val().toLowerCase();
      //     $("#btable tr").filter(function() {
      //       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      //     });
      // },
      date_filter() {
        var from = new Date(this.date_from)
        var to = new Date(this.date_to)
        console.log(from.toISOString().substring(0, 10));
        console.log(to.toISOString().substring(0, 10));
      },
      items() {
        this.perPage = this.filter_items
      },
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      getData(){
        let docs = []
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


        //JSPDF

        // var doc = new jsPDF("landscape");
        // var elem = document.getElementById("tableData");
        // var res = doc.autoTableHtmlToJson(elem);

        // doc.autoTable(res.columns, res.data, {
        //     startY: 15,
        //     margin: { horizontal: 0 },
        //     bodyStyles: { valign: 'top' },
        //     styles: { overflow: 'linebreak', columnWidth: 'wrap' },
        //     columnStyles: { 
        //       items: { cellWidth: 'auto' } }
        // });

        // doc.save('test.pdf');
      },
      checkme(){
        console.log(this.selected);
      },
      async resetDate() {
        this.isBusy = true;

        this.datePicker.startDate = moment().format("MMM DD, YYYY");
        this.datePicker.endDate = moment().format("MMM DD, YYYY");

        this.updateValues();
      },
      ...mapActions(['dateFilter']),
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
        // await this.dateFilter({
        //   daterange: this.dateRange
        // })

        // this.deliveryList = this.getDateFilteredDelivery
        // console.log("fields", this.deliveryList);

        // this.filterdelivery(row, dateRange)
      
      },
      filterdelivery(row, range){
        table_date = moment(row.transaction_date).format("YYY-MM-DD")
        if(range.date_from <= table_date <= range.date_to){
          return true;
        } else {
          return false;
        }
      }

    },
    computed: {
      ...mapGetters({
        deliveryList: "deliveryList",
        suppliersList: "suppliersList",
        getDateFilteredDelivery: "getDateFilteredDelivery"
      }),
      tablerows() {
        return this.deliveryList.length
      },
      filterOptions() {
        return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.value }
        })
      },
      
  
    },
    created(){
      this.$store.dispatch("getDateFilteredDelivery");
    },
    async beforeCreate() {
      await this.$store.dispatch("fetchDTransactionsList")
      await this.$store.dispatch("getDateFilteredDelivery");
    }
    
}
</script>

<style>
#divtableData {
  display: none;
}

.lg-btn {
  border: none;
}

.paginations .active .page-link {  
    background-color: #95c282 !important;  
    border-color: #95c282 !important;  
}

.paginations .page-link {
  color: gray ;
}

.paginations :hover {
  color: black;
  background-color: #bbe1aa!important;
}

.reportrange-text[data-v-267f4ee2] {
  border: 1px solid #ccc;
  height: 2rem;
  width: 14rem;
  font-size: 14px;
}

.daterangepicker.show-ranges .drp-calendar.left {
  position: relative;
  right: 8px;
}

.daterangepicker.show-ranges .drp-calendar.left {
  border-left: 0px solid #ddd;
}

.daterangepicker .ranges li.active {
  background-color: #59726d;
  color: #fff;
}

.daterangepicker td.active,
.daterangepicker td.active:hover {
  background-color: #59726d;
  border-color: transparent;
  color: #fff;
}

.daterangepicker .ranges li.active {
  background-color: #59726d;
  color: #fff;
}
</style>
