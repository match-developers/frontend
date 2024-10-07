// the manner rate hert svg with a text over it. its clickable, nothing applied to on press. did the styling myself.
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HeartIcon from 'match/frontend/assets/SVGs/default/IconOverflowDefault';

const MannerRating = ({ rating = '2.5', onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <HeartIcon width={36} height={36} />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    position: 'relative'
  },
  ratingText: {
    position: 'absolute',
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Exo 2',
    textAlign: 'center'
  }
});

export default MannerRating;
