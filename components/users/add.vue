<template>
  <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <form action="" id="add_user_form">
                <div class="form-row justify-content-center">

                  <div class="form-group col-md-8">
                    <label for="compname">Employee Code: </label>
                    <input type="number" v-model="user.employee_code" class="form-control form-control-sm" id="empcode" placeholder="Enter Employee Code" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="contactno">Username: </label>
                    <input type="text" v-model="user.username" class="form-control form-control-sm" id="username" placeholder="Enter User Name" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="compadd">Role </label>
                    <select class="form-control form-control-sm" name="select_role" id="select_role" v-model="user.role_id">
                      <option selected="selected" hidden>Select Role</option>
                      <option v-for="role in rolesList" :key="role.id" v-bind:value="role.role_id">{{role.role_name}}</option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary " data-dismiss="modal" id="itemcancel">Cancel</button>
                  <button type="button" @click="add()" class="btn btn-primary user_add">OK</button>
                </div>
                <!-- <button class="btn btn-primary" type="submit">Submit form</button> -->
              </form>
            </div>
            
          </div>
        </div>
      </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import $ from 'jQuery'

export default {
    name: 'modal-addSupplier',
    data() {
    return {
      user: {

      }
    }
  },
  components: {
       
  },
  computed: {
    ...mapGetters({
      rolesList: "rolesList"
    }),
  },
    methods: {
      ...mapActions(['addUser']),
      async add() {

        var employee_code = $("#empcode").val()
        var username = $("#username").val()
        var select_role = $("#select_role").val()

        if((employee_code == "") || (username == "") || (select_role == "")){
          // alert("Please fill the form")
          var msg = "Please check for missing field"
          this.toast(false, msg, 'danger')
        } else {
           this.user.password = '1234'
          this.user.created_by = localStorage.uid
          this.user.created_at = "today"
          await this.addUser({
            user: this.user,
          })
          // .then((result) => {
          //   if(result.error){
          //     // alert(result.error)
          //     this.toast(false, result.error, 'danger')
          //   } else {
          //     $("#addUser").modal('hide');
          //     $("#add_user_form")[0].reset();
          //     // alert("New user added successfully")
          //     var msg = "You have successfully added a user"
          //     this.toast(true, msg, 'success')
          //   }
          // })
          .catch(err => {
          this.toast(false, err.response.data.msg, 'danger')
        });
        
          await this.$store.dispatch("fetchUserList")
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

  },
  async beforeCreate() {
    await this.$store.dispatch("fetchRolesList")
  }
    
}
</script>