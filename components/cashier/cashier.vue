<template>
    <div role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-light">
        <div class="container-fluid">
            <div class="top-name d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 mt-3 px-2" id="topName">
                <h4 class="text-uppercase">Sales Transaction</h4>

                </div>

                <div class="col-md-12">
                    <div class="row">
                        <div class="card sales-card col-md-8">
                            <div class="mt-3">
                                <div class="my-2 px-2">Sales Transaction Items</div>
                            </div>
                            <!-- <div class="container item-list">
                                <ul class="border border-primary">
                                    <li class="item-row">
                                        <div class="form-row d-flex col-md-12">
                                            <div class="form-group col-md-3">
                                                <label for="form__barcode">Barcode</label>
                                            </div>
                                            <div class="form-group col-md-5">
                                                <label for="form__description">Product Description</label>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="form__qty">Quantity</label>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label for="form__unitcost">Unit Cost</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="item-row" v-for="(row, index) in rows" :key="index.id">
                                        <div class="form-row d-flex col-md-12">
                                            <div class="form-group col-md-3">
                                                <input type="text" class="" v-model="row.barcode" disabled/>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <input type="text" class="" v-model="row.product_description" disabled/>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <input type="text" class="" v-model="row.sales_qty" disabled/>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <input type="text" class="" v-model="row.unit_cost" disabled/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div> -->
                            <div class="table container">
                                <table class="table table-borderless w-auto table-xtra-condensed">
                                    <thead class="fit w-auto">
                                        <tr class="fit">
                                            <th class="fit">Barcode</th>
                                            <th class="fit">Description</th>
                                            <th class="fit">Quantity</th>
                                            <th class="fit">Unit Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="fit" v-for="(row, index) in rows" :key="index.id">
                                            <td>
                                                <input type="text" class="trans" v-model="row.barcode" disabled/>
                                            </td>
                                            <td>
                                                <input type="text" class="trans" v-model="row.product_description" disabled/>
                                            </td>
                                            <td>
                                                <input type="text" class="trans" v-model="row.qty" disabled/>
                                            </td>
                                            <td>
                                                <input type="text" class="trans" v-model="row.unit_cost" disabled/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                            <div class="transaction-total text-right mt-5 mr-4">
                                <label>Total Amount: ₱</label>
                                <input type="text" class="trans" v-model="st.total_cost" disabled/>
                            </div>
                            <div v-if="(st.payment_amount == 0)" class="transaction-total text-right mt-5 mr-4">
                                <label>Payment Amount: ₱</label>
                                <input type="text" class="trans" v-model="st.payment_amt" disabled/>
                            </div>

                        </div>
                        <div class="card col-md-4">
                            <div class="container mt-3">
                                <div class="form-group my-2 px-2">
                                    <label for="or_no">Receipt Number: </label>
                                    <input type="number" v-model="st.or_no" class="form-control">
                                </div>
                                <div>
                                    <div class="mt-3">
                                        Customer Information
                                    </div>
                                    <div class="form-group my-2 px-2">
                                        <input type="text" v-model="st.customer_name" class="form-control m-2" placeholder="Customer Name">
                                        <input type="text" v-model="st.customer_contact_no" class="form-control m-2" placeholder="Contact Number">
                                        <input type="text" v-model="st.customer_address" class="form-control m-2" placeholder="Address">
                                    </div>
                                </div>
                                <hr>
                                <div>
                                    <!-- <v-select multiple v-model="selected" :options="['Canada','United States']" /> -->
                                    <!-- <select class="form-control" @change="show()" id="select_item">
                                        <option disabled selected >Scan?</option>
                                        <option v-for="item in inventoryList" :key="item.id" :value="item.barcode">{{item.barcode}} - {{item.product_description}}</option>
                                    </select> -->
                                    <input placeholder="barcode" type="text" id="select_item" @keyup.enter="show()" value="" list="items-list" class="form-control mt-4">
                                    <datalist id="items-list">
                                        <option v-for="item in inventoryList" :key="item.id" :value="item.barcode" >{{item.product_description}}</option>
                                    </datalist>
                                </div>
                                
                                <div class="my-3 row col-md-12">
                                    <div class="ml-auto text-center">
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
                                            <button class="btn btn-lg border border-danger ml-1 cs" type="button" @click="removeitem()">Delete Item</button>
                                            
                                        </div>
                                        <div class="row">
                                            
                                            <button data-number="4" class="btn btn-lg border border-primary" @click="numclick(4)"> 4 </button>
                                            <button data-number="5" class="btn btn-lg border border-primary" @click="numclick(5)"> 5 </button>
                                            <button data-number="6" class="btn btn-lg border border-primary" @click="numclick(6)"> 6 </button>
                                            <button class="btn btn-lg border border-primary sign"  @click="numclick('-')"> - </button>
                                            <button class="btn btn-lg border border-primary ml-1 cs" type="button" @click="qtymodal()">Quantity</button>
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
                                            <button class="btn btn-lg border border-primary ml-1 cs" type="button" @click="paymodal()" >Payment</button>
                                            
                                        </div> 
                                        <div class="mt-4">
                                            <button class="form-control block btn-success" type="button" @click="generate_receipt()" >Generate Receipt</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>

        <div
            class="modal fade"
            id="qty_modal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enter Quantity</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action id="qty_modal_form">
                        <div class="form-row justify-content-center">

                            <div class="form-group col-md-8">
                                <label>Product Description:</label>
                                

                                <!-- {{getSelectedItem.product_description}} -->
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="input_description"
                                    autocomplete="off"
                                    required
                                disabled
                                />
                            </div>

                            <div class="form-group col-md-8">
                                <label>Quantity:</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model="input_quantity"
                                    autocomplete="off"
                                    required
                                
                                />

                            <!-- <div class="form-group col-md-8">
                                <label for="edit_item_qty">Quantity: </label>
                                <div class="input-group">
                                <span class="input-group-btn">
                                    <button type="button" @click="qty_btn(this)" class="btn btn-default btn-number border" disabled="disabled" data-type="minus" data-field="quant[1]">
                                        <img src="../../static/icons/dash.svg" alt="">
                                    </button>
                                </span>
                                    <input type="number" name="quant[40]" id="edit_item_qty" class="form-control input-number" @focus="qty_focus(this)" @change="qty_change(this)" @keydown="qty_keydown(this)" value="1" min="1" max="100">
                                <span class="input-group-btn">
                                    <button type="button" @click="qty_btn(this)" class="btn btn-default btn-number border" data-type="plus" data-field="quant[1]">
                                    <img src="../../static/icons/plus.svg" alt="">
                                    </button>
                                </span>
                                </div>
                            </div> -->

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                            >Cancel</button>
                            <button type="button" @click="setqty()" class="btn btn-primary">OK</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>

        <div
            class="modal fade"
            id="payment_modal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            >
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Payment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action id="payment_modal_form">
                        <div class="form-row justify-content-center">

                            <div class="form-group col-md-8">
                                <label>Payment Amount</label>
                                

                                <!-- {{getSelectedItem.product_description}} -->
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model="input_payment_amt"
                                    autocomplete="off"
                                    required
                                />
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                            >Cancel</button>
                            <button type="button" @click="setpayment()" class="btn btn-primary">OK</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="viewTransaction" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Official Receipt</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                    

                    <div> 
                        <div class="form-row justify-content-center">
                            <div class="container text-center mb-2">
                            <h5>LOU GEH SUPERMARKET</h5>
                            <small>Some bldg-name, st name, road name, STATE</small>
                            </div>

                            <div class="container row mt-3">
                                <div class="mr-auto">OR Number: {{st.or_no}}</div>    
                                <h6 class="ml-auto">Date: {{st.stransaction_date}}</h6>    
                            </div>
                            <div class="container">
                                <div class="mr-auto">Customer Name: {{st.customer_name}}</div> 
                                <div class="mr-auto">Contact Number: {{st.customer_contact_no}}</div> 
                                <div class="mr-auto">Address: {{st.customer_address}}</div> 
                            </div>

                            <div class="table-responsive">
                            <table class="table table-borderless">
                                <thead>
                                <tr>
                                    <th>BARCODE</th>
                                    <th>DESC</th>
                                    <th>QTY</th>
                                    <th>UNIT PRICE</th>
                                    <th>AMT</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in rows" :key="item.id">
                                    <td>{{item.barcode}}</td>
                                    <td>{{item.product_description}}</td>
                                    <td>{{item.qty}}</td>
                                    <td>{{item.unit_cost}}</td>
                                    <td v-if="((item.unit_cost * item.qty)!= 0)">{{(item.unit_cost * item.qty)}}</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    

                        <div class="container mb-5">
                        <table class="table-borderless">
                            <tbody>
                            <tr>
                                <td>Total</td>
                                <td>PHP{{st.total_cost}}</td>
                            </tr>
                            <tr>
                                <td>Cash</td>
                                <td>PHP{{st.payment_amt}}</td>
                            </tr>
                            <tr v-if="(st.total_cost<st.payment_amt)">
                                <td>Change</td>
                                <td>PHP{{(st.payment_amt-st.total_cost).toFixed(2)}}</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>

                        
                    </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" @click="exit()" class="btn btn-primary">OK</button>
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
            inventoryList: 'inventoryList',
            getSelectedItem: 'getSelectedItem',
            sales: 'salesList'
        })
    },
    data() {
        return{
            st: {
                total_cost: 0,
                payment_amt: 0
            },
            rows: [{
                barcode: "",
                product_description: "",
                qty: "",
                unit_cost: ""
            }],
            input_quantity: "",
            input_description: "",
            input_payment_amt: ""
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

            this.$store.dispatch("showitem", e)

            var elem = document.createElement('tr');
            this.rows.push({
                barcode: this.getSelectedItem.barcode,
                product_description: this.getSelectedItem.product_description,
                qty: 1,
                unit_cost: this.getSelectedItem.unit_cost
            });

            this.st.total_cost += this.getSelectedItem.unit_cost
            
        },
        removeitem: function(){
            if((this.rows.length-1)==0){
                alert("No item to delete")
            } else {
                this.rows.pop();
            }
            
        },
        qtymodal(){
            if((this.rows.length-1)!=0){
                $("#qty_modal").modal('show');
                this.input_description = this.getSelectedItem.product_description
                this.input_quantity = this.rows[this.rows.length-1].qty
            } else {
                alert("No item in list!")
            }
        },
        setqty() {
            var index = this.rows.length-1
            var def_qty = this.rows[index].qty
            this.rows[index].qty = this.input_quantity
            this.st.total_cost += (((this.input_quantity-1) * (this.getSelectedItem.unit_cost)))
            console.log('row: ', this.rows)
            $("#qty_modal").modal('hide');
            $("#qty_modal_form")[0].reset();
        },
        paymodal(){
            $("#payment_modal").modal('show');
        },
        setpayment(){
            this.st.payment_amt = this.input_payment_amt
            if(this.input_payment_amt == this.st.total_cost){
                alert('Exact Amount')
                $("#payment_modal").modal('hide');
            } else if(this.input_payment_amt > this.st.total_cost){
                alert('Change: ', (this.st.payment_amt - this.st.total_cost))
                $("#payment_modal").modal('hide');
            } else if(this.input_payment_amt < this.st.total_cost){
                alert('Payment not enough')
            }
        },
        ...mapActions(['addSales', 'updateInvQty']),
        generate_receipt(){
            this.rows.transaction = 'sales'
            this.st.items = this.rows
            console.log("transaction", this.st);
            this.addSales({
                sales: this.st
            })

            this.updateInvQty({
                invqty: this.rows
            })

            $("#viewTransaction").modal('show');
        },
        exit(){
            window.location.reload()
        },
        qty_btn() {
            console.log('quantity button', document.getElementById(".btn-number"));
            fieldName =  //$(this).attr('data-field');
            type      = $(this).attr('data-type');
            var input = $("input[name='"+fieldName+"']");
            var currentVal = parseInt(input.val());
            if (!isNaN(currentVal)) {
                if(type == 'minus') {
                    
                    if(currentVal > input.attr('min')) {
                        input.val(currentVal - 1).change();
                    } 
                    if(parseInt(input.val()) == input.attr('min')) {
                        $(this).attr('disabled', true);
                    }

                } else if(type == 'plus') {

                    if(currentVal < input.attr('max')) {
                        input.val(currentVal + 1).change();
                    }
                    if(parseInt(input.val()) == input.attr('max')) {
                        $(this).attr('disabled', true);
                    }

                }
            } else {
                input.val(0);
            }
        },
        qty_focus(){
            $(this).data('oldValue', $(this).val());
        },
        qty_change(){
            minValue =  parseInt($(this).attr('min'));
            maxValue =  parseInt($(this).attr('max'));
            valueCurrent = parseInt($(this).val());
            
            name = $(this).attr('name');
            if(valueCurrent >= minValue) {
                $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
            } else {
                alert('Sorry, the minimum value was reached');
                $(this).val($(this).data('oldValue'));
            }
            if(valueCurrent <= maxValue) {
                $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
            } else {
                alert('Sorry, the maximum value was reached');
                $(this).val($(this).data('oldValue'));
            }
        },
        qty_keydown(){
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) || 
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    },
    created(){
        const showme = this.$store.dispatch("getSelectedItem");
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

.item-list .item-row {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    
}

/* .transaction-table {
    margin: 0px
}

.fit {
    white-space: nowrap !important;
    width: 1% !important
} */

.sales-card {
    border: none
}

.table-xtra-condensed > thead > tr > th,
.table-xtra-condensed > tbody > tr > th,
.table-xtra-condensed > tfoot > tr > th,
.table-xtra-condensed > thead > tr > td,
.table-xtra-condensed > tbody > tr > td,
.table-xtra-condensed > tfoot > tr > td {
  padding: 0px;
}

.trans {
    border: none;
    outline: none;
    background-color: white;

}


</style>
