import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
    CONTACTS_DETAIL, CONTACTS_LIST, CREATE_CONTACT, SETTINGS,
    RESOURCES, RESOURCES_DETAIL, ECRAN_PDF, DASHBOARD
} from '../constants/routeNames'
import Contacts from '../screens/Contacts'
import ContactDetail from '../screens/ContactDetail'
import CreateContact from '../screens/CreateContact'
import Resources from '../screens/Resources'
import ResourcesDetail from '../screens/ResourceDetail'
import EcranPdf from '../screens/EcranPdf'
import Dashboard from '../screens/Dashboard'
import Settings from '../screens/Settings'


const HomeNavigator = () => {
    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Navigator initialRouteName={DASHBOARD}>
            <HomeStack.Screen name={DASHBOARD} component={Dashboard}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACTS_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACTS_DETAIL} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={RESOURCES} component={Resources}></HomeStack.Screen>
            <HomeStack.Screen name={RESOURCES_DETAIL} component={ResourcesDetail}></HomeStack.Screen>
            <HomeStack.Screen name={ECRAN_PDF} component={EcranPdf}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;