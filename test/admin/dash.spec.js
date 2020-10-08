import dashboard from '@/pages/dashboard.vue'
import dash from '@/components/dashboard.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { mapActions, mapGetters } from 'vuex';
import getters from '@/store/getters.js'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
        inventoryCounter: 300,
        zeroStocks: 1,
        inventoryList: [
            {
                "inventory_id":1,
                "barcode":4806016700585,
                "product_description":"Green Apple Notebook 102 x 152 MM",
                "quantity":30,
                "unit_cost":32.50,
                "sales_cost":45.75
            },
            {
                "inventory_id":2,
                "barcode":4806016700586,
                "product_description":"Lanmier Notebook 102 x 152 MM",
                "quantity":40,
                "unit_cost":35.50,
                "sales_cost":47.75
            },
            {
                "inventory_id":1,
                "barcode":4806016700587,
                "product_description":"Cattleya Notebook 102 x 152 MM",
                "quantity":5,
                "unit_cost":45.50,
                "sales_cost":59.75
            }
        ],
        lowStocks: [
            {
                "inventory_id":1,
                "barcode":4806016700587,
                "product_description":"Cattleya Notebook 102 x 152 MM",
                "quantity":5,
                "unit_cost":45.50,
                "sales_cost":59.75
            }
        ]
    },
    getters: {
        inventoryList(state){
            return state.inventoryList
        },
        inventoryCounter: state => {
            var count = 0;
            state.inventoryList.map(inventoryList => {
                count += parseInt(inventoryList.quantity)
            })
            return count;
        },
        supplierCounter(state) {
            return 6
        },
        zeroStocks(state){
            var j = 0;
            state.inventoryList.map(inventoryList => {
                if(inventoryList.quantity == 0){
                    j += 1;
                }
            })
            return j
        },
        lowStocks(state){
            var low = [];
            for(var i = 0; i < state.inventoryList.length; i++){
                if(state.inventoryList[i].quantity <= 35){
                    low.push(state.inventoryList[i])
                }
            }
            return low
        }
    },
    actions: {
        // this is created so di mag error na unknown action type
        fetchInventoryList({commit}){
        }
    }
})

describe('Dash', () => {
    it('does not render dashboard if user details are not present', () => {
        const wrapper = shallowMount(dashboard, {
            stubs: {
                NuxtLink: true
            }
        })
        expect(wrapper.findComponent(dash).exists()).toBe(false)
    })

    it('prompts user to change password if user password is default', () => {
        const wrapper = shallowMount(dashboard, {
            data() {
                return {
                    username: "Maximus",
                    role_name: "admin",
                    uid: 38,
                    isDefault: 1
                }
            },
            stubs: {
                NuxtLink: true
            }
        })
        expect(wrapper.find('.form-group').exists()).toBe(true)
        expect(wrapper.find('#new_pass').exists()).toBe(true)
        expect(wrapper.find('#new_pass_validate').exists()).toBe(true)
    })
    
    it('renders dashboard if user details are present and password is not default', () => {
        const wrapper = shallowMount(dashboard, {
            data() {
                return {
                    username: "Maximus",
                    role_name: "admin",
                    uid: 38,
                    isDefault: 0
                }
            },
            stubs: {
                NuxtLink: true
            }
        })
        expect(wrapper.findComponent(dash).exists()).toBe(true)
    })

    it('renders 3 counters and the low on stocks table', async () => {
        const wrapper = shallowMount(dash, {
            store, localVue,
            stubs: {
                NuxtLink: true
            }
        })

        expect(wrapper.findAll('.small-box').length).toEqual(3)
        expect(wrapper.findAll('.big-box').length).toEqual(1)
        expect(wrapper.find('.table').exists()).toBe(true)
    })
    
})