import {CONTACTS} from '../actionTypes'
const defaultState = []
export const contactsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CONTACTS:
            return {
                action,
                loading: false,
                isLoggedIn: true
            };
        default:
            return state
    }
}