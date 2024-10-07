// just a container with a flatlist defintion ready fo ritems(posts) to be added. spacing and padding styling applied.
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

const PostFeedContainer = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[]} // Empty array for now, content to be added later
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshing={false} // Placeholder for pull-to-refresh, flatlists are useful because you can refresh teh container by srcoll ing up at the top of it.
        onRefresh={() => console.log('Refreshing feed...')} // Placeholder for refresh logic
      />
    </View>
  );
};

// Styling
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
