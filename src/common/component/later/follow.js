import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ReusableButton from './ReusableButton'; 

const UserProfile = () => {
  // State to track whether the user is following or not
  const [isFollowing, setIsFollowing] = useState(false);

  // Toggle function to change the button state
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing); // Toggle between follow and following
  };

  return (
    <View style={styles.container}>
      <ReusableButton
        text={isFollowing ? "Following" : "Follow"} // Change text based on state
        backgroundColor="#ffb433"
        textColor="#000000"
        borderColor="#cc9029"
        width={150}
        height={30}
        borderRadius={10}
        fontSize={16}
        onPress={handleFollowToggle} // Trigger the toggle on press
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
});

export default UserProfile;
