import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios for API calls
import MannerProfile from 'match/frontend/assets/SVGs/default/MannerProfile'; // Import the heart icon

const MannerIcon = ({ userId }) => {
  const [mannerScore, setMannerScore] = useState(null); // State to store manner score
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle error
  const navigation = useNavigation(); // Hook for navigation

  // Fetch the user's manner score from the backend
  useEffect(() => {
    const fetchMannerScore = async () => {
      try {
        const response = await axios.get(
          `http://your-backend-url/user/${userId}/statistics/`
        ); // API call to get user statistics
        setMannerScore(response.data.manner); // Set manner score from the response
      } catch (err) {
        setError('Failed to fetch manner score'); // Handle error
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchMannerScore();
  }, [userId]);

  // Handle icon press event
  const handlePress = () => {
    navigation.navigate('MannerModal'); // Navigate to the MannerModal screen
  };

  if (loading) {
    return <ActivityIndicator size="small" color="#0000ff" />; // Show loading indicator while fetching data
  }

  if (error) {
    Alert.alert('Error', error); // Show error if data fetching failed
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <MannerProfile width={36} height={36} fill="#ff6b6b" />{' '}
        {/* Heart icon */}
        <Text style={styles.ratingText}>
          {mannerScore !== null ? mannerScore.toFixed(2) : 'N/A'}
        </Text>{' '}
        {/* Manner score */}
      </View>
    </TouchableOpacity>
  );
};

// Styles (with Column's code)
const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    position: 'relative' // Ensures text is positioned on top of the icon
  },
  ratingText: {
    position: 'absolute', // Positioning text over the heart icon
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Exo 2',
    textAlign: 'center'
  }
});

export default MannerIcon;
