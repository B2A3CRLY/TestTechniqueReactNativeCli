import {LOGIN} from '../actionTypes'
const defaultState = []
export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                action,
                loading: false,
                isLoggedIn: true
            };
        default:
            return state
    }
}