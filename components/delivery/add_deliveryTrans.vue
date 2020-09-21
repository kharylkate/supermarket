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
                  <input type="date" v-model="dt.dtransaction_date" class="form-control form-control-sm form__date" id="input_rtransaction_date" default="06/06/2020">
                </div>
                <div class="form-group col-md-3">
                  <label for="input_rtransaction_no">Delivery Receipt Number: </label>
                  <input type="number" v-model="dt.dr_no" class="form-control form-control-sm form__orNo" placeholder="1654325" id="input_rtransaction_no">
                </div>

                <div class="form-group col-md-6 mb-4">
                
                  <label >Supplier: </label>
                  
                  <!-- <v-select v-model="dt.suppler_code" :options="suppliersList.companyt_name" ></v-select> -->
                    <input v-model="dt.supplier_code" class="form-control form-control-sm" list="suppliers" name="suppliers" autocomplete="off" placeholder="Supplier">      
                  <datalist id="suppliers">
                    <option v-for="supply in suppliersList" :key="supply.id" :value="supply.supplier_code">{{supply.company_name}}</option>
                  </datalist>
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
                          <label for="form__barcode">Barcode:</label>
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
                  <li v-for="(row, index) in rows" :key="index.id">
                  <div class="form-row d-flex col-md-12 mt-0">
                    <div class="form-group col-md-3">
                      <input type="text" v-model="row.barcode" list="barcode-list" class="form-control form-control-sm form__barcode" @keyup.enter="getbarcode()" placeholder="barcode" id="rtransaction_barcode" autocomplete="off">
                      <datalist id="barcode-list">
                        <option v-for="inv in inventoryList" :key="inv.id" :value="inv.barcode" >{{inv.product_description}}</option>
                      </datalist>
                    </div>
                    <div class="form-group col-md-3">
                      <input type="text" v-model="row.product_description" class="form-control form-control-sm form__description" placeholder="Product Description">
                    </div>
                    <div class="form-group col-md-2">
                      <input type="text" v-model="row.quantity" class="form-control form-control-sm form__quantity" placeholder="Quantity">
                    </div>
                    <div class="form-group col-md-3">
                      <input type="text" @keypress="getTotal()" v-model="row.cost_per_unit" class="form-control form-control-sm form__unitcost" placeholder="Cost Per Unit">
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
                  <input type="text" v-model="dt.total_cost" class="form-control form-control-sm form__totalAmt text-right" placeholder="Total Amount">
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
          product_description: "",
          quantity: "",
          cost_per_unit: ""
        }],
        dt: {
          total_cost: 0
        },
        
      }
    },
    methods: {
      addRow: function() {
        var elem = document.createElement('li');
        this.rows.push({
          barcode: "",
          description: "",
          quantity: "",
          cost_per_unit: ""
        });
      },
      removeElement: function(index){
        this.rows.splice(index,1)

        for(var i = 0; i < this.rows.length-1; i++){
          console.log(this.rows);
          if(this.rows[i].quantity && this.rows[i].cost_per_unit != ""){
            this.dt.total_cost += (parseInt(this.rows[i].quantity * this.rows[i].cost_per_unit))
          }
        }

      },
      getbarcode(){
        console.log('barcode?', this.rows[this.rows.length-1].barcode)
        console.log(this.inventoryList);

        for(var i = 0; i < this.inventoryList.length; i++){
          if(this.inventoryList[i].barcode == this.rows[this.rows.length-1].barcode){
            this.rows[this.rows.length-1].product_description = this.inventoryList[i].product_description
            // this.rows[this.rows.length-1].unit_cost = this.inventoryList[i].unit_cost
            this.rows[this.rows.length - 1].inventory_code = this.inventoryList[i].inventory_code
          }
        }
        
        console.log('rows: ',this.rows)
        // this.rows[this.rows.length-1].product_description = bc.product_description
        // console.log('product info: ', this.rows[this.rows.length-1].barcode, ', ', this.rows[this.rows.length-1].product_description);
        

      },
      ...mapActions(['receiveDelivery', 'updateInvQty']),
      async receive(){
        this.rows.total = this.dt.total_cost
        console.log('add total: ', this.rows.total);
        console.log('rows: ', this.rows);
        console.log('dt: ', this.dt);
        this.rows.or_no = this.dt.or_no;
        this.dt.items = this.rows

        await this.receiveDelivery({
          transaction: this.dt
        })

        
        // await this.receiveDeliveryItems({
        //   transaction: this.rows
        // })

        this.rows.transaction = 'delivery'

        for (let i = 0; i < this.rows.length; i++) {
          await this.updateInvQty({
            invqty: this.rows[i]
          });
        }

        $("#addDelTrans").modal('hide');
        $("#add_item_form")[0].reset();


      },
      getTotal(){
        for(var i = 0; i < this.rows.length-1; i++){
          console.log(this.rows);
          if(this.rows[i].quantity && this.rows[i].cost_per_unit != ""){
            this.dt.total_cost += (parseInt(this.rows[i].quantity * this.rows[i].cost_per_unit))
          }
        }

      }
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
