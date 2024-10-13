//this si incomplete as the (4th component) questionlist.js is incomplete so i have just left notes there that it will need to be added once we create it.
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from 'match/frontend/src/common/PageHeader'; // Importing the reusable PageHeader component
import SubmitTestButton from 'match/frontend/src/users/playstyletest/component/button/Submit.js'; // Importing the reusable SubmitTestButton component
import PlaystyleLetters from 'match/frontend/assets/PNGs/PlaystyleLetters.png'; // Importing the PlaystyleLetters image

const PlaystyleScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with title */}
      <Header title="Playstyle Test" />

      {/* Main content container */}
      <View style={styles.contentContainer}>
        {/* First: Playstyle question title */}
        <Text style={styles.titleText}>What will your match playstyle be?</Text>

        {/* Second: PlaystyleLetters Image */}
        <Image source={PlaystyleLetters} style={styles.playstyleImage} />

        {/* Third: Description of the playstyle test */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            The Match Playstyle test measures an athlete's playstyle across the
            dimensions of preparedness, socialisation, competitiveness, and
            strategy.
          </Text>
        </View>

        {/* Fourth: Placeholder for QuestionList.js */}
        <View style={styles.questionListContainer}>
          {/* This will be where the QuestionList component will be added in the future */}
          <Text>/* QuestionList will go here */</Text>
        </View>

        {/* Fifth: Submit Button */}
        <View style={styles.submitButtonContainer}>
          <SubmitTestButton />
        </View>
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16, // Start 16px below the header
    gap: 64 // Space between each content item
  },
  titleText: {
    fontSize: 32,
    fontWeight: '400', // Regular weight
    textAlign: 'center'
  },
  playstyleImage: {
    width: 274,
    height: 155,
    resizeMode: 'contain' // Ensure the image fits within the dimensions
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'center'
  },
  questionListContainer: {
    width: '100%',
    paddingHorizontal: 16
  },
  submitButtonContainer: {
    paddingTop: 64,
    paddingBottom: 16,
    alignItems: 'center'
  }
});

export default PlaystyleScreen;
