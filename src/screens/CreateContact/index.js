import React from 'react'
import { View, Text} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Container from '../../components/common/Container';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import styles from './styles'
import Input from '../../components/common/Input'
import CustomButton from '../../components/common/CustomButton';
import { createContact } from '../../api/index'
import {CONTACTS_LIST} from '../../constants/routeNames'
import {getCreationContactInfo} from '../../redux/selectors'
const CreationContact = () => {
    const [name, onChangeName] = React.useState(" ");
    const [job, onChangeJob] = React.useState(" ");
    const dispatch = useDispatch()
    const {navigate} = useNavigation();
    const onSubmit = () => {
        if (name && job && name.length > 0 && job.length > 0) {
            const user = {
                name: name,//morpheus
                job : job //"leader
            }
            createContact(dispatch, user);
            onChangeJob('')
            onChangeName('')
        }
      };
    return (
        <Container>
            <Text style={{textAlign:'center', borderWidth: 1, borderColor:'red'}}>Ajouter un nouveau contact !!!</Text>
            <Input
                label = "Name"
                iconPosition = 'right'
                onChangeText={onChangeName}
                value={name}
            />
            <Input
                label = "Job"
                iconPosition = 'right'
                onChangeText={onChangeJob}
                value={job}
            />
            <CustomButton
                onPress={onSubmit}
                primary
                title="Submit"
            />
            <View style={styles.createSection}>
                <TouchableOpacity
                onPress={() => {
                    navigate(CONTACTS_LIST);
                }}>
                <Text style={styles.linkBtn}>Liste contacts ! </Text>
                </TouchableOpacity>
          </View>
        </Container>
    )
}
export default CreationContact