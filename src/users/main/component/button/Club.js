/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const ClubAvatar = ({ uri, onPress }) => {
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
    width: 36,
    height: 36,
    borderRadius: 18, // Circular mask
    backgroundColor: '#D9D9D9', // Default background color
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default ClubAvatar;


