// the explore button fo rthe tab bar. its clickable and has styling applied.
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Explore from 'match/frontend/assets/SVGs/default/Explore';
import ExploreSelected from 'match/frontend/assets/SVGs/selected/ExploreSelected';
const ExploreButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {selected ? (
        <ExploreSelected width={36} height={36} />
      ) : (
        <Explore width={36} height={36} />
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

export default ExploreButton;
