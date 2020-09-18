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
                  <input type="date" v-model="dt.dtransaction_date" class="form-control form-control-sm form__date" id="input_rtransaction_date" default="06/06/2020">
                </div>
                <div class="form-group col-md-3">
                  <label for="input_rtransaction_no">Delivery Receipt Number: </label>
                  <input type="number" v-model="dt.dr_no" class="form-control form-control-sm form__orNo" placeholder="DR Number" id="input_rtransaction_no">
                </div>

                <div class="form-group col-md-6 mb-4">
                  <label for="">Suppliers: </label>
                    <input v-model="dt.company_name" class="form-control" list="suppliers" name="suppliers" autocomplete="off" placeholder="Supplier">      
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
                
                <ul id="row_items">
                  <li>
                      <div class="form-row d-flex col-md-12 mt-2">
                        <div class="form-group col-md-6">
                          <label for="form__barcode">Item:</label>
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
                  <li v-for="(row, index) in rows" :key="index.id" class="row-list">
                    <div class="form-row d-flex col-md-12 mt-0">
                      <div class="form-group col-md-2">
                        <!-- <select class="form-control" v-model="row.barcode" name="" id="">
                          <option disabled>Select Item</option>
                          <option v-for="item in inventoryList" :key="item.id" :value="item.barcode">{{item.barcode}} - {{item.product_description}}</option>
                        </select> -->
                        <input type="text" v-model="row.barcode" list="barcode_list" class="form-control form-control-sm form__barcode" placeholder="barcode" id="rtransaction_barcode" autocomplete="off">
                          <datalist id="barcode_list">
                          <option v-for="inv in inventoryList" :key="inv.id" :value="inv.barcode" >{{inv.product_description}}</option>
                          <button>button</button>
                        </datalist>
                      </div>

                      <div class="form-group col-md-4">
                        <input type="text"  v-model="row.product_description" id="rtransaction_description" class="form-control form-control-sm form__description" placeholder="Product Description">
                      </div>
                      
                      <div class="form-group col-md-2 mb-2">
                        <input type="number"  v-model="row.qty" id="rtransaction_qty" class="form-control form-control-sm form__qty" placeholder="Quantity">
                      </div>
                      <div class="form-group col-md-3">
                        <input type="number"  v-model="row.unit_cost" id="rtransaction_unitcost" class="form-control form-control-sm form__unitcost" placeholder="Cost Per Unit">
                      </div>
                      <div class='form-group col-md-1'>
                        <button class="btn btn-sm btn-danger rem_item text-white" type="button" @click="removeElement" id="Action"> <img src="../../static/icons/dash.svg" class="text-white" alt=""> </button>
                      </div>
                    </div>
                </li>
                </ul>
              </div>
              <!-- <div class="form-row mt-5">
                <div class="form-group ml-auto mr-1">
                  <label for="">Total Delivery Transaction Amount:</label>
                  <input type="number" v-model="dt.total_cost" class="form-control form-control-sm form__totalAmt" id="totalAmt" placeholder="Total Amount">
                </div>
              </div> -->

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-sm" id="itemcancel" data-dismiss="modal">Cancel</button>
              <button type="button" @click="receive()" class="btn btn-sm btn-primary">OK</button>
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
        inventoryList: 'inventoryList',
        suppliersList: 'suppliersList'
      }),
    },
    data() {
      return {
        dt: {},
        rows: [{
          barcode: "",
          description: "",
          qty: "",
          unit_cost: ""
        }],
      }
    },
    methods: {
      addRow: function() {
        var elem = document.createElement('li');
        this.rows.push({
          barcode: "",
          description: "",
          qty: "",
          unit_cost: ""
        });
      },
      removeElement: function(index){
        this.rows.splice(index,1)
      },

      ...mapActions(['receiveDelivery', 'updateInvQty']),
      receive(){
        console.log('delivery: ', this.dt);
        this.rows.or_no = this.dt.or_no

        this.rows.transaction = 'delivery'
        console.log('kind of trans: ', this.rows.transaction);

        this.dt.items = this.rows
        this.receiveDelivery({
          transaction: this.dt
        })

        this.updateInvQty({
          invqty: this.rows
        })



        $("#addDelTrans").modal('hide');
        $("#add_item_form")[0].reset();
      },
      
    },
    created(){
      //console.log('hilu',this.inventoryList)
    },
    // async beforeCreate(){
    //   await this.$store.dispatch("fetchInventoryList");
    //   await this.$store.dispatch("fetchSuppliersList");
      
    // }
}


</script>
