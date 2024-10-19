/**
 * Review.js: Displays a list of player reviews with expandable content for each review.
 * This corresponds to the Reviews modal in the Figma design.
 * 
 * Features:
 * - PageHeader component with back navigation.
 * - List of reviews with expandable "See more/See less" functionality.
 * - Navigates to the user's profile upon clicking the username or profile image.
 */

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // API request handling with Axios
import Header from 'match/frontend/src/common/component/PageHeader'; // PageHeader component

const API_URL = 'http://your-backend-url/user/<user_id>/statistics/'; // Backend API endpoint

const Review = () => {
  const navigation = useNavigation(); // Hook for navigation
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [loading, setLoading] = useState(true); // Loading state

  /**
   * Fetches the user's reviews from the backend API.
   * Sets the data into the reviews state and stops the loading indicator.
   */
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(API_URL.replace('<user_id>', '1')); // Replace with actual user_id
        setReviews(response.data.reviews); // Store reviews in state
      } catch (error) {
        console.error('Error fetching reviews:', error); // Error logging
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchReviews(); // Execute the fetch function
  }, []);

  /**
   * Handles navigation to the selected user's profile.
   * @param {number} userId - The ID of the selected user.
   */
  const handleUserPress = (userId) => {
    navigation.navigate('UserProfile', { userId }); // Navigate to the user profile screen
  };

  /**
   * Renders each review item.
   * Displays the username, profile image, club name, and the review text with "See more/See less".
   * @param {Object} item - Review data containing user info, review text, and more.
   */
  const renderReviewItem = ({ item }) => {
    const [expanded, setExpanded] = useState(false); // State to handle text expansion

    return (
      <View style={styles.reviewItem}>
        <TouchableOpacity onPress={() => handleUserPress(item.user.id)}>
          <View style={styles.userInfo}>
            <View style={styles.avatarContainer}>
              {/* Placeholder for user profile image */}
              <Text style={styles.avatarText}>{item.user.username[0]}</Text>
            </View>
            <View>
              <Text style={styles.username}>{item.user.username}</Text>
              <Text style={styles.clubName}>{item.club_name}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.reviewText} numberOfLines={expanded ? undefined : 3}>
          {item.text}
        </Text>

        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text style={styles.expandText}>{expanded ? 'Show less' : 'Show more'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Display a loading indicator while fetching data
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      {/* PageHeader with back navigation */}
      <Header title="Reviews" onBackPress={() => navigation.navigate('StatsMain')} />

      <FlatList
        data={reviews}
        renderItem={renderReviewItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

// Styles for the Reviews screen
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
  listContainer: {
    padding: 16, // Padding for the review list
  },
  reviewItem: {
    marginBottom: 16, // Margin between reviews
    padding: 12, // Padding for each review item
    backgroundColor: '#f9f9f9', // Light gray background for review item
    borderRadius: 8, // Rounded corners for review item
  },
  userInfo: {
    flexDirection: 'row', // Horizontal layout for user info
    alignItems: 'center', // Center-align the content
    marginBottom: 8, // Space between user info and review text
  },
  avatarContainer: {
    width: 40, // Fixed width for avatar
    height: 40, // Fixed height for avatar
    borderRadius: 20, // Circular avatar
    backgroundColor: '#ccc', // Placeholder gray background for avatar
    justifyContent: 'center', // Center the avatar content
    alignItems: 'center', // Center the avatar content
    marginRight: 12, // Space between avatar and text
  },
  avatarText: {
    fontSize: 20, // Font size for avatar text
    color: '#fff', // White text color for avatar
    fontWeight: 'bold', // Bold text for avatar
  },
  username: {
    fontSize: 16, // Font size for username
    fontWeight: '600', // Semi-bold font weight
  },
  clubName: {
    fontSize: 14, // Font size for club name
    color: '#777', // Gray color for club name
  },
  reviewText: {
    fontSize: 14, // Font size for review text
    color: '#333', // Darker gray for review text
    marginBottom: 8, // Margin below the review text
  },
  expandText: {
    fontSize: 12, // Font size for expand/collapse text
    color: '#0000ff', // Blue text for expand/collapse
    alignSelf: 'flex-end', // Align to the right side
  },
});

export default Review;