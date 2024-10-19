import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Navigation hook for navigating between screens
import axios from 'axios'; // Axios for making API calls
import BackButton from 'match/frontend/src/common/components/BackButton'; // Import BackButton component
import MannerBig from 'match/frontend/assets/SVGs/MannerBig'; // Import Heart icon

const MannerModal = ({ userId }) => {
  const navigation = useNavigation(); // Use navigation hook for handling navigation
  const [mannerScore, setMannerScore] = useState(null); // State to store manner score
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch the user's manner score from the backend
  useEffect(() => {
    const fetchMannerScore = async () => {
      try {
        const response = await axios.get(
          `http://your-backend-url/user/${userId}/statistics/`
        ); // Make API call to fetch user statistics
        setMannerScore(response.data.manner); // Set manner score from the response
      } catch (err) {
        setError('Failed to fetch manner score'); // Set error if fetching fails
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchMannerScore();
  }, [userId]); // Effect runs when userId changes

  // Handle BackButton press to close modal and navigate back to the previous screen
  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  // Show loading spinner while data is being fetched
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Show an error alert if there was an error fetching data
  if (error) {
    Alert.alert('Error', error); // Display error message
    return null;
  }

  return (
    <View style={styles.container}>
      {/* BackButton */}
      <BackButton onPress={handleBackPress} />

      {/* Manner score displayed with a large heart icon */}
      <View style={styles.mannerContainer}>
        <MannerBig width={250} height={225} style={styles.icon} />{' '}
        {/* Large heart icon */}
        <Text style={styles.ratingText}>
          {mannerScore !== null ? mannerScore.toFixed(1) : 'N/A'}
        </Text>{' '}
        {/* Manner score displayed over the heart icon */}
      </View>

      {/* Manner score description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          The Match Manners Rating is a reflection of how your club conducts
          itself on the app and in person. It is measured from fellow athletes
          reviewing your sportsmanship.
          {'\n'}The rating is out of 5.
        </Text>
      </View>
    </View>
  );
};

// Styles (Column worked on this styling part)
// Large heart icon with manner score displayed in the center, description box below
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', // Background color of the modal
    justifyContent: 'flex-start', // Align content to the top
    padding: 16 // Padding around the modal
  },
  mannerContainer: {
    alignItems: 'center', // Center the heart icon and manner score
    justifyContent: 'center',
    marginTop: 32 // Space at the top
  },
  icon: {
    position: 'relative' // Allows the score to be positioned over the icon
  },
  ratingText: {
    position: 'absolute', // Position the score on top of the heart icon
    fontSize: 50, // Large font size for the manner score
    fontWeight: 'bold',
    fontFamily: 'Exo 2', // Font family
    color: '#FFFFFF', // White color for text
    textAlign: 'center',
    top: '50%', // Position at the vertical center
    left: '50%', // Position at the horizontal center
    transform: [{ translateX: -25 }, { translateY: -25 }] // Center the text precisely within the heart
  },
  descriptionContainer: {
    marginTop: 100, // Space between heart and description
    paddingHorizontal: 16 // Horizontal padding for the description box
  },
  descriptionText: {
    fontSize: 25, // Font size for description text
    fontWeight: '400', // Regular font weight
    fontFamily: 'Exo 2', // Font family
    color: '#000000', // Text color: black
    textAlign: 'center' // Center the description text
  }
});

export default MannerModal;
