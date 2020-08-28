export default {
    // items
    items: state => {
        return state.items
    },
    itemCounter: state => {
        var count = 0;
        state.items.map(items => {
            count += items.qty
        })
        return count;
    },
    // suppliers
    suppliers: state => {
        return state.suppliers
    },
    suppliesCounter: (state, table, col) => {
        var count = 0;
        state.table.map(table => {
            count += table.col
        })
        return count;
    },
    // customers
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
}