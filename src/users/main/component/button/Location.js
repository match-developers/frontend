import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';

const LocationLabel = ({
  location = 'Location, max of 30 characters',
  onPress
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.locationText}>
          {location.length > 30 ? location.substring(0, 30) + '...' : location}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', // Fill container width
    alignItems: 'flex-start' // Ensure left alignment
  },
  locationText: {
    fontSize: 13,
    fontWeight: '600', // Semi-bold
    fontFamily: 'Exo 2',
    color: '#000000',
    textAlign: 'left' // Explicit left-alignment
  }
});

export default LocationLabel;
