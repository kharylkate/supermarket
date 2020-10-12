import parent from '@/pages/inventory.vue'
import child from '@/components/inventory/inventory.vue'
import add_inventory from '@/components/inventory/add_inventory.vue'
import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import { mapActions, mapGetters } from 'vuex';
import getters from '@/store/getters.js'
import actions from '@/store/actions.js'
import mutations from '@/store/mutations.js'
import Vuex from 'vuex'

import * as axios from 'axios';
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Parent inventory (page)', () => {
    const wrapper = shallowMount(parent, {
        stubs: {
            editinventory: true,
            navbar: true,
            navbarcollapse: true
        }
    })

    it('renders the child inventory component', () => {
        expect(wrapper.findComponent(child).exists()).toBe(true)
    })

    it('renders the child addInventory component', () => {
        expect(wrapper.findComponent(add_inventory).exists()).toBe(true)
    })
    // console.log(wrapper.html());

})

describe('Child inventory (component)', () => {
    const wrapper = mount(child, {
        stubs: {
            'b-col':true,
            'b-form-group':true,
            'b-input-group':true,
            'b-form-input':true,
            'b-input-group-append':true,
            'b-button':true,
            'b-table':true,
            'b-pagination':true
        }
    })

    it('renders the INVENTORY name', () => {
        expect(wrapper.find('.inventory_page').text()).toBe("Inventory")
    })

    it('renders table', () => {
        expect(wrapper.find('#btable').exists()).toBe(true)
    })

    it('renders "Add Item" button', () => {
        expect(wrapper.find('.btn_add').exists()).toBe(true)
    })
})

describe('inventory.vue', () => {

    let actions
    let store
    let state
    const items = {
        "inventory_id":1,
        "barcode":4806016700587,
        "product_description":"Soft and White Premium Easy-Pack Tissue",
        "quantity":0,
        "unit_cost":6.50,
        "sales_cost":10.0
    }

    beforeEach(() => {
        state = {
            inventoryList: []
        }
        actions = {
            addInventory: jest.fn(),
            updateInventory: jest.fn()
        }
        store = new Vuex.Store({
            actions,
            
        })
    })

    it('will dispatch action addInventory if OK button is clicked', async () => {
        const wrapper = mount(add_inventory, {
            store,
            localVue,
            data(){
                return {
                    inventory: {
                        "inventory_id":1,
                        "barcode":4806016700587,
                        "product_description":"Soft and White Premium Easy-Pack Tissue",
                        "quantity":0,
                        "unit_cost":6.50,
                        "sales_cost":10.0
                    }
                }
            }
        })
        wrapper.find('.item_add').trigger('click')
        expect(actions.addInventory).toHaveBeenCalled()
    })

    it('will commit mutation', () => {
        mutations.addInventory(state, { ...items })
        // console.log("mutations",state.inventoryList);
        expect(state.inventoryList).toEqual([{
            "inventory_id":1,
            "barcode":4806016700587,
            "product_description":"Soft and White Premium Easy-Pack Tissue",
            "quantity":0,
            "unit_cost":6.50,
            "sales_cost":10.0
        }])
        
        const result = getters.inventoryList(state)
        expect(result).toEqual(state.inventoryList)
        console.log(state);
    })

    it('will dispatch action updateInventory if OK button is clicked', async () => {
        const wrapper = mount(child, {
            store,
            localVue,
            data(){
                return {
                    inventory: {
                        "inventory_id":1,
                        "barcode":4806016700587,
                        "product_description":"Brown Class A Easy-Pack Tissue",
                        "quantity":0,
                        "unit_cost":6.50,
                        "sales_cost":10.0
                    }
                }
            },
            stubs: {
                'b-col':true,
                'b-form-group':true,
                'b-input-group':true,
                'b-form-input':true,
                'b-input-group-append':true,
                'b-button':true,
                'b-table':true,
                'b-pagination':true
            }
        })

        wrapper.find('.item_update').trigger('click')
        expect(actions.updateInventory).toHaveBeenCalled()
        mutations.updateInventory(state, {
            "inventory_id":1,
            "barcode":4806016700587,
            "product_description":"Brown Class A Easy-Pack Tissue",
            "quantity":0,
            "unit_cost":6.50,
            "sales_cost":10.0
        })

        const result = getters.inventoryList(state)
        expect(result).toEqual(state.inventoryList)
        console.log(state);
    })

    // it('will fetch inventory list', () => {
    //     const result = getters.inventoryList(state)
    //     expect(result).toEqual(state.inventoryList)
    //     console.log(state);
    // })

    
})


