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
          <form action="" id="add_supplier_form" @submit='onSubmit'>
            <div class="form-row justify-content-center">
              
              <div class="container text-center mt-3 mb-3">
                <div class="">
                  <img class="" src="../../static/box.png" alt="" width="130" height="100">
                </div>
              </div>

              <!-- <div class="form-group col-md-8">
                <label for="supplier_code">Supplier Code: </label>
                <input type="text" class="form-control" id="supplier_code" placeholder="Enter Supplier Code" autocomplete="off" required>
              </div> -->

              <div class="form-group col-md-8">
                <label for="compname">Company Name: </label>
                <input type="text" v-model="compName" class="form-control" id="compname" placeholder="Enter Company Name" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="contactno">Contact Number: </label>
                <input type="number" v-model="contactno" class="form-control" id="contactno" placeholder="Enter Contact Number" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="compadd">Company Address: </label>
                <input type="text" v-model="compAddress" class="form-control" id="compadd" placeholder="Enter Company Address" autocomplete="off" required>
              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" id="itemcancel">Cancel</button>
              <button type="submit" class="btn btn-primary">OK</button>
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
        code: "12345683",
        compName: "",
        contactno: "",
        compAddress: "",
        status: "active"
      }
    },
    methods: {
      ...mapActions(['addSupplier']),
      onSubmit(e){
        e.preventDefault();
        this.addSupplier(
          {
            code: this.code, 
            compName: this.compName, 
            contactno: this.contactno, 
            compAddress: this.compAddress, 
            status: this.status}
          );
        console.log('');
        $('#addSupplier').modal('hide');
        $('#add_supplier_form')[0].reset();
      }

    
    }
    
}
</script>