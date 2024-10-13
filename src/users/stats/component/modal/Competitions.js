// its a section list within a modal. section on leagues, section 2 tournaments. items are just competition name, start and end dates and the place of the user. also header and back button as per
import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import BackButton from 'match/frontend/src/common/component/BackButton'; // Importing reusable BackButton component
import ChevronRightButton from 'match/frontend/src/common/component/ChevronRightButton'; // Importing reusable ChevronRightButton component

// Static data for the SectionList with two sections: Leagues and Tournaments
const competitionsData = [
  {
    title: 'Leagues',
    data: [
      {
        id: '1',
        name: 'League Name',
        dates: 'xx/xx - Present',
        position: '1st',
        hasChevron: false // No chevron needed for these items
      },
      {
        id: '2',
        name: 'League Name',
        dates: 'xx/xx - xx/xx',
        position: '2nd',
        hasChevron: false
      },
      {
        id: '3',
        name: 'League Name',
        dates: 'xx/xx - xx/xx',
        position: '3rd',
        hasChevron: false
      }
    ]
  },
  {
    title: 'Tournaments',
    data: [
      {
        id: '1',
        name: 'Competition Name',
        dates: 'xx/xx - Present',
        position: '3rd',
        hasChevron: false
      },
      {
        id: '2',
        name: 'Competition Name',
        dates: 'xx/xx - xx/xx',
        position: '1st',
        hasChevron: false
      },
      {
        id: '3',
        name: 'Competition Name',
        dates: 'xx/xx - xx/xx',
        position: 'QF',
        hasChevron: false
      },
      {
        id: '4',
        name: 'Competition Name',
        dates: 'xx/xx - xx/xx',
        position: 'R16',
        hasChevron: false
      }
    ]
  }
];

const CompetitionsModal = () => {
  // Function to render each competition item in the SectionList
  const renderCompetitionItem = ({ item }) => (
    <View style={styles.competitionItem}>
      {/* Competition Name and Dates */}
      <View style={styles.competitionInfo}>
        <Text style={styles.competitionName}>{item.name}</Text>
        <Text style={styles.competitionDates}>{item.dates}</Text>
      </View>

      {/* Position (Right-Aligned) */}
      <Text style={styles.competitionPosition}>{item.position}</Text>

      {/* Chevron, if applicable */}
      {item.hasChevron && <ChevronRightButton />}
    </View>
  );

  // Function to render section headers (Leagues, Tournaments)
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Back Button and Centered Title */}
      <View style={styles.headerContainer}>
        <BackButton style={styles.backButton} /> {/* Back button to go back */}
        <Text style={styles.headerText}>Competitions</Text>
      </View>

      {/* SectionList for Leagues and Tournaments */}
      <SectionList
        sections={competitionsData}
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderCompetitionItem}
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
    height: 24 // Placeholder size for back button
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for the header
    color: '#000' // Black text color for header
  },
  sectionList: {
    paddingBottom: 16 // Add padding at the bottom for last competition
  },
  sectionHeader: {
    marginTop: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', // Light grey border under section title
    alignItems: 'center' // Center the section header text
  },
  sectionHeaderText: {
    fontSize: 25, // Increased size for section headers
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for the section titles
    color: '#000' // Black text for section headers
  },
  competitionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure even spacing between items
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0' // Light grey border for separation
  },
  competitionInfo: {
    flex: 1 // Competition name and dates will take remaining space
  },
  competitionName: {
    fontSize: 20, // Increased size for competition names
    fontWeight: 'bold',
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for competition names
    color: '#000' // Black text color for competition names
  },
  competitionDates: {
    fontSize: 16, // Increased size for competition dates
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for the dates
    color: '#A3A3A3' // Grey color for competition dates
  },
  competitionPosition: {
    fontSize: 20, // Increased size for competition positions
    fontFamily: 'Exo 2', // Ensure Exo 2 is used for the positions
    color: '#000', // Black text color for competition positions
    textAlign: 'right' // Align this text to the right
  }
});

export default CompetitionsModal;
