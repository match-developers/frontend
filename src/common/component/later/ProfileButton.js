//profile button is the tab bars profile tab button to view profile
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Profile from 'match/frontend/assets/SVGs/default/Profile';
import ProfileSelected from 'match/frontend/assets/SVGs/selected/ProfileSelected';

const ProfileButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {selected ? (
        <ProfileSelected width={36} height={36} />
      ) : (
        <Profile width={36} height={36} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 84,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProfileButton;
