import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    separator: {
        height: 2,
        backgroundColor:'grey'
    },
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        maxWidth:'100%'
    },
    image: {
        width: '30%',
        height:100
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    containerRight: {
        maxWidth: '80%',
        paddingLeft: 10,
        paddingTop:10
    }
})