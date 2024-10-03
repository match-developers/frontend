import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import InboxIcon from 'match/frontend/assets/SVGs/default/IconInboxDefault'; // Adjust the path to your SVG

const InboxButton = ({ onPress, size = 24, color = '#000' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <InboxIcon width={size} height={size} fill={color} />
    </TouchableOpacity>
  );
};

InboxButton.propTypes = {
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

export default InboxButton;
