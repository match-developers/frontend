import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ProfileIcon from 'match/frontend/assets/SVGs/default/IconProfile';
import ProfileIconSelected from 'match/frontend/assets/SVGs/selected/IconProfileSelected';

const ProfileButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {selected ? (
        <ProfileIconSelected width={36} height={36} />
      ) : (
        <ProfileIcon width={36} height={36} />
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
