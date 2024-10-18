import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const playstyleDescriptions = {
    "S-C-I-M": "This player values structure and discipline, using detailed planning to enhance their performance. They prefer independent challenges where their methodical approach and competitive edge allow them to continuously push their boundaries and achieve personal goals through precision and strategy.",
    
    "S-C-I-N": "With a natural competitive drive, this player thrives on instinct. They appreciate structure to keep them focused but often rely on their talent to navigate challenges. Their competitive nature shines in solo sports, where they can excel without over-planning or strict preparation.",
  
    "S-C-T-M": "This player is a strategic team member who brings a planned, methodical approach to each game. While competitive, they ensure that every move fits into the team's overall strategy. They excel in organized settings, where their attention to detail helps drive the team to success.",
  
    "S-C-T-N": "This player is naturally competitive, enjoying team sports where their instinctive playstyle can shine. They thrive in a structured environment but rely heavily on their ability to react in the moment. Their competitiveness drives them, yet they remain flexible and adaptable in-game.",
  
    "S-R-I-M": "This player is methodical but relaxed, enjoying the process of refining their skills without being overly concerned with competition. They prefer working alone and use a structured approach to focus on personal improvement. The result is a balanced, steady pace toward mastery.",
  
    "S-R-I-N": "This player enjoys a laid-back, instinctive approach to sports. They appreciate structure but prioritize playing for fun rather than results. Independent and self-reliant, they rely on natural talent to guide them through games, maintaining a stress-free environment throughout.",
  
    "S-R-T-M": "This player is a calm, methodical team member who enjoys the balance of structure and teamwork. They approach the game with a steady, calculated mindset, helping the team succeed through careful preparation. While not highly competitive, they ensure their role is well-executed.",
  
    "S-R-T-N": "This easygoing player enjoys the camaraderie of team sports and takes a natural, instinctive approach to the game. While they appreciate structure, they value fun and teamwork above competition. They thrive in environments where they can enjoy the game without pressure.",
  
    "F-C-I-M": "This player is adaptable yet highly competitive, using a methodical approach to refine their performance. Independent by nature, they are driven by personal goals and challenges, enjoying the freedom to adjust their strategy while maintaining a focus on technique and preparation.",
  
    "F-C-I-N": "Highly competitive and instinctive, this player adapts easily to changing situations. They prefer to rely on natural talent rather than detailed planning. Their independence allows them to shine in individual sports, where they can use their flexibility to their advantage.",
  
    "F-C-T-M": "This player is competitive but strategic, balancing flexibility with a methodical approach to team play. They excel when they can adapt to changing situations while still adhering to a broader team strategy. Their focus on winning is supported by careful preparation and adaptability.",
  
    "F-C-T-N": "This player thrives in team environments, using their competitive drive and natural talent to make quick decisions on the field. They adapt easily to new situations, relying on their instincts to guide the team toward victory. They perform best when given the freedom to react in the moment.",
  
    "F-R-I-M": "This player is calm and focused, using a methodical approach to refine their skills while remaining flexible. They enjoy independent challenges and take a relaxed view of competition, prioritizing steady improvement over immediate results. Adaptability helps them stay on track.",
  
    "F-R-I-N": "A relaxed and flexible player, they rely on their natural instincts to navigate games with ease. Independence is key to their enjoyment, as they prefer to play without rigid structures or intense competition. They value the experience of playing over winning, staying stress-free.",
  
    "F-R-T-M": "This player brings a calm, methodical approach to the team, ensuring structure without being rigid. They enjoy the flexibility of adapting to team dynamics while contributing strategically. Their relaxed attitude makes them a dependable teammate who values preparation over competition.",
  
    "F-R-T-N": "This player values fun and teamwork, bringing a natural, easygoing style to their sport. They are flexible and adaptable, thriving in team settings where collaboration is key. Their relaxed nature allows them to enjoy the game without pressure, focusing on team harmony over competition.",
  };

const ResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { playstyle } = route.params;
  const description = playstyleDescriptions[playstyle] || "Playstyle not found.";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{playstyle}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity 
        style={styles.retryButton} 
        onPress={() => navigation.navigate('TestScreen')}
      >
        <Text style={styles.buttonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  retryButton: {
    backgroundColor: '#FFB433',
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default ResultScreen;