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
                  <input type="date" v-model="dt.dtransaction_date" class="form-control form__date" id="input_rtransaction_date" default="06/06/2020">
                </div>
                <div class="form-group col-md-3">
                  <label for="input_rtransaction_no">Delivery Receipt Number: </label>
                  <input type="number" v-model="dt.dr_no" class="form-control form__orNo" placeholder="DR Number" id="input_rtransaction_no">
                </div>

                <div class="form-group col-md-6 mb-4">
                  <label for="">Suppliers: </label>
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
                
                <ul id="row_items">
                  <li >
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
                      <div class="form-group col-md-6">
                        <select class="form-control" v-model="row.barcode" name="" id="">
                          <option disabled>Select Item</option>
                          <option v-for="item in inventoryList" :key="item.id" :value="item.barcode">{{item.barcode}} - {{item.product_description}}</option>
                        </select>
                        <!-- <input type="text" @keyup="newItem()" v-model="row.barcode" list="barcode_list" class="form-control form__barcode" placeholder="barcode" id="rtransaction_barcode" autocomplete="off">
                          <datalist id="barcode_list">
                          <option v-for="inv in inventoryList" :key="inv.id" :value="inv.barcode" @focusout="inventory(inv)">{{inv.product_description}}</option>
                          <option>Add New Item</option>
                          <button>button</button>
                        </datalist> -->
                      </div>
                      
                      <div class="form-group col-md-2 mb-2">
                        <input type="number" @keyup="getPrice()" v-model="row.qty" id="rtransaction_qty" class="form-control form__qty" placeholder="Quantity">
                      </div>
                      <div class="form-group col-md-3">
                        <input type="number" @keyup="getPrice()" v-model="row.unitcost" id="rtransaction_unitcost" class="form-control form__unitcost" placeholder="Cost Per Unit">
                      </div>
                      <div class='form-group col-md-1'>
                        <button class="btn btn-danger rem_item" type="button" @click="removeElement" id="Action">Remove</button>
                      </div>
                    </div>
                </li>
                </ul>
              </div>
              <!-- <div class="form-row mt-5">
                <div class="form-group ml-auto mr-1">
                  <label for="">Total Delivery Transaction Amount:</label>
                  <input type="number" v-model="dt.total_cost" class="form-control form__totalAmt" id="totalAmt" placeholder="Total Amount">
                </div>
              </div> -->

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="itemcancel" data-dismiss="modal">Cancel</button>
              <button type="button" @click="receiveDelivery()" class="btn btn-primary">OK</button>
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
          unitcost: ""
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
          unitcost: ""
        });
      },
      removeElement: function(index){
        this.rows.splice(index,1)
      },
      inventory(inv){
        console.log("item with this barcode: ",this.inv)
      },
      getPrice(){
        if($('.form__unitcost').val() != '' && $('.form__qty').val() != ''){
          var cost = $('.form__unitcost').val();
          var qty = $('.form__qty').val();
          var total = cost*qty
          console.log('cost: ', total);
          // var totalAmount = document.getElementById('#totalAmt')
          // totalAmount.innerHTML = total.toString;
          //$('.form__totalAmt').value(total)
           $('#totalAmt').val(total) //working
        }
      },
      receiveDelivery(){
        // this.dt = {...dt}
        console.log('d-transaction: ',this.dt);
        console.log('d-items: ', this.rows);
        // console.log($('.form__totalAmt').val())
        console.log('total cost', this.dt.total_cost);
        this.rows.dr_no = this.dt.dr_no;
        console.log('d-items: ', this.rows);
        
        // this.$store.dispatch("addDt", {dt: this.dt})
        // this.$store.dispatch("addDt_items", {items: this.rows})

        var lis = document.getElementById("row_items").getElementsByTagName("li").length
        console.log('there are ', lis-1, 'lis')





        // rows: this.rows
        // console.log("receiveDelivery clicked! items: ", this.rows);
        // console.log("receiveDelivery clicked! dtransaction: ", this.dt);
        // this.$store.dispatch("addDtrans", {
        //   dt: this.dt,
        // })
        // .then((result) => {
        //   if(result){
        //     alert(result)
        //     $("#addDelTrans").hide();
        //   }
        // })

      },
      
    },
    created(){
      //console.log('hilu',this.inventoryList)
    },
    async beforeCreate(){
      await this.$store.dispatch("fetchInventoryList");
      await this.$store.dispatch("fetchSuppliersList");
      
    }
}


</script>
