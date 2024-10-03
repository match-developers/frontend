/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileAvatar = ({ uri, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{ uri }}
        style={styles.avatar}
        defaultSource={{ uri: null }} // Default background color if no image is selected
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circular mask
    backgroundColor: '#D9D9D9', // Default background color
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default ProfileAvatar;

// Comment: If any SVGs are needed, they'll be added later.
