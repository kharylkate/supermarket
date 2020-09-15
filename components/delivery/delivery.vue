<template>
    <div id="inventory" role="main" class="main-content col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
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

                <tr v-for="dt in deliveryList" :key="dt.dtransactions_code">
                    <td>{{dt.dr_no}}</td>
                    <td>{{dt.company_name}}</td>
                    <td>{{dt.dtransaction_date}}</td>
                    <td>₱{{dt.total_cost}}</td>
                    <td><button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#viewDelivery" @click="select(dt)"><img src="../../static/icons/eye.svg" alt=""></button> 
                    <!-- <button id="btn-color" class="btn lg-btn" data-toggle="modal" data-target="#editDelTrans"><img src="../../static/icons/pencil-square.svg" alt=""></button> -->
                    </td>
                </tr>
            </tbody>
            </table>

        </div>

        <div class="modal fade" id="viewDelivery" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Deliveries</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                <div class="container">
                    
                <div >
                    <div class="form-row justify-content-center">
                    <div class="container text-center mb-2">
                        <h5>{{dt.company_name}}</h5>
                        <small>{{dt.company_address}}</small>
                    </div>

                    <div class="row">
                        <div class="ml-auto">{{dt.dtransaction_date}}</div>    
                        <div class="mr-auto">{{dt.dr_no}}</div>    
                    </div>

                    <div class="table-responsive">
                        <table class="table table-borderless">
                        <thead>
                            <tr>
                            <th>BARCODE</th>
                            <th>DESC</th>
                            <th>QTY</th>
                            <th>UNIT PRICE</th>
                            </tr>
                        </thead>
                        <tbody v-for="items in dt.items" :key="items.id">
                            <tr>
                            <td>{{items.barcode}}</td>
                            <td>{{items.product_description}}</td>
                            <td>{{items.qty}}</td>
                            <td>₱{{items.unit_cost}}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
                    
                    </div>
                </div>              
                </div>
                <div class="modal-footer my-0">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                
            </div>
            </div>
        </div>

    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';


export default {
    name: 'delivery',
    data() {
        return {
            dt: {}
        }
    },
    computed: {
        ...mapGetters({
            deliveryList: "deliveryList"
            // 'delivery',
            // 'delivery_transactions'
        }),
    },
    methods: {
       //...mapActions(['selectDelivery']),
      select(dt) {
          console.log('dt: ', dt)
          this.dt = {...dt}
        // this.selectDelivery({
        //   ...dt
        // })
      },
    },
    async beforeCreate() {
        await this.$store.dispatch("fetchDTransactionsList")
    }
    
}
</script>

<style scoped>

</style>
