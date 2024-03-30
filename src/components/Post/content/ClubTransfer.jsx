import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ClubTransfer = ({data}) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.postLogo} />
          <View>
            <Text>
              {data.user}
              {'\n'}
              <Text style={styles.bold}>{data.content}</Text>
            </Text>
            <Text style={styles.smallText}>{data.details}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const clubtransferData = [
  {
    id: 101,
    user: 'Transfer News',
    type: 'clubisInterested',
    content: 'FC Seoul is interested in John Doe',
    details:
      'Ranking in League: 2 \n Number of Players: 24 \n Win: 18 Draw: 5 Lost: 2 \n Established Year: 2020',
  },
  {
    id: 102,
    user: 'Transfer News',
    type: 'userTransferred',
    content: 'John Doe transferred! \n Arsenal FC to FC Seoul',
    details: 'Joining as a key player | Date: 2023-04-15',
  },
  {
    id: 103,
    user: 'Transfer News',
    type: 'userQuitClub',
    content: 'John Doe has quit from Arsenal FC',
    details:
      'Stats: Total Match Played: 20\nWin: 9\nDraw: 5\nLost: 6\nTotal MVP Selected: 20\nManner Score: 9.5',
  },
  {
    id: 104,
    user: 'Transfer News',
    type: 'userJoinClub',
    content: 'John Doe joined Arsenal FC',
    details: "Let's go!",
  },
];

const styles = StyleSheet.create({
  postContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  post: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 20,
    padding: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  postLogo: {
    width: 50,
    height: 50,
    backgroundColor: '#d1d5db',
    borderRadius: 25,
    marginRight: 10,
  },
  postContent: {
    flex: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
    color: '#6b7280',
  },
});
