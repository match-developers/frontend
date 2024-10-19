/**
 * Edit Profile Screen: Allows users to change profile photo, username, and bio.
 * Includes Cancel and Confirm buttons for submission.
 */

import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  Alert 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker'; // 이미지 선택 라이브러리
import axios from 'axios'; // 백엔드 요청 처리

const API_URL = 'http://your-backend-url/user/profile/edit/'; // 프로필 수정 API

const EditProfile = () => {
  const navigation = useNavigation(); // 네비게이션 훅
  const [profilePhoto, setProfilePhoto] = useState(null); // 프로필 사진 상태
  const [username, setUsername] = useState(''); // 유저네임 상태
  const [bio, setBio] = useState(''); // 바이오 상태

  // 이미지 선택 함수
  const handleSelectPhoto = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setProfilePhoto(uri); // 선택된 이미지 URI 저장
      }
    });
  };

  // 프로필 업데이트 함수
  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('bio', bio);

    if (profilePhoto) {
      const filename = profilePhoto.split('/').pop();
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      formData.append('profile_photo', {
        uri: profilePhoto,
        name: filename,
        type: type,
      });
    }

    try {
      await axios.put(API_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      Alert.alert('Success', 'Profile updated successfully.');
      navigation.navigate('MainScreen'); // 유저 메인으로 이동
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update profile.');
    }
  };

  return (
    <View style={styles.container}>
      {/* 페이지 헤더 */}
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Edit Profile</Text>

      {/* 프로필 사진 */}
      <TouchableOpacity onPress={handleSelectPhoto}>
        {profilePhoto ? (
          <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
        ) : (
          <View style={styles.placeholder}>
            <Text>Select Photo</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* 유저네임 입력 */}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      {/* 바이오 입력 */}
      <TextInput
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        style={styles.input}
        multiline
      />

      {/* 취소 및 확인 버튼 */}
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => navigation.navigate('MainScreen')} />
        <Button title="Confirm" onPress={handleUpdateProfile} />
      </View>
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 16,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default EditProfile;