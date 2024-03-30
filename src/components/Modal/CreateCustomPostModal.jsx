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
  const [attachedFile, setAttachedFile] = useState(null);

  const createPost = async () => {
    const formData = new FormData();
    formData.append('title', newPostCaption);
    if (newPostContent !== '') {
      formData.append('text', newPostContent);
    }
    if (attachedFile) {
      if (attachedFile.type.startsWith('image/')) {
        formData.append('image', attachedFile);
      } else if (attachedFile.type.startsWith('video/')) {
        formData.append('video', attachedFile);
      }
    }

    try {
      const createdPost = await createCustomPostService(formData);
      setCreatePostModalVisible(false);
      setNewPostCaption('');
      setNewPostContent('');
      setAttachedFile(null);
      setSelectedOption('');
    } catch (error) {
      console.error('Failed to create post', error);
    }
  };

  const pickFile = () => {
    const options = {
      title: 'Select File',
      mediaType: 'mixed',
      storageOptions: {
        skipBackup: true,
        path: 'media',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const {fileName, uri, type} = response.assets[0];
        const file = {
          uri,
          name: fileName,
          type,
        };
        setAttachedFile(file);
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
          <View>{attachedFile && <Text>{attachedFile.name}</Text>}</View>
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
