import React from 'react';
import { View, Text, StyleSheet, Modal, FlatList } from 'react-native';

// i made a component that can be customed where it is imported. i made this component to only have definitions and styling so that its completely blank and ready for new files
const OptionsModal = ({ visible, menuItems }) => {
  // Function to render each menu item
  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text style={styles.menuText}>{item.label}</Text>
      {item.SvgIcon && (
        <item.SvgIcon width={24} height={24} style={styles.icon} />
      )}
    </View>
  );

  return (
    <Modal
      transparent={true}
      visible={visible} // modal opens when visible is true and closes when it's false
      animationType="none"
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <FlatList
            data={menuItems} // List of menu items to display
            keyExtractor={item => item.id} // Unique key for each item
            renderItem={renderItem} // Render each item using renderItem
            scrollEnabled={true}
            bounces={true}
          />
        </View>
      </View>
    </Modal>
  );
};

// i customized all the styling
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Dim background when modal is open
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
    borderBottomColor: '#CCCCCC' // Border between each menu item
  },
  menuText: {
    fontSize: 20,
    fontFamily: 'Exo 2',
    fontWeight: '500' // Styling for the text label
  },
  icon: {
    marginLeft: 10 // Space between the label and the icon
  }
});

export default OptionsModal;
