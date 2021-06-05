import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';



const CardItem = ({ title, subtitle, content, componentName,navigate,icon="folder", img}) => {
    const LeftContent = props => <Avatar.Icon {...props} icon={icon} />
    return (
        <TouchableOpacity
        >
            <Card onPress = {() => navigate(componentName)}>
                <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
                <Card.Content>
                <Title style={styles.title}>{title}</Title>
                <Paragraph style={styles.paragraph}>{content}</Paragraph>
                </Card.Content>
                <Image source={require('../../assets/images/create-contact.jpg')} />
            </Card>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    title: {
        marginLeft: 25,
        color:'blue'
    },
    paragraph: {
        color:'red'
    }
})
export default CardItem;
