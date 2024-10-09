import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import BackIcon from 'match/frontend/assets/SVGs/default/IconBackDefault';

const BackButton = ({ onPress, style = {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.iconContainer, style]} activeOpacity={0.7}>
      <BackIcon width={24} height={24} fill={'#000'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 40, // 터치 영역을 넓게 설정
    height: 40, // 터치 영역을 넓게 설정
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // 둥근 버튼으로 설정
    backgroundColor: '#f0f0f0', // 기본 배경색 추가
  }
});

export default BackButton;