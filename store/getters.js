export default {
    // inventory
    
    inventoryCounter: state => {
        var count = 0;
        state.inventoryList.map(inventoryList => {
            count += parseInt(inventoryList.quantity)
        })
        return count;
    },

    salesOr(state){
        console.log(state.salesList[state.salesList.length-1]);

        if (state.salesList[state.salesList.length-1]) {
         return state.salesList[state.salesList.length-1].or_no+1
        }
    },

    deliveryCounter: state => {
        var count = 0;
        state.deliveryList.map(delivery => {
            count += deliveryList.quantity
        })
        return count;
    },
    delivery_transactions: state => state.delivery_transactions,
    // suppliers
    suppliers: state => {
        return state.suppliers
    },

    supplierCounter(state) {
        return state.suppliersList.length
    },

    salesCounter: state => {
        return sales.length;
    },

    // zero stocks
    zeroStocks: state => {
        var j = 0;
        state.inventoryList.map(inventoryList => {
            if(inventoryList.quantity == 0){
                j += 1;
            }
        })
        // console.log(j)
        return j
    },


    // =====================================================

    //roles
    rolesList(state) {
        return state.rolesList;
    },

    userList(state) {
        return state.userList;
    },

    inventoryList(state) {
        return state.inventoryList;
    },

    suppliersList(state) {
        return state.suppliersList;
    },

    deliveryList(state) {
        return state.deliveryList;
    },

    salesList(state) {
        return state.salesList;
    },

    getSelectedTransaction: state => {
        return state.selectedTransaction;
    },

    getSelectedDelivery: state => {
        const id = state.selectedDelivery;
        return (state.delivery_transactions_items.filter(
            delivery_transactions_items =>
            delivery_transactions_items.dr_no === id
            ));
    },

    getSelectedRole: state => {
        console.log('@here again: ', state.selectedRole)
        return state.selectedRole;
    },

    getSelectedItem(state) {
        return state.selectedItem;
    },


}