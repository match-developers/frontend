// 설정 메인 화면
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from 'match/frontend/src/common/component/later/BackButton'; // 백 버튼 임포트

const SettingsMain = () => {
  const navigation = useNavigation(); // 네비게이션 훅 사용

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <BackButton onPress={() => navigation.navigate('MainScreen')} />
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* 설정 옵션 */}
      <ScrollView contentContainerStyle={styles.optionsContainer}>
        {/* 계정 관리 섹션 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('AccountModal')}
          style={styles.option}
        >
          <Text style={styles.optionText}>Account Management</Text>
        </TouchableOpacity>

        {/* 도움 및 지원 섹션 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SupportModal')}
          style={styles.option}
        >
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16, // 백 버튼 옆에 여백 추가
  },
  optionsContainer: {
    padding: 16,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
});

export default SettingsMain;