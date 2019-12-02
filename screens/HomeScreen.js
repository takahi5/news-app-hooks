import React, { useState, useEffect } from 'react';

import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

import ListItem from '../components/ListItem';
import Loading from '../components/Loading';

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const HomeScreen = props => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    const res = await axios.get(URL);
    setArticles(res.data.articles);
    setLoading(false);
  };

  const refreshArticles = async () => {
    setRefreshing(true);
    await fetchArticles();
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
            onPress={() =>
              props.navigation.navigate('Article', { article: item })
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={refreshArticles}
        refreshing={refreshing}
      />
      {loading && <Loading />}
    </SafeAreaView>
  );
};

export default HomeScreen;
