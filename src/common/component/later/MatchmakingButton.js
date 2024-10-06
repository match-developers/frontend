import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import MatchmakingIcon from 'match/frontend/assets/SVGs/default/IconMatchmaking';
import MatchmakingIconSelected from 'match/frontend/assets/SVGs/selected/IconMatchmakingSelected';

const MatchmakingButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {selected ? (
        <MatchmakingIconSelected width={36} height={36} />
      ) : (
        <MatchmakingIcon width={36} height={36} />
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
