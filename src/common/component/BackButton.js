import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import BackIcon from 'match/frontend/assets/SVGs/default/IconBackDefault';

//i created a back button and styled it then made it clickable
const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <BackIcon width={24} height={24} fill={'#000'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default BackButton;
