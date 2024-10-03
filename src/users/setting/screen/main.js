import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import AccountSettingsModal from './AccountSettingsModal';
import SupportSettingsModal from './SupportSettingsModal';

const SettingsScreen = () => {
  const [accountModalVisible, setAccountModalVisible] = useState(false);
  const [supportModalVisible, setSupportModalVisible] = useState(false);

  return (
    <View>
      <Button title="돌아가기" onPress={() => console.log('Go back')} />
      <Text>세팅</Text>

      {/* 계정 관리 버튼 */}
      <Button title="계정 관리" onPress={() => setAccountModalVisible(true)} />
      <AccountSettingsModal
        visible={accountModalVisible}
        onClose={() => setAccountModalVisible(false)}
      />

      {/* 지원 및 기타 버튼 */}
      <Button
        title="지원 및 기타"
        onPress={() => setSupportModalVisible(true)}
      />
      <SupportSettingsModal
        visible={supportModalVisible}
        onClose={() => setSupportModalVisible(false)}
      />
    </View>
  );
};

export default SettingsScreen;
