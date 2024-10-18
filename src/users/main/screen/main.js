// Main.js: User's main profile screen with profile header, posts, and a fixed tab bar.

import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';

// Importing containers
import PostsContainer from '../container/PostsContainer'; // PostsContainer for displaying posts
import ProfileHeader from '../container/ProfileHeader'; // ProfileHeader for user information

// Importing TabBar from the correct path
import TabBar from 'match/frontend/src/common/component/later/TabBar'; 

/**
 * MainScreen: Displays the main user profile with scrollable content
 * and a fixed tab bar at the bottom.
 */
const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Scrollable content for the profile and posts */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.postsContainer}>
          <PostsContainer /> {/* Placeholder for user posts */}
        </View>
        <View style={styles.profileHeaderContainer}>
          <ProfileHeader /> {/* User profile header information */}
        </View>
      </ScrollView>

      {/* Fixed Tab Bar that stays at the bottom */}
      <View style={styles.tabBarContainer}>
        <TabBar /> {/* Navigation tab bar for switching between screens */}
      </View>
    </SafeAreaView>
  );
};

// Styling for the MainScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background for the screen
  },
  scrollContent: {
    flexGrow: 1, // Ensures content grows to fill the available space
  },
  postsContainer: {
    flex: 1, // Fills the available space for posts
  },
  profileHeaderContainer: {
    flex: 1, // Fills the available space for the profile header
  },
  tabBarContainer: {
    height: 64, // Fixed height for the tab bar
    borderTopWidth: 1, // Border at the top of the tab bar
    borderTopColor: '#000', // Black border color
  },
});

export default MainScreen;