import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importing the navigation hook for handling navigation between screens
import IconOptionDefault from 'match/frontend/assets/SVGs/IconOptionDefault';  // Importing the option icon from assets

const UserOption = () => {
  const navigation = useNavigation();  // Hook to handle navigation between screens

  // Handle press event to navigate to UserOptionModal when the icon is clicked
  const handlePress = () => {
    navigation.navigate('UserOptionModal');  // Navigates to the modal when pressed
  };

  return (
    // TouchableOpacity wraps the icon to make it clickable and trigger navigation
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <IconOptionDefault width={24} height={24} />  {/* Option icon displayed in the top-right corner */}
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',  // Position the icon absolutely within the screen
    top: 10,  // Position the icon 10 units from the top
    right: 10,  // Position the icon 10 units from the right
    padding: 10,  // Add padding around the icon to increase the touchable area
  },
});

export default UserOption;