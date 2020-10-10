import store from "@/store"
import axios from 'axios'
import mock from './mockData'
import { resetState } from "./helpers"
import { types as mutations } from '@/store/mutations'

describe("Mutations", () => {
    beforeEach(resetState)

    it("Should return list of users", () => {
        store.commit(mutations.setUserList, mock.userList)

        expect(store.state.userList).toBe(mock.userList)
    }) 
 })