<template>
    <div role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div class="container-fluid">
            <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                <h4 class="text-uppercase">Sales Transaction</h4>

                </div>

                <div class="card col-md-12">
                    <div class="row">
                        <div class="card col-md-6">
                            <div class="container mt-3">
                                <div class="my-2 px-2">Sales Transaction Items</div>
                            </div>
                            <div class="table table-borderless">
                                <table>
                                    <thead>
                                        <th>
                                            <td>Barcode</td>
                                            <td>Product Description</td>
                                            <td>Quantity</td>
                                            <td>Unit Cost</td>
                                        </th>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                                <div class="transaction-total text-right mt-5 mr-4">
                                    Total Amount: ₱0.00
                                </div>
                            </div>
                        </div>
                        <div class="card col-md-6">
                            <div class="container mt-3">
                                <div class="form-group my-2 px-2">
                                    <label for="or_no">Receipt Number: </label>
                                    <input type="text" class="form-control" disabled>
                                </div>
                                <div>
                                    <div class="mt-3">
                                        Customer Information
                                    </div>
                                    <div class="form-group my-2 px-2">
                                        <input type="text" class="form-control m-2" placeholder="Customer Name">
                                        <input type="text" class="form-control m-2" placeholder="Contact Number">
                                        <input type="text" class="form-control m-2" placeholder="Address">
                                    </div>
                                </div>
                                <hr>
                                <div>
                                    <!-- <v-select multiple v-model="selected" :options="['Canada','United States']" /> -->
                                    <select class="form-control" @change="show()" id="select_item">
                                        <option disabled selected >Scan?</option>
                                        <option v-for="item in inventoryList" :key="item.id" :value="item.barcode">{{item.barcode}} - {{item.product_description}}</option>
                                    </select>
                                    <!-- <input type="text" id="st-area" value="" list="items-list" class="form-control mt-4">
                                    <datalist id="items-list">
                                        <option v-for="item in inventory" :key="item.id" :value="item.barcode" @click="(show(item))">{{item.product_description}}</option>
                                    </datalist> -->
                                </div>
                                <div class="my-3 row col-md-12">
                                    <div class="ml-auto">
                                        <div class="row">
                                            <button class="btn btn-lg border border-primary signs" @click="numclick(' (')"> ( </button>
                                            <button  class="btn btn-lg border border-primary signs" @click="numclick(') ')"> ) </button>
                                            <button class="btn btn-lg border border-primary zero" type="button" @click="del()"> <img src="../../static/icons/arrow-left.svg" alt=""> </button>
                                            
                                        </div>
                                        <div class="row">
                                            <button data-number="7" class="btn btn-lg border border-primary" @click="numclick(7)"> 7 </button>
                                            <button data-number="8" class="btn btn-lg border border-primary" @click="numclick(8)"> 8 </button>
                                            <button data-number="9" class="btn btn-lg border border-primary" @click="numclick(9)"> 9 </button>
                                            <button class="btn btn-lg border border-primary sign" @click="numclick('*')"> * </button>
                                            <button class="btn btn-lg border border-danger ml-1 cs">Delete Item</button>
                                            
                                        </div>
                                        <div class="row">
                                            
                                            <button data-number="4" class="btn btn-lg border border-primary" @click="numclick(4)"> 4 </button>
                                            <button data-number="5" class="btn btn-lg border border-primary" @click="numclick(5)"> 5 </button>
                                            <button data-number="6" class="btn btn-lg border border-primary" @click="numclick(6)"> 6 </button>
                                            <button class="btn btn-lg border border-primary sign"  @click="numclick('-')"> - </button>
                                            <button class="btn btn-lg border border-primary ml-1 cs">Quantity</button>
                                        </div>
                                        <div class="row">
                                            
                                            <button data-number="1" class="btn btn-lg border border-primary" @click="numclick(1)"> 1 </button>
                                            <button data-number="2" class="btn btn-lg border border-primary" @click="numclick(2)"> 2 </button>
                                            <button data-number="3" class="btn btn-lg border border-primary" @click="numclick(3)"> 3 </button>
                                            <button class="btn btn-lg border border-primary sign"  @click="numclick('+')"> + </button>
                                            <button class="btn btn-lg border border-primary ml-1 cs">Enter</button>
                                            
                                        </div> 
                                        <div class="row text-center">
                                            
                                            <!-- <button class="btn btn-lg border border-primary"> </button> -->
                                            <button class="btn btn-lg border border-primary zero" @click="numclick(0)"> 0 </button>
                                            <button class="btn btn-lg border border-primary" style="width: 45px" @click="numclick('.')"> . </button>
                                            <button class="btn btn-lg border border-primary sign" @click="equals()"> = </button>
                                            <button class="btn btn-lg border border-primary ml-1 cs">Payment</button>
                                            
                                        </div> 
                                        <div class="mt-4">
                                            <button class="form-control block btn-success" data-toggle="modal" data-target="#receipt">Generate Receipt</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    name: 'customers',
    computed: {
        ...mapGetters({
            inventoryList: 'inventoryList'
        })
    },
    data() {
        return{
            location: null,
            locations: [
                { id: "1111", manager: 'Alice',  title: 'Water Cart 1' },
                { id: "2222", manager: 'Bob',    title: 'Water Cart 2' },
                { id: "3333", manager: 'Neysa',  title: 'Water Cart 3' }
            ]
        }
    },
    methods: {
        numclick(num){
            console.log("clicked!");
            //var number = $(this).data('number');
            $("#st-area").val(function() {
                return this.value + num//number;
            });
        },
        equals(){
            var inputs = $("#st-area").val()
            
        },
        del(){
            var inputs = $("#st-area").val()
            var edited = inputs.slice(0, -1)
            
        },
        ...mapActions(['showitem']),
        // show(product) {
        //     console.log('clicked! ', product)
        //     this.showitem({...product})
        // },
        show(){
            console.log('yo')
            var e = document.getElementById("select_item").value
            // var strUser = e.val;
            console.log('selected', e);
            //this.showitem(e)
            //console.log('this one', this.showitem(e));
            this.$store.dispatch("showitem", e)
            .then((result) =>
                console.log(result)
            )
        }
    },
    created(){
        const showme = this.$store.dispatch("getSelectedItem");
        console.log('@here, getSelectedItem: ', showme)
    }
}
</script>

<style scoped>
.cs {
    width: 170px;
}

.zero {
    width: 90px;
}

.sign {
    width: 50px
}

.signs {
    width: 45px;
}
</style>
