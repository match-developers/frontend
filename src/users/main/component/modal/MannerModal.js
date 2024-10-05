/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from 'match/frontend/src/common/component/later/Header'; // Using your existing Header component
import HeartHugeIcon from 'match/frontend/assets/SVGs/IconHeartHuge'; // Placeholder for your SVG

const MannerModal = ({ onBackPress }) => {
  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <Header title="Manners" onBackPress={onBackPress} />

      {/* Manner SVG and Rating */}
      <View style={styles.mannerContainer}>
        <HeartHugeIcon width={250} height={225} style={styles.icon} />
        <Text style={styles.ratingText}>2.5</Text> {/* Example rating */}
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          The Match Manners Rating is a reflection of how your club conducts
          itself on the app and in person. It is measured from fellow athletes
          reviewing your sportsmanship.
          {'\n'}The rating is out of 5.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'flex-start',
    padding: 16
  },
  mannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32
  },
  icon: {
    position: 'relative'
  },
  ratingText: {
    position: 'absolute',
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Exo 2',
    color: '#FFFFFF',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }]
  },
  descriptionContainer: {
    marginTop: 100,
    paddingHorizontal: 16
  },
  descriptionText: {
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'Exo 2',
    color: '#000000',
    textAlign: 'center'
  }
});

export default MannerModal;
