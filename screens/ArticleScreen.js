import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ArticleScreen</Text>
    </SafeAreaView>
  );
};

export default ArticleScreen;
