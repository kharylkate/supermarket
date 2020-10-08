import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import add_inventory from '@/components/inventory/add_inventory.vue'
import inventory from '@/components/inventory/inventory.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('add_inventory.vue', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            addInventory: jest.fn()
        }
        store = new Vuex.Store({
            actions,
        })
    })

    // it('calls "addInventory" when add button is clicked')
    it('does not call action "addInventory" when OK button is unfocused', async () => {
         const wrapper = shallowMount(add_inventory, {
            store, localVue
        })
        // const barcode = wrapper.find('#add_barcode')
        // await barcode.setValue('1000')
        // expect(wrapper.find('#add_barcode').element.value).toBe('1000')

        // const description = wrapper.find('#add_description')
        // await description.setValue('Tissue')
        // expect(wrapper.find('#add_description').element.value).toBe('Tissue')

        // const itemcost = wrapper.find('#add_itemcost')
        // await itemcost.setValue('10')
        // expect(wrapper.find('#add_itemcost').element.value).toBe('10')

        // const salescost = wrapper.find('#add_salescost')
        // await salescost.setValue('18')
        // expect(wrapper.find('#add_salescost').element.value).toBe('18')

        wrapper.find('.item_add').trigger('blur')
        expect(actions.addInventory).not.toHaveBeenCalled()

    })

    it('calls action "addInventory" when OK button is clicked', async () => {
        const wrapper = shallowMount(add_inventory, {
           store, localVue
       })
       wrapper.find('.item_add').trigger('click')
       expect(actions.addInventory).toHaveBeenCalled()

   })
    
})
