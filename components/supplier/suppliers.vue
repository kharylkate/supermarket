<template>
    <div id="suppliers" role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div class="container-fluid">
            <div class="">
                <div class="">
                <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                    <h4 class="text-uppercase">Suppliers</h4>
                    <div class="btn-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn lg-btn" data-toggle="modal" data-target="#addSupplier">
                        <img src="../../static/icons/file-earmark-plus.svg" alt="">
                        Add Supplier
                    </button>
                    </div>
                </div>
                </div>


                <div class="table-responsive bg-white rounded-lg">
                <table class="table table-data align-items-center table-flush table-hover">
                    <thead class="thead-sea-green">
                    <tr>
                        <th scope="col" class="sort" data-sort="name">Supplier Code</th>
                        <th scope="col" class="sort" data-sort="budget">Company Name</th>
                        <th scope="col" class="sort" data-sort="status">Contact Number</th>
                        <th scope="col" class="sort" data-sort="completion">Company Address</th>
                        <th scope="col" class="sort" data-sort="completion">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody class="list">
                        <tr v-for="supplier in suppliers" :key="supplier.id">
                            <td>{{supplier.code}}</td>
                            <td>{{supplier.compName}}</td>
                            <td>{{supplier.contactno}}</td>
                            <td>{{supplier.compAddress}}</td>
                            <td>
                                <span class="badge badge-success">
                                    {{supplier.status}}
                                </span>
                            </td>
                            <td class="text-left">
                                <button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#editSupplier"><img src="../../static/icons/pencil-square.svg" alt=""> Edit</button>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name: 'suppliers',
    computed: {
        ...mapGetters([
            'suppliers'
        ])
    }
}
</script>

<style scoped>

</style>
