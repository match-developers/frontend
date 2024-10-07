import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

//the label is on the left, the username is on the right. input field so that it can be changed. no logic appied othe than clickable
const UsernameInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      {/* TextInput field to replace the underline */}
      <TextInput
        style={styles.textInput}
        placeholder="Enter your username"
        editable={true} // Allows input
      />
    </View>
  );
};

//i customised the styling
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth - 32 // Full width minus some padding
  },
  label: {
    fontSize: 20,
    fontFamily: 'Exo 2',
    flex: 1, // Label hugs the left
    textAlign: 'left'
  },
  textInput: {
    flex: 2, // Input area stretches to the right
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    fontSize: 20,
    padding: 0, // No padding to keep it minimal
    color: '#000'
  }
});

export default UsernameInput;
