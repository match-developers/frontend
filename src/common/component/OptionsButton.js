import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Options from 'match/frontend/assets/SVGs/default/Options';

//i created an options button and styled it then made it clickable
const OptionsButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <Options width={24} height={24} fill={'#000'} />
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

export default OptionsButton;
