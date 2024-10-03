import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import CreateIcon from 'match/frontend/assets/SVGs/default/IconCreateDefault'; // Adjust the path to your SVG

const CreateButton = ({ onPress, size = 24, color = '#000' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <CreateIcon width={size} height={size} fill={color} />
    </TouchableOpacity>
  );
};

CreateButton.propTypes = {
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

export default CreateButton;
