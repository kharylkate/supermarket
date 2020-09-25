<template>
    <div id="inventorypage" role="main" class="main-content col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div>
            <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                <h4 class="text-uppercase">Inventory</h4>
                <div class="btn-toolbar mb-2 mb-md-0">
                <button type="button" class="btn lg-btn" data-toggle="modal" data-target="#addInventory">
                    <img src="../../static/icons/file-earmark-plus.svg" alt="">
                    Add Item
                </button>
                </div>
            </div>
        </div>
        
        <div class="table-responsive bg-white rounded-lg">
            <table class="table table-data align-items-center table-flush">
            <thead class="thead-sea-green">
                <tr>
                    <!-- <th scope="col" class="sort" data-sort="name">Delivery Receipt Number</th> -->
                    <th scope="col" class="sort" data-sort="name">Barcode</th>
                    <th scope="col" class="sort" data-sort="name">Product Description</th>
                    <th scope="col" class="sort" data-sort="status">Quantity</th>
                    <th scope="col" class="sort" data-sort="budget">Cost per unit</th>
                    <th scope="col" class="sort" data-sort="budget">Sales Cost</th>
                    <th>Action</th>
                    <!-- <th scope="col">Action</th> -->
                </tr>
            </thead>
            <tbody class="list" id="body-bg">
                <tr v-for="item in inventoryList" :key="item.id">
                    <!-- <td>{{item.drNo}}</td> -->
                    <td>{{item.barcode}}</td>
                    <td>{{item.product_description}}</td>
                    <td>{{item.quantity}}</td>
                    <td>₱{{item.unit_cost}}</td>
                    <td>₱{{item.sales_cost}}</td>
                    <td><button id="btn-color" class="btn lg-btn" data-toggle="modal" @click="(select(item))" data-target="#editTrans"><img src="../../static/icons/pencil-square.svg" alt=""> Edit</button></td>
                </tr>
            </tbody>
            </table>
        </div>

        <div class="modal fade" id="editTrans" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="form-row justify-content-center">
                
                <div class="form-group col-md-8">
                  <label for="edit_barcode">Barcode: </label>
                  <input type="number" v-model="inventory.barcode" class="form-control form-control-sm" id="edit_barcode" value="">
                </div>

                <div class="form-group col-md-8">
                  <label for="edit_name">Product Description: </label>
                  <input type="text" v-model="inventory.product_description" class="form-control form-control-sm" id="edit_name" value="">
                </div>

                <div class="form-group col-md-8">
                  <label for="edit_qty">Quantity: </label>
                  <input type="number" v-model="inventory.quantity" class="form-control form-control-sm" id="edit_qty" value="" disabled>
                </div>

                <div class="form-group col-md-8">
                  <label for="edit_cpu">Cost Per Unit: </label>
                  <input type="number" v-model="inventory.unit_cost" class="form-control form-control-sm" id="edit_cpu" value="">
                </div>

                <div class="form-group col-md-8">
                  <label for="edit_sc">Sales Cost: </label>
                  <input type="number" v-model="inventory.sales_cost" class="form-control form-control-sm" id="edit_sc" value="">
                </div>

              
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" @click="update()">OK</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';


export default {
    name: 'inventory',
    data() {
        return {
        inventory: {},
        }
    },
    computed: {
        ...mapGetters({
            inventoryList: 'inventoryList'
        })
    },
    methods: {
        select(inventory) {
            console.log(inventory);

            this.inventory = { ...inventory };
        },
        ...mapActions(['updateInventory']),
        async update(){
          this.inventory.updated_by =  localStorage.uid
          this.inventory.updateby_at = "today"

          console.log('clicked', this.inventory)
          await this.updateInventory({
              inventory: this.inventory,
          })
          .then((result) => {
              console.log(result)
              $("#editTrans").modal('hide')
              alert(result)
              
          })

          await this.$store.dispatch("fetchInventoryList")
        }
    },
    async beforeCreate() {
        await this.$store.dispatch("fetchInventoryList")
  },
}
</script>
