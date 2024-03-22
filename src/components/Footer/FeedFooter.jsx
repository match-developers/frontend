import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const FeedFooter = () => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomBarButton}>
        <Text>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarButton}>
        <Text>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarButton}>
        <Text>Community</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarButton}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 8,
  },
  bottomBarButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default FeedFooter;
