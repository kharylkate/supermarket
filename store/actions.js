import axios from "axios";

export default {

  login({commit}, login) {
    // commit("login", login);
    // return login;
    commit("login", login);
      return login;
  },

  // sales transaction
  addSales({commit}, salesData){
    commit("addSales", salesData);
    return salesData;
  },

  updateInvQty({commit}, items){
    commit("updateInvQty", items)
    return items
  },

  // delivery transaction
  receiveDelivery({commit}, delivery) {
    commit("receiveDelivery", delivery)
    return delivery
  },

// supplier
  addSupplier({commit}, supplierData) {
    commit("addSupplier", supplierData);
    return supplierData;
  },

  updateSupplier({commit}, supplier) {
    commit("updateSupplier", supplier);
    return supplier
  },

  // role
  addRole: (context, role_name) => {
    context.commit("addRole", role_name);
    return role_name;
  },

  updateRole({commit}, role_name) {
    console.log('action.js: ', role_name);
    commit("updateRole", role_name);
    return role_name
  },

  // user
  addUser({commit}, { user }) {
    commit("addUser", user)
    return user;
  },

  updateUser({commit}, user) {
    commit("updateUser", user);
    return user
  },

  // inventory
  addInventory({commit}, {inventory}) {
    commit("addInventory", inventory)
    return inventory;
  },

  updateInventory({commit}, inventory) {
    console.log('action.js: ', inventory);
    commit("updateInventory", inventory);
    return inventory
  },

  // ???
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
  },

  showitem( {commit}, item) {
    console.log('actions.js: showitem: ', item);
    commit('viewSelectedItem', item)
    return item
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


