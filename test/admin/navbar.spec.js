import { mount } from '@vue/test-utils'
import Nav from '@/layouts/navbar.vue'
import Side from '@/layouts/sidebar.vue'

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

describe('sidebar.vue', () => {
    it('renders Welcome {{username}}', () => {
        const wrapper = mount(Side, {
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
        expect(wrapper.find('.welcome_name').text())
            .toBe("Welcome,  Maximus")
        // console.log("wrap",wrapper.html());
    })

    it('does not render admin and transaction modules if role_name is not admin', () => {
        const wrapper = mount(Side, {
            data() {
                return {
                    role_name: "custodian"
                }
            },
            stubs: {
                // so it wont show error
                NuxtLink: true
            }
        })
        expect(wrapper.find('.admin_module').exists())
            .toBe(false)
        expect(wrapper.find('.transaction_module').exists()).toBe(false)
        // console.log("wrap",wrapper.html());
    })

    it('renders admin and transaction modules if role_name is admin', () => {
        const wrapper = mount(Side, {
            data() {
                return {
                    role_name: "admin"
                }
            },
            stubs: {
                // so it wont show error
                NuxtLink: true
            }
        })
        expect(wrapper.find('.admin_module').exists())
            .toBe(true)
        expect(wrapper.find('.transaction_module').exists()).toBe(true)
        // console.log("wrap",wrapper.html());
    })

    it('does not render admin module and delivery transaction module if role_name is cashier', () => {
        const wrapper = mount(Side, {
            data() {
                return {
                    role_name: "cashier"
                }
            },
            stubs: {
                // so it wont show error
                NuxtLink: true
            }
        })
        expect(wrapper.find('.admin_module').exists())
            .toBe(false)
        expect(wrapper.find('.delivery_transaction').exists()).toBe(false)
    })

    it('renders sales transaction module if role_name is cashier', () => {
        const wrapper = mount(Side, {
            data() {
                return {
                    role_name: "cashier"
                }
            },
            stubs: {
                // so it wont show error
                NuxtLink: true
            }
        })
        expect(wrapper.find('.sales_transaction').exists()).toBe(true)
    })

    it('does not render admin module and sales transaction module if role_name is custodian', () => {
        const wrapper = mount(Side, {
            data() {
                return {
                    role_name: "custodian"
                }
            },
            stubs: {
                // so it wont show error
                NuxtLink: true
            }
        })
        expect(wrapper.find('.admin_module').exists())
            .toBe(false)
        expect(wrapper.find('.sales_transaction').exists()).toBe(false)
    })

    it('renders delivery transaction module if role_name is custodian', () => {
        const wrapper = mount(Side, {
            data() {
                return {
                    role_name: "custodian"
                }
            },
            stubs: {
                // so it wont show error
                NuxtLink: true
            }
        })
        expect(wrapper.find('.delivery_transaction').exists()).toBe(true)
    })
})