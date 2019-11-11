import React, { useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  const [articles, setArticles] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  console.log(Constants.manifest.extra.newsApiKey);
  const refreshArticles = () => {
    setRefreshing(true);
    setArticles(dummyArticles);
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={refreshArticles}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
}
