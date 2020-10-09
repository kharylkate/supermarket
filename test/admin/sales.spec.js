import parentSales from '@/pages/sales.vue'
import childSales from '@/components/sales/sales.vue'
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

describe('Parent sales (page)', () => {
    const wrapper = shallowMount(parentSales, {
        stubs: {
            navbar: true,
            navbarcollapse: true
        }
    })

    it('renders the child sales component', () => {
        expect(wrapper.findComponent(childSales).exists()).toBe(true)
    })
})

describe('Sales (component)', () => {
    const wrapper = mount(childSales, {
        data() {
            return {
                salesList: []
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

    it('renders the DELIVERY name', () => {
        expect(wrapper.find('.sales_page').text()).toBe("Sales Transaction")
    })

    it('renders table', () => {
        expect(wrapper.find('#btable').exists()).toBe(true)
    })

    it('renders "Add Item" button', () => {
        expect(wrapper.find('.btn_add').exists()).toBe(true)
    })
})

describe('sales.vue', () => {

    const commit = jest.fn()
    const sales = {
        "or_no": 100001,
        "dtransaction_date": "10/01/2020",
        "total_cost": 1300,
        "payment_amt": 1300,
        "supplier_id": 1,
        "created_by": 38,
        "created_at": "10/01/2020",
        "items": [
            {
                "inventory_id": 2,
                "quantity": 3,
                "sales_cost": 100
            },
            {
                "inventory_id": 3,
                "quantity": 5,
                "sales_cost": 200
            }
        ]
    }

    const state = {
        sales_transactions: []
    }

    

    it('will dispatch action addSales if OK button is clicked', async () => {
        const commit = jest.fn()
        const wrapper = mount(childSales, {
            data(){
                return {
                    salesList: {
                        "or_no": 100001,
                        "dtransaction_date": "10/01/2020",
                        "total_cost": 1300,
                        "payment_amt": 1300,
                        "supplier_id": 1,
                        "created_by": 38,
                        "created_at": "10/01/2020",
                        "items": [
                            {
                                "inventory_id": 2,
                                "quantity": 3,
                                "sales_cost": 100
                            },
                            {
                                "inventory_id": 3,
                                "quantity": 5,
                                "sales_cost": 200
                            }
                        ]
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
        wrapper.find('.sales_add').trigger('click')
        expect(mutations.addSales(state, { ...sales } )).toHaveBeenCalled
        console.log("action result", state);
    })

    it('will commit mutation', () => {
        mutations.addSales(state, { ...sales })
        const result = state.sales_transactions
        console.log("state result: ", result);
        expect(state.sales_transactions).toEqual(result)
    })

    it('will fetch sales list', () => {
        const result = getters.sales_transactions(state)
        console.log("getter result: ", result);
        expect(result).toEqual(state.sales_transactions)
    })
})
