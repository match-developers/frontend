// button wiht no onpress function set yet, its for submitting the playstyle test
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const SubmitTestButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Submit Test</Text>
    </TouchableOpacity>
  );
};

SubmitTestButton.propTypes = {
  onPress: PropTypes.func // onClick prop with no set interaction
};

// custom styles
const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB433',
    borderColor: '#CC9029',
    borderWidth: 1,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Exo 2'
  }
});

export default SubmitTestButton;
