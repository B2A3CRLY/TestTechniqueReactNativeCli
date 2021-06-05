import React, {useEffect} from 'react'
import {View, Text,Image, ScrollView, Linking, TouchableOpacity, Button} from 'react-native'
import { useDispatch, useSelector} from 'react-redux'
import { resourceSelectedDetail} from '../../api/index'
import { getSelectedResource } from '../../redux/selectors'
import styles from './styles'
const ResourceDetail = ({ route, navigation }) => {
    const { id } = route.params
    const dispatch = useDispatch()
    const singleResource = useSelector(getSelectedResource)
    console.log('detail : ', singleResource)
    const action = singleResource ? singleResource.action : ''
    const payload = action ? action.payload : ''
    const data = payload ? payload.data : ''
    const dataDetail = data ? data.data : ''
    const support = data ? data.support : ''
    console.log('action : ', action)
    console.log('payload : ', payload)
    console.log('data : ', data)
    console.log('dataDetail : ', dataDetail)
    console.log('support : ', support)
    useEffect(()=>{resourceSelectedDetail(dispatch, id)}, [])
    return (
        <ScrollView>
            <Text style={[styles.title, { color: dataDetail.color }]}>{dataDetail.name}</Text>
            <Text style={[styles.title, {color:dataDetail.color}]}>{dataDetail.year}</Text>
            <Text style={[styles.title, {color:dataDetail.color}]}>{dataDetail.pantone_value}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(support.url)}>
                <Text style={{color: 'blue', fontSize: 26, fontWeight:'bold', textAlign:'center'}}>
                    click here ! 
                </Text>
            </TouchableOpacity>
            <Text style={styles.title}>{support.text}</Text>
            <Button title='revenir' onPress={() => navigation.goBack()}/>
        </ScrollView>
    )
}

export default ResourceDetail
