d<template>
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
                  <input type="date" v-model="dt.dtransaction_date" class="form-control form__date" id="input_rtransaction_date" default="06/06/2020">
                </div>
                <div class="form-group col-md-3">
                  <label for="input_rtransaction_no">Delivery Receipt Number: </label>
                  <input type="number" v-model="dt.dr_no" class="form-control form__orNo" placeholder="1654325" id="input_rtransaction_no">
                </div>

                <div class="form-group col-md-6 mb-4">
                
                  <label >Supplier: </label>
                  
                  <!-- <v-select v-model="dt.suppler_code" :options="suppliersList.companyt_name" ></v-select> -->
                    <input v-model="dt.supplier_code" class="form-control" list="suppliers" name="suppliers" autocomplete="off" placeholder="Supplier">      
                  <datalist id="suppliers">
                    <option v-for="supply in suppliersList" :key="supply.id" :value="supply.supplier_code">{{supply.company_name}}</option>
                  </datalist>
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
                      <input type="text" v-model="row.barcode" list="barcode-list" class="form-control form__barcode" placeholder="barcode" id="rtransaction_barcode" autocomplete="off">
                      <datalist id="barcode-list">
                        <option v-for="inv in inventoryList" :key="inv.id" :value="inv.barcode" >{{inv.product_description}}</option>
                      </datalist>
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
                  <input type="text" v-model="dt.total_cost" class="form-control form__totalAmt text-right" placeholder="Total Amount">
                </div>
              </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="itemcancel" data-dismiss="modal">Cancel</button>
              <button type="button" @click="receive()" class="btn btn-primary">OK</button>
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
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
    name: 'modal-addDelTrans',
    components: {
      'v-select': vSelect
    },
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
        }],
        dt: {},
        
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
      receive(){
        this.rows.total = this.dt.total_cost
        console.log('add total: ', this.rows.total);
        console.log('rows: ', this.rows);
        console.log('dt: ', this.dt);
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
