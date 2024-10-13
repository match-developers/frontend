//there is a back button, then an instruction header textbox, then the input field to write what happened. then attach pphoto button and submit button.
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AttachPhotoButton from './AttachPhotoButton'; // Import the AttachPhotoButton component
import SubmitReportButton from './SubmitReportButton'; // Import the SubmitReportButton component
import BackButton from 'match/frontend/src/common/component/BackButton'; // Import the reusable BackButton component

const MyScreen = () => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.backButton}>
        <BackButton />
      </View>

      {/* Header text */}
      <Text style={styles.headerText}>
        Help Us Improve Your Match Experience, Report an Issue!
      </Text>

      {/* Container for Report Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>What happened?</Text>
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="Write report here"
          placeholderTextColor="#A3A3A3"
        />
      </View>

      {/* Attach Photo Button */}
      <AttachPhotoButton />

      {/* Submit Report Button */}
      <SubmitReportButton />
    </View>
  );
};

// Styles for the screen and components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FAFAFA' // Background color set to #FAFAFA
  },
  backButton: {
    marginBottom: 24,
    alignSelf: 'flex-start' // Align back button to the left
  },
  headerText: {
    fontSize: 32,
    fontWeight: '400',
    marginBottom: 40, // Spacing after header
    textAlign: 'left' // Left-aligned
  },
  inputContainer: {
    marginBottom: 40 // 40px spacing between input container and next component
  },
  label: {
    fontSize: 20, // 20pt for "What happened?"
    marginBottom: 8, // 8px between label and input field
    textAlign: 'left' // Left-aligned
  },
  textInput: {
    width: '100%',
    height: '30%', // 30% of the screen height
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    padding: 16, // Padding inside the text input
    fontSize: 16, // 16pt font for input text
    textAlignVertical: 'top' // Align text to the top-left
  },
  attachButtonContainer: {
    marginBottom: 40 // 40px spacing after the Attach Photo button
  },
  buttonText: {
    fontSize: 20,
    color: '#000' // Text color
  }
});

export default MyScreen;
