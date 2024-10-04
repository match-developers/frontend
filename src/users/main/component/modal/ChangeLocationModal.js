//  this one is for editing. i have not applied any logic to pins till.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ReusableButton from 'match/frontend/src/common/components/later/ReusableButton';
import BackButton from 'match/frontend/src/common/components/BackButton';
import PinIcon from 'match/frontend/assets/SVGs/default/IconPin';

const ChangeLocationModal = ({
  onBackPress,
  onConfirmPress,
  onCancelPress,
  location = 'Location Name'
}) => {
  return (
    <View style={styles.modalContainer}>
      <BackButton onPress={onBackPress} />

      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Location: </Text>{' '}
        {/* //update the text to display the pin's selected location */}
        <Text style={styles.locationText}>
          {location.length > 30 ? location.slice(0, 30) : location}
        </Text>
      </View>

      <View style={styles.mapContainer}>
        <PinIcon width={24} height={24} style={styles.pinIcon} />
        {/* Insert map API here */}
      </View>

      <View style={styles.buttonContainer}>
        <ReusableButton
          text="Cancel"
          onPress={onCancelPress}
          backgroundColor="#E6E6E6"
          borderColor="#737373"
          textColor="#737373"
          width={150}
          height={40}
          borderRadius={10}
        />
        <ReusableButton
          text="Confirm"
          onPress={onConfirmPress}
          backgroundColor="#ffb433"
          borderColor="#cc9029"
          width={150}
          height={40}
          borderRadius={10}
        />
      </View>
    </View>
  );
};

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
    transform: [{ translateX: -12 }, { translateY: -12 }] // Pin stays in the middle CHNAGE THIS
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 320,
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center'
  }
});

export default ChangeLocationModal;
