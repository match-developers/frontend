// club button is just an image that is has set shape and size, and a default of a grey circle.
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

//its defined as a clickable image.
const ClubButton = ({ onPress, imageUri }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: imageUri }}
        style={styles.clubImage}
        defaultSource={{ uri: null }}
      />
    </TouchableOpacity>
  );
};

ClubButton.propTypes = {
  onPress: PropTypes.func, // Optional onPress function for interaction if needed later
  imageUri: PropTypes.
  
//i customised the styling
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  clubImage: {
    width: 36, // Size of the button image
    height: 36,
    borderRadius: 18, // Circular image
    backgroundColor: '#D9D9D9', // Default background color
    borderColor: 'black',
    borderWidth: 1
  }
});

export default ClubButton;
