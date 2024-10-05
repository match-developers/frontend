import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowFilterIcon from 'match/frontend/src/common/assets/SVGs/IconArrowFilter';

const PostFilter = ({ sortOption = 'Oldest', onPress }) => {
  return (
    <TouchableOpacity style={styles.filterContainer} onPress={onPress}>
      <Text style={styles.sortByText}>Sort By</Text>
      <ArrowFilterIcon width={12} height={8} style={styles.arrowIcon} />
      <Text style={styles.sortOptionText}>{sortOption}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  sortByText: {
    fontSize: 13,
    fontFamily: 'Exo 2',
    color: '#737373',
    marginRight: 8
  },
  arrowIcon: {
    marginRight: 8
  },
  sortOptionText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Exo 2',
    color: '#000'
  }
});

export default PostFilter;
