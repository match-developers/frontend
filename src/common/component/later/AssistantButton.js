/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import WhistleIcon from 'match/frontend/assets/SVGs/default/assets/SVGs/default/IconWhistleDefault'; // Adjust the path to your SVG

const AssistantButton = ({ onPress, size = 24, color = '#000' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <WhistleIcon width={size} height={size} fill={color} />
    </TouchableOpacity>
  );
};

AssistantButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AssistantButton;
