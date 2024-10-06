import React from 'react';
import { View, StyleSheet } from 'react-native';

// Updated imports with the new path
import ProfileAvatar from 'match/frontend/src/users/main/component/button/Profile.js';
import ClubButton from 'match/frontend/src/users/main/component/button/Club.js';
import MBTIButton from 'match/frontend/src/users/main/component/button/Playstyle.js';
import MannerRating from 'match/frontend/src/users/main/component/button/Manner.js';
import Username from 'match/frontend/src/users/main/component/text/UserName.js';
import LocationLabel from 'match/frontend/src/users/main/component/button/Location.js';
import Bio from 'match/frontend/src/users/main/component/text/UserBio.js';
import StatsButton from 'match/frontend/src/users/main/component/button/Stats.js';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Replace ProfileImage with ProfileAvatar */}
        <ProfileAvatar uri="https://example.com/avatar.jpg" />

        {/* Replace Icon Buttons with Club, Playstyle, and Manner */}
        <View style={styles.iconsContainer}>
          <ClubButton clubId={1} />
          <MBTIButton />
          <MannerRating rating="2.5" />
        </View>
      </View>

      {/* Replace ProfileInfo Text Components with Username, Location, and Bio */}
      <View style={styles.profileInfoContainer}>
        <Username username="username max 16 ch" />
        <LocationLabel location="Location, max of 30 characters" />
        <Bio bio="this text box will be for profile bios. It should be no more than 80 characters." />
      </View>

      {/* Replace ActionButton with StatsButton */}
      <View style={styles.actionButtonContainer}>
        <StatsButton label="Statistics" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: 322,
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 54
  },
  profileInfoContainer: {
    marginTop: 16
  },
  actionButtonContainer: {
    marginTop: 16
  }
});

export default ProfileHeader;
