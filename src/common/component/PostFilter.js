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

// Reusable OptionsModal component that can take any set of menu items through props
const OptionsModal = ({ visible, onClose, menuItems }) => {
  // Render each menu item do they are individuals and can have their own logic. they have text and an svg in them and an toucahbel opacity prop
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={item.onPress} // Action to be executed when the item is pressed
    >
      <Text style={styles.menuText}>{item.label}</Text>
      {item.SvgIcon && (
        <item.SvgIcon width={24} height={24} style={styles.icon} />
      )}
    </TouchableOpacity>
  );

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose} // Action to close the modal
      animationType="none"
    >
      {/* Close modal on outside press */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          {/* Modal content */}
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <FlatList
                data={menuItems} // List of menu items to display
                keyExtractor={item => item.id} // Unique key for each item
                renderItem={renderItem} // Render each item using renderItem
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

// Styles for the modal and menu items
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
