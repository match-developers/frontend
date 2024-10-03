import React from 'react';
import { Modal, Button, View, Text } from 'react-native';

const SupportSettingsModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <View>
        <Text>지원 및 기타</Text>

        <Text>이메일: support@yourapp.com</Text>
        <Text>전화번호: 123-456-7890</Text>
        <Text>이용 약관: terms and conditions... </Text>

        <Button title="돌아가기" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default SupportSettingsModal;
