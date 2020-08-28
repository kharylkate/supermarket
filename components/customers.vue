<template>
    <div role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div class="container-fluid">
            <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                <h4 class="text-uppercase">Customers</h4>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn lg-btn" data-toggle="modal" data-target="#addCustomer">
                      <img src="../static/icons/file-earmark-plus.svg" alt="">
                      Add Customer
                    </button>
                  </div>
                </div>
            

            <div class="table-responsive bg-white rounded-lg">
                <table class="table table-data align-items-center table-flush responsive" id="customersTable">
                <thead class="thead-sea-green">
                    <tr>
                    <th scope="col" class="sort" data-sort="number">Customer ID</th>
                    <th scope="col" class="sort" data-sort="name">Name</th>
                    <th scope="col" class="sort" data-sort="address">Address</th>
                    <th scope="col" class="sort" data-sort="number">Contact Number</th>
                    <th scope="col" class="sort" data-sort="name">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody class="list">
                    <tr v-for="customer in customers" :key="customer.id">
                        <td>{{customer.id}}</td>
                        <td>{{customer.name}}</td>
                        <td>{{customer.address}}</td>
                        <td>{{customer.contactno}}</td>
                        <td>
                            <span class="badge badge-success">
                                {{customer.status}}
                            </span>
                        </td>
                        <td class="text-left">
                            <button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#editCustomer"><img src="../static/icons/pencil-square.svg" alt=""> Edit</button>
                        </td>
                        
                    </tr>
                    
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name: 'customers',
    computed: {
        ...mapGetters([
            'customers'
        ])
    }
}
</script>

<style scoped>

</style>
