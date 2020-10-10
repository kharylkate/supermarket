import mock from '@test/mock.vue'

export const rolesList = jest.fn().mockResolvedValue(mock.rolesList)

export const userList = jest.fn().mockResolvedValue(mock.userList)

export const inventoryList = jest.fn().mockResolvedValue(mock.inventoryList)

export const suppliersList = jest.fn().mockResolvedValue(mock.suppliersList)

export const deliveryList = jest.fn().mockResolvedValue(mock.deliveryList)

export const salesList = jest.fn().mockResolvedValue(mock.salesList)
