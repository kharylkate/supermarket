<template>
    <div id="navbar" class="navbar navbar-expand-md navbar-dark " style="background-color: #59726d;">
      <nuxt-link class="navbar-brand" to="/dashboard"></nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="ml-auto">
          <div class="btn-group">
            <button type="button" class="btn dropdown-toggle text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{username}}
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <!-- <button class="dropdown-item" type="button"><a href="profile.html">Profile</a></button> -->
              <button class="dropdown-item" @click="logout()" type="button">Log Out</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navbar",
    data(){
      return {
        username: localStorage.username
      }
    },
    methods: {
      logout() {
        localStorage.clear();
        window.location.href = '..'
      }
    }
    
}
</script>

<style scoped>

</style>