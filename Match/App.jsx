import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigator from './routes/homeStack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <Navigator/>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    color: 'red',
    fontSize: 50,
    textAlignVertical: 'top',
  },
  subtitle: {
    color: 'red',
  },
  authButtons: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 500,
  },
  loginButton: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
  singUpButton: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
});
