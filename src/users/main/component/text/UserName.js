// UserName.js: Displays the user's username fetched from the backend.

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';  // For API calls

const UserName = ({ userId }) => {
  const [username, setUsername] = useState('');  // State to store username
  const [loading, setLoading] = useState(true);  // Loading state management
  const [error, setError] = useState(null);  // Error handling state

  // Fetches the user's username from the backend using the userId prop.
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get(`http://your-backend-url/user/${userId}/`);  // API call to get user data
        setUsername(response.data.username || 'Unknown User');  // Set username or fallback text
      } catch (err) {
        setError('Failed to load username');  // Handle error
      } finally {
        setLoading(false);  // End loading
      }
    };

    fetchUserName();
  }, [userId]);  // Runs whenever userId changes

  // If data is still loading, show a spinner.
  if (loading) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  // If an error occurs, show an alert.
  if (error) {
    Alert.alert('Error', error);
  }

  // Displays the user's username within a styled container.
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{username}</Text>
    </View>
  );
};

// Styles applied to the UserName component (from Figma design)
const styles = StyleSheet.create({
  container: {
    padding: 8,  // Adds padding around the content
  },
  text: {
    fontSize: 20,  // Sets font size for the username
    fontWeight: '400',  // Regular font weight
    fontFamily: 'Exo 2',  // Font family used in Figma design
    color: '#000000',  // Black text color
  }
});

export default UserName;