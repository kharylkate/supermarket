<template>
    <div>
        <navbar />
        <div class="container-fluid">
            <div class="row">
                <navbarCollapse />
                <items />
            </div>
            <div>
                <addDelTrans />
                <editDelTrans />
                <viewDelivery />
            </div>
        </div>
        
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import items from '../components/delivery';
import addDelTrans from '../components/delivery/add_deliveryTrans';
import editDelTrans from '../components/delivery/edit_deliveryTrans';
import viewDelivery from '../components/delivery/view_delivery';

export default {
    name: 'items-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'items': items,
        'addDelTrans': addDelTrans,
        'editDelTrans': editDelTrans,
        'viewDelivery': viewDelivery
    }
}
</script>

<style scoped>

</style>