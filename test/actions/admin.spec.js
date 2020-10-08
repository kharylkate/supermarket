// import axios from "axios"
import actions from '@/store/actions.js'

let url = ''
let body = {}
let mockError = false

jest.mock("axios", () => ({
  post: (_url, _body) => { 
    return new Promise((resolve) => {
      if (mockError) 
        throw Error("Mock error")

      url = _url
      body = _body
      resolve(true)
    })
  }
}))

describe("login", () => {
    it("logs in user to the system", async () => {
        const commit = jest.fn()
        // const user = {
        //     "username":"Maximus",
        //     "password":"emp"
        // }
        // const username = "Maximus"
        // const password = "emp"

        //const result = 
        
        await actions.fetchRolesList({ commit }) //({ commit }, { ...user } )
        //console.log(result);
        expect(url).toBe("/api/login")
        expect(body).toEqual({ ...user })
        expect(commit).toHaveBeenCalledWith(
            "login", result )
    })

    // it("catches an error", async() => {
    //     mockError = true

    //     await expect(actions.login({ commit: jest.fn() }, {}))
    //     .rejects.toThrow("API Error occured.")
    // })
})