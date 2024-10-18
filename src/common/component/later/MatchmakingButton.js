//the matchmaking tab button. it is clickable, and has styling applied
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Matchmaking from 'match/frontend/assets/SVGs/default/Matchmaking';
import MatchmakingSelected from 'match/frontend/assets/SVGs/selected/MatchmakingSelected';

const MatchmakingButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {selected ? (
        <MatchmakingSelected width={36} height={36} />
      ) : (
        <Matchmaking width={36} height={36} />
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

export default MatchmakingButton;
