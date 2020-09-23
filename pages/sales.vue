<template>
    <div>
        <navbar />
        <div class="container-fluid">
            <div class="row">
                <navbarCollapse />
                <sales />
            </div>
            <div>
                <!-- <viewTransaction /> -->
                <!-- <addSales /> -->
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import sales from '../components/sales/sales';
// import viewTransaction from '../components/sales/modals';
// import addSales from '../components/sales/add_sales'

export default {
    name: 'sales-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'sales': sales,
        // 'viewTransaction': viewTransaction,
        // 'addSales': addSales
    }
}


</script>

<style scoped>

</style>