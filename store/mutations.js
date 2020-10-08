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
        localStorage.employee_code = result.data.employee_code
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
        // console.log(supplierData)
        state.suppliersList.push(supplierData)
    },

    updateSupplier: (state, payload) => {
        // console.log(payload);
        var supplier = state.suppliersList.findIndex(p => p.supplier_id === payload.supplier_id)
        state.suppliersList.splice(supplier, 1)
        state.suppliersList.unshift(payload)

    },

    addRole: (state, roleData) => {
        // console.log(roleData)
        state.rolesList.push(roleData)
    },

    updateRole: (state, payload) => {
        // console.log(payload);
        // console.log('payload.role_name: ', payload.role_name);
        const role = state.rolesList.findIndex(p => p.role_id === payload.role_id)
        // role.role_name = payload.role_name
        state.rolesList.splice(role, 1);
        state.rolesList.unshift(payload);
    },

    addUser: (state, userData) => {
        // console.log(userData)
        state.userList.push(userData)
    },

    updateUser: (state, payload) => {
        const users = state.userList.findIndex(p => p.user_id === payload.user_id)
        state.userList.splice(users, 1)
        state.userList.unshift(payload)
    },

    addInventory: (state, inventoryData) => {
        state.inventoryList.push(inventoryData)
    },

    updateInventory: (state, payload) => {
        const inventory = state.inventoryList.findIndex(
            x => x.inventory_code === payload.inventory_code)
        state.inventoryList.splice(inventory, 1)
        state.inventoryList.unshift(payload)
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
    
    setRolesList(state, data){
        state.rolesList = data;
    },

    setUserList(state, data){
        state.userList = data;
    },

    setInventoryList(state, data){
        state.inventoryList = data;
    },

    setSuppliersList(state, data){
        state.suppliersList = data;
    },
    
    setDTransactionsList(state, data) {
        state.deliveryList = data;
    },

    setSTransactionsList(state, data) {
        state.salesList = data;
    }
}