import axios from "axios";

export default {
  // login({commit}, login) {
  //   commit("login", login);
  //     return login;
  // },

  async login({commit}, login) {
    console.log("login: ",login)
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/new/login`,
      headers: {},
      data: { ...login.user },
    })
    .then(result => {
      console.log("result", result)
      commit("login", result);
      return result.data;
    })
    .catch( err => err);
  },

  async passwordUpdate ({ commit }, login) {
    return await axios({
      method: "GET",
      url: `${this.$axios.defaults.baseURL}/roles`,
      headers: {},
      data: {},
    })
    .then(result => {
      // console.log("eyy", result)
      commit("passwordUpdate", login);
      return result.data;
    })
    .catch( err => err);
  },


//======================================================================

  // ROLES

  async fetchRolesList ({ commit }) {
    return await axios({
      method: "GET",
      url: `${this.$axios.defaults.baseURL}/roles`,
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

  async addRole({ commit }, { role }) {
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/role/add`,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...role },
    })
    .then(result => {
      console.log('hihi',result)
      commit("addRole", role);

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
      url: `${this.$axios.defaults.baseURL}/role/`+role.role_id,
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
      commit("setUserList", result.data);
      return result.data;
    })
    .catch( err => err);
  },

  async addUser({ commit }, { user }) {
    console.log('@user: ',user)
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/add_user`,
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

  async updateUser({commit}, user) {
    console.log('user code: ', user.user.users_id)

    return await axios({
      method: "PUT",
      url: `${this.$axios.defaults.baseURL}/user/`+user.user.users_id,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...user.user },
    })
    .then(result => {
      console.log('hihi',result.data)
      console.log(user)
      commit("updateUser", user.user);
      return result.data;
    })
    .catch(err => err);
  },

  async passwordUpdate({commit}, user) {
    console.log('user code: ', user.user.users_id)

    return await axios({
      method: "PUT",
      url: `${this.$axios.defaults.baseURL}/user/`+user.user.users_id,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...user.user },
    })
    .then(result => {
      console.log('hihi',result.data)
      console.log(user)
      commit("updateUser", user.user);
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
    console.log('@actions: ', inventory.inventory_id)
    return await axios({
      method: "PUT",
      url: `${this.$axios.defaults.baseURL}/inventory/`+inventory.inventory_id,
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
    return await axios({
      method: "PUT",
      url: `${this.$axios.defaults.baseURL}/inventory/`+inventory.invqty.inventory_code,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...inventory.invqty },
      
    })
    .then(result => {
      console.log(result);
      commit("updateInvQty", inventory);
      return result.data;
    })
    .catch(err => {
      console.log(err);
    });

  },

  async addInventory({ commit }, { inventory }) {
    console.log('@inventory data: ',inventory)
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/add_inventory`,
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
      //console.log(result.data)
      commit("setSuppliersList", result.data);
      return result.data;
    })
    .catch( err => err);
  },

  async addSupplier({ commit }, { supplier }) {
    console.log('@supplier data: ',supplier)
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/add_supplier`,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...supplier },
    })
    .then(
    result => {
      console.log('hihi',result.data)
      console.log(supplier)
      commit("addSupplier", supplier);
      return result.data;
    },
    status => {
      // ADDED BY KENN
      // This will return any status about the Server including the errors
      if(status.response.status == null) {
        alert({
          title: "Failed",
          message: "Please check your internet connection, and try again."
        });
      }
      else {
        alert({
          title: "Status: " + status.response.status,
          message: status.response.statusText
        });
      }
    }
    );
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
      url: `${this.$axios.defaults.baseURL}/delivery_item/all`,
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
    console.log(delivery.transaction);
    return await axios({
      method: "POST",
      url: `${this.$axios.defaults.baseURL}/add_delivery`,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...delivery.transaction },
    })
    .then(result => {
      console.log('hihi',result.data)
      console.log(delivery)
      commit("receiveDelivery", delivery)
      return result.data;
    })
  },


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
      url: `${this.$axios.defaults.baseURL}/addsale`,
      header: {
        "Content-Type": "application/json"
      },
      data: { ...sales.sales },
    })
    .then(result => {
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
      data: { ...sales.sales[0] },
    })
    .then(result => {
      console.log(result.data);
      commit("addSalesItems", sales.sales);
      return result.data;
    })
    .catch(err => {
      console.log(err);

      return err
    });
  },

  showitem( {commit}, item) {
    console.log('actions.js: showitem: ', item);
    commit('viewSelectedItem', item)
    return item
  }




  
};
