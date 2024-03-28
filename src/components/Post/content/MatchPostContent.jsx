import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MatchPostContent = () => {
  return (
    <View style={styles.container}>
      {/* Media -- middle container */}
      <View style={styles.mediaContainer}>
        {/* top left text*/}
        <Text style={styles.topLeftText}>Sports/Public or private</Text>
        {/* team 1*/}
        <View style={styles.teamsContainer}>
          <View style={styles.circle}>
            <Text style={styles.teamText}>Team 1</Text>
          </View>
          {/* score and vs text*/}
          <Text style={styles.scoreText}>0</Text>
          <Text style={styles.vsText}>vs</Text>
          <Text style={styles.scoreText}>0</Text>
          {/* team 2*/}
          <View style={styles.circle}>
            <Text style={styles.teamText}>Team 2</Text>
          </View>
        </View>
        {/* top right text*/}
        <Text style={styles.topRightText}>Date: 00/00/00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
  },
  headerContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mediaContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeftText: {
    position: 'absolute',
    top: 5,
    left: 5,
    fontSize: 12,
    color: '#000',
  },
  topRightText: {
    position: 'absolute',
    top: 5,
    right: 5,
    fontSize: 12,
    color: '#000',
  },
  teamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  circle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 24.5,
    marginHorizontal: 5,
  },
  scoreText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  vsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 20,
  },
  teamInfoText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 150,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
  },
});

export default MatchPostContent;
