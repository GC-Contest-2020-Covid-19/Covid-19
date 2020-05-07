const initState = {
    courses: [],
    status: false
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
        case 'CHANGE_COURSE_STATUS':
            return {
                ...state,
                status: action.payload
            }
        default: 
            return state
    }
}

export default courseReducer