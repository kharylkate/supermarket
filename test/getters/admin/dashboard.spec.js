import { mount } from '@vue/test-utils'
import getters from '@/store/getters.js'


// ROLE ===========================================
describe("fetchRolesList", () => {
    it("fetches list of roles", () => {
        
        const state = {
            roles: [
                {
                  roles_code: 11,
                  role_id: 1,
                  role_name: "admin",
                  created_at: "May 02, 2020",
                  created_by: 153,
                  updated_by: null,
                  updated_at: null
                },
                {
                  roles_code: 12,
                  role_id: 2,
                  role_name: "cashier",
                  created_at: "May 02, 2020",
                  created_by: 153,
                  updated_by: null,
                  updated_at: null
                },
                {
                  roles_code: 13,
                  role_id: 3,
                  role_name: "custodian",
                  created_at: "May 02, 2020",
                  created_by: 153,
                  updated_by: null,
                  updated_at: null
                }
              ],
        }

        expect(state).toEqual(getters.rolesList)
    })
})


// USER ===========================================

describe("addUser", () => {
    it("adds a new user", () => {

        const state = {
            users: [
                {
                users_code: 1,
                employee_code: 153,
                username: "Maximus",
                password: "emp",
                role_id: 1,
                role_name: "admin",
                created_at: "May 02, 2020",
                created_by: 153,
                updated_by: null,
                updated_at: null,
                
                },
                {
                users_code: 2,
                employee_code: 154,
                username: "MsCashier",
                password: "emp",
                role_id: 2,
                role_name: "cashier",
                created_at: "May 02, 2020",
                created_by: 153,
                updated_by: null,
                updated_at: null
                },
                {
                users_code: 3,
                employee_code: 155,
                username: "Custody",
                password: "emp",
                role_id: 3,
                role_name: "custodian",
                created_at: "May 02, 2020",
                created_by: 153,
                updated_by: null,
                updated_at: null
                }
            ],
        }

        expect(state).toEqual(getters.userList)
    })
})

// SUPPLIER ===========================================

describe("addSupplier", () => {
    it("adds a new supplier", () => {

        const state = {
            suppliers: [
                {
                  supplier_code: 1,
                  supplier_id: 1234582,
                  company_name: "Beech Lasagna Corporation",
                  contact_no: "+1-767-5554-872",
                  company_address: "1631 Goehring Rd #334, New Brighton, PA, 15066",
                  status: 1,
                  created_at: "May 02, 2020",
                  created_by: 153,
                  updated_by: null,
                  updated_at: null
                },
                {
                  supplier_code: 2,
                  supplier_id: 1234578,
                  company_name: "Hirez Bugladins",
                  contact_no: "+1-767-5554-872",
                  company_address: "130 Shadowbrook Dr, Hillsborough, NC, 27278",
                  status: 1,
                  created_at: "May 02, 2020",
                  created_by: 153,
                  updated_by: null,
                  updated_at: null
                },
                {
                  supplier_code: 3,
                  supplier_id: 1234569,
                  company_name: "Wall Maria",
                  contact_no: "+1-767-5554-872",
                  company_address: "6 Ducks Head, New Castle, NH, 03854",
                  status: 1,
                  created_at: "May 02, 2020",
                  created_by: 153,
                  updated_by: null,
                  updated_at: null
                },
                {
                  supplier_code: 4,
                  supplier_id: 1234580,
                  company_name: "TENCENT Spy Laboratory",
                  contact_no: "+1-767-5554-872",
                  company_address: "Po Box 831, Sultan, WA, 98294",
                  status: 1,
                  created_at: "May 02, 2020",
                  created_by: 153,
                  updated_by: null,
                  updated_at: null
                },
                {
                  supplier_code: 5,
                  supplier_id: 1234581,
                  company_name: "Bucks Milwaukee",
                  contact_no: "+1-767-5554-872",
                  company_address: "Po Box 141, Bettsville, OH, 44815",
                  status: 0,
                  created_at: "May 02, 2020",
                  created_by: 153,
                  updated_by: null,
                  updated_at: null
                }
              ],
        }

        expect(state).toEqual(getters.supplierList)
    })
})

// INVENTORY ===========================================
describe("fetchInventoryList", () => {
    it("fetch list of inventory", () => {

        const state = {
            inventory: [
                {
                  inventory_code: 1,
                  barcode: 15304218,
                  product_description: "Churned Milk 1kg",
                  qty: 20,
                  unit_cost: 112.5,
                  sales_cost: 120,
                  created_by: 153,
                  created_at: "May 02, 2020",
                  updated_by: null,
                  updated_at: null
                },
                {
                  inventory_code: 2,
                  barcode: 51404209,
                  product_description: "Cadbury 65g",
                  qty: 50,
                  unit_cost: 76.75,
                  sales_cost: 85,
                  created_by: 153,
                  created_at: "May 02, 2020",
                  updated_by: null,
                  updated_at: null
                },
                {
                  inventory_code: 3,
                  barcode: 11443366,
                  product_description: "Dairy Meelk 250mL",
                  qty: 35,
                  unit_cost: 89.6,
                  sales_cost: 95.50,
                  created_by: 153,
                  created_at: "May 02, 2020",
                  updated_by: null,
                  updated_at: null
                },
                {
                  inventory_code: 4,
                  barcode: 12196864,
                  product_description: "Hershey's Chocs 65g",
                  qty: 55,
                  unit_cost: 82.25,
                  sales_cost: 86.50,
                  created_by: 153,
                  created_at: "May 02, 2020",
                  updated_by: null,
                  updated_at: null
                },
                {
                  inventory_code: 5,
                  barcode: 53170036,
                  product_description: "Oreo Cookies",
                  qty: 60,
                  unit_cost: 54.75,
                  sales_cost: 60,
                  created_by: 153,
                  created_at: "May 02, 2020",
                  updated_by: null,
                  updated_at: null
                },
                {
                  inventory_code: 6,
                  barcode: 18773694,
                  product_description: "Muck n Cheez",
                  qty: 40,
                  unit_cost: 98.15,
                  sales_cost: 110,
                  created_by: 153,
                  created_at: "May 02, 2020",
                  updated_by: null,
                  updated_at: null
                }
              ],
        }

        expect(state).toEqual(getters.inventoryList)
    })
})

describe("fetchDTransactionList", () => {
    it("fetch list of deliveries", () => {
        
        const state = {
            delivery_transactions: [
                {
                  dtransactions_code: 1,
                  dr_no: 567123,
                  supplier_id: 12345681,
                  company_name: "Bucks Milwaukee",
                  company_address: "Po Box 141, Bettsville, OH, 44815",
                  dtransaction_date: "May 02, 2020",
                  total_cost: 7260,
                  created_at: "may 02, 2020",
                  created_by: 153,
                  update_by: null,
                  update_at: null,
                  items: [
                    {
                      dtransaction_items_code: 1,
                      dr_no: 567123,
                      barcode: 15304218,
                      product_description: "Churned Milk 1kg",
                      unit_cost: 112.5,
                      qty: 40
                    },
                    {
                      dtransaction_items_code: 2,
                      dr_no: 567123,
                      barcode: 51404209,
                      product_description: "Cadbury 65g",
                      unit_cost: 76.75,
                      qty: 30
                    },
                  ]
                },
                {
                  dtransactions_code: 2,
                  dr_no: 115647,
                  supplier_id: 12345680,
                  company_name: "TENCENT Spy Laboratory",
                  company_address: "Po Box 831, Sultan, WA, 98294",
                  dtransaction_date: "May 02, 2020",
                  total_cost: 9742.5,
                  created_at: "May 02, 2020",
                  created_by: "Custody",
                  update_by: null,
                  update_at: null,
                  items: [
                    {
                      dtransaction_items_code: 3,
                      dr_no: 115647,
                      barcode: 51404209,
                      product_description: "Cadbury 65g",
                      unit_cost: 165.5,
                      qty: 45
                    },
                  ]
                },
                {
                  dtransactions_code: 3,
                  dr_no: 953226,
                  supplier_id: 12345678,
                  company_name: "Hirez Bugladins",
                  company_address: "130 Shadowbrook Dr, Hillsborough, NC, 27278",
                  dtransaction_date: "May 01, 2020",
                  total_cost: 12544,
                  created_at: "May 01, 2020",
                  created_by: 153,
                  update_by: null,
                  update_at: null,
                  items: [
                    {
                      dtransaction_items_code: 5,
                      dr_no: 953226,
                      barcode: 11443366,
                      product_description: "Dairy Meelk 250mL",
                      unit_cost: 89.6,
                      qty: 70
                    },
                    {
                      dtransaction_items_code: 6,
                      dr_no: 953226,
                      barcode: 53170036,
                      product_description: "Oreo Cookies",
                      unit_cost: 89.6,
                      qty: 70
                    },
                  ]
                },
                {
                  dtransactions_code: 4,
                  dr_no: 665498,
                  supplier_id: 12345682,
                  company_name: "Beech Lasagna Corporation",
                  company_address: "1631 Goehring Rd #334, New Brighton, PA, 15066",
                  dtransaction_date: "April 30, 2020",
                  total_cost: 6272,
                  created_at: "April 30, 2020",
                  created_by: "Custody",
                  update_by: null,
                  update_at: null,
                  items: [
                    {
                      dtransaction_items_code: 7,
                      dr_no: 665498,
                      barcode: 12196864,
                      product_description: "Hershey's Chocs 65g",
                      unit_cost: 89.6,
                      qty: 70
                    }
                  ]
                }
              ],
        }
    })
})

describe("fetchSTransactionList", () => {
    it("fetch list of sales", () => {

        const state = {
            sales_transactions: [
                {
                  stransactions_code: 1,
                  or_no: 32456789,
                  stransaction_date: "May 02, 2020",
                  total_cost: 403.95,
                  payment_amt: 500.0,
                  customer_name: "Sirius Black",
                  customer_address: "Azkaban Prison",
                  customer_contact_no: "+63 923 9876 890",
                  created_at: "May 02, 2020",
                  created_by: "3",
                  items: [
                    {
                      stransaction_items_code: 1,
                      or_no: 32456789,
                      barcode: 18773694,
                      product_description: "Muck n Cheez",
                      quantity: 3,
                      sales_cost: 98.15
                    },
                    {
                      stransaction_items_code: 2,
                      or_no: 32456789,
                      barcode: 53170036,
                      product_description: "Oreo Cookies",
                      quantity: 2,
                      sales_cost: 54.75
                    },
                  ]
                },
                {
                  stransactions_code: 2,
                  or_no: 32456790,
                  stransaction_date: "May 02, 2020",
                  total_cost: 76.75,
                  payment_amt: 100.0,
                  customer_name: "Rowan Whitethorn",
                  customer_address: "Pine Trees Bldg",
                  customer_contact_no: "+63 923 9876 891",
                  created_at: "May 02, 2020",
                  created_by: "MsCashier",
                  items: [
                    {
                      stransaction_items_code: 2,
                      or_no: 32456790,
                      barcode: 51404209,
                      product_description: "Cadbury 65g",
                      quantity: 1,
                      sales_cost: 76.75
                    },
                  ]
                },
                {
                  stransactions_code: 3,
                  or_no: 32456791,
                  stransaction_date: "May 02, 2020",
                  total_cost: 89.6,
                  payment_amt: 100.0,
                  customer_name: "Magnus Bane",
                  customer_address: "Bane & Lightwood Residence",
                  customer_contact_no: "+63 923 9876 891",
                  created_at: "May 02, 2020",
                  created_by: "MsCashier",
                  items: [
                    {
                      stransaction_items_code: 3,
                      or_no: 32456791,
                      barcode: 11443366,
                      product_description: "Dairy Meelk 250mL",
                      quantity: 1,
                      sales_cost: 89.6
                    },
                  ]
                },
                {
                  stransactions_code: 4,
                  or_no: 32456792,
                  stransaction_date: "May 02, 2020",
                  total_cost: 109.5,
                  payment_amt: 110.0,
                  customer_name: "Manon Blackbeak",
                  customer_address: "Mountains Suite Pembly Bldg",
                  customer_contact_no: "+63 923 9876 892",
                  created_at: "May 02, 2020",
                  created_by: "MsCashier",
                  items: [
                    {
                      stransaction_items_code: 4,
                      or_no: 32456792,
                      barcode: 53170036,
                      product_description: "Oreo Cookies",
                      quantity: 2,
                      sales_cost: 54.75
                    }
                  ]
                }
              ],
        }
    })
})


