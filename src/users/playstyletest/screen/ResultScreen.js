//header then result.js then retake test button
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from 'match/frontend/src/common/PageHeader'; // Importing the Header component
import PlaystyleResult from 'match/frontend/src/users/playstyletest/component/Result.js'; // Importing the PlaystyleResult which already includes ProfileAvatar
import RetakeTestButton from 'match/frontend/src/users/playstyletest/component/button/Retry.js'; // Importing the reusable RetakeTestButton component

const PlaystyleScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with back button and title */}
      <Header title="Header" />

      {/* Playstyle Result Section */}
      <View style={styles.resultSection}>
        <PlaystyleResult />
      </View>

      {/* Retake Test Button Section */}
      <View style={styles.buttonSection}>
        <RetakeTestButton />
      </View>
    </View>
  );
};

// Styles for the screen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16 // Horizontal padding of 16px on each side
  },
  resultSection: {
    marginTop: 24, // 24px below the header
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSection: {
    marginBottom: 16, // 16px above the bottom of the screen
    alignItems: 'center'
  }
});

export default PlaystyleScreen;
