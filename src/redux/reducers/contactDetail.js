import {CONTACT_DETAIL} from '../actionTypes'
const defaultState = []
export const contactDetailReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CONTACT_DETAIL:
            return {
                action,
                loading: false,
                isLoggedIn: true
            };
        default:
            return state
    }
}