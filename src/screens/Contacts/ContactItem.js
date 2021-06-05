import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { CONTACTS_DETAIL } from '../../constants/routeNames'
import styles from './styles'
 
const ContactItem= ({ item, navigation}) => {
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate(CONTACTS_DETAIL, {id:item.id})}}>
            <ScrollView>
                <View style={styles.container}>
                <Image source={item.avatar} style={styles.image}/>
                    <View style={styles.containerRight}>
                        <Text style={styles.title}>{item.first_name + ' ' + item.last_name}</Text>
                        <Text style={styles.title}>{item.email}</Text>
                </View>
                </View>
            </ScrollView>
        </TouchableOpacity>
    )
}


export default ContactItem;