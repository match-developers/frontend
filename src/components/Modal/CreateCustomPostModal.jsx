import React from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const CustomPostModal = ({
  isCreatePostModalVisible,
  setCreatePostModalVisible,
  newPostCaption,
  setNewPostCaption,
  newPostContent,
  setNewPostContent,
  createPost,
}) => {
  return (
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomPostModal;
