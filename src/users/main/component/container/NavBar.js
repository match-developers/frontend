//* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Import OptionsButton from the correct path
import OptionsButton from 'match/frontend/src/common/components/OptionsButton';

const NavBar = () => {
  return (
    <View style={styles.navBarContainer}>
      {/* Logo - wrapped with TouchableOpacity to make it clickable */}
      <TouchableOpacity onPress={() => console.log('Logo Pressed')}>
        <Text style={styles.logo}>Match</Text>
      </TouchableOpacity>

      {/* OptionsButton - assuming it already has its own press logic */}
      <OptionsButton onPress={() => console.log('Options Pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#F5F5F5'
  },
  logo: {
    fontSize: 32,
    fontFamily: 'Exo 2',
    fontWeight: '600',
    color: '#000'
  }
});

export default NavBar;
