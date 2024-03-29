import React, {useState} from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {createCustomPost as createCustomPostService} from '../../services/postServices';

const CustomPostModal = ({
  setPosts,
  posts,
  isCreatePostModalVisible,
  setCreatePostModalVisible,
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Custom Post', value: 'Custom Post'},
    {label: 'Match Post', value: 'Match Post'},
    {label: 'League Table', value: 'League Table'},
    {label: 'Club Transfer', value: 'Club Transfer'},
    {label: 'Rank Change', value: 'Rank Change'},
  ]);
  const [newPostCaption, setNewPostCaption] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);

  const createPost = async () => {
    const newPost = {
      title: newPostCaption,
      text: newPostContent,
    };

    try {
      const createdPost = await createCustomPostService(newPost);
      // setPosts([createdPost, ...posts]);
      setCreatePostModalVisible(false);
      setNewPostCaption('');
      setNewPostContent('');
      setAttachedFiles([]);
      setSelectedOption('');
    } catch (error) {
      console.error('Failed to create post', error);
    }
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
        setAttachedFiles([...attachedFiles, {uri, fileName, type}]);
      }
    });
  };

  return (
    <Modal
      visible={isCreatePostModalVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <DropDownPicker
            open={open}
            value={selectedOption}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedOption}
            setItems={setItems}
          />
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
          <TouchableOpacity onPress={pickFile} style={styles.attachmentButton}>
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
            <TouchableOpacity onPress={createPost} style={styles.uploadButton}>
              <Text style={styles.buttonText}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default CustomPostModal;
