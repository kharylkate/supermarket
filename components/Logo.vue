<template>
  <div class="container-fluid">
    <form action="">
      <div class="subtitle">LOU GEH</div>
      <div class="title">SUPERMARKET</div>
      <div class="py-3">
        <input
          class="form-control form_username form-control-sm m-1"
          v-model="user.username"
          type="text"
          placeholder="Username"
          id="data-username"
          required
          data-username
        />
        <input
          class="form-control form_password form-control-sm m-1"
          v-model="user.password"
          type="password"
          placeholder="Password"
          id="data-password"
          required
          
          @keyup.enter="logmein()"
          data-password
        />
      </div>

      <button class="form-control form-control-sm lg-btn block m-1" @click="logmein()" id="btn_login" type="button" data-button>Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "login-form",
  components: {},
  data() {
    return {
      user: {}
    };
  },
  computed: {
    ...mapGetters({
      rolesList: 'roleList',
      userList: "userList",
    })
  },
  methods: {
    clickable(){
      // var password = $("#data-password").val()
      // var username = $("#data-username").val()
      // if((username == "") || (password == "")){
      //   document.getElementById("btn_login").disabled = true
      // } else {
      //   document.getElementById("btn_login").disabled = false
      // }
    },
    ...mapActions(['login']),
    logmein(){
      // console.log("user login", this.user)
      this.login({
        user: this.user
      })
      .then((result) => {
        // console.log(result)
        if(result.error){
          this.toast(false, result.error, 'danger')
        } else {
          window.location.href = 'dashboard'
        }
      })
      .catch(err => err)

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
  // async beforeCreate() {
  //   await this.$store.dispatch("fetchUserList")
  // }
};
</script>
