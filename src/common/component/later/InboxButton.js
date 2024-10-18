// this goes in the matchmaking nav bar and the sportsground nav bar its just a pressabel inbox icon. i
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Inbox from 'match/frontend/assets/SVGs/default/Inbox'; // Adjust the path to your SVG

const InboxButton = ({ onPress, size = 24, color = '#000' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <Inbox width={size} height={size} fill={color} />
    </TouchableOpacity>
  );
};
//placeholder that is here for when you come along to give it logic. its saying that an onpress fucntion is required but not set
InboxButton.propTypes = {
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default InboxButton;
