import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // 백엔드 호출을 위한 axios 임포트
import Header from 'match/frontend/src/common/component/PageHeader'; // 헤더 컴포넌트

const AccountModal = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 표시 상태

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSave = () => {
    Alert.alert('Saved', 'Your changes have been saved.');
    navigation.navigate('SettingsMain');
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await axios.delete('http://your-backend-url/user/delete/', {
        headers: { Authorization: `Bearer your-auth-token` }, // 인증 토큰 필요 시 설정
      });

      if (response.status === 204) {
        Alert.alert('Account Deleted', 'Your account has been deleted.');
        navigation.navigate('SettingsMain'); // 삭제 후 메인으로 이동
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to delete account. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Account Management" onBackPress={() => navigation.navigate('SettingsMain')} />

      <View style={styles.field}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F2F2F2',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#F2F2F2',
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  toggleButton: {
    paddingHorizontal: 12,
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  deleteButton: {
    marginTop: 20,
    backgroundColor: '#ff4d4d',
    padding: 12,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 8,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AccountModal;