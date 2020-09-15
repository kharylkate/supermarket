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
            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="input_rtransaction_date">Date: </label>
                <input type="date" v-model="st.stransaction_date" class="form-control form__date" id="input_rtransaction_date" value="06/06/2020" disabled>
              </div>
              <div class="form-group col-md-3">
                <label for="input_stransaction_no">Sales Official Receipt Number: </label>
                <input type="number" v-model="st.or_no" class="form-control form__orNo" value="1654325" id="input_stransaction_no">
              </div>
            </div>
<hr>
            <div class="form-row mt-4">
              <div class="col-md-12"><p>Customer Information: </p></div>
              <div class="form-group col-md-3">
                <label for="input_cus_name">Customer Name: </label>
                <input type="text" v-model="st.customer_name" class="form-control form__cusname" id="input_cus_name" placeholder="Name">
              </div>
              <div class="form-group col-md-3">
                <label for="input_contno">Contact Number: </label>
                <input type="number" v-model="st.customer_contact_no" class="form-control cont_no" placeholder="Contact Number" id="input_contno">
              </div>
              <div class="form-group col-md-6">
                <label for="cus_address">Address: </label>
                <input type="text" v-model="st.customer_address" class="form-control cus_address" placeholder="Address" id="cus_address">
              </div>
            </div>
<hr>
              <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                
                    <label for="">Sales Transaction Items:</label>
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
                      <input type="text" list="barcode_list" v-model="row.barcode" class="form-control form__barcode" placeholder="barcode" id="rtransaction_barcode" autocomplete="off">
                        <datalist id="barcode_list">
                          <option v-for="items in inventoryList" :key="items.id" :value="items.barcode">{{items.product_description}}</option>
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
                  </div>
                </li>
                </ul>
              </div>

              <div class="form-row">
                <!-- {{inventoryList}} -->
                <div class="form-group ml-auto mr-1">
                  <label for="">Total Sales Transaction Amount:</label>
                  <input type="text" v-model="st.total_cost" class="form-control form__totalAmt text-right" placeholder="Total Amount">
                </div>
              </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="salescancel" data-dismiss="modal">Cancel</button>
              <button type="button" @click="saveSales()" class="btn btn-primary">OK</button>
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
      saveSales(){
        //st;
        console.log('sales clicked: ', this.st);
        console.log('rows', this.rows);
        this.rows.or_no = this.st.or_no
        console.log('sales clicked: ', this.rows);
        console.log('orno in rows: ', this.rows.or_no);
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
