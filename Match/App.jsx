import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View display="flex">
      <View style={styles.header}>
        <Text style={styles.title}>Match</Text>
        <Text style={styles.subtitle}>Play sports in your area like a pro</Text>
      </View>
      <View style={styles.authButtons}>
        <TouchableOpacity style={styles.loginButton}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.singUpButton}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
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
