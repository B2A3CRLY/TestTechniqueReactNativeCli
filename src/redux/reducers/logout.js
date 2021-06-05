import {LOGOUT} from '../actionTypes'
const defaultState = []
export const logoutReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGOUT:
            return {
                action,
                loading: false,
                isLogout: true
            };
        default:
            return state
    }
}