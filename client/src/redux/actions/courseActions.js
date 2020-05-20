export const clearCourses = () => {
    return {
        type: "CLEAR_COURSES",
    };
};

export const addCourse = (course) => {
    return {
        type: "ADD_COURSE",
        payload: course,
    };
};

export const changeCourseCouseraStatus = (status) => {
    return {
        type: "CHANGE_COURSE_C_STATUS",
        payload: status,
    };
};

export const changeCourseEdxStatus = (status) => {
    return {
        type: "CHANGE_COURSE_E_STATUS",
        payload: status,
    };
};

export const changeCourseRequested = (bool) => {
    return {
        type: "CHANGE_COURSE_REQUESTED",
        payload: bool,
    };
};
