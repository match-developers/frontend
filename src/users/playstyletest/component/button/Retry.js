//a button that syas retake test. has on press prop, no other interactions
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const RetakeTestButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Retake Test</Text>
    </TouchableOpacity>
  );
};

RetakeTestButton.propTypes = {
  onPress: PropTypes.func // onClick prop with no set interaction
};
//custom styles
const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB433', // Background color
    borderColor: '#CC9029', // Border color
    borderWidth: 1,
    borderRadius: 5 // Optional: adds a slight curve to corners
  },
  buttonText: {
    fontSize: 20,
    color: '#000', // Text color
    fontFamily: 'Exo 2' // Font family
  }
});

export default RetakeTestButton;
