<template>
  <div class="container-fluid">
    <form action="">
      <div class="subtitle">LOU GEH</div>
      <div class="title">SUPERMARKET</div>
      <form-group class="px-3 py-3">
        <input
          class="form-control m-1"
          v-model="user.username"
          type="text"
          placeholder="Username"
          required
        />
        <input
          class="form-control m-1"
          v-model="user.password"
          type="password"
          placeholder="Password"
          required
          @keyup.enter="logmein()"
        />
      </form-group>

      <button class="form-control lg-btn block m-1" @click="logmein()" type="button">Login</button>
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
      console.log('user details', this.user)
      this.login({
        user: this.user
      })
      window.location.href = 'dashboard'
    }
    //  async login() {
    //   console.log("hello")    
    //   await axios({
    //     method: "GET",
    //     url: `${this.$axios.defaults.baseURL}/role`,
    //     header: {
    //       "Content-Type": "application/json",
    //       // "Access-Control-Allow-Origin": "http://localhost:4630",
    //       // "Vary": "Origin"
    //     },
    //     data: {
    //       username: this.username,
    //       password: this.password
    //     }
    //   })
    //   .then(result => {
    //     console.log(this.username)
    //       localStorage.username = this.username
    //     });
    // }
  },
  async beforeCreate() {
    await this.$store.dispatch("fetchUserList")
  }
};
</script>
