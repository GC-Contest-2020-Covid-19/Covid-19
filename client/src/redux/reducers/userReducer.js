const initState = {
    // Position of the user ( coordinates )
    coordinates: 'NOT SET',
    // state and city
    us_state: 'NOT SET',
    city: 'NOT SET'
}

const userReducer = (state = initState, action) => {
    switch (action.type){
        case 'CHANGE_COORDINATES':
            return{
                ...state,
                coordinates: action.payload
            }
        case 'CHANGE_US_STATE':
            return{
                ...state,
                us_state: action.payload
            }
        case 'CHANGE_CITY':
            return{
                ...state,
                city: action.payload
            }
        default:
            return state
    }
}

export default userReducer