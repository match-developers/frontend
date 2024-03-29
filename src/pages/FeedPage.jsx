import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FeedHeader from '../components/Header/FeedHeader';
import CustomPostModal from '../components/Modal/CreateCustomPostModal';
import FeedFooter from '../components/Footer/FeedFooter';
import Post from '../components/Post/Post';
import {getCustomPosts} from '../services/postServices';
import {logout} from '../services/axios';

const FeedPage = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [isCreatePostModalVisible, setCreatePostModalVisible] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getCustomPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Home');
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

  const handlePostPress = post => {
    if (post.selectedOption === 'Match Post') {
      navigation.navigate('MatchInfo');
    }
    if (post.selectedOption === 'League Table') {
      navigation.navigate('LeagueTable', {matchPosts: posts});
    }
  };

  const renderPostItem = ({item}) => (
    <Post
      item={item}
      likePost={likePost}
      deletePost={deletePost}
      handlePostPress={handlePostPress}
    />
  );

  return (
    <View style={containerStyles.container}>
      <FeedHeader />
      <View style={topBarStyles.topBar}>
        <TouchableOpacity style={topBarStyles.logoButton}>
          <Text style={topBarStyles.logo}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCreatePostModalVisible(true)}
          style={topBarStyles.createPostButton}>
          <Text style={topBarStyles.createPostButtonText}>Create Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleLogout()}
          style={topBarStyles.logOutButton}>
          <Text style={topBarStyles.logOutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={renderPostItem}
        style={postsListStyles.postsList}
      />

      <CustomPostModal
        setPosts={setPosts}
        posts={posts}
        isCreatePostModalVisible={isCreatePostModalVisible}
        setCreatePostModalVisible={setCreatePostModalVisible}
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logoButton: {
    marginRight: 'auto',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  headerButton: {
    marginLeft: 20,
  },
  createPostButton: {
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  createPostButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logOutButton: {
    backgroundColor: '#a4c639',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  logOutButtonText: {
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
