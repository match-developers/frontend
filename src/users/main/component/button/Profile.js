//profile.js is an avatar with styles i chose for layout and size with a default grey circle but its ready to be an imge the user chooses. has an on press prop with no set fucntion yet
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// ProfileAvatar is now a clickable image with customizable props
const ProfileAvatar = ({ onPress, imageUri }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: imageUri }}
        style={styles.avatar}
        defaultSource={{ uri: null }} // Fallback if no image is provided
      />
    </TouchableOpacity>
  );
};

ProfileAvatar.propTypes = {
  onPress: PropTypes.func, // Optional onPress function
  imageUri: PropTypes.string // Optional imageUri for displaying the avatar
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 80, // Size of the avatar image
    height: 80,
    borderRadius: 40, // Circular image
    backgroundColor: '#D9D9D9', // Default background color
    borderColor: 'black',
    borderWidth: 1
  }
});

export default ProfileAvatar;
