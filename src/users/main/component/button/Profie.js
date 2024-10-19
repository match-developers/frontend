// Profile.js - Profile Avatar Component 
// This component displays the user's profile picture as an avatar. 
// When pressed, it enlarges the profile image rather than navigating to a profile page.

import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Alert, Modal } from 'react-native';
import axios from 'axios'; // For backend API calls

const ProfileAvatar = ({ userId }) => {
  const [profilePhoto, setProfilePhoto] = useState(null); // Store profile photo URL
  const [loading, setLoading] = useState(true); // Handle loading state
  const [error, setError] = useState(null); // Handle error state
  const [modalVisible, setModalVisible] = useState(false); // Control modal visibility

  // Fetch the user's profile photo from the backend
  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        const response = await axios.get(`http://your-backend-url/user/${userId}/`); // Backend call for user data
        setProfilePhoto(response.data.profile_photo); // Store the profile photo URL
      } catch (err) {
        setError('Failed to load profile photo'); // Handle fetch error
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchProfilePhoto(); // Trigger data fetch on component mount
  }, [userId]); // Re-run effect if userId changes

  // Handle avatar press to show enlarged photo in a modal
  const handlePress = () => {
    setModalVisible(true); // Open modal
  };

  // Handle modal close action
  const closeModal = () => {
    setModalVisible(false); // Close modal
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show spinner while loading
  }

  if (error) {
    Alert.alert('Error', error); // Show error message if photo fails to load
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={profilePhoto ? { uri: profilePhoto } : require('match/frontend/assets/images/default-avatar.png')} 
          style={styles.avatar}
        />
      </TouchableOpacity>

      {/* Modal to display enlarged profile photo */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Image
              source={{ uri: profilePhoto }}
              style={styles.enlargedAvatar}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

// Styles for Profile Avatar component
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 80, // Avatar size
    height: 80,
    borderRadius: 40, // Circular shape
    backgroundColor: '#D9D9D9', // Default avatar background
    borderColor: 'black',
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for modal
    justifyContent: 'center',
    alignItems: 'center',
  },
  enlargedAvatar: {
    width: 300, // Enlarged image size
    height: 300,
    borderRadius: 150,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default ProfileAvatar;