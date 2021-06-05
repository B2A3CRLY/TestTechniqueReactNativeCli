import {RESOURCE_DETAIL} from '../actionTypes'
const defaultState = []
export const resourceDetailReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RESOURCE_DETAIL:
            return {
                action,
                loading: false,
                isLoggedIn: true
            };
        default:
            return state
    }
}