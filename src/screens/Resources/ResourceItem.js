import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { RESOURCES_DETAIL } from '../../constants/routeNames'
import styles from './styles'
 
const ResourceItem= ({ item, navigation}) => {
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate(RESOURCES_DETAIL, {id:item.id})}}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerRight}>
                        <Text style={[styles.title, {color:item.color}]}>{item.name}</Text>
                        <Text style={styles.title}>{item.year}</Text>
                        <Text style={styles.title}>{item.pantone_value}</Text>
                    </View>
                </View>
            </ScrollView>
        </TouchableOpacity>
    )
}


export default ResourceItem;