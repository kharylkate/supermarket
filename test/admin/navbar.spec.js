import { mount } from '@vue/test-utils'
import Nav from '@/layouts/navbar.vue'

describe('navbar.vue', () => {
    it('renders user name', () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    username: "Maximus"
                }
            },
            stubs: {
                // so it wont show error
                NuxtLink: true
            }
        })
        expect(wrapper.find('.logout_button_name').text())
            .toBe("Maximus")
        // console.log("wrap",wrapper.html());
    })
})