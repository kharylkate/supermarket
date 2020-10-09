import parent from '@/pages/users.vue'
import child from '@/components/users/users.vue'
import add_user from '@/components/users/add.vue'
import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import { mapActions, mapGetters } from 'vuex';
import getters from '@/store/getters.js'
import actions from '@/store/actions.js'
import mutations from '@/store/mutations.js'
import Vuex from 'vuex'

import * as axios from 'axios';
import flushPromises from 'flush-promises'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Parent user (page)', () => {
    const wrapper = shallowMount(parent, {
        stubs: {
            navbar: true,
            navbarcollapse: true
        }
    })

    it('renders the child user component', () => {
        expect(wrapper.findComponent(child).exists()).toBe(true)
    })

    it('renders the child addUser component', () => {
        expect(wrapper.findComponent(add_user).exists()).toBe(true)
    })
})

describe('users.vue', () => {

    let actions
    let store
    let state
    let getters
    const user = {
        "user_id":1,
        "employee_code":154151757,
        "username": "Maximus",
        "password": "emp"
    }

    beforeEach(() => {
        state = {
            userList: [],
            rolesList: []
        }
        getters = {
            userList(state){
                return state.userList
            },
            rolesList(state){
                return state.rolesList
            }
        }
        actions = {
            addUser: jest.fn(key => state.userList[key]),
            fetchRolesList({commit}){
            },
            fetchUserList({commit}){
            }
        }
        store = new Vuex.Store({
            actions,
            
        })
    })

    it('will dispatch action adduser if OK button is clicked', async () => {
        const wrapper = mount(add_user, {
            store,
            localVue,
            data(){
                return {
                    user: {
                        "user_id":1,
                        "employee_code":154151757,
                        "username": "Maximus",
                        "password": "emp",
                        "role_id": 1
                    },
                    // rolesList: {}
                }
            }
        })
        wrapper.find('.user_add').trigger('click')
        expect(actions.addUser).toHaveBeenCalled()
    })

    it('will commit mutation', () => {
        mutations.addUser(state, { ...user })
        // console.log("mutations",state.userList);
        expect(state.userList).toEqual([{
            "user_id":1,
            "employee_code":154151757,
            "username": "Maximus",
            "password": "emp"
        }])
    })

    it('will fetch user list', () => {
        const result = getters.userList(state)
        expect(result).toEqual(state.userList)
    })
})
