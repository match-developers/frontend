/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import OverflowButton from './OverflowButton';
import NotificationButton from './NotificationButton';
import CreateButton from './CreateButton';
import InboxButton from './InboxButton';
import PropTypes from 'prop-types';

const NavBar = ({ screenType = 'default', onLogoPress, onOverflowPress }) => {
  return (
    <View style={styles.navBarContainer}>
      {/* Logo */}
      <Logo onPress={onLogoPress} />

      <View style={styles.buttonContainer}>
        {/* Conditional buttons based on screen type */}
        {screenType === 'matchmaking' && (
          <>
            <CreateButton onPress={() => console.log('Create Pressed')} />
            <InboxButton onPress={() => console.log('Inbox Pressed')} />
          </>
        )}

        {screenType === 'newsfeed' && (
          <>
            <NotificationButton onPress={() => console.log('Notification Pressed')} />
            <InboxButton onPress={() => console.log('Inbox Pressed')} />
          </>
        )}

        {screenType === 'sportsground' && (
          <InboxButton onPress={() => console.log('Inbox Pressed')} />
        )}

        {/* Default or fallback: Overflow button only */}
        {screenType === 'default' && (
          <OverflowButton onPress={onOverflowPress} />
        )}
      </View>
    </View>
  );
};

NavBar.propTypes = {
  screenType: PropTypes.oneOf(['default', 'matchmaking', 'newsfeed', 'sportsground']).isRequired,
  onLogoPress: PropTypes.func.isRequired,
  onOverflowPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#F5F5F5',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default NavBar;
