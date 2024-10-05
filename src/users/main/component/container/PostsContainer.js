import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PostFilter from 'match/frontend/src/common/PostFilter.js';

const PostFeedContainer = () => {
  return (
    <View style={styles.container}>
      <PostFilter
        sortOption="Oldest"
        onPress={() => console.log('Filter clicked')}
      />

      <FlatList
        data={[]} // Empty array for now, content to be added later
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshing={false} // Placeholder for pull-to-refresh
        onRefresh={() => console.log('Refreshing feed...')} // Placeholder for refresh logic
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingLeft: 20,
    paddingRight: 20
  },
  listContent: {
    paddingBottom: 16
  }
});

export default PostFeedContainer;
