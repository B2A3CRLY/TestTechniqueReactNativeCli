
import { LOGIN, REGISTER, LOGOUT, CONTACTS, CONTACT_DETAIL, RESOURCES, CREATION_CONTACT, RESOURCE_DETAIL} from './actionTypes'

export const loginAction = (data) => ({
    type: LOGIN,
    payload: {
        data
    }
})

export const registerAction = (data) => ({
    type: REGISTER,
    payload: {
        data
    }
})

export const logoutAction = () => ({
    type: LOGOUT,
    payload: {}
})

export const creationContactAction = (data) => ({
    type: CREATION_CONTACT,
    payload: {
        data
    }
})

export const contactsAction = (data) => ({
    type: CONTACTS,
    payload: {
        data
    }
})

export const contactDetailAction = (data) => ({
    type: CONTACT_DETAIL,
    payload: {
        data
    }
})

export const resourcesAction = (data) => ({
    type: RESOURCES,
    payload: {
        data
    }
})

export const resourceDetailAction = (data) => ({
    type: RESOURCE_DETAIL,
    payload: {
        data
    }
})
