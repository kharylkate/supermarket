<template>
    <div class="modal fade" id="addSales" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Sales Transaction</h5>
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
                <label for="sales_customer">Customer Name: </label>
                <input type="text" class="form-control" id="item_name" placeholder="Enter item name" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="items">Items: </label>
                <select name="" id="" class="form-control">
                  <option value="" class="form-control" selected disabled>Select Item</option>
                  <option value="" class="form-control" >Churned Milk 1kg</option>
                </select>
                <!-- <ul v-for="item in items" :key="item.id">
                  <li>{{items}}</li>
                </ul> -->
                <!-- <select class="form-control" id="items" name="items" v-for="item in items" :key="items.id">
                  <option>{{item}}</option>
                </select> -->
                <div></div>
              </div>

              <div class="form-group col-md-8">
                <label for="item_supplier">Supplier: </label>
                <input type="text" class="form-control" id="item_supplier" placeholder="Enter Supplier" autocomplete="off" required>
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
      // ...mapGetters([
      //     'items',
      // ])
       
    }
    
}

// $('.add').on('click', add);
// $('.remove').on('click', remove);

// function add() {
//   var new_chq_no = parseInt($('#total_chq').val()) + 1;
//   var new_input = "<input type='text' id='new_" + new_chq_no + "'>";

//   $('#new_chq').append(new_input);

//   $('#total_chq').val(new_chq_no);
// }

// function remove() {
//   var last_chq_no = $('#total_chq').val();

//   if (last_chq_no > 1) {
//     $('#new_' + last_chq_no).remove();
//     $('#total_chq').val(last_chq_no - 1);
//   }
// }
</script>