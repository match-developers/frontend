// no need for take test. if a user with no playstle click on playstyle it will open the test screen

//heres code for it just in case:
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TakeTestButton = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>Take Test</Text>
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
    backgroundColor: '#FFB433', // Background color
    borderColor: '#CC9029', // Border color
    borderWidth: 1,
    borderRadius: 5 // Optional: adds a slight curve to corners
  },
  buttonText: {
    fontSize: 20,
    color: '#000', // Text color
    fontFamily: 'Exo 2' // Font family
  }
});

export default TakeTestButton;
