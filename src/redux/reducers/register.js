import {REGISTER} from '../actionTypes'
const defaultState = []
export const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                action,
                loading: false,
                isRegistered: true
            };
        default:
            return state
    }
}