import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { View, Text} from 'react-native'
import HomeNavigator from './HomeNavigator'
import { HOME_NAVIGATOR } from '../constants/routeNames'
import SideMenu from './SideMenu/index'

const getDrawerContent = (navigation) => {
    return <SideMenu navigation={navigation}/>;
  };
const DrawerNavigator = () => {
    const DrawerStack = createDrawerNavigator()
    return (
        <DrawerStack.Navigator drawerType="slide"
            drawerContent={({ navigation }) =>
            getDrawerContent(navigation)
        }>
            <DrawerStack.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></DrawerStack.Screen>
        </DrawerStack.Navigator>
    )
}

export default DrawerNavigator;