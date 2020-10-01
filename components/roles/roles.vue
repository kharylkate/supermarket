<template>
  <div role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
    <div class="container-fluid">
      <div class>
        <div
          class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2"
          id="topName"
        >
          <h4 class="text-uppercase">Roles</h4>
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
              <button class="btn btn-default btn-sm lg-btn" data-toggle="modal" data-target="#addRole">New Role</button>
            </div>
        </div>

    <div>
      <b-table
        show-empty
        class="bg-white"
        id="btable"
        stacked="md"
        thead-class="thead-sea-green"
        :items="rolesList"
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
        <table class="table table-data align-items-center table-flush">
          <thead class="thead-sea-green">
            <tr>
              <th scope="col" class="sort" data-sort="name">Role ID</th>
              <th scope="col" class="sort" data-sort="name">Role Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody class="list">
            <tr v-for="role in rolesList" :key="role.id">
              <td>{{role.role_id}}</td>
              <td>{{role.role_name}}</td>
              <td>
                <button
                  class="btn lg-btn"
                  data-toggle="modal"
                  data-target="#editRole"
                  @click="(select(role))"
                >
                  <img src="../../static/icons/pencil-square.svg" alt /> Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> -->
    </div>
    <div
      class="modal fade"
      id="editRole"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Role</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action id="edit_role_form">
              <div class="form-row justify-content-center">

                <div class="form-group col-md-8">
                  <label for="role_name">Role Name:</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="edit_role_name"
                    v-model="role.role_name"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  id="btn-cancelEdit"
                  data-dismiss="modal"
                >Cancel</button>
                <button type="button" @click="update()" class="btn btn-primary">OK</button>
              </div>
            </form>
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
  name: "roles",
  data() {
    return {
      role: {},
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
      { key: 'role_id', label: 'Role ID', sortable: true, sortDirection: 'asc' },
      { key: 'role_name', label: 'Role Name', sortable: true },
      { key: 'actions', label: 'Actions' }
    ],
    };
  },
  computed: {
    ...mapGetters({
      rolesList: "rolesList",
    }),
    tablerows() {
          return this.rolesList.length
        },
  },
  methods: {
    ...mapActions({
      selectTransaction: "selectTransaction",
      //selectRole: "selectRole",
    }),
    select(role) {
      console.log(role);
      this.role = { ...role };
      $("#editRole").modal('show');
    },
    ...mapActions(['updateRole']),
     update() {
       this.role.update_by =  localStorage.uid
       this.role.updated_at = "today"
      console.log('clicked_update', this.role)
      this.updateRole({
        role: this.role,
      })
      .then((result) =>{
        if(result.error) {
          alert(result.error)
        } else {
          $("#editRole").modal('hide');
          alert(result)
        }
      })
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
    await this.$store.dispatch("fetchRolesList");
  },
};
</script>

<style scoped>
</style>
