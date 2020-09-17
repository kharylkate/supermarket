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
                    <th scope="col" class="sort" data-sort="status">Customer Name</th>
                    <th scope="col" class="sort" data-sort="budget">Total Sales</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr v-for="sales in salesList" :key="sales.id">
                    <td>{{sales.or_no}}</td>
                    <td>{{ new Date(sales.stransaction_date).toDateString()}}, {{ new Date(sales.stransaction_date).getUTCHours()}}:{{ new Date(sales.stransaction_date).getUTCMinutes()}}:{{ new Date(sales.stransaction_date).getUTCSeconds()}} </td>
                    <td>{{sales.customer_name}}</td>
                    <td>₱{{(sales.total_cost)}}</td>
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
                  <div class="ml-auto">Date: {{ new Date(sales.stransaction_date).toDateString()}}, {{ new Date(sales.stransaction_date).getUTCHours()}}:{{ new Date(sales.stransaction_date).getUTCMinutes()}}:{{ new Date(sales.stransaction_date).getUTCSeconds()}}</div>    
                </div>
                <div class="container">
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
                        <td>{{items.quantity}}</td>
                        <td>{{(items.unit_cost)}}</td>
                        <td>{{(items.unit_cost * items.quantity).toFixed(2)}}</td>
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
                        <td>₱{{sales.total_cost}}</td>
                      </tr>
                      <tr>
                        <td>Cash</td>
                        <td>₱{{sales.payment_amt}}</td>
                      </tr>
                      <tr v-if="(sales.total_cost<sales.payment_amt)">
                        <td>Change </td>
                        <td> ₱{{(sales.payment_amt-sales.total_cost).toFixed(2)}}</td>
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
    data() {
      return {
        sales: {}
      }
    },
    computed: {
        ...mapGetters({
            salesTransactions: 'salesTransactions',
            salesList: 'salesList'
        })
    },
    methods: {
       ...mapActions(['selectTransaction']),
      select(sales) {
        this.sales = { ...sales }
        console.log(sales)
        var d = new Date('2020-05-02T07:00:00.000Z')
        this.sales.stransaction_date = d.toDateString()
        //console.log('date: ', d.toDateString())
      }
    },
    async beforeCreate(){
      await this.$store.dispatch("fetchSTransactionsList")
    }
}

</script>

<style scoped>

</style>
