<template>
    <div class="modal fade" id="addDelTrans" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Receive Item</h5>
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
                <label for="item_name">Item Name: </label>
                <!-- <select name="item" id="item" class="form-control">
                  <option value="">Select Item</option>
                </select> -->
                <input type="text" class="form-control" id="item_name" placeholder="Enter item name" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
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
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name: 'modal-addDelTrans',
    components: {
      ...mapGetters([
        'inventory'
      ])
       
    }

  
}
</script>

<script>
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
  });

    $('.input-number').focusin(function(){
      $(this).data('oldValue', $(this).val());
    });

    $('.input-number').change(function() {
        
      minValue =  parseInt($(this).attr('min'));
      maxValue =  parseInt($(this).attr('max'));
      valueCurrent = parseInt($(this).val());
      
      name = $(this).attr('name');
      if(valueCurrent >= minValue) {
          $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
      } else {
          alert('Sorry, the minimum value was reached');
          $(this).val($(this).data('oldValue'));
      }
      if(valueCurrent <= maxValue) {
          $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
      } else {
          alert('Sorry, the maximum value was reached');
          $(this).val($(this).data('oldValue'));
      }
        
    });

  $(".input-number").keydown(function (e) {
          // Allow: backspace, delete, tab, escape, enter and .
          if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
              // Allow: Ctrl+A
              (e.keyCode == 65 && e.ctrlKey === true) || 
              // Allow: home, end, left, right
              (e.keyCode >= 35 && e.keyCode <= 39)) {
                  // let it happen, don't do anything
                  return;
          }
          // Ensure that it is a number and stop the keypress
          if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
          }
      });
    
</script>