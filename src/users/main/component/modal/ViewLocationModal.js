// This modal is displayed when a user clicks on their location from the main screen.
// It includes a map showing the user's current location, a "Change Location" button (only for authorized users), and a back button to navigate back.

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BackButton from './BackButton'; // BackButton for returning to the main screen
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';  // Axios to fetch user location data from the backend

const ViewLocationModal = () => {
    const [location, setLocation] = useState(null);  // State for storing user's location (latitude, longitude)
    const [isOwner, setIsOwner] = useState(false);  // State for checking if the user has permission to change the location
    const navigation = useNavigation();

    // Fetch user location data from the backend when the component is mounted
    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get('/user/profile/edit/');  // API call to get user profile
                if (response.data && response.data.location) {
                    // Set the location state with latitude and longitude from the response
                    setLocation({
                        latitude: response.data.location.latitude,
                        longitude: response.data.location.longitude
                    });  
                    setIsOwner(response.data.is_owner);  // Check if the user can change the location
                }
            } catch (error) {
                console.error('Error fetching location data:', error);  // Log any errors
            }
        };

        fetchLocation();  // Trigger the fetch when the component is mounted
    }, []);

    // Function to handle "Change Location" button press
    const handleChangeLocation = () => {
        if (isOwner) {
            // Navigate to ChangeLocationModal to allow the user to change their location
            navigation.navigate('../modal/ChangeLocationModal');
        }
    };

    return (
        <View style={styles.modalContainer}>
            {/* Back button to navigate back to the main screen */}
            <BackButton onPress={() => navigation.navigate('users/main/screen/main.js')} />

            {/* Display the user's location (latitude, longitude) */}
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>Location: </Text>
                <Text style={styles.locationText}>
                    {location ? `${location.latitude}, ${location.longitude}` : 'Loading...'}
                </Text>
            </View>

            {/* Map showing the user's current location */}
            <View style={styles.mapContainer}>
                {location ? (
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01
                        }}
                    >
                        <Marker coordinate={location} />  {/* Marker for the user's current location */}
                    </MapView>
                ) : (
                    <Text>Loading map...</Text>  // Display loading message while the map is being fetched
                )}
            </View>

            {/* Change Location button, only visible if the user has permission */}
            {isOwner && (
                <TouchableOpacity style={[styles.button, styles.changeButton]} onPress={handleChangeLocation}>
                    <Text style={styles.buttonText}>Change Location</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

// Custom styles applied to the modal, map, and buttons
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        padding: 16,
        justifyContent: 'flex-start'
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
    labelText: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Exo 2'
    },
    locationText: {
        fontSize: 18,
        color: '#777',
        marginLeft: 4
    },
    mapContainer: {
        width: '75%',
        height: '60%',
        backgroundColor: '#E6E6E6',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        alignSelf: 'center'
    },
    map: {
        width: '100%',
        height: '100%'
    },
    button: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1
    },
    changeButton: {
        backgroundColor: '#ffb433',
        borderColor: '#cc9029',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

// Callum's styling for the overall layout, map container, and buttons has been applied.
// Further refinements to the button interactions and hover states could be adjusted as needed.

export default ViewLocationModal;