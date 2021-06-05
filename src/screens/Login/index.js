import React from 'react'
import { View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Container from '../../components/common/Container';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import styles from './styles'
import Input from '../../components/common/Input'
import CustomButton from '../../components/common/CustomButton';
import { loginUser } from '../../api/index'
import {REGISTER} from '../../constants/routeNames'
import {getLoginInfo} from '../../redux/selectors'
const Login = () => {
    const [text, onChangeText] = React.useState(" ");
    const [password, onChangePassword] = React.useState(" ");
    const dispatch = useDispatch()
    const {navigate} = useNavigation();
    const infoUser = useSelector(getLoginInfo)
    console.log('login info', infoUser)
    const onSubmit = () => {
        if (text && password && text.length > 0 && password.length > 0) {
            const user = {
                email: 'eve.holt@reqres.in',
                password : 'cityslicka'
            }
          loginUser(dispatch, user);
        }
      };
    return (
        <Container>
            <Text style={{textAlign:'center', borderWidth: 1, borderColor:'blue'}}>Page de connexion !!!</Text>
            <Input
                label = "Username"
                iconPosition = 'right'
                onChangeText={onChangeText}
                value={text}
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
                <Text style={styles.infoText}>Un nouveau compte?</Text>
                <TouchableOpacity
                onPress={() => {
                    navigate(REGISTER);
                }}>
                <Text style={styles.linkBtn}>Register</Text>
                </TouchableOpacity>
          </View>
        </Container>
    )
}
export default Login