import React from 'react';
import { View, StyleSheet } from 'react-native';
import MatchmakingButton from 'match/frontend/src/common/components/later/MatchmakingButton';
import ExploreButton from 'match/frontend/src/common/components/later/ExploreButton';
import ClubButton from 'match/frontend/src/common/components/later/ClubButton';
import ProfileButton from 'match/frontend/src/common/components/later/ProfileButton';

const TabBar = () => {
  return (
    <View style={styles.tabBarContainer}>
      <MatchmakingButton />
      <ExploreButton />
      <ClubButton />
      <ProfileButton />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#000'
  }
});

export default TabBar;
