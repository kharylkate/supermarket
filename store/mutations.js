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
      }
}