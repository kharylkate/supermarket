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
                    <label for="compname">Employee Code: </label>
                    <input type="number" v-model="user.employee_code" class="form-control" placeholder="Enter Employee Code" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="contactno">Username: </label>
                    <input type="text" v-model="user.username" class="form-control" placeholder="Enter User Name" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="compadd">Role </label>
                    <select class="form-control" v-model="user.role_id">
                      <option disabled>Select Role</option>
                      <option >{{user.role_id}}</option>
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
      user: {}
    }
  },
  computed: {
    ...mapGetters({
      userList: "userList",
      rolesList: "rolesList"
      }),
  },
  methods: {
    select(user){
      console.log(user)
      this.user = {...user}
    },
    ...mapActions(['updateUser']),
    update(){
      console.log('user: ', this.user)
      this.updateUser({
        user: this.user
      })
      $("#editUser").modal('hide');

    },
    
  },
  async beforeCreate() {
    await this.$store.dispatch("fetchUserList")
    await this.$store.dispatch("fetchRolesList")
  },
};
</script>

<style scoped>
</style>
