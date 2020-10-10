import navbar from '@/layouts/navbar.vue'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'


const $axios = {
    get: () => {
        return Promise.resolve({ data: [{char_id: 1, name: "123"}]})
    }
}

describe("secret vue", () => {
    let wrapper;
    it("renders", () => {
        wrapper = mount(navbar, { mocks: { $axios } })
        expect(wrapper.exists()).toBe(true)
    })

    it("shows correct username", async() => {
        wrapper = mount(navbar, { mocks: { $axios } })
        await flushPromises();

        const a = wrapper.find('.logout_button_name')
        expect(a.text()).toBe("123")
    })
})