import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';

const Feed = () => {
  const [posts, setPosts] = useState([
    {id: 1, user: 'User1', content: 'This is post 1'},
    {id: 2, user: 'User2', content: 'This is post 2'},
  ]);

  const renderPostItem = ({item}) => (
    <View style={styles.postContainer}>
      <Text style={styles.username}>{item.user}</Text>
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <FlatList
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={renderPostItem}
      />

      {/* Fixed Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text>Main</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postContainer: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    height: 60,
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Feed;
