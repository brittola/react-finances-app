function getData() {
    if(localStorage.getItem('io')){
        return JSON.parse(localStorage.getItem('io'));
    }else{
        return {incomes: 0, outcomes: 0, total: 0}
    }
}

function ioReducer(state = getData(), action) {

    switch (action.type) {

        case 'ADD_INCOME':
            return {
                incomes: state.incomes + action.payload,
                outcomes: state.outcomes,
                total: state.total + action.payload
            }
        case 'ADD_OUTCOME':
            return {
                incomes: state.incomes,
                outcomes: state.outcomes + action.payload,
                total: state.total - action.payload
            }
        case 'DELETE_INCOME':
            return {
                incomes: state.incomes - action.payload,
                outcomes: state.outcomes,
                total: state.total - action.payload
            }
        case 'DELETE_OUTCOME':
            return {
                incomes: state.incomes,
                outcomes: state.outcomes - action.payload,
                total: state.total + action.payload
            }
        default:
            return state;

    }

}

export default ioReducer;