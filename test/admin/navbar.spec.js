import { mount } from '@vue/test-utils'
import Nav from '@/layouts/navbar.vue'

describe('navbar.vue', () => {
    it('renders the system name', () => {
        const wrapper = mount(Logo)
        expect(wrapper.text()).toMatch("LOU GEH")
        expect(wrapper.text()).toMatch("SUPERMARKET")
        // console.log("wrap",wrapper.html());
    })
})