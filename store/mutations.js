export default {


    addSales: (state, salesData) => {
        console.log(salesData)
        state.sales.push(salesData)
    },

    addDelivery: (state, deliveryData) => {
        console.log(deliveryData)
        state.push(deliveryData)
    },

    addSupplier: (state, supplierData) => {
        console.log(supplierData)
        state.suppliers.push(supplierData)
    },

    updateSupplier: (state, payload) => {
        console.log(payload.supplier);
        console.log('payload.company_name: ', payload.supplier.company_name);
        const supplier = state.suppliers.find(p => p.supplier_code === payload.supplier.supplier_code)
        supplier.company_name = payload.supplier.company_name
        supplier.contact_no = payload.supplier.contact_no
        supplier.company_address = payload.supplier.company_address
        supplier.status = payload.supplier.status
    },

    addRole: (state, roleData) => {
        console.log(roleData)
        state.roles.push(roleData)
    },

    updateRole: (state, payload) => {
        console.log(payload.role);
        console.log('payload.role_name: ', payload.role.role_name);
        const role = state.roles.find(p => p.role_id === payload.role.role_id)
        role.role_name = payload.role.role_name
    },



    addUser: (state, userData) => {
        console.log(userData)
        state.users.push(userData)
    },

    updateUser: (state, payload) => {
        console.log(payload.user);
        console.log('payload.company_name: ', payload.user.username);
        const users = state.users.find(p => p.users_code === payload.user.users_code)
        users.username = payload.user.username
        users.role_name = payload.user.role_name

    },

    addInventory: (state, inventoryData) => {
        console.log(inventoryData)
        state.inventory.push(inventoryData)
    },

    updateInventory: (state, payload) => {
        console.log(payload.inventory);
        console.log('payload.inventory: ', payload.inventory.product_description);
        const inventory = state.inventory.find(p => p.barcode === payload.inventory.barcode)
        inventory.product_description = payload.inventory.product_description
    },

    // setRolesList(state, data){
    //     state.rolesList = data;
    // },

    addDeliveryTransaction(state, dt_data){
        state.delivery_transactions.push(dt_data)
    },
    
    addDeliveryTransaction_items(state, dt_items) {
        state.delivery_transactions_items.push(dt_items)
    },

    // updateRole(state, data){
        
    // }
    



}
    // =======================================================

    // setRolesList(state, data){
    //     state.rolesList = data;
    // },

//     addRole(state, role_name){
//         //console.log('hehe',role_name)
//         state.rolesList.unshift(role_name)
//     },

//     updateRole(state, data){
        
//         console.log('@mutation: ', data)
//         const index = state.rolesList.findIndex(
//             rolesList => {
//                 rolesList.role_code = data.role_code
//             }
//         )
//     },




//     setUserList(state, data){
//         state.userList = data;
//     },

//     addUser(state, data){
//         console.log('@mutation: ',data);
//         state.userList.push(data)
//     },

//     updateUser(state, data){
//         console.log('@mutation: ', data)
//         const index = state.userList.findIndex(
//             userList => {
//                 userList.users_code = data.users_code
//             }
//         )
//     },









//     addSelectedRole(state, role) {
//         console.log('@here: ',role)
//         state.selectedRole = role;
//     },





//     setInventoryList(state, data){
//         state.inventoryList = data;
//     },

//     updateInventory(state, data){
//         console.log('@mutation: ', data)
//         const index = state.inventoryList.findIndex(
//             inventoryList => {
//                 inventoryList.inventory_code = data.inventory_code
//             }
//         )
//     },






//     setSuppliersList(state, data){
//         state.suppliersList = data;
//     },

//     addSupplier(state, data){
//         console.log('@mutation: ',data);
//         state.suppliersList.push(data)
//     },

//     updateSupplier(state, data){
//         console.log('@mutation: ', data)
//         const index = state.suppliersList.findIndex(
//             suppliersList => {
//                 suppliersList.supplier_id = data.supplier_id
//             }
//         )
//     },

    



//     setDTransactionsList(state, data) {
//         state.deliveryList = data;
//     },

//     delivery(state, data) {
//         state.deliveryList = data;
//     },





//     setSalesList(state, data) {
//         state.salesList = data;
//     }
// }