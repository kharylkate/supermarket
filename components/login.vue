<template>
    <div class="login">
        <div class="container">
            <div class="card">
                <form action="" @submit="login()">
                    <h1 class="text-center">LOGIN</h1>
                    <div>
                        <label for="username">Username: </label>
                        <input type="text" v-model="username" class="form-control form-control-sm" placeholder="Username" required>
                    </div>
                    <div>
                        <label for="password">password: </label>
                        <input type="password" v-model="password" class="form-control form-control-sm" placeholder="Password" required>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'login-form',
    components: {

    },
    data(){
        return {

            username: "",
            password: ""
        }
    }
}
</script>

<style scoped>


</style>