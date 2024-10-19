// 설정 메인 화면
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from 'match/frontend/src/common/component/later/BackButton'; // 백 버튼 임포트
import ChevronRight from 'match/frontend/assets/SVGs/default/ChevronRight'; // Import ChevronRight SVG

const SettingsMain = () => {
  const navigation = useNavigation(); // 네비게이션 훅 사용

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.headerContainer}>
        <BackButton onPress={() => navigation.navigate('MainScreen')} />
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* 설정 옵션 */}
      <ScrollView contentContainerStyle={styles.optionsContainer}>
        {/* 계정 관리 섹션 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('AccountModal')}
          style={styles.option}
        >
          <Text style={styles.label}>Account Management</Text>
          <ChevronRight width={24} height={24} fill="#000" />
          {/* 오른쪽 화살표 / ChevronRight Arrow */}
        </TouchableOpacity>

        {/* 도움 및 지원 섹션 */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SupportModal')}
          style={styles.option}
        >
          <Text style={styles.label}>Help & Support</Text>
          <ChevronRight width={24} height={24} fill="#000" />
          {/* 오른쪽 화살표 / ChevronRight Arrow */}
        </TouchableOpacity>
      </ScrollView>
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
  optionsContainer: {
    paddingVertical: 16 // Vertical padding for options container
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between label and chevron
    alignItems: 'center', // Vertical center alignment
    paddingVertical: 15, // Padding for each option
    borderBottomWidth: 1, // Bottom border for each option
    borderBottomColor: '#E0E0E0' // Light grey bottom border
  },
  label: {
    fontSize: 16,
    color: '#000'
  }
});

export default SettingsMain;
