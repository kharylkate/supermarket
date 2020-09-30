<template>
    <div>
        <div v-if="username != null">
            <div v-if="defpass === true">
                <div class="container">
                    <div class="container-fluid">
                        <div class="card col-md-3">
                            <div></div>
                            <div class="form-group">
                                <input type="password" v-model="user.new_pass" class="form-control form-control-sm mt-2 mb-2" placeholder="Enter Password" id="new_pass">
                                <div id="pass_validation"></div>
                                <input type="password" v-model="user.new_pass_validate" @keyup="validate()" @keyup.enter="update()" class="form-control form-control-sm mt-2 mb-2" placeholder="Retype Password" id="new_pass_validate">
                                <button class="btn btn-sm lg-btn btn-block text-white" type="button" @click="update()">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="defpass === false">
                <navbar />
                <div class="container-fluid">
                    <div class="row">
                        <navbarCollapse />
                        <dash-board />
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <nuxt-link to="/"></nuxt-link>
        </div>
    </div>
    
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import dashboard from '../components/dashboard';
import { mapActions } from "vuex";

export default {
    name: 'dashboard',
    data(){
        return {
            user: {},
            username: localStorage.username,
            role_name: localStorage.role_name,
            user_id: localStorage.uid,
            defpass: true,
        }
    },
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'dash-board': dashboard
    },
    methods: {
        validate() {
            var pass = $("#new_pass").val()
            var validate = $("#new_pass_validate").val()
            
            if(pass == '' || validate == ''){
                document.getElementById("pass_validation").innerHTML = ""
            } else if(pass !== validate) {
                document.getElementById("pass_validation").style.color = "red"
                document.getElementById("pass_validation").innerHTML = "Not same"
            } else {
                document.getElementById("pass_validation").innerHTML = ""
            }
        },
        ...mapActions(['updateUser']),
        update() {

            this.user.username = this.username
            this.user.users_id = this.user_id
            
            // this.passwordUpdate({
            //     user: new_pass_validate
            // })
            // .then((result) => {
            //     console.log("update User result", result)
            //     if(result.error){
            //         alert(result.error)
            //     } else {
            //         alert(result)
            //         this.defpass = false
            //     }
            // })
            // window.location.href= ''
            alert("Password changed")
            this.defpass = false
            
        }
    }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>