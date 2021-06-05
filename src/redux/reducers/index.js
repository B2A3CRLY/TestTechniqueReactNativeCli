import { combineReducers } from 'redux'
import { loginReducer } from './login'
import { registerReducer } from './register'
import { logoutReducer } from './logout'
import {contactsReducer} from './contacts'
import { creationContactReducer } from './creationContact'
import { contactDetailReducer } from './contactDetail'
import { resourcesReducer } from './resources'
import {resourceDetailReducer} from './resourceDetail'
export default combineReducers
    ({
        loginReducer, registerReducer, logoutReducer,resourcesReducer,
        creationContactReducer, contactsReducer, contactDetailReducer,
        resourceDetailReducer
    })