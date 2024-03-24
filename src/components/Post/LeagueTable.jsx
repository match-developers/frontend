import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import LeagueHeader from '../Header/LeagueHeader';

const teams = [
  {name: 'Team 1', MP: 10, W: 6, D: 2, L: 2, PTs: 20},
  {name: 'Team 2', MP: 10, W: 5, D: 3, L: 2, PTs: 18},
];

const LeagueTable = ({route}) => {
  const [activeTab, setActiveTab] = useState('matches');
  const {matchPosts} = route.params;
  const [stats] = useState({
    ranking: 1,
    goalScored: 25,
    matchesPlayed: 10,
    mvpSelected: 'Player 1',
    mannerScore: 4.5,
  });

  const renderMatches = () => {
    return (
      <View style={styles.container}>
        {/* Render match posts */}
        {matchPosts.map(post => (
          <View key={post.id} style={styles.postContainer}>
            <Text>{post.content}</Text>
            {/* Add other post details here */}
          </View>
        ))}
      </View>
    );
  };

  const renderTable = () => {
    return (
      <View>
        <Text style={styles.leagueTitle}>K-League - Round 2 of 5</Text>
        {/* Render league table here */}
        <Text>League Table</Text>
        {teams.map((team, index) => (
          <Text key={index}>
            {team.name} - MP: {team.MP}, W: {team.W}, D: {team.D}, L: {team.L},
            PTs: {team.PTs}
          </Text>
        ))}
      </View>
    );
  };

  const renderStats = () => {
    return (
      <View>
        {/* Render stats page here */}
        <Text>Stats Page</Text>
        <Text>Ranking: {stats.ranking}</Text>
        <Text>Goal Scored: {stats.goalScored}</Text>
        <Text>Matches Played: {stats.matchesPlayed}</Text>
        <Text>MVP Selected: {stats.mvpSelected}</Text>
        <Text>Manner Score: {stats.mannerScore}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Include LeagueHeader component */}
      <LeagueHeader
        onMatchesPress={() => setActiveTab('matches')}
        onTablePress={() => setActiveTab('table')}
        onStatsPress={() => setActiveTab('stats')}
      />
      <View style={styles.contentContainer}>
        <View style={styles.tableContainer}>
          {/* Render content based on activeTab state */}
          {activeTab === 'matches' && renderMatches()}
          {activeTab === 'table' && renderTable()}
          {activeTab === 'stats' && renderStats()}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    padding: 20,
  },
  leagueTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
  },
});

export default LeagueTable;
