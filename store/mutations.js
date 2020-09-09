export default {
    addCustomer: (state, customerData) => {
        // state.customers.id = customerData[0];
        // state.customers.name = customerData[1];
        // state.customers.address = customerData[2];
        // state.customers.contactno = customerData[3];
        // state.customers.status = customerData[4];

        // Vue.set(state.customers, )
        console.log(customerData)
        state.customers.push(customerData)
    },

    addSupplier: (state, supplierData) => {
        console.log(supplierData)
        state.suppliers.push(supplierData)
    },

    addSales: (state, salesData) => {
        console.log(salesData)
        state.sales.push(salesData)
    },

    addDelivery: (state, deliveryData) => {
        console.log(deliveryData)
        state.push(deliveryData)
    },

    // addSupplier: (state, supplierData) => {
    //     console.log(supplierData)
    //     state.push(supplierData)
    // },

    addInventory: (state, inventoryData) => {
        console.log(inventoryData)
        state.push(inventoryData)
    },

    addSelectedTransaction: (state, transaction) => {
        state.selectedTransaction = transaction;
    },

    addSelectedDelivery: (state, dr_no) => {
        state.selectedDelivery = dr_no;
    }

    // addSelectedDelivery: (state, delivery) => {
    //     state.selectedDelivery = delivery;
    // }





}