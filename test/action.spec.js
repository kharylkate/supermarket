import { mount, shallowMount } from '@vue/test-utils'
import actions from '@/store/actions.js'
import mutations from '@/store/mutations.js'
import getters from '@/store/getters.js'
import parent from '@/pages/roles.vue'
import addRole from '@/components/roles/add_role.vue'

// describe("addRole", () => {
//     it("adds a new role", () => {
//         const role = { role_id: "1", role_name: "minister"}
//         const state = {
//             rolesList: []
//         }
//         mutations.addRole(state, { ...role })

//         expect(state).toEqual({
//             rolesList: [{ "role_id": "1", "role_name": "minister"}]
//         })
//     })
// })




describe("Parent role (page)", () => {
    const wrapper = shallowMount(parent)

    it('mounts child role (component)', () => {
        expect(wrapper.findComponent(addRole).exists()).toBe(true)
    })

    it('mounts child addRole (component)', () => {
        expect(wrapper.findComponent(addRole).exists()).toBe(true)
    })
})

describe("roles.vue", () => {
    const commit = jest.fn()
    const role = { role_id: "1", role_name: "minister"}
    const state = {
        rolesList: []
    }

    it('will add a new role', async () => {
        actions.addRole({ commit }, { ...role})
        expect(mutations.addRole(state, role)).toHaveBeenCalled
    })

    it("commit mutation with a new role", () => {
        
        mutations.addRole(state, { ...role })

        expect(state.rolesList[0]).toEqual(
            { "role_id": "1", "role_name": "minister"}
        )
    })

    it('will fetch roles list', () => {
        const result = getters.rolesList(state)

        expect(role).toEqual(state.rolesList[0])

        // console.log("state", result[0]);
    })
})

// describe("Roles", async () => {
//     const wrapper = shallowMount(addRole)
//     console.log(wrapper.html())
//     const role_name = wrapper.find('#role_name')
//     role_name.setValue('admin11')

//     wrapper.find('.role_add').trigger('click')

// })