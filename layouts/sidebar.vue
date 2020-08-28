<template>
    <nav id="navbarCollapse" class="col-md-3 col-lg-2 d-md-block sidebar collapse" style>
          
        <div class="container text-center">
            <img class="avatar mt-3 mx-3 rounded-pill" src="../static/Untitled design.png" alt="" width="130" height="150">
            <p class="mt-3 mb-3 text-center">Welcome,  <b>Maximus</b></p>
        </div>
        <hr>

        <div class="input-group mb-1 mt-5">
            <input type="text" class="form-control" placeholder="Search">
            <div class="input-group-append">
            <span class="input-group-text"><img src="../static/icons/search.svg" alt=""></span>
            </div>
        </div>  

        <div class="sidebar-sticky pt-3 sidebarNav" >
            <ul class="nav flex-column text-left">
                <li class="nav-item ">
                <a class="active-link rounded-pill nav-link" href="/dashboard">
                    <span class="mx-auto text-white"><img src="../static/icons/house.svg" width="24" height="24" alt="">
                    Dashboard</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/delivery">
                    <img src="../static/icons/file-earmark.svg" width="24" height="24" alt="">
                    <span class="inactive-link">Delivery Transaction</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/suppliers">
                    <img src="../static/icons/truck.svg" width="24" height="24" alt="">
                    <span class="inactive-link">Suppliers</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/customers">
                    <img src="../static/icons/people.svg" width="24" height="24" alt="">
                    <span class="inactive-link">Customers</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/sales">
                    <img src="../static/icons/arrow-left-right.svg" width="24" height="24" alt="">
                    <span class="inactive-link">Sales Transaction</span>
                </a>
                </li>
            </ul>
        </div>

    </nav>
</template>

<script>
export default {
    name: "sidebar"
}
</script>