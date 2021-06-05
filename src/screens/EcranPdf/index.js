import React from 'react'
import Container from '../../components/common/Container'
import { Text,TouchableOpacity, Linking } from 'react-native';
import * as OpenAnything from 'react-native-openanything';
const EcranPdf = () => {
    const source = 'https://babacarly.netlify.app/certification/certificateReactNative.pdf';
    return (
        <Container>
            <Text>Hi from EcranPdf !</Text>
            <TouchableOpacity onPress={() => OpenAnything.Pdf(source)}>
                <Text style={{color: 'blue', fontSize: 26, fontWeight:'bold', textAlign:'center'}}>
                    click here to display pdf ! 
                </Text>
            </TouchableOpacity>
        </Container>
    )
}

export default EcranPdf