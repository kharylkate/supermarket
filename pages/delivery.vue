<template>
    <div>
        <navbar />
        <div class="container-fluid">
            <div class="row">
                <navbarCollapse />
                <items />
            </div>
            <div>
                <addDelTrans />
            </div>
        </div>
        
    </div>
</template>

<script>
import navbar from '../layouts/navbar';
import navbarCollapse from '../layouts/sidebar';
import items from '../components/delivery/delivery';
import addDelTrans from '../components/delivery/add_deliveryTrans';
import editDelTrans from '../components/delivery/edit_deliveryTrans';
import viewDelivery from '../components/delivery/view_delivery';

export default {
    name: 'items-body',
    components: {
        navbar,
        'navbarCollapse': navbarCollapse,
        'items': items,
        'addDelTrans': addDelTrans,
        'editDelTrans': editDelTrans,
        'viewDelivery': viewDelivery
    },
    methods: {
        filterTable(){

            'use strict';
 
            var TableFilter = (function(Arr) {
        
                var _input;
        
                function _onInputEvent(e) {
                _input = e.target;
                var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
                Arr.forEach.call(tables, function(table) {
                Arr.forEach.call(table.tBodies, function(tbody) {
                Arr.forEach.call(tbody.rows, _filter);
                });
                });
                }
        
                function _filter(row) {
                var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
                row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
                }
        
                return {
                init: function() {
                var inputs = document.getElementsByClassName('search-filter');
                Arr.forEach.call(inputs, function(input) {
                input.oninput = _onInputEvent;
                });
                }
                };
            })(Array.prototype);
        
            document.addEventListener('readystatechange', function() {
                if (document.readyState === 'complete') {
                TableFilter.init();
                }
            });
        }
    }
}
</script>

<style scoped>

</style>