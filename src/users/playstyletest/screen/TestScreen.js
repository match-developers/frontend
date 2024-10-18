import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; 
import Header from 'match/frontend/src/common/component/PageHeader'; 
import QuestionItem from '../component/QuestionItem'; 
import SubmitButton from '../component/button/Submit'; 

const API_URL = 'http://your-backend-url/user/playstyle/update/';

const TestScreen = () => {
  const navigation = useNavigation();
  const [responses, setResponses] = useState(Array(20).fill(null)); 
  const [questions, setQuestions] = useState([]); 

  // 질문 배열 섞기
  useEffect(() => {
    const allQuestions = [
      ...QuestionItem.questions.flexibleScheduling,
      ...QuestionItem.questions.competitiveRelaxed,
      ...QuestionItem.questions.independentTeamBased,
      ...QuestionItem.questions.naturalMethodical,
    ];
    setQuestions(shuffleQuestions(allQuestions));
  }, []);

  // 사용자 응답 업데이트
  const handleSelect = (index, value) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = value;
    setResponses(updatedResponses);
  };

  // 결과 계산 함수
  const calculatePlaystyle = () => {
    const categoryScores = {
      SF: responses.slice(0, 5).reduce((a, b) => a + b, 0) / 5, 
      CR: responses.slice(5, 10).reduce((a, b) => a + b, 0) / 5,
      IT: responses.slice(10, 15).reduce((a, b) => a + b, 0) / 5,
      NM: responses.slice(15, 20).reduce((a, b) => a + b, 0) / 5,
    };

    const playstyleResult = [
      categoryScores.SF >= 3 ? 'F' : 'S',
      categoryScores.CR >= 3 ? 'R' : 'C',
      categoryScores.IT >= 3 ? 'T' : 'I',
      categoryScores.NM >= 3 ? 'N' : 'M',
    ].join('-');

    return playstyleResult;
  };

  const handleSubmit = async () => {
    if (responses.includes(null)) {
      Alert.alert('Incomplete', 'Please answer all questions before submitting.');
      return;
    }

    const playstyle = calculatePlaystyle();

    try {
      await axios.put(API_URL, { playstyle });
      Alert.alert('Success', 'Playstyle updated successfully.');
      navigation.navigate('ResultScreen', { playstyle });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update playstyle.');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Playstyle Test" onBackPress={() => navigation.navigate('Main')} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {questions.map((question, index) => (
          <QuestionItem 
            key={index} 
            statement={question} 
            currentIndex={index} 
            onSelect={(value) => handleSelect(index, value)} 
          />
        ))}

        <View style={styles.submitContainer}>
          <SubmitButton onPress={handleSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  submitContainer: {
    marginTop: 20,
    marginBottom: 50,
  },
});

export default TestScreen;