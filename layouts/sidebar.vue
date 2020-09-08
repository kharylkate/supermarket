<template>
    <nav id="navbarCollapse" class="col-md-3 col-lg-2 d-md-block sidebar collapse" style>
          
        <div class="container text-center">
            <img class="avatar mt-3 mx-3 rounded-pill" src="../static/Untitled design.png" alt="" width="130" height="150">
            <p class="mt-3 mb-3 text-center">Welcome,  <b>Maximus</b></p>
        </div>
        <hr>

        <div class="input-group mb-1 mt-5">
            <input type="text" class="form-control search-filter" data-table="table-data" placeholder="Search">
            <div class="input-group-append">
            <span class="input-group-text"><img src="../static/icons/search.svg" alt=""></span>
            </div>
        </div>  

        <div class="sidebar-sticky pt-3 sidebarNav" >
            <div class="accordion" id="accordionExample">
                <div class="">
                    <div class="button" id="headingOne">
                        <span class="inactive-link nav-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Admin
                        </span>
                    </div>

                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="mx-3 my-0">
                            <a href="/inventory" class="">
                            <span class="inactive-link nav-link">Inventory</span>
                            </a>
                        </div>
                        <div class="mx-3 my-0">
                            <a href="/suppliers" class="">
                                <span class="inactive-link nav-link">Suppliers</span>
                            </a>
                        </div>
                        <div class="mx-3 my-0">
                            <a href="/users" class="">
                                <span class="inactive-link nav-link">Users</span>
                            </a>
                        </div>
                        <div class="mx-3 my-0">
                            <a href="/roles" class="">
                                <span class="inactive-link nav-link">Roles</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="button" id="headingTwo">
                        <span class="inactive-link nav-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                            Transactions
                        </span>
                    </div>

                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="mx-3 my-0">
                        <a href="/delivery" class="">
                            <span class="inactive-link nav-link">Delivery Transactions</span>
                        </a>
                    </div>
                    <div class="mx-3 my-0">
                        <a href="/sales" class="">
                            <span class="inactive-link nav-link">Sales Transactions</span>
                        </a>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>

    </nav>
</template>

<script>
export default {
    head(){
        return{
        script:[
        { src: 'script_filterSearch.js'}
        ],
        }
    },

    name: "sidebar"
}
</script>