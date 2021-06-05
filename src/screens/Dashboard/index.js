import React from 'react'
import {useDispatch} from 'react-redux'
import { FlatList, View, Text, Button} from 'react-native'
import CardItem  from './CardItem'
import { data } from '../../constants/dashboardItems'
import {useNavigation} from '@react-navigation/native';
import { logoutUser } from '../../api';
const Dashboard = ({ navigation }) => {
    const {navigate} = useNavigation();
    const dispatch = useDispatch()
    const _renderItem = ({ item }) => <CardItem title={item.title} subtitle={item.subtitle}
        content={item.content} componentName={item.componentName} navigate={navigate} img={item.img} icon={item.icon}/>
    return (
        <View>
            <FlatList
            data={data}
            renderItem={_renderItem}
            keyExtractor = {item => item.id}
            />
            <Button title="logout" onPress={()=> logoutUser(dispatch)}/>
        </View>
    )
}

export default Dashboard;