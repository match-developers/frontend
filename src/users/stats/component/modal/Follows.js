import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from 'match/frontend/src/common/component/PageHeader'; 
import axios from 'axios'; // Axios for API requests

/**
 * Follows: Renders a modal for displaying the follower and following lists.
 */
const Follows = () => {
  const [isFollowersSelected, setIsFollowersSelected] = useState(true); // Toggle state for followers/following
  const [followers, setFollowers] = useState([]); // State to store the list of followers
  const [following, setFollowing] = useState([]); // State to store the list of following
  const [loading, setLoading] = useState(true); // Loading state for API call
  const navigation = useNavigation(); // Navigation hook

  /**
   * Fetches followers and following lists from the backend.
   * Executes on component mount.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = 1; // Replace with dynamic user ID if needed
        const followersResponse = await axios.get(`/user/${userId}/follow/`); // API call for followers
        const followingResponse = await axios.get(`/user/${userId}/follow/?type=following`); // API call for following

        setFollowers(followersResponse.data.followers); // Store followers data
        setFollowing(followingResponse.data.following); // Store following data
      } catch (error) {
        console.error('Error fetching follow data:', error); // Error handling
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchData(); // Trigger data fetch
  }, []);

  /**
   * Navigates to the user profile screen for the selected user.
   * @param {number} userId - The ID of the selected user.
   */
  const handleUserPress = (userId) => {
    navigation.navigate('UserProfile', { userId }); // Navigate to the user profile screen
  };

  /**
   * Renders the list of users (followers or following).
   * @param {Array} list - List of user objects.
   */
  const renderList = (list) =>
    list.map((user) => (
      <TouchableOpacity 
        key={user.id} 
        style={styles.userContainer} 
        onPress={() => handleUserPress(user.id)} // Navigate to the selected user's profile
      >
        <Image source={{ uri: user.profile_photo }} style={styles.profileImage} /> {/* Display user profile photo */}
        <Text style={styles.username}>{user.username}</Text> {/* Display user username */}
      </TouchableOpacity>
    ));

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" /> {/* Loading indicator */}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Page Header with back navigation */}
      <Header 
        title="Followers & Following" 
        onBackPress={() => navigation.navigate('StatsMain')} 
      />

      {/* Toggle buttons for followers and following lists */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity 
          style={[styles.toggleButton, isFollowersSelected && styles.selectedButton]}
          onPress={() => setIsFollowersSelected(true)} // Set to followers
        >
          <Text style={styles.toggleButtonText}>Followers</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.toggleButton, !isFollowersSelected && styles.selectedButton]}
          onPress={() => setIsFollowersSelected(false)} // Set to following
        >
          <Text style={styles.toggleButtonText}>Following</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable list for displaying followers or following */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {isFollowersSelected ? renderList(followers) : renderList(following)}
      </ScrollView>
    </View>
  );
};

// **Styles for Follows Component**
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff', // White background color
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center the loading indicator
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the toggle buttons horizontally
    marginVertical: 16, // Vertical margin around the toggle container
  },
  toggleButton: {
    flex: 1, // Each button takes equal space
    paddingVertical: 12, // Vertical padding for each button
    borderWidth: 1,
    borderColor: '#000', // Black border color
    justifyContent: 'center',
    alignItems: 'center', // Center the button content
  },
  selectedButton: {
    backgroundColor: '#F0F0F0', // Highlight the selected button
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold', // Bold text for the button
  },
  listContainer: {
    paddingHorizontal: 16, // Horizontal padding around the list
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items in the row
    paddingVertical: 8, // Vertical padding for each user row
    borderBottomWidth: 1,
    borderBottomColor: '#CCC', // Light gray bottom border
  },
  profileImage: {
    width: 40, // Width of the profile image
    height: 40, // Height of the profile image
    borderRadius: 20, // Circular profile image
    marginRight: 12, // Margin between image and text
  },
  username: {
    fontSize: 16, // Font size for the username
  },
});

export default Follows;