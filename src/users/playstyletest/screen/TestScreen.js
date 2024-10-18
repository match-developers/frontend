import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // axios for API requests
import Header from 'match/frontend/src/common/component/PageHeader'; 
import QuestionItem from '../component/QuestionItem'; 
import Submit from '../component/button/Submit'; 

const API_URL = 'http://your-backend-url/user/playstyle/update/';

const categoryMapping = {
  0: 'SF', 
  5: 'CR', 
  10: 'IT', 
  15: 'NM', 
};

const shuffleQuestions = (questions) => {
  return questions.sort(() => Math.random() - 0.5);
};

const TestScreen = () => {
  const navigation = useNavigation();
  const [responses, setResponses] = useState(Array(20).fill(null)); 
  const [questions, setQuestions] = useState([]); 

  useEffect(() => {
    const allQuestions = [
      ...QuestionItem.questions.flexibleScheduling,
      ...QuestionItem.questions.competitiveRelaxed,
      ...QuestionItem.questions.independentTeamBased,
      ...QuestionItem.questions.naturalMethodical,
    ];
    setQuestions(shuffleQuestions(allQuestions));
  }, []);

  const handleSelect = (index, value) => {
    const updatedResponses = [...responses];
    updatedResponses[index] = value;
    setResponses(updatedResponses);
  };

  const calculatePlaystyle = () => {
    const categoryScores = { SF: 0, CR: 0, IT: 0, NM: 0 };

    responses.forEach((score, index) => {
      const category = categoryMapping[Math.floor(index / 5) * 5]; 
      categoryScores[category] += score;
    });

    const playstyleResult = Object.keys(categoryScores).map((key) =>
      categoryScores[key] / 5 >= 3 ? key[1] : key[0]
    );

    return playstyleResult.join('-'); 
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
      <Header 
        title="Playstyle Test" 
        onBackPress={() => navigation.navigate('Main')} 
      />

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
          <Submit onPress={handleSubmit} />
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