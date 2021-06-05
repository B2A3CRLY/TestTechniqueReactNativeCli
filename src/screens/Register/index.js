import React from 'react'
import { View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Container from '../../components/common/Container';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import styles from './styles'
import Input from '../../components/common/Input'
import CustomButton from '../../components/common/CustomButton';
import { registerUser } from '../../api/index'
import {DASHBOARD, LOGIN} from '../../constants/routeNames'
import {getRegisterInfo} from '../../redux/selectors'
const Register = () => {
    const [email, onChangeEmail] = React.useState(" ");
    const [password, onChangePassword] = React.useState(" ");
    const dispatch = useDispatch()
    const {navigate} = useNavigation();
    const { isLoggedIn } = useSelector(getRegisterInfo)
    console.log('IsLoggedIn',isLoggedIn)
    const onSubmit = () => {
        if (email && password && email.length > 0 && password.length > 0) {
            const user = {
                email: 'eve.holt@reqres.in',
                password : 'pistol'
            }
            registerUser(dispatch, user);
            if (isLoggedIn) {
                navigate(DASHBOARD)
            }
        }
    };
    
    return (
        <Container>
            <Text style={{textAlign:'center', borderWidth: 1, borderColor:'blue'}}>Page de Creation Compte !!!</Text>
            <Input
                label = "Email"
                iconPosition = 'right'
                onChangeText={onChangeEmail}
                value={email}
            />
            <Input
                label = "Password"
                iconPosition = 'right'
                onChangeText={onChangePassword}
                value={password}
            />
            <CustomButton
                onPress={onSubmit}
                primary
                title="Submit"
            />
            <View style={styles.createSection}>
                <Text style={styles.infoText}>déjà un compte ?</Text>
                <TouchableOpacity
                onPress={() => {
                    navigate(LOGIN);
                }}>
                <Text style={styles.linkBtn}>Login</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}
export default Register