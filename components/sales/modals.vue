<template>
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

            
            <!-- <li v-if="!selectedTransaction">No item found</li> -->
            <!-- <div v-for="item in selectedTransaction" :key="item.id">
              <div>{{item.customerName}}</div>
            </div> -->
            <div v-if="selectedTransaction">
              <div class="form-row justify-content-center">
                <div class="container text-center mb-2">
                  <h5>LOU GEH SUPERMARKET</h5>
                  <small>Some bldg-name, st name, road name, STATE</small>
                </div>

                <div class="container row mt-3">
                  <div class="mr-auto">OR Number: {{selectedTransaction.orNo}}</div>    
                  <h6 class="ml-auto">{{selectedTransaction.transactionDate}}</h6>    
                </div>
                <div class="container row">
                  <div class="mr-auto">Customer Name: {{selectedTransaction.customerName}}</div> 
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
                      <tr v-for="(item,i) in selectedTransaction.items" :key="i">
                        <td>{{item.barcode}}</td>
                        <td>{{item.description}}</td>
                        <td>{{item.qty}}</td>
                        <td>{{item.unitcost}}</td>
                        <td>{{item.amt}}</td>
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
                        <td>PHP403.95</td>
                      </tr>
                      <tr>
                        <td>Cash</td>
                        <td>PHP1000.00</td>
                      </tr>
                      <tr>
                        <td>Change</td>
                        <td>PHP289.05</td>
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
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'modal-viewTrans',
    components: {
        // ...mapGetters ([
        //     'items'
        // ])
    }, 
    computed: {
      ...mapGetters({
        selectedTransaction: "getSelectedTransaction",
      }),

    },

    
    // created() {
    //   const test = this.$store.dispatch("getSelectedTransaction");
      
    // }
    
}
</script>