import navbar from '@/layouts/navbar.vue'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'


const $axios = {
    get: () => {
        return Promise.resolve({ data: [{char_id: 1, "username": "123"}]})
    }
}

describe("navbar vue", () => {
    let wrapper;
    it("renders", () => {
        wrapper = mount(navbar, { mocks: { $axios }, 
            stubs: {
                NuxtLink: true
            }
        })
        expect(wrapper.exists()).toBe(true)
    })

    it("shows correct username", async() => {
        wrapper = mount(navbar, { mocks: { $axios },
        stubs: {
            NuxtLink: true
        } })
        await flushPromises();

        const a = wrapper.find('.logout_button_name')
        console.log("wrapper", wrapper.html());
        expect(a.text()).toBe("123")
    })
})