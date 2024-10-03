/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileAvatar from './ProfileAvatar'; // Assuming this is the ProfileAvatar component
import ReusableButton from './ReusableButton'; // Assuming this is the ReusableButton component

const ProfilePhotoContainer = () => {
  return (
    <View style={styles.container}>
      {/* Profile Avatar (160x160, unclickable) */}
      <View style={styles.avatarWrapper}>
        <ProfileAvatar uri="https://via.placeholder.com/160" />
      </View>

      {/* Change Photo Button */}
      <ReusableButton
        text="Change Photo"
        backgroundColor="#FFB43E"
        textColor="#FFFFFF"
        borderColor="#CC9029"
        width={200}
        height={48}
        borderRadius={8}
        fontSize={20}
        onPress={() => console.log('Change Photo pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8, // Top and bottom padding of 8px
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    width: '100%', // Stretch width-wise
  },
  avatarWrapper: {
    width: 160,
    height: 160,
    marginBottom: 24, // Space between avatar and button (24px)
    borderRadius: 80, // Ensure avatar remains circular
    backgroundColor: '#D9D9D9', // Default background color
  },
});

export default ProfilePhotoContainer;
