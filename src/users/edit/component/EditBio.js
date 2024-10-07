import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
//the label is on the left, bio on the right. the bio needs to display the first words of current bio, or enter bio here if not previously set.
const BioInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter bio here, or the current set bio"
        editable={true}
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

export default BioInput;
