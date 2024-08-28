import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PostHeader from '../Header/PostHeader';

const Post = ({item, likePost, deletePost, handlePostPress}) => {
  return (
    <TouchableOpacity onPress={() => handlePostPress(item)}>
      <View style={styles.postContainer}>
        <Text style={styles.username}>{item.user}</Text>
        <PostHeader item={item} />
        <Text>{item.content}</Text>
        {item.selectedOption && <Text>{item.selectedOption}</Text>}
        <View style={styles.postActions}>
          <TouchableOpacity
            onPress={() => likePost(item.id)}
            style={styles.actionButton}>
            <Text>Like ({item.likes})</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deletePost(item.id)}
            style={styles.actionButton}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  postActions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8,
  },
  actionButton: {
    marginRight: 8,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default Post;
