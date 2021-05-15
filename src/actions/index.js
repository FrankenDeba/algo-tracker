import { CHANGE_STATUS, UPDATE_NO_OF_DONE } from "./actionTypes"

export const changeStatus = (payload) => {
    return {
        type: CHANGE_STATUS,
        payload,
    }
}

export const updateDone = (payload) => {
    return {
        type: UPDATE_NO_OF_DONE,
        payload,
    }
}