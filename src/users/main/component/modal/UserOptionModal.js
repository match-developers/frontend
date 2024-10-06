/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import OptionsModal from './OptionsModal'; // Import the reusable OptionsModal component

// Import the specific SVG icons for the user profile options
import EditIcon from 'match/frontend/assets/SVGs/default/IconEdit';
import SettingsIcon from 'match/frontend/assets/SVGs/default/IconSettings';
import ShareIcon from 'match/frontend/assets/SVGs/default/IconShare';
import SwapIcon from 'match/frontend/assets/SVGs/default/IconSwap';
import ReportIssueIcon from 'match/frontend/assets/SVGs/default/IconReportIssue';
import LogoutIcon from 'match/frontend/assets/SVGs/default/IconLogout';

const UserProfileOptionsModal = ({ visible, onClose }) => {
  // Define the specific menu items for the user profile options each one is a menu item and they have labels and svg options but the console.log is just a placeholder for the logic applied to onpress.
  const menuItems = [
    {
      label: 'Edit Profile',
      SvgIcon: EditIcon,
      onPress: () => console.log('Edit Profile clicked'),
      id: '1'
    },
    {
      label: 'Settings',
      SvgIcon: SettingsIcon,
      onPress: () => console.log('Settings clicked'),
      id: '2'
    },
    {
      label: 'Share Profile',
      SvgIcon: ShareIcon,
      onPress: () => console.log('Share Profile clicked'),
      id: '3'
    },
    {
      label: 'Sportsground Profile',
      SvgIcon: SwapIcon,
      onPress: () => console.log('Sportsground Profile clicked'),
      id: '4'
    },
    {
      label: 'Report a Problem',
      SvgIcon: ReportIssueIcon,
      onPress: () => console.log('Report a Problem clicked'),
      id: '5'
    },
    {
      label: 'Log out',
      SvgIcon: LogoutIcon,
      onPress: () => console.log('Log out clicked'),
      id: '6'
    }
  ];

  return (
    <OptionsModal
      visible={visible}
      onClose={onClose} // Pass the onClose function to close the modal
      menuItems={menuItems} // Pass the user profile-specific menu items
    />
  );
};

export default UserProfileOptionsModal;
