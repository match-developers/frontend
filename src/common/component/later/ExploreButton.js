import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ExploreIcon from 'match/frontend/assets/SVGs/default/IconExplore';
import ExploreIconSelected from 'match/frontend/assets/SVGs/selected/IconExploreSelected';

const ExploreButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {selected ? (
        <ExploreIconSelected width={36} height={36} />
      ) : (
        <ExploreIcon width={36} height={36} />
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
