//the reviews is the usual header and back button. a flatlist with these components i have named review cards. they have a pfole picture, username, clubname, review and the two raings on them with a show more option. show more literally just explansds the textbox of written review and therfore the card. no filter on teh modal
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import BackButton from 'match/frontend/src/common/component/BackButton'; // Importing reusable BackButton component
import ProfileAvatar from 'match/frontend/src/users/main/component/button/Profile.js'; // Importing ProfileAvatar component
import HeartIcon from 'match/frontend/assets/SVGs/IconHeart.svg'; // Importing HeartIcon SVG
import StarIcon from 'match/frontend/assets/SVGs/IconStar.svg'; // Importing StarIcon SVG

// Static data for now, can be replaced with dynamic data later
const reviewData = [
  {
    id: '1',
    username: 'Username1',
    clubName: 'Club Name 1',
    rating: '0.0',
    likes: '0.0',
    review:
      'Written review of player. This message can go for a while but then there would be a see more/Show less button to manage the amount of space it takes up on the list of reviews.'
  },
  {
    id: '2',
    username: 'Username2',
    clubName: 'Club Name 2',
    rating: '0.0',
    likes: '0.0',
    review:
      'Written review of player. This message can go for a while but then there would be a see more/Show less button to manage the amount of space it takes up on the list of reviews.'
  },
  {
    id: '3',
    username: 'Username3',
    clubName: 'Club Name 3',
    rating: '0.0',
    likes: '0.0',
    review:
      'Written review of player. This message can go for a while but then there would be a see more/Show less button to manage the amount of space it takes up on the list of reviews.'
  }
];

const ReviewsModal = () => {
  // Function to render each review item
  const renderReview = ({ item }) => (
    <View style={styles.reviewCard}>
      {/* Review Card Layout */}
      <ProfileAvatar imageUri={null} /> {/* Avatar for the user */}
      <View style={styles.reviewContent}>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.clubName}>{item.clubName}</Text>
        </View>
        <View style={styles.ratingSection}>
          <Text style={styles.rating}>{item.rating}</Text>
          <HeartIcon width={16} height={16} style={styles.icon} />{' '}
          {/* Heart icon */}
          <StarIcon width={16} height={16} style={styles.icon} />{' '}
          {/* Star icon */}
        </View>
      </View>
      <Text style={styles.reviewText}>{item.review}</Text>
      <TouchableOpacity style={styles.showMoreButton}>
        <Text style={styles.showMoreText}>Show more</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Back Button and Title */}
      <View style={styles.headerContainer}>
        <BackButton style={styles.backButton} />{' '}
        {/* Back button (styled but no logic) */}
        <Text style={styles.headerText}>Reviews</Text>
      </View>

      {/* FlatList for review cards */}
      <FlatList
        data={reviewData}
        keyExtractor={item => item.id}
        renderItem={renderReview}
        contentContainerStyle={styles.reviewList}
      />
    </View>
  );
};

// Styles (Set B Code - Pure Styling, No Logic)
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
  reviewList: {
    paddingBottom: 16 // Space at the bottom for the last item
  },
  reviewCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2 // For Android shadow
  },
  reviewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  userInfo: {
    flex: 1
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
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    fontSize: 14,
    marginRight: 8,
    color: '#000' // Black text for rating
  },
  icon: {
    marginRight: 8 // Space between icons
  },
  reviewText: {
    fontSize: 14,
    color: '#000', // Black text for review
    marginBottom: 12
  },
  showMoreButton: {
    alignSelf: 'flex-start'
  },
  showMoreText: {
    fontSize: 14,
    color: '#A3A3A3' // Grey text for "Show more" button
  }
});

export default ReviewsModal;
