<template>
    <div>
        <div v-if="username != null">
            <navbar />
                <div class="container-fluid">
                    <div class="row">
                        <navbarCollapse />
                        <dash-board />
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

export default {
    name: 'dashboard',
    data(){
        return {
            username: localStorage.username,
            role_name: localStorage.role_name
        }
    },
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'dash-board': dashboard
    }
}
</script>

<style scoped>

</style>