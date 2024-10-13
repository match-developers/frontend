//same ad the submit button for playstyle text but colour import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubmitReportButton = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>Submit Report</Text>
    </View>
  );
};

// Custom styles
const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5DCC78', // Fill color
    borderColor: '#004D13', // Border color
    borderWidth: 1,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    color: '#000', // Text color
    fontFamily: 'Exo 2' // Font family
  }
});

export default SubmitReportButton;
