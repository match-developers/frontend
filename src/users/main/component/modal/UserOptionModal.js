import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Navigation hook to handle screen changes.
import Exit from 'match/frontend/assets/SVGs/default/Exit'; // Import Exit SVG
import Edit from 'match/frontend/assets/SVGs/default/Edit';
import Settings from 'match/frontend/assets/SVGs/default/Settings';
import Report from 'match/frontend/assets/SVGs/default/Report';
import Logout from 'match/frontend/assets/SVGs/default/Logout';

const UserOptionModal = ({ isVisible, onClose, isGroundOwner }) => {
  const [loading, setLoading] = useState(false); // State to manage logout loading status.
  const navigation = useNavigation(); // Hook to handle navigation within the app.

  const handleLogout = async () => {
    // Handle logout logic here...
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.optionContainer}>
          {/* Close Button - Exit SVG */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Exit width={24} height={24} />
          </TouchableOpacity>

          {/* Profile Edit Option */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile', { screen: 'EditMain' });
              onClose(); // Close the modal after navigation.
            }}
            style={styles.optionButton}
          >
            <Edit width={24} height={24} /> {/* Edit Icon */}
            <Text style={styles.optionText}>Edit Profile</Text>
          </TouchableOpacity>

          {/* Settings Option */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Settings', { screen: 'SettingsMain' });
              onClose();
            }}
            style={styles.optionButton}
          >
            <Settings width={24} height={24} /> {/* Settings Icon */}
            <Text style={styles.optionText}>Settings</Text>
          </TouchableOpacity>

          {/* Report Option */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Report', { screen: 'ReportMain' });
              onClose();
            }}
            style={styles.optionButton}
          >
            <Report width={24} height={24} /> {/* Report Icon */}
            <Text style={styles.optionText}>Report</Text>
          </TouchableOpacity>

          {/* Logout Option */}
          <TouchableOpacity
            onPress={handleLogout}
            style={styles.optionButton}
            disabled={loading}
          >
            <Logout width={24} height={24} /> {/* Logout Icon */}
            <Text style={styles.optionText}>
              {loading ? 'Logging out...' : 'Logout'}
            </Text>
          </TouchableOpacity>

          {/* Sports Ground Management (Visible only for ground owners) */}
          {isGroundOwner && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ManageSportsGround');
                onClose();
              }}
              style={styles.optionButton}
            >
              <Text style={styles.optionText}>Manage Sports Ground</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

// Updated styles
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent background to dim the main screen.
  },
  optionContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center' // Center-align all buttons and text.
  },
  optionButton: {
    paddingVertical: 15,
    width: '100%',
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center vertically
    borderBottomWidth: 1,
    borderBottomColor: '#ccc' // Divider between options.
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Text color for options.
    marginLeft: 10 // Space between icon and text
  },
  closeButton: {
    alignSelf: 'flex-end', // Align the close button to the right.
    marginBottom: 10 // Optional margin for spacing from the rest of the options.
  }
});

export default UserOptionModal;
