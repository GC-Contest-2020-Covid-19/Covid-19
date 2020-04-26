export const changeCoordinates = (position) => {
    return {
        type: 'CHANGE_COORDINATES',
        payload: position
    }
}

export const changeUsState = (us_state) => {
    return {
        type: 'CHANGE_US_STATE',
        payload: us_state
    }
}

export const changeCity = (city) => {
    return {
        type: 'CHANGE_CITY',
        payload: city
    }
}