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
              <button type="button" class="btn lg-btn" data-toggle="modal" data-target="#addUser">
                <img src="../../static/icons/file-earmark-plus.svg" alt />
                Add User
              </button>
            </div>
          </div>
        </div>

        <div class="table-responsive bg-white rounded-lg">
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
              <tr v-for="user in userList" :key="user.id">
                <td>{{user.employee_code}}</td>
                <td>{{user.username}}</td>
                <td>{{user.role_id}}</td>
                <td class="text-left">
                  <button
                    id="btn-color"
                    class="btn lg-btn"
                    data-toggle="modal"
                    data-target="#editUser"
                  >
                    <img src="../../static/icons/pencil-square.svg" alt /> Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
                    <label for="edit_User_code">User Code: </label>
                    <input type="text" class="form-control" id="edit_User_code" value="FLxKjllbrg" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="edit_compname">Company Name: </label>
                    <input type="text" class="form-control" id="edit_compname" value="Beech Lasagna" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="edit_contactno">Contact Number: </label>
                    <input type="tel" class="form-control" id="edit_contactno" value="+1-767-5554-872" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="edit_compadd">Company Address: </label>
                    <input type="text" class="form-control" id="edit_compadd" value="1631 Goehring Rd #334, New Brighton, PA, 15066" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="edit_compstatus">Status: </label>
                    <select class="form-control" name="edit_compstatus" id="edit_cust-status">
                      <option value="1" selected>Active</option>
                      <option value="0">Inactive</option>
                    </select>
                  </div>
                  
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-primary">OK</button>
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
  computed: {
    ...mapGetters({
      userList: "userList",
      }),
  },
  methods: {
    
  },
  async beforeCreate() {
    await this.$store.dispatch("fetchUserList")
  },
};
</script>

<style scoped>
</style>
