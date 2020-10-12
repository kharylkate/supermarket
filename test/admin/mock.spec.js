import { mount } from '@vue/test-utils'
import roles from '@/components/roles/roles.vue'

// create url and data variable to save the url and data passed to $http.get
// This is useful to assert the request is hitting the correct endpoint, with correct payload.

let url = ''
let data = ''

const mockHttp = {
    get : (_url, _data) => {
        return new Promise((resolve, reject) => {
            url = _url
            data = _data 
            resolve()
        })
    }
}

describe('update role data', () => {
    it("updates a role", async() => {
        const wrapper = mount(roles, {
            mocks: {
                $http: mockHttp
            }
        })

        wrapper.find('.item_update').trigger('click')
        
        expect(wrapper.find(".message").text()).toBe("Inventory update successful")


    })
})