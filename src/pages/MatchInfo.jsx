import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const MatchInfo = () => {
  const [activeTab, setActiveTab] = useState('full-info');

  const handleTabPress = target => {
    setActiveTab(target);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsColumn}>
            <Text style={styles.detailsHeader}>7th July | PM 4:30</Text>
            <Text style={styles.detailsText}>Location: @somewhere</Text>
          </View>
        </View>
        <View style={styles.scoreboard}>
          <View style={styles.team}>
            <Image
              source={{uri: 'https://fakeimg.pl/50x50?text=Team+Logo'}}
              style={styles.teamLogo}
            />
            <Text style={styles.teamName}>Name FC</Text>
          </View>
          <Text style={styles.score}>7 - 9</Text>
          <View style={styles.team}>
            <Text style={styles.teamName}>Name FC</Text>
            <Image
              source={{uri: 'https://fakeimg.pl/50x50?text=Team+Logo'}}
              style={styles.teamLogo}
            />
          </View>
        </View>
        <Text style={styles.matchInfo}>
          Futsal / 6v6 / first to score 10 / Friendly
        </Text>
        <View style={styles.tabsContainer}>
          {['full-info', 'lineups', 'comparison', 'interview'].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => handleTabPress(tab)}
              style={[styles.tab, activeTab === tab && styles.activeTab]}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}>
                {tab === 'full-info'
                  ? 'Full Info'
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.tabContent}>
          <View
            style={[
              styles.tabContentItem,
              activeTab === 'full-info' && styles.activeTabContent,
            ]}>
            <Text>Match Details</Text>
            <Text>Category: Friendly</Text>
            {/*Friendly / Ranked / League / Tournament*/}
            <Text>Openness: Public</Text>
            <Text>Rules: Most points wins</Text>
            <Text>Match Time: 2 sets, 45 minutes a set</Text>
            <Text>Level: Intermediate</Text>
            <Image
              source={{
                uri: 'https://fakeimg.pl/600x400?text=Map',
              }}
              style={styles.mapImage}
            />
          </View>
          <View
            style={[
              styles.tabContentItem,
              activeTab === 'lineups' && styles.activeTabContent,
            ]}>
            <Text>Lineups</Text>
            <Image
              source={{
                uri: 'https://fakeimg.pl/600x400?text=Lineups+Placeholder',
              }}
              style={styles.lineupsImage}
            />
          </View>
          <View
            style={[
              styles.tabContentItem,
              activeTab === 'comparison' && styles.activeTabContent,
            ]}>
            <Text>Team & Player Comparison</Text>
            <Text>Comparison data will be displayed here.</Text>
          </View>
          <View
            style={[
              styles.tabContentItem,
              activeTab === 'interview' && styles.activeTabContent,
            ]}>
            <Text>Interview Highlights</Text>
            <Text>
              <Text style={styles.boldText}>Match AI:</Text>
              How do you feel about the game?
            </Text>
            <Text>
              <Text style={styles.boldText}>@ex_user:</Text>
              Great, I'm ready to I'm ready to win!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  scoreboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamLogo: {
    width: 50,
    height: 50,
  },
  teamName: {
    fontSize: 16,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  matchInfo: {
    textAlign: 'center',
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailsColumn: {
    flex: 1,
  },
  detailsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsText: {
    fontSize: 12,
    color: '#4b5563',
    marginTop: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tab: {
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginHorizontal: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4299E1',
  },
  tabText: {
    fontSize: 14,
    color: '#4299E1',
  },
  activeTab: {
    backgroundColor: '#4299E1',
  },
  activeTabText: {
    color: '#fff',
  },
  tabContent: {
    marginTop: 20,
  },
  tabContentItem: {
    display: 'none',
    paddingHorizontal: 10,
  },
  activeTabContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mapImage: {
    width: 300,
    height: 200,
    marginTop: 10,
  },
  lineupsImage: {
    width: 300,
    height: 200,
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default MatchInfo;
