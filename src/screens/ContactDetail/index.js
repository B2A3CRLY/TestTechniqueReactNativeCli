import React, {useEffect} from 'react'
import {View, Text,Image, ScrollView, Linking, TouchableOpacity, Button} from 'react-native'
import { useDispatch, useSelector} from 'react-redux'
import { contactSelectedDetail} from '../../api/index'
import { getSelectedContact } from '../../redux/selectors'
import styles from './styles'
const ContactDetail = ({ route, navigation }) => {
    const { id } = route.params
    const dispatch = useDispatch()
    const singleContact = useSelector(getSelectedContact)
    console.log('detail : ', singleContact)
    const action = singleContact ? singleContact.action : ''
    const payload = action ? action.payload : ''
    const data = payload ? payload.data : ''
    const dataDetail = data ? data.data : ''
    const support = data ? data.support : ''
    console.log('action : ', action)
    console.log('payload : ', payload)
    console.log('data : ', data)
    console.log('dataDetail : ', dataDetail)
    console.log('support : ', support)
    useEffect(()=>{contactSelectedDetail(dispatch, id)}, [])
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={dataDetail.avatar} resizeMode="cover" style={styles.image}/>
            </View>
            <Text style={styles.title}>{dataDetail.first_name + ' ' + dataDetail.last_name}</Text>
            <Text style={styles.title}>{dataDetail.email}</Text>
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

export default ContactDetail
