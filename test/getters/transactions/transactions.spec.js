import { mount } from '@vue/test-utils'
import mutations from '@/store/mutations.js'

describe("receiveDelivery", () => {
    it("receives incoming delivery items", () => {
        const delivery = {
            "dt_id":1,
            "dr_no":10001,
            "dtransaction_date":"10/01/2020",
            "supplier_id":"1",
            "total_cost":9562.5,
            "items": [
                {
                    "barcode":"4806016700585",
                    "product_description":"Lanmier Notebook",
                    "quantity":150,
                    "sales_cost":63.75
                }
            ],
        }
        const state = {
            deliver_transactions: []
        }

        mutations.receiveDelivery(state, { delivery})
        expect(state).toEqual({
            deliver_transactions: [{
                "dt_id":1,
                "dr_no":10001,
                "dtransaction_date":"10/01/2020",
                "supplier_id":"1",
                "total_cost":9562.5,
                "items": [
                    {
                        "barcode":"4806016700585",
                        "product_description":"Lanmier Notebook",
                        "quantity":150,
                        "sales_cost":63.75
                    }
                ],
            }]
        })
    })
})