<template>
  <div class="modal fade" id="editSupplier" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Supplier</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="form-row justify-content-center">

              <div class="form-group col-md-8">
                <label for="edit_supplier_code">Supplier Code: </label>
                <input type="text" class="form-control" id="edit_supplier_code" value="FLxKjllbrg" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="edit_compname">Company Name: </label>
                <input type="text" class="form-control" id="edit_compname" value="Beech Lasagna" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="edit_contactno">Contact Number: </label>
                <input type="tel" class="form-control" id="edit_contactno" value="+1-767-5554-872" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="edit_compadd">Company Address: </label>
                <input type="text" class="form-control" id="edit_compadd" value="1631 Goehring Rd #334, New Brighton, PA, 15066" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="edit_compstatus">Status: </label>
                <select class="form-control" name="edit_compstatus" id="edit_cust-status">
                  <option value="1" selected>Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
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