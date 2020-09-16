<template>
    <div role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
          <div class="container-fluid">
              <div class="">
                <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                  <h4 class="text-uppercase">Sales Transaction</h4>
                  <button class="btn btn-default lg-btn" data-toggle="modal" data-target="#addSales">New Transaction</button>
                </div>
              </div>

            <div class="table-responsive bg-white rounded-lg">
              <table class="table table-data align-items-center table-flush">
                <thead class="thead-sea-green">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Official Receipt Number</th>
                    <th scope="col" class="sort" data-sort="name">Transaction Date</th>
                    <!-- <th scope="col" class="sort" data-sort="status">Customer Name</th> -->
                    <th scope="col" class="sort" data-sort="budget">Total Sales</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="sales in salesList" :key="sales.id">
                    <td>{{sales.or_no}}</td>
                    <td>{{sales.stransaction_date}}</td>
                    <!-- <td>{{sales.customerName}}</td> -->
                    <td>{{sales.total_cost}}</td>
                    <td><button class="btn lg-btn" data-toggle="modal" data-target="#viewTransaction" @click="(select(sales))" ><img src="../../static/icons/eye.svg" alt=""></button>
                    <button class="btn lg-btn" data-toggle="modal" data-target="#view_trans" @click="(sales.items)"><img src="../../static/icons/printer.svg" alt=""></button></td>
                    
                    <!-- <td>
                        <div v-for="(item,i) in sales.items" :key="i"> 
                            Barcode: {{item.barcode}}
                            Description: {{item.description}}
                            Unit Cost: {{item.unitcost}}
                            Amount: {{item.amt}}
                        </div>
                    </td> -->
                    
                  </tr>
                </tbody>
              </table>
            </div>
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
                  <small>Some bldg-name, st name, road name, STATE</small>
                </div>

                <div class="container row mt-3">
                  <div class="mr-auto">OR Number: {{sales.or_no}}</div>    
                  <h6 class="ml-auto">{{sales.stransaction_date}}</h6>    
                </div>
                <div class="container row">
                  <div class="mr-auto">Customer Name: {{sales.customer_name}}</div> 
                  <div class="mr-auto">Contact Number: {{sales.customer_contact_no}}</div> 
                  <div class="mr-auto">Address: {{sales.customer_address}}</div> 
                </div>

                <div class="table-responsive">
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th>BARCODE</th>
                        <th>DESC</th>
                        <th>QTY</th>
                        <th>UNIT PRICE</th>
                        <th>AMT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="items in sales.items" :key="items.id">
                        <td>{{items.barcode}}</td>
                        <td>{{items.product_description}}</td>
                        <td>{{items.qty}}</td>
                        <td>{{items.unit_cost}}</td>
                        <td>{{(items.unit_cost * items.qty)}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
              

                <div class="container mb-5">
                  <table class="table-borderless">
                    <tbody>
                      <tr>
                        <td>Total</td>
                        <td>PHP{{sales.total_cost}}</td>
                      </tr>
                      <tr>
                        <td>Cash</td>
                        <td>PHP{{sales.payment_amt}}</td>
                      </tr>
                      <tr v-if="(sales.total_cost<sales.payment_amt)">
                        <td>Change</td>
                        <td>PHP{{sales.payment_amt-sales.total_cost}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                
              </div>
            </div>
            
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">OK</button>
              </div>
              
          </div>
          
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name: 'sales',
    computed: {
      ...mapGetters({
        salesList: 'salesList',
        sales: 'getSelectedTransaction'
      })
    },
    methods: {
      ...mapActions(['selectSales']),
      select(salestrans) {
        console.log("view sales: ", salestrans)
        this.selectSales({ ...salestrans })
      }
    },
    async beforeCreate(){
      await this.$store.dispatch("fetchSalesList")
    },
    created() {
      const transaction = this.$store.dispatch("getSelectedTransaction");
      console.log('@here: ', transaction);
    }
}

</script>

<style scoped>

</style>
