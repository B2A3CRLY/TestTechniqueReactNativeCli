import React from 'react';
import {
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Container from '../../components/common/Container';
import { CONTACTS_LIST, CREATE_CONTACT, ECRAN_PDF, RESOURCES, SETTINGS } from '../../constants/routeNames';
import styles from './styles'
import Icon from '../../components/common/Icon';
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../api/index'

const SideMenu = ({navigation}) => {
  const dispatch = useDispatch()
    const handleLogout = () => {
      navigation.toggleDrawer();
      Alert.alert('Logout!', 'Are you sure you want to logout?', [
        {
          text: 'Cancel',
          onPress: () => {},
        },
  
        {
          text: 'OK',
          onPress: () => {
            logoutUser(dispatch);

          },
        },
      ]);
    };
  
    const menuItems = [
       {
        icon: <Icon type="fontisto" size={17} name="player-settings" />,
        name: 'Contacts',
        onPress: () => {
          navigation.navigate(CONTACTS_LIST);
        },
        },
        {
            icon: <Icon type="evil" size={17} name="player-settings" />,
            name: 'Creer Contact',
            onPress: () => {
              navigation.navigate(CREATE_CONTACT);
            },
        },
        {
            icon: <Icon type="feather" size={17} name="player-settings" />,
            name: 'Liste Ressources',
            onPress: () => {
            navigation.navigate(RESOURCES);
            },
        },
        {
            icon: <Icon type="ant" size={17} name="player-settings" />,
            name: 'Afficher Pdf',
            onPress: () => {
              navigation.navigate(ECRAN_PDF);
            },
        },

       {
        icon: <Icon type="fontisto" size={17} name="player-settings" />,
        name: 'Settings',
        onPress: () => {
          navigation.navigate(SETTINGS);
        },
      },
      {
        icon: <Icon type="material" size={17} name="logout" />,
        name: 'Logout',
        onPress: handleLogout,
      },
    ];
    return (
      <SafeAreaView>
        <Container>
          <Image
            height={70}
            width={70}
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
          />
  
          <View style={{paddingHorizontal: 30}}>
            {menuItems.map(({name, icon, onPress}) => (
              <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
                <View style={styles.icon}>{icon}</View>
                <Text style={styles.itemText}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Container>
      </SafeAreaView>
    );
  };
  
  export default SideMenu;