//this is just 4 different coloured letters that are in a clickable container to makethe playstyle button
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const PlaystyleButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={[styles.letters, styles.greenLetter]}>M</Text>
      <Text style={[styles.letters, styles.yellowLetter]}>B</Text>
      <Text style={[styles.letters, styles.orangeLetter]}>T</Text>
      <Text style={[styles.letters, styles.redLetter]}>I</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 36,
    height: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  letters: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Exo 2',
    textAlign: 'center',
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
    color: '#FFD966'
  }
});

export default PlaystyleButton;
