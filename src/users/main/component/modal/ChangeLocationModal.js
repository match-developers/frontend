//it takes up the whole screen. interactions are just clickable buttons atm. the pin doesnt move, there is no map, just  acontainer for it.
import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import BackButton from 'match/frontend/src/common/components/BackButton';
import PinIcon from 'match/frontend/assets/SVGs/default/IconPin';

const ChangeLocationModal = ({ visible, location = 'Location Name' }) => {
  return (
    <Modal
      transparent={true} // Transparent background
      visible={visible} // Controls the visibility externally
      animationType="none" // No animation for showing/hiding the modal
    >
      <View style={styles.modalContainer}>
        {/* Back button */}
        <BackButton onPress={() => {}} /> {/* No interaction logic */}
        {/* Display location label */}
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Location: </Text>
          <Text style={styles.locationText}>
            {location.length > 30 ? location.slice(0, 30) : location}
          </Text>
        </View>
        {/* Map container placeholder. this is just to show how big the map should be*/}
        <View style={styles.mapContainer}>
          <PinIcon width={24} height={24} style={styles.pinIcon} />
          {/* Insert map API here */}
        </View>
        {/* Custom Buttons (Cancel and Confirm) */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => {}}
          >
            <Text style={styles.buttonTextCancel}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.confirmButton]}
            onPress={() => {}}
          >
            <Text style={styles.buttonTextConfirm}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
//a lcoation label with a text representation of the location pins result. under it a map with a pin in the center. under that buttons saying cancel or confirm.
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 16,
    justifyContent: 'flex-start'
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  },
  labelText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Exo 2'
  },
  locationText: {
    fontSize: 18,
    color: '#777',
    marginLeft: 4
  },
  mapContainer: {
    width: '75%',
    height: '60%',
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'center'
  },
  pinIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }]
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 320,
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center'
  },
  button: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1
  },
  cancelButton: {
    backgroundColor: '#E6E6E6',
    borderColor: '#737373'
  },
  confirmButton: {
    backgroundColor: '#ffb433',
    borderColor: '#cc9029'
  },
  buttonTextCancel: {
    color: '#737373',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonTextConfirm: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default ChangeLocationModal;
