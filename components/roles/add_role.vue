<template>
  <div
    class="modal fade"
    id="addRole"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Role</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" id="add_role_form">
            <div class="form-row justify-content-center">
              <!-- <div class="container text-center rounded-circle mb-3">
                <img src="../../static/basket-flat.png" alt="" width="110" height="110">
              </div> -->

              <div class="form-group col-md-8">
                <label for="sales_customer">Role Name: </label>
                <input
                  type="text"
                  v-model="role.role_name"
                  class="form-control form-control-sm"
                  id="role_name"
                  placeholder="Role Name"
                  autocomplete="off"
                  required
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                id="btn-cancelAdd"
                data-dismiss="modal"
              >
                Cancel
              </button>
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
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "modal-addRole",
  components: {
    
  },
  data() {
    return {
      role: {} 

    }
  },
  methods: {
    ...mapActions(['addRole']),
    add(){

      var role_name = $("#role_name").val()

      if(role_name == "") {
        // alert("Please fill in the form")
        var msg = "Please check for missing field"
        this.toast(false, msg, 'danger')
      } else {
        this.role.created_by = localStorage.uid
        this.role.created_at = "today"
        console.log(this.role);
        this.addRole({
          role: this.role
        })
        .then((result) => {
          if(result){

            $("#addRole").modal('hide');
            $("#add_role_form")[0].reset();
            this.toast(true, result.message, 'success')
          }
        })
        .catch(err => {
          this.toast(false, err.response.data.msg, 'danger')
          // alert(err.response.data.msg);
        });
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
  }
};
</script>
