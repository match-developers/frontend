import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatsSelected from 'match/frontend/assests/SVGs/selected/StatsSelected'; // SVG 컴포넌트 임포트

const StatsButton = ({ label = 'Statistics' }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('StatsMain');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.iconContainer}>
        <StatsSelected width={22} height={26} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    width: 32,
    height: 36,
    borderRadius: 10,
    borderWidth: 1.3,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  label: {
    marginTop: 4,
    fontSize: 20,
    fontFamily: 'Exo 2',
    fontWeight: '400',
    color: '#000',
    textAlign: 'center'
  }
});

export default StatsButton;
