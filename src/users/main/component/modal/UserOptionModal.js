//the user main instance of the options modal. defining the labels and svgs all styling is done in the common component
import React from 'react';
import OptionsModal from './OptionsModal'; // Import the reusable OptionsModal component

// Import the specific SVG icons for the user profile options
import EditIcon from 'match/frontend/assets/SVGs/default/IconEdit';
import SettingsIcon from 'match/frontend/assets/SVGs/default/IconSettings';
import ShareIcon from 'match/frontend/assets/SVGs/default/IconShare';
import SwapIcon from 'match/frontend/assets/SVGs/default/IconSwap';
import ReportIssueIcon from 'match/frontend/assets/SVGs/default/IconReportIssue';
import LogoutIcon from 'match/frontend/assets/SVGs/default/IconLogout';

// the menu items relate directly to the user profile options modal in figma
const UserProfileOptionsModal = ({ visible }) => {
  const menuItems = [
    {
      label: 'Edit Profile',
      SvgIcon: EditIcon,
      id: '1'
    },
    {
      label: 'Settings',
      SvgIcon: SettingsIcon,
      id: '2'
    },
    {
      label: 'Share Profile',
      SvgIcon: ShareIcon,
      id: '3'
    },
    {
      label: 'Sportsground Profile',
      SvgIcon: SwapIcon,
      id: '4'
    },
    {
      label: 'Report a Problem',
      SvgIcon: ReportIssueIcon,
      id: '5'
    },
    {
      label: 'Log out',
      SvgIcon: LogoutIcon,
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
