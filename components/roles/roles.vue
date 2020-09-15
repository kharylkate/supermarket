<template>
  <div role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
    <div class="container-fluid">
      <div class>
        <div
          class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2"
          id="topName"
        >
          <h4 class="text-uppercase">Roles</h4>
          <button class="btn btn-default lg-btn" data-toggle="modal" data-target="#addRole">New Role</button>
        </div>
      </div>

      <div class="table-responsive bg-white rounded-lg">
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
              <td>{{role.role_code}}</td>
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
      </div>
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
                    class="form-control"
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
    };
  },
  computed: {
    ...mapGetters({
      rolesList: "rolesList",
    }),
  },
  methods: {
    ...mapActions({
      // selectTransaction: "selectTransaction",
      //selectRole: "selectRole",
    }),
    select(role) {
      console.log(role);
      this.role = { ...role };
    },
     update() {
      console.log('clicked_update', this.role)
      this.$store.dispatch("updateRole", {
            role: this.role,
      })
      .then((result) => {
        console.log(result)
        // alert(result)
        //window.location.reload();
        })
     }
  },
  async beforeCreate() {
    await this.$store.dispatch("fetchRolesList");
  },
};
</script>

<style scoped>
</style>
