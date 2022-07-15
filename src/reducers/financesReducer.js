import Transaction from "../components/Transaction";

function getData() {
    if(localStorage.getItem('transactions')){
        return JSON.parse(localStorage.getItem('transactions'));
    }else{
        return [];
    }
}

function financesReducer(state = getData(), action) {

    switch(action.type) {

        case 'ADD_TRANSACTION':
            let payload = action.payload;
            let newTransaction = new Transaction(payload.desc, payload.value, payload.type);
            return [newTransaction, ...state];
        case 'DELETE_TRANSACTION':
            let newTransactions = state.filter(transaction => transaction.id !== action.payload);
            return newTransactions;
        default:
            return state;

    }

}

export default financesReducer;