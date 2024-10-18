//this is a chevron (arrow without tail)
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ChevronRight from 'match/frontend/assets/SVGs/default/ChevronRight'; // Importing the ChevronRight SVG

const ChevronRightButton = ({ onPress, style = {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.iconContainer, style]}
      activeOpacity={0.7}
    >
      <ChevronRight width={24} height={24} fill={'#000'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 40, // Expand the touchable area
    height: 40, // Expand the touchable area
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Rounded button
    backgroundColor: '#f0f0f0' // Default background color
  }
});

export default ChevronRightButton;
