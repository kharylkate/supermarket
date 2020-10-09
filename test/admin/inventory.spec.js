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
})

describe('inventory.vue', () => {

    let actions
    let store
    let state
    const items = {
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
            addInventory: jest.fn(key => state.inventoryList[key])
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
            "barcode":4806016700587,
            "product_description":"Soft and White Premium Easy-Pack Tissue",
            "quantity":0,
            "unit_cost":6.50,
            "sales_cost":10.0
        }])
    })

    it('will fetch inventory list', () => {
        const result = getters.inventoryList(state)
        expect(result).toEqual(state.inventoryList)
    })
})
