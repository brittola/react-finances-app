export function addTransaction(desc, value, type) {
    
    return {
        type: 'ADD_TRANSACTION',
        payload: {
            desc,
            value,
            type
        }
    }

}

export function deleteTransaction(id) {

    return {
        type: 'DELETE_TRANSACTION',
        payload: id
    }

}