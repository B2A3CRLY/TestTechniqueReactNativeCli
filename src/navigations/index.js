import React, { useEffect, useContext } from 'react'
import {useSelector} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import {ActivityIndicator} from 'react-native';
import DrawerNavigator from './DrawerNavigator'
import AuthNavigator from './AuthNavigator'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLoginInfo,getLogoutInfo} from '../redux/selectors'



const AppNavContainer = () => {
    const { isLoggedIn } = useSelector(getLoginInfo)
    const { isLogoutIn} = useSelector(getLoginInfo)
    console.log('isLoggedIn', isLoggedIn)
    const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn)
    const [authLoaded, setAuthLoaded] = React.useState(false);
    const getUserToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            console.log('Token :', token)
          if (token) {
              setAuthLoaded(true);
              setIsAuthenticated(true);
          } else {
              setAuthLoaded(true);
              setIsAuthenticated(false); 
          }
        } catch (error) {
            console.log('error :', error)
        }
    };
    useEffect(() => {
        getUserToken();
    }, [isLoggedIn])
    if (isLogoutIn) {
        return <AuthNavigator/>
    }
    return (
        <>
            
            {authLoaded ? (
                <NavigationContainer>
                {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
                </NavigationContainer>
            ):
            (
                <ActivityIndicator />
            )}
        </>
    )
}
export default AppNavContainer;