import parentTrans from '@/pages/delivery.vue'
import childTrans from '@/components/delivery/delivery.vue'
import add_delivery from '@/components/delivery/add_deliveryTrans.vue'
// import parentSales from '@/pages/sales.vue'
// import childSales from '@/components/sales/sales.vue'
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

describe('Parent delivery (page)', () => {
    const wrapper = shallowMount(parentTrans, {
        stubs: {
            navbar: true,
            navbarcollapse: true
        }
    })

    it('renders the child delivery component', () => {
        expect(wrapper.findComponent(childTrans).exists()).toBe(true)
    })

    it('renders the child adddelivery component', () => {
        expect(wrapper.findComponent(add_delivery).exists()).toBe(true)
    })
})

describe('Delivery (component)', () => {
    const wrapper = shallowMount(childTrans, {
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

    it('renders the DELIVERY name', () => {
        expect(wrapper.find('.del_page').text()).toBe("Delivery")
    })

    it('renders table', () => {
        expect(wrapper.find('#btable').exists()).toBe(true)
    })

    it('renders "Add Item" button', () => {
        expect(wrapper.find('.btn_add').exists()).toBe(true)
    })
})

describe('delivery.vue', () => {

    const commit = jest.fn()
    const delivery = {
        "dr_no": 100001,
        "total_cost": 1300,
        "supplier_id": 1,
        "created_by": 38,
        "created_at": "10/01/2020",
        "items": [
            {
                "inventory_id": 2,
                "quantity": 3,
                "cost_per_unit": 100
            },
            {
                "inventory_id": 3,
                "quantity": 5,
                "cost_per_unit": 200
            }
        ]
    }

    const state = {
        deliver_transactions: []
    }

    

    it('will dispatch action receiveDelivery if OK button is clicked', async () => {
        const commit = jest.fn()
        const wrapper = mount(add_delivery)
        wrapper.find('.delivery_add').trigger('click')
        expect(actions.receiveDelivery({ commit }, { ...delivery } )).toHaveBeenCalled
    })

    it('will commit mutation', () => {
        mutations.receiveDelivery(state, { ...delivery })
        const result = state.deliver_transactions
        console.log("state result: ", result);
        expect(state.deliver_transactions).toEqual([delivery])
    })

    it('will fetch delivery list', () => {
        const result = getters.deliver_transactions(state)
        console.log("getter result: ", result);
        expect(result).toEqual(state.deliver_transactions)
    })
})
