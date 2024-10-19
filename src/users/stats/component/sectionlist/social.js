// Social.js: Displays the Social section of the user's statistics.
// It contains three main subsections: Followers & Following, Clubs, and Competitions,
// each navigating to their respective modals upon click.

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Navigation hook for screen transitions

const Social = () => {
  const navigation = useNavigation(); // Navigation instance

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Social</Text> {/* Section title */}

      {/* Divider Line */}
      <View style={styles.divider} /> {/* Horizontal line separating the title and sections */}

      {/* Followers & Following Section */}
      <TouchableOpacity 
        style={styles.section} 
        onPress={() => navigation.navigate('FollowsModal')} // Navigate to FollowsModal
      >
        <Text style={styles.sectionText}>Followers & Following</Text>
      </TouchableOpacity>

      {/* Clubs Section */}
      <TouchableOpacity 
        style={styles.section} 
        onPress={() => navigation.navigate('ClubsModal')} // Navigate to ClubsModal
      >
        <Text style={styles.sectionText}>Clubs</Text>
      </TouchableOpacity>

      {/* Competitions Section */}
      <TouchableOpacity 
        style={styles.section} 
        onPress={() => navigation.navigate('CompetitionsModal')} // Navigate to CompetitionsModal
      >
        <Text style={styles.sectionText}>Competitions</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Social component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container fills the available space
    backgroundColor: '#fff', // White background for the section
    padding: 16, // Padding around the container
  },
  title: {
    fontSize: 24, // Large font size for the title
    fontWeight: 'bold', // Bold weight for emphasis
    textAlign: 'center', // Center-align the title
    marginBottom: 16, // Margin below the title
  },
  divider: {
    height: 1, // Thin horizontal line
    backgroundColor: '#ccc', // Light grey color for the divider
    marginVertical: 12, // Margin above and below the divider
  },
  section: {
    paddingVertical: 12, // Vertical padding for each section item
    borderBottomWidth: 1, // Bottom border for separation
    borderBottomColor: '#eee', // Light border color for the bottom border
  },
  sectionText: {
    fontSize: 18, // Font size for section text
    color: '#000', // Black color for text
  },
});

export default Social;