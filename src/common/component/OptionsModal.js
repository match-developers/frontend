import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';
import EditIcon from 'match/frontend/assets/SVGs/default/IconEdit';
import SettingsIcon from 'match/frontend/assets/SVGs/default/IconSettings';
import ShareIcon from 'match/frontend/assets/SVGs/default/IconShare';
import SwapIcon from 'match/frontend/assets/SVGs/default/IconSwap';
import ReportIssueIcon from 'match/frontend/assets/SVGs/default/IconReportIssue';
import LogoutIcon from 'match/frontend/assets/SVGs/default/IconLogout';

const OptionsModal = ({ visible, onClose }) => {
  const menuItems = [
    { label: 'Edit Profile', SvgIcon: EditIcon, id: '1' },
    { label: 'Settings', SvgIcon: SettingsIcon, id: '2' },
    { label: 'Share Profile', SvgIcon: ShareIcon, id: '3' },
    { label: 'Sportsground Profile', SvgIcon: SwapIcon, id: '4' },
    { label: 'Report a Problem', SvgIcon: ReportIssueIcon, id: '5' },
    { label: 'Log out', SvgIcon: LogoutIcon, id: '6' }
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => console.log(`${item.label} clicked`)}
    >
      <Text style={styles.menuText}>{item.label}</Text>
      <item.SvgIcon width={24} height={24} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      animationType="none"
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <FlatList
                data={menuItems}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                scrollEnabled={true}
                bounces={true}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  modalContainer: {
    width: '60%',
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    maxHeight: 'auto'
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC'
  },
  menuText: {
    fontSize: 20,
    fontFamily: 'Exo 2',
    fontWeight: '500'
  },
  icon: {
    marginLeft: 10
  }
});

export default OptionsModal;
