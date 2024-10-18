//same as manner but star icon instead and text content
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from 'match/frontend/src/common/component/BackButton'; // Importing reusable BackButton component
import StarBig from 'match/frontend/assets/SVGs/StarBig'; // Importing the StarBig SVG

const PerformanceModal = ({ onBackPress }) => {
  return (
    <View style={styles.container}>
      {/* Header with Back Button and Centered Title */}
      <View style={styles.headerContainer}>
        <BackButton onPress={onBackPress} style={styles.backButton} />{' '}
        {/* BackButton with functionality */}
        <Text style={styles.headerText}>Performance</Text>
      </View>

      {/* Star Icon and Rating */}
      <View style={styles.iconContainer}>
        <StarBig width={250} height={238} style={styles.icon} />{' '}
        {/* Actual StarIconHuge SVG */}
        <Text style={styles.ratingText}>2.5</Text>{' '}
        {/* Updated rating centered */}
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          The Match Performance rating is a reflection of how well you perform
          technically in matches. It is measured from fellow athletes reviewing
          your overall performance.
          {'\n'}The rating is out of 10.
        </Text>
      </View>
    </View>
  );
};

// Styles for Set B (styling only, no logic)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // Background color
    justifyContent: 'flex-start', // Ensure header stays at the top
    padding: 16
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    position: 'relative'
  },
  backButton: {
    position: 'absolute',
    left: 0,
    width: 24,
    height: 24 // Size of back button
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Exo 2',
    color: '#000'
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    width: '100%',
    height: 238 // Fixed height for the star container
  },
  icon: {
    width: 250,
    height: 238 // Actual size of the star SVG
  },
  ratingText: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Exo 2',
    color: '#000',
    textAlign: 'center',
    position: 'absolute' // Keeps it centered over the star
  },
  descriptionContainer: {
    marginTop: 64, // Adjusted for spacing
    paddingHorizontal: 16
  },
  descriptionText: {
    fontSize: 20, // Adjusted font size to match the image
    fontWeight: '400',
    fontFamily: 'Exo 2',
    color: '#000',
    textAlign: 'center'
  }
});

export default PerformanceModal;
