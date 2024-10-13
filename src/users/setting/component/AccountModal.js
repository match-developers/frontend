// styling is done its just a bakc button. a  header, three input fields with label. a decription of ddelete and then the delete account button. should make a confirm delete modal file.
import React, { useState } from 'react';
import {
  Modal,
  TextInput,
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import BackButton from 'match/frontend/src/common/component/BackButton'; // Importing the BackButton component

const AccountSettingsModal = ({ visible, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent>
      {/* Main modal container with dark transparent background */}
      <View style={styles.modalContainer}>
        {/* Header section with back button and text */}
        <View style={styles.headerContainer}>
          <BackButton onPress={onClose} /> {/* Back button to close modal */}
          <Text style={styles.headerText}>Account Management</Text>{' '}
          {/* Text Header */}
        </View>

        {/* Scrollable content inside the modal, with 16px padding on the sides */}
        <View style={styles.contentContainer}>
          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Edit Email"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.input}
              value={password}
              secureTextEntry // Password masking enabled
              onChangeText={setPassword}
              placeholder="Edit Password"
            />
          </View>

          {/* Phone Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone:</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Edit Phone"
            />
          </View>

          {/* Delete Account Button (center-aligned) */}
          <View style={styles.deleteContainer}>
            <Text style={styles.deleteTitle}>Delete Your Account?</Text>
            <Text style={styles.deleteDescription}>
              This account will be removed from Match permanently and all
              account data will be lost.
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => console.log('Account Deleted')}
            >
              <Text style={styles.deleteButtonText}>Delete Account</Text>
            </TouchableOpacity>
          </View>

          {/* Go Back Button */}
          <Button title="Go Back" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

// Styles
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark transparent background
    paddingHorizontal: 16 // 16px horizontal padding for modal content
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align back button and text in a row
    height: 60,
    backgroundColor: '#FAFAFA', // Ensure the header background is white (#FAFAFA)
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0' // Light grey bottom border
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Black text for header
    marginLeft: 16 // Space between back button and text header
  },
  contentContainer: {
    paddingTop: 16,
    paddingBottom: 24,
    alignItems: 'flex-start', // Align all content to the top
    justifyContent: 'flex-start', // Top-oriented content
    paddingHorizontal: 16, // Ensure the content has padding inside the modal
    backgroundColor: '#FAFAFA' // Background for modal content
  },
  inputContainer: {
    marginBottom: 24,
    width: '100%' // Make the input containers fill the width
  },
  label: {
    fontSize: 14,
    color: '#000', // Black text color
    marginBottom: 4
  },
  input: {
    fontSize: 16,
    color: '#000', // Black text color
    paddingVertical: 8,
    paddingHorizontal: 8, // Internal padding of 8px for text inside the input
    borderBottomWidth: 1,
    borderBottomColor: '#000', // Black border for inputs
    width: '100%', // Make inputs stretch to fill width
    backgroundColor: '#FAFAFA' // Input background color
  },
  deleteContainer: {
    marginTop: 32,
    alignItems: 'center', // Center align the delete account content
    width: '100%'
  },
  deleteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000', // Black text color
    textAlign: 'center' // Center text
  },
  deleteDescription: {
    fontSize: 14,
    color: '#000', // Black text color
    marginBottom: 16,
    textAlign: 'center' // Center the description text
  },
  deleteButton: {
    backgroundColor: '#FFEBEB', // Delete button background color
    borderColor: '#FF6B6B',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    width: 200 // Fixed width of 200px for delete button
  },
  deleteButtonText: {
    fontSize: 16,
    color: '#FF6B6B'
  }
});

export default AccountSettingsModal;
