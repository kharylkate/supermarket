<template>
    <div>
        <navbar />
        <div class="container-fluid">
            <div class="row">
                <navbarCollapse />
                <roles />
            </div>
            <div>
                <addRole />
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import roles from '../components/roles/roles';
import addRole from '../components/roles/add_role'

export default {
    name: 'roles-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'roles': roles,
        'addRole': addRole,
    }
}


</script>

<style scoped>

</style>