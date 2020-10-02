<template>
    <div>
        <navbar />
        <div class="container-fluid">
            <div class="row">
                <navbarCollapse />
                <inventory />
            </div>
            <div>
                <addInventory />
                <editInventory />
            </div>
        </div>
        
    </div>
</template>

<script>
import navbar from '../layouts/navbar';

import navbarCollapse from '../layouts/sidebar';
import inventory from '../components/inventory/inventory';
import addInventory from '../components/inventory/add_inventory'
import editInventory from '../components/inventory/edit_inventory'

export default {
    name: 'inventory-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'inventory': inventory,
        'addInventory': addInventory,
        'editInventory': editInventory
    }
}
</script>

<style scoped>

</style>