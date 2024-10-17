// the porfile picture, a text saying username your profile is: and then the letters. underneath a description of the playstyle and under that, a retake test button.
// the names (lettercodes) and desciriptions are all in this file. 'mbti' letters have been removed.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileAvatar from 'match/frontend/src/users/main/component/button/Profile.js';

const playstyles = {
  SCIM: {
    name: 'Scheduling, Competitive, Independent, Methodical',
    description:
      'This player values structure and discipline, using detailed planning to enhance their performance. They prefer independent challenges where their methodical approach and competitive edge allow them to continuously push their boundaries and achieve personal goals through precision and strategy.'
  },
  SCIN: {
    name: 'Scheduling, Competitive, Independent, Natural',
    description:
      'With a natural competitive drive, this player thrives on instinct. They appreciate structure to keep them focused but often rely on their talent to navigate challenges. Their competitive nature shines in solo sports, where they can excel without over-planning or strict preparation.'
  },
  SCTM: {
    name: 'Scheduling, Competitive, Team-Based, Methodical',
    description:
      "This player is a strategic team member who brings a planned, methodical approach to each game. While competitive, they ensure that every move fits into the team's overall strategy. They excel in organized settings, where their attention to detail helps drive the team to success."
  },
  SCTN: {
    name: 'Scheduling, Competitive, Team-Based, Natural',
    description:
      'This player is naturally competitive, enjoying team sports where their instinctive playstyle can shine. They thrive in a structured environment but rely heavily on their ability to react in the moment. Their competitiveness drives them, yet they remain flexible and adaptable in-game.'
  },
  SRIM: {
    name: 'Scheduling, Relaxed, Independent, Methodical',
    description:
      'This player is methodical but relaxed, enjoying the process of refining their skills without being overly concerned with competition. They prefer working alone and use a structured approach to focus on personal improvement. The result is a balanced, steady pace toward mastery.'
  },
  SRIN: {
    name: 'Scheduling, Relaxed, Independent, Natural',
    description:
      'This player enjoys a laid-back, instinctive approach to sports. They appreciate structure but prioritize playing for fun rather than results. Independent and self-reliant, they rely on natural talent to guide them through games, maintaining a stress-free environment throughout.'
  },
  SRTM: {
    name: 'Scheduling, Relaxed, Team-Based, Methodical',
    description:
      'This player is a calm, methodical team member who enjoys the balance of structure and teamwork. They approach the game with a steady, calculated mindset, helping the team succeed through careful preparation. While not highly competitive, they ensure their role is well-executed.'
  },
  SRTN: {
    name: 'Scheduling, Relaxed, Team-Based, Natural',
    description:
      'This easygoing player enjoys the camaraderie of team sports and takes a natural, instinctive approach to the game. While they appreciate structure, they value fun and teamwork above competition. They thrive in environments where they can enjoy the game without pressure.'
  },
  FCIM: {
    name: 'Flexible, Competitive, Independent, Methodical',
    description:
      'This player is adaptable yet highly competitive, using a methodical approach to refine their performance. Independent by nature, they are driven by personal goals and challenges, enjoying the freedom to adjust their strategy while maintaining a focus on technique and preparation.'
  },
  FCIN: {
    name: 'Flexible, Competitive, Independent, Natural',
    description:
      'Highly competitive and instinctive, this player adapts easily to changing situations. They prefer to rely on natural talent rather than detailed planning. Their independence allows them to shine in individual sports, where they can use their flexibility to their advantage.'
  },
  FCTM: {
    name: 'Flexible, Competitive, Team-Based, Methodical',
    description:
      'This player is competitive but strategic, balancing flexibility with a methodical approach to team play. They excel when they can adapt to changing situations while still adhering to a broader team strategy. Their focus on winning is supported by careful preparation and adaptability.'
  },
  FCTN: {
    name: 'Flexible, Competitive, Team-Based, Natural',
    description:
      'This player thrives in team environments, using their competitive drive and natural talent to make quick decisions on the field. They adapt easily to new situations, relying on their instincts to guide the team toward victory. They perform best when given the freedom to react in the moment.'
  },
  FRIM: {
    name: 'Flexible, Relaxed, Independent, Methodical',
    description:
      'This player is calm and focused, using a methodical approach to refine their skills while remaining flexible. They enjoy independent challenges and take a relaxed view of competition, prioritizing steady improvement over immediate results. Adaptability helps them stay on track.'
  },
  FRIN: {
    name: 'Flexible, Relaxed, Independent, Natural',
    description:
      'A relaxed and flexible player, they rely on their natural instincts to navigate games with ease. Independence is key to their enjoyment, as they prefer to play without rigid structures or intense competition. They value the experience of playing over winning, staying stress-free.'
  },
  FRTM: {
    name: 'Flexible, Relaxed, Team-Based, Methodical',
    description:
      'This player brings a calm, methodical approach to the team, ensuring structure without being rigid. They enjoy the flexibility of adapting to team dynamics while contributing strategically. Their relaxed attitude makes them a dependable teammate who values preparation over competition.'
  },
  FRTN: {
    name: 'Flexible, Relaxed, Team-Based, Natural',
    description:
      'This player values fun and teamwork, bringing a natural, easygoing style to their sport. They are flexible and adaptable, thriving in team settings where collaboration is key. Their relaxed nature allows them to enjoy the game without pressure, focusing on team harmony over competition.'
  }
};

const PlaystyleResult = () => {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <ProfileAvatar imageUri={null} />

      {/* Username and playstyle statement */}
      <Text style={styles.usernameText}>
        {/* Username will be dynamically inserted */}
        Username, Your Match Playstyle is:
      </Text>

      {/* Playstyle letters */}
      <View style={styles.playstyleButtonContainer}>
        {/* The playstyle result letters will be dynamically inserted */}
        <Text style={[styles.letters, styles.greenLetter]}>S</Text>
        <Text style={[styles.letters, styles.yellowLetter]}>C</Text>
        <Text style={[styles.letters, styles.orangeLetter]}>I</Text>
        <Text style={[styles.letters, styles.redLetter]}>M</Text>
      </View>

      {/* Description */}
      <Text style={styles.descriptionText}>
        {/* Description will be dynamically inserted based on the playstyle */}
        Description for the playstyle result will go here.
      </Text>
    </View>
  );
};

// Styles for PlaystyleResult component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 16
  },
  usernameText: {
    fontSize: 32,
    fontFamily: 'Exo 2',
    textAlign: 'center',
    marginBottom: 16,
    width: '100%'
  },
  playstyleButtonContainer: {
    padding: 16,
    borderWidth: 1.6,
    borderColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 64,
    alignSelf: 'center'
  },
  letters: {
    fontSize: 100,
    fontWeight: '600',
    fontFamily: 'Exo 2',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.8, height: 0.8 },
    textShadowRadius: 2
  },
  greenLetter: {
    color: '#5DCC78'
  },
  yellowLetter: {
    color: '#FFC766'
  },
  orangeLetter: {
    color: '#FF9466'
  },
  redLetter: {
    color: '#FF5E4F'
  },
  descriptionText: {
    fontSize: 20,
    fontFamily: 'Exo 2',
    textAlign: 'center',
    padding: 16,
    color: '#000',
    width: '100%'
  }
});

export default PlaystyleResult;
