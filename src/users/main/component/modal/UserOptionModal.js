import React, { useState } from 'react';
import OptionsModal from './OptionsModal'; // Import the reusable OptionsModal component

// Import the specific SVG icons for the user profile options
import Edit from 'match/frontend/assets/SVGs/default/Edit';
import Settings from 'match/frontend/assets/SVGs/default/Settings';
import Share from 'match/frontend/assets/SVGs/default/Share';
import Swap from 'match/frontend/assets/SVGs/default/Swap';
import Report from 'match/frontend/assets/SVGs/default/Report';
import Logout from 'match/frontend/assets/SVGs/default/Logout';

// the menu items relate directly to the user profile options modal in figma
const UserProfileOptionsModal = ({ visible }) => {
  const menuItems = [
    {
      label: 'Edit Profile',
      SvgIcon: Edit,
      id: '1'
    },
    {
      label: 'Settings',
      SvgIcon: Settings,
      id: '2'
    },
    {
      label: 'Share Profile',
      SvgIcon: Share,
      id: '3'
    },
    {
      label: 'Sportsground Profile',
      SvgIcon: Swap,
      id: '4'
    },
    {
      label: 'Report a Problem',
      SvgIcon: Report,
      id: '5'
    },
    {
      label: 'Log out',
      SvgIcon: Logout,
      id: '6'
    }
  ];

  return (
    <OptionsModal
      visible={visible}
      menuItems={menuItems} // Pass the user profile-specific menu items
    />
  );
};

export default UserProfileOptionsModal;
