import { mount } from '@vue/test-utils'
import mutations from '@/store/mutations.js'


// ROLE ===========================================
describe("addRole", () => {
    it("adds a new role", () => {
        const role = { role_id: "1", role_name: "minister"}
        const state = {
            rolesList: []
        }
        mutations.addRole(state, { ...role })

        expect(state).toEqual({
            rolesList: [{ "role_id": "1", "role_name": "minister"}]
        })
    })
})

describe("updateRole", () => {
    it("updates an existing role", () => {
        const role = { role_id: "1", role_name: "governor" }
        const state = {
            rolesList: [ 
                { 
                    "role_id":"1",
                    "role_name":"minister"
                }
            ]
        }
        mutations.updateRole(state, { ...role })
        expect(state).toEqual({
            rolesList: [{ "role_id":"1", "role_name":"governor"}]
        })
        
    })
})

// USER ===========================================

describe("addUser", () => {
    it("adds a new user", () => {
        const user = { 
            "users_id":"1", 
            "employee_code":"154151757",
            "username":"Maximus",
            "role_id": "1"
        }
        const state = {
            userList: []
        }
        mutations.addUser(state, { ...user })
        expect(state).toEqual({
            userList: [{
                "users_id":"1", 
                "employee_code":"154151757",
                "username":"Maximus",
                "role_id": "1"
            }]
        })
    })
})

describe("updateUser", () => {
    it("updates an existing user", () => {
        const user = { 
            "users_id":"1", 
            "employee_code":"154151757",
            "username":"Admin",
            "role_id": "1"
        }
        const state = {
            userList: [{
                "users_id":"1", 
                "employee_code":"154151757",
                "username":"Maximus",
                "role_id": "1"
            }]
        }
        mutations.updateUser(state, { ...user })
        expect(state).toEqual({
            userList: [{
                "users_id":"1", 
                "employee_code":"154151757",
                "username":"Admin",
                "role_id": "1"
            }]
        })
    })
})

// SUPPLIER ===========================================
describe("addSupplier", () => {
    it("adds a new supplier", () => {
        const supplier = {
            "supplier_id":"1",
            "company_name":"Sunbless Industrial Corporation",
            "company_address":"240 Fresno St., Pasay City, Philippines",
            "status":true
        }
        const state = {
            suppliersList: []
        }
        mutations.addSupplier(state, { ...supplier })
        expect(state).toEqual({
            suppliersList: [{
                "supplier_id":"1",
                "company_name":"Sunbless Industrial Corporation",
                "company_address":"240 Fresno St., Pasay City, Philippines",
                "status":true
            }]
        })
    })
})

describe("updateSupplier", () => {
    it("updates an existing supplier", () => {
        const supplier = {
            "supplier_id":"1",
            "company_name":"Sunbless Industrial Corporation",
            "company_address":"J.Catolico St., General Santos City",
            "status":false
        }
        const state = {
            suppliersList: [{
                "supplier_id":"1",
                "company_name":"Sunbless Industrial Corporation",
                "company_address":"240 Fresno St., Pasay City, Philippines",
                "status":true
            }]
        }
        mutations.updateSupplier(state, { ...supplier })
        expect(state).toEqual({
            suppliersList: [{
                "supplier_id":"1",
                "company_name":"Sunbless Industrial Corporation",
                "company_address":"J.Catolico St., General Santos City",
                "status":false
            }]
        })
    })
})

// INVENTORY ===========================================
describe("addInventory", () => {
    it("adds a new item to inventory", () => {
        const item = {
            "inventory_id":1,
            "barcode":4806016700585,
            "product_description":"Green Apple Notebook 102 x 152 MM",
            "quantity":0,
            "unit_cost":35.50,
            "sales_cost":47.75
        }
        const state = {
            inventoryList: []
        }
        mutations.addInventory(state, { ...item })
        expect(state).toEqual({
            inventoryList: [{
                "inventory_id":1,
                "barcode":4806016700585,
                "product_description":"Green Apple Notebook 102 x 152 MM",
                "quantity":0,
                "unit_cost":35.50,
                "sales_cost":47.75
            }]
        })
    })
})

describe("updateInventory", () => {
    it("updates an existing item", () => {
        const item = {
            "inventory_id":1,
            "barcode":4806016700585,
            "product_description":"Lanmier Notebook",
            "quantity":0,
            "unit_cost":48.60,
            "sales_cost":63.75
        }
        const state = {
            inventoryList: [{
                "inventory_id":1,
                "barcode":4806016700585,
                "product_description":"Green Apple Notebook 102 x 152 MM",
                "quantity":0,
                "unit_cost":35.50,
                "sales_cost":47.75
            }]
        }
        mutations.updateInventory(state, { ...item })
        expect(state).toEqual({
            inventoryList: [{
                "inventory_id":1,
                "barcode":4806016700585,
                "product_description":"Lanmier Notebook",
                "quantity":0,
                "unit_cost":48.60,
                "sales_cost":63.75
            }]
        })
    })
})