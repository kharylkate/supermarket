export default {
    addCustomer: (context,  customerData ) => {
        context.commit('addCustomer', customerData);
        // console.log(customerData)
        return customerData;
    }
}