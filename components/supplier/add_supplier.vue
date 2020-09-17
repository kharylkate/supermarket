<template>
  <div class="modal fade" id="addSupplier" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Supplier</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <form action="" id="add_supplier_form">
            <div class="form-row justify-content-center">
              
              <div class="container text-center mt-3 mb-3">
                <div class="">
                  <img class="" src="../../static/box.png" alt="" width="130" height="100">
                </div>
              </div>
              
              <div class="form-group col-md-8">
                <label for="compname">Company Name: </label>
                <input type="text" v-model="supplier.company_name" class="form-control" id="compname" placeholder="Enter Company Name" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="contactno">Contact Number: </label>
                <input type="number" v-model="supplier.contact_no" class="form-control" id="contactno" placeholder="Enter Contact Number" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="compadd">Company Address: </label>
                <input type="text" v-model="supplier.company_address" class="form-control" id="compadd" placeholder="Enter Company Address" autocomplete="off" required>
              </div>

              <input type="hidden" v-model="supplier.created_at" value="today">
              <input type="hidden" v-model="supplier.status" value="1">
              <input type="hidden" v-model="supplier.created_by" value="154151757">
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" id="itemcancel">Cancel</button>
              <button type="button" @click="add()" class="btn btn-primary">OK</button>
            </div>
            <!-- <button class="btn btn-primary" type="submit">Submit form</button> -->
          </form>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'modal-addSupplier',
    components: {
       
    },
    data(){
      return {
        supplier: {
          
        }
      }
    },
    methods: {
      ...mapActions(['addSupplier']),
      add(){
        this.addSupplier({
          supplier: this.supplier 
        })
        .then((result) => {
          if(result){
            alert(result)
            $("#addSupplier").hide();
            $('#add_supplier_form')[0].reset();
          }
        })
        
      }

    
    }
    
}
</script>