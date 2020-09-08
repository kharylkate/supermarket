<template>
    <div id="items" role="main" class="main-content col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div>
            <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                <h4 class="text-uppercase">Delivery</h4>
                <div class="btn-toolbar mb-2 mb-md-0">
                <button type="button" class="btn lg-btn" data-toggle="modal" data-target="#addDelTrans">
                    <img src="../../static/icons/file-earmark-plus.svg" alt="">
                   Receive Item
                </button>
                </div>
            </div>
        </div>
        
        <div class="table-responsive bg-white rounded-lg">
            <table class="table table-data align-items-center table-flush">
            <thead class="thead-sea-green">
                <tr>
                    <th scope="col" class="sort" data-sort="name">Delivery Receipt Number</th>
                <th scope="col" class="sort" data-sort="name">Supplier</th>
                <th scope="col" class="sort" data-sort="name">Date of Delivery</th>
                <th scope="col" class="sort" data-sort="status">Total Amount</th>
                <!-- <th scope="col" class="sort" data-sort="budget">Cost per unit</th> -->
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody class="list" id="body-bg">
                <!-- <tr v-for="deliver in delivery" :key="deliver.id">
                    <td>{{deliver.drNo}}</td>
                    <td>{{deliver.supplier}}</td>
                    <td>{{deliver.date}}</td>
                    <td>₱{{deliver.totalAmt}}</td> -->
                    <tr v-for="delivery in allDelivery" :key="delivery.dtransactions_code">
                        <td>{{delivery.dr_no}}</td>
                        <td>{{delivery.supplier_code}}</td>
                        <td>{{delivery.dtransaction_date}}</td>
                        <td>{{delivery.total_cost}}</td>
                    
                    <!-- <td><button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#viewDelivery" @click="select(deliver)"><img src="../../static/icons/eye.svg" alt=""></button> <button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#editDelTrans"><img src="../../static/icons/pencil-square.svg" alt=""></button></td> -->
                    <td><button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#viewDelivery" @click="select(deliver.dr_no)"><img src="../../static/icons/eye.svg" alt=""></button> <button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#editDelTrans"><img src="../../static/icons/pencil-square.svg" alt=""></button></td>
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
    name: 'delivery',
    computed: {
        ...mapGetters([
            'delivery'
        ]),
        ...mapGetters(['allDelivery'])
    },
    methods: {
       ...mapActions(['selectDelivery']),
      select(deliver) {
        this.selectDelivery({
          ...deliver
        })
      }
    }
}
</script>

<style scoped>

</style>
