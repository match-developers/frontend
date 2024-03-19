import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import Header from '../components/Header';

const Feed = () => {
  const [posts, setPosts] = useState([
    {id: 1, user: 'User1', content: 'This is post 1', likes: 0, comments: []},
    {id: 2, user: 'User2', content: 'This is post 2', likes: 0, comments: []},
  ]);
  const [isCreatePostModalVisible, setCreatePostModalVisible] = useState(false);
  const [newPostCaption, setNewPostCaption] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);

  const createPost = () => {
    const newPost = {
      id: posts.length + 1,
      user: 'CurrentUser',
      content: newPostContent,
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
    setCreatePostModalVisible(false);
    setNewPostCaption('');
    setNewPostContent('');
    setAttachedFiles([]);
  };

  // Should add feature: max 1 like per each user
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

  const renderPostItem = ({item}) => (
    <View style={styles.postContainer}>
      <Text style={styles.username}>{item.user}</Text>
      <Text>{item.content}</Text>
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
  );

  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.logoButton}>
          <Text style={styles.logo}>Match</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text>Assistant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCreatePostModalVisible(true)}
          style={styles.createPostButton}>
          <Text style={styles.createPostButtonText}>Create Post</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={renderPostItem}
        style={styles.postsList}
      />

      <Modal
        visible={isCreatePostModalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Caption"
              style={styles.input}
              value={newPostCaption}
              onChangeText={setNewPostCaption}
            />
            <TextInput
              placeholder="Contents"
              style={[styles.input, styles.textArea]}
              multiline={true}
              value={newPostContent}
              onChangeText={setNewPostContent}
            />
            <TouchableOpacity
              onPress={pickFile}
              style={styles.attachmentButton}>
              <Text>Attachment</Text>
            </TouchableOpacity>
            <View>
              {attachedFiles.map((file, index) => (
                <Text key={index}>{file.fileName}</Text>
              ))}
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                onPress={() => setCreatePostModalVisible(false)}
                style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={createPost}
                style={styles.uploadButton}>
                <Text style={styles.buttonText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Bottom bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text>Main</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logoButton: {
    marginRight: 'auto',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerButton: {
    marginLeft: 20,
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
  postsList: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8,
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
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 8,
  },
  bottomBarButton: {
    flex: 1,
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  textArea: {
    height: 100,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  uploadButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  attachmentButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Feed;
