//text componetn displaying the userbio. no interactions
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BioBox = ({ bio = 'Bio text goes here' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {bio.length > 80 ? bio.slice(0, 80) : bio}
      </Text>
    </View>
  );
};

//customised styles
const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Exo 2',
    color: '#000000'
  }
});

export default BioBox;
