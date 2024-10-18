import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from 'match/frontend/src/common/component/later/BackButton'; // Importing BackButton

const SettingsMain = () => {
  const navigation = useNavigation(); // Initialize navigation hook

  return (
    <View style={styles.container}>
      {/* Header Section: Back Button and Title */}
      <View style={styles.header}>
        <BackButton onPress={() => navigation.navigate('UserMain')} /> 
        <Text style={styles.headerText}>Settings</Text> 
      </View>

      {/* Account Management Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('AccountModal')} 
      >
        <Text style={styles.sectionText}>Account Management</Text> 
      </TouchableOpacity>

      {/* Terms & Conditions Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('SupportModal')} 
      >
        <Text style={styles.sectionText}>Terms & Conditions</Text> 
      </TouchableOpacity>
    </View>
  );
};

// Styles applied to components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fullscreen layout
    backgroundColor: '#FFFFFF', // White background
    padding: 16, // Outer padding
  },
  header: {
    flexDirection: 'row', // Align elements horizontally
    alignItems: 'center', // Center-align items vertically
    marginBottom: 20, // Spacing below the header
  },
  headerText: {
    fontSize: 24, // Font size for the header text
    fontWeight: 'bold', // Bold font for emphasis
    marginLeft: 16, // Space between back button and text
  },
  section: {
    paddingVertical: 15, // Vertical padding for sections
    borderBottomWidth: 1, // Bottom border width
    borderBottomColor: '#E0E0E0', // Light gray border color
  },
  sectionText: {
    fontSize: 18, // Font size for section text
    fontWeight: '400', // Normal font weight
  },
});

export default SettingsMain;