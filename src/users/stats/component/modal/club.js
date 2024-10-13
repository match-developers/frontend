// the items are the club.js porfile avatar from users main witha  username and a tet value for the time joined and left at that club. its in a flatlist. thats the only thing other than the header.
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BackButton from 'match/frontend/src/common/component/BackButton'; // Importing reusable BackButton component
import ClubAvatar from 'match/frontend/src/users/main/component/button/Club.js'; // Importing the Club.js profile picture

// Static sample data for the clubs the user joined and left
const clubsData = [
  { id: '1', clubName: 'Club Name 1', joinedLeftStatus: 'joined-left' },
  { id: '2', clubName: 'Club Name 2', joinedLeftStatus: 'joined-left' },
  { id: '3', clubName: 'Club Name 3', joinedLeftStatus: 'joined-left' }
];

const ClubsModal = () => {
  // Function to render each club item in the FlatList
  const renderClubItem = ({ item }) => (
    <View style={styles.clubItem}>
      {/* Club Profile Picture (ClubAvatar from Club.js) */}
      <ClubAvatar imageUri={null} />{' '}
      {/* Using the ClubAvatar component for the club profile picture */}
      {/* Club Information (Name and Joined-Left Status) */}
      <View style={styles.clubInfo}>
        <Text style={styles.clubName}>{item.clubName}</Text>
      </View>
      {/* Joined and Left Status, aligned to the right */}
      <Text style={styles.joinedLeftStatus}>{item.joinedLeftStatus}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Back Button and Centered Title */}
      <View style={styles.headerContainer}>
        <BackButton style={styles.backButton} /> {/* Back button to go back */}
        <Text style={styles.headerText}>Clubs</Text>
      </View>

      {/* FlatList for rendering the club history */}
      <FlatList
        data={clubsData}
        keyExtractor={item => item.id}
        renderItem={renderClubItem}
        contentContainerStyle={styles.clubList}
      />
    </View>
  );
};

// Styles for Set B Code (Pure styling, no logic)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // Background color
    padding: 16 // Padding around the entire container
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the title
    marginBottom: 16,
    position: 'relative' // Allows positioning of the back button
  },
  backButton: {
    position: 'absolute',
    left: 0, // Back button positioned to the left
    width: 24,
    height: 24 // Placeholder size for back button
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for the header
    color: '#000' // Black text color for header
  },
  clubList: {
    paddingBottom: 16 // Add padding at the bottom for last club
  },
  clubItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure even spacing between items
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0' // Light grey border for separation
  },
  clubInfo: {
    flex: 1, // Club name will take remaining space
    marginRight: 16 // Ensure there is spacing between club name and joined-left status
  },
  clubName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for the club name
    color: '#000' // Black text color for club name
  },
  joinedLeftStatus: {
    fontSize: 14,
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for the joined-left status
    color: '#000', // Black text color for joined-left status
    textAlign: 'right' // Align this text to the right
  }
});

export default ClubsModal;
