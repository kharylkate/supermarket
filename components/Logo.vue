<template>
  <div class="container-fluid">
    <form action="">
      <div class="subtitle">LOU GEH</div>
      <div class="title">SUPERMARKET</div>
      <form-group class="px-3 py-3">
        <input
          class="form-control form-control-sm m-1"
          v-model="user.username"
          type="text"
          placeholder="Username"
          required
        />
        <input
          class="form-control form-control-sm m-1 form_password"
          v-model="user.password"
          type="password"
          placeholder="Password"
          required
          @keyup.enter="logmein()"
        />
      </form-group>

      <button class="form-control form-control-sm lg-btn block m-1" @click="logmein()" type="button">Login</button>
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
    ...mapActions(['login']),
    logmein(){
      console.log("user login", this.user)
      this.login({
        user: this.user
      })
      .then((result) => {
        console.log(result)
        if(result.error){
          alert(result.error)
        } else {
          // this.$router.push('dashboard')
          window.location.href = 'dashboard'
          // console.log("local storageeee", localStorage);
        }
      //   console.log("localStorage.isDefault", localStorage.isDefault);
      })
            // localStorage.username = "Maximus",
            // localStorage.role_name = "admin",
            // localStorage.uid = 38,
            // localStorage.isDefault = true
            // console.log(localStorage);
            // window.location.href = 'dashboard'

    
    }

  },
  async beforeCreate() {
    await this.$store.dispatch("fetchUserList")
  }
};
</script>
