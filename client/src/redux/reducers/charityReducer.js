const initState = {
    charities: [],
    status: false
}

const charityReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_CHARITY':
            return{
                ...state,
                charities: [...state.charities, action.payload]
            }
        case 'CLEAR_CHARITIES':
            return {
                ...state,
                status: false,
                charities: []
            }
        case 'CHANGE_CHARITY_STATUS':
            return{
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}

export default charityReducer