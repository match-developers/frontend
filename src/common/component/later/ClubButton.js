//the club tab button. it is clickable and has styling applied
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Club from 'match/frontend/assets/SVGs/default/Club';
import ClubSelected from 'match/frontend/assets/SVGs/selected/ClubSelected';

const ClubButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {selected ? (
        <ClubSelected width={36} height={36} />
      ) : (
        <Club width={36} height={36} />
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
