/* eslint-disable prettier/prettier */
// ReusableButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

// The main ReusableButton component
function ReusableButton({
  text, // Text for the button
  SvgIcon, // The SVG component to be passed in
  onPress, // Function to handle button press
  backgroundColor = '#007BFF', // Background color of the button
  textColor = '#FFFFFF', // Color of the text
  borderColor = 'transparent', // Border color of the button
  width = 'auto', // Width of the button
  height = 48, // Height of the button
  borderRadius = 8, // Border radius of the button
  iconPosition = 'right', // Position of the icon ('right', 'left', 'top')
  fontSize = 16 // Font size for the text
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor,
          borderColor,
          borderRadius,
          width,
          height,
          flexDirection: iconPosition === 'top' ? 'column' : 'row', // Control the icon position
          borderWidth: borderColor !== 'transparent' ? 1 : 0
        }
      ]}
      onPress={onPress}
      activeOpacity={0.7} // Make the button visually responsive to touch
    >
      {/* Render Icon if SVG is provided */}
      {SvgIcon && iconPosition === 'left' && (
        <View style={styles.leftIcon}>
          <SvgIcon width={24} height={24} />
        </View>
      )}
      {SvgIcon && iconPosition === 'top' && (
        <View style={styles.topIcon}>
          <SvgIcon width={24} height={24} />
        </View>
      )}

      {/* Render Text if it exists */}
      {text && (
        <Text style={[styles.text, { color: textColor, fontSize }]}>
          {text}
        </Text>
      )}

      {/* Render Icon if SVG is provided and should be on the right */}
      {SvgIcon && iconPosition === 'right' && (
        <View style={styles.rightIcon}>
          <SvgIcon width={24} height={24} />
        </View>
      )}
    </TouchableOpacity>
  );
}

// Basic styles for the ReusableButton component
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: '600',
    fontFamily: 'Exo 2'
  },
  leftIcon: {
    marginRight: 8, // Moved from inline style
    justifyContent: 'center',
    alignItems: 'center'
  },
  topIcon: {
    marginBottom: 5, // Moved from inline style
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightIcon: {
    marginLeft: 8, // Moved from inline style
    justifyContent: 'center',
    alignItems: 'center'
  }
});

ReusableButton.propTypes = {
  text: PropTypes.string,
  SvgIcon: PropTypes.func, // Expecting an SVG component
  onPress: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.number,
  iconPosition: PropTypes.oneOf(['left', 'right', 'top']),
  fontSize: PropTypes.number
};

ReusableButton.defaultProps = {
  text: 'Click Me',
  backgroundColor: '#007AFF',
  textColor: '#FFF',
  borderRadius: 8
};

export default ReusableButton;
