import React, {useEffect, useState} from 'react'
import {ActivityIndicator, View, FlatList} from 'react-native'
import { useDispatch } from 'react-redux'
import { useSelector} from 'react-redux'
import {listResources} from '../../api/index'
import {getResourcesInfo} from '../../redux/selectors'
import Container from '../../components/common/Container'
import ResourceItem from './ResourceItem'
import styles from './styles'
const Resources = ({navigation}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const _renderItem = ({ item }) => {
        return <ResourceItem item={item} navigation={navigation}/>
    }
    useEffect(() => { listResources(dispatch, () => setLoading(false)) }, [])
    const resourcesData = useSelector(getResourcesInfo)
    const action = resourcesData ? resourcesData.action : ''
    const payload = action ? action.payload : ''
    const data = payload ? payload.data: ''
    console.log('action : ', action)
    console.log('payload : ', payload)
    console.log('data :', data)
    
    return (
        <Container>
            <View style={styles.container}>
                {loading ? <ActivityIndicator animating size="large" /> :
                <FlatList data={data} renderItem={_renderItem} ItemSeparatorComponent={() => <View style={styles.separator}/>} keyExtractor = {item => item.id} />}
            </View>
        </Container>
    )
}

export default Resources