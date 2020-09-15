<template>
  <div class="container-fluid">
    <form action="">
      <div class="subtitle">LOU GEH</div>
      <div class="title">SUPERMARKET</div>
      <form-group class="px-3 py-3">
        <input
          class="form-control m-1"
          v-model="username"
          type="text"
          placeholder="Username"
          required
        />
        <input
          class="form-control m-1"
          v-model="password"
          type="password"
          placeholder="Password"
          required
          @keyup.enter="login()"
        />
      </form-group>

      <button class="form-control lg-btn block m-1" @click="login()" type="button">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login-form",
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login(){
      localStorage.username = this.username;
      localStorage.role_name = 'admin';
      
      window.location.href = 'inventory'
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
  }
};
</script>
