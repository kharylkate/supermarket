// import Logo from '@/components/Logo.vue'
// import Vuex from 'vuex'
// import { shallowMount, createLocalVue } from '@vue/test-utils'


// const localVue = createLocalVue()
// localVue.user(Vuex)
// // test('mount a vue component', () => {
// //     const wrapper = mount(Logo)
// //     console.log(wrapper);
// //     // expect(wrapper.html()).toMatchSnapshot()
// // })

// describe('Logo.vue', () => {
//     let actions
//     let store

//     beforeEach(() => {
//         actions = {
//             login: jest.fn()
//         }
//         store = new Vuex.store({
//             actions
//         })
//     })

//     it('dispatches "login" when input event value is "input"', () => {
//         const wrapper = shallowMount(Actions, {store, localVue })
//     })
// })

import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo.vue', () => {
    it('renders the system name', () => {
        const wrapper = mount(Logo)
        expect(wrapper.text()).toMatch("LOU GEH")
        expect(wrapper.text()).toMatch("SUPERMARKET")
        // console.log("wrap",wrapper.html());
    })
})

describe("Login", () => {
    it("enables login button", async() => {
        const wrapper = mount(Logo)

        await wrapper.find('[data-username]').setValue("Maximus")
        await wrapper.find('[data-password]').setValue("emp")

        // expect(wrapper.find('.form_username').text()
        
    })
})



