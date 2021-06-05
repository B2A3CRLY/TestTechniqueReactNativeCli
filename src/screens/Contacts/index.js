import React, {useEffect, useState} from 'react'
import {ActivityIndicator, View, FlatList} from 'react-native'
import { useDispatch } from 'react-redux'
import { useSelector} from 'react-redux'
import {listContacts} from '../../api/index'
import {getContactsInfo} from '../../redux/selectors'
import Container from '../../components/common/Container'
import ContactItem from './ContactItem'
import styles from './styles'
const Contacts = ({navigation}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const _renderItem = ({ item }) => {
        return <ContactItem item={item} navigation={navigation}/>
    }
    useEffect(() => { listContacts(dispatch, () => setLoading(false)) }, [])
    const contactsData = useSelector(getContactsInfo)
    const action = contactsData ? contactsData.action : ''
    const payload = action ? action.payload : ''
    const data= payload ? payload.data : ''
    console.log('data : ', contactsData)
    console.log('action : ', action)
    console.log('payload : ', payload)
    console.log('data : ', data)
    return (
        <Container>
             <View style={styles.container}>
                {loading ? <ActivityIndicator animating size="large" /> :
                <FlatList data={data} renderItem={_renderItem} ItemSeparatorComponent={() => <View style={styles.separator}/>} keyExtractor = {item => item.id} />}
            </View>
        </Container>
    )
}

export default Contacts;