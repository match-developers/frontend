// ProfileHeader.js: User profile header component containing profile picture, club, playstyle, manner icons,
// and user details such as username, bio, and stats.

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

// Importing sub-components from correct paths
import ProfileAvatar from '../component/Profile';
import ClubButton from '../component/Club';
import PlaystyleButton from '../component/Playstyle';
import MannerIcon from '../component/Manner';
import Username from '../text/UserName';
import UserBio from '../text/UserBio';
import StatsButton from '../component/Stats';

// ProfileHeader Component
const ProfileHeader = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Top Row with Profile, Club, Playstyle, and Manner Icons */}
      <View style={styles.header}>
        <ProfileAvatar />
        <View style={styles.iconsContainer}>
          <ClubButton />
          <PlaystyleButton />
          <MannerIcon />
        </View>
      </View>

      {/* Username */}
      <View style={styles.profileInfoContainer}>
        <Username />
      </View>

      {/* User Bio */}
      <View style={styles.profileInfoContainer}>
        <UserBio />
      </View>

      {/* Stats Button */}
      <View style={styles.actionButtonContainer}>
        <StatsButton />
      </View>
    </ScrollView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: 322,
    width: '100%',
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 54,
    marginLeft: 16 // Left alignment
  },
  profileInfoContainer: {
    marginTop: 16,
    alignItems: 'flex-start' // Align items to the start (left)
  },
  actionButtonContainer: {
    marginTop: 16,
    alignItems: 'flex-start' // Align items to the start (left)
  }
});

export default ProfileHeader;
