<template>
    <div>
        <navbar />
        <div class="container-fluid">
            <div class="row">
                <navbarCollapse />
                <customers />
            </div>
            <div>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import customers from '../components/cashier/cashier';

export default {
    name: 'customers-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'customers': customers,
 
    }
}
</script>

<style scoped>

</style>