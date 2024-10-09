// This component converts the location label button from the Figma design,
// where the user's location is displayed, and can be clicked to trigger a modal for location change.

import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Location = () => {
    const [location, setLocation] = useState('Location, max of 30 characters');  // Initialize location state
    const navigation = useNavigation();

    // Fetch user location from the backend when the component is mounted
    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get('/user/profile/edit/');  // API call to get user profile
                if (response.data && response.data.location) {
                    setLocation(response.data.location);  // Update location state with fetched data
                }
            } catch (error) {
                console.error('Error fetching location data:', error);  // Log error if location fetch fails
            }
        };

        fetchLocation();  // Execute the fetch function
    }, []);

    // Handle button press to navigate to the location modal
    const handlePress = () => {
        navigation.navigate('ViewLocationModal');  // Navigate to the ViewLocationModal
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.locationText}>
                    {/* If location length exceeds 30 characters, truncate with '...' */}
                    {location.length > 30 ? location.substring(0, 30) + '...' : location}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

// Callum's initial styling applied here, modifying the button layout and text presentation
const styles = StyleSheet.create({
    container: {
        width: '100%', // Fill container width
        alignItems: 'flex-start' // Ensure left alignment
    },
    locationText: {
        fontSize: 13,
        fontWeight: '600', // Semi-bold font weight
        fontFamily: 'Exo 2', // Font family
        color: '#000000', // Text color
        textAlign: 'left' // Explicit left-alignment
    }
});

// Callum will further refine styling for hover/active states, responsiveness, and any additional Figma design requirements.

export default Location;