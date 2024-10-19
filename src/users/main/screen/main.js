// Main.js: User's main profile screen with profile header, posts, and a fixed tab bar.

import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView, Text } from 'react-native';

// Importing containers
import PostContainer from '../container/PostsContainer'; // PostsContainer for displaying posts
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
      {/* Scrollable content for the nav bar, profile, and posts */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* NavBar Component NEEDS FUNCTIONALITY */}
        <View style={styles.navBarContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Match</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text>Options</Text>
          </View>
        </View>

        <View style={styles.profileHeaderContainer}>
          <ProfileHeader /> {/* User profile header information */}
        </View>
        <View style={styles.postsContainer}>
          <PostContainer /> {/* Placeholder for user posts */}
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
    flexDirection: 'column',
    backgroundColor: '#FAFAFA' // Set background color for the entire screen
  },
  scrollContent: {
    flexGrow: 1 // Ensures content grows to fill the available space
  },
  postsContainer: {
    flex: 1 // Fills the available space for posts
  },
  profileHeaderContainer: {
    flex: 1 // Fills the available space for the profile header
  },
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#FAFAFA'
  },
  logoContainer: {
    width: 100, // Adjust this width as needed to match the logo's width
    height: 40, // Adjust this height as needed to match the logo's height
    justifyContent: 'center', // Center text vertically
    alignItems: 'center' // Center text horizontally
  },
  logoText: {
    fontFamily: 'Exo 2', // Ensure the Exo 2 font is available
    fontSize: 31, // Text size as specified
    fontWeight: '600', // Semi-bold font weight
    color: '#000' // Text color (adjust if needed)
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  tabBarContainer: {
    height: 64, // Fixed height for the tab bar
    borderTopWidth: 1, // Border at the top of the tab bar
    borderTopColor: '#000' // Black border color
  }
});

export default MainScreen;
