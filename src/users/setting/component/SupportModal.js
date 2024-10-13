import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import BackButton from 'match/frontend/src/common/component/BackButton'; // Import the reusable BackButton component

const SupportSettingsModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onRequestClose={onClose} transparent>
      <View style={styles.modalContainer}>
        {/* Header with centered text and back button on the left */}
        <View style={styles.headerContainer}>
          <BackButton onPress={onClose} /> {/* Back button to close modal */}
          <Text style={styles.headerText}>Support and Other</Text>{' '}
          {/* Centered Header */}
        </View>

        {/* Email Section */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.infoText}>sirenbrian37@gmail.com</Text>
        </View>

        {/* Phone Section */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.infoText}>010-6808-8575</Text>
        </View>

        {/* Terms and Conditions Section */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Terms and Conditions:</Text>
          <Text style={styles.infoText}>terms and conditions...</Text>
        </View>
      </View>
    </Modal>
  );
};

// Styles
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA', // White background
    paddingHorizontal: 16,
    paddingVertical: 24, // Basic padding for content
    justifyContent: 'flex-start' // Ensure content starts from the top
  },
  headerContainer: {
    flexDirection: 'row', // Row direction to align back button and text
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the left
    marginBottom: 16,
    width: '100%'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Black text for header
    textAlign: 'center', // Center the header text
    flex: 1 // Take up remaining space to center the text
  },
  infoSection: {
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000' // Black label text
  },
  infoText: {
    fontSize: 14,
    color: '#000', // Black text for the actual information
    marginTop: 4 // Small spacing between label and info
  }
});

export default SupportSettingsModal;
