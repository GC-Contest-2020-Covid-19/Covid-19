const initState = {
    courses: [],
    // statuses of the cousera and edx request
    c_status: false,
    e_status: false,
    requested: false
}

const courseReducer = (state = initState, action) => {
    switch(action.type){
        case 'CLEAR_COURSES':
            return {
                ...initState
            }
        case 'ADD_COURSE':
            return {
                ...state,
                courses: [action.payload, ...state.courses]
            }
        case 'CHANGE_COURSE_C_STATUS':
            return {
                ...state,
                c_status: action.payload
            }
        case 'CHANGE_COURSE_E_STATUS':
            return {
                ...state,
                e_status: action.payload
            }
        case 'CHANGE_COURSE_REQUESTED':
            return {
                ...state,
                requested: action.payload
            }
        default: 
            return state
    }
}

export default courseReducer