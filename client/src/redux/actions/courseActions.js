export const clearCourses = () => {
    return {
        type: 'CLEAR_COURSES'
    }
}

export const addCourse = (course) => {
    return {
        type: 'ADD_COURSE',
        payload: course
    }
}

export const changeCourseStatus = (status) => {
    return {
        type: 'CHANGE_COURSE_STATUS',
        payload: status
    }
}