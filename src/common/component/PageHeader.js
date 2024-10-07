import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BackButton from 'match/frontend/src/common/component/BackButton';

const Header = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <BackButton onPress={onBackPress} />

      {/* Render the title only if it's provided */}
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};
//the back button needs to be present and have a function but the title can be empty
Header.propTypes = {
  title: PropTypes.string,
  onBackPress: PropTypes.func.isRequired
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
