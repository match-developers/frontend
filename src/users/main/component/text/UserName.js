//textbox displaying the usenrame. no interactions
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UsernameTextbox = ({ username = 'Username' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {username.length > 16 ? username.slice(0, 16) : username}
      </Text>
    </View>
  );
};

//I customsied the styles
const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Exo 2',
    color: '#000000'
  }
});

export default UsernameTextbox;
