import { mount, shallowMount } from '@vue/test-utils'
import actions from '@/store/actions.js'
import mutations from '@/store/mutations.js'
import getters from '@/store/getters.js'
import parent from '@/pages/roles.vue'
import child from '@/components/roles/roles.vue'
import addRole from '@/components/roles/add_role.vue'

// describe.only to run only that describe case

describe("Role (page)", () => {
    const wrapper = shallowMount(parent)

    it('mounts child role (component)', () => {
        expect(wrapper.findComponent(addRole).exists()).toBe(true)
    })

    it('mounts child addRole (component)', () => {
        expect(wrapper.findComponent(addRole).exists()).toBe(true)
    })
})

describe('Roles (component)', () => {
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

    it('renders the ROLES name', () => {
        expect(wrapper.find('.role_page').text()).toBe("Roles")
    })

    it('renders table', () => {
        expect(wrapper.find('#btable').exists()).toBe(true)
    })

    it('renders "Add Item" button', () => {
        expect(wrapper.find('.btn_add').exists()).toBe(true)
    })
})

describe("roles.vue", () => {
    const commit = jest.fn()
    const role = { role_id: "1", role_name: "minister"}
    const state = {
        rolesList: []
    }

    it('will dispatch action addRole', async () => {
        actions.addRole({ commit }, { ...role})
        expect(mutations.addRole(state, role)).toHaveBeenCalled
        console.log(state);
    })

    it("commit mutation with a new role", () => {
        
        mutations.addRole(state, { ...role })

        // rolesList[0] since double ang mutation, double pud ang na-commit sa state
        expect(state.rolesList[0]).toEqual(
            { "role_id": "1", "role_name": "minister"}
        )
    })

    it('will fetch roles list', () => {
        const result = getters.rolesList(state)

        expect(role).toEqual(state.rolesList[0])

        console.log("state", result[0]);
    })

    it('will dispatch action updateRole', async () => {
        const update_item = { role_id: "1", role_name: "governor"}
        actions.updateRole({ commit }, { ...role})
        expect(mutations.updateRole(state, update_item)).toHaveBeenCalled
        console.log(state);
    })

})
