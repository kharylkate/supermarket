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
                  <input type="date" v-model="dt.transaction_date" class="form-control form-control-sm form-control form-control-sm-sm form__date" id="input_rtransaction_date" default="06/06/2020">
                </div>
                <div class="form-group col-md-3">
                  <label for="input_rtransaction_no">Delivery Receipt Number: </label>
                  <input type="number" v-model="dt.dr_no" class="form-control form-control-sm form-control form-control-sm-sm form__orNo" placeholder="1654325" id="input_rtransaction_no">
                </div>

                <div class="form-group col-md-6 mb-4">
                
                  <label >Supplier: </label>
                  <select name="suppliers" id="suppliers" v-model="dt.supplier_id" class="form-control form-control-sm">
                    <option selected hidden>Supplier</option>
                    <option v-for="supply in suppliersList" :key="supply.id" :value="supply.supplier_id">{{supply.company_name}}</option>
                  </select>
                </div>
              </div>

              <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mt-3 px-2" id="topName">
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
                          <label for="form__inventory_id">Barcode:</label>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="form__description">Product Description:</label>
                        </div>
                        <div class="form-group col-md-2">
                          <label for="form__quantity">Quantity:</label>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="form__unitcost">Cost Per Unit:</label>
                        </div>
                        <div class='form-group col-md-1'>
                          <label for="">Action:</label>
                        </div>
                      </div>
                  </li>
                  <li v-for="(row, index) in items" :key="index.id">
                  <div class="form-row d-flex col-md-12 mt-0">
                    <div class="form-group col-md-3">
                      <input type="text" v-model="row.barcode" list="inventory_id-list" class="form-control form-control-sm form-control form-control-sm-sm form__inventory_id" @keyup.enter="getinventory_id()" placeholder="Barcode" id="rtransaction_barcode" autocomplete="off">
                      <datalist id="inventory_id-list">
                        <option v-for="inv in inventoryList" :key="inv.id" :value="inv.barcode" >{{inv.product_description}}</option>
                      </datalist>
                    </div>
                    <div class="form-group col-md-3">
                      <input type="text" v-model="row.description" class="form-control form-control-sm form-control form-control-sm-sm form__description" id="rtransaction_prod_description" placeholder="Product Description" disabled>
                    </div>
                    <div class="form-group col-md-2">
                      <input type="number" v-model="row.quantity" @blur="getTotal()" class="form-control form-control-sm form-control form-control-sm-sm form__quantity" id="rtransaction_qty" placeholder="Quantity">
                    </div>
                    <div class="form-group col-md-3">
                      <input type="text" v-model="row.cost_per_unit" class="form-control form-control-sm form-control form-control-sm-sm form__unitcost" id="rtransaction_cost" placeholder="Cost Per Unit" disabled>
                    </div>
                    <div class='form-group col-md-1'>
                      <button class="btn btn-sm btn btn-danger rem_item text-white" type="button" @click="removeElement" id="Action"> <img src="../../static/icons/dash.svg" style="color:white" class="text-white" alt=""> </button>
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
                  <input type="text" v-model="dt.total_cost" class="form-control form-control-sm form-control form-control-sm-sm form__totalAmt text-right" placeholder="Total Amount">
                </div>
              </div>

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
import moment from "moment";

export default {
    name: 'modal-addDelTrans',
    computed: {
      ...mapGetters({
        suppliersList: 'suppliersList',
        inventoryList: 'inventoryList',
        deliveryList: 'deliveryList'
      }),

    },
    data() {
      return {
        items: [{
          barcode: "",
          description: "",
          quantity: "",
          cost_per_unit: ""
        }],
        dt: {
          total_cost: 0,
          transaction_date: new Date().toISOString().slice(0,10)
        },
        
      }
    },
    methods: {
      addRow: function() {
        var elem = document.createElement('li');
        this.items.push({
          inventory_id: "",
          description: "",
          quantity: "",
          cost_per_unit: ""
        });
        // var d =  new Date()
        // var e = new Date().toLocaleDateString()
        // console.log(e);
        // console.log(moment(d).format("MM/DD/YYYY"));
      },
      removeElement: function(index){
        if((this.items.length-1)==0){
          // alert("Item is required")
          var msg = "Item is required"
          this.toast(false, msg, 'danger')
        }else {
          this.items.splice(index, 1);
        }

      },
      getinventory_id(){
        console.log('inventory_id?', this.items[this.items.length-1].inventory_id)
        console.log(this.inventoryList);

        for(var i = 0; i < this.inventoryList.length; i++){
          if(this.inventoryList[i].barcode == this.items[this.items.length-1].barcode){
            this.items[this.items.length-1].description = this.inventoryList[i].product_description
            this.items[this.items.length - 1].inventory_id = this.inventoryList[i].inventory_id
            this.items[this.items.length - 1].cost_per_unit = this.inventoryList[i].unit_cost
          }
        }
        
        console.log('items: ',this.items)

      },
      ...mapActions(['receiveDelivery']),
      async receive(){

        var transdate = $("#input_rtransaction_date").val()
        var dr_no = $("#input_rtransaction_no").val()
        var suppliers = $("#suppliers").val()
        var barcode = $("#rtransaction_barcode").val()
        var prod_description = $("#rtransaction_prod_description").val()
        var qty = $("#rtransaction_qty").val()
        var transcost = $("#rtransaction_cost").val()

        if((transdate == null) || (dr_no == null) || (barcode == null) || (suppliers == null) || (prod_description == null) || (qty == null) || (transcost == null)){
          // alert("Please fill up form")
          var msg = "Please check for missing fields"
          this.toast(false, msg, 'danger')
        } else {
          this.dt.items = this.items
          this.dt.created_by = localStorage.uid
          await this.receiveDelivery({
            transaction: this.dt
          })
          .then((result) => {
            if(result.error){
              // alert(result.error)
              this.toast(false, result.error, 'danger')
            } else {
              $("#addDelTrans").modal('hide');
              $("#add_item_form")[0].reset();
              // alert(result.message)
              this.toast(false, result.message, 'success')
            }
          })
        }

        await this.$store.dispatch("fetchDTransactionsList")
        

      },
      toast(success, msg, variant) {
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
      getTotal: function(){
        var total = 0;
        console.log(this.items);
        for(var i = 0; i < this.items.length; i++){
          if(!isNaN(this.items[i].quantity) && !isNaN(this.items[i].cost_per_unit) && (this.items[i].quantity.length !=0) && (this.items[i].cost_per_unit.length !=0)) {
            total += (this.items[i].quantity * this.items[i].cost_per_unit)
          }
        }
        this.dt.total_cost = total
      },

    },
    created(){
      //console.log('hilu',this.inventoryList)
    },
    async beforeCreate(){
      await this.$store.dispatch("fetchSuppliersList")
      await this.$store.dispatch("fetchInventoryList")
    }
}


</script>
