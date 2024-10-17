import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// 각 스크린 파일 임포트
import EditMain from 'src/users/edit/screen/main';
import SettingsMain from 'src/users/setting/screen/main';
import ReportMain from 'src/users/report/screen/main';
import ManageSportsGround from 'src/sportsgrounds/manage/screen/main';

// 스택 생성
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EditProfile">
        
        {/* 프로필 수정 스크린 */}
        <Stack.Screen 
          name="EditProfile" 
          component={EditMain} 
          options={{ title: 'Edit Profile' }} 
        />

        {/* 설정 스크린 */}
        <Stack.Screen 
          name="Settings" 
          component={SettingsMain} 
          options={{ title: 'Settings' }} 
        />

        {/* 신고 스크린 */}
        <Stack.Screen 
          name="Report" 
          component={ReportMain} 
          options={{ title: 'Report' }} 
        />

        {/* 스포츠 그라운드 관리 스크린 */}
        <Stack.Screen 
          name="ManageSportsGround" 
          component={ManageSportsGround} 
          options={{ title: 'Manage Sports Ground' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;