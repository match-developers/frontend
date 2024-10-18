import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// 질문 배열 정의
const questions = {
  flexibleScheduling: [
    "I tend to participate in sports on specific dates and times.",
    "I would rather join a scheduled competition than play pickup games.",
    "I tend to only participate in sports that have been planned well beforehand.",
    "I would like to find out match details the day before I am scheduled to play.",
    "I would feel uncomfortable joining a game when my schedule changes."
  ],
  competitiveRelaxed: [
    "I prefer competing in sports when it is challenging.",
    "When I compete in sports, my top priority is winning.",
    "If I am not trying my hardest, there is no point in participating at all.",
    "I would rather compete at a high level than have fun and make friends.",
    "I play sports to compete and add some pressure to everyday life."
  ],
  independentTeamBased: [
    "There’s no better feeling than celebrating a win with your team.",
    "I enjoy meeting new people and making friends through sports.",
    "I prefer to participate in team sports.",
    "Knowing that the result of a game up to only me is discomforting.",
    "I tend to avoid 1v1 sports as much as I can."
  ],
  naturalMethodical: [
    "I don’t prefer to go with the flow when it comes to sports participation.",
    "I'm not sure about the idea of spontaneously playing a game near me.",
    "There should always be a strategy in place before the match begins.",
    "I like to plan, prepare, and execute strategies when I compete in sports.",
    "I want to keep track of my performance and make plans to improve."
  ]
};

// 전체 질문 배열 합치기
const allQuestions = [
  ...questions.flexibleScheduling,
  ...questions.competitiveRelaxed,
  ...questions.independentTeamBased,
  ...questions.naturalMethodical
];

// 원 버튼 데이터
const circleData = [
  { size: 40, borderColor: '#FFB433' },
  { size: 35, borderColor: '#FEC966' },
  { size: 30, borderColor: '#A3A3A3' },
  { size: 35, borderColor: '#F9786F' },
  { size: 40, borderColor: '#FF5A00' }
];

const QuestionItem = ({ currentIndex, onSelect }) => {
  const question = allQuestions[currentIndex];
  const [selectedValue, setSelectedValue] = useState(null);

  const handlePress = (value) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <View style={styles.container}>
      {/* 질문 텍스트 */}
      <View style={styles.statementContainer}>
        <Text style={styles.statementText}>{question}</Text>
      </View>

      {/* 원 버튼 */}
      <View style={styles.circlesContainer}>
        {circleData.map((circle, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.circle,
              {
                width: circle.size,
                height: circle.size,
                borderColor: circle.borderColor,
                backgroundColor: selectedValue === index + 1 ? '#FFD34D' : 'transparent'
              }
            ]}
            onPress={() => handlePress(index + 1)}
          />
        ))}
      </View>

      {/* 선택 레이블 */}
      <View style={styles.labelsContainer}>
        <Text style={styles.labelText}>Disagree</Text>
        <Text style={styles.labelText}>Agree</Text>
      </View>
    </View>
  );
};

QuestionItem.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 8,
    width: '100%'
  },
  statementContainer: {
    alignItems: 'center',
    marginBottom: 8
  },
  statementText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    letterSpacing: 2.1
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginBottom: 8
  },
  circle: {
    borderRadius: 50,
    borderWidth: 1
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 358,
    marginTop: 8
  },
  labelText: {
    fontSize: 10,
    color: 'black',
    textAlign: 'center'
  }
});

export default QuestionItem;