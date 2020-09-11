<template>
    <div>
        <navbar />
        <div class="container-fluid">
            <div class="row">
                <navbarCollapse />
                <suppliers />
            </div>
            <div>
                <addSupplier />
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import suppliers from '../components/supplier/suppliers';
import addSupplier from '../components/supplier/add_supplier';

export default {
    name: 'suppliers-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'suppliers': suppliers,
        'addSupplier': addSupplier
    }
}
</script>

<style scoped>

</style>