<template>
    <div class="modal fade" id="viewDelivery" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Deliveries</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
                
            
            <!-- <li v-if="!selectedDelivery">No item found</li> -->
            <!-- <div v-for="item in selectedDelivery" :key="item.id">
              <div>{{item.customerName}}</div>
            </div> -->
            <div v-if="selectedDelivery">
              <div class="form-row justify-content-center">
                <div class="container text-center mb-2">
                  <h5>{{selectedDelivery.supplier}}</h5>
                  <small>Some bldg-name, st name, road name, STATE</small>
                </div>

                <div class="container row mt-3">
                  <div class="mr-auto">DR No: {{selectedDelivery.drNo}}</div>    
                  <h6 class="ml-auto">{{selectedDelivery.date}}</h6>    
                </div>

                <div class="table-responsive">
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th>BARCODE</th>
                        <th>DESC</th>
                        <th>QTY</th>
                        <th>UNIT PRICE</th>
                        <!-- <th>AMT</th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item,i) in selectedDelivery.deliveries" :key="i">
                        <td>{{item.barcode}}</td>
                        <td>{{item.description}}</td>
                        <td>{{item.qty}}</td>
                        <td>₱{{item.unitcost}}</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td></td>
                          <td>Total: </td>
                          <td>₱{{selectedDelivery.totalAmt}}</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
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
    name: 'modal-viewDelivery',
    components: {
        // ...mapGetters ([
        //     'items'
        // ])
    }, 
    computed: {
      ...mapGetters({
        selectedDelivery: "getSelectedDelivery",
        
      })

    },
    created() {
      const test = this.$store.dispatch("getSelectedDelivery");
      
    }
    
}
</script>