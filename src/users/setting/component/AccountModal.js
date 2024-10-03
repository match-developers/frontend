import React, { useState } from 'react';
import { Modal, TextInput, Button, View, Text } from 'react-native';

const AccountSettingsModal = ({ visible, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <View>
        <Text>계정 관리</Text>

        <TextInput
          placeholder="이메일 수정"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="비밀번호 수정"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="전화번호 수정"
          value={phone}
          onChangeText={setPhone}
        />

        <Button title="계정 삭제" onPress={() => console.log('계정 삭제')} />
        <Button title="돌아가기" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default AccountSettingsModal;
