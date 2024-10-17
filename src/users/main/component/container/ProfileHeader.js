//imported all the components needed to make the header then styled them create the correct layout
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Updated imports with the correct names
import ProfileAvatar from 'match/frontend/src/users/main/component/button/Profile.js';
import Club from 'match/frontend/src/users/main/component/button/Club.js'; // Changed to Club
import PlaystyleButton from 'match/frontend/src/users/main/component/button/Playstyle.js';
import Manner from 'match/frontend/src/users/main/component/button/Manner.js'; // Changed to Manner
import UsernameTextbox from 'match/frontend/src/users/main/component/text/UserName.js';
import Location from 'match/frontend/src/users/main/component/button/Location.js'; // Changed to Location
import BioBox from 'match/frontend/src/users/main/component/text/UserBio.js';
import StatsButton from 'match/frontend/src/users/main/component/button/Stats.js';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProfileAvatar uri="https://example.com/avatar.jpg" />

        <View style={styles.iconsContainer}>
          <Club clubId={1} /> {/* Updated to Club */}
          <PlaystyleButton />
          <Manner rating="2.5" /> {/* Updated to Manner */}
        </View>
      </View>

      <View style={styles.profileInfoContainer}>
        <UsernameTextbox username="username max 16 ch" />{' '}
        {/* Updated to UsernameTextbox */}
        <Location location="Location, max of 30 characters" />{' '}
        {/* Updated to Location */}
        <BioBox bio="this text box will be for profile bios. It should be no more than 80 characters." />{' '}
        {/* Updated to BioBox */}
      </View>

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
