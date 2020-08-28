export default {
  addCustomer: (context, customerData) => {
    context.commit("addCustomer", customerData);
    // console.log(customerData)
    return customerData;
  },
  editCustomer({ commit }, { customerData }) {
    commit("editCustomer", customerData);
    return customerData;
  },

  addSupplier: (context, supplierData) => {
    context.commit("addSupplier", supplierData);
    return supplierData;
  },

  selectTransaction({ commit },  transaction ) {
      commit('addSelectedTransaction', transaction)
    return transaction;
  },

  selectDelivery({ commit },  delivery ) {
    commit('addSelectedDelivery', delivery)
  return delivery;
}
};
