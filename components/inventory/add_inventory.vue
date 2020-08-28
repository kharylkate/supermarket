<template>
    <div class="modal fade" id="addDelTrans" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Item</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" id="add_item_form">
            <div class="form-row justify-content-center">
              <div class="container text-center rounded-circle mb-3">
                <img src="../../static/basket-flat.png" alt="" width="110" height="110">
              </div>

              <div class="form-group col-md-8">
                <label for="item_name">Product Description: </label>
                <input type="text" class="form-control" id="item_name" placeholder="Enter item name" autocomplete="off" required>
              </div>

              <!-- <div class="form-group col-md-8">
                <label for="barcode">Barcode: </label>
                <input type="number" class="form-control" id="barcode" placeholder="Enter barcode" autocomplete="off" required>
              </div> -->

              <div class="form-group col-md-8">
                <label for="item_supplier">Supplier: </label>
                <input type="text" class="form-control" id="item_supplier" placeholder="Enter Supplier" autocomplete="off" required>
              </div>

              <!-- <div class="form-group col-md-8">
                <label for="item_qty">Quantity: </label>
                <div class="input-group">
                  <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number border" disabled="disabled" data-type="minus" data-field="quant[1]">
                        <img src="../../static/icons/dash.svg" alt="">
                    </button>
                  </span>
                    <input type="text" name="quant[1]" id="item_qty" class="form-control input-number" value="0" min="1" max="10" autocomplete="off" required>
                  <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number border" data-type="plus" data-field="quant[1]">
                      <img src="../../static/icons/plus.svg" alt="">
                    </button>
                  </span>
                </div>
              </div> -->

              <!-- <div class="form-group col-md-8">
                <label for="item_cost">Cost per quantity:</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">₱</span>
                    </div>
                    <input type="number" class="form-control" id="item_cost" placeholder="Enter Cost per quantity" autocomplete="off" required>
                </div>
              </div> -->
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="itemcancel" data-dismiss="modal">Cancel</button>
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
export default {
    name: 'modal-addInventory',
    components: {
       
    }
    
}
</script>