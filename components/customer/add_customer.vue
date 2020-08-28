<template>
  <div class="modal fade" id="addCustomer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Customer</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" id="add_item_form" @submit='onSubmit'>
            <div class="form-row justify-content-center">
              <div class="container text-center rounded-circle mb-3">
                <img src="../../static/avatar_young_guy.png" alt="" width="115" height="130">
              </div>

              <div class="form-group col-md-8">
                <label for="cust_name">Customer Name: </label>
                <input v-model="name" type="text" class="form-control" id="cust_name" placeholder="Enter Customer Name" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="cust_address">Address: </label>
                <input v-model="address" type="text" class="form-control" id="cust_address" placeholder="Enter Address" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="cust_number">Contact Number: </label>
                <input v-model="contactno" type="tel" class="form-control" id="cust_number" placeholder="Enter Contact Number" autocomplete="off" required>
              </div>

              <!-- <div class="form-group col-md-8">
                <label for="cust_status">Status: </label>
                <select class="form-control" name="cust-status" id="cust-status">
                  <option value="" disabled selected>Select Status</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div> -->
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="itemcancel" data-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary">OK</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'modal-addCustomer',
    components: {
       
    },
    data(){
      return {
        id: "165005",
        name: "",
        address: "",
        contactno: "",
        status: "active"
      }
    },
    methods: {
      ...mapActions(['addCustomer']),
      onSubmit(e){
        e.preventDefault();
        this.addCustomer(
          {
            id: this.id, 
            name: this.name, 
            address: this.address, 
            contactno: this.contactno, 
            status: this.status}
          );
        console.log('');
        $('#addCustomer').modal('hide');
        $('#add_item_form')[0].reset();
      }

    
    }
    
}

</script>