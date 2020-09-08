<template>
    <div class="modal fade" id="addDelTrans" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Receive Item</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" id="add_item_form">
            <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="input_rtransaction_date">Date: </label>
                  <input type="date" class="form-control form__date" id="input_rtransaction_date" default="06/06/2020">
                </div>
                <div class="form-group col-md-3">
                  <label for="input_rtransaction_no">Delivery Receipt Number: </label>
                  <input type="number" class="form-control form__orNo" id="input_rtransaction_no">
                </div>

                <div class="form-group col-md-6 mb-4">
                  <label for="">Suppliers: </label>
                  <div class="">                     
                    <button type="button border-secondary" class="form-control btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Suppliers
                    </button>
                    <div class="dropdown-menu col-md-12">
                      <div class="input-group px-2">
                        <input type="text" class="form-control" placeholder="Supplier" aria-label="Supplier" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                          <span class="input-group-text" id="basic-addon2"><img src="../../static/icons/search.svg" alt=""></span>
                        </div>
                      </div>
                      <div class="dropdown-divider"></div>
                        <div class="dropdown-item"><a href="">hakdog</a></div>
                        <div class="dropdown-item"><a href="">cheezeballs</a></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                    <label for="">Delivery Transaction Items:</label>
                    <div class="btn-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn btn-sm lg-btn btn_rtrans text-white" data-toggle="modal" id="btn_rtransaction_add" data-target="#addItemToInventory">
                        Add Items
                    </button>
                    </div>
                </div>
              <div class="card">
                
                <div class="form-row d-flex col-md-12 my-2">
                  <div class="form-group col-md-3">
                    <label for="form__barcode">Barcode:</label>
                    <input type="text" class="form-control form__barcode" placeholder="barcode" id="rtransaction_barcode">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="form__description">Product Description:</label>
                    <input type="text" class="form-control form__description" placeholder="Product Description">
                  </div>
                  <div class="form-group col-md-2">
                    <label for="form__qty">Quantity:</label>
                    <input type="text" class="form-control form__qty" placeholder="Quantity">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="form__unitcost">Cost Per Unit:</label>
                    <input type="text" class="form-control form__unitcost" placeholder="Cost Per Unit">
                  </div>
                  <div class="form-group col-md-1">
                    <label for="">Action:</label>
                    <button class="btn btn-danger" id="Action">Remove</button>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group ml-auto mr-1">
                  <label for="">Total Delivery Transaction Amount:</label>
                  <input type="text" class="form-control form__totalAmt text-right" placeholder="Total Amount">
                </div>
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
$('.btn_rtrans').click(function(e){
  e.preventDefault();
  console.log('1')
  // thisElement = document.getElementById('rtransaction_barcode');
  // console.log('2')
  // container.appendChild(thisElement)
  // console.log('3')
})


// function clickMe(id){
//   var thisElement = document.getElementById('#rtransaction_barcode');
//   container.appendChild(thisElement);
// }

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