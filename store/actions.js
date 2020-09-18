import axios from "axios";

export default {
  login({commit}, login) {
    // commit("login", login);
    // return login;
    commit("login", login);
      return login;
  },
  // addCustomer: (context, customerData) => {
  //   context.commit("addCustomer", customerData);
  //   // console.log(customerData)
  //   return customerData;
  // },
  // editCustomer({ commit }, { customerData }) {
  //   commit("editCustomer", customerData);
  //   return customerData;
  // },

  // addSupplier: (context, supplierData) => {
  //   context.commit("addSupplier", supplierData);
  //   return supplierData;
  // },

  // selectTransaction({ commit },  transaction ) {
  //     commit('addSelectedTransaction', transaction)
  //   return transaction;
  // },

  // selectDelivery({ commit }, dt ) {
  //     commit('addSelectedDelivery', dt.dr_no)
  //   return dt.dr_no;
  // },


//======================================================================


  // ROLES

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

  selectRole({ commit }, role) {
    commit('addSelectedRole', role)
    return role;
  },

  async updateRole({ commit }, { role }) {
    var urole_name = role;
    console.log('@actions: ', urole_name)
    return await axios({
      method: "PUT",
      url: `${this.$axios.defaults.baseURL}/role/`+role.role_code,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...role },
      
    })
    .then(result => {
      console.log('hihi',result.data)
      commit("updateRole", role);
      return result.data;
    })
    .catch(err => err);
  },




  // USER


  async fetchUserList ({ commit }) {
    return await axios({
      method: "GET",
      url: `${this.$axios.defaults.baseURL}/users`,
      headers: {},
      data: {},
    })
    .then(result => {
      // console.log("eyy", result)
      commit("setUserList", result.data);
      return result.data;
    })
    .catch( err => err);
  },

  async addUser({ commit }, { user }) {
    var today = new Date();
    var arr = user
    var myObj = {
      'created_at': today,
      'created_by': localStorage.username
    }

    console.log('@user: ',user)
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/user/add`,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...user },
    })
    .then(result => {
      console.log('hihi',result.data)
      console.log(user)
      commit("addUser", user);
      return result.data;
    })
    .catch(err => err);
  },





  // INVENTORY


  async fetchInventoryList ({ commit }) {
    return await axios({
      method: "GET",
      url: `${this.$axios.defaults.baseURL}/inventory`,
      headers: {},
      data: {},
    })
    .then(result => {
      commit("setInventoryList", result.data);
      return result.data;
    })
    .catch( err => err);
  },

  async updateInventory({ commit }, { inventory }) {
    console.log('@actions: ', inventory.inventory_code)
    return await axios({
      method: "PUT",
      url: `${this.$axios.defaults.baseURL}/inventory/`+inventory.inventory_code,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...inventory },
      
    })
    .then(result => {
      console.log('hihi',inventory)
      commit("updateInventory", inventory);
      return result.data;
    })
    .catch(err => err);
  },

  async updateInvQty({commit}, inventory){
    console.log("update: ",inventory)
    return await axios({
      method: "PUT",
      url: `${this.$axios.defaults.baseURL}/inventory/`+inventory.inventory_code,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...inventory },
      
    })
    .then(result => {
      console.log('hihi',inventory)
      commit("updateInvQty", inventory);
      return result.data;
    })
    .catch(err => err);

  },

  async addInventory({ commit }, { inventory }) {
    console.log('@supplier data: ',inventory)
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/inventory/add`,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...inventory },
    })
    .then(result => {
      console.log('hihi',result.data)
      console.log(inventory)
      commit("addInventory", inventory);
      return result.data;
    })
    .catch(err => err);
  },



  // SUPPLIER

  async fetchSuppliersList ({ commit }) {
    return await axios({
      method: "GET",
      url: `${this.$axios.defaults.baseURL}/supplier`,
      headers: {},
      data: {},
    })
    .then(result => {
      // console.log("eyy", result)\
      console.log(result.data)
      commit("setSuppliersList", result.data);
      return result.data;
    })
    .catch( err => err);
  },

  async addSupplier({ commit }, { supplier }) {
    console.log('@supplier data: ',supplier)
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/supplier/add`,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...supplier },
    })
    .then(result => {
      console.log('hihi',result.data)
      console.log(supplier)
      commit("addSupplier", supplier);
      return result.data;
    })
    .catch(err => err);
  },

  async updateSupplier({ commit }, { supplier }) {
    var urole_name = supplier.contact_no;
    console.log('@actions: ', urole_name)
    console.log('@actions: ', supplier.supplier_id)
    return await axios({
      method: "PUT",
      url: `${this.$axios.defaults.baseURL}/supplier/`+supplier.supplier_id,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...supplier },
      
    })
    .then(result => {
      console.log('hihi',result.data)
      commit("updateSupplier", supplier);
      return result.data;
    })
    .catch(err => err);
  },


  // DELIVERY


  async fetchDTransactionsList ({ commit }) {
    return await axios({
      method: "GET",
      url: `${this.$axios.defaults.baseURL}/deliverytransactions`,
      headers: {},
      data: {},
    })
    .then(result => {
      // console.log("eyy", result)
      commit("setDTransactionsList", result.data);
      return result.data;
    })
    .catch( err => err);
  },

  async receiveDelivery({commit}, delivery){
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/delivery_transactions_items/add`,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...delivery },
    })
    .then(result => {
      console.log('hihi',result.data)
      console.log(delivery)
      commit("receiveDelivery", delivery)
      return result.data;
    })
    .catch(err => err);
  },

  // addSalesItems({commit}, sales){
  //   return await axios({
  //     method: "POST",
  //     url: `${this.$axios.defaults.baseURL}/item/add`,
  //     header: {
  //       "Content-Type": "application/json"
  //     },
  //     data: { ...sales },
  //   })
  //   .then(result => {
  //     console.log('hihi',result.data)
  //     console.log(sales)
  //     commit("addSalesItems", sales);
  //     return result.data;
  //   })
  //   .catch(err => err);
  // },




  // SALES

  async fetchSTransactionsList ({ commit }) {
    return await axios({
      method: "GET",
      url: `${this.$axios.defaults.baseURL}/viewsales`,
      headers: {},
      data: {},
    })
    .then(result => {
      // console.log("eyy", result)
      commit("setSTransactionsList", result.data);
      return result.data;
    })
    .catch( err => err);
  },


  async addSales({commit}, sales){
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/sales/add`,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...sales },
    })
    .then(result => {
      console.log('hihi',result.data)
      console.log(supplier)
      commit("addSales", sales);
      return result.data;
    })
    .catch(err => err);
  },

  async addSalesItems({commit}, sales){
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/item/add`,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...sales },
    })
    .then(result => {
      console.log('hihi',result.data)
      console.log(sales)
      commit("addSalesItems", sales);
      return result.data;
    })
    .catch(err => err);
  },




  
};
