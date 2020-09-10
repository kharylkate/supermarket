import axios from "axios";

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

  selectDelivery({ commit }, dt ) {
      commit('addSelectedDelivery', dt.dr_no)
    return dt.dr_no;
  },


//======================================================================

  async fetchRolesList ({ commit }) {
    return await axios({
      method: "GET",
      url: `${this.$axios.defaults.baseURL}/role`,
      headers: {},
      data: {},
    })
    .then(result => {
      // console.log("eyy", result)
      commit("setRolesList", result.data);
      return result.data;
    })
    .catch( err => err);
  },

  async addRole({ commit }, { role_name }) {

    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/role/add`,
      header: {
        "Content-Type": "application/json"
      },
      data: { role_name },
      
    })
    .then(result => {
      console.log('hihi',result)
      commit("addRole", result.data);

      return result.data;
    })
    .catch(err => err);
  },









};
