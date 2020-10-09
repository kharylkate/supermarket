import parentTrans from '@/pages/delivery.vue'
import childTrans from '@/components/delivery/delivery.vue'
import add_delivery from '@/components/delivery/add_deliveryTrans.vue'
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

describe('Parent delivery (page)', () => {
    const wrapper = shallowMount(parent, {
        stubs: {
            navbar: true,
            navbarcollapse: true
        }
    })

    it('renders the child delivery component', () => {
        expect(wrapper.findComponent(child).exists()).toBe(true)
    })

    it('renders the child adddelivery component', () => {
        expect(wrapper.findComponent(add_delivery).exists()).toBe(true)
    })
})

describe('deliverys.vue', () => {

    let actions
    let store
    let state
    let getters
    const delivery = {
        "delivery_id":1,
        "employee_code":154151757,
        "deliveryname": "Maximus",
        "password": "emp"
    }

    beforeEach(() => {
        state = {
            deliveryList: [],
            rolesList: []
        }
        getters = {
            deliveryList(state){
                return state.deliveryList
            },
            rolesList(state){
                return state.rolesList
            }
        }
        actions = {
            adddelivery: jest.fn(key => state.deliveryList[key]),
            fetchRolesList({commit}){
            },
            fetchdeliveryList({commit}){
            }
        }
        store = new Vuex.Store({
            actions,
            
        })
    })

    it('will dispatch action adddelivery if OK button is clicked', async () => {
        const wrapper = mount(add_delivery, {
            store,
            localVue,
            data(){
                return {
                    delivery: {
                        "delivery_id":1,
                        "employee_code":154151757,
                        "deliveryname": "Maximus",
                        "password": "emp",
                        "role_id": 1
                    },
                    // rolesList: {}
                }
            }
        })
        wrapper.find('.delivery_add').trigger('click')
        expect(actions.adddelivery).toHaveBeenCalled()
    })

    it('will commit mutation', () => {
        mutations.adddelivery(state, { ...delivery })
        // console.log("mutations",state.deliveryList);
        expect(state.deliveryList).toEqual([{
            "delivery_id":1,
            "employee_code":154151757,
            "deliveryname": "Maximus",
            "password": "emp"
        }])
    })

    it('will fetch delivery list', () => {
        const result = getters.deliveryList(state)
        expect(result).toEqual(state.deliveryList)
    })
})
