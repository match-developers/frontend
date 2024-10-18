import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StatsSelected from 'match/frontend/assests/SVGs/selected/StatsSelected';

// stats button with a label below that has no set onpress fucntion
const StatsButton = ({ label = 'Statistics', onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <StatsSelected width={22} height={26} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

//i did all the styling
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    width: 32,
    height: 36,
    borderRadius: 10,
    borderWidth: 1.3,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  label: {
    marginTop: 4,
    fontSize: 20,
    fontFamily: 'Exo 2',
    fontWeight: '400',
    color: '#000',
    textAlign: 'center'
  }
});

export default StatsButton;
