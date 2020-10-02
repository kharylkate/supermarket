export default {

    login: (state, result) => {
        console.log(result)

        // const user = state.userlogin.find(x => x.username === login.username)

        // if(user.password == '1234'){
        //     localStorage.isDefault = 1;
        // } else {
        //     localStorage.isDefault = 0
        // }
        
        // localStorage.username = user.username
        // localStorage.role_name = user.role_name
        // localStorage.uid = user.users_id


        localStorage.username = result.data.username
        localStorage.role_name = result.data.role_name
        localStorage.uid = result.data.users_id
        localStorage.isDefault = result.data.isDefault
                
    },

    passwordUpdate(state, payload) {
        var user = state.userList.findIndex(p => p.users_id === payload.users_id)
        state.userList.splice(user, 1)
        state.userList.unshift(payload)
        // localStorage.isDefault = 0;
        
    },

    dateFilter(state, datefilter) {
        console.log(datefilter);
        state.delivery_datefilter.push(datefilter)
    },

    addSales: (state, salesData) => {
        state.sales_transactions.push(salesData.sales)
    },

    updateInvQty: (state, payload) => {

        for(var j = 0; j < payload.invqty.length; j++){
            if(payload.transaction == 'sales'){
                for(var i = 0; i < state.inventoryList.length; i++){
                    if(state.inventoryList[i].barcode == payload.invqty[j].barcode){
                        state.inventoryList[i].quantity = (state.inventoryList[i].quantity - payload.invqty[j].quantity)
                        state.inventoryList[i].unit_cost = (state.inventoryList[i].quantity - payload.invqty[j].unit_cost)
                    }
                }
            } else if(payload.transaction == 'delivery'){
                for(var i = 0; i < state.inventoryList.length; i++){
                    if(state.inventoryList[i].barcode == payload.invqty[j].barcode){
                        state.inventoryList[i].quantity = (state.inventoryList[i].quantity + payload.invqty[j].quantity)
                        state.inventoryList[i].unit_cost = (state.inventoryList[i].quantity - payload.invqty[j].unit_cost)
                    }
                }
            }
        }

    },

   

    receiveDelivery: (state, delivery) => {
        state.deliver_transactions.push(delivery.transaction)
    },

    receiveDeliveryItems: (state, delivery) => {
        state.deliver_transactions_items.push(delivery.transaction)
    },


    addSupplier: (state, supplierData) => {
        console.log(supplierData)
        state.suppliersList.push(supplierData)
    },

    updateSupplier: (state, payload) => {
        console.log(payload);
        var supplier = state.suppliersList.findIndex(p => p.supplier_id === payload.supplier_id)
        state.suppliersList.splice(supplier, 1)
        state.suppliersList.unshift(payload)

    },

    addRole: (state, roleData) => {
        console.log(roleData)
        state.rolesList.push(roleData)
    },

    updateRole: (state, payload) => {
        console.log(payload);
        console.log('payload.role_name: ', payload.role_name);
        const role = state.rolesList.findIndex(p => p.role_id === payload.role_id)
        // role.role_name = payload.role_name
        state.rolesList.splice(role, 1);
        state.rolesList.unshift(payload);
    },

    addUser: (state, userData) => {
        console.log(userData)
        state.userList.push(userData)
    },

    updateUser: (state, payload) => {
        const users = state.userList.findIndex(p => p.user_id === payload.user_id)
        state.userList.splice(users, 1)
        state.userList.unshift(payload)
        // users.username = payload.username
        // users.role_name = payload.role_name

    },

    addInventory: (state, inventoryData) => {
        console.log(inventoryData)
        state.inventoryList.push(inventoryData)
    },

    updateInventory: (state, payload) => {
        const inventory = state.inventoryList.findIndex(
            x => x.inventory_code === payload.inventory_code)
        state.inventoryList.splice(inventory, 1)
        state.inventoryList.unshift(payload)

        // inventory.barcode = payload.barcode
        // inventory.product_description = payload.product_description
        // inventory.unit_cost = payload.unit_cost
        // inventory.sales_cost = payload.sales_cost
    },

    addDeliveryTransaction(state, dt_data){
        state.delivery_transactions.push(dt_data)
    },
    
    addDeliveryTransaction_items(state, dt_items) {
        state.delivery_transactions_items.push(dt_items)
    },

    viewSalesTransaction(state, transaction){
        console.log('mutations.js viewSalesTransaction ', transaction);
        state.selectedTransaction = transaction;
    },

    viewSelectedItem(state, item) {
        const product = state.inventoryList.find(p => p.barcode == item)
        state.selectedItem = product
        return product
    },
    
    














// export default {
//     addCustomer: (state, customerData) => {
//         console.log(customerData)
//         state.customers.push(customerData)
//     },

//     addSupplier: (state, supplierData) => {
//         console.log(supplierData)
//         state.suppliersList.push(supplierData)
//     },

//     addSales: (state, salesData) => {
//         console.log(salesData)
//         state.salesList.push(salesData)
//     },

//     addDelivery: (state, deliveryData) => {
//         console.log(deliveryData)
//         state.push(deliveryData)
//     },


//     addInventory: (state, inventoryData) => {
//         console.log(inventoryData)
//         state.push(inventoryData)
//     },

//     addSelectedTransaction: (state, transaction) => {
//         state.selectedTransaction = transaction;
//     },

//     addSelectedDelivery: (state, dr_no) => {
//         state.selectedDelivery = dr_no;
//     },

//     // addSelectedDelivery: (state, delivery) => {
//     //     state.selectedDelivery = delivery;
//     // }


//     // =======================================================

    setRolesList(state, data){
        state.rolesList = data;
    },

//     addRole(state, role_name){
//         //console.log('hehe',role_name)
//         state.rolesList.unshift(role_name)
//     },

//     updateRole(state, data){
//         console.log('@mutation: ', data)
//         const role = state.rolesList.find(find => find.role_code === data.role_code)
//         role.role_name = data.role_name
//     },




    setUserList(state, data){
        state.userList = data;
    },

//     addUser(state, data){
//         console.log('@mutation: ',data);
//         state.userList.push(data)
//     },

//     addSelectedRole(state, role) {
//         console.log('@here: ',role)
//         state.selectedRole = role;
//     },





    setInventoryList(state, data){
        state.inventoryList = data;
    },

    setSuppliersList(state, data){
        state.suppliersList = data;
    },

//     addSupplier(state, data){
//         console.log('@mutation: ',data);
//         state.suppliersList.push(data)
//     },

//     updateSupplier(state, data){
//         console.log('@mutation: ', data)
//         const supplier = state.suppliersList.find(find => find.supplier_id === data.supplier_id)
//         supplier.
//     },




//     updateInventory(state, data){
//         console.log('@mutation: ', data)
//         const index = state.inventoryList.findIndex(
//             inventoryList => {
//                 inventoryList.inventory_code = data.inventory_code
//             }
//         )
//     },



    setDTransactionsList(state, data) {
        state.deliveryList = data;
    },

    // viewSelectedItem(state, item) {

    //     const product = state.inventory.find(p => p.inventory_id == item)

    //     console.log('mutations.js viewSelectedItem', product);
    //     state.selectedItem = product
    //     return product
    // },










    setSTransactionsList(state, data) {
        state.salesList = data;
    }
}