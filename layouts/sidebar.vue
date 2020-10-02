<template>
    <nav  id="navbarCollapse" class="col-md-3 col-lg-2 d-md-block sidebar collapse" style>
          
        <div class="container text-center">
            <nuxt-link to="/dashboard">
                <img class="img-thumbnail mt-3" src="../static/lgs.png" alt="" width="210" height="60">
            </nuxt-link>
            <p class="mt-4 mb-3 text-center">Welcome,  <b>{{username}}</b></p>
        </div>
        <hr>

        <!-- <div v-if="role_name === 'cashier' " class="input-group mb-1 mt-5">
            <input type="text" class="form-control form-control-sm search-filter" data-table="table-data" placeholder="Search">
            <div class="input-group-append">
            <span class="input-group-text"><img src="../static/icons/search.svg" alt=""></span>
            </div>
        </div>   -->

        <div class="sidebar-sticky pt-3 sidebarNav" >
            <div v-if="role_name === 'admin'" class="accordion" id="accordionExample">
                <div class="">
                    <div class="button" id="headingOne">
                        <span class="inactive-link nav-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Admin
                        </span>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="mx-3 my-0">
                            <nuxt-link to="/inventory" class="">
                            <span class="inactive-link nav-link">Inventory</span>
                            </nuxt-link>
                        </div>
                        <div class="mx-3 my-0">
                            <nuxt-link to="/suppliers" class="">
                                <span class="inactive-link nav-link">Suppliers</span>
                            </nuxt-link>
                        </div>
                        <div class="mx-3 my-0">
                            <nuxt-link to="/users" class="">
                                <span class="inactive-link nav-link">Users</span>
                            </nuxt-link>
                        </div>
                        <div class="mx-3 my-0">
                            <nuxt-link to="/roles" class="">
                                <span class="inactive-link nav-link">Roles</span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="button" id="headingTwo">
                        <span class="inactive-link nav-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                            Transactions
                        </span>
                    </div>

                    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="mx-3 my-0">
                            <nuxt-link to="/delivery" class="">
                                <span class="inactive-link nav-link">Delivery Transactions</span>
                            </nuxt-link>
                        </div>
                        <div class="mx-3 my-0">
                            <nuxt-link to="/sales" class="">
                                <span class="inactive-link nav-link">Sales Transactions</span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>

            </div>
            <div v-if="role_name === 'custodian'">
                <div class="mx-3 my-0">
                    <nuxt-link to="/delivery" class="">
                        <span class="inactive-link nav-link">Delivery Transactions</span>
                    </nuxt-link>
                </div>
            </div>
            
            <div v-if="role_name === 'cashier'">
                <div class="mx-3 my-0">
                    <nuxt-link to="/cashier_sales" class="">
                        <span class="inactive-link nav-link">Sales Transactions</span>
                    </nuxt-link>
                </div>
            </div>
            
        </div>

    </nav>
</template>

<script>
export default {
    name: "sidebar",
    data() {
        return {
            role_name: localStorage.role_name,
            username: localStorage.username
        }
    },
    computed: {

    },
    methods: {
        
    }
}
</script>