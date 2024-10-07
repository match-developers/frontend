// this is just a seaerchbar component only the styling has been done
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchIcon from 'match/frontend/assets/SVGs/default/IconSearch';

const SearchBar = ({ placeholderText = 'Search...' }) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholderText}
        placeholderTextColor="#000000"
      />
      <SearchIcon width={24} height={24} style={styles.magnifyingGlass} />{' '}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 40,
    backgroundColor: '#E6E6E6',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Drop shadow for Android
    marginVertical: 16
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'Exo 2',
    color: '#000'
  },
  magnifyingGlass: {
    width: 24,
    height: 24
  }
});

export default SearchBar;
