/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import OptionsIcon from 'match/frontend/assets/SVGs/default/IconOptionsDefault'; // Correct SVG file path

const OptionsButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <OptionsIcon width={24} height={24} fill={'#000'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default OptionsButton;
