// this is a
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// circle size and colour
const circleData = [
  { size: 40, borderColor: '#FFB433' }, // Yellow (largest)
  { size: 35, borderColor: '#FFB433' },
  { size: 30, borderColor: '#FEC966' },
  { size: 25, borderColor: '#A3A3A3' }, // Grey (center)
  { size: 30, borderColor: '#F9786F' },
  { size: 35, borderColor: '#F55E4F' },
  { size: 40, borderColor: '#FF5A00' } // Orange (largest)
];

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
          <TouchableOpacity
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

      {/* Labels (they go below the edge circles saying agree and disagree) */}
      <View style={styles.labelsContainer}>
        <Text style={styles.labelText}>Disagree</Text>
        <Text style={styles.labelText}>Agree</Text>
      </View>
    </View>
  );
};
//it requires a statement above the circles but no default
PlaystyleItem.propTypes = {
  statement: PropTypes.string.isRequired // Required prop for statement text
};
//i customised the styling to match figma
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

export default PlaystyleItem;
