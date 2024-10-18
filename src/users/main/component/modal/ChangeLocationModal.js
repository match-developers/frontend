// ChangeLocationModal.js
// This component is a modal for changing the user's location.
// It includes a search bar for the user to input a location, a map displaying the selected location with a pin, and buttons to confirm or cancel the location change.
// The component interacts with the Google Maps API to convert the location input into coordinates and sends the updated location to the backend.

import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios for API calls
import BackButton from 'match/frontend/src/common/components/BackButton'; // Import the common BackButton component

const ChangeLocationModal = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for storing the search query
  const [location, setLocation] = useState(null); // State for storing the selected location's coordinates
  const [loading, setLoading] = useState(false); // State for handling loading status
  const [error, setError] = useState(null); // State for handling error messages
  const [saving, setSaving] = useState(false); // State for saving location data
  const navigation = useNavigation(); // Hook for handling navigation between screens

  // Function to fetch coordinates from Google Maps Geocoding API
  const getCoordinates = async address => {
    const apiKey = 'AIzaSyCBzIf-rYBAh2I-PSn8iENxo2DEkS-q0ts'; // Your Google Maps API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
      setLoading(true); // Start loading
      setError(null); // Reset error state
      const response = await axios.get(url); // Make a request to the Geocoding API
      if (response.data.status === 'OK') {
        const { lat, lng } = response.data.results[0].geometry.location; // Extract latitude and longitude from the response
        setLocation({ latitude: lat, longitude: lng }); // Update location state with the coordinates
      } else {
        setError('Location not found'); // Set error state if location not found
      }
    } catch (error) {
      setError('Error fetching location'); // Handle any errors during the API call
    } finally {
      setLoading(false); // End loading
    }
  };

  // Function to save the selected location to the backend
  const saveLocation = async () => {
    if (!location) {
      Alert.alert('Error', 'No location selected'); // Alert user if no location is selected
      return;
    }

    try {
      setSaving(true); // Start saving process
      const response = await axios.put(
        'http://your-backend-url/user/profile/edit/', // Backend URL to save location data
        {
          location: {
            type: 'Point',
            coordinates: [location.longitude, location.latitude] // Send coordinates in GeoJSON format
          }
        },
        {
          headers: {
            Authorization: 'Bearer your-auth-token', // Add authentication token
            'Content-Type': 'application/json' // Set content type to JSON
          }
        }
      );

      if (response.status === 200) {
        Alert.alert('Success', 'Location updated successfully'); // Show success message if location is saved
        navigation.navigate('MainScreen'); // Navigate back to the main screen
      } else {
        setError('Failed to update location'); // Set error state if location update fails
      }
    } catch (error) {
      console.error('Error saving location:', error); // Log the error
      setError('Error saving location'); // Set error state for saving failure
    } finally {
      setSaving(false); // End saving process
    }
  };

  // Handle search input and fetch location coordinates
  const handleSearch = query => {
    setSearchQuery(query); // Update the search query state
    if (query.length > 0) {
      getCoordinates(query); // Fetch coordinates for the inputted location
    }
  };

  // Confirm the selected location and save it to the backend
  const confirmLocation = () => {
    saveLocation(); // Call saveLocation function to save the selected coordinates
  };

  return (
    <View style={styles.container}>
      {/* Back button to return to the main screen */}
      <BackButton onPress={() => navigation.navigate('MainScreen')} />

      {/* Search bar for user to input location */}
      <TextInput
        style={styles.searchBar}
        placeholder="Enter location"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Map to display the selected location */}
      <View style={styles.mapContainer}>
        {loading ? ( // Show loading spinner if fetching location data
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.7749, // Default location coordinates (Seoul)
              longitude: 126.978,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
            region={
              location
                ? { ...location, latitudeDelta: 0.01, longitudeDelta: 0.01 }
                : null
            }
          >
            {location && <Marker coordinate={location} />} // Display a marker
            at the selected location
          </MapView>
        )}
      </View>

      {/* Error message if any */}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* Buttons for confirming or canceling the location change */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={confirmLocation}
          disabled={saving}
        >
          <Text style={styles.buttonTextConfirm}>
            {saving ? 'Saving...' : 'Confirm'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.navigate('MainScreen')}
        >
          <Text style={styles.buttonTextCancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the component, including layout and button designs
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 16,
    justifyContent: 'flex-start'
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16
  },
  mapContainer: {
    flex: 1,
    marginBottom: 16,
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 320,
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center'
  },
  confirmButton: {
    backgroundColor: '#ffb433',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: '#cc9029'
  },
  cancelButton: {
    backgroundColor: '#E6E6E6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: '#737373'
  },
  buttonTextConfirm: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonTextCancel: {
    color: '#737373',
    fontSize: 16,
    fontWeight: 'bold'
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center'
  }
});

export default ChangeLocationModal;
