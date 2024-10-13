// in this modal there is the back button and headr. then there are two buttons one is selected while the other is unselected use state.
// they dictate the dispaly state of the searchbar (text) and flatlist items (user card unfollow/removefollower buttons)
// the items are on a flatlist, which is the last component under the header, tab buttons and search bar.
// The logic of states for the tab buttons is just to help me define and style the different kinds of tab button variants the styling is presented easily this way. its not a suggestion for how the logic side should be done.
import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import IconSearch from 'match/frontend/assets/SVGs/default/IconSearch.svg'; // Importing IconSearch SVG
import BackButton from 'match/frontend/src/common/component/BackButton'; // Importing reusable BackButton component
import ProfileAvatar from 'match/frontend/src/users/main/component/button/Profile.js'; // Importing reusable ProfileAvatar

// Static data for now, can be replaced with dynamic data later
const data = [
  { id: '1', username: 'Username1', clubName: 'Club Name 1' },
  { id: '2', username: 'Username2', clubName: 'Club Name 2' },
  { id: '3', username: 'Username3', clubName: 'Club Name 3' }
];

const FollowersModal = ({ selectedTab }) => {
  const isFollowersSelected = selectedTab === 'followers';

  // Function to render each user item (styling only)
  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      {/* Using ProfileAvatar component for profile picture */}
      <ProfileAvatar imageUri={null} />

      {/* User Info */}
      <View style={styles.userInfo}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.clubName}>{item.clubName}</Text>
      </View>

      {/* Action Button (Remove Follower / Unfollow) */}
      <View style={styles.actionButton}>
        <Text style={styles.actionButtonText}>
          {isFollowersSelected ? 'Remove Follower' : 'Unfollow'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Back Button and Title */}
      <View style={styles.headerContainer}>
        <BackButton style={styles.backButton} />{' '}
        {/* Back button (styled but no logic) */}
        <Text style={styles.headerText}>Followers & Following</Text>
      </View>

      {/* Toggle Buttons for Followers and Following */}
      <View style={styles.toggleButtonsContainer}>
        <View
          style={[
            styles.toggleButton,
            isFollowersSelected ? styles.activeButton : styles.disabledButton
          ]}
        >
          <Text style={styles.toggleButtonText}>Followers</Text>
        </View>
        <View
          style={[
            styles.toggleButton,
            !isFollowersSelected ? styles.activeButton : styles.disabledButton
          ]}
        >
          <Text style={styles.toggleButtonText}>Following</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={
            isFollowersSelected ? 'Search Followers' : 'Search Following'
          }
          placeholderTextColor="#A3A3A3"
        />
        <IconSearch width={24} height={24} style={styles.searchIcon} />{' '}
        {/* Imported Search Icon SVG */}
      </View>

      {/* FlatList for rendering the user list (styling only) */}
      <FlatList
        data={data} // Static data for demonstration
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.userList}
      />
    </View>
  );
};

// Styles (Set B Code - Pure Styling)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // Modal background color
    padding: 16 // Padding for overall container
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  backButton: {
    position: 'absolute',
    left: 0, // Place the BackButton on the left
    width: 24,
    height: 24 // Size of back button (no logic)
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000' // Black text for the header
  },
  toggleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginHorizontal: 8 // Space between the two toggle buttons
  },
  activeButton: {
    backgroundColor: '#F2F2F2' // Selected (active) button background color
  },
  disabledButton: {
    backgroundColor: '#F2F2F2', // Unselected (disabled) button background
    opacity: 0.4, // 40% opacity for the unselected button
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Drop shadow 4px down
    shadowOpacity: 0.4, // Shadow opacity at 40%
    shadowRadius: 4 // Smooth shadow edge
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#000' // Black text color for toggle button
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // Light grey background for the search bar
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000' // Black text color for the search input
  },
  searchIcon: {
    marginLeft: 8 // Space between the input and the icon
  },
  userList: {
    paddingBottom: 16 // Space at the bottom for the last item
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0' // Light grey divider between users
  },
  userInfo: {
    flex: 1 // Flex to take remaining space
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000' // Black text for username
  },
  clubName: {
    fontSize: 14,
    color: '#A3A3A3' // Grey text for club name
  },
  actionButton: {
    backgroundColor: '#E0E0E0', // Light grey background for the action button
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12 // Rounded corners for the action button
  },
  actionButtonText: {
    fontSize: 14,
    color: '#000' // Black text for action button
  }
});

export default FollowersModal;
