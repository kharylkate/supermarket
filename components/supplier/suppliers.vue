<template>
    <div id="suppliers" role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div class="container-fluid">
            <div class="">
                <div class="">
                <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                    <h4 class="text-uppercase">Suppliers</h4>
                    <div class="btn-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn lg-btn" data-toggle="modal" data-target="#addSupplier">
                        <img src="../../static/icons/file-earmark-plus.svg" alt="">
                        Add Supplier
                    </button>
                    </div>
                </div>
                </div>


                <div class="table-responsive bg-white rounded-lg">
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
                </div>
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
                <input type="text" v-model="supplier.supplier_id" class="form-control" id="edit_supplier_code" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="edit_compname">Company Name: </label>
                <input type="text" v-model="supplier.company_name" class="form-control" id="edit_compname" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="edit_contactno">Contact Number: </label>
                <input type="tel" v-model="supplier.contact_no" class="form-control" id="edit_contactno" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="edit_compadd">Company Address: </label>
                <input type="text" v-model="supplier.company_address" class="form-control" id="edit_compadd" autocomplete="off" required>
              </div>

              <div class="form-group col-md-8">
                <label for="edit_compstatus">Status: </label>
                <select class="form-control" v-model="supplier.status" name="edit_compstatus" id="edit_cust-status">
                  <option value="1" selected>Active</option>
                  <option value="0">Inactive</option>
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
            supplier: {}
        }
    },
    computed: {
        ...mapGetters([
            'suppliersList'
        ])
    },
    methods: {
        select(supplier){
            console.log(supplier)
            this.supplier = {...supplier}    
        },
        ...mapActions(["updateSupplier"]),
        update(){
          console.log('clicked', this.supplier)
          this.updateSupplier({
              supplier: this.supplier,
          })
          .then((result) => {
              console.log(result)
              alert(result)
              $("#editSupplier").modal('hide')
          })
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
</style>
