import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import NotificationIcon from 'match/frontend/assets/SVGs/default/IconBellDefault'; // Adjust the path to your SVG
//notification button is a bell icon. belongs in the newsfeed nav bar
const NotificationButton = ({ onPress, size = 24, color = '#000' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <NotificationIcon width={size} height={size} fill={color} />
    </TouchableOpacity>
  );
};
//placeholder that is here for when you come along to give it logic. its saying that an onpress fucntion is required but not set
NotificationButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default NotificationButton;
