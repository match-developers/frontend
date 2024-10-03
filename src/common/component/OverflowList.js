/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import OverflowCard from './OverflowCard'; // Import the OverflowCard molecule

// Importing the SVGs with correct names
import IconEdit from './IconEdit.svg';
import IconSettings from './IconSettings.svg';
import IconShare from './IconShare.svg';
import IconSwap from './IconSwap.svg';
import IconReportIssue from './IconReportIssue.svg';
import IconLogout from './IconLogout.svg';

const OverflowMenu = () => {
  return (
    <View style={styles.menuContainer}>
      <OverflowCard label="Edit profile" SvgIcon={IconEdit} isFirst={true} onPress={() => console.log('Edit profile clicked')} />
      <OverflowCard label="Settings" SvgIcon={IconSettings} onPress={() => console.log('Settings clicked')} />
      <OverflowCard label="Share Profile" SvgIcon={IconShare} onPress={() => console.log('Share Profile clicked')} />
      <OverflowCard label="Sportsground Profile" SvgIcon={IconSwap} onPress={() => console.log('Sportsground Profile clicked')} />
      <OverflowCard label="Report a Problem" SvgIcon={IconReportIssue} onPress={() => console.log('Report a Problem clicked')} />
      <OverflowCard label="Log out" SvgIcon={IconLogout} isLast={true} onPress={() => console.log('Log out clicked')} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    width: '60%', // 60% of the parent container
    maxWidth: 390, // Max width constrained to 390px
    backgroundColor: '#FFFFFF', // Background of the entire menu
    borderRadius: 10, // Ensure the menu has rounded corners
    overflow: 'hidden', // Ensure children respect the rounded corners
  },
});

export default OverflowMenu;
