export default {
    links: [
        {number: 0, href: 'index.html', name: 'Dashboard'},
        {number: 1, href: 'items.html', name: 'Items'},
        {number: 2, href: 'suppliers.html', name: 'Suppliers'},
        {number: 3, href: 'customers.html', name: 'Customers'},
        {number: 4, href: 'sales.html', name: 'Sales Transaction'},
        {number: 5, href: 'delivery.html', name: 'Delivery Transaction'}
    ],
    delivery: [{
        drNo: 567123,
        supplier: 'TENCENT Spy Lab',
        date: 'May 02, 2020',
        totalAmt: 7260,
        deliveries: [{
            barcode: 15304218,
            description: 'Churned Milk 1L', 
            qty: 40, 
            unitcost: 112.50
        }, {
            barcode: 15304220,
            description: 'Churned Milk 500mL', 
            qty: 40, 
            unitcost: 69.50
        }]
    },{
        drNo: 115647,
        supplier: 'Wall Maria',
        date: 'May 02, 2020',
        totalAmt: 9742.50,
        deliveries: [{
            barcode: 51404209,
            description: 'Cadbury 65g', 
            qty: 30, 
            unitcost: 76.50
        }, {
            barcode: 15304220,
            description: 'Cadbury 150g', 
            qty: 45, 
            unitcost: 165.50
        }]
    },{
        drNo: 953226,
        supplier: 'Beech Lasagna Corporation',
        date: 'May 01, 2020',
        totalAmt: 7537.10,
        deliveries: [{
            barcode: 11443366,
            description: 'Dairy Meelk 250mL', 
            qty: 70, 
            unitcost: 89.60
        },{
            barcode: 53170036,
            description: 'Oreo Cookies', 
            qty: 70, 
            unitcost: 89.60
        }]
    },{
        drNo: 665498,
        supplier: 'Bucks Milwaukee',
        date: 'April 30, 2020',
        totalAmt: 7537.10,
        deliveries: [{
            barcode: 12196864,
            description: 'Hershey\'s Chocs 65g', 
            qty: 70, 
            unitcost: 89.60
        }]
    },{
        drNo: 100034,
        supplier: 'Hirez Bugladins',
        date: 'April 29, 2020',
        totalAmt: 7537.10,
        deliveries: [{
            barcode: 18773694,
            description: 'Muck n Cheez', 
            qty: 70, 
            unitcost: 89.60
        }]
    },
        // {drNo: 567123, barcode: 15304218, description: 'Churned Milk 1kg', qty: 40, unitcost: 112.50, supplier: 'TENCENT Spy Lab', date: 'May 02, 2020'},
        // {drNo: 115647, barcode: 51404209, description: 'Cadbury 65g', qty: 75, unitcost: 76.75, supplier: 'Wall Maria', date: 'May 02, 2020'},
        // {drNo: 953226, barcode: 11443366, description: 'Dairy Meelk 250mL', qty: 45, unitcost: 89.60, supplier: 'Beech Lasagna Corporation', date: 'May 01, 2020'},
        // {drNo: 665498, barcode: 12196864, description: 'Hershey\'s Chocs 65g', qty: 70, unitcost: 82.25, supplier: 'Bucks Milwaukee', date: 'April 30, 2020'},
        // {drNo: 124121, barcode: 53170036, description: 'Oreo Cookies', qty: 50, unitcost: 54.75, supplier: 'Beech Lasagna Corporation', date: 'April 29, 2020'},
        // {drNo: 100034, barcode: 18773694, description: 'Muck n Cheez', qty: 40, unitcost: 98.15, supplier: 'Hirez Bugladins', date: 'April 29, 2020'}
    ],
    inventory: [
        {barcode: 15304218, description: 'Churned Milk 1kg', qty: 20, unitcost: 112.50},
        {barcode: 51404209, description: 'Cadbury 65g', qty: 50, unitcost: 76.75},
        {barcode: 11443366, description: 'Dairy Meelk 250mL', qty: 35, unitcost: 89.60},
        {barcode: 12196864, description: 'Hershey\'s Chocs 65g', qty: 55, unitcost: 82.25},
        {barcode: 53170036, description: 'Oreo Cookies', qty: 60, unitcost: 54.75},
        {barcode: 18773694, description: 'Muck n Cheez', qty: 40, unitcost: 98.15}
    ],
    customers: [
        {id: 165001, name: 'Dorian Havilliard', address: '1500 S Ave Kn Sta #17, Portales, NM, 88130', contactno: '(203) 796-9824', status: 'active'},
        {id: 165002, name: 'Manon Blackbeak', address: '103 Tyler Dr, Coatesville, PA, 19320', contactno: '(928) 524-6765', status: 'active'},
        {id: 165003, name: 'Alexander Lightwood', address: '412 E Walnut St, Nortonville, KS, 66060', contactno: '(610) 857-1617', status: 'active'}
    ],

    salesTransaction: [{
        orNo: 88971,
        transactionDate: 'June 06, 2020',
        customerName: 'Siruis Black',
        totalSales: 403.95,
        items: [
            {
                barcode: 18773694,
                description: 'Muck n Cheez',
                qty: 3,
                unitcost: 98.15,
                amt: 294.45
            },
            {
                barcode: 18773694,
                description: 'Oreo',
                qty: 2,
                unitcost: 54.75,
                amt: 109.50
            }
        ]},
        {   orNo: 88972, transactionDate: 'June 29, 2020', customerName: 'Rowan Whitethorn', totalSales: 76.75,
            items: [{ barcode: 51404209, description: 'Cadbury 65g', qty: 1, unitcost: 76.75, amt: 76.75 }]
        },
        {   orNo: 88973, transactionDate: 'July 25, 2020', customerName: 'Magnus Bane', totalSales: 89.60,
            items: [{ barcode: 11443366, description: 'Dairy Meelk 250mL', qty: 1, unitcost: 89.60, amt: 89.60}]
        },
        {   orNo: 88974, transactionDate: 'July 26, 2020', customerName: 'Alexander Lightwood', totalSales: 82.25,
            items: [{ barcode: 12196864, description: 'Hershey\'s Chocs 65g', qty: 1, unitcost: 82.25, amt: 82.25}]
        },
        {orNo: 88975, transactionDate: 'August 07, 2020', customerName: 'Manon Blackbeak', totalSales: 109.50,
            items: [{ barcode: 53170036, description: 'Oreo Cookies', qty: 2, unitcost: 54.75, amt: 109.50}]
        },
        {orNo: 88976, transactionDate: 'August 10, 2020', customerName: 'Dorian Havilliard', totalSales: 294.75,
            items: [{ barcode: 18773694, description: 'Muck n Cheez', qty: 3, unitcost: 98.15, amt: 294.75}]
        }
    ],

    suppliers: [
        {code: 12345678, compName: 'Beech Lasagna Corporation', contactno: '+1-767-5554-872', compAddress: '1631 Goehring Rd #334, New Brighton, PA, 15066', status: 'Active'},
        {code: 12345679, compName: 'Hirez Bugladins', contactno: '+1-767-5554-872', compAddress: '130 Shadowbrook Dr, Hillsborough, NC, 27278', status: 'Active'},
        {code: 12345680, compName: 'Wall Maria', contactno: '+1-767-5554-872', compAddress: '6 Ducks Head, New Castle, NH, 03854', status: 'Active'},
        {code: 12345681, compName: 'TENCENT Spy Laboratory', contactno: '+1-767-5554-872', compAddress: 'Po Box 831, Sultan, WA, 98294', status: 'Active'},
        {code: 12345682, compName: 'Bucks Milwaukee', contactno: '+1-767-5554-872', compAddress: 'Po Box 141, Bettsville, OH, 44815', status: 'Inactive'},
    ],

    delivery_transactions: [
        {
            dtransactions_code: 1,
            dr_no: 567123,
            supplier_code: 12345681,
            dtransaction_date: 'May 02, 2020',
            total_cost: 7260,
            created_at: 'may 02, 2020',
            created_by: 'Maximus',
            update_by: null,
            update_at: null
        },
        {
            dtransactions_code: 2,
            dr_no: 115647,
            supplier_code: 12345680,
            dtransaction_date: 'May 02, 2020',
            total_cost: 9742.50,
            created_at: 'May 02, 2020',
            created_by: 'Custody',
            update_by: null,
            update_at: null
        },
        {
            dtransactions_code: 3,
            dr_no: 953226,
            supplier_code: 12345678,
            dtransaction_date: 'May 01, 2020',
            total_cost: 7537.10,
            created_at: 'May 01, 2020',
            created_by: 'Maximus',
            update_by: null,
            update_at: null
        },
        {
            dtransactions_code: 4,
            dr_no: 665498,
            supplier_code: 12345682,
            dtransaction_date: 'April 30, 2020',
            total_cost: 7537.10,
            created_at: 'April 30, 2020',
            created_by: 'Custody',
            update_by: null,
            update_at: null
        }
    ],
    delivery_transactions_items: [
        {
            dtransaction_items_code: 1,
            dr_no: 567123,
            barcode: 15304218,
            unit_cost: 112.50,
            qty: 40
        },
        {
            dtransaction_items_code: 2,
            dr_no: 567123,
            barcode: 51404209,
            unit_cost: 69.50,
            qty: 30
        },
        {
            dtransaction_items_code: 3,
            dr_no: 115647,
            barcode: 51404209,
            unit_cost: 165.50,
            qty: 45
        },
        {
            dtransaction_items_code: 4,
            dr_no: 115647,
            barcode: 15304220,
            unit_cost: 69.50,
            qty: 40
        },
        {
            dtransaction_items_code: 5,
            dr_no: 953226,
            barcode: 11443366,
            unit_cost: 89.60,
            qty: 70
        },
        {
            dtransaction_items_code: 6,
            dr_no: 953226,
            barcode: 53170036,
            unit_cost: 89.60,
            qty: 70
        },
        {
            dtransaction_items_code: 7,
            dr_no: 665498,
            barcode: 12196864,
            unit_cost: 89.60,
            qty: 70
        },
    ],

    selectedTransaction: null,
    selectedDelivery: null
}

