// UserOptionModal.js: This modal displays user options and handles navigation and logout functionality.
// It appears as an overlay when triggered and offers various user actions such as profile editing, settings, and logout.

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Navigation hook to handle screen changes.
import axios from 'axios';  // Axios used for API calls (logout functionality).

const UserOptionModal = ({ isVisible, onClose, isGroundOwner }) => {
  const [loading, setLoading] = useState(false);  // State to manage logout loading status.
  const navigation = useNavigation();  // Hook to handle navigation within the app.

  /**
   * Handles the logout process by calling the backend API.
   * Displays an alert upon success or failure and manages loading state.
   */
  const handleLogout = async () => {
    try {
      setLoading(true);  // Start loading indicator.

      // Call the backend logout API.
      const response = await axios.post(
        'http://your-backend-url/api/logout/',
        {},
        {
          headers: {
            Authorization: `Bearer your-auth-token`,  // Authorization header with user token.
          },
        }
      );

      if (response.status === 200) {
        Alert.alert('Logout', 'You have been logged out successfully.');  // Success message.
        onClose();  // Close the modal.
      } else {
        Alert.alert('Error', 'Failed to log out. Please try again.');  // Failure message.
      }
    } catch (error) {
      console.error('Logout error:', error);  // Log error for debugging.
      Alert.alert('Error', 'An error occurred during logout.');
    } finally {
      setLoading(false);  // Stop loading indicator.
    }
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.optionContainer}>
          {/* Profile Edit Option */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile', { screen: 'EditMain' });  // Navigate to edit profile screen.
              onClose();  // Close the modal after navigation.
            }}
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>Edit Profile</Text>
          </TouchableOpacity>

          {/* Settings Option */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Settings', { screen: 'SettingsMain' });  // Navigate to settings screen.
              onClose();
            }}
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>Settings</Text>
          </TouchableOpacity>

          {/* Logout Option */}
          <TouchableOpacity onPress={handleLogout} style={styles.optionButton} disabled={loading}>
            <Text style={styles.optionText}>{loading ? 'Logging out...' : 'Logout'}</Text>
          </TouchableOpacity>

          {/* Sports Ground Management (Visible only for ground owners) */}
          {isGroundOwner && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ManageSportsGround');  // Navigate to sports ground management screen.
                onClose();
              }}
              style={styles.optionButton}
            >
              <Text style={styles.optionText}>Manage Sports Ground</Text>
            </TouchableOpacity>
          )}

          {/* Close Modal Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// Styling for UserOptionModal components. This section defines layout and appearance.
// Note for Callum: Customize button appearance and modal design here.
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background to dim the main screen.
  },
  optionContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',  // Center-align all buttons and text.
  },
  optionButton: {
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',  // Divider between options.
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',  // Text color for options.
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ff6b6b',  // Red color for close button.
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',  // White text for close button.
    fontSize: 16,
  },
});

export default UserOptionModal;