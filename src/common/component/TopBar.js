// MatchNavBar.js: Common component for top navigation bar
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation

const MatchNavBar = ({ RightButton }) => {
  const navigation = useNavigation(); // Navigation hook

  return (
    <View style={styles.navBarContainer}>
      {/* Logo - Navigate to Newsfeed Main */}
      <TouchableOpacity 
        style={styles.logoContainer} 
        onPress={() => navigation.navigate('NewsfeedMain')}
      >
        <Text style={styles.logoText}>Match</Text>
      </TouchableOpacity>

      {/* Optional Right Button */}
      {RightButton && (
        <View style={styles.rightButtonContainer}>
          <RightButton />
        </View>
      )}
    </View>
  );
};

// Styling for MatchNavBar
const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between logo and right-side button
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#FAFAFA',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingBottom: 8,
  },
  logoText: {
    fontFamily: 'Exo 2',
    fontSize: 31,
    fontWeight: '600',
    color: '#000',
  },
  rightButtonContainer: {
    alignItems: 'flex-end',
  },
});

export default MatchNavBar;