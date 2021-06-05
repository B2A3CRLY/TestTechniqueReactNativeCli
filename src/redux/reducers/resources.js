import {RESOURCES} from '../actionTypes'
const defaultState = []
export const resourcesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RESOURCES:
            return {
                action,
                loading: false,
                isLoggedIn: true
            };
        default:
            return state
    }
}