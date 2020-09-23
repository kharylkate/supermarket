<template>
    <div class="modal fade" id="editDelTrans" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Delivery</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="form-row justify-content-center">

                <div class="form-group col-md-8">
                  <label for="edit_barcode">Barcode: </label>
                  <input type="number" class="form-control form-control-sm" id="edit_barcode" value="15304218" disabled>
                </div>

                <div class="form-group col-md-8">
                  <label for="edit_item_name">Item Name: </label>
                  <input type="text" class="form-control form-control-sm" id="edit_item_name" value="Churned Milk 1kg">
                </div>

                <div class="form-group col-md-8">
                  <label for="edit_item_name">Cost Per Unit: </label>
                  <input type="text" class="form-control form-control-sm" id="edit_cost" value="₱112.50">
                </div>

                <div class="form-group col-md-8">
                  <label for="edit_item_supplier">Supplier: </label>
                  <input type="text" class="form-control form-control-sm" id="edit_item_supplier" value="Bucks Milwaukee" disabled>
                </div>

                <!-- <div class="form-group col-md-8">
                  <label for="edit_item_qty">Quantity: </label>
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default btn-number border" disabled="disabled" data-type="minus" data-field="quant[40]">
                          <img src="../../static/icons/dash.svg" alt="">
                      </button>
                    </span>
                      <input type="number" name="quant[40]" id="edit_item_qty" class="form-control form-control-sm input-number" value="40" min="1" max="100">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-default btn-number border" data-type="plus" data-field="quant[40]">
                        <img src="../../static/icons/plus.svg" alt="">
                      </button>
                    </span>
                  </div>
                </div>

                <div class="form-group col-md-8">
                  <label for="edit_item_cost">Cost per quantity:</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">₱</span>
                  </div>
                  <input type="number" class="form-control form-control-sm" id="edit_item_cost" value="112.50">
                </div>
                </div> -->
                
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" id="edit_submit" name="edit_submit">OK</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'modal-addDelTrans',
    components: {
       
    }
    
}
</script>