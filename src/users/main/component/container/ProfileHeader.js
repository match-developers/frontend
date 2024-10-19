// ProfileHeader.js: User profile header component containing profile picture, club, playstyle, manner icons, 
// and user details such as username, bio, location, and stats.

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

// Importing sub-components from correct paths
import Profile from '../component/Profile';
import Club from '../component/Club';
import Playstyle from '../component/Playstyle';
import MannerIcon from '../component/Manner';
import Username from '../text/UserName';
import UserBio from '../text/UserBio';
import StatsButton from '../component/Stats';
import Location from '../component/Location'; // Location component

// ProfileHeader Component
const ProfileHeader = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Top Row with Profile, Club, Playstyle, and Manner Icons */}
      <View style={styles.topRow}>
        <Profile />
        <Club />
        <Playstyle />
        <MannerIcon />
      </View>

      {/* Username */}
      <View style={styles.usernameContainer}>
        <Username />
      </View>

      {/* Location */}
      <View style={styles.locationContainer}>
        <Location />
      </View>

      {/* User Bio */}
      <View style={styles.bioContainer}>
        <UserBio />
      </View>

      {/* Stats Button */}
      <View style={styles.statsContainer}>
        <StatsButton />
      </View>

      {/* Divider Line */}
      <View style={styles.divider} />
    </ScrollView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingVertical: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 12,
  },
  usernameContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  locationContainer: {
    alignItems: 'flex-start',
    marginLeft: 16, // Slight padding for alignment
    marginBottom: 8,
  },
  bioContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  statsContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
  },
});

export default ProfileHeader;