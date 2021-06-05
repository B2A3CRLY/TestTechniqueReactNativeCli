import {CREATION_CONTACT} from '../actionTypes'
const defaultState = []
export const creationContactReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATION_CONTACT:
            return {
                action,
                loading: false,
                isLoggedIn: true
            };
        default:
            return state
    }
}