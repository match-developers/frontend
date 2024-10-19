// Main.js: User's main profile screen with profile header, posts, and a fixed tab bar.
import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';

// Importing components
import PostsContainer from '../container/PostsContainer'; 
import ProfileHeader from '../container/ProfileHeader'; 
import TabBar from 'match/frontend/src/common/component/later/TabBar'; 
import TopBar from 'match/frontend/src/common/component/TopBar'; // TopBar component
import UserOption from '../component/UserOption'; // UserOption button

/**
 * MainScreen: Displays the main user profile with scrollable content,
 * a fixed top bar, and a tab bar at the bottom.
 */
const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Top Bar with UserOption on the right */}
      <View style={styles.topBarContainer}>
        <TopBar RightButton={UserOption} /> {/* Passing UserOption as RightButton */}
      </View>

      {/* Scrollable content for the profile and posts */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileHeaderContainer}>
          <ProfileHeader /> {/* User profile header information */}
        </View>

        <View style={styles.postsContainer}>
          <PostsContainer /> {/* Placeholder for user posts */}
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
    backgroundColor: '#fff',
  },
  topBarContainer: {
    height: 64, // Fixed height for the top bar
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  scrollContent: {
    flexGrow: 1, // Ensures content grows to fill the available space
  },
  profileHeaderContainer: {
    marginBottom: 16, // Adds some spacing below the profile header
  },
  postsContainer: {
    flex: 1, // Fills the remaining space with posts
  },
  tabBarContainer: {
    height: 64, // Fixed height for the tab bar
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
});

export default MainScreen;