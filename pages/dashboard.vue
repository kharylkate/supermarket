<template>
    <div>
        <div v-if="username != null">
            <div v-if="isDefault == 1">
                <div class="container">
                    <div class="container-fluid">
                        <div class="card col-md-3">
                            <div></div>
                            <div class="form-group">
                                <input type="password" v-model="new_pass" class="form-control form-control-sm mt-2 mb-2" placeholder="Enter Password" id="new_pass">
                                <div id="pass_validation"></div>
                                <input type="password" v-model="new_pass_validate" @keyup="validate()" @keyup.enter="update()" class="form-control form-control-sm mt-2 mb-2" placeholder="Retype Password" id="new_pass_validate">
                                <button class="btn btn-sm lg-btn btn-block text-white" type="button" @click="update()">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div v-if="isDefault == 0">
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
            new_pass: "",
            new_pass_validate: "",
            username: localStorage.username,
            role_name: localStorage.role_name,
            user_id: localStorage.uid,
            isDefault: localStorage.isDefault
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
        ...mapActions(['updateUser','login']),
        async update() {
            var d = new Date()
            this.user.username = this.username
            this.user.password = this.new_pass_validate
            this.user.users_id = localStorage.uid,
            this.user.employee_code = localStorage.employee_code,
            this.user.role_id = 2,
            this.user.updated_by = localStorage.uid,
            this.user.updated_at = "today"
            console.log("user details", this.user);
            
            await this.updateUser({
                user: this.user
            })
            .then((result) => {
                if(result.error){
                    alert(result.error)
                } else {
                    alert("You have successfully changed your password")
                    localStorage.isDefault = 0;
                    window.location.href = 'dashboard'
                // $("#editUser").modal('hide')
                }
            })
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