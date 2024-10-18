// this buttons goes in the newsfeed nav bar. it has a clickable porperty but no function yet. styling was all done by me
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Whistle from 'match/frontend/assets/SVGs/default/assets/SVGs/default/Whistle'; // Adjust the path to your SVG

const AssistantButton = ({ onPress, size = 24, color = '#000' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <Whistle width={size} height={size} fill={color} />
    </TouchableOpacity>
  );
};
//placeholder that is here for when you come along to give it logic. its saying that an onpress fucntion is required but not set
AssistantButton.propTypes = {
  onPress: PropTypes.func.isRequired
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
