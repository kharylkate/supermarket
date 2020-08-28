<template>
  <div class="modal fade" id="editCustomer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Customer</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" id="edit_item_form">
            <div class="form-row justify-content-center">
              <div class="form-group col-md-8">
                <label for="edit_cust_name">Customer Name: </label>
                <input type="text" class="form-control" id="edit_cust_name" value="Dorian Havilliard" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="edit_cust_address">Address: </label>
                <input type="text" class="form-control" id="edit_cust_address" value="1500 S Ave Kn Sta #17, Portales, NM, 88130" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="edit_cust_number">Contact Number: </label>
                <input type="tel" class="form-control" id="edit_cust_number" value="(203) 796-9824" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="edit_cust_status">Status: </label>
                <select class="form-control" name="edit_cust-status" id="edit_cust-status">
                  <option value="1" selected>Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="edit_itemcancel" data-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary">OK</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'modal-editSupplier',
    components: {
       
    }
    
}
</script>