// UserBio.js: Displays the user's bio text fetched from the backend.

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';  // For API calls

const UserBio = ({ userId }) => {
  const [bio, setBio] = useState('');  // State to store bio text
  const [loading, setLoading] = useState(true);  // State to manage loading status
  const [error, setError] = useState(null);  // State to store any error message

  // Fetches the user's bio text from the backend using the userId prop.
  useEffect(() => {
    const fetchUserBio = async () => {
      try {
        const response = await axios.get(`http://your-backend-url/user/${userId}/`);  // API call to get user data
        setBio(response.data.bio || 'No bio provided.');  // Set bio or fallback text
      } catch (err) {
        setError('Failed to load bio');  // Handle error
      } finally {
        setLoading(false);  // End loading
      }
    };

    fetchUserBio();
  }, [userId]);  // Runs whenever userId changes

  // If data is still loading, show a spinner.
  if (loading) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  // If an error occurs, show an alert.
  if (error) {
    Alert.alert('Error', error);
  }

  // Displays the user's bio text within a styled container.
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{bio}</Text>
    </View>
  );
};

// Styles applied to the UserBio component (Converted from Figma design)
const styles = StyleSheet.create({
  container: {
    padding: 8,  // Adds padding around the content
  },
  text: {
    fontSize: 13,  // Sets font size for the bio text
    fontWeight: '400',  // Regular font weight
    fontFamily: 'Exo 2',  // Font family used in Figma design
    color: '#000000',  // Black text color
  }
});

export default UserBio;