<template>
    <div role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
          <div class="container-fluid">
              <div class="">
                <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                  <h4 class="text-uppercase">Sales Transaction</h4>
                  <button class="btn btn-default lg-btn" data-toggle="modal" data-target="#addSales">New Transaction</button>
                </div>
              </div>

            <div class="table-responsive bg-white rounded-lg">
              <table class="table table-data align-items-center table-flush">
                <thead class="thead-sea-green">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Official Receipt Number</th>
                    <th scope="col" class="sort" data-sort="name">Transaction Date</th>
                    <th scope="col" class="sort" data-sort="status">Customer Name</th>
                    <th scope="col" class="sort" data-sort="budget">Total Sales</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody class="list">
                    <tr v-for="sales in salesTransactions" :key="sales.id">
                        <td>{{sales.orNo}}</td>
                        <td>{{sales.transactionDate}}</td>
                        <td>{{sales.customerName}}</td>
                        <td>{{sales.totalSales}}</td>
                        <td><button class="btn lg-btn" data-toggle="modal" data-target="#viewTransaction" @click="(select(sales))" ><img src="../../static/icons/eye.svg" alt=""></button>
                        <button class="btn lg-btn" data-toggle="modal" data-target="#view_trans" @click="(sales.items)"><img src="../../static/icons/printer.svg" alt=""></button></td>
                        
                        <!-- <td>
                            <div v-for="(item,i) in sales.items" :key="i"> 
                                Barcode: {{item.barcode}}
                                Description: {{item.description}}
                                Unit Cost: {{item.unitcost}}
                                Amount: {{item.amt}}
                            </div>
                        </td> -->
                        
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
    name: 'sales',
    computed: {
        ...mapGetters([
            'salesTransactions',
        ])
    },
    methods: {
       ...mapActions(['selectTransaction']),
      select(sales) {
        this.selectTransaction({
          ...sales
        })
      }
    }
        
    
    // data(){
    //     return {
    //         salesItem:['alphabet', 'numbers']
    //     }
    // }
}

</script>

<style scoped>

</style>
