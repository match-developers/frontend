/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from 'match/frontend/src/components/later/header-comp.js';
import ChangePictureButton from 'match/frontend/src/users/edit/components/EditProfile';
import UsernameInput from 'match/frontend/src/users/edit/components/EditUsername';
import BioInput from 'match/frontend/src/users/edit/components/EditBio';

const EditProfileScreen = () => {
  return (
    <View style={styles.screenContainer}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Header
          title="Edit Profile"
          onBackPress={() => console.log('Back Pressed')}
        />
      </View>

      {/* Change Picture Button */}
      <View style={styles.centeredContainer}>
        <ChangePictureButton
          uri="https://example.com/avatar.jpg"
          onPress={() => console.log('Change Picture Pressed')}
        />
      </View>

      {/* Username Input */}
      <View style={styles.centeredContainer}>
        <UsernameInput />
      </View>

      {/* Bio Input */}
      <View style={styles.centeredContainer}>
        <BioInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 32
  },
  headerContainer: {
    height: 48,
    width: '100%'
  },
  centeredContainer: {
    marginTop: 32,
    alignItems: 'center'
  }
});

export default EditProfileScreen;
