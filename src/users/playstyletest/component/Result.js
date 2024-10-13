import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileAvatar from 'match/frontend/src/users/main/component/button/Profile.js';

const PlaystyleResult = () => {
  return (
    <View style={styles.container}>
      {/* First container: Avatar */}
      <ProfileAvatar imageUri={null} />{' '}
      {/* Reusing the ProfileAvatar component */}
      {/* Second container: Username and playstyle statement (full width) */}
      <Text style={styles.usernameText}>
        {/* TODO: Replace this with dynamic username */}
        Username, Your Match Playstyle is:
      </Text>
      {/* Third container: MBTI result letters (letters container hugs contents) */}
      <View style={styles.playstyleButtonContainer}>
        <Text style={[styles.letters, styles.greenLetter]}>M</Text>
        <Text style={[styles.letters, styles.yellowLetter]}>B</Text>
        <Text style={[styles.letters, styles.orangeLetter]}>T</Text>
        <Text style={[styles.letters, styles.redLetter]}>I</Text>
      </View>
      {/* Fourth container: Description text (full width) */}
      <Text style={styles.descriptionText}>
        {/* TODO: Descriptions for each result are in Figma */}
        Description for the playstyle result will go here.
      </Text>
    </View>
  );
};

// Styles for PlaystyleResult component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', // Full width for the main container
    padding: 16
  },
  usernameText: {
    fontSize: 32,
    fontFamily: 'Exo 2',
    textAlign: 'center',
    marginBottom: 16,
    width: '100%' // Full width for the username text
  },
  playstyleButtonContainer: {
    padding: 16,
    borderWidth: 1.6,
    borderColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 64,
    alignSelf: 'center' // Hug the contents
  },
  letters: {
    fontSize: 100,
    fontWeight: '600',
    fontFamily: 'Exo 2',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.8, height: 0.8 },
    textShadowRadius: 2
  },
  greenLetter: {
    color: '#5DCC78'
  },
  yellowLetter: {
    color: '#FFC766'
  },
  orangeLetter: {
    color: '#FF9466'
  },
  redLetter: {
    color: '#FF5E4F'
  },
  descriptionText: {
    fontSize: 20,
    fontFamily: 'Exo 2',
    textAlign: 'center',
    padding: 16,
    color: '#000',
    width: '100%' // Full width for the description text
  }
});

export default PlaystyleResult;
