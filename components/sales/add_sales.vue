<template>
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
          <form action="" id="add_item_form">
            <div class="row col-md-12">
              <div class="card col-md-6">
                  <div class="form-row">

                    <div class="form-group mx-3">
                      <label for="input_rtransaction_date">Date: </label>
                      <input type="date" v-model="st.stransaction_date" class="form-control form-control-sm form__date" id="input_rtransaction_date" value="06/06/2020" >
                    </div>
                    <div class="form-group">
                      <label for="input_stransaction_no">Sales Official Receipt Number: </label>
                      <input type="number" v-model="st.or_no" class="form-control form-control-sm form__orNo" value="1654325" id="input_stransaction_no">
                    </div>
                  </div>
                  <hr>
                  <div class="form-group mt-3">
                    <div><p>Customer Information: </p></div>
                    <div class="container">
                      <div class="form-group form-group-sm">
                      <label for="input_cus_name">Customer Name: </label>
                      <input type="text" v-model="st.customer_name" class="form-control form-control-sm form__cusname" id="input_cus_name" placeholder="Name">
                    </div>
                    <div class="form-group">
                      <label for="input_contno">Contact Number: </label>
                      <input type="number" v-model="st.customer_contact_no" class="form-control form-control-sm cont_no" placeholder="Contact Number" id="input_contno">
                    </div>
                    <div class="form-group">
                      <label for="cus_address">Address: </label>
                      <input type="text" v-model="st.customer_address" class="form-control form-control-sm cus_address" placeholder="Address" id="cus_address">
                    </div>
                    </div>
                  </div>
              </div>
              <div class="card col-md-6">
                <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 px-2" id="topName">
                
                    <label for="">Sales Transaction Items:</label>
                    <div class="btn btn-sm-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn btn-sm lg-btn btn-sm_rtrans text-white" id="btn btn-sm_rtransaction_add" @click="addRow">
                        Add Items
                    </button>
                    </div>
                </div>
                <div class="card">
                  
                  <ul>
                    <li>
                        <div class="form-row d-flex col-md-12 mt-2">
                          <div class="form-group col-md-3">
                            <label for="form__barcode">Barcode</label>
                          </div>
                          <div class="form-group col-md-3">
                            <label for="form__description">Product Description</label>
                          </div>
                          <div class="form-group col-md-2">
                            <label for="form__quantity">Quantity</label>
                          </div>
                          <div class="form-group col-md-3">
                            <label for="form__unitcost">Cost Per Unit</label>
                          </div>
                          <div class='form-group col-md-1'>
                            <label for="">Action:</label>
                          </div>
                        </div>
                    </li>
                    <li v-for="(row, index) in rows" :key="index.id">
                    <div class="form-row d-flex col-md-12">
                      <div class="form-group col-md-3">
                        <input @keyup.enter="getbarcode()" type="text" list="barcode_list" v-model="row.barcode" class="form-control form-control-sm form__barcode" placeholder="barcode" id="rtransaction_barcode" autocomplete="off">
                          <datalist id="barcode_list">
                            <option v-for="items in inventoryList" :key="items.id" :value="items.barcode">{{items.product_description}}</option>
                          </datalist>
                      </div>
                      <div class="form-group col-md-3">
                        <input type="text" v-model="row.product_description" class="form-control form-control-sm form__description" placeholder="Product Description" disabled>
                      </div>
                      <div class="form-group col-md-2">
                        <input type="text" v-model="row.quantity" class="form-control form-control-sm form__quantity" placeholder="Quantity">
                      </div>
                      <div class="form-group col-md-3">
                        <input type="text" v-model="row.unit_cost" class="form-control form-control-sm form__unitcost" placeholder="Cost Per Unit" disabled>
                      </div>
                      <div class='form-group col-md-1'>
                        <button class="btn btn-sm btn btn-danger rem_item text-white" type="button" @click="removeElement" id="Action"> <img src="../../static/icons/dash.svg" class="text-white" alt=""> </button>
                      </div>
                    </div>
                  </li>
                  </ul>
                </div>

                <div class="form-row mt-5">
                  <div class="form-group ml-auto col-md-3 mr-1">
                    <label for="">Total Sales Amount:</label>
                    <input type="text" v-model="st.total_cost" class="form-control form-control-sm form__totalAmt text-right" placeholder="Total Sales Amount">
                  </div>

                  <div class="form-group col-md-3 mr-1">
                    <label for="">Payment Amount:</label>
                    <input type="text" v-model="st.payment_amt" class="form-control form-control-sm form__totalAmt text-right" placeholder="Payment Amount">
                  </div>
                </div>
              </div>
            </div>
            <hr>
              


            <div class="modal-footer">
              <button type="button" class="btn btn-sm btn btn-secondary text-white" id="salescancel" data-dismiss="modal">Cancel</button>
              <button type="button" @click="saveSales()" class="btn text-white btn-sm btn btn-primary">OK</button>
            </div>
            <!-- <button class="btn btn-sm btn btn-sm-primary" type="submit">Submit form</button> -->
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
    name: 'modal-addSales',
    computed: {
      ...mapGetters({
        salesList: 'salesList',
        inventoryList: 'inventoryList'
      }),
    },
    data() {
      return {
        st: {},
        inv: {},
        rows: [{
          barcode: "",
          product_description: "",
          quantity: "",
          unitcost: ""
        }]
      }
    },
    methods: {
      addRow: function() {
        var elem = document.createElement('li');
        this.rows.push({
          barcode: "",
          product_description: "",
          quantity: "",
          unitcost: ""
        });
      },
      removeElement: function(index){
        this.rows.splice(index,1)
      },
      getbarcode(){
        console.log('barcode?', this.rows[this.rows.length-1].barcode)
        console.log(this.inventoryList);

        for(var i = 0; i < this.inventoryList.length; i++){
          if(this.inventoryList[i].barcode == this.rows[this.rows.length-1].barcode){
            this.rows[this.rows.length-1].product_description = this.inventoryList[i].product_description
            this.rows[this.rows.length-1].unit_cost = this.inventoryList[i].unit_cost
          }
        }
        
        console.log('rows: ',this.rows)
        // this.rows[this.rows.length-1].product_description = bc.product_description
        // console.log('product info: ', this.rows[this.rows.length-1].barcode, ', ', this.rows[this.rows.length-1].product_description);
        

      },
      ...mapActions(['addSales', 'addSalesItems', 'updateInvQty']),
      saveSales(){
        this.rows.or_no = this.st.or_no
        this.rows.transaction = 'sales'
        //this.st.items = this.rows 
        this.addSales({
          sales: this.st
        })
        
        this.addSalesItems({
          sales: this.rows
        })
        
        this.updateInvQty({
          invqty: this.rows
        })

        $("#addSales").modal('hide');
        $("#add_item_form")[0].reset();
      },
    },
    created(){
      //console.log('hilu',this.inventoryList)
    },
    async beforeCreate(){
      await this.$store.dispatch("fetchSalesList")
      await this.$store.dispatch("fetchInventoryList")
    }
    
}


</script>
