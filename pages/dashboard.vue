<template>
    <div>
        <navbar />
        <div class="container-fluid">
            <div class="row">
                <navbarCollapse />
                <dash-board />
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import dashboard from '../components/dashboard';

export default {
    name: 'dashboard',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'dash-board': dashboard
    }
}
</script>

<style scoped>

</style>