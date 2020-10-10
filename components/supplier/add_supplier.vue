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
                <input type="text" v-model="supplier.contact_no" class="form-control" id="contactno" placeholder="Enter Contact Number" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="compadd">Company Address: </label>
                <input type="text" v-model="supplier.company_address" class="form-control" id="compadd" placeholder="Enter Company Address" autocomplete="off" required>
              </div>

              <!-- <input type="hidden" v-model="supplier.created_at" value="today">
              <input type="hidden" v-model="supplier.status" value="1">
              <input type="hidden" v-model="supplier.created_by" value="154151757"> -->
              
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
import { mapGetters } from "vuex";

export default {
    name: 'modal-addSupplier',
    computed: {
      ...mapGetters({
        suppliersList: "suppliersList"
      })
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
        
        // var compname = $("#compname").val()
        // var contactno = $("#contactno").val()
        // var compadd = $("#compadd").val()

        // if((compname == "") || (contactno == "") || (compadd == "")){
        //   var msg = "Please check for missing field"
        //   this.toast(false, msg, 'danger')
        // } else {
          this.supplier.supplier_id = this.suppliersList[this.suppliersList.length-1].supplier_id+1
          this.supplier.status = true
          this.supplier.created_by = localStorage.uid
          this.supplier.created_at = "today"
          this.addSupplier({
            supplier: this.supplier
          })
          .then((result) => {
            if(result){
            //   // alert(result.error)
            //   this.toast(false, result.error, 'danger')
            // } else {
              $("#addSupplier").modal('hide');
              $('#add_supplier_form')[0].reset();
              // alert(result.message)
              // var msg = "You have successfully added a supplier"
              this.toast(true, result.message, 'success')
            }
          })
          .catch(err => {
            this.toast(false, err.response.data.msg, 'danger')
            
          });
        // }   
      },
      toast(success = false, msg, variant) {
        if(success){
          this.$bvToast.toast(msg, {
            title: 'Success',
            toaster: 'b-toaster-bottom-right',
            solid: true,
            variant: variant,
            autoHideDelay: 3000,
          })
        } else {
          this.$bvToast.toast(msg, {
            title: 'Error',
            toaster: 'b-toaster-bottom-right',
            solid: true,
            variant: variant,
            autoHideDelay: 3000,
          })
        }
      },

    
    }
    
}
</script>