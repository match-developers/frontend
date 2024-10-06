import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BackButton from 'match/frontend/src/common/component/BackButton';

const Header = ({ title = 'Manners', onBackPress }) => {
  return (
    <View style={styles.container}>
      <BackButton onPress={onBackPress} />

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string, // Title for the header
  onBackPress: PropTypes.func.isRequired // Function for back button press
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#FFF',
    paddingHorizontal: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1
  }
});

export default Header;
