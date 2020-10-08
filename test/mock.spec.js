import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import inventory from '@/components/inventory/inventory.vue'


jest.mock("axios", () => ({
    get: Promise.resolve('value')
}))


    it('fetches async when a button is clicked')

describe("inventory.vue", () => {
    it("mocking the axios call to get posts should work", () => {
        var wrapper = shallowMount(inventory)
        wrapper.vm.$nextTick( () => {
            expect(wrapper.vm.inventoryLists.length).toBe(1)
        })
        
    })
})