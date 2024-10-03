/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import OverflowIcon from 'PS C:/Users/USER/Match/frontend/assets/SVGs/default/IconOverflowDefault'; // Adjust the path to your SVG

const OverflowButton = ({ onPress, size = 24, color = '#000' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <OverflowIcon width={size} height={size} fill={color} />
    </TouchableOpacity>
  );
};

OverflowButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
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
