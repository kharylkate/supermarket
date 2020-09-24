<template>
    <div>
        <navbar />
        <div class="container-fluid">
            <div class="row">
                <navbarCollapse />
                <sales />
            </div>
            <div>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import sales from '../components/sales/sales';

export default {
    name: 'sales-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'sales': sales,
    }
}


</script>

<style scoped>

</style>