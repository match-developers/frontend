import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const LeagueHeader = ({onMatchesPress, onTablePress, onStatsPress}) => {
  const [activeTab, setActiveTab] = useState('matches');

  const handleMatchesPress = () => {
    setActiveTab('matches');
    onMatchesPress();
  };

  const handleTablePress = () => {
    setActiveTab('table');
    onTablePress();
  };

  const handleStatsPress = () => {
    setActiveTab('stats');
    onStatsPress();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[styles.button, activeTab === 'matches' && styles.activeButton]}
        onPress={handleMatchesPress}>
        <Text>Matches</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, activeTab === 'table' && styles.activeButton]}
        onPress={handleTablePress}>
        <Text>Table</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, activeTab === 'stats' && styles.activeButton]}
        onPress={handleStatsPress}>
        <Text>Stats</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#cccccc',
  },
  activeButton: {
    backgroundColor: '#3498db',
  },
});

export default LeagueHeader;
