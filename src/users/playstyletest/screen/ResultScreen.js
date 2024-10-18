import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_URL = 'http://your-backend-url/user/playstyle/';

const ResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { playstyle } = route.params;
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchPlaystyle = async () => {
      try {
        const response = await axios.get(`${API_URL}${playstyle}/`);
        setDescription(response.data.description);
      } catch (error) {
        console.error(error);
        setDescription('Error fetching playstyle description.');
      }
    };

    fetchPlaystyle();
  }, [playstyle]);

  const handleRetry = () => {
    navigation.navigate('TestScreen'); // 플레이스타일 테스트 화면으로 이동
  };

  return (
    <View style={styles.container}>
      <Text style={styles.playstyleText}>{playstyle}</Text>
      {description ? (
        <Text style={styles.descriptionText}>{description}</Text>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}

      {/* Retry 버튼 */}
      <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
        <Text style={styles.retryButtonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
  },
  playstyleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    marginTop: 20,
    backgroundColor: '#FFB433',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  retryButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultScreen;