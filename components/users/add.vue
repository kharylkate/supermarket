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
                    <input type="number" v-model="user.employee_code" class="form-control form-control-sm" id="compname" placeholder="Enter Employee Code" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="contactno">Username: </label>
                    <input type="text" v-model="user.username" class="form-control form-control-sm" id="contactno" placeholder="Enter User Name" autocomplete="off" required>
                  </div>

                  <div class="form-group col-md-8">
                    <label for="compadd">Role </label>
                    <select class="form-control form-control-sm" name="" id="" v-model="user.role_id">
                      <option selected="selected" hidden>Select Role</option>
                      <option v-for="role in rolesList" :key="role.id" v-bind:value="role.role_id">{{role.role_name}}</option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary " data-dismiss="modal" id="itemcancel">Cancel</button>
                  <button type="button" @click="add()" class="btn btn-primary">OK</button>
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
        this.user.password = this.user.username
        this.user.created_by = localStorage.uid
        this.user.created_at = "today"
        console.log('user add clicked: ', this.user)
        await this.addUser({
          user: this.user,
        })
        .then((result) => {
          console.log(result)
          if(result.error){
            alert(result.error)
          } else {
            $("#addUser").modal('hide');
            $("#add_user_form")[0].reset();
            alert(result.message)
          }
        })
        await this.$store.dispatch("fetchRolesList")

      }

    
  },
  async beforeCreate() {
    await this.$store.dispatch("fetchRolesList")
  }
    
}
</script>