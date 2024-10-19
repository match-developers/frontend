// Performance.js: User performance statistics section with various metrics displayed

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Navigation hook for screen transitions
import axios from 'axios';  // Axios for API calls

const Performance = () => {
  const [stats, setStats] = useState({});  // State to store performance statistics
  const navigation = useNavigation();  // Navigation object to handle screen transitions

  // Fetch user performance statistics from the backend
  useEffect(() => {
    const fetchPerformanceStats = async () => {
      try {
        const response = await axios.get('/user/statistics/update/');  // API call to fetch statistics
        setStats(response.data);  // Update state with fetched data
      } catch (error) {
        console.error('Error fetching performance stats:', error);  // Log error if fetch fails
      }
    };

    fetchPerformanceStats();  // Execute fetch function on component mount
  }, []);

  return (
    <View style={styles.container}>
      {/* Section Title */}
      <Text style={styles.title}>Performance</Text>

      {/* Section Divider */}
      <View style={styles.divider} />

      {/* Matches Played */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Matches Played</Text>
        <Text style={styles.sectionValue}>{stats.mp || 0}</Text> {/* Display total matches played */}
      </View>

      {/* Wins / Draws / Losses */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Win / Draws / Lost</Text>
        <Text style={styles.sectionValue}>
          {`${stats.wins || 0} / ${stats.draws || 0} / ${stats.losses || 0}`}  {/* Display W/D/L */}
        </Text>
      </View>

      {/* Total Points */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Total Points</Text>
        <Text style={styles.sectionValue}>{stats.points_scored || 0}</Text> {/* Display total points */}
      </View>

      {/* Manner Score */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Manner</Text>
        <Text style={styles.sectionValue}>{stats.manner || 0.0}</Text> {/* Display manner score */}
      </View>

      {/* Performance Score */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Performance</Text>
        <Text style={styles.sectionValue}>{stats.performance || 0.0}</Text> {/* Display performance score */}
      </View>

      {/* View Review Section */}
      <TouchableOpacity 
        style={styles.sectionTouchable} 
        onPress={() => navigation.navigate('Reviews')}  // Navigate to Reviews screen on press
      >
        <Text style={styles.sectionLabel}>View Review</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styling for the Performance section
const styles = StyleSheet.create({
  container: {
    flex: 1,  // Fill available space
    backgroundColor: '#fff',  // White background
    padding: 16,  // Inner padding
  },
  title: {
    fontSize: 24,  // Title font size
    fontWeight: 'bold',  // Bold font weight
    textAlign: 'center',  // Center-align title
    marginBottom: 12,  // Space below title
  },
  divider: {
    height: 1,  // Divider height
    backgroundColor: '#000',  // Black divider
    marginVertical: 8,  // Vertical space around divider
  },
  section: {
    flexDirection: 'row',  // Row layout for label and value
    justifyContent: 'space-between',  // Space between label and value
    alignItems: 'center',  // Center-align items vertically
    marginVertical: 8,  // Vertical space between sections
  },
  sectionLabel: {
    fontSize: 16,  // Label font size
    fontWeight: '500',  // Medium font weight
  },
  sectionValue: {
    fontSize: 16,  // Value font size
    fontWeight: '400',  // Regular font weight
  },
  sectionTouchable: {
    marginVertical: 8,  // Vertical space around touchable
  },
});

export default Performance;