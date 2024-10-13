// this is the component for one item on the list of playstyle questions. its just a statement and 7 circles beneath it.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// Circle size and updated colors
const circleData = [
  { size: 40, borderColor: '#E58A8B' }, // Left side red (largest)
  { size: 35, borderColor: '#E58A8B' }, // Left side red
  { size: 30, borderColor: '#E58A8B' }, // Left side red
  { size: 25, borderColor: '#A3A3A3' }, // Grey (center)
  { size: 30, borderColor: '#5DCC78' }, // Right side green
  { size: 35, borderColor: '#5DCC78' }, // Right side green
  { size: 40, borderColor: '#5DCC78' } // Right side green (largest)
];

//the statement is the string required below
const PlaystyleItem = ({ statement }) => {
  return (
    <View style={styles.container}>
      {/* Statement */}
      <View style={styles.statementContainer}>
        <Text style={styles.statementText}>{statement}</Text>
      </View>

      {/* Circles */}
      <View style={styles.circlesContainer}>
        {circleData.map((circle, index) => (
          <View
            key={index}
            style={[
              styles.circle,
              {
                width: circle.size,
                height: circle.size,
                borderColor: circle.borderColor
              }
            ]}
          />
        ))}
      </View>
    </View>
  );
};

PlaystyleItem.propTypes = {
  statement: PropTypes.string.isRequired // Required prop for statement text
};

// Custom styles
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
    borderWidth: 1,
    backgroundColor: 'transparent'
  }
});

export default PlaystyleItem;
