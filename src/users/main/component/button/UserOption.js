//user option that uses common/Option.js//
import React from 'react';
import { View, StyleSheet } from 'react-native';
import OptionsButton from './OptionsButton'; // Importing OptionsButton

const UserOptions = () => {
  return (
    <View style={styles.container}>
      <OptionsButton onPress={() => console.log('Options button clicked')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2'
  }
});

export default UserOptions;
