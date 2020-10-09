import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import login from '@/components/Logo.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('login.vue', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            login: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
    })

    it('dispatches "login" action when password input triggered with keyup', () => {
        const wrapper = shallowMount(login, { 
            store, 
            localVue,
            data() {
                return {
                    user: {
                        username: 'Maximus',
                        password: 'emp'
                    }
                }
            }
        })

        wrapper.find('.form_password').trigger('keyup.enter')
        expect(actions.login).toHaveBeenCalled()
    })

    it('dispatches "login" action when button is clicked', () => {
        const wrapper = shallowMount(login, {
            store, 
            localVue,
            data(){
                return {
                    user: {
                        username: 'Maximus',
                        password: 'emp'
                    }
                }
            }
        })

        wrapper.find('button').trigger('click')
        expect(actions.login).toHaveBeenCalled()
    })
})
