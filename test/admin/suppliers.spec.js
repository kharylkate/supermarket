import parent from '@/pages/suppliers.vue'
import child from '@/components/supplier/suppliers.vue'
import addSupplier from '@/components/supplier/add_supplier.vue'
import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import { mapActions, mapGetters } from 'vuex';
import getters from '@/store/getters.js'
import actions from '@/store/actions.js'
import mutations from '@/store/mutations.js'
import Vuex from 'vuex'
// import $ from 'jQuery'
import * as axios from 'axios';
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Parent supplier (page)', () => {
    const wrapper = shallowMount(parent, {
        stubs: {
            navbar: true,
            navbarcollapse: true
        }
    })

    it('renders the child supplier component', () => {
        expect(wrapper.findComponent(child).exists()).toBe(true)
    })

    it('renders the child addSupplier component', () => {
        expect(wrapper.findComponent(addSupplier).exists()).toBe(true)
    })
})

describe('Child supplier (component)', () => {
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

    it('renders the SUPPLIERS name', () => {
        expect(wrapper.find('.supplier_page').text()).toBe("Suppliers")
    })

    it('renders table', () => {
        expect(wrapper.find('#btable').exists()).toBe(true)
    })

    it('renders "Add Item" button', () => {
        expect(wrapper.find('.btn_add').exists()).toBe(true)
    })
})

describe('suppliers.vue', () => {

    let actions
    let store
    let state
    const supplier = {
        "supplier_id":1,
        "company_name":"Asong Company",
        "contact_no":"0909 111 2222",
        "company_address":"Brgy Apopong",
        "status": 1
    }

    beforeEach(() => {
        state = {
            suppliersList: []
        }
        actions = {
            addSupplier: jest.fn(key => state.suppliersList[key])
        }
        store = new Vuex.Store({
            actions,
            state
        })
    })

    it('will dispatch action addSupplier if OK button is clicked', async () => {
        const wrapper = mount(addSupplier, {
            store,
            localVue,
            data(){
                return {
                    suppliersList: {
                        "supplier_id":1,
                        "company_name":"Asong Company",
                        "contact_no":"0909 111 2222",
                        "company_address":"Brgy Apopong",
                        "status": 1
                    }
                }
            }
        })
        // console.log(wrapper.html());
        wrapper.find('.supplier_add').trigger('click')
        expect(actions.addSupplier).toHaveBeenCalled()
    })

    it('will commit mutation', () => {
        mutations.addSupplier(state, { ...supplier })
        console.log("mutations",state.suppliersList);
        expect(state.suppliersList).toEqual([{
            "supplier_id":1,
            "company_name":"Asong Company",
            "contact_no":"0909 111 2222",
            "company_address":"Brgy Apopong",
            "status": 1
        }])
    })

    it('will fetch supplier list', () => {
        const result = getters.suppliersList(state)
        expect(result).toEqual(state.suppliersList)
    })
})
