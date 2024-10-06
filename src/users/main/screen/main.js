//main screen that shows up when user presses the profile button on the nav bar
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Import components
import NavBar from './NavBar';
import ProfileHeader from './ProfileHeader';
import PostFeedContainer from './PostsContainer';
import TabBar from './TabBar';

const ProfileScreen = () => {
  return (
    <View style={styles.screenContainer}>
      {/* NavBar at the top */}
      <View style={styles.navBar}>
        <NavBar />
      </View>

      {/* ProfileHeader directly below the NavBar */}
      <View style={styles.profileHeader}>
        <ProfileHeader />
      </View>

      {/* PostFeedContainer fills the space between ProfileHeader and TabBar */}
      <View style={styles.postFeedContainer}>
        <PostFeedContainer />
      </View>

      {/* TabBar at the bottom */}
      <View style={styles.tabBar}>
        <TabBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  navBar: {
    height: 64, // Fixed height for NavBar
    width: '100%'
  },
  profileHeader: {
    height: 322, // Updated height for ProfileHeader
    width: '100%'
  },
  postFeedContainer: {
    flex: 1 // This will stretch and fill the space between ProfileHeader and TabBar
  },
  tabBar: {
    height: 64, // Fixed height for TabBar
    width: '100%'
  }
});

export default ProfileScreen;
