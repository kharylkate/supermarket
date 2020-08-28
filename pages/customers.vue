<template>
    <div>
        <navbar />
        <div class="container-fluid">
            <div class="row">
                <navbarCollapse />
                <customers />
            </div>
            <div>
                <addCustomer />
                <editCustomer />
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import customers from '../components/customers';
import addCustomer from '../components/customer/add_customer'
import editCustomer from '../components/customer/edit_customer'

export default {
    name: 'customers-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'customers': customers,
        'addCustomer': addCustomer,
        'editCustomer': editCustomer, 
    }
}
</script>

<style scoped>

</style>