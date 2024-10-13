// attach screenshot button just text and an attach svg icon. no border, grey background
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AttachIcon from 'match/frontend/assets/SVGs/Attach.svg'; // Importing the actual Attach SVG

const AttachPhotoButton = () => {
  return (
    <View style={styles.button}>
      {/* Text centrally aligned with 16px left margin */}
      <Text style={styles.buttonText}>Attach Photo</Text>
      {/* Attach SVG icon on the right */}
      <AttachIcon width={24} height={24} style={styles.icon} />
    </View>
  );
};

// Custom styles
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', // Align text and icon in a row
    alignItems: 'center', // Vertically align the text and the SVG icon
    paddingHorizontal: 8, // Horizontal padding inside the button
    paddingVertical: 8, // Vertical padding inside the button
    backgroundColor: '#D9D9D9', // Fill color
    borderRadius: 5, // Slightly rounded corners
    alignSelf: 'flex-start' // Button will hug its content width-wise
  },
  buttonText: {
    fontSize: 20, // Set font size to 20pt
    color: '#000', // Text color
    fontFamily: 'Exo 2', // Font family
    textAlign: 'center', // Center the text
    marginLeft: 16 // Add 16px margin to the left for balance
  },
  icon: {
    marginLeft: 8 // 8px space between the text and the SVG icon
  }
});

export default AttachPhotoButton;
