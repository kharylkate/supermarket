export default {
    // inventory
    inventory: state => {
        return state.inventory
    },
    inventoryCounter: state => {
        var count = 0;
        state.inventory.map(inventory => {
            count += inventory.qty
        })
        return count;
    },
    
    // delivery
    delivery: state => {
        return state.delivery
    },
    deliveryCounter: state => {
        var count = 0;
        state.delivery.map(delivery => {
            count += delivery.qty
        })
        return count;
    },
    // suppliers
    suppliers: state => {
        return state.suppliers
    },
    supplierCounter: (state, suppliers) => {
        return state.suppliers.length
    },
    // customers
    getCustomers(state){
        return state.customers
    },
    customers: state => {
        return state.customers
    },
    customersCounter: state => {
        return customers.length;
    },

    // sales
    salesTransactions: state => {
        return state.salesTransaction;
    },
    salesCounter: state => {
        return sales.length;
    },

    // zero stocks
    zeroStocks: state => {
        var j = 0;
        state.inventory.map(inventory => {
            if(inventory.qty == 0){
                j += 1;
            }
        })
        console.log(j)
        return j
    },

    getSelectedTransaction: state => {
        //console.log(state.selectedTransaction)
        return state.selectedTransaction;
    },

    getSelectedDelivery: state => {
        return state.selectedDelivery;
    },

    // delivery_transactions
    allDelivery: (state) => state.delivery_transactions
}