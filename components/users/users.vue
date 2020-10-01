<template>
  <div id="users" role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
    <div class="container-fluid">
      <div class>
        <div class>
          <div
            class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2"
            id="topName"
          >
            <h4 class="text-uppercase">Users</h4>
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
              <button type="button" class="btn btn-sm lg-btn" data-toggle="modal" data-target="#addUser">
                <img src="../../static/icons/file-earmark-plus.svg" alt />
                Add User
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
          :items="userList"
          :fields="fields"
          :filter="filter"
          :current-page="currentPage"
          :per-page="perPage"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
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
              class="paginations"
              size="sm"
              :total-rows="tablerows"
              :per-page="perPage"
              align="center">
            </b-pagination>
          </div>
        </div>

        <!-- <div class="table-responsive bg-white rounded-lg">
          <table class="table table-data align-items-center table-flush table-hover">
            <thead class="thead-sea-green">
              <tr>
                <th scope="col" class="sort" data-sort="name">Employee Code</th>
                <th scope="col" class="sort" data-sort="name">Username</th>
                <th scope="col" class="sort" data-sort="name">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody class="list">
              <tr v-for="user in userList" :key="user.employee_code">
                <td>{{user.employee_code}}</td>
                <td>{{user.username}}</td>
                <td>{{user.role_name}}</td>
                <td class="text-left">
                  <button
                    id="btn-color"
                    class="btn lg-btn "
                    data-toggle="modal"
                    data-target="#editUser"
                    @click="(select(user))"
                  >
                    <img src="../../static/icons/pencil-square.svg"  alt /> Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div> -->
      </div>
    </div>

    <div>
      
      
      <div class="modal fade" id="editUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form action="">
                <div class="form-row justify-content-center">

                  <div class="form-group col-md-8">
                    <label for="compname">Employee Code: </label>
                    <input type="number" v-model="user.employee_code" class="form-control form-control-sm" placeholder="Enter Employee Code" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="contactno">Username: </label>
                    <input type="text" v-model="user.username" class="form-control form-control-sm" placeholder="Enter User Name" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="compadd">Role </label>
                    <select class="form-control form-control-sm" v-model="user.role_id">
                      <option disabled>Select Role</option>
                      <option v-for="role in rolesList" :key="role.id" :value="role.role_id">{{role.role_name}}</option>
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


    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "users",
  data() {
    return {
      user: {},
      filter_role: "Role",
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
      { key: 'employee_code', label: 'Employee ID', sortable: true, sortDirection: 'desc' },
      { key: 'username', label: 'Username', sortable: true },
      { key: 'role_name', label: 'Role', sortable: true, sortDirection: 'desc' },
      
      { key: 'actions', label: 'Actions' }
    ],
    }
  },
  computed: {
    ...mapGetters({
      userList: "userList",
      rolesList: "rolesList"
      }),
      tablerows() {
        return this.userList.length
      },
  },
  methods: {
    select(user){
      console.log(user)
      this.user = {...user}

      $("#editUser").modal('show')
    },
    ...mapActions(['updateUser']),
    async update(){
      this.user.updated_by = localStorage.uid
      this.user.updated_at = "today"
      console.log('userrrr: ', this.user)
      await this.updateUser({
        user: this.user
      })
      .then((result) => {
        if(result.error){
          alert(result.error)
        } else {
          alert(result)
          $("#editUser").modal('hide')
        }
      })

      await this.$store.dispatch("fetchUserList")
      await this.$store.dispatch("fetchRolesList")
    },
    items() {
      this.perPage = this.filter_items
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    
    
  },
  async beforeCreate() {
    await this.$store.dispatch("fetchUserList")
    await this.$store.dispatch("fetchRolesList")
  },
};
</script>

<style scoped>

.lg-btn{
  border: none;
}
</style>
