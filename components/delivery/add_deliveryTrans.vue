<template>
    <div class="modal fade" id="addDelTrans" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Receive Item</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" id="add_item_form">
            <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="input_rtransaction_date">Date: </label>
                  <input type="date" class="form-control form__date" id="input_rtransaction_date" default="06/06/2020">
                </div>
                <div class="form-group col-md-3">
                  <label for="input_rtransaction_no">Delivery Receipt Number: </label>
                  <input type="number" class="form-control form__orNo" placeholder="1654325" id="input_rtransaction_no">
                </div>

                <div class="form-group col-md-6 mb-4">

                  <input class="form-control" v-model="suppliers" list="suppliers" name="suppliers">
                    <datalist id="browsers">
                      <option>
                        
                      </option>
                    </datalist>

                  <label for="">Suppliers: </label>
                  <div class="border rounded-sm">                     
                    <button type="button border-secondary" class="form-control btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Suppliers
                    </button>
                    <div class="dropdown-menu col-md-12">
                      <div class="input-group px-2">
                        <input type="text" data-table="table-data" @keydown="filtersearch()" class="form-control search-filter" placeholder="Supplier" aria-label="Supplier" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                          <span class="input-group-text" id="basic-addon2"><img src="../../static/icons/search.svg" alt=""></span>
                        </div>
                      </div>
                      <div class="dropdown-divider"></div>
                      <!-- {{suppliersList}} -->
                        <div class="dropdown-item table-data" >
                          <li></li>
                      
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                    <label for="">Delivery Transaction Items:</label>
                    <div class="btn-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn btn-sm lg-btn btn_rtrans text-white" id="btn_rtransaction_add" @click="addRow">
                        Add Items
                    </button>
                    </div>
                </div>
              <div class="card">
                
                <ul>
                  <li>
                      <div class="form-row d-flex col-md-12 mt-2">
                        <div class="form-group col-md-3">
                          <label for="form__barcode">Barcode:</label>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="form__description">Product Description:</label>
                        </div>
                        <div class="form-group col-md-2">
                          <label for="form__qty">Quantity:</label>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="form__unitcost">Cost Per Unit:</label>
                        </div>
                        <div class='form-group col-md-1'>
                          <label for="">Action:</label>
                        </div>
                      </div>
                  </li>
                  <li v-for="(row, index) in rows" :key="index.id">
                  <div class="form-row d-flex col-md-12 mt-0">
                    <div class="form-group col-md-3">
                      <input type="text" v-model="row.barcode" class="form-control form__barcode" placeholder="barcode" id="rtransaction_barcode">
                    </div>
                    <div class="form-group col-md-3">
                      <input type="text" v-model="row.description" class="form-control form__description" placeholder="Product Description">
                    </div>
                    <div class="form-group col-md-2">
                      <input type="text" v-model="row.qty" class="form-control form__qty" placeholder="Quantity">
                    </div>
                    <div class="form-group col-md-3">
                      <input type="text" v-model="row.unitcost" class="form-control form__unitcost" placeholder="Cost Per Unit">
                    </div>
                    <div class='form-group col-md-1'>
                      <button class="btn btn-danger rem_item" type="button" @click="removeElement" id="Action">Remove</button>
                    </div>
                    <!-- <div class="form-group col-md-1">
                      <label for="">Action:</label>
                      <button class="btn btn-danger" type="button" v-on:click="remooove()" id="Action">Remove</button>
                    </div> -->
                  </div>
                </li>
                </ul>
              </div>

              <div class="form-row">
                <div class="form-group ml-auto mr-1">
                  <label for="">Total Delivery Transaction Amount:</label>
                  <input type="text" class="form-control form__totalAmt text-right" placeholder="Total Amount">
                </div>
              </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="itemcancel" data-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary">OK</button>
            </div>
            <!-- <button class="btn btn-primary" type="submit">Submit form</button> -->
          </form>
        </div>
        
      </div>
    </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name: 'modal-addDelTrans',
    computed: {
      ...mapGetters({
        suppliersList: 'suppliersList',
        inventoryList: 'inventoryList'
      }),
    },
    data() {
      return {
        rows: [{
          barcode: "",
          description: "",
          qty: "",
          unitcost: ""
        }]
      }
    },
    methods: {
      addRow: function() {
        var elem = document.createElement('li');
        this.rows.push({
          barcode: "",
          description: "",
          qty: "",
          unitcost: ""
        });
      },
      removeElement: function(index){
        this.rows.splice(index,1)
      },
      filtersearch(){
        'use strict';
 
        var TableFilter = (function(Arr) {
      
          var _input;
      
          function _onInputEvent(e) {
          _input = e.target;
          var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
          Arr.forEach.call(tables, function(table) {
          Arr.forEach.call(table.tBodies, function(tbody) {
          Arr.forEach.call(tbody.rows, _filter);
          });
          });
          }
      
          function _filter(row) {
          var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
          row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
          }
      
          return {
          init: function() {
          var inputs = document.getElementsByClassName('search-filter');
          Arr.forEach.call(inputs, function(input) {
          input.oninput = _onInputEvent;
          });
          }
          };
        })(Array.prototype);
      
        document.addEventListener('readystatechange', function() {
          if (document.readyState === 'complete') {
          TableFilter.init();
          }
        });
      }
    },
    created(){
      console.log('hilu',this.inventoryList)
    },
    async beforeCreate(){
      await this.$store.dispatch("fetchSuppliersList")
      await this.$store.dispatch("fetchInventoryList")
    }
}


</script>
