<template>
    <div role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div class="container-fluid">
            <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                <h4 class="text-uppercase">Sales Transaction</h4>
                <!-- <div class="btn-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn lg-btn" data-toggle="modal" data-target="#addCustomer">
                      <img src="../../static/icons/file-earmark-plus.svg" alt="">
                      Add Transaction
                    </button>
                  </div> -->
                </div>

                <div class="card col-md-12">
                    <div class="row">
                        <div class="card col-md-6">

                        </div>
                        <div class="card col-md-6">
                            <div class="container">
                                <div>
                                    <div class="mt-3">
                                        Customer Information
                                    </div>
                                    <div class="form-group my-2 px-2">
                                        <input type="text" class="form-control" placeholder="Customer Name">
                                        <input type="text" class="form-control" placeholder="Customer Name">
                                        <input type="text" class="form-control" placeholder="Customer Name">
                                    </div>
                                </div>
                                <hr>
                                <div>
                                    <input type="text" class="form-control mt-4">
                                </div>
                                <div class="my-3 row col-md-12">
                                    <div class="mr-auto col-md-6">
                                        <div class="row">
                                            <button class="btn btn-lg border border-primary"> 7 </button>
                                            <button class="btn btn-lg border border-primary"> 8 </button>
                                            <button class="btn btn-lg border border-primary"> 9 </button>
                                            
                                        </div>
                                        <div class="row">
                                            
                                            <button class="btn btn-lg border border-primary"> 4 </button>
                                            <button class="btn btn-lg border border-primary"> 5 </button>
                                            <button class="btn btn-lg border border-primary"> 6 </button>
                                            
                                        </div>
                                        <div class="row">
                                            
                                            <button class="btn btn-lg border border-primary"> 1 </button>
                                            <button class="btn btn-lg border border-primary"> 2 </button>
                                            <button class="btn btn-lg border border-primary"> 3 </button>
                                            
                                        </div> 
                                    </div>
                                    <div class="ml-auto col-md-6 items-align-right">
                                        <div class="">
                                            <button class="btn btn-lg border border-danger cs">Delete Item</button>
                                            <button class="btn btn-lg border border-primary cs">Quantity</button>
                                            <button class="btn btn-lg border border-primary cs">Enter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

            <!-- <div class="table-responsive bg-white rounded-lg">
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
                                <button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#editCustomer"><img src="../../static/icons/pencil-square.svg" alt=""> Edit</button>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div> -->
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
.cs {
    width: 170px;
}
</style>
