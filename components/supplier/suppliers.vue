<template>
    <div id="suppliers" role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div class="container-fluid">
            <div class="">
                <div class="">
                <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                    <h4 class="text-uppercase">Suppliers</h4>
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
                      <button type="button" class="btn btn-sm lg-btn" data-toggle="modal" data-target="#addSupplier">
                        <!-- <img src="../../static/icons/file-earmark-plus.svg" alt=""> -->
                        Add Supplier
                    </button>
                    </div>
                    
                </div>

                

          <div>
            <b-table
              show-empty
              class="bg-white"
              id="btable"
              stacked="md"
              thead-class="thead-sea-green"
              :items="suppliersList"
              :fields="fields"
              :current-page="currentPage"
              :per-page="perPage"
              :filter="filter"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              >

              <template v-slot:cell(status)="row">
                <span v-if="row.item.status == true" class="badge badge-success">Active</span>
                <span v-else class="badge badge-secondary">Inactive</span>
              </template>

              <template v-slot:cell(actions)="row">
                <b-button size="sm" @click="select(row.item)" class="mr-1 lg-btn">
                  <img src="../../static/icons/pencil-square.svg" alt="">
                </b-button>
              </template>
            
              </b-table>

              <div class="overflow-auto">
                <b-pagination
                  v-model="currentPage"
                  class="paginations"
                  size="sm"
                  :total-rows="tablerows"
                  :per-page="perPage"
                  align="center"
                  aria-controls="deliverytable">
                </b-pagination>
              </div>

          </div>

                <!-- <div class="table-responsive bg-white rounded-lg">
                <table class="table table-data align-items-center table-flush table-hover">
                    <thead class="thead-sea-green">
                    <tr>
                        <th scope="col" class="sort" data-sort="name">Supplier ID</th>
                        <th scope="col" class="sort" data-sort="budget">Company Name</th>
                        <th scope="col" class="sort" data-sort="status">Contact Number</th>
                        <th scope="col" class="sort" data-sort="completion">Company Address</th>
                        <th scope="col" class="sort" data-sort="completion">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody class="list">
                        <tr v-for="supplier in suppliersList" :key="supplier.id">
                            <td>{{supplier.supplier_id}}</td>
                            <td>{{supplier.company_name}}</td>
                            <td>{{supplier.contact_no}}</td>
                            <td>{{supplier.company_address}}</td>
                            <td><span v-if="(supplier.status == true)" class="badge badge-success">Active</span>
                            <span v-if="(supplier.status == false)" class="badge badge-secondary">Inactive</span></td>
                            <td class="text-left">
                                <button id="btn-color" class="btn lg-btn" @click="(select(supplier))" data-toggle="modal" data-target="#editSupplier"><img src="../../static/icons/pencil-square.svg" alt=""> Edit</button>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
                </div> -->
            </div>
        </div>

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
                      <label for="edit_supplier_code">Supplier ID: </label>
                      <input type="text" v-model="supplier.supplier_id" class="form-control form-control-sm" id="edit_supplier_code" autocomplete="off" disabled>
                    </div>

                    <div class="form-group col-md-8">
                      <label for="edit_compname">Company Name: </label>
                      <input type="text" v-model="supplier.company_name" class="form-control form-control-sm" id="edit_compname" autocomplete="off" required>
                    </div>

                    <div class="form-group col-md-8">
                      <label for="edit_contactno">Contact Number: </label>
                      <input type="tel" v-model="supplier.contact_no" class="form-control form-control-sm" id="edit_contactno" autocomplete="off" required>
                    </div>

                    <div class="form-group col-md-8">
                      <label for="edit_compadd">Company Address: </label>
                      <input type="text" v-model="supplier.company_address" class="form-control form-control-sm" id="edit_compadd" autocomplete="off" required>
                    </div>

                    <div class="form-group col-md-8">
                      <label for="edit_compstatus">Status: </label>
                      <select class="form-control form-control-sm" v-model="supplier.status" name="edit_compstatus" id="edit_cust-status">
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                      </select>
                    </div>
                    
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" @click="update()" class="btn btn-primary">OK</button>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>

    <div class="toast">
        <div class="toast-header">
            Success
        </div>
        <div class="toast-body">
            <p>Supplier updated successfully</p>
        </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name: 'suppliers',
    data() {
        return {
          supplier: {},
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
          { key: 'supplier_id', label: 'Supplier ID', sortable: true, sortDirection: 'asc' },
          { key: 'company_name', label: 'Company Name', sortable: true },
          { key: 'contact_no', label: 'Contact Number', sortable: true, sortDirection: 'desc' },
          { key: 'company_address', label: 'Company Address', sortable: true},
          { key: 'status', 
            label: 'Status', 
            sortable: false, 
          },
          { key: 'actions', label: 'Actions' }
        ],
        }
    },
    computed: {
        ...mapGetters([
            'suppliersList'
        ]),
        tablerows() {
          return this.suppliersList.length
        },
    },
    methods: {
        select(supplier){
            console.log(supplier)
            this.supplier = {...supplier}  
            
            $("#editSupplier").modal('show')
        },
        ...mapActions(["updateSupplier"]),
        async update(){
          this.supplier.updated_by = localStorage.uid
          this.supplier.updated_at = "today"
          console.log('clicked', this.supplier)
          this.updateSupplier({
              supplier: this.supplier,
          })
          .then((result) => {
            if(result){
            //   this.toast(false, result.error, 'danger')
            // } else {
              // console.log(result)
              // alert(result)
              $("#editSupplier").modal('hide')
              this.toast(true, result.message, 'success')
            }
          })
          .catch(err => {
            this.toast(false, err.response.data.msg, 'danger')
          });
          await this.$store.dispatch("fetchSuppliersList")
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
    async beforeCreate() {
      await this.$store.dispatch("fetchSuppliersList")
    }
}
</script>

<style scoped>
.toast {
    margin-top: auto;
    margin-left: auto
}

.lg-btn {
  border: none;
}
</style>
