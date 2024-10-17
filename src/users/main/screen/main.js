// Main.js: User's main profile screen displaying profile header and posts.

import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

// Importing containers from correct paths
import PostsContainer from '../container/PostsContainer';
import ProfileHeader from '../container/ProfileHeader';

// Main Screen Component
const MainScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Posts Section */}
      <View style={styles.postsContainer}>
        <PostsContainer />
      </View>

      {/* Profile Header Section */}
      <View style={styles.profileHeaderContainer}>
        <ProfileHeader />
      </View>
    </ScrollView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postsContainer: {
    flex: 1,
  },
  profileHeaderContainer: {
    flex: 1,
  },
});

export default MainScreen;