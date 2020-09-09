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
            <div >
              <div class="form-row justify-content-center">
                <div class="container text-center mb-2">
                  <h5></h5>
                  <small>Some bldg-name, st name, road name, STATE</small>
                </div>

                <div class="container row mt-3">
                  <div class="mr-auto"></div>    
                  <h6 class="ml-auto"></h6>    
                </div>

                <div class="table-responsive">
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th>BARCODE</th>
                        <th>DESC</th>
                        <th>QTY</th>
                        <th>UNIT PRICE</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr v-for="item in selectedDelivery" :key="item.dt_items_code">
                        <td>{{item.dr_no}}</td>
                        <td>{{item.barcode}}</td>
                        <td>{{item.qty}}</td>
                        <td>₱{{item.unit_cost}}</td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- <div class="text-right">
                    Total: ₱ {{ }}
                  </div> -->
                </div>
            </div>
                
              </div>
            </div>              
          </div>
          <div class="modal-footer my-0">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
      }),
    },
    created() {
      const dt_items = this.$store.dispatch("getSelectedDelivery");
    }
    // computed: {
    //   ...mapGetters({
    //     selectedDelivery: "getSelectedDelivery",
        
    //   })

    // },
    // created() {
    //   const test = this.$store.dispatch("getSelectedDelivery");
      
    // }
    
}
</script>