import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import LeagueHeader from '../../Header/LeagueHeader';

const teams = [
  {name: 'Team 1', MP: 10, W: 6, D: 2, L: 2, PTs: 20},
  {name: 'Team 2', MP: 10, W: 5, D: 3, L: 2, PTs: 18},
];

const LeagueTable = ({route}) => {
  const [activeTab, setActiveTab] = useState('matches');
  const {matchPosts} = route.params;
  const filteredMatchPosts = matchPosts.filter(
    post => post.selectedOption === 'Match Post',
  );
  const [stats] = useState({
    ranking: 1,
    goalScored: 25,
    matchesPlayed: 10,
    mvpSelected: 'Player 1',
    mannerScore: 4.5,
  });
  const renderMatches = ({item}) => (
    <View style={styles.postContainer}>
      <Text>{item.content}</Text>
    </View>
  );

  const renderTable = () => {
    return (
      <View>
        <Text style={styles.leagueTitle}>K-League - Round 2 of 5</Text>
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
    <View style={styles.container}>
      <LeagueHeader
        onMatchesPress={() => setActiveTab('matches')}
        onTablePress={() => setActiveTab('table')}
        onStatsPress={() => setActiveTab('stats')}
      />
      <View style={styles.contentContainer}>
        {activeTab === 'matches' && (
          <FlatList
            data={filteredMatchPosts}
            keyExtractor={post => post.id.toString()}
            renderItem={renderMatches}
            style={styles.postsList}
          />
        )}
        {activeTab === 'table' && renderTable()}
        {activeTab === 'stats' && renderStats()}
      </View>
    </View>
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
  postsList: {
    marginTop: 10,
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default LeagueTable;
