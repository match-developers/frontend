/**
 * Clubs.js: This component corresponds to the "Club History" section from the Figma design.
 * It displays a list of the user's previous and current club memberships, including the club's name, profile picture, 
 * and the dates the user joined and left each club. The user can navigate to individual club profiles by clicking 
 * on a club from the list.
 */

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Axios is used for API requests
import Header from 'match/frontend/src/common/component/PageHeader'; // Header component for page navigation

const API_URL = 'http://your-backend-url/user/<user_id>/statistics/'; // Club history API endpoint

/**
 * Clubs Component: Displays the user's club history with navigation functionality.
 */
const Clubs = () => {
  const navigation = useNavigation(); // Navigation hook to manage screen transitions
  const [clubHistory, setClubHistory] = useState([]); // State for storing club data
  const [loading, setLoading] = useState(true); // State for loading indicator

  /**
   * Fetches the user's club history from the backend API.
   * On success, the club data is saved to the `clubHistory` state.
   */
  useEffect(() => {
    const fetchClubHistory = async () => {
      try {
        const response = await axios.get(API_URL.replace('<user_id>', '1')); // Temporarily using user_id = 1
        setClubHistory(response.data.previous_clubs); // Store the fetched club list in state
      } catch (error) {
        console.error('Error fetching club history:', error); // Log errors if the request fails
      } finally {
        setLoading(false); // Stop the loading indicator
      }
    };

    fetchClubHistory(); // Trigger the data fetch on component mount
  }, []);

  /**
   * Handles navigation to the selected club's profile screen.
   * @param {number} clubId - The ID of the selected club.
   */
  const handleClubPress = (clubId) => {
    navigation.navigate('ClubMain', { clubId }); // Navigate to the club's profile screen
  };

  /**
   * Renders each club item in the list with its name and membership dates.
   * @param {Object} item - Club object containing details like name, joined_date, and left_date.
   */
  const renderClubItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleClubPress(item.id)} style={styles.clubItem}>
      <View style={styles.clubInfo}>
        <Text style={styles.clubName}>{item.name}</Text>
        <Text style={styles.dateText}>
          Joined: {item.joined_date} | Left: {item.left_date || 'Present'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  /**
   * Displays a loading indicator while data is being fetched.
   */
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Club History" onBackPress={() => navigation.navigate('StatsMain')} /> 
      <FlatList
        data={clubHistory}
        renderItem={renderClubItem}
        keyExtractor={(item) => item.id.toString()} // Use the club ID as the key
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

// Styling for the Clubs component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the component takes the full screen height
    backgroundColor: '#fff', // Set the background color to white
  },
  loading: {
    flex: 1, // Center the loading indicator
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 16, // Add padding to the list container
  },
  clubItem: {
    flexDirection: 'row', // Align items in a horizontal row
    justifyContent: 'space-between', // Distribute space between elements
    alignItems: 'center', // Align items vertically in the center
    paddingVertical: 10, // Add vertical padding
    borderBottomWidth: 1, // Add a bottom border
    borderBottomColor: '#ccc', // Set border color to light grey
  },
  clubInfo: {
    flex: 1, // Allow the club info to take available space
  },
  clubName: {
    fontSize: 16, // Set font size for the club name
    fontWeight: '600', // Use semi-bold font weight
  },
  dateText: {
    fontSize: 12, // Set font size for the date text
    color: '#777', // Use grey color for the text
  },
});

export default Clubs;