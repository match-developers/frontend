import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

import FeedHeader from '../components/Header/FeedHeader';
import CustomPostModal from '../components/Modal/CreateCustomPostModal';
import FeedFooter from '../components/Footer/FeedFooter';
import Post from '../components/Post/Post';
import {getPosts} from '../services/postServices';
import {logout} from '../services/axios';

const FeedPage = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  const [isCreatePostModalVisible, setCreatePostModalVisible] = useState(false);
  const [newPostCaption, setNewPostCaption] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedOption, setSelectedOption] = useState('Match Post');
  const [attachedFiles, setAttachedFiles] = useState([]);

  const createPost = () => {
    const newPost = {
      id: posts.length + 1,
      user: 'CurrentUser',
      content: newPostContent,
      caption: newPostCaption,
      likes: 0,
      comments: [],
      selectedOption: selectedOption, // Added selected option to post
    };
    setPosts([newPost, ...posts]);
    setCreatePostModalVisible(false);
    setNewPostCaption('');
    setNewPostContent('');
    setAttachedFiles([]);
    setSelectedOption('Match Post');
  };

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

  const pickFile = () => {
    const options = {
      title: 'Select File',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const {uri, fileName, type} = response;
        // Add the selected file to the attached files state
        setAttachedFiles([...attachedFiles, {uri, fileName, type}]);
      }
    });
  };

  const handlePostPress = post => {
    if (post.selectedOption === 'Match Post') {
      navigation.navigate('MatchInfo');
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
        isCreatePostModalVisible={isCreatePostModalVisible}
        setCreatePostModalVisible={setCreatePostModalVisible}
        newPostCaption={newPostCaption}
        setNewPostCaption={setNewPostCaption}
        newPostContent={newPostContent}
        setNewPostContent={setNewPostContent}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        createPost={createPost}
        pickFile={pickFile}
        attachedFiles={attachedFiles}
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
