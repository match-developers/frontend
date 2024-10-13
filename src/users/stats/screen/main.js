// the screens a section list. three sections are social (all modals), performance (manners and performance are modals), and reviews (modal)
//the interactions are either click a chevron to see a modal or go back. the logic for the mathces played/wdl's/points scored values needs to be done too.

import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import BackButton from 'match/frontend/src/common/component/BackButton'; // Importing reusable BackButton component
import ChevronRightButton from 'match/frontend/src/common/component/ChevronRightButton'; // Importing reusable ChevronRightButton component

// Static data for the SectionList with three sections: Social, Performance, and Player Reviews
const statisticsData = [
  {
    title: 'Social',
    data: [
      { id: '1', label: 'Followers & following', hasChevron: true },
      { id: '2', label: 'Clubs', hasChevron: true },
      { id: '3', label: 'Playstyle', hasChevron: true },
      { id: '4', label: 'Competitions', hasChevron: true }
    ]
  },
  {
    title: 'Performance',
    data: [
      { id: '5', label: 'Matches played', value: 'x' },
      { id: '6', label: 'Wins/Draws/Losses', value: 'x/x/x' },
      { id: '7', label: 'Points Scored', value: 'x' },
      { id: '8', label: 'Manners', hasChevron: true },
      { id: '9', label: 'Performance', hasChevron: true }
    ]
  },
  {
    title: 'Player Reviews',
    data: [{ id: '10', label: 'View Reviews', hasChevron: true }]
  }
];

// Function to render each statistic item in the SectionList
const renderStatisticItem = ({ item }) => (
  <View style={styles.statItem}>
    {/* Label for each item */}
    <Text style={styles.statLabel}>{item.label}</Text>

    {/* If the item has a Chevron, render the ChevronRightButton */}
    {item.hasChevron ? (
      <ChevronRightButton />
    ) : (
      // If no Chevron, render the value (e.g., Matches Played, Wins/Draws/Losses)
      <Text style={styles.statValue}>{item.value}</Text>
    )}
  </View>
);

// Function to render section headers (Social, Performance, Player Reviews)
const renderSectionHeader = ({ section: { title } }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
);

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with Back Button and Centered Title */}
      <View style={styles.headerContainer}>
        <BackButton style={styles.backButton} /> {/* Back button to go back */}
        <Text style={styles.headerText}>Statistics</Text>
      </View>

      {/* SectionList for rendering the statistics */}
      <SectionList
        sections={statisticsData}
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderStatisticItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.sectionList}
      />
    </View>
  );
};

// Styles for Set B Code (Pure styling, no logic)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // Background color
    padding: 16 // Padding around the entire container
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the title
    marginBottom: 16,
    position: 'relative' // Allows positioning of the back button
  },
  backButton: {
    position: 'absolute',
    left: 0, // Back button positioned to the left
    width: 24,
    height: 24 // Size of back button
  },
  headerText: {
    fontSize: 25, // Ensure header text is 25pt
    fontWeight: 'bold',
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for the header
    color: '#000' // Black text color for header
  },
  sectionList: {
    paddingBottom: 16 // Add padding at the bottom for the last item
  },
  sectionHeader: {
    marginTop: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', // Light grey border under section title
    alignItems: 'center' // Center the section header text
  },
  sectionHeaderText: {
    fontSize: 25, // Ensure section headers are 25pt
    fontWeight: 'bold',
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for the section titles
    color: '#000' // Black text for section headers
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure even spacing between items
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0' // Light grey border for separation
  },
  statLabel: {
    fontSize: 20, // 20pt for statistic labels
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for labels
    color: '#000' // Black text color for statistic labels
  },
  statValue: {
    fontSize: 20, // 20pt for statistic values
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for values
    color: '#000', // Black text color for statistic values
    textAlign: 'right' // Align the value to the right
  }
});

export default StatisticsScreen;
