import axios from "axios";

export default {
  addSales({commit}, salesData){
    commit("addSales", salesData);
    return salesData;
  },

  updateInvQty({commit}, items){
    commit("updateInvQty", items)
    return items
  },

  receiveDelivery({commit}, delivery) {
    commit("receiveDelivery", delivery)
    return delivery
  },

  addSupplier({commit}, supplierData) {
    commit("addSupplier", supplierData);
    return supplierData;
  },

  updateSupplier({commit}, supplier) {
    commit("updateSupplier", supplier);
    return supplier
  },

  addRole: (context, role_name) => {
    context.commit("addRole", role_name);
    return role_name;
  },

  updateRole({commit}, role_name) {
    console.log('action.js: ', role_name);
    commit("updateRole", role_name);
    return role_name
  },

  addUser({commit}, { user }) {
    commit("addUser", user)
    return user;
  },

  updateUser({commit}, user) {
    commit("updateUser", user);
    return user
  },

  addInventory({commit}, {inventory}) {
    commit("addInventory", inventory)
    return inventory;
  },

  updateInventory({commit}, inventory) {
    console.log('action.js: ', inventory);
    commit("updateInventory", inventory);
    return inventory
  },

  setRolesList( {commit}, {roles}) {
    commit("setRolesList", roles)
    return roles;
  },

  addDt({commit}, { dt }) {
    commit("addDeliveryTransaction", dt)
    return dt;
  },

  addDt_items({commit}, { dt_items }) {
    commit("addDeliveryTransaction_items", dt_items)
    return dt;
  },

  selectSales( {commit}, transaction) {
    console.log('actions.js: selectSales: ', transaction);
    commit('viewSalesTransaction', transaction)
    return transaction
  }

  // async updateRole({ commit }, { role }) {
  //   console.log('@actions: ', role.role_name)
  //     commit("updateRole", role);
  //     return role
    
  // },

  // async fetchRolesList( {commit} ) {
  //   commit("setRolesList")
  // }

}






//======================================================================

//   async fetchRolesList ({ commit }) {
//     return await axios({
//       method: "GET",
//       url: `${this.$axios.defaults.baseURL}/role`,
//       headers: {},
//       data: {},
//     })
//     .then(result => {
//       // console.log("eyy", result)
//       commit("setRolesList", result.data);
//       return result.data;
//     })
//     .catch( err => err);
//   },

//   async addRole({ commit }, { role_name }) {
//     return await axios({
//       method: "POST",
//       url: `${this.$axios.defaults.baseURL}/role/add`,
//       header: {
//         "Content-Type": "application/json"
//       },
//       data: { role_name },
//     })
//     .then(result => {
//       console.log('hihi',result)
//       commit("addRole", result.data);

//       return result.data;
//     })
//     .catch(err => err);
//   },

//   selectRole({ commit }, role) {
//     commit('addSelectedRole', role)
//     return role;
//   },

//   async updateRole({ commit }, { role }) {
//     console.log('@actions: ', role.role_name)
//     return await axios({
//       method: "PUT",
//       url: `${this.$axios.defaults.baseURL}/role/`+role.role_code,
//       header: {
//         "Content-Type": "application/json"
//       },
//       data: { ...role },
      
//     })
//     .then(result => {
//       console.log('hihi',result.data)
//       commit("updateRole", role);
//       return result.data;
//     })
//     .catch(err => err);
//   },







//   async fetchUserList ({ commit }) {
//     return await axios({
//       method: "GET",
//       url: `${this.$axios.defaults.baseURL}/user`,
//       headers: {},
//       data: {},
//     })
//     .then(result => {
//       // console.log("eyy", result)
//       commit("setUserList", result.data);
//       return result.data;
//     })
//     .catch( err => err);
//   },

//   async addUser({ commit }, { user }) {
//     var today = new Date();
//     var arr = user
//     var myObj = {
//       'created_at': today,
//       'created_by': localStorage.username
//     }

//     console.log('@user: ',user)
//     return await axios({
//       method: "POST",
//       url: `${this.$axios.defaults.baseURL}/user/add`,
//       header: {
//         "Content-Type": "application/json"
//       },
//       data: { ...user },
//     })
//     .then(result => {
//       console.log('hihi',result.data)
//       console.log(user)
//       commit("addUser", user);
//       return result.data;
//     })
//     .catch(err => err);
//   },


//   async updateUser({ commit }, { user }) {
//     var urole_name = user;
//     console.log('@actions: ', urole_name)
//     return await axios({
//       method: "PUT",
//       url: `${this.$axios.defaults.baseURL}/user/`+user.users_code,
//       header: {
//         "Content-Type": "application/json"
//       },
//       data: { ...user },
      
//     })
//     .then(result => {
//       console.log('hihi',result.data)
//       commit("updateUser", result.data);
//       return result.data;
//     })
//     .catch(err => err);
//   },















//   async fetchInventoryList ({ commit }) {
//     return await axios({
//       method: "GET",
//       url: `${this.$axios.defaults.baseURL}/inventory`,
//       headers: {},
//       data: {},
//     })
//     .then(result => {
//       // console.log("eyy", result)
//       //console.log(result);
//       commit("setInventoryList", result.data);
//       return result.data;
//     })
//     .catch( err => err);
//   },

//   async updateInventory({ commit }, { inventory }) {
//     console.log('@actions: ', inventory.inventory_code)
//     return await axios({
//       method: "PUT",
//       url: `${this.$axios.defaults.baseURL}/inventory/`+inventory.inventory_code,
//       header: {
//         "Content-Type": "application/json"
//       },
//       data: { ...inventory },
      
//     })
//     .then(result => {
//       console.log('hihi',inventory)
//       commit("updateInventory", inventory);
//       return result.data;
//     })
//     .catch(err => err);
//   },


  







//   async fetchSuppliersList ({ commit }) {
//     return await axios({
//       method: "GET",
//       url: `${this.$axios.defaults.baseURL}/supplier`,
//       headers: {},
//       data: {},
//     })
//     .then(result => {
//       // console.log("eyy", result)\
//       // console.log(result.data)
//       commit("setSuppliersList", result.data);
//       return result.data;
//     })
//     .catch( err => err);
//   },

//   async addSupplier({ commit }, { supplier }) {
//     console.log('@supplier data: ',supplier)
//     return await axios({
//       method: "POST",
//       url: `${this.$axios.defaults.baseURL}/supplier/add`,
//       header: {
//         "Content-Type": "application/json"
//       },
//       data: { ...supplier },
//     })
//     .then(result => {
//       console.log('hihi',result.data)
//       // console.log(supplier)
//       commit("addSupplier", supplier);
//       return result.data;
//     })
//     .catch(err => err);
//   },

//   async updateSupplier({ commit }, { supplier }) {
//     var urole_name = supplier.contact_no;
//     console.log('@actions: ', urole_name)
//     console.log('@actions: ', supplier.supplier_id)
//     return await axios({
//       method: "PUT",
//       url: `${this.$axios.defaults.baseURL}/supplier/`+supplier.supplier_id,
//       header: {
//         "Content-Type": "application/json"
//       },
//       data: { ...supplier },
      
//     })
//     .then(result => {
//       console.log('hihi',result.data)
//       commit("updateSupplier", result.data);
//       return result.data;
//     })
//     .catch(err => err);
//   },






//   async fetchDTransactionsList ({ commit }) {
//     return await axios({
//       method: "GET",
//       url: `${this.$axios.defaults.baseURL}/delivery`,
//       headers: {},
//       data: {},
//     })
//     .then(result => {
//       // console.log("eyy", result)
//       commit("setDTransactionsList", result.data);
//       return result.data;
//     })
//     .catch( err => err);
//   },








//   async addDtrans({ commit }, { dt }) {
//     console.log('@dt data: ', dt)
//     return await axios({
//       method: "POST",
//       url: `${this.$axios.defaults.baseURL}/delivery/add`,
//       header: {
//         "Content-Type": "application/json"
//       },
//       data: { ...dt },
//     })
//     .then(result => {
//       console.log('hihi',result.data)
//       console.log(result)
//       commit("delivery", dt);
//       return result.data;
//     })
//     .catch(err => err);
//   },








//   async fetchSalesList ({ commit }) {
//     return await axios({
//       method: "GET",
//       url: `${this.$axios.defaults.baseURL}/sale`,
//       headers: {},
//       data: {},
//     })
//     .then(result => {
//       console.log("eyy", result)
//       commit("setSalesList", result.data);
//       return result.data;
//     })
//     .catch( err => err);
//   },



// };
