// this is the edit button over the profile.js avatar and making the whole thign clickable. i customised the styling and made it clickable
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileAvatar from './Profile';
import Edit from 'match/frontend/assets/SVGs/default/Edit';

const ChangePictureButton = ({ uri, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* Profile Avatar */}
      <ProfileAvatar uri={uri} />

      {/* Edit Icon in top-right corner */}
      <View style={styles.editIconContainer}>
        <Edit width={16} height={16} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 80,
    height: 80
  },
  editIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ChangePictureButton;
