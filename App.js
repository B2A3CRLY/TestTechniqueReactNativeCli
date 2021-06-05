import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import AppNavContainer from './src/navigations/index'
import store from './src/redux/store'


export default function App() {
  return (
    <Provider store={store}>
        <AppNavContainer style={styles.container}/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
