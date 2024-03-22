import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import match from '../../../assets/images/match.png';

const FeedHeader = () => {
  const handleNewsFeedPress = () => {};

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleNewsFeedPress}>
        <Image source={match} style={styles.newsFeedIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText}>Assistant</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: '#333',
    marginBottom: 20,
    borderRadius: 6,
  },
  newsFeedIcon: {
    width: 30,
    height: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FeedHeader;
