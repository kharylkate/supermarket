import axios from 'axios';

const state = {
    delivery_transactions: [
        {
            dtransactions_code: 1,
            dr_no: 567123,
            supplier_code: 12345681,
            dtransaction_date: 'May 02, 2020',
            total_cost: 7260,
            created_at: 'may 02, 2020',
            created_by: 'Maximus',
            updated_by: null,
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
            updated_by: null,
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
            updated_by: null,
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
            updated_by: null,
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
    items: [
        {

        }
    ],
    todos: []  
};
