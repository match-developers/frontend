import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const BioInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bio</Text>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth - 32 // Full width minus some padding (for example)
  },
  label: {
    fontSize: 20,
    fontFamily: 'Exo 2',
    flex: 1, // Label hugs the left
    textAlign: 'left'
  },
  underline: {
    flex: 2, // Input area stretches to the right
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  }
});

export default BioInput;
