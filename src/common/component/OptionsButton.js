import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import OverflowIcon from 'match/frontend/assets/SVGs/default/IconOverflowDefault'; // Correct SVG file path

const OverflowButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <OverflowIcon width={24} height={24} fill={'#000'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OverflowButton;
