//just imported the components of the main screen and applied layout styling
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Import components
import NavBar from 'match/frontend/src/users/main/container/NavBar';
import ProfileHeader from 'match/frontend/src/users/main/container/ProfileHeader';
import PostFeedContainer from 'match/frontend/src/users/main/container/PostsContainer';
import TabBar from 'match/frontend/src/common/component/laterTabBar';

//order of componetns top to bottom on screen
const ProfileScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.navBar}>
        <NavBar />
      </View>
      <View style={styles.profileHeader}>
        <ProfileHeader />
      </View>
      <PostFeedContainer />
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
