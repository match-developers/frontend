//the screen is a back button and settings header. two buttons that are labels and chevrons indicating they lead to the settings modals.
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AccountSettingsModal from './AccountSettingsModal';
import SupportSettingsModal from './SupportSettingsModal';
import BackButton from 'match/frontend/src/common/component/BackButton'; // Import BackButton component
import ChevronRight from 'match/frontend/assets/SVGs/default/ChevronRight'; // Import ChevronRight SVG

const SettingsScreen = () => {
  const [accountModalVisible, setAccountModalVisible] = useState(false);
  const [supportModalVisible, setSupportModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* 헤더 - 뒤로가기 버튼 및 타이틀 */}
      {/* Header with Back Button and Title */}
      <View style={styles.headerContainer}>
        <BackButton onPress={() => console.log('Go back')} />{' '}
        {/* 뒤로가기 버튼 (로그 출력) / Back Button */}
        <Text style={styles.headerText}>Settings</Text>{' '}
        {/* 중앙에 타이틀 / Centered Title */}
      </View>

      {/* 계정 관리 버튼 */}
      {/* Account Management Button */}
      <TouchableOpacity
        style={styles.row}
        onPress={() => setAccountModalVisible(true)}
      >
        <Text style={styles.label}>Account Management</Text>{' '}
        {/* 계정 관리 텍스트 / Account Management Label */}
        <ChevronRight width={24} height={24} fill="#000" />{' '}
        {/* 오른쪽 화살표 / ChevronRight Arrow */}
      </TouchableOpacity>

      {/* 계정 관리 모달 */}
      {/* Account Settings Modal */}
      <AccountSettingsModal
        visible={accountModalVisible}
        onClose={() => setAccountModalVisible(false)}
      />

      {/* 지원 및 기타 버튼 */}
      {/* Help and Support Button */}
      <TouchableOpacity
        style={styles.row}
        onPress={() => setSupportModalVisible(true)}
      >
        <Text style={styles.label}>Help and Support</Text>{' '}
        {/* 지원 및 기타 텍스트 / Help and Support Label */}
        <ChevronRight width={24} height={24} fill="#000" />{' '}
        {/* 오른쪽 화살표 / ChevronRight Arrow */}
      </TouchableOpacity>

      {/* 지원 및 기타 모달 */}
      {/* Support Settings Modal */}
      <SupportSettingsModal
        visible={supportModalVisible}
        onClose={() => setSupportModalVisible(false)}
      />
    </View>
  );
};

// 스타일 정의
// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // 배경색 흰색 / Background color (light white)
    paddingHorizontal: 16 // 화면 좌우 여백 / Horizontal padding for the screen
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 48, // 헤더와 컨텐츠 사이 간격 / Space between header and content
    justifyContent: 'center' // 중앙 정렬 / Center alignment
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // 텍스트와 화살표 사이 공간 / Space between label and arrow
    alignItems: 'center', // 수직 가운데 정렬 / Vertical center alignment
    paddingVertical: 36, // 각 행의 세로 패딩 / Vertical padding for each row
    borderBottomWidth: 1, // 행 하단의 선 / Bottom border for the row
    borderBottomColor: '#E0E0E0' // 행 하단의 선 색상 (연한 회색) / Light grey bottom border
  },
  label: {
    fontSize: 16,
    color: '#000'
  }
});

export default SettingsScreen;
