<template>
    <div class="modal fade" id="addInventory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Item</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" id="add_inventory_form">
            <div class="form-row justify-content-center">
              <div class="container text-center rounded-circle mb-3">
                <img src="../../static/basket-flat.png" alt="" width="110" height="110">
              </div>

              <div class="form-group col-md-8">
                <label for="edit_barcode">Barcode: </label>
                <input type="number" v-model="inventory.barcode" class="form-control form-control-sm" id="add_barcode" placeholder="Barcode">
              </div>

              <div class="form-group col-md-8">
                <label for="edit_name">Product Description: </label>
                <input type="text" v-model="inventory.product_description" class="form-control form-control-sm" id="add_description" placeholder="Product Description" autocomplete="off">
              </div>

              <div class="form-group col-md-8">
                <label for="item_cost">Cost per quantity:</label>
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">₱</span>
                    </div>
                    <input type="number" class="form-control form-control-sm" v-model="inventory.unit_cost" id="add_itemcost" placeholder="Enter Cost per quantity" autocomplete="off" required>
                </div>
              </div>

              <div class="form-group col-md-8">
                <label for="item_cost">Sales Cost:</label>
                <div class="input-group input-group-sm">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">₱</span>
                    </div>
                    <input type="number" class="form-control form-control-sm" v-model="inventory.sales_cost" id="add_salescost" placeholder="Enter Cost per quantity" autocomplete="off" required>
                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="cancel()">Cancel</button>
              <button type="button" @click="add()" class="btn btn-primary">OK</button>
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
    name: 'modal-addInventory',
    data() {
      return {
        inventory: {

        }
      }
    },
    components: {
       
    },
    methods: {
      ...mapActions(['addInventory']),
      async add(){

        var barcode = $("#add_barcode").val()
        var description = $("#add_description").val()
        var itemcost = $("#add_itemcost").val()
        var salescost = $("#add_salescost").val()

        if((barcode == "") || (description == "") || (itemcost == "") || (salescost == "")){
          var msg = "Please check for missing field"
          this.toast(false, msg, 'danger')
          // alert("Please fill in the form")
        } else {
          this.inventory.quantity = 0
          this.inventory.created_by = localStorage.uid
          this.inventory.created_at = "today"
          console.log(this.inventory);
          this.addInventory({
            inventory: this.inventory
          })
          .then((result)=>{
            if(result.error){
              // alert(result.error)
              this.toast(false, result.error, 'danger')
            } else {
              $("#addInventory").modal('hide');
              $('#add_inventory_form')[0].reset();
              // alert(result.message)
              var msg = "You have successfully added an item"
              this.toast(true, msg, 'success')
            }
          })
          await this.$store.dispatch("fetchInventoryList")
        }  
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
      cancel() {
        $("#addInventory").modal('hide');
        $('#add_inventory_form')[0].reset();
      }
    }
    
}
</script>