const initState = {
    /*
        S - susceptible
        I - infected
        R - recovered

        a - Infection factor
        b - Recover factor
    */
    S: 0,
    I: 0,
    a: 0,
    b: 0,
    time: 0
}

const modelingReducer = (state = initState, action) => {
    switch(action.type){
        case 'CLEAR_MODELING':
            return{
                ...state,
                S: 0,
                I: 0,
                a: 0,
                b: 0,
                time: 0
            }
        case 'CHANGE_MODELING_S':
            return{
                ...state,
                S: action.payload
            }
        case 'CHANGE_MODELING_I':
            return{
                ...state,
                I: action.payload
            }
        case 'CHANGE_MODELING_A':
            return {
                ...state,
                a: action.payload
            }
        case 'CHANGE_MODELING_B':
            return {
                ...state,
                b: action.payload
            }
        case 'CHANGE_MODELING_TIME':
            return {
                ...state,
                time: action.payload
            }
        default:
            return state
    }
}


export default modelingReducer