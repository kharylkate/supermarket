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
                  v-model="role_name"
                  class="form-control"
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
              <button type="button" @click="addRole()" class="btn btn-primary">OK</button>
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
      role_name: ""

    }
  },
  methods: {
    ...mapActions(['addRole']),
    addRole(){
      this.addRole({
        role_name: this.role_name
      })

      $("#addRole").modal('hide');
      $("#add_role_form")[0].reset();
    },
  }
};
</script>
