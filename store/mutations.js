export default {
    addCustomer: (state, customerData) => {
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


    addInventory: (state, inventoryData) => {
        console.log(inventoryData)
        state.push(inventoryData)
    },

    addSelectedTransaction: (state, transaction) => {
        state.selectedTransaction = transaction;
    },

    addSelectedDelivery: (state, dr_no) => {
        state.selectedDelivery = dr_no;
    },

    // addSelectedDelivery: (state, delivery) => {
    //     state.selectedDelivery = delivery;
    // }


    // =======================================================

    setRolesList(state, data){
        state.rolesList = data;
    },

    addRole(state, role_name){
        //console.log('hehe',role_name)
        state.rolesList.unshift(role_name)
    },

    updateRole(state, data){
        
        console.log('@mutation: ', data)
        arr = {};
        arr.push(data.role_id)
        arr.push(data.role_code)
        arr.push(data.role_name)
        const index = state.rolesList.findIndex(
            rolesList => {
                rolesList.role_code = arr.role_code
            }
        )
    },




    setUserList(state, data){
        state.userList = data;
    },

    addUser(state, data){
        console.log('@mutation: ',data);
        state.userList.push(data)
    },

    addSelectedRole(state, role) {
        console.log('@here: ',role)
        state.selectedRole = role;
    },





    setInventoryList(state, data){
        state.inventoryList = data;
    },

    setSuppliersList(state, data){
        state.suppliersList = data;
    },

    addSupplier(state, data){
        console.log('@mutation: ',data);
        state.suppliersList.push(data)
    },

    updateSupplier(state, data){
        console.log('@mutation: ', data)
        const index = state.suppliersList.findIndex(
            suppliersList => {
                suppliersList.supplier_id = data.supplier_id
            }
        )
    },




    updateInventory(state, data){
        console.log('@mutation: ', data)
        const index = state.inventoryList.findIndex(
            inventoryList => {
                inventoryList.inventory_code = data.inventory_code
            }
        )
    },



    setDTransactionsList(state, data) {
        state.deliveryList = data;
    },










    setSTransactionsList(state, data) {
        state.salesList = data;
    }
}