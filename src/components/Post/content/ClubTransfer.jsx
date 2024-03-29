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
              <Text style={styles.bold}>{data.user}</Text> {data.content}
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
    content: 'Manchester United is interested in John Doe',
    details:
      'Ranking in League: 2 | Number of Players: 24 | Win: 18 Draw: 5 Lost: 2 | Established Year: 1878',
  },
  {
    id: 102,
    user: 'Transfer News',
    content:
      'John Doe has been transferred from Arsenal FC to Manchester United',
    details: 'Joining as a key player | Date: 2023-04-15',
  },
  {
    id: 103,
    user: 'Transfer News',
    content: 'John Doe has quit from Arsenal FC',
    details:
      'Stats: Total Match Played: 250 | Win: 150 Draw: 50 Lost: 50 | Total MVP Selected: 20 | Manner Score: 9.5',
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
  bold: {
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
    color: '#6b7280',
  },
});
