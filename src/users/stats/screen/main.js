// stats/main.js: Statistics screen displaying Social and Performance sections.

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from 'match/frontend/src/common/component/PageHeader'; // PageHeader component import
import Social from '../section/Social'; // Social section import
import Performance from '../section/Performance'; // Performance section import
import { useNavigation } from '@react-navigation/native'; // Navigation hook import

const StatsMain = () => {
  const navigation = useNavigation(); // Navigation hook for handling navigation

  return (
    <View style={styles.container}>
      {/* Header with back button navigating to User's Main screen */}
      <Header 
        title="Statistics" 
        onBackPress={() => navigation.navigate('Main')} 
      />

      {/* Scrollable content for Social and Performance sections */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.sectionContainer}>
          <Social /> {/* Social section */}
        </View>

        <View style={styles.sectionContainer}>
          <Performance /> {/* Performance section */}
        </View>
      </ScrollView>
    </View>
  );
};

// Styling for the Statistics screen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill available space
    backgroundColor: '#fff', // White background
  },
  scrollContainer: {
    paddingVertical: 16, // Vertical padding for scroll content
  },
  sectionContainer: {
    marginBottom: 24, // Space between sections
  },
});

export default StatsMain;