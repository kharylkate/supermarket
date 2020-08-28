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
            </div>
        </div>
        
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import items from '../components/delivery';
import addDelTrans from '../components/delivery/add_deliveryTrans'
import editDelTrans from '../components/delivery/edit_deliveryTrans'

export default {
    name: 'items-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'items': items,
        'addDelTrans': addDelTrans,
        'editDelTrans': editDelTrans
    }
}
</script>

<style scoped>

</style>