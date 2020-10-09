import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import mutations from '@/store/mutations.js'
import getters from '@/store/getters.js'
import actions from '@/store/actions.js'
import axios from 'axios'
import login from '@/components/Logo.vue'
import add_role from '@/components/roles/add_role.vue'

// INVENTORY working =========
// describe("addInventory", () => {
//     it("adds a new item to inventory", () => {
//         const item = {
//             "inventory_id":1,
//             "barcode":4806016700585,
//             "product_description":"Green Apple Notebook 102 x 152 MM",
//             "quantity":0,
//             "unit_cost":35.50,
//             "sales_cost":47.75,
//             "created_by": 1,
//             "created_at": "10/07/2020"
//         }
//         const state = {
//             inventoryList: []
//         }
//         actions.addInventory(state, { ...item })
//         mutations.addInventory(state, { ...item })
//         expect(getters.inventoryList(state)).toEqual([
//             {
//                 "inventory_id":1,
//                 "barcode":4806016700585,
//                 "product_description":"Green Apple Notebook 102 x 152 MM",
//                 "quantity":0,
//                 "unit_cost":35.50,
//                 "sales_cost":47.75,
//                 "created_by": 1,
//                 "created_at": "10/07/2020"
//             }
//         ])
//         console.log(state);

//     })
// })

const localVue = createLocalVue()

localVue.use(Vuex)

describe("add_role.vue", () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            addRole: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
    })

    it('dispatches "addRole" action when OK button is clicked', () => {
        const wrapper = mount(add_role, {store, localVue})

        wrapper.find('.role_add').trigger('click')
        expect(actions.addRole).toBeCalled()
    })
    
})


// const localVue = createLocalVue()

// let store
// let getters
// let actions
// let mutations
// let state
// let url = '172.16.4.211:9000/add_inventory'
// let body = {
//     // "inventory_id":1,
//     // "barcode":4806016700585,
//     // "product_description":"Green Apple Notebook 102 x 152 MM",
//     // "quantity":0,
//     // "unit_cost":35.50,
//     // "sales_cost":47.75,
//     // "created_by": 1,
//     // "created_at": "10/07/2020"
// }
// let mockError = false

// // jest.mock('axios', () => jest.fn(() => Promise.resolve({ data: 'data' })));

// jest.mock("axios", () => ({
//     post: (_url, _body) => { 
//       return new Promise((resolve) => {
//         if (mockError) 
//           throw Error("Mock error")
  
//         url = _url
//         body = _body
//         resolve(true)
//       })
//     }
// }))
// // localVue.use(Vuex)

// describe("addInventory", () => {
//     it("adds item to inventoryyyuyuyuy", async () => {
//         const commit = jest.fn()
//         const item = {
//             "inventory_id":1,
//             "barcode":4806016700585,
//             "product_description":"Green Apple Notebook 102 x 152 MM",
//             "quantity":0,
//             "unit_cost":35.50,
//             "sales_cost":47.75,
//             "created_by": 1,
//             "created_at": "10/07/2020"
//         }

//         await actions.addInventory({ commit }, { ...item })

//         expect(url).toBe('172.16.4.211:9000/add_inventory')
//         expect(body).toEqual({ item
//             // "inventory_id":1,
//             // "barcode":4806016700585,
//             // "product_description":"Green Apple Notebook 102 x 152 MM",
//             // "quantity":0,
//             // "unit_cost":35.50,
//             // "sales_cost":47.75,
//             // "created_by": 1,
//             // "created_at": "10/07/2020"
//         })
//         expect(commit).toHaveBeenCalledWith( "addInventory", item )

//     })

//     it('catches an error', async() => {
//         mockError = true

//         await expect(actions.addInventory({commit: jest.fn() }, {}))
//             .rejects.toThrow("API Error occurred")
//     })
// })



    // it('dispatches "addInventory" action when button is clicked', async () => {
    //     const item = {
    //         "inventory_id":1,
    //         "barcode":4806016700585,
    //         "product_description":"Green Apple Notebook 102 x 152 MM",
    //         "quantity":0,
    //         "unit_cost":35.50,
    //         "sales_cost":47.75,
    //         "created_by": 1,
    //         "created_at": "10/07/2020"
    //     }

    //     const commit = jest.fn()

    //     await actions.addInventory({ commit }, { ...items })

    //     expect()
    // })


    // it("adds a new item to inventory", () => {
    //     const item = {
    //         "inventory_id":1,
    //         "barcode":4806016700585,
    //         "product_description":"Green Apple Notebook 102 x 152 MM",
    //         "quantity":0,
    //         "unit_cost":35.50,
    //         "sales_cost":47.75,
    //         "created_by": 1,
    //         "created_at": "10/07/2020"
    //     }
    //     const state = {
    //         inventoryList: []
    //     }
    //     actions.addInventory(state, { ...item })
    //     mutations.addInventory(state, { ...item })
    //     expect(getters.inventoryList(state)).toEqual([
    //         {
    //             "inventory_id":1,
    //             "barcode":4806016700585,
    //             "product_description":"Green Apple Notebook 102 x 152 MM",
    //             "quantity":0,
    //             "unit_cost":35.50,
    //             "sales_cost":47.75,
    //             "created_by": 1,
    //             "created_at": "10/07/2020"
    //         }
    //     ])
    //     console.log(state);

    // })
// })