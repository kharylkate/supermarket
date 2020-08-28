<template>
    <div id="items" role="main" class="main-content col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div>
            <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                <h4 class="text-uppercase">Items</h4>
                <div class="btn-toolbar mb-2 mb-md-0">
                <button type="button" class="btn lg-btn" data-toggle="modal" data-target="#addDelTrans">
                    <img src="../static/icons/file-earmark-plus.svg" alt="">
                    Add Item
                </button>
                </div>
            </div>
        </div>
        
        <div class="table-responsive bg-white rounded-lg">
            <table class="table table-data align-items-center table-flush">
            <thead class="thead-sea-green">
                <tr>
                    <th scope="col" class="sort" data-sort="name">Delivery Receipt Number</th>
                <th scope="col" class="sort" data-sort="name">Barcode</th>
                <th scope="col" class="sort" data-sort="name">Product Description</th>
                <th scope="col" class="sort" data-sort="status">Quantity</th>
                <th scope="col" class="sort" data-sort="budget">Cost per unit</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody class="list" id="body-bg">
                <tr v-for="item in items" :key="item.id">
                    <td>{{item.drNo}}</td>
                    <td>{{item.barcode}}</td>
                    <td>{{item.description}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.unitcost}}</td>
                    <td><button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#editDelTrans"><img src="../static/icons/pencil-square.svg" alt=""> Edit</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';


export default {
    name: 'items',
    computed: {
        ...mapGetters([
            'items'
        ])
    }
}
</script>

<style scoped>

</style>
