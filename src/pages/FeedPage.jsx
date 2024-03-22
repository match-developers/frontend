import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import FeedHeader from '../components/Header/FeedHeader';
import CustomPostModal from '../components/Modal/CreateCustomPostModal';
import FeedFooter from '../components/Footer/FeedFooter';
import Post from '../components/Post/Post';

const FeedPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'User1',
      caption: '',
      content: 'This is post 1',
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      user: 'User2',
      caption: '',
      content: 'This is post 2',
      likes: 0,
      comments: [],
    },
    // Add more posts as needed
  ]);
  const [isCreatePostModalVisible, setCreatePostModalVisible] = useState(false);
  const [newPostCaption, setNewPostCaption] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const createPost = () => {
    const newPost = {
      id: posts.length + 1,
      user: 'CurrentUser',
      content: newPostContent,
      caption: newPostCaption,
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
    setCreatePostModalVisible(false);
    setNewPostCaption('');
    setNewPostContent('');
  };

  const likePost = postId => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {...post, likes: post.likes + 1};
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const deletePost = postId => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  const renderPostItem = ({item}) => (
    <Post item={item} likePost={likePost} deletePost={deletePost} />
  );

  return (
    <View style={containerStyles.container}>
      <FeedHeader />
      <View style={topBarStyles.topBar}>
        <TouchableOpacity
          onPress={() => setCreatePostModalVisible(true)}
          style={topBarStyles.createPostButton}>
          <Text style={topBarStyles.createPostButtonText}>Create Post</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={renderPostItem}
        style={postsListStyles.postsList}
      />

      <CustomPostModal
        isCreatePostModalVisible={isCreatePostModalVisible}
        setCreatePostModalVisible={setCreatePostModalVisible}
        newPostCaption={newPostCaption}
        setNewPostCaption={setNewPostCaption}
        newPostContent={newPostContent}
        setNewPostContent={setNewPostContent}
        createPost={createPost}
      />
      <FeedFooter />
    </View>
  );
};

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const topBarStyles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  createPostButton: {
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  createPostButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const postsListStyles = StyleSheet.create({
  postsList: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8,
  },
});

export default FeedPage;
