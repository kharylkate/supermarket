<template>
    <div>
        <navbar />
        <div class="container-fluid">
            <div class="row">
                <navbarCollapse />
                <users />
            </div>
            <div>

                <addUser />
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import users from '../components/users/users';
import addUser from '../components/users/add'

export default {
    name: 'roles-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'users': users,
        'addUser': addUser,
    }
}


</script>

<style scoped>

</style>