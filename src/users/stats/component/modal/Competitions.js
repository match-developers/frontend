/**
 * Competitions.js: Displays the user's competition history including leagues and tournaments.
 * This corresponds to the Competitions screen in the Figma design.
 * 
 * Features:
 * - PageHeader at the top with back navigation.
 * - Displays two sections: Leagues and Tournaments.
 * - Each section lists competition names and final results.
 * - Navigates to the competition post on item press.
 */

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // API request handling with Axios
import Header from 'match/frontend/src/common/component/PageHeader'; // PageHeader component

const API_URL = 'http://your-backend-url/user/<user_id>/statistics/'; // Backend API endpoint

const Competitions = () => {
  const navigation = useNavigation(); // Hook for navigation
  const [competitions, setCompetitions] = useState({ leagues: [], tournaments: [] }); // State to store competition data
  const [loading, setLoading] = useState(true); // Loading state

  /**
   * Fetches the user's competition data from the backend API.
   * Sets the data into the competitions state and stops the loading indicator.
   */
  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await axios.get(API_URL.replace('<user_id>', '1')); // Replace with actual user_id
        setCompetitions({
          leagues: response.data.leagues,
          tournaments: response.data.tournaments,
        });
      } catch (error) {
        console.error('Error fetching competition data:', error); // Error logging
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchCompetitions(); // Execute the fetch function
  }, []);

  /**
   * Handles navigation to the competition post screen when a competition item is pressed.
   * @param {number} competitionId - The ID of the selected competition.
   */
  const handlePress = (competitionId) => {
    navigation.navigate('CompetitionPost', { competitionId }); // Navigate to CompetitionPost screen
  };

  /**
   * Renders each competition item in the list.
   * Displays the competition name and final result.
   * @param {Object} item - Competition data containing name, result, and id.
   */
  const renderCompetitionItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.competitionItem}>
      <Text style={styles.competitionName}>{item.name}</Text>
      <Text style={styles.resultText}>{item.result}</Text>
    </TouchableOpacity>
  );

  // Display a loading indicator while fetching data
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      {/* Page header with back button */}
      <Header title="Competition History" onBackPress={() => navigation.navigate('StatsMain')} />

      <View style={styles.sectionContainer}>
        {/* Leagues section */}
        <Text style={styles.sectionTitle}>Leagues</Text>
        <FlatList
          data={competitions.leagues}
          renderItem={renderCompetitionItem}
          keyExtractor={(item) => item.id.toString()}
        />

        {/* Tournaments section */}
        <Text style={styles.sectionTitle}>Tournaments</Text>
        <FlatList
          data={competitions.tournaments}
          renderItem={renderCompetitionItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

// Styles for the Competitions screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background color
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center the loading indicator
  },
  sectionContainer: {
    paddingHorizontal: 16, // Horizontal padding for sections
    paddingVertical: 8, // Vertical padding for sections
  },
  sectionTitle: {
    fontSize: 24, // Font size for section titles
    fontWeight: 'bold', // Bold text for section titles
    textAlign: 'center', // Center alignment for section titles
    marginVertical: 12, // Vertical margin between sections
    color: '#000', // Black text color
  },
  competitionItem: {
    flexDirection: 'row', // Horizontal layout for competition items
    justifyContent: 'space-between', // Space between name and result
    alignItems: 'center', // Center alignment for items
    paddingVertical: 10, // Vertical padding for each item
    borderBottomWidth: 1, // Bottom border for item separation
    borderBottomColor: '#ccc', // Light gray border color
  },
  competitionName: {
    fontSize: 18, // Font size for competition names
    fontWeight: '600', // Semi-bold text for competition names
  },
  resultText: {
    fontSize: 16, // Font size for result text
    color: '#555', // Gray text color for results
  },
});

export default Competitions;