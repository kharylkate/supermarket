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
                <editUser />
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import users from '../components/users/users';
import viewUsers from '../components/users/users';
import addUser from '../components/users/add'
import editUser from '../components/users/edit'

export default {
    name: 'roles-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'users': users,
        'viewUsers': viewUsers,
        'addUser': addUser,
        'editUser': editUser
    }
}


</script>

<style scoped>

</style>