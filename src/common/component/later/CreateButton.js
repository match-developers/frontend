//this button is just a plus '+' that is clickable. used in places like community post, create match
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
//placeholder that is here for when you come along to give it logic. its saying that an onpress fucntion is required but not set
CreateButton.propTypes = {
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

export default CreateButton;
