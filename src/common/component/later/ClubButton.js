import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ClubIcon from 'match/frontend/assets/SVGs/default/IconClub';
import ClubIconSelected from 'match/frontend/assets/SVGs/selected/IconClubSelected';

const ClubButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {selected ? (
        <ClubIconSelected width={36} height={36} />
      ) : (
        <ClubIcon width={36} height={36} />
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

export default ClubButton;
