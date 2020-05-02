export const clearModeling = () => {
    return {
        type: 'CLEAR_MODELING'
    }
}

export const changeModelingS = (S) => {
    return {
        type: 'CHANGE_MODELING_S',
        payload: S
    }
}

export const changeModelingI = (I) => {
    return {
        type: 'CHANGE_MODELING_I',
        payload: I
    }
}

export const changeModelingA = (a) => {
    return {
        type: 'CHANGE_MODELING_A',
        payload: a
    }
}

export const changeModelingB = (b) => {
    return {
        type: 'CHANGE_MODELING_B',
        payload: b
    }
}

export const changeModelingTime = (time) => {
    return {
        type: 'CHANGE_MODELING_TIME',
        payload: time
    }
}