<template>
    <div id="inventorypage" role="main" class="main-content col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div>
            <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                <h4 class="text-uppercase inventory_page">Inventory</h4>
                <div class="btn-toolbar mb-2 mb-md-0">
                
                </div>
            </div>
        </div>

        <div class="form-group row">
          <b-col cols="3">
            <b-form-group>
              <b-input-group size="sm">
                <b-form-input
                  v-model="filter"
                  type="search"
                  id="filterInput"
                  placeholder="Type to Search"
                  autocomplete="off"
                ></b-form-input>
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>

            <div class="form-group mx-2 col-md-2">
              <div class="input-group input-group-sm">
                <div class="input-group-prepend">
                  <label class="input-group-text">Item</label>
                </div>
                <select class="form-control form-control-sm search-filter" @change="items()" v-model="filter_items" name="filter_supplier" id="filter_supplier">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>

            <div class="form-group ml-auto mr-3">
              <button type="button" class="btn btn-sm lg-btn btn_add" data-toggle="modal" data-target="#addInventory">
                Add Item
              </button>
            </div>
            
        </div>

        

        <div class="">

          
          <b-table
          show-empty
          id="btable"
          stacked="md"
          class="bg-white"
          thead-class="thead-sea-green table-thead"
          :items="inventoryList"
          :fields="fields"
          :filter="filter"
          :current-page="currentPage"
          :per-page="perPage"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          @filtered="onFiltered"
          >

          <template v-slot:cell(actions)="row">
            <b-button size="sm" @click="select(row.item)" class="mr-1 lg-btn">
              <img src="../../static/icons/pencil-square.svg" alt="">
            </b-button>
          </template>
        
          </b-table>

          <div class="overflow-auto">
               <b-pagination
                v-model="currentPage"
                :total-rows="tablerows"
                :per-page="perPage"
                align="center"
                class="mb-3 paginations"
                size="sm"
                aria-controls="btable">
            </b-pagination>
          </div>
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
                  <input type="number" v-model="inventory.barcode" class="form-control form-control-sm" id="edit_barcode" value="" disabled>
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
                <button type="button" class="btn btn-primary item_update" id="item_update" @click="update()">OK</button>
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
        filter_items: 5,
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: '',
        sortDesc: false,
        filter: null,
        sortDirection: 'asc',
        fields: [
        { key: 'barcode', label: 'Barcode', sortable: true, sortDirection: 'desc' },
        { key: 'product_description', label: 'Product Description', sortable: true },
        { key: 'quantity', label: 'Quantity', sortable: true, sortDirection: 'desc' },
        { key: 'unit_cost', label: 'Unit Cost', sortable: true,
        formatter: (value, key, item) => {
            return '₱ '+value
          }
        },
        { key: 'sales_cost', label: 'Sales Cost', sortable: true,
          formatter: (value, key, item) => {
            return '₱ '+value
          }
        },
        { key: 'actions', label: 'Actions' }
      ],
      }
    },
    computed: {
        ...mapGetters({
          // inventoryList: 'inventoryList'
        }),
        tablerows() {
          // return this.inventoryList.length
        },
    },
    methods: {
        select(inventory) {
            console.log(inventory);

            this.inventory = { ...inventory };
            $("#editTrans").modal('show')
        },
        ...mapActions(['updateInventory']),
        async update(){
          this.inventory.updated_by =  localStorage.uid
          this.inventory.updated_at = "today"

          await this.updateInventory({
              inventory: this.inventory,
          })
          .then((result) => {
            if(result.error){
              // alert(result.error)
              this.toast(false, result.error, 'danger')
            } else {
              $("#editTrans").modal('hide')
              // alert(result)
              var msg = "You have successfully updated an item"
              this.toast(true, msg, 'success')
            }
          })
          await this.$store.dispatch("fetchInventoryList")

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
        
        items() {
          this.perPage = this.filter_items
        },
        onFiltered(filteredItems) {
          this.totalRows = filteredItems.length
          this.currentPage = 1
        }
    },
    async created() {
      // await this.$store.dispatch("fetchInventoryList")
  },
}
</script>

<style>
.paginations .active .page-link {  
    background-color: #95c282 !important;  
    border-color: #95c282 !important;  
}

.paginations .page-link {
  color: gray ;
}

.paginations :hover {
  color: black;
  background-color: #bbe1aa!important;
}

.lg-btn {
  border: none;
}
</style>
