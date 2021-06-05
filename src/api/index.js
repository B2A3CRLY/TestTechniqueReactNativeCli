import axios from 'axios'
import { ToastAndroid} from 'react-native'
import { loginAction, registerAction, logoutAction, creationContactAction, contactsAction, contactDetailAction, resourcesAction, resourceDetailAction} from '../redux/actions'
import AsyncStorage from '@react-native-async-storage/async-storage';
const ENDPOINT = 'https://reqres.in/api/'
const MAX_PAGE = 2

export const loginUser = ( dispatch, user) => {
  axios.post(ENDPOINT + 'login', user).then(res => {
        AsyncStorage.setItem('token', res.data.token);
        console.log('response =>', res.status);
        console.log('token =>', res.data.token);
        dispatch(loginAction(res.data))
        if (res.status === 200) {
            ToastAndroid.show("Successful !", ToastAndroid.LONG);
        }
      }).catch(err => {
        if (err.response) {
            console.log(err.response);
            ToastAndroid.show("Une erreur s'est produite, vérifiez vos identifiants !", ToastAndroid.LONG);
        } else if (err.request) {
            ToastAndroid.show("Une erreur s'est produite, vérifiez vos identifiants!", ToastAndroid.LONG);
        } else {
            ToastAndroid.show("Une erreur s'est produite, vérifiez vos identifiants!", ToastAndroid.LONG);
        }
    })   
}


export const registerUser = (dispatch, user) => {
  axios.post(ENDPOINT + 'register', user).then(res => {
        AsyncStorage.setItem('token', res.data.token);
        console.log('response =>', res.status);
        console.log('token =>', res.data.token);
        dispatch(registerAction(res.data))
        if (res.status === 200) {
          ToastAndroid.show("Successful !", ToastAndroid.LONG);
          
        }
      }).catch(err => {
        if (err.response) {
            console.log(err.response);
            ToastAndroid.show("Une erreur s'est produite, vérifiez vos identifiants !", ToastAndroid.LONG);
        } else if (err.request) {
            ToastAndroid.show("Une erreur s'est produite, vérifiez vos identifiants!", ToastAndroid.LONG);
        } else {
            ToastAndroid.show("Une erreur s'est produite, vérifiez vos identifiants!", ToastAndroid.LONG);
        }
    })   
}

export const logoutUser = (dispatch) => {
  AsyncStorage.removeItem('token');
  dispatch(logoutAction())
  window.location.reload(false);
}
export const createContact = (dispatch, user) => {
  axios.post(ENDPOINT + 'users', user).then(res => {
        console.log('response =>', res.status);
        console.log('token =>', res.data.token);
        dispatch(creationContactAction(res.data))
        if (res.status === 201) {
          ToastAndroid.show("Contact create Successful !", ToastAndroid.LONG);
          
        }
      }).catch(err => {
        if (err.response) {
            console.log(err.response);
            ToastAndroid.show("Une erreur s'est produite !", ToastAndroid.LONG);
        } else if (err.request) {
            ToastAndroid.show("Une erreur s'est produite !", ToastAndroid.LONG);
        } else {
            ToastAndroid.show("Une erreur s'est produite !", ToastAndroid.LONG);
        }
    })   
}
export const listContacts = async (dispatch, cb) =>  {
  try {
      const res = await axios.get(ENDPOINT + 'users?page=' + MAX_PAGE)
    console.log('res : ', res.data.data)
    cb && cb()
    dispatch(contactsAction(res.data.data))
  } catch (error) {
      console.log('Error recipes : ', error)
  }    
}
export const contactSelectedDetail = async (dispatch, id) => {
  try {
    const res = await axios.get(ENDPOINT + 'users/'+ id)
    console.log('data : ',res.data)
    dispatch(contactDetailAction(res.data))
} catch (error) {
    console.log('Error fetch Selected : ',error)
}
}
 //listResources
 export const listResources = async (dispatch, cb) =>  {
  try {
      const res = await axios.get(ENDPOINT + 'unknown')
    console.log('res : ', res.data.data)
    cb && cb()
    dispatch(resourcesAction(res.data.data))
  } catch (error) {
      console.log('Error recipes : ', error)
  }    
}
//resourceSelectedDetail
export const resourceSelectedDetail = async (dispatch, id) => {
    try {
      const res = await axios.get(ENDPOINT + 'unknown/'+ id)
      console.log('onlyData : ', res.data)
      dispatch(resourceDetailAction(res.data))
    } catch (error) {
    console.log('Error fetch Selected : ',  error)
  }
}